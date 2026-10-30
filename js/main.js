const WORK = {
  architecture: {
    label: 'Architecture',
    intro: 'Studio and independent projects exploring fractured massing and fragmented form.',
    projects: [
      {year:2026, title:'RE:FLUX', desc:'Studio Project — Collective Housing',
        detail:'Studio project on collective housing. Replace this with your process notes, drawings, and renders.'},
      {year:2025, title:'CHIAROSCURO', desc:'Studio Project — Concert Hall',
        detail:'Studio project on a concert hall. Add plans, sections, and renders here.'},
      {year:2025, title:'STRUCTURAL STUDY', desc:'Studio Project — Systemic Study',
        detail:'Studio project as a systemic study. Add diagrams, models, and notes here.'},
      {year:2024, title:'ALTORIS', desc:'Studio Project — Observation Site',
        detail:'Studio project on an observation site. Swap in images and a short write-up.'}
    ]
  },
  design: {
    label: 'Design',
    intro: 'Generative and computational design work.',
    projects: [
      {year:'202X', title:'ABERRATION SERIES', desc:'Procedural Primitives',
        detail:'This series tries to explore the limits of procedurally manipulated primitives and their expression. Manually altered geometries intertwine with each other, creating spaces and forms never achievable before. Ambiances are introduced through exotic and eccentric colores and textures, combining personal references with a homogeneous touch.',
        images:[
          {src:'../img/aberration/1-kos-x-ch.jpg', title:'KOS X CH'},
          {src:'../img/aberration/2-axaria.jpg', title:'AxaRia'},
          {src:'../img/aberration/3-grave.jpg', title:'GRaVE'},
          {src:'../img/aberration/4-glance-part1.jpg', title:'GLANCE PART.1'},
          {src:'../img/aberration/5-steeps.jpg', title:'ST[EE]PS'}
        ]},
      {year:2026, title:'GROWTH', desc:'Procedural Architecture',
        detail:'Procedural architecture study. Add renders or a definition breakdown.'}
    ]
  },
  research: {
    label: 'Research',
    intro: 'Simulation and material-behaviour studies.',
    projects: [
      {year:2025, title:'Wind Propagation Field Study', desc:'Vector-field displacement across a point matrix — Grasshopper',
        detail:'Wind propagation simulated across a point matrix using vector-field displacement in Grasshopper. Add your visualisations or a short methodology note.'},
      {year:2024, title:'Fracture Notes', desc:'Material behaviour under fragmentation',
        detail:'Notes on how materials behave under fragmentation. Add sketches, references, or test results.'}
    ]
  },
  extra: {
    label: 'Extra',
    intro: 'Creative coding — procedural graphics and audio-visual work.',
    projects: [
      {year:2026, title:'Audio-Reactive Terrain', desc:'Raymarched SDF terrain driven by the Web Audio API — GLSL',
        detail:'Raymarched SDF terrain with fbm-driven displacement, reacting to audio input via the Web Audio API. Add a video or a shader breakdown.'},
      {year:2025, title:'Fbm Studies', desc:'Procedural noise experiments — GLSL',
        detail:'Procedural noise experiments in GLSL. Add a clip or a code snippet.'}
    ]
  }
};

function fadeReplace(el, updateFn, dur){
  dur = dur || 200;
  el.style.transition = 'opacity ' + dur + 'ms ease';
  el.style.opacity = 0;
  setTimeout(()=>{
    updateFn();
    requestAnimationFrame(()=>{ el.style.opacity = 1; });
  }, dur);
}

function renderWork(cat){
  const data = WORK[cat];
  document.getElementById('work-title').textContent = data.label;
  document.getElementById('work-intro').textContent = data.intro;
  const years = [...new Set(data.projects.map(p=>p.year))].sort((a,b)=>b-a);
  const yearList = document.getElementById('year-list');
  yearList.innerHTML = '<button class="year-btn active" data-year="all">All</button>' +
    years.map(y=>`<button class="year-btn" data-year="${y}">${y}</button>`).join('');
  renderProjects(data.projects,'all');
  yearList.querySelectorAll('.year-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      yearList.querySelectorAll('.year-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      fadeReplace(document.getElementById('project-list'), ()=>renderProjects(data.projects, btn.dataset.year));
    });
  });
}
function renderProjects(list, year){
  const filtered = year==='all' ? list : list.filter(p=>String(p.year)===String(year));
  const container = document.getElementById('project-list');
  container.innerHTML = filtered.map(p=>`
    <div class="project-item">
      <button class="project-row" aria-expanded="false">
        <span class="project-year">${p.year}</span>
        <span class="project-title">${p.title}</span>
        <span class="project-desc">${p.desc}</span>
        <span class="project-toggle" aria-hidden="true">+</span>
      </button>
      <div class="project-panel">
        <div class="project-panel-inner"><p>${p.detail}</p>${p.images ? galleryHTML(p.images) : ''}</div>
      </div>
    </div>`).join('');
  container.querySelectorAll('.project-row').forEach(row=>{
    row.addEventListener('click',()=>{
      const item = row.closest('.project-item');
      const open = item.classList.toggle('open');
      row.setAttribute('aria-expanded', open);
    });
  });
  container.querySelectorAll('.gallery').forEach(initGallery);
}

