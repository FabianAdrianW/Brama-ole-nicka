/* Galeria (lightbox) i paralaksa zdjęcia w „O nas”. Tylko strona główna. */
(()=>{
  const lb=document.getElementById('lb');if(!lb)return;
  const links=[...document.querySelectorAll('[data-lb]')],img=lb.querySelector('img'),cap=lb.querySelector('p');
  let i=0,last=null;
  const show=n=>{i=(n+links.length)%links.length;const a=links[i];img.src=a.getAttribute('href');img.alt=a.querySelector('img').alt;cap.textContent=a.closest('figure').querySelector('figcaption').textContent};
  const open=n=>{last=document.activeElement;show(n);lb.hidden=false;requestAnimationFrame(()=>lb.classList.add('is-open'));lb.querySelector('.lb__x').focus();document.documentElement.style.overflow='hidden'};
  const close=()=>{lb.classList.remove('is-open');document.documentElement.style.overflow='';setTimeout(()=>{lb.hidden=true},350);last&&last.focus()};
  links.forEach((a,n)=>a.addEventListener('click',e=>{e.preventDefault();open(n)}));
  lb.querySelector('.lb__x').onclick=close;
  lb.querySelector('.lb__p').onclick=()=>show(i-1);
  lb.querySelector('.lb__n').onclick=()=>show(i+1);
  lb.addEventListener('click',e=>{if(e.target===lb)close()});
  addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(i-1);else if(e.key==='ArrowRight')show(i+1)});

  const par=document.querySelector('[data-par]');
  if(par&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    const f=()=>{const r=par.parentElement.getBoundingClientRect(),p=(r.top+r.height/2-innerHeight/2)/innerHeight;par.style.transform=`translateY(${(-8-p*10).toFixed(2)}%)`};
    addEventListener('scroll',f,{passive:true});f();
  }
})();

/* Opinie: licznik, gwiazdki, poświata za kursorem */
(()=>{
  const band=document.querySelector('.proof');if(!band)return;
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fmt=(v,d,suf)=>v.toFixed(d).replace('.',',')+(suf||'');
  const run=()=>{
    band.classList.add('is-in');
    band.querySelectorAll('[data-count]').forEach(el=>{
      const to=parseFloat(el.dataset.count),d=+(el.dataset.dec||0),suf=el.dataset.suf||'';
      if(reduce){el.textContent=fmt(to,d,suf);return}
      const t0=performance.now(),dur=1600;
      const tick=t=>{const k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=fmt(to*e,d,suf);if(k<1)requestAnimationFrame(tick)};
      requestAnimationFrame(tick);
    });
  };
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){run();io.disconnect()}},{threshold:.35});
  io.observe(band);
  if(!reduce)band.addEventListener('pointermove',e=>{const r=band.getBoundingClientRect();band.style.setProperty('--mx',(e.clientX-r.left)+'px');band.style.setProperty('--my',(e.clientY-r.top)+'px')});
})();
