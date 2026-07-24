(function(){
  var GLOSSARY = {
    'agentic':'mang tính tự chủ (agent tự hành động, tự gọi tool)',
    'chain-of-thought':'chuỗi suy luận từng bước',
    'static analysis':'phân tích tĩnh (không chạy chương trình)',
    'decompose':'phân rã',
    'decomposition':'sự phân rã (chia nhỏ nhiệm vụ)',
    'prioritize':'ưu tiên',
    'dependency':'sự phụ thuộc',
    'dependencies':'các phụ thuộc',
    'judgment-heavy':'đòi hỏi phán đoán nhiều',
    'mechanical':'mang tính máy móc, rập khuôn',
    'prompt chaining':'chuỗi prompt nối tiếp',
    'routing':'định tuyến',
    'orchestrator-workers':'mô hình điều phối - tác nhân thực thi',
    'unpredictably':'một cách không đoán trước được',
    'dynamically':'một cách linh hoạt, động',
    'structured export':'bản xuất dữ liệu có cấu trúc',
    'manifest':'bản kê khai (danh sách trạng thái)',
    'inject':'tiêm, chèn vào',
    'injects':'tiêm, chèn vào',
    'coordinator':'agent điều phối',
    'subagent':'agent con',
    'subagents':'các agent con',
    'concurrently':'đồng thời, song song',
    'harness':'hệ thống điều khiển agent (bên dưới)',
    'infrastructure':'hạ tầng',
    'allowedtools':'danh sách tool được phép dùng',
    'agentdefinitions':'định nghĩa cấu hình agent',
    'delegate':'giao việc, uỷ quyền',
    'delegating':'việc giao nhiệm vụ',
    'delegation':'sự uỷ quyền/giao việc',
    'invoke':'gọi (thực thi)',
    'mechanism':'cơ chế',
    'recursive':'đệ quy',
    'nested':'lồng nhau',
    'observability':'khả năng quan sát hệ thống',
    'hierarchy':'hệ phân cấp',
    'hierarchies':'các hệ phân cấp',
    'aggregate':'tổng hợp, gộp lại',
    'attribution':'quy kết nguồn gốc',
    'synthesis':'sự tổng hợp',
    'synthesis agent':'agent tổng hợp',
    'provenance':'nguồn gốc thông tin',
    'format-aware':'nhận biết định dạng',
    'render':'hiển thị, dựng ra',
    'prose':'văn xuôi',
    'tabular':'dạng bảng',
    'query':'câu truy vấn/câu hỏi',
    'distribution':'sự phân bố',
    'evolving':'đang thay đổi, tiến hoá',
    'classifier':'bộ phân loại',
    'retraining':'huấn luyện lại',
    'quality criteria':'tiêu chí chất lượng',
    'prescriptive':'mang tính áp đặt, chỉ dẫn cứng nhắc',
    'adapt':'thích nghi',
    'purpose-specific':'chuyên biệt theo mục đích',
    'narrowly-scoped':'phạm vi hẹp',
    'input/output contract':'hợp đồng đầu vào/đầu ra',
    'enum':'kiểu liệt kê (danh sách giá trị cố định)',
    'pre-classification':'phân loại trước',
    'stateless':'không lưu trạng thái',
    'isolated context':'ngữ cảnh bị cô lập riêng biệt',
    'latency':'độ trễ',
    'overhead':'chi phí phát sinh thêm',
    'source index':'chỉ mục nguồn',
    'excerpt':'trích đoạn',
    'hub':'trung tâm',
    'event bus':'hệ thống truyền sự kiện',
    'sibling':'agent ngang hàng',
    'timestamp':'dấu thời gian',
    'metadata':'siêu dữ liệu',
    'contradictory':'mâu thuẫn',
    'methodological':'thuộc về phương pháp luận',
    'contested':'còn tranh cãi',
    'corroborate':'củng cố, xác nhận thêm',
    'grep':'công cụ tìm kiếm nội dung file',
    'glob':'công cụ tìm file theo tên/đường dẫn',
    'mcp':'giao thức kết nối công cụ (Model Context Protocol)',
    'mcp server':'máy chủ MCP',
    'mcp resource':'tài nguyên MCP',
    'resources':'tài nguyên',
    'discoverable':'có thể khám phá được',
    'typed':'có kiểu dữ liệu rõ ràng',
    'authentication':'xác thực',
    'catalog':'danh mục',
    'monolith':'khối hệ thống duy nhất, không tách rời',
    'keyword-based routing':'định tuyến theo từ khoá',
    'tool selection':'việc chọn công cụ',
    'role-relevant':'liên quan đến vai trò',
    'scope':'phạm vi',
    'resume':'tiếp tục (một phiên làm việc)',
    'resumed':'đã được tiếp tục',
    'resuming':'việc tiếp tục lại',
    'session':'phiên làm việc',
    'transcript':'bản ghi hội thoại',
    'stale':'đã cũ, lỗi thời',
    'outdated':'đã lỗi thời',
    'escalate':'chuyển cho người xử lý',
    'escalating':'việc chuyển cấp xử lý',
    'escalation':'việc chuyển cấp xử lý',
    'discretion':'quyền tự quyết định',
    'policy exception':'ngoại lệ chính sách',
    'sentiment analysis':'phân tích cảm xúc',
    'rules engine':'hệ thống luật cứng nhắc',
    'handoff':'bàn giao',
    'root cause':'nguyên nhân gốc rễ',
    'recommended action':'hành động được đề xuất',
    'deterministic':'tất định (kết quả luôn giống nhau)',
    'hook':'móc can thiệp ở tầng code',
    'intercept':'chặn lại giữa chừng',
    'intercepts':'chặn lại giữa chừng',
    'compliance':'sự tuân thủ quy định',
    'compliance-grade':'đạt chuẩn tuân thủ',
    'graceful degradation':'suy giảm nhẹ nhàng, vẫn hoạt động một phần',
    'backend':'hệ thống xử lý phía sau',
    'timeout':'hết thời gian chờ',
    'acknowledge':'thừa nhận',
    'unilaterally':'một cách đơn phương, tự ý',
    'trivial':'đơn giản, không đáng kể',
    'messages array':'mảng danh sách tin nhắn',
    'iserror':'cờ báo lỗi',
    'errorcategory':'loại lỗi',
    'transient':'tạm thời, thoáng qua',
    'validation':'sự kiểm định, xác thực',
    'permission':'quyền hạn',
    'isretryable':'cờ cho biết có thể thử lại',
    'exception':'ngoại lệ (lỗi trong code)',
    'agentic loop':'vòng lặp agentic',
    'decision tree':'cây quyết định',
    'sliding window':'cửa sổ trượt',
    'narrative description':'mô tả tường thuật',
    'prune':'cắt tỉa (bớt dữ liệu dư thừa)',
    'pruning':'việc cắt tỉa dữ liệu',
    'paraphrasing':'diễn giải lại bằng lời khác',
    'vector database':'cơ sở dữ liệu vector',
    'headless':'chạy không giao diện đồ hoạ',
    'invocation':'một lần gọi/thực thi',
    'fixture':'dữ liệu mẫu dùng cho test',
    'fixture conventions':'quy ước dữ liệu mẫu',
    'conventions':'quy ước',
    'fork_session':'phân nhánh phiên làm việc',
    'branch':'nhánh',
    'branches':'các nhánh',
    'baseline':'điểm chuẩn, mốc ban đầu',
    'cross-contamination':'nhiễu chéo lẫn nhau',
    'entry point':'điểm vào của luồng code',
    'entry points':'các điểm vào của luồng code',
    'wrapper module':'module bao ngoài',
    'wrapper modules':'các module bao ngoài',
    'alias':'bí danh, tên gọi khác',
    'aliased':'được gán bí danh',
    're-exported':'được xuất lại dưới tên khác',
    'summarize':'tóm tắt',
    'degraded context':'ngữ cảnh đã suy giảm chất lượng',
    'abstraction':'sự trừu tượng hoá',
    'interface':'giao diện lập trình',
    'base class':'lớp cơ sở',
    'trace':'truy vết',
    'tracing':'việc truy vết',
    'scratchpad':'bộ nhớ nháp, ghi chú tạm',
    'durable':'bền vững, lâu dài',
    'well-scoped':'có phạm vi rõ ràng',
    'adaptive':'có khả năng thích nghi',
    'planning blind':'lập kế hoạch khi chưa có thông tin',
    'fanning out':'toả ra chạy song song nhiều nhánh',
    'old_string':'chuỗi văn bản cũ cần khớp để thay thế',
    'replace_all':'thay thế tất cả các chỗ khớp',
    'append':'thêm vào cuối',
    'appending':'việc thêm vào cuối',
    'stack trace':'dấu vết ngăn xếp lỗi',
    'localized':'đã được khoanh vùng',
    'plan mode':'chế độ lập kế hoạch',
    'coverage':'độ phủ, mức bao quát',
    'threshold':'ngưỡng',
    'recall':'độ bao phủ (tỷ lệ phát hiện đúng)',
    'confidence':'độ tin cậy',
    'severity metadata':'siêu dữ liệu mức độ nghiêm trọng',
    'batch api':'API xử lý theo lô',
    'messages api':'API xử lý theo thời gian thực',
    'asynchronous':'bất đồng bộ',
    'sla':'cam kết chất lượng dịch vụ',
    'few-shot':'ví dụ minh hoạ mẫu (few-shot)',
    'canonical format':'định dạng chuẩn',
    'temperature':'tham số độ ngẫu nhiên (temperature)',
    'aggregate accuracy':'độ chính xác tổng hợp',
    'segment':'phân khúc',
    'field':'trường dữ liệu',
    'fields':'các trường dữ liệu',
    'versioned':'có phiên bản',
    'effective date':'ngày có hiệu lực',
    'superseded':'đã bị thay thế',
    'hallucinated':'bị bịa ra (model tự tạo thông tin sai)',
    'nullable':'được phép để trống (null)',
    'required field':'trường bắt buộc',
    'calculated field':'trường được tính toán',
    'stated field':'trường được nêu rõ trong nguồn',
    'reconcile':'đối chiếu, dung hoà số liệu',
    'tool_choice':'tham số ép buộc chọn tool',
    'prerequisite':'điều kiện tiên quyết',
    'escape hatch':'lối thoát dự phòng',
    'categorical':'thuộc dạng phân loại',
    'field-level confidence':'độ tin cậy theo từng trường dữ liệu',
    'calibrate':'hiệu chỉnh',
    'labeled validation set':'tập dữ liệu kiểm định đã gán nhãn',
    'heuristic':'phương pháp suy nghiệm, ước lượng theo kinh nghiệm',
    'heuristics':'các phương pháp suy nghiệm',
    'worst-case':'trường hợp xấu nhất',
    'cadence':'nhịp độ, tần suất',
    'safety margin':'biên độ an toàn',
    'reliability':'độ tin cậy của hệ thống',
    'context_length_exceeded':'lỗi vượt quá độ dài ngữ cảnh',
    'chunk':'chia nhỏ thành từng phần',
    'chunking':'việc chia nhỏ dữ liệu',
    'resubmit':'gửi lại',
    'max_tokens':'tham số giới hạn độ dài output',
    'context window':'cửa sổ ngữ cảnh',
    'race condition':'tình huống tranh chấp truy cập đồng thời',
    'tool call':'lệnh gọi công cụ',
    'tool calls':'các lệnh gọi công cụ',
    'tool description':'mô tả công cụ',
    'downstream':'ở tầng xử lý phía sau',
    'upstream':'ở tầng xử lý phía trước',
    'context isolation':'sự cô lập ngữ cảnh giữa các agent',
    'brittle':'dễ vỡ, thiếu ổn định',
    'workaround':'giải pháp tình thế, xử lý tạm',
    'root-cause fix':'giải pháp sửa tận gốc',
    'systemic':'mang tính hệ thống, lan rộng',
    'spawn':'khởi tạo (tạo mới một tiến trình/agent con)',
    'spawning':'việc khởi tạo agent con',
    'plausible':'nghe có vẻ hợp lý (nhưng có thể sai)'
  };

  var terms = Object.keys(GLOSSARY).sort(function(a,b){ return b.length - a.length; });
  var escaped = terms.map(function(t){ return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
  var GLOSSARY_RE = new RegExp('\\b(' + escaped.join('|') + ')\\b', 'gi');

  function shouldSkip(el){
    if(!el) return false;
    return !!el.closest('.term, .vi-icon, script, style');
  }

  function wrapTerms(root){
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if(shouldSkip(node.parentElement)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    var n;
    while((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function(node){
      var text = node.nodeValue;
      GLOSSARY_RE.lastIndex = 0;
      if(!GLOSSARY_RE.test(text)) return;
      GLOSSARY_RE.lastIndex = 0;

      var frag = document.createDocumentFragment();
      var lastIndex = 0;
      var m;
      while((m = GLOSSARY_RE.exec(text))){
        var word = m[0];
        var key = word.toLowerCase();
        if(m.index > lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
        var span = document.createElement('span');
        span.className = 'term';
        span.textContent = word;
        span.setAttribute('data-vi', GLOSSARY[key] || '');
        frag.appendChild(span);
        lastIndex = m.index + word.length;
        if(GLOSSARY_RE.lastIndex === m.index) GLOSSARY_RE.lastIndex++;
      }
      if(lastIndex < text.length) frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function findViUnit(icon){
    var next = icon.nextElementSibling;
    if(next && next.classList && next.classList.contains('glossary-zone')) return next;
    return icon.closest('.glossary-zone') || icon.parentElement;
  }

  function wireViIcons(){
    document.querySelectorAll('.vi-icon[data-vi]').forEach(function(icon){
      if(icon._viWired) return;
      icon._viWired = true;
      icon.setAttribute('role','button');
      icon.setAttribute('tabindex','0');
      icon.setAttribute('aria-label','Toggle Vietnamese translation');
      icon.title = 'Click to show/hide Vietnamese translation';
      function toggleVi(){
        var box = icon._viBox;
        if(!box){
          var unit = findViUnit(icon);
          box = document.createElement('div');
          box.className = 'vi-inline';
          box.textContent = icon.getAttribute('data-vi');
          unit.appendChild(box);
          icon._viBox = box;
        }
        var showing = box.classList.toggle('show');
        icon.classList.toggle('active', showing);
      }
      icon.addEventListener('click', toggleVi);
      icon.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleVi(); }
      });
    });
  }

  function ensureTermTooltip(){
    var el = document.getElementById('viTooltip');
    if(!el){
      el = document.createElement('div');
      el.id = 'viTooltip';
      el.setAttribute('role', 'tooltip');
      document.body.appendChild(el);
    }
    return el;
  }

  var termTooltipShownAt = 0;

  function hideTermTooltip(){
    var el = document.getElementById('viTooltip');
    if(el) el.classList.remove('show');
    document.querySelectorAll('.term.term-open').forEach(function(t){ t.classList.remove('term-open'); });
  }

  function hideTermTooltipIfSettled(){
    // ignore scroll/resize events fired as a side effect of just opening the tooltip
    // (e.g. the browser auto-scrolling a focused element into view, which can
    // dispatch its 'scroll' event ~200ms after the fact)
    if(Date.now() - termTooltipShownAt < 500) return;
    hideTermTooltip();
  }

  function showTermTooltip(termEl){
    var text = termEl.getAttribute('data-vi');
    if(!text) return;
    var el = ensureTermTooltip();
    el.textContent = text;
    el.classList.add('show');
    termTooltipShownAt = Date.now();

    document.querySelectorAll('.term.term-open').forEach(function(t){ if(t !== termEl) t.classList.remove('term-open'); });
    termEl.classList.add('term-open');

    var margin = 10;
    var rect = termEl.getBoundingClientRect();
    var tw = el.offsetWidth, th = el.offsetHeight;
    var left = rect.left + rect.width / 2 - tw / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
    var top = rect.top - th - 10;
    if(top < margin){ top = rect.bottom + 10; }
    el.style.left = left + 'px';
    el.style.top = top + 'px';
  }

  function wireTermTooltips(){
    document.querySelectorAll('.term[data-vi]').forEach(function(term){
      if(term._termWired) return;
      term._termWired = true;
      term.setAttribute('role', 'button');
      term.setAttribute('tabindex', '0');
      term.setAttribute('aria-label', 'Show Vietnamese translation');
      term.addEventListener('click', function(e){
        e.stopPropagation();
        if(term.classList.contains('term-open')) hideTermTooltip();
        else showTermTooltip(term);
      });
      term.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          if(term.classList.contains('term-open')) hideTermTooltip();
          else showTermTooltip(term);
        } else if(e.key === 'Escape'){
          hideTermTooltip();
        }
      });
    });
  }

  document.addEventListener('click', hideTermTooltip);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') hideTermTooltip(); });
  window.addEventListener('scroll', hideTermTooltipIfSettled, true);
  window.addEventListener('resize', hideTermTooltipIfSettled);

  function activateTab(id, opts){
    opts = opts || {};
    var panel = document.getElementById('tab-' + id);
    if(!panel) return;
    hideTermTooltip();
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.toggle('active', p.id === 'tab-' + id); });
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-tab') === id); });
    try{ localStorage.setItem('cca-f-active-tab', id); }catch(e){}
    if(!opts.silent){
      var wrap = document.querySelector('.wrap');
      if(wrap) wrap.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
  window.ccafActivateTab = activateTab;

  function initTabs(){
    document.querySelectorAll('.tab-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ activateTab(btn.getAttribute('data-tab')); });
    });

    var initial = 'plan';
    var hash = location.hash.replace('#', '');
    if(hash){
      if(document.getElementById('tab-' + hash)){
        initial = hash;
      } else {
        var m = hash.match(/^(d[1-5])-p/);
        if(m) initial = m[1];
      }
    } else {
      try{ var saved = localStorage.getItem('cca-f-active-tab'); if(saved && document.getElementById('tab-' + saved)) initial = saved; }catch(e){}
    }
    activateTab(initial, {silent:true});
    if(hash){
      setTimeout(function(){
        var el = document.getElementById(hash);
        if(el) el.scrollIntoView({behavior:'smooth', block:'center'});
      }, 60);
    }
  }

  // badges/links that point at #dN-pM must switch to that domain's tab first
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#d"]');
    if(!a) return;
    var hash = a.getAttribute('href').replace('#', '');
    var m = hash.match(/^(d[1-5])/);
    if(m) activateTab(m[1], {silent:true});
  }, true);

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.glossary-zone').forEach(function(el){ wrapTerms(el); });

    var toggle = document.getElementById('viToggle');
    if(toggle){
      toggle.addEventListener('change', function(){
        document.body.classList.toggle('hide-vi', !toggle.checked);
        hideTermTooltip();
      });
    }

    wireViIcons();
    wireTermTooltips();
    initTabs();
  });
})();
