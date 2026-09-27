const WORK = {
  architecture: {
    label: 'Architecture',
    intro: 'Studio and independent projects exploring fractured massing and fragmented form.',
    projects: [
      {year:2026, title:'Fragment Pavilion', desc:'Studio project — faceted envelope study',
        detail:'A studio brief pushed toward a faceted, load-bearing envelope. Replace this with your process notes, drawings, and renders.'},
      {year:2025, title:'Threshold House', desc:'Competition entry — site-fractured massing',
        detail:'A competition entry testing a massing split by an internal fault line. Add plans, sections, and jury feedback here.'},
      {year:2024, title:'Undercroft', desc:'Adaptive reuse study',
        detail:'An adaptive-reuse study for a below-grade civic space. Swap in images and a short write-up.'}
    ]
  },
  design: {
    label: 'Design',
    intro: 'Generative and computational design work.',
    projects: [
      {year:2026, title:'Faceted Shard Panel System', desc:'Generative hard-surface panelling — Grasshopper, Rhino 8',
        detail:'A generative hard-surface panel system built in Grasshopper for Rhino 8, using Voronoi fragmentation in UV space with a GhPython script handling plane fitting, normal-to-tangent blending, jitter rotation, and solid thickening.'},
      {year:2025, title:'Voronoi Facade Study', desc:'UV-space fragmentation into paneled surface',
        detail:'An earlier pass at the same fragmentation logic, applied to a paneled facade surface. Add renders or a definition breakdown.'}
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
        <div class="project-panel-inner"><p>${p.detail}</p></div>
      </div>
    </div>`).join('');
  container.querySelectorAll('.project-row').forEach(row=>{
    row.addEventListener('click',()=>{
      const item = row.closest('.project-item');
      const open = item.classList.toggle('open');
      row.setAttribute('aria-expanded', open);
    });
  });
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