/* ---------- image gallery (horizontal slider + full-screen view) ---------- */
function galleryHTML(images){
  return `<div class="gallery">
    <button class="gal-arrow gal-prev" aria-label="Previous image">←</button>
    <div class="gal-track">` + images.map((im,i)=>`
      <figure class="gal-slide">
        <button class="gal-open" data-i="${i}" aria-label="View ${im.title} full screen">
          <img src="${im.src}" alt="${im.title}" loading="lazy">
        </button>
        <figcaption>${im.title}</figcaption>
      </figure>`).join('') + `
    </div>
    <button class="gal-arrow gal-next" aria-label="Next image">→</button>
  </div>`;
}

function initGallery(gal){
  const track = gal.querySelector('.gal-track');
  const prev = gal.querySelector('.gal-prev');
  const next = gal.querySelector('.gal-next');
  const slides = gal.querySelectorAll('.gal-slide');
  const items = [...slides].map(s=>({
    src: s.querySelector('img').getAttribute('src'),
    title: s.querySelector('figcaption').textContent
  }));
  function sync(){
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
  }
  prev.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth, behavior:'smooth'}));
  next.addEventListener('click',()=>track.scrollBy({left: track.clientWidth, behavior:'smooth'}));
  track.addEventListener('scroll',sync,{passive:true});
  window.addEventListener('resize',sync);
  sync();
  gal.querySelectorAll('.gal-open').forEach(btn=>{
    btn.addEventListener('click',()=>{
      openLightbox(items, +btn.dataset.i, i=>{
        track.scrollTo({left: i*track.clientWidth, behavior:'auto'});
      });
    });
  });
}

let lb = null;
function openLightbox(items, start, onClose){
  if(!lb){
    const el = document.createElement('div');
    el.className = 'lightbox';
    el.setAttribute('role','dialog');
    el.setAttribute('aria-modal','true');
    el.setAttribute('aria-hidden','true');
    el.innerHTML = `
      <button class="lb-close" aria-label="Close">×</button>
      <button class="lb-arrow lb-prev" aria-label="Previous image">←</button>
      <figure class="lb-figure"><img alt=""><figcaption></figcaption></figure>
      <button class="lb-arrow lb-next" aria-label="Next image">→</button>`;
    document.body.appendChild(el);
    lb = {el, img: el.querySelector('img'), cap: el.querySelector('figcaption'), items:[], i:0, onClose:null};
    el.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation(); lbShow(lb.i-1);});
    el.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation(); lbShow(lb.i+1);});
    el.querySelector('.lb-close').addEventListener('click',closeLightbox);
    el.addEventListener('click',e=>{ if(e.target.closest('img, .lb-arrow, .lb-close, figcaption')) return; closeLightbox(); });
    document.addEventListener('keydown',e=>{
      if(!lb.el.classList.contains('open')) return;
      if(e.key==='Escape') closeLightbox();
      else if(e.key==='ArrowLeft') lbShow(lb.i-1);
      else if(e.key==='ArrowRight') lbShow(lb.i+1);
    });
  }
  lb.items = items; lb.onClose = onClose;
  lbShow(start);
  lb.el.classList.add('open');
  lb.el.setAttribute('aria-hidden','false');
  document.documentElement.style.overflow = 'hidden';
}
function lbShow(i){
  const n = lb.items.length;
  lb.i = (i + n) % n;
  lb.img.src = lb.items[lb.i].src;
  lb.img.alt = lb.items[lb.i].title;
  lb.cap.textContent = lb.items[lb.i].title;
}
function closeLightbox(){
  lb.el.classList.remove('open');
  lb.el.setAttribute('aria-hidden','true');
  document.documentElement.style.overflow = '';
  if(lb.onClose) lb.onClose(lb.i);
}

