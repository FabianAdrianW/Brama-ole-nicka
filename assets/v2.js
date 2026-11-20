/* v2: liczniki, zdjęcie w „Polecamy”, pojawianie się sekcji, pętla opinii */
(()=>{
  const $$=s=>[...document.querySelectorAll(s)];
  const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* opinie: druga kopia do płynnej pętli */
  const tr=document.querySelector('.qrow__track');
  if(tr){[...tr.children].forEach(li=>{const c=li.cloneNode(true);c.setAttribute('aria-hidden','true');tr.appendChild(c)})}

  /* liczniki */
  const fmt=(v,d)=>d?v.toFixed(d).replace('.',','):Math.round(v).toString();
  const count=el=>{const to=parseFloat(el.dataset.count),d=+el.dataset.dec||0,suf=el.dataset.suf||'';if(calm){return}
    const t0=performance.now(),dur=1600;const step=t=>{const k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,4);el.textContent=fmt(to*e,d)+suf;if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  const io=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){count(e.target);o.unobserve(e.target)}}),{threshold:.6});
  $$('[data-count]').forEach(el=>io.observe(el));

  /* Polecamy: zdjęcie po lewej zmienia się za kursorem */
  const imgs=$$('.picks__stage img'),rows=$$('.pk');
  let want=null;
  const show=k=>{want=k;rows.forEach(r=>r.classList.toggle('on',r.dataset.k===k));const im=imgs.find(i=>i.dataset.k===k);if(!im)return;
    const swap=()=>{if(want!==k)return;imgs.forEach(i=>i.classList.toggle('on',i===im))};
    (im.complete&&im.naturalWidth)?swap():(im.decode?im.decode().then(swap,swap):im.addEventListener('load',swap,{once:true}))};
  rows.forEach(r=>{r.addEventListener('mouseenter',()=>show(r.dataset.k));r.addEventListener('focus',()=>show(r.dataset.k))});
  if(rows.length&&matchMedia('(min-width:861px)').matches)show('0');

  /* intro: brama */
  const gate=document.getElementById('gate');
  if(gate&&document.documentElement.classList.contains('intro')){
    const done=()=>{gate.remove();document.documentElement.classList.remove('intro')};
    const skip=()=>{gate.classList.add('is-skip');setTimeout(done,700)};
    gate.addEventListener('click',skip);addEventListener('keydown',skip,{once:true});
    setTimeout(done,2700);
  }else if(gate){gate.remove()}

  /* hero: film w tle (nie przy oszczędzaniu danych i ograniczeniu ruchu) */
  const v=document.getElementById('hero-vid');
  const c=navigator.connection||{};
  if(v&&!calm&&!c.saveData&&!/2g/.test(c.effectiveType||'')){
    v.src=matchMedia('(max-width:759px)').matches?v.dataset.m:v.dataset.d;
    v.addEventListener('playing',()=>v.classList.add('is-on'),{once:true});
    const go=()=>v.play().catch(()=>{});
    setTimeout(go,document.documentElement.classList.contains('intro')?1400:300);
    new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?go():v.pause())).observe(v);
  }

  /* przyjęcia: akordeon okazji */
  const acc=$$('.acc__it');
  acc.forEach(it=>{const on=()=>acc.forEach(x=>x.classList.toggle('is-on',x===it));it.addEventListener('mouseenter',on);it.addEventListener('focusin',on)});

  /* pojawianie się bloków */
  const rv=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');o.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  $$('.tiles li,.about__ph .ap,.occ__grid .panel,.price,.gal li,.find,.offer,.facts__dl,.quotes__list li,.line4').forEach((el,i)=>{el.setAttribute('data-reveal','');el.style.transitionDelay=(i%6)*70+'ms';rv.observe(el)});
})();
