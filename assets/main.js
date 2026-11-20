(()=>{
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const nav=$('#nav'),bar=$('#bar');
  const sc=()=>{nav&&nav.classList.toggle('is-scrolled',scrollY>8);bar&&bar.classList.toggle('on',scrollY>innerHeight*.5)};
  addEventListener('scroll',sc,{passive:true});sc();

  /* wskaźnik w nawigacji */
  const links=$$('#links a'),ind=$('.links__bar');let cur=null;
  const move=a=>{if(!ind)return;if(!a){ind.style.setProperty('--s',0);return}ind.style.setProperty('--x',a.offsetLeft+14+'px');ind.style.setProperty('--s',(a.offsetWidth-28)/100)};
  let hov=null,lock=0;
  const mark=a=>{if(Date.now()<lock)return;cur=a||null;links.forEach(l=>l.removeAttribute('aria-current'));cur&&cur.setAttribute('aria-current','true');if(!hov)move(cur)};
  const page=document.body.dataset.page;
  if(page){mark(links.find(l=>l.dataset.page===page))}
  else{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)mark(links.find(l=>l.hash==='#'+e.target.id&&l.getAttribute('href').startsWith('#')))}),{rootMargin:'-45% 0px -50% 0px'});
    $$('main > section[id]').forEach(s=>io.observe(s));
  }
  links.forEach(l=>{
    if(matchMedia('(hover:hover)').matches)l.addEventListener('mouseenter',()=>{hov=l;move(l)});l.addEventListener('focus',()=>move(l));
    /* klik w kotwicę: kreska zostaje pod klikniętym linkiem, aż strona dojedzie */
    l.addEventListener('click',()=>{if(l.getAttribute('href').includes('#')&&!l.dataset.page){mark(l);lock=Date.now()+1400}});
  });
  $('#links')&&$('#links').addEventListener('mouseleave',()=>{hov=null;move(cur)});
  addEventListener('resize',()=>move(cur));addEventListener('load',()=>move(cur));

  /* zakładki menu */
  const tabs=$$('#tabs a');
  if(tabs.length){
    const io2=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;tabs.forEach(t=>{const on=t.hash==='#'+e.target.id;t.classList.toggle('on',on);if(on)t.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'})})}),{rootMargin:'-30% 0px -60% 0px'});
    $$('.cat[id],#m-napoje').forEach(c=>io2.observe(c));
    const dn=$('#tabs a[href="#m-napoje"]');dn&&dn.addEventListener('click',()=>{$('#m-napoje').open=true});
  }

  /* menu mobilne */
  const bur=$('#burger'),dr=$('#drawer');
  if(bur&&dr){
    const set=o=>{bur.setAttribute('aria-expanded',o);bur.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');dr.classList.toggle('is-open',o);if(o)dr.querySelector('a').focus()};
    bur.addEventListener('click',()=>set(bur.getAttribute('aria-expanded')!=='true'));
    dr.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
    document.addEventListener('keydown',e=>{if(!dr.classList.contains('is-open'))return;if(e.key==='Escape'){set(false);bur.focus()}
      if(e.key==='Tab'){const f=[bur,...dr.querySelectorAll('a')],i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
  }

  /* elementy rysowane po wejściu w widok */
  const seen=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');o.unobserve(e.target)}}),{threshold:.35});
  $$('.map,[data-reveal]').forEach(el=>seen.observe(el));

  /* kopiowanie */
  $$('[data-copy]').forEach(b=>{const t=b.textContent;b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='Skopiowano'}catch{b.textContent='Zaznacz i skopiuj'}setTimeout(()=>b.textContent=t,2000)})});

  /* daty od dziś */
  const today=new Date().toISOString().slice(0,10);$$('input[type="date"]').forEach(d=>d.min=today);

  /* wybór z linku, np. ?okazja=Komunia */
  $$('[data-prefill]').forEach(a=>a.addEventListener('click',()=>{const [id,val]=a.dataset.prefill.split('|');const el=document.getElementById(id);if(el)el.value=val}));

  /* formularze -> gotowy e-mail */
  $$('form[data-mail]').forEach(form=>{
    const tel=form.querySelector('input[type="tel"]'),err=form.querySelector('.err'),ok=form.querySelector('.ok');
    form.addEventListener('submit',e=>{
      e.preventDefault();if(form.website&&form.website.value)return;
      const good=tel&&tel.value.replace(/\D/g,'').length>=9;tel.setAttribute('aria-invalid',!good);err&&err.classList.toggle('show',!good);if(!good){tel.focus();return}
      const enc=encodeURIComponent,nl='%0D%0A';
      const lines=['Dzień dobry,','',form.dataset.intro||'',''];
      form.querySelectorAll('[data-label]').forEach(el=>{const v=(el.value||'').trim();lines.push(el.dataset.label+': '+(v||'do ustalenia'))});
      const first=form.querySelector('[data-subject-from]');
      const subj=form.dataset.mail+(first&&first.value?': '+first.value:'');
      location.href=`mailto:kontakt@bramaolesnicka.pl?subject=${enc(subj)}&body=${lines.map(enc).join(nl)}`;
      ok&&ok.classList.add('show');
    });
  });
})();