function closeMobileNav(){
  document.querySelector('.nav-list').classList.remove('open');
  document.querySelector('.has-dropdown').classList.remove('open');
}

document.querySelector('.dropdown-btn').addEventListener('click',(e)=>{
  e.stopPropagation();
  document.querySelector('.has-dropdown').classList.toggle('open');
});
document.addEventListener('click',()=>{
  document.querySelector('.has-dropdown').classList.remove('open');
});
document.querySelector('.nav-toggle').addEventListener('click',()=>{
  document.querySelector('.nav-list').classList.toggle('open');
});
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function(){
  const main = document.querySelector('main .view');
  if(main) main.classList.add('active');
  const workCat = document.body.dataset.work;
  if(workCat && WORK[workCat]) renderWork(workCat);

  /* fade the page in, 300ms */
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=> document.body.classList.add('page-loaded'));
  });
});

/* fade the page out, then navigate, for internal nav links (300ms) */
document.addEventListener('click', function(e){
  const link = e.target.closest('a[data-wipe]');
  if(!link || link.target === '_blank') return;
  e.preventDefault();
  document.body.classList.remove('page-loaded');
  setTimeout(()=>{ window.location.href = link.href; }, 300);
});

/* custom cursor: crosshair follows pointer, plus glyph rotates 45deg over clickable elements */
(function(){
  var lineV = document.getElementById('cursor-line-v');
  var lineH = document.getElementById('cursor-line-h');
  var plus = document.getElementById('cursor-plus');

  document.addEventListener('mousemove', function(e){
    var x = e.clientX, y = e.clientY;
    lineV.style.transform = 'translateX(' + x + 'px)';
    lineH.style.transform = 'translateY(' + y + 'px)';
    plus.style.transform = 'translate(' + x + 'px,' + y + 'px)';
  });

  document.addEventListener('mouseover', function(e){
    if(e.target.closest('a, button')) plus.classList.add('active');
  });
  document.addEventListener('mouseout', function(e){
    if(e.target.closest('a, button')){
      var related = e.relatedTarget;
      if(!(related && related.closest && related.closest('a, button'))) plus.classList.remove('active');
    }
  });

  var WIPE_MS = 600; // each phase; full out-and-back takes 1200ms
  function wipeLines(x, y){
    var maxR = Math.hypot(innerWidth, innerHeight);
    var outStart = performance.now();

    function outFrame(now){
      var t = Math.min(1, (now - outStart) / WIPE_MS);
      var r = t * maxR;
      var maskV = 'radial-gradient(circle at 0.5px ' + y + 'px, transparent 0, transparent ' + r + 'px, #000 ' + (r + 50) + 'px)';
      var maskH = 'radial-gradient(circle at ' + x + 'px 0.5px, transparent 0, transparent ' + r + 'px, #000 ' + (r + 50) + 'px)';
      lineV.style.webkitMaskImage = maskV; lineV.style.maskImage = maskV;
      lineH.style.webkitMaskImage = maskH; lineH.style.maskImage = maskH;
      if(t < 1){
        requestAnimationFrame(outFrame);
      } else {
        var inStart = performance.now();
        requestAnimationFrame(function inFrame(now2){
          var t2 = Math.min(1, (now2 - inStart) / WIPE_MS);
          var r2 = t2 * maxR;
          var maskV2 = 'radial-gradient(circle at 0.5px ' + y + 'px, #000 0, #000 ' + r2 + 'px, transparent ' + (r2 + 50) + 'px)';
          var maskH2 = 'radial-gradient(circle at ' + x + 'px 0.5px, #000 0, #000 ' + r2 + 'px, transparent ' + (r2 + 50) + 'px)';
          lineV.style.webkitMaskImage = maskV2; lineV.style.maskImage = maskV2;
          lineH.style.webkitMaskImage = maskH2; lineH.style.maskImage = maskH2;
          if(t2 < 1){
            requestAnimationFrame(inFrame);
          } else {
            lineV.style.webkitMaskImage = ''; lineV.style.maskImage = '';
            lineH.style.webkitMaskImage = ''; lineH.style.maskImage = '';
          }
        });
      }
    }
    requestAnimationFrame(outFrame);
  }
  document.addEventListener('click', function(e){
    if(e.target.closest('a[data-wipe]')) wipeLines(e.clientX, e.clientY);
  }, true);
})();
