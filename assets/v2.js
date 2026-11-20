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
  const show=k=>{imgs.forEach(i=>i.classList.toggle('on',i.dataset.k===k));rows.forEach(r=>r.classList.toggle('on',r.dataset.k===k))};
  rows.forEach(r=>{r.addEventListener('mouseenter',()=>show(r.dataset.k));r.addEventListener('focus',()=>show(r.dataset.k))});
  if(rows.length&&matchMedia('(min-width:861px)').matches)show('0');

  /* pojawianie się bloków */
  const rv=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');o.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  $$('.tiles li,.about__ph .ap,.occ__grid .panel,.price,.gal li,.find').forEach((el,i)=>{el.setAttribute('data-reveal','');el.style.transitionDelay=(i%6)*70+'ms';rv.observe(el)});
})();
