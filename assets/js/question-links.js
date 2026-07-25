(function(){
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function groupByPrinciple(questions){
    var byPid = {};
    questions.forEach(function(q){
      (q.principles || []).forEach(function(pid){
        (byPid[pid] = byPid[pid] || []).push(q);
      });
    });
    return byPid;
  }

  function makeViButton(text, onToggle){
    var wrap = document.createElement('span');
    wrap.className = 'rq-vi-wrap';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rq-vi-btn';
    btn.innerHTML = '<svg class="flag-vn" viewBox="0 0 30 20" width="16" height="11" aria-hidden="true"><rect width="30" height="20" fill="#da251d"/><polygon points="15,4 16.76,9.53 22.57,9.53 17.9,13 19.66,18.53 15,15.06 10.34,18.53 12.1,13 7.43,9.53 13.24,9.53" fill="#ffcd00"/></svg> Dịch';

    var box = document.createElement('div');
    box.className = 'rq-vi-box';
    box.textContent = text;

    btn.addEventListener('click', function(){
      var showing = box.classList.toggle('show');
      btn.classList.toggle('active', showing);
      if (onToggle) onToggle(showing);
    });

    wrap.appendChild(btn);
    wrap.appendChild(box);
    return wrap;
  }

  function renderQuestionItem(q){
    var letters = Object.keys(q.options).sort();
    var isSetA = q.quizFile.indexOf('practice-exam') > -1;
    var quizName = isSetA ? 'Practice Exam' : 'Interactive Quiz';
    var focusId = q.uid.replace(/^b\d+-/, '');

    var viSetA = isSetA ? (window.VI_TRANSLATIONS_A || {})[focusId] : null;
    var viSetB = !isSetA ? (window.VI_TRANSLATIONS_B || {})[focusId] : null;
    var questionVi = isSetA ? (viSetA ? viSetA.q : '') : (viSetB ? viSetB.q : '');
    var explanationVi = viSetA ? viSetA.e : '';
    var optionsVi = isSetA ? (viSetA ? viSetA.o : null) : (viSetB ? viSetB.o : null);

    var explainText = q.explanation ? q.explanation : ('Correct answer: ' + q.correct + '.');

    var optsHtml = letters.map(function(letter){
      var optVi = optionsVi && optionsVi[letter];
      var optViHtml = optVi ? '<div class="rq-opt-vi">' + escapeHtml(optVi) + '</div>' : '';
      return '<li data-letter="' + letter + '">' + escapeHtml(letter) + '. ' + escapeHtml(q.options[letter]) + optViHtml + '</li>';
    }).join('');

    var item = document.createElement('div');
    item.className = 'related-q-item';
    item.dataset.correct = q.correct;

    var qp = document.createElement('p');
    qp.className = 'rq-q';
    qp.textContent = q.question;
    var srcSpan = document.createElement('span');
    srcSpan.className = 'rq-src';
    srcSpan.textContent = q.quizLabel;
    qp.appendChild(srcSpan);
    if (questionVi) {
      qp.appendChild(makeViButton(questionVi, function(showing){
        item.querySelectorAll('.rq-opt-vi').forEach(function(el){ el.classList.toggle('show', showing); });
      }));
    }
    item.appendChild(qp);

    var ul = document.createElement('ul');
    ul.className = 'rq-opts';
    ul.innerHTML = optsHtml;
    item.appendChild(ul);

    var explainP = document.createElement('p');
    explainP.className = 'rq-explain';
    explainP.textContent = explainText;
    if (explanationVi) explainP.appendChild(makeViButton(explanationVi));
    item.appendChild(explainP);

    var revealBtn = document.createElement('button');
    revealBtn.type = 'button';
    revealBtn.className = 'rq-reveal';
    revealBtn.textContent = 'Show answer';
    revealBtn.addEventListener('click', function(){
      var li = ul.querySelector('li[data-letter="' + q.correct + '"]');
      if (li) li.classList.add('correct');
      explainP.classList.add('show');
      revealBtn.disabled = true;
      revealBtn.textContent = 'Answer shown';
    });
    item.appendChild(revealBtn);

    var openLink = document.createElement('a');
    openLink.href = q.quizFile + '?focus=' + encodeURIComponent(focusId);
    openLink.target = '_blank';
    openLink.rel = 'noopener';
    openLink.textContent = 'Open in ' + quizName + ' ↗';
    openLink.style.marginLeft = '8px';
    openLink.style.fontSize = '0.78rem';
    item.appendChild(openLink);

    return item;
  }

  function renderAll(){
    var questions = window.CCAF_QUESTIONS || [];
    if (!questions.length) return;
    var byPid = groupByPrinciple(questions);

    document.querySelectorAll('.principle[id]').forEach(function(principleEl){
      var pid = principleEl.id;
      var qs = byPid[pid] || [];

      if (!qs.length) {
        var empty = document.createElement('div');
        empty.className = 'related-q-empty';
        empty.textContent = 'No linked practice questions yet.';
        principleEl.appendChild(empty);
        return;
      }

      var details = document.createElement('details');
      details.className = 'related-q';

      var summary = document.createElement('summary');
      summary.innerHTML = 'Related questions <span class="count">' + qs.length + '</span>';
      details.appendChild(summary);

      var body = document.createElement('div');
      body.className = 'related-q-body';
      details.appendChild(body);

      var built = false;
      details.addEventListener('toggle', function(){
        if (details.open && !built) {
          qs.forEach(function(q){ body.appendChild(renderQuestionItem(q)); });
          built = true;
        }
      });

      principleEl.appendChild(details);
    });
  }

  document.addEventListener('DOMContentLoaded', renderAll);
})();
