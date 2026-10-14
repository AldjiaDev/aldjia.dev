(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     THREE.JS — gradient hero + initiales AB iridescentes
  ══════════════════════════════════════════════════════════ */
  const canvas   = document.getElementById('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(innerWidth, innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
  camera.position.z = 5;

  window.addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  });

  // ── Gradient background shader ─────────────────────────────
  const bgMat = new THREE.ShaderMaterial({
    depthTest: false, depthWrite: false,
    uniforms: {
      uTime:   { value: 0 },
      uMouse:  { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUV;
      void main() { vUV = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uScroll;
      uniform vec2  uMouse;
      varying vec2  vUV;

      void main() {
        vec2 uv = vUV;

        vec2 b1 = vec2(0.12 + sin(uTime*0.17)*0.07, 0.70 + cos(uTime*0.13)*0.06);
        vec2 b2 = vec2(0.88 + cos(uTime*0.11)*0.06, 0.12 + sin(uTime*0.15)*0.05);
        vec2 b3 = vec2(0.55 + uMouse.x*0.08 + sin(uTime*0.09)*0.04, 0.48 + uMouse.y*0.06 + cos(uTime*0.12)*0.04);
        vec2 b4 = vec2(0.70 + sin(uTime*0.14)*0.05, 0.80 + cos(uTime*0.10)*0.04);

        float g1 = exp(-dot(uv-b1,uv-b1)*4.5);
        float g2 = exp(-dot(uv-b2,uv-b2)*5.0);
        float g3 = exp(-dot(uv-b3,uv-b3)*2.8);
        float g4 = exp(-dot(uv-b4,uv-b4)*6.0);

        // Palette A — bordeaux/vermillion
        vec3 baseA=vec3(0.745,0.196,0.126), c1A=vec3(0.541,0.102,0.188);
        vec3 c2A=vec3(0.761,0.353,0.447),   c3A=vec3(0.831,0.471,0.094);
        vec3 c4A=vec3(0.431,0.094,0.239);

        // Palette B — orange/rose/violet
        vec3 baseB=vec3(0.953,0.494,0.188), c1B=vec3(0.863,0.271,0.522);
        vec3 c2B=vec3(0.698,0.345,0.863),   c3B=vec3(0.992,0.671,0.224);
        vec3 c4B=vec3(0.918,0.369,0.541);

        float s = smoothstep(0.0,1.0,uScroll);
        vec3 base=mix(baseA,baseB,s), c1=mix(c1A,c1B,s), c2=mix(c2A,c2B,s);
        vec3 c3=mix(c3A,c3B,s), c4=mix(c4A,c4B,s);

        vec3 col = base;
        col = mix(col,c1,g1*0.80);
        col = mix(col,c2,g2*0.70);
        col = mix(col,c3,g3*0.60);
        col = mix(col,c4,g4*0.55);
        col += fract(sin(dot(uv,vec2(127.1,311.7)))*43758.5)*0.008;
        gl_FragColor = vec4(col, 1.0);
      }
    `
  });
  const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2), bgMat);
  bgMesh.renderOrder = -1;
  scene.add(bgMesh);


  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dl1 = new THREE.DirectionalLight(0xffaa44, 1.2); dl1.position.set(3,4,2); scene.add(dl1);
  const dl2 = new THREE.DirectionalLight(0x8844ff, 0.8); dl2.position.set(-3,-2,3); scene.add(dl2);

  // ── Iridescent material (partagé par les deux meshes texte) ──────────────
  const iriMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime:    { value: 0 },
      uOpacity: { value: 1.0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormal  = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uOpacity;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 2.2);
        float hue = fract(fresnel * 1.6 + uTime * 0.10);
        float h6 = hue * 6.0;
        float i  = floor(h6); float f = h6 - i; float q = 1.0 - f;
        vec3 rgb;
        if      (i < 1.0) rgb = vec3(1.0,  f,  0.0);
        else if (i < 2.0) rgb = vec3( q,  1.0, 0.0);
        else if (i < 3.0) rgb = vec3(0.0, 1.0,  f);
        else if (i < 4.0) rgb = vec3(0.0,  q,  1.0);
        else if (i < 5.0) rgb = vec3( f,  0.0, 1.0);
        else               rgb = vec3(1.0, 0.0,  q);
        vec3 col = mix(vec3(0.97, 0.95, 0.93), rgb, fresnel * 1.3);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,
    transparent: true
  });

  // ── FontLoader → TextGeometry "ALDJIA" + "BOUGHIAS" ─────────────────────
  let textGroup = null;
  const fontLoader = new THREE.FontLoader();
  fontLoader.load(
    'https://cdn.jsdelivr.net/npm/three@0.145.0/examples/fonts/helvetiker_bold.typeface.json',
    function(font) {
      const opts = {
        font, size: 0.82, height: 0.22,
        bevelEnabled: true, bevelSize: 0.022, bevelThickness: 0.036, bevelSegments: 5
      };
      const geoA = new THREE.TextGeometry('ALDJIA',   opts);
      const geoB = new THREE.TextGeometry('BOUGHIAS', opts);
      geoA.computeBoundingBox(); geoA.center();
      geoB.computeBoundingBox(); geoB.center();

      const hA  = geoA.boundingBox.max.y - geoA.boundingBox.min.y;
      const hB  = geoB.boundingBox.max.y - geoB.boundingBox.min.y;
      const gap = 0.10;

      const mA = new THREE.Mesh(geoA, iriMat);
      const mB = new THREE.Mesh(geoB, iriMat);
      mA.position.y =  hA / 2 + gap / 2;
      mB.position.y = -(hB / 2 + gap / 2);

      textGroup = new THREE.Group();
      textGroup.add(mA);
      textGroup.add(mB);
      scene.add(textGroup);
    },
    undefined,
    function() {
      // Fallback : tore iridescent si la police ne charge pas
      const geo = new THREE.TorusGeometry(0.8, 0.22, 64, 128);
      const fb  = new THREE.Mesh(geo, iriMat);
      textGroup = new THREE.Group();
      textGroup.add(fb);
      scene.add(textGroup);
    }
  );

  // ── Mouse ──────────────────────────────────────────────────
  const tM = { x: 0, y: 0 }, cM = { x: 0, y: 0 };
  const mw = { nx: 0, ny: 0, wx: 0.5, wy: 0.5 };
  window.addEventListener('mousemove', e => {
    mw.nx = (e.clientX/innerWidth)*2-1;
    mw.ny = -(e.clientY/innerHeight)*2+1;
    mw.wx = e.clientX/innerWidth;
    mw.wy = e.clientY/innerHeight;
    tM.x = mw.nx; tM.y = mw.ny;
  });

  const roleDev  = document.getElementById('roleDev');
  const roleArt  = document.getElementById('roleArt');
  const heroMeta = document.getElementById('hero-meta-el');
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);

    // Fade out canvas after Three.js zone (hero 100vh + scroll zone 200vh)
    const zoneEnd = window.innerHeight * 3.1;
    const cOpacity = 1 - Math.max(0, Math.min(1, (scrollY - zoneEnd) / (window.innerHeight * 0.4)));
    canvas.style.opacity = cOpacity;
    if (cOpacity < 0.01) { canvas.style.visibility = 'hidden'; return; }
    canvas.style.visibility = 'visible';

    const t = clock.getElapsedTime();
    cM.x += (tM.x - cM.x) * 0.06;
    cM.y += (tM.y - cM.y) * 0.06;

    // Scroll progress through the scroll zone (S2)
    const sp = Math.min(1, Math.max(0, (scrollY - window.innerHeight * 0.5) / (window.innerHeight * 1.5)));

    bgMat.uniforms.uTime.value   = t;
    bgMat.uniforms.uMouse.value.set(mw.wx, 1 - mw.wy);
    bgMat.uniforms.uScroll.value = sp;

    // ── Texte 3D "ALDJIA BOUGHIAS" ────────────────────────────────────────
    iriMat.uniforms.uTime.value = t;
    if (textGroup) {
      const vh  = window.innerHeight;
      const sN  = scrollY / vh; // scroll en unités viewport (0 = haut, 3 = fin zone)

      // Fade : disparaît seulement à la fin de la zone Three.js (~2.7-3.1 vh)
      const scrollFade = 1 - Math.max(0, Math.min(1, (scrollY - vh * 2.7) / (vh * 0.35)));
      iriMat.uniforms.uOpacity.value = scrollFade;
      textGroup.visible = scrollFade > 0.005;

      // hero-meta suit le même fade
      if (heroMeta) heroMeta.style.opacity = scrollFade;

      // Parallaxe : monte doucement (vitesse ~55 % du scroll)
      const moveY   = -sN * 0.55;

      // Scale : léger rétrécissement au fur et à mesure du scroll (1 → 0.55)
      const scaleV  = Math.max(0.55, 1 - sN * 0.16);
      textGroup.scale.setScalar(scaleV);

      // Profondeur : légère avancée puis recul cinématique
      const moveZ   = Math.sin(sN * 0.9) * 0.4;
      textGroup.position.z = moveZ;

      // Flottement + souris (s'atténue progressivement avec le scroll)
      const floatAmt = Math.max(0, 1 - sN * 0.3);
      textGroup.position.y = moveY + Math.sin(t * 0.75) * 0.14 * floatAmt;
      textGroup.rotation.y = Math.sin(t * 0.50) * 0.07 * floatAmt + cM.x * 0.18;
      textGroup.rotation.x = Math.sin(t * 0.38) * 0.04 * floatAmt - cM.y * 0.09;
      textGroup.rotation.z = Math.sin(t * 0.28) * 0.015 * floatAmt + sN * 0.018;
    }

    // Role labels
    const labelIn  = Math.max(0, Math.min(1, (sp - 0.35) / 0.45));
    const labelOut = Math.max(0, Math.min(1, 1 - (scrollY - window.innerHeight*2.2) / (window.innerHeight*0.6)));
    const lo = Math.min(labelIn, labelOut);
    roleDev.style.opacity = lo;
    roleArt.style.opacity = lo;

    renderer.render(scene, camera);
  }
  tick();

  /* ══════════════════════════════════════════════════════════
     TICKER GÉANT — texte immense qui défile de droite à gauche
  ══════════════════════════════════════════════════════════ */
  const PHRASE = "je crée des sites web pour le monde de l'art & de la culture.";
  const track  = document.getElementById('ticker-track');

  // 4 copies (pair) pour boucle seamless à translateX(-50%)
  for (let i = 0; i < 4; i++) {
    const txt = document.createElement('span');
    txt.className = 'ticker-text';
    txt.textContent = PHRASE;
    track.appendChild(txt);

    const sep = document.createElement('span');
    sep.className = 'ticker-sep';
    sep.textContent = ' · ';
    track.appendChild(sep);
  }

  /* ══════════════════════════════════════════════════════════
     INTERSECTION OBSERVER — mots narratifs
  ══════════════════════════════════════════════════════════ */
  const wordObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
      else e.target.classList.remove('visible');
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-word]').forEach(el => wordObs.observe(el));

  const aujObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.4 });
  const aujEl = document.getElementById('auj-word');
  if (aujEl) aujObs.observe(aujEl);

  /* ══════════════════════════════════════════════════════════
     SCROLL ANIMATIONS — gradient + split sections
  ══════════════════════════════════════════════════════════ */
  const gradSection = document.getElementById('gradient-section');
  const gradOutline = document.getElementById('grad-outline');
  const gradFill    = document.getElementById('grad-fill');

  const splitSection = document.getElementById('split-section');
  const splitLeft    = document.getElementById('split-left');
  const splitRight   = document.getElementById('split-right');
  const splitText    = document.getElementById('split-text');

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function progress(el) {
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    return clamp(-rect.top / total, 0, 1);
  }

  function updateSections() {
    // ── Gradient section ──
    if (gradSection) {
      const p = progress(gradSection);
      gradOutline.style.opacity = 1 - clamp((p - 0.3) / 0.35, 0, 1);
      gradFill.style.opacity    =     clamp((p - 0.3) / 0.45, 0, 1);
    }

    // ── Split section ──
    if (splitSection) {
      const p = progress(splitSection);

      // Phase 1 (0→0.4): height 100vh → 35vh, radius appears
      const ph1 = clamp(p / 0.4, 0, 1);
      const bH  = 100 - ph1 * 65;  // vh
      const rad = ph1 * 20;         // px

      // Phase 2 (0.4→0.78): blocks slide apart
      const ph2    = clamp((p - 0.4) / 0.38, 0, 1);
      const offset = ph2 * 24; // vw

      // Phase 3 (0.78→1): bridge text
      const ph3 = clamp((p - 0.78) / 0.22, 0, 1);

      const leftStyle  = `height:${bH}vh; border-radius:${rad}px; transform:translateX(-${offset}vw);`;
      const rightStyle = `height:${bH}vh; border-radius:${rad}px; transform:translateX(${offset}vw);`;

      splitLeft.style.cssText  = leftStyle;
      splitRight.style.cssText = rightStyle;
      splitText.style.opacity  = ph3;
    }
  }

  window.addEventListener('scroll', updateSections, { passive: true });
  updateSections();

  /* ── Nom Three.js — fade géré directement dans tick() via iriMat.uOpacity ── */

  /* ── SEO cards — apparition accumulée au scroll ── */
  const seoSection = document.getElementById('seo-section');
  const seoCardEls = document.querySelectorAll('.seo-card');
  const seoDotEls  = document.querySelectorAll('.seo-dot');
  function eio(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2; }
  function updateSeoCards() {
    if (!seoSection || !seoCardEls.length) return;
    const p = progress(seoSection);
    const n = seoCardEls.length;
    seoCardEls.forEach((card, i) => {
      // chaque carte apparaît à son seuil et reste visible
      const thresh = 0.10 + (i / n) * 0.78; // réparti de 10% à 88%
      const e = eio(clamp((p - thresh) / 0.09, 0, 1));
      card.style.opacity = e;
      card.style.transform = `translateY(${(1 - e) * 28}px)`;
      seoDotEls[i]?.classList.toggle('active', e > 0.5);
    });
  }
  window.addEventListener('scroll', updateSeoCards, { passive: true });
  updateSeoCards();

  /* ══════════════════════════════════════════════════════════
     TOOLKIT — fan cards
  ══════════════════════════════════════════════════════════ */
  const TOOLKIT = [
    // Groupe dev
    { name: 'Ruby\non Rails', badge: 'Framework',   bg: '#BE3220', fg: '#EDE8DF', badgeBg: 'rgba(237,232,223,0.15)', group: 0 },
    { name: 'Jekyll',         badge: 'Site statique',bg: '#EDE8DF', fg: '#1A1210', badgeBg: 'rgba(26,18,16,0.1)',     group: 0 },
    { name: 'Java\nScript',   badge: 'Langage',      bg: '#E8C83A', fg: '#1A1210', badgeBg: 'rgba(26,18,16,0.12)',    group: 0 },
    { name: 'Three.js',       badge: 'Web 3D',       bg: '#1A1210', fg: '#EDE8DF', badgeBg: 'rgba(237,232,223,0.12)', border: '1px solid rgba(237,232,223,0.1)', group: 0 },
    { name: 'Swift',          badge: 'iOS · macOS',  bg: '#3A7FD0', fg: '#fff',    badgeBg: 'rgba(255,255,255,0.18)', group: 0 },
    // Groupe art
    { name: 'Figma',          badge: 'Design UI',    bg: '#6B3FBE', fg: '#fff',    badgeBg: 'rgba(255,255,255,0.18)', group: 1 },
    { name: 'Direction\nart.', badge: 'DA',  bg: '#8B1A30', fg: '#EDE8DF', badgeBg: 'rgba(237,232,223,0.15)', group: 1 },
    { name: 'Histoire\nde l\'art', badge: 'Culture', bg: '#3A5038', fg: '#EDE8DF', badgeBg: 'rgba(237,232,223,0.15)', group: 1 },
  ];

  const GROUP_SUBS = ['Développement web', 'Art & direction'];
  const toolkitSection = document.getElementById('toolkit');
  const toolkitStage   = document.getElementById('toolkit-stage');
  const toolkitSub     = document.getElementById('toolkit-sub');

  // Créer les cards DOM
  const cardEls = TOOLKIT.map((data, i) => {
    const card = document.createElement('div');
    card.className = 'tk-card';
    card.style.background  = data.bg;
    if (data.border) card.style.border = data.border;
    card.style.zIndex = i + 1;

    const name = document.createElement('div');
    name.className   = 'tk-card-name';
    name.style.color = data.fg;
    name.textContent = data.name;

    const badge = document.createElement('div');
    badge.className   = 'tk-badge';
    badge.style.background = data.badgeBg;
    badge.style.color = data.fg;
    badge.style.opacity = '0.85';
    badge.textContent = data.badge;

    card.appendChild(name);
    card.appendChild(badge);
    toolkitStage.appendChild(card);
    return card;
  });

  function updateToolkit() {
    if (!toolkitSection) return;
    const p = progress(toolkitSection);

    // Phase 1 (0→0.45): groupe dev fan
    // Phase 2 (0.45→0.55): transition
    // Phase 3 (0.55→1.0): groupe art fan
    const devCards  = TOOLKIT.filter(c => c.group === 0);
    const artCards  = TOOLKIT.filter(c => c.group === 1);
    const devEls    = cardEls.slice(0, devCards.length);
    const artEls    = cardEls.slice(devCards.length);

    const devP = clamp(p / 0.40, 0, 1);
    const artP = clamp((p - 0.55) / 0.40, 0, 1);
    const transP = clamp((p - 0.40) / 0.15, 0, 1);

    // Subtitle
    toolkitSub.style.opacity = (p > 0.40 && p < 0.60) ? 0 : 1;
    if (p < 0.50) toolkitSub.textContent = GROUP_SUBS[0];
    else          toolkitSub.textContent = GROUP_SUBS[1];

    // Fan dev cards
    const dN = devEls.length;
    devEls.forEach((el, i) => {
      const spread = (i - (dN - 1) / 2);
      const rot = spread * 14 * devP;
      const tx  = spread * 140 * devP;
      const ty  = spread * spread * 7 * devP;
      const fadeOut = clamp(transP * 2, 0, 1);
      el.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
      el.style.opacity   = 1 - fadeOut;
      el.style.pointerEvents = fadeOut > 0.5 ? 'none' : 'auto';
    });

    // Fan art cards
    const aN = artEls.length;
    artEls.forEach((el, i) => {
      const spread = (i - (aN - 1) / 2);
      const rot = spread * 14 * artP;
      const tx  = spread * 140 * artP;
      const ty  = spread * spread * 7 * artP;
      el.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
      el.style.opacity   = clamp((p - 0.50) / 0.10, 0, 1);
    });
  }

  window.addEventListener('scroll', updateToolkit, { passive: true });
  updateToolkit();

  /* ── Projets — apparition ondulante au scroll ── */
  const projetsSection = document.getElementById('projets');
  const projetItems    = document.querySelectorAll('.projet-item');

  // Découper chaque .proj-name en .proj-char avec délai échelonné
  document.querySelectorAll('.proj-name').forEach(nameEl => {
    const text = nameEl.textContent;
    nameEl.innerHTML = [...text].map((c, i) =>
      `<span class="proj-char" style="animation-delay:${i * 0.042}s">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('');
  });

  const revealedSet = new Set();
  function updateProjets() {
    if (!projetsSection || !projetItems.length) return;
    const p = progress(projetsSection);
    projetItems.forEach((item, i) => {
      const thresh = 0.06 + i * 0.17;  // 6 % … 74 %
      if (p >= thresh) {
        if (!revealedSet.has(i)) {
          revealedSet.add(i);
          item.classList.add('revealed');
        }
      } else {
        if (revealedSet.has(i)) {
          revealedSet.delete(i);
          item.classList.remove('revealed');
          // Réinitialiser les chars pour rejouer l'animation si on re-scrolle
          item.querySelectorAll('.proj-char').forEach(c => {
            c.style.animation = 'none';
            void c.offsetWidth; // reflow
            c.style.animation = '';
          });
        }
      }
    });
  }
  window.addEventListener('scroll', updateProjets, { passive: true });
  updateProjets();

  /* ── Footer — blocs qui s'écartent au scroll ── */
  const finSection  = document.getElementById('fin');
  const finLeft     = document.getElementById('fin-left');
  const finRight    = document.getElementById('fin-right');
  const finContent  = document.getElementById('fin-content');

  function updateFooter() {
    if (!finSection || !finLeft) return;
    const p = progress(finSection);
    // Blocs glissent vers l'extérieur
    const e = eio(clamp(p / 0.72, 0, 1));
    finLeft.style.transform  = `translateX(-${e * 52}vw)`;
    finRight.style.transform = `translateX(${e * 52}vw)`;
    // Contenu fade in légèrement décalé
    finContent.style.opacity = eio(clamp((p - 0.12) / 0.4, 0, 1));
  }
  window.addEventListener('scroll', updateFooter, { passive: true });
  window.addEventListener('resize', updateFooter,  { passive: true });
  updateFooter();

  /* ══════════════════════════════════════════════════════════
     SEO WAVE — shader Three.js : lignes glowing réactives
  ══════════════════════════════════════════════════════════ */
  (function initSeoWave() {
    const canvas = document.getElementById('seo-canvas');
    const sect   = document.getElementById('seo-section');
    if (!canvas || !sect) return;

    const getW = () => sect.offsetWidth  || window.innerWidth;
    const getH = () => window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    renderer.setPixelRatio(1);
    renderer.setClearColor(0x0A0806, 1);
    renderer.setSize(getW(), getH());

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:  { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }
      },
      vertexShader: `
        varying vec2 vUV;
        void main() { vUV = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uTime;
        uniform vec2  uMouse;
        varying vec2  vUV;

        void main() {
          vec2 uv = vUV;

          // Même technique blob gaussien que le hero
          vec2 b1 = vec2(0.08 + sin(uTime*0.17)*0.07 + uMouse.x*0.06,
                         0.82 + cos(uTime*0.13)*0.06 + uMouse.y*0.05);
          vec2 b2 = vec2(0.88 + cos(uTime*0.11)*0.06 - uMouse.x*0.05,
                         0.14 + sin(uTime*0.15)*0.05 - uMouse.y*0.04);
          vec2 b3 = vec2(0.52 + sin(uTime*0.09)*0.04 + uMouse.x*0.03,
                         0.50 + cos(uTime*0.12)*0.04 + uMouse.y*0.03);

          float g1 = exp(-dot(uv-b1, uv-b1)*4.8);
          float g2 = exp(-dot(uv-b2, uv-b2)*5.2);
          float g3 = exp(-dot(uv-b3, uv-b3)*7.5);

          // Palette cohérente avec le site — fond #0E0C0A, bordeaux + violet
          vec3 base = vec3(0.055, 0.047, 0.039);  // #0E0C0A
          vec3 c1   = vec3(0.745, 0.196, 0.126);  // bordeaux #BE3220
          vec3 c2   = vec3(0.376, 0.157, 0.627);  // violet profond
          vec3 c3   = vec3(0.533, 0.125, 0.204);  // bordeaux sombre

          vec3 col = base;
          col = mix(col, c1, g1 * 0.70);
          col = mix(col, c2, g2 * 0.60);
          col = mix(col, c3, g3 * 0.35);

          // Même grain que le hero (fract sin)
          col += fract(sin(dot(uv, vec2(127.1,311.7)))*43758.5) * 0.010;

          gl_FragColor = vec4(col, 1.0);
        }
      `
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
    window.addEventListener('mousemove', e => {
      const r = sect.getBoundingClientRect();
      if (e.clientY > r.top - 80 && e.clientY < r.bottom + 80) {
        tmx = e.clientX / window.innerWidth;
        tmy = 1 - (e.clientY - r.top) / r.height;
      }
    }, { passive: true });

    const seoClock = new THREE.Clock();
    (function tick() {
      requestAnimationFrame(tick);
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      mat.uniforms.uTime.value = seoClock.getElapsedTime();
      mat.uniforms.uMouse.value.set(mx, my);
      renderer.render(scene, camera);
    }());

    window.addEventListener('resize', () => {
      renderer.setSize(getW(), getH());
    }, { passive: true });
  }());

  /* ══════════════════════════════════════════════════════════
     REVEAL — entrée au scroll pour sections statiques
  ══════════════════════════════════════════════════════════ */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseFloat(entry.target.dataset.revealDelay || 0);
      setTimeout(() => entry.target.classList.add('revealed'), delay * 1000);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

  /* ══════════════════════════════════════════════════════════
     NAV AB — "AB" iridescent 3D tournant dans la navbar
  ══════════════════════════════════════════════════════════ */
  (function initNavAB() {
    const navCanvas = document.getElementById('nav-ab-canvas');
    if (!navCanvas) return;

    const W = 108, H = 92;
    navCanvas.width  = W;
    navCanvas.height = H;

    const navRdr = new THREE.WebGLRenderer({ canvas: navCanvas, antialias: true, alpha: true });
    navRdr.setPixelRatio(1);
    navRdr.setClearColor(0x000000, 0);
    navRdr.setSize(W, H, false);

    const navScene  = new THREE.Scene();
    const navCam    = new THREE.PerspectiveCamera(42, W / H, 0.1, 10);
    navCam.position.z = 2.8;

    navScene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const nl1 = new THREE.DirectionalLight(0xffaa44, 1.1); nl1.position.set(2, 3, 2);  navScene.add(nl1);
    const nl2 = new THREE.DirectionalLight(0x8844ff, 0.8); nl2.position.set(-2,-1, 2); navScene.add(nl2);

    const navIri = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 1.0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormal  = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 2.2);
          float hue = fract(fresnel * 1.6 + uTime * 0.10);
          float h6 = hue * 6.0;
          float i  = floor(h6); float f = h6 - i; float q = 1.0 - f;
          vec3 rgb;
          if      (i < 1.0) rgb = vec3(1.0,  f,  0.0);
          else if (i < 2.0) rgb = vec3( q,  1.0, 0.0);
          else if (i < 3.0) rgb = vec3(0.0, 1.0,  f);
          else if (i < 4.0) rgb = vec3(0.0,  q,  1.0);
          else if (i < 5.0) rgb = vec3( f,  0.0, 1.0);
          else               rgb = vec3(1.0, 0.0,  q);
          vec3 col = mix(vec3(0.97, 0.95, 0.93), rgb, fresnel * 1.3);
          gl_FragColor = vec4(col, uOpacity);
        }
      `,
      transparent: true
    });

    let navMesh = null;
    const navLoader = new THREE.FontLoader();
    navLoader.load(
      'https://cdn.jsdelivr.net/npm/three@0.145.0/examples/fonts/helvetiker_bold.typeface.json',
      function(font) {
        const geo = new THREE.TextGeometry('AB', {
          font, size: 0.58, height: 0.20,
          bevelEnabled: true, bevelSize: 0.016, bevelThickness: 0.024, bevelSegments: 5
        });
        geo.computeBoundingBox();
        geo.center();
        navMesh = new THREE.Mesh(geo, navIri);
        navScene.add(navMesh);
      }
    );

    const navClock = new THREE.Clock();
    (function tick() {
      requestAnimationFrame(tick);
      const t = navClock.getElapsedTime();
      navIri.uniforms.uTime.value = t;
      if (navMesh) {
        navMesh.rotation.y = t * 1.1;
        navMesh.rotation.x = Math.sin(t * 0.65) * 0.22;
      }
      navRdr.render(navScene, navCam);
    }());
  }());

  /* ══════════════════════════════════════════════════════════
     NAV THEME — light mode pour sections claires
  ══════════════════════════════════════════════════════════ */
  const nav = document.getElementById('main-nav');
  const tickerEl = document.getElementById('ticker-section');

  /* ── Conseils — wave sur la phrase CTA ── */
  const conseilsCta = document.getElementById('conseils-cta');
  if (conseilsCta) {
    conseilsCta.innerHTML = [...conseilsCta.textContent].map((c, i) =>
      `<span class="cw" style="animation-delay:${i * 0.05}s">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('');
  }

  function updateNav() {
    const lightStart = tickerEl ? tickerEl.offsetTop - 60 : 99999;
    const projetsEl  = document.getElementById('projets');
    const lightEnd   = projetsEl ? projetsEl.offsetTop + projetsEl.offsetHeight - 60 : 99999;
    if (scrollY > lightStart && scrollY < lightEnd) nav.classList.add('light');
    else nav.classList.remove('light');
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

}());
