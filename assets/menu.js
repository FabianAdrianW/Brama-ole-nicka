/* Karta (menu.html): zakładki i przesuwanie na telefonie, menu boczne na komputerze, alergeny. */
(()=>{
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const panels=$$('.mp'),pills=$$('#mpills a'),side=$$('.mside a[data-go]'),box=$('#mpanels');
  if(!panels.length)return;
  const desk=matchMedia('(min-width:900px)'),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let cur=0;

  /* kropki pod kategorią (telefon) */
  const dots=document.createElement('p');dots.className='mswipe';dots.setAttribute('aria-hidden','true');
  dots.innerHTML=panels.map(()=>'<i></i>').join('')+'<span>przesuń, by zmienić</span>';
  box.appendChild(dots);
  const dotEls=[...dots.querySelectorAll('i')];

  const mark=i=>{
    [pills,side].forEach(list=>list.forEach((a,j)=>a.setAttribute('aria-current',j===i?'true':'false')));
    dotEls.forEach((d,j)=>d.classList.toggle('on',j===i));
    const p=pills[i];if(p&&!desk.matches){const ul=p.closest('ul');ul.scrollTo({left:p.offsetLeft-(ul.clientWidth-p.offsetWidth)/2,behavior:reduce?'auto':'smooth'})}
  };
  const setHash=i=>{try{history.replaceState(null,'','#'+panels[i].id)}catch(e){}};

  const show=(i,opts={})=>{
    i=Math.max(0,Math.min(panels.length-1,i));
    const dir=i<cur?'from-left':'';
    cur=i;
    panels.forEach((p,j)=>{p.classList.toggle('is-on',j===i);p.classList.toggle('from-left',j===i&&dir==='from-left')});
    mark(i);setHash(i);
    if(opts.scroll){
      const nav=$('.nav'),mn=$('.mnav');const top=box.getBoundingClientRect().top+scrollY-(nav?nav.offsetHeight:70)-(mn?mn.offsetHeight:60)+8;
      if(scrollY>top+10||opts.force)scrollTo({top,behavior:reduce?'auto':'smooth'});
    }
  };

  const go=(i,e)=>{
    if(e)e.preventDefault();
    if(desk.matches){panels[i].scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});mark(i);setHash(i);cur=i}
    else show(i,{scroll:true});
  };
  $$('[data-go]').forEach(a=>a.addEventListener('click',e=>go(+a.dataset.go,e)));

  /* start: kategoria z adresu (#miesne) */
  const fromHash=()=>{const i=panels.findIndex(p=>'#'+p.id===location.hash);return i<0?0:i};
  const hadHash=panels.some(p=>'#'+p.id===location.hash);
  const show0=fromHash();
  panels.forEach((p,j)=>p.classList.toggle('is-on',j===show0));cur=show0;mark(show0);
  if(hadHash)requestAnimationFrame(()=>{desk.matches?panels[cur].scrollIntoView({block:'start'}):show(cur,{scroll:true,force:true})});
  addEventListener('hashchange',()=>{const i=fromHash();if(i!==cur)go(i)});

  /* przesuwanie palcem */
  let x0=null,y0=0,t0=0;
  box.addEventListener('touchstart',e=>{if(desk.matches)return;const t=e.touches[0];x0=t.clientX;y0=t.clientY;t0=Date.now()},{passive:true});
  box.addEventListener('touchend',e=>{
    if(x0===null||desk.matches)return;const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
    if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4&&Date.now()-t0<700){show(cur+(dx<0?1:-1),{scroll:true})}
  },{passive:true});

  /* komputer: aktywna kategoria w menu bocznym */
  const io=new IntersectionObserver(es=>{if(!desk.matches)return;es.forEach(en=>{if(en.isIntersecting){const i=+en.target.dataset.i;cur=i;mark(i)}})},{rootMargin:'-35% 0px -55% 0px'});
  panels.forEach(p=>io.observe(p));
  desk.addEventListener('change',()=>show(cur));

  /* alergeny */
  const dlg=$('#msheet');
  if(dlg&&dlg.showModal){
    $$('[data-al]').forEach(b=>b.addEventListener('click',()=>dlg.showModal()));
    dlg.querySelector('[data-close]').addEventListener('click',()=>dlg.close());
    dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  }
})();
