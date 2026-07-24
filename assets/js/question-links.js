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

  function renderQuestionItem(q){
    var letters = Object.keys(q.options).sort();
    var optsHtml = letters.map(function(letter){
      return '<li data-letter="' + letter + '">' + escapeHtml(letter) + '. ' + escapeHtml(q.options[letter]) + '</li>';
    }).join('');
    var explainText = q.explanation ? q.explanation : ('Correct answer: ' + q.correct + '.');
    var quizName = q.quizFile.indexOf('practice-exam') > -1 ? 'Practice Exam' : 'Interactive Quiz';
    var focusId = q.uid.replace(/^b\d+-/, '');

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
    item.appendChild(qp);

    var ul = document.createElement('ul');
    ul.className = 'rq-opts';
    ul.innerHTML = optsHtml;
    item.appendChild(ul);

    var explainP = document.createElement('p');
    explainP.className = 'rq-explain';
    explainP.textContent = explainText;
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
