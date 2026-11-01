const WORK = {
  architecture: {
    label: 'Architecture',
    intro: 'Studio and independent projects exploring fractured massing and fragmented form.',
    projects: [
      {year:2026, title:'RE:FLUX', desc:'Studio Project — Collective Housing',
        blocks:[
          {text:'Located in Milan, Re:Flux explores the relationships between environmental forces, urban flow and collective housing. Set within a landscape shaped by old infrastructure and modern transformations, the project takes wind, sunlight and human movement as active parameters in the design process, shaping a vertical residential structure in which the organisation of space responds to the forces acting upon it.'},
          {images:[
            {src:'../img/reflux/maquette.jpg', title:'3D Printed Model - PLA - 1:200'},
            {src:'../img/reflux/globalplan.jpg', title:'Global Plan'}
          ]},
          {text:'The site is understood as a field of intersecting flows. Urban circulation and human movement coexist with atmospheric conditions, particularly the dominant north–south winds and the variations in solar exposure. Rather than treating these forces as external constraints, the project translates them into design parameters. The site becomes an active system through which the architectural form is generated and organised.'},
          {images:[
            {src:'../img/reflux/siteplan.jpg', title:'Site Plan'},
            {src:'../img/reflux/process1.jpg', title:'Building footprint extruded up.'},
            {src:'../img/reflux/process2.jpg', title:'Initial geometry ensuring visual integration and GFA respect.'},
            {src:'../img/reflux/process3.jpg', title:'Carving under the effect of wind forces. Ensures even distribution of GFA through all the units.'},
            {src:'../img/reflux/process4.jpg', title:'Programmatic vector shaping the ground floor.'}
          ]},
          {text:'Floor Plans'},
          {images:[
            {src:'../img/reflux/rdc.jpg', title:'Ground Floor Plan - 1:200'},
            {src:'../img/reflux/layout1.jpg', title:'Layout::Floor 1-2-13-14 - 1:200'},
            {src:'../img/reflux/layout2.jpg', title:'Layout::Floor 3 to 12 - 1:200'},
            {src:'../img/reflux/t2.jpg', title:'T2 Type Appartment::45-50m² - 1:200'},
            {src:'../img/reflux/t3.jpg', title:'T3 Type Appartment::65-70m² - 1:200'},
            {src:'../img/reflux/t4.jpg', title:'T4 Type Appartment::80-85m² - 1:200'}
          ]},
          {text:'The central core stabilizes two housing volumes: one supported by a spatial frame, the other suspended by tension rods. Together, these systems free the ground plane and expose the forces holding the building together as its envelope fragments. Rotating panels form an adaptive second skin, adjusting solar protection throughout the day while allowing residents to control light exposure.'},
          {images:[
            {src:'../img/reflux/frame.jpg', title:'Space Frame'},
            {src:'../img/reflux/facade.jpg', title:'Metal Facade'},
            {src:'../img/reflux/core.jpg', title:'Reinforced Concrete Core + Concrete Floors'},
            {src:'../img/reflux/sunp.jpg', title:'Rotating Solar Protections'}
          ]},
          {images:[
            {src:'../img/reflux/render.jpg', title:'Interior Render'}
          ]}
        ]},

      {year:2025, title:'CHIAROSCURO', desc:'Studio Project — Concert Hall',
        blocks:[
          {text:'Conceived as part of the defensive system surrounding Paris, the Fort d’Aubervilliers was designed to disappear within it. Its architecture follows a fundamental military logic: protect, conceal, control'},
          {images:[
            {src:'../img/chiaroscuro/cityplan.jpg', title:'City Plan'}]},
          {text:'Earth becomes structure, walls become boundaries, openings become points of surveillance, and the horizon becomes an obversation point, anticipating and controling. The fort seems to grow out of the terrain. Its masses are low, heavy and directional, merging slopes, embankments and masonry into a continuous relationship between building and ground.'},
          {images:[
            {src:'../img/chiaroscuro/fort1.jpg', title:'Historical Perimeter'},
            {src:'../img/chiaroscuro/fort2.jpg', title:'Defensive Walls'},
            {src:'../img/chiaroscuro/fort3.jpg', title:'Surveillance Strategy'}
          ]},
          {text:'This relationship between architecture, ground and force became the starting point of the project. Rather than re producing the fort’s historical appearance, I sought to reinterpret its underlying principles heaviness, concealment, protection and orientation through a contemporary architectural language. My main research was to ask myself : “What happens when this defensive logic is no longer expressed through primitives, but through the form of the building itself?”'},
          {images:[
            {src:'../img/chiaroscuro/history.jpg', title:'History'}
          ]},
          {images:[
            {src:'../img/chiaroscuro/fort_img_1.jpg', title:'Gendarmerie Tower Entrance - Courtesy of Aubervilliers City'},
            {src:'../img/chiaroscuro/fort_img_2.jpg', title:'Inside the Fort - Courtesy of Aubervilliers City'}
          ]},
          {text:'The building’s initial geometry emerges from a process of generative sectioning. Using TouchDesigner, fragments of artcore compositions, where electronic music meets classical, are transformed into three-dimensional spectrograms.'},
          {images:[
            {src:'../img/chiaroscuro/spectrogram.jpg', title:'Spectrogram - Netzach by AcuticNotes - Section Throughout'}
          ]},
          {text:'By taking sections through these volumes, I obtained a series of sinusoidal curves, each representing a different section of the sound-derived geometry.'},
          {images:[
            {src:'../img/chiaroscuro/addition.jpg', title:'Curve Summation (Non Exhaustive)'},
            {src:'../img/chiaroscuro/result.jpg', title:'Curve Summation Result'}
          ]},
          {text:'These curves are then combined through a script that subdivides them point by point before respectively adding them, parameter by parameter, following the equation :'},
          {images:[
            {src:'../img/chiaroscuro/equation.jpg', title:'Equation'},
            {src:'../img/chiaroscuro/pointsum.jpg', title:'Point Wise Sum'}
          ]},
          {text:'The resulting object consists of a continuous envelope that is faceted to obtain a cohesive result.'},
          {images:[
            {src:'../img/chiaroscuro/cresult.jpg', title:'Continuous Curve - Resulting Shell'},
            {src:'../img/chiaroscuro/aresult.jpg', title:'Angular Curve - Resulting Shell'}
          ]},
          {text:'Geographicaly, the nearby south garden reveals an opportunity to establish a stronger relationship between the intervention and its landscape, while working on the human circulation, the analysis of the horizon as a field established itself, bridging the existing history and newer data.'},
          {images:[
            {src:'../img/chiaroscuro/siteplan.jpg', title:'Site Plan'}
          ]},
          {text:'The site derived field (2D) intersects itself with the preceeding sound field (2D), giving birth to the architectural experience as a whole : A three dimensional volume enhanced with a temporal experience'},
          {images:[
            {src:'../img/chiaroscuro/ipoint.jpg', title:'Initial Point'},         
            {src:'../img/chiaroscuro/lexpansion.jpg', title:'Line Expansion'},    
            {src:'../img/chiaroscuro/aenvelope.jpg', title:'Angular Envelope'},        
            {src:'../img/chiaroscuro/rgeometry.jpg', title:'Resulting Geometry'},            
            {src:'../img/chiaroscuro/axo.jpg', title:'Axonometric Diamgram'}
          ]},
          {text:'CHIAROSCURO ({/kiˌɑːrəˈskʊərəʊ/) : "Contrast between light and shadow in art'},
          {text:'Light enters the building along the sun’s trajectory, unfolding through the visitor’s progression and shaping the experience of the space. This interplay between light and movement extends from the interior to the exterior: as the journey advances, the shell gradually opens, allowing the structure to emerge freely from within letting music bring the architecture to life.'},
          {images:[
            {src:'../img/chiaroscuro/interior.jpg', title:'Interior Render'}, 
            {src:'../img/chiaroscuro/exterior.jpg', title:'Exterior Render'} 
          ]},
          {text:'Technical Drawings'},
          {images:[
            {src:'../img/chiaroscuro/floorplan.jpg', title:'Floor Plan - 1:200'}, 
            {src:'../img/chiaroscuro/eastelevation.jpg', title:'East Elevation - 1:200'}, 
            {src:'../img/chiaroscuro/section.jpg', title:'Section - 1:200'} 
          ]}
        ]},

      
      {year:2025, title:'STRUCTURAL STUDY', desc:'Studio Project — Systemic Study',
        blocks:[
          {text:'Studio project as a systemic study. Add diagrams, models, and notes here.'}
        ]},
      {year:2024, title:'ALTORIS', desc:'Studio Project — Observation Site',
        blocks:[
          {text:'Studio project on an observation site. Swap in images and a short write-up.'}
        ]}
    ]
  },
  design: {
    label: 'Design',
    intro: 'Generative and computational design work.',
    projects: [
      {year:'202X', title:'ABERRATION SERIES', desc:'Procedural Primitives',
        blocks:[
          {text:'This series tries to explore the limits of procedurally manipulated primitives and their expression. Manually altered geometries intertwine with each other, creating spaces and forms never achievable before. Ambiances are introduced through exotic and eccentric colores and textures, combining personal references with a homogeneous touch.'},
          {images:[
            {src:'../img/aberration/1-kos-x-ch.jpg', title:'KOS X CH'},
            {src:'../img/aberration/2-axaria.jpg', title:'AxaRia'},
            {src:'../img/aberration/3-grave.jpg', title:'GRaVE'},
            {src:'../img/aberration/4-glance-part1.jpg', title:'GLANCE PART.1'},
            {src:'../img/aberration/5-steeps.jpg', title:'ST[EE]PS'}
          ]}
        ]},
      {year:2026, title:'GROWTH', desc:'Procedural Architecture',
        blocks:[
          {text:'Investigating the interactions between humans and their surroundings, this procedurally generated animation cites the possibilities of a living architecture. The geometries shift, grow, and change with human movement, adapting itself to the living being, raising the following tquestion:<br>Should architecture adapt to humans, or should it be the other way around?'},
          {video:'../video/growth.mp4'}
        ]}
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
function blocksHTML(p){
  if(!p.blocks){
    return `<p>${p.detail}</p>${p.images ? galleryHTML(p.images) : ''}${p.video ? videoHTML(p.video) : ''}`;
  }
  return p.blocks.map(b =>
    b.text ? `<p>${b.text}</p>` :
    b.images ? galleryHTML(b.images) :
    b.video ? videoHTML(b.video) : ''
  ).join('');
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
        <div class="project-panel-inner">${blocksHTML(p)}</div>
      </div>
    </div>`).join('');
  container.querySelectorAll('.project-row').forEach(row=>{
    row.addEventListener('click',()=>{
      const item = row.closest('.project-item');
      const open = item.classList.toggle('open');
      row.setAttribute('aria-expanded', open);
      const vid = item.querySelector('video');
      if(vid && open) vid.play().catch(()=>{});
    });
  });
  container.querySelectorAll('.gallery').forEach(initGallery);
  container.querySelectorAll('.project-video').forEach(v=>{
    const fit = ()=>{ if(v.videoWidth) v.style.aspectRatio = v.videoWidth + ' / ' + v.videoHeight; };
    v.addEventListener('loadedmetadata', fit);
    if(v.readyState >= 1) fit();
  });
}

/* ---------- looping, non-interactive video ---------- */
function videoHTML(src){
  return `<div class="video-wrap">
    <video class="project-video" src="${src}" autoplay muted loop playsinline preload="auto"
      disablepictureinpicture disableremoteplayback controlslist="nodownload noplaybackrate noremoteplayback"
      tabindex="-1" aria-hidden="true" oncontextmenu="return false"></video>
  </div>`;
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
