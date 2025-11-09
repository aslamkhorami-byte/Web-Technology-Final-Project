  const navLinks = document.querySelectorAll('.nav a');
  const currentPage = window.location.pathname.split('/').pop(); 
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.documentElement;
  const saved = localStorage.getItem('news_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved==='dark' ? 'dark' : 'light');
  const themeToggle = document.querySelectorAll('.theme-toggle');
  themeToggle.forEach(t => {
    t.checked = (saved==='dark');
    t.addEventListener('change', (e)=>{
      const isDark = e.target.checked;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('news_theme', isDark ? 'dark' : 'light');
    });
  });

 const articles = [
  {
    "id": 1,
    "title": "Kazakhstan set to join Abraham Accords in symbolic diplomatic move",
    "excerpt": "Kazakhstan announced that it will symbolically join the Abraham Accords with Israel, marking a new phase in its Middle‑East diplomacy and broader international engagement.",
    "image": "1.jpg",
    "category": "World",
    "date": "2025-11-06"
  },
  {
    "id": 2,
    "title": "Parliament gives preliminary approval to ban on LGBT ‘propaganda’",
    "excerpt": "Kazakhstan’s legislature approved in first reading a bill banning the dissemination of what it deems LGBT ‘propaganda’ online or in media—raising concerns among human‑rights groups.",
    "image": "2.jpg",
    "category": "Politics",
    "date": "2025-10-29"
  },
  {
    "id": 3,
    "title": "Oil output falls 10% in October due to maintenance at Tengiz field",
    "excerpt": "Crude production in Kazakhstan dropped by about 10 % in October after maintenance at the major Tengiz oilfield, though output remains above the OPEC+ quota.",
    "image": "3.jpg",
    "category": "Business",
    "date": "2025-11-05"
  },
  {
    "id": 4,
    "title": "Kazakhstan launches first crypto investment fund in partnership with Binance",
    "excerpt": "The newly‑established Alem Crypto Fund, in partnership with Binance, aims to accelerate Kazakhstan’s entry into digital finance and long‑term asset investment.",
    "image": "4.jpg",
    "category": "Technology",
    "date": "2025-10-01"
  },
  {
    "id": 5,
    "title": "Inflation slows to 12.6% in October as utilities and housing costs fall",
    "excerpt": "Kazakhstan’s annual inflation rate eased to 12.6 % in October, its first decline this year, mainly driven by lower housing and utility service prices.",
    "image": "5.jpg",
    "category": "Business",
    "date": "2025-11-05"
  },
  {
    "id": 6,
    "title": "Government advances digital transformation with US partnerships and AI push",
    "excerpt": "Kazakhstan announced a major digital strategy in collaboration with U.S. tech firms, including an AI roadmap, super‑computing infrastructure and a national digital services upgrade.",
    "image": "6.jpg",
    "category": "Technology",
    "date": "2025-11-07"
  },
  {
    "id": 7,
    "title": "What will change in the lives of Kazakhstanis starting October 2025",
    "excerpt": "New rules affecting property fees, travel for under‑21s, and an agricultural support programme ‘Ken Dala‑2’ will take effect in Kazakhstan from early October.",
    "image": "7.jpg",
    "category": "Politics",
    "date": "2025-10-03"
  },
  {
    "id": 8,
    "title": "Kazakhstan showcases investment potential to international investors in London forum",
    "excerpt": "At the Future Resilience Forum in London, Kazakhstan’s delegation pitched its economic strategy, emphasising resilience, transport corridors and critical‑minerals opportunity.",
    "image": "8.jpg",
    "category": "Business",
    "date": "2025-10-23"
  },
  {
    "id": 9,
    "title": "Kazakhstan and China strengthen strategic partnership in trade and industry",
    "excerpt": "During the 8th Kazakhstan–China Business Council meeting in Beijing, leaders reaffirmed commitments to deepen cooperation and outlined new joint projects across sectors.",
    "image": "9.jpg",
    "category": "Business",
    "date": "2025-09-02"
  },
  {
    "id": 10,
    "title": "Energy expo Powerexpo Almaty 2025 opens with global participation",
    "excerpt": "More than 210 companies from 15 countries attend Powerexpo Almaty 2025 and Kazatomexpo, highlighting Kazakhstan’s growing role in the energy and industrial equipment sectors.",
    "image": "10.jpg",
    "category": "Technology",
    "date": "2025-10-21"
  },
  {
    "id": 11,
    "title": "Semey holds first direct mayoral election in Kazakhstan’s modern history",
    "excerpt": "The city of Semey elected its akim (mayor) directly for the first time on 12 October 2025, a milestone in Kazakhstan’s local‑governance reforms.",
    "image": "11.jpg",
    "category": "Politics",
    "date": "2025-10-12"
  },
  {
    "id": 12,
    "title": "Kazakhstan to privatise football clubs under government sports reform agenda",
    "excerpt": "As part of a broader reform in October 2025, Kazakhstan’s government has ordered a timeline for the privatisation of football clubs to encourage private investment and reduce state budget burden.",
    "image": "12.jpg",
    "category": "Sports",
    "date": "2025-10-01"
  },
  {
    "id": 13,
    "title": "Kazakhstan positions itself as digital hub for Central Asia with AI and blockchain rollout",
    "excerpt": "With new legislation and infrastructure for AI and blockchain, Kazakhstan is aiming to become the region’s top digital innovation centre by 2029, supported by U.S.‑Kazakh initiatives.",
    "image": "13.jpg",
    "category": "Technology",
    "date": "2025-10-08"
  },
  {
    "id": 14,
    "title": "Kazakhstan’s trade turnover with China rises as industrial cooperation expands",
    "excerpt": "Trade between Kazakhstan and China reached USD 14.9 billion in the first half of 2025, up 5.9 % year‑on‑year, as both countries seek deeper industrial and infrastructure ties.",
    "image": "14.jpg",
    "category": "Business",
    "date": "2025-09-02"
  },
  {
    "id": 15,
    "title": "New agricultural support scheme ‘Ken Dala‑2’ opens for applications",
    "excerpt": "From October 1 2025, Kazakhstan’s updated agricultural credit and insur­ance scheme kicks in, offering preferential loans and guarantees to farmers preparing for the next season.",
    "image": "15.jpg",
    "category": "Business",
    "date": "2025-10-01"
  },
  {
    "id": 16,
    "title": "Youth sports programmes get major boost under national sports strategy",
    "excerpt": "Kazakhstan’s Ministry of Tourism and Sports announced new funding and infrastructure plans to expand youth and community sports, ahead of international competitions.",
    "image": "16.jpg",
    "category": "Sports",
    "date": "2025-10-15"
  },
  {
    "id": 17,
    "title": "Almaty hosts international figure‑skating challenge in October",
    "excerpt": "The 2025 CS Denis Ten Memorial Challenge in Almaty brought senior‑level skaters to Kazakhstan and highlighted the country’s growing presence in winter‑sports hosting.",
    "image": "17.jpg",
    "category": "Sports",
    "date": "2025-10-01"
  },
  {
    "id": 18,
    "title": "Kazakhstan’s economy grows 6.3% in first nine months of 2025",
    "excerpt": "Preliminary figures show GDP growth of 6.3 % year‑on‑year in Kazakhstan through September 2025, reflecting resilience despite external pressures.",
    "image": "18.jpg",
    "category": "Business",
    "date": "2025-10-30"
  },
  {
    "id": 19,
    "title": "Kazakhstan’s housing‑service fee rules to change from October 18",
    "excerpt": "New regulations set to recalculate maintenance fees in apartment buildings from October 18 2025, aligning costs with actual service prices and inflation.",
    "image": "19.jpg",
    "category": "Politics",
    "date": "2025-10-18"
  },
  {
    "id": 20,
    "title": "Kazakhstan holds international ice‑hockey women’s tournament in Oskemen",
    "excerpt": "The 2026 IIHF Women’s Asia Championship is scheduled to be held in Oskemen, Kazakhstan from 5‑8 November 2025 — strengthening the country’s role in Asian sports events.",
    "image": "20.jpg",
    "category": "Sports",
    "date": "2025-10-24"
  }
];
  window.articles = articles; 


  function getSavedIds(){ return JSON.parse(localStorage.getItem('news_saved')||'[]'); }
  function getSavedArticles(){
    const ids = getSavedIds();
    return window.articles.filter(a=>ids.includes(a.id));
  }
  function saveFavorite(id){
    const saved = getSavedIds();
    if(saved.includes(id)) return alert('Already saved');
    saved.push(id); localStorage.setItem('news_saved', JSON.stringify(saved));
    alert('Saved to your reading list (localStorage)');
    renderSavedPreview(); 
  }
  function removeSaved(id){
    let saved = getSavedIds();
    saved = saved.filter(x=>x!==id);
    localStorage.setItem('news_saved', JSON.stringify(saved));
    renderSavedPreview();
  }

  function renderSavedPreview(){
    const wrap = document.getElementById('saved-preview');
    if(!wrap) return;
    const saved = getSavedArticles();
    if(saved.length===0){ wrap.innerHTML = '<div style="padding:14px;color:var(--muted)">No saved articles yet.</div>'; return; }
    wrap.innerHTML = saved.map(a=>`
      <article class="card" tabindex="0" role="article" aria-labelledby="s${a.id}" style="align-items:center">
        <img src="${a.image}" alt="Image for ${a.title}" style="width:110px;height:72px">
        <div style="flex:1">
          <div class="kicker">${a.category} • ${a.date}</div>
          <h3 id="s${a.id}" style="font-size:15px;margin:4px 0">${a.title}</h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn" onclick="openArticle(${a.id})">Read</button>
          <button class="btn ghost" onclick="removeSaved(${a.id})">Remove</button>
        </div>
      </article>
    `).join('');
  }
  const list = document.getElementById('articles-list');
  if(list) renderArticles(articles);

  const searchInput = document.getElementById('search-input');
  if(searchInput){
    searchInput.addEventListener('input', (e)=>{
      const q = e.target.value.trim().toLowerCase();
      const filtered = articles.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
      renderArticles(filtered);
      localStorage.setItem('last_search', q);
    });
  }

  const catFilter = document.getElementById('cat-filter');
  if(catFilter){
    catFilter.addEventListener('change', (e)=>{
      const v = e.target.value;
      const filtered = v === 'all' ? articles : articles.filter(a=>a.category===v);
      renderArticles(filtered);
    });
  }

  const signupForm = document.getElementById('signup-form');
  if(signupForm){
    signupForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = signupForm.querySelector('#su-name').value.trim();
      const email = signupForm.querySelector('#su-email').value.trim().toLowerCase();
      const pass = signupForm.querySelector('#su-pass').value;
      const phone = signupForm.querySelector('#su-phone').value.trim();
      const errors = [];

      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
      if(pass.length < 8 || !/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) errors.push("Password must be at least 8 chars, include an uppercase letter and a number.");
      if(!/^\+?\d{9,15}$/.test(phone)) errors.push("Phone should contain only digits and an optional leading + (9-15 digits).");
      if(!name) errors.push("Name is required.");

      const errorsEl = signupForm.querySelector('.form-errors');
      if(errors.length){ errorsEl.innerHTML = errors.map(e=>`<div>${e}</div>`).join(''); errorsEl.classList.remove('hidden'); return; }
      errorsEl.classList.add('hidden');

      const users = JSON.parse(localStorage.getItem('news_users')||'[]');
      if(users.find(u=>u.email===email)){ errorsEl.innerHTML = "<div>User already exists. Please log in.</div>"; errorsEl.classList.remove('hidden'); return; }
      users.push({name,email,pass,phone});
      localStorage.setItem('news_users', JSON.stringify(users));
      localStorage.setItem('news_current', JSON.stringify({name,email}));
      window.location.href = 'profile.html';
    });
  }

  const loginForm = document.getElementById('login-form');
  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = loginForm.querySelector('#li-email').value.trim().toLowerCase();
      const pass = loginForm.querySelector('#li-pass').value;
      const users = JSON.parse(localStorage.getItem('news_users')||'[]');
      const u = users.find(x=>x.email===email && x.pass===pass);
      const errorsEl = loginForm.querySelector('.form-errors');
      if(!u){ errorsEl.innerHTML = "<div>Invalid credentials. Try again.</div>"; errorsEl.classList.remove('hidden'); return; }
      errorsEl.classList.add('hidden');
      localStorage.setItem('news_current', JSON.stringify({name:u.name,email:u.email}));
      window.location.href = 'profile.html';
    });
  }

  const profileBox = document.getElementById('profile-box');
  if(profileBox){
    const cur = JSON.parse(localStorage.getItem('news_current')||'null');
    if(!cur){ profileBox.innerHTML = '<p>Please <a href="login.html">log in</a> to view your profile.</p>'; }
    else{
      profileBox.innerHTML = `
        <h2>Welcome, ${escapeHtml(cur.name)}</h2>
        <p><strong>Email:</strong> ${escapeHtml(cur.email)}</p>
        <p><button id="logout" class="btn ghost">Log out</button></p>
      `;
      document.getElementById('logout').addEventListener('click', ()=>{ localStorage.removeItem('news_current'); window.location.href='index.html';});
    }
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = contactForm.querySelector('#c-name').value.trim();
      const email = contactForm.querySelector('#c-email').value.trim();
      const msg = contactForm.querySelector('#c-msg').value.trim();
      const errors = [];
      if(!name) errors.push("Name is required.");
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Valid email required.");
      if(msg.length < 10) errors.push("Message must be at least 10 characters.");
      const errorsEl = contactForm.querySelector('.form-errors');
      if(errors.length){ errorsEl.innerHTML = errors.map(e=>`<div>${e}</div>`).join(''); errorsEl.classList.remove('hidden'); return; }
      errorsEl.classList.add('hidden');
      const msgs = JSON.parse(localStorage.getItem('news_messages')||'[]');
      msgs.push({name,email,msg,date:new Date().toISOString()});
      localStorage.setItem('news_messages', JSON.stringify(msgs));
      contactForm.reset();
      contactForm.querySelector('.form-success').classList.remove('hidden');
      setTimeout(()=> contactForm.querySelector('.form-success').classList.add('hidden'), 3500);
    });
  }

  function renderArticles(items){
    if(!list) return;
    if(items.length===0){ list.innerHTML = '<p>No articles found.</p>'; return; }
    list.innerHTML = items.map(a=>`
      <article class="card" tabindex="0" role="article" aria-labelledby="a${a.id}">
        <img src="${a.image}" alt="Image for ${escapeHtml(a.title)}">
        <div>
          <div class="kicker">${escapeHtml(a.category)} • ${escapeHtml(a.date)}</div>
          <h3 id="a${a.id}">${escapeHtml(a.title)}</h3>
          <p>${escapeHtml(a.excerpt)}</p>
          <div class="meta-row" style="margin-top:10px"><button class="btn" onclick="openArticle(${a.id})">Read</button><button class="btn ghost" onclick="saveFavorite(${a.id})">Save</button></div>
        </div>
      </article>
    `).join('');
  }

  window.openArticle = function(id){
    const a = articles.find(x=>x.id===id);
    if(!a) return alert('Article not found');
    localStorage.setItem('news_open', JSON.stringify(a));
    window.location.href='article.html';
  }
  window.saveFavorite = function(id){
    const fav = JSON.parse(localStorage.getItem('news_saved')||'[]');
    if(fav.includes(id)) return alert('Already saved');
    fav.push(id); localStorage.setItem('news_saved', JSON.stringify(fav));
    alert('Saved to your reading list (localStorage)');
  }

  function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  const weatherBox = document.getElementById('weather-info');
  if (weatherBox) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.31&longitude=69.28&current_weather=true')
      .then(res => res.json())
      .then(data => {
        const w = data.current_weather;
        weatherBox.innerHTML = `🌤️ ${w.temperature}°C — Wind ${w.windspeed} km/h`;
      })
      .catch(() => {
        weatherBox.innerHTML = '⚠️ Weather data unavailable right now.';
      });
  }
});

  window.toggleSavedSection = function(){
    const sec = document.getElementById('saved-section');
    if(!sec) return;
    sec.style.display = (sec.style.display === 'none' || !sec.style.display) ? 'block' : 'none';
    renderSavedPreview();
    if(sec.style.display === 'block') sec.scrollIntoView({behavior:'smooth'});
  };

  try{ document.addEventListener('DOMContentLoaded', renderSavedPreview); }catch(e){}
