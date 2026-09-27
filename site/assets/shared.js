/* Shared behaviour: expand/collapse all, theme toggle, copy buttons, localStorage persistence for [data-persist]. */
(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem('aw-theme');if(t==='dark'||t==='light')root.setAttribute('data-theme',t);if(localStorage.getItem('aw-present')==='1')root.classList.add('present');}catch(e){}
  function isDark(){var a=root.getAttribute('data-theme');if(a)return a==='dark';return window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches;}
  function copyText(txt,btn){
    var old=btn.textContent;function ok(){btn.textContent='Copied';setTimeout(function(){btn.textContent=old;},1500);}
    function fallback(){var ta=document.createElement('textarea');ta.value=txt;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';
      document.body.appendChild(ta);ta.select();try{document.execCommand('copy');ok();}catch(e){btn.textContent='Select and copy';}document.body.removeChild(ta);}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(ok,fallback);}else{fallback();}
  }
  window.awCopy=copyText;
  document.addEventListener('click',function(e){
    var el=e.target.closest?e.target.closest('[data-expand-all],[data-collapse-all],[data-theme-toggle],[data-present-toggle],[data-copy]'):null;if(!el)return;
    if(el.hasAttribute('data-expand-all')){[].forEach.call(document.querySelectorAll('details.section'),function(d){d.open=true;});}
    else if(el.hasAttribute('data-collapse-all')){[].forEach.call(document.querySelectorAll('details.section'),function(d){d.open=false;});}
    else if(el.hasAttribute('data-theme-toggle')){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('aw-theme',n);}catch(err){}}
    else if(el.hasAttribute('data-present-toggle')){var on=root.classList.toggle('present');try{localStorage.setItem('aw-present',on?'1':'0');}catch(err){}}
    else if(el.hasAttribute('data-copy')){var src=document.getElementById(el.getAttribute('data-copy'));if(src)copyText(src.value!==undefined&&src.tagName!=='PRE'?src.value:src.innerText,el);}
  });
  function bindPersist(scope){
    [].forEach.call((scope||document).querySelectorAll('[data-persist]'),function(el){
      if(el.__awBound)return;el.__awBound=true;var k='aw:'+el.getAttribute('data-persist');
      try{var v=localStorage.getItem(k);if(v!==null){if(el.type==='checkbox')el.checked=(v==='1');else el.value=v;}}catch(e){}
      function save(){try{localStorage.setItem(k,el.type==='checkbox'?(el.checked?'1':'0'):el.value);}catch(e){}}
      el.addEventListener('input',save);el.addEventListener('change',save);
    });
  }
  window.awBindPersist=bindPersist;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){bindPersist();});else bindPersist();
})();
