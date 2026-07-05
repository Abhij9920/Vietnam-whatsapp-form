<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Early Childhood Education | OIHE</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;450;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --ink:#15243B;
  --ink-2:#28344c;
  --muted:#6a7588;
  --faint:#9aa3b2;
  --paper:#F5F6F8;
  --card:#FFFFFF;
  --line:#E6E9EF;
  --line-2:#d6dae3;
  --accent:#F5C200;
  --accent-soft:rgba(245,194,0,.55);
  --field:14px;
}

html{scroll-behavior:smooth}
body{
  font-family:'Inter',system-ui,sans-serif;
  background:var(--paper);
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
  line-height:1.6;
}

/* layout shell */
.wrap{max-width:1080px;margin:0 auto;padding:0 28px}

/* ── HEADER ── */
header{
  position:sticky;top:0;z-index:50;
  background:rgba(245,246,248,.82);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
.header-inner{
  max-width:1080px;margin:0 auto;padding:0 28px;height:72px;
  display:flex;align-items:center;justify-content:space-between;
}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none}
.brand .mark{font-family:'Fraunces',serif;font-weight:600;font-size:44px;letter-spacing:.01em;color:var(--ink)}
.brand .sub{font-size:13px;color:var(--faint);letter-spacing:.02em}
.brand .sub::before{content:'';display:inline-block;width:1px;height:11px;background:var(--line-2);margin-right:10px;vertical-align:middle}
.nav-cta{
  display:inline-flex;align-items:center;gap:7px;
  font-size:13px;font-weight:500;color:var(--ink);text-decoration:none;
  padding:8px 16px;border:1px solid var(--line-2);border-radius:8px;
  transition:border-color .18s,background .18s;
}
.nav-cta:hover{border-color:var(--ink);background:#fff}
.nav-cta svg{transition:transform .18s}
.nav-cta:hover svg{transform:translateX(2px)}

/* ── APPLY (top) ── */
.apply{padding:64px 0 56px}
.eyebrow{
  font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
  color:var(--muted);margin-bottom:18px;
  display:flex;align-items:center;gap:10px;
}
.eyebrow .tick{width:14px;height:1px;background:var(--accent)}
.apply-head{max-width:620px;margin:0 auto 36px;text-align:center}
.apply-head h1{
  font-family:'Fraunces',serif;font-weight:500;
  font-size:clamp(32px,4.6vw,50px);line-height:1.05;letter-spacing:-.015em;
  color:var(--ink);
}
.apply-head .eyebrow{justify-content:center}
.apply-head p{font-size:16px;color:var(--muted);margin-top:16px;max-width:480px;margin-left:auto;margin-right:auto}

/* form card */
.card{
  max-width:660px;margin:0 auto;
  background:var(--card);
  border:1px solid var(--line);
  border-radius:18px;
  padding:36px 38px 34px;
  box-shadow:0 1px 2px rgba(21,36,59,.04),0 18px 50px rgba(21,36,59,.06);
}

/* progress */
.progress{display:flex;gap:7px;margin-bottom:30px}
.seg{height:3px;flex:1;border-radius:99px;background:var(--line);transition:background .4s ease}
.seg.on{background:var(--ink)}

.group-label{
  font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;
  color:var(--faint);margin:0 0 16px;
}
.group-label.mt{margin-top:30px}

.fg{margin-bottom:16px}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
label.lbl{display:block;font-size:13px;font-weight:500;color:var(--ink-2);margin-bottom:7px}
label.lbl .req{color:var(--accent);font-weight:700}

input[type=text],input[type=email],input[type=tel],select{
  width:100%;padding:12px 14px;
  border:1px solid var(--line-2);border-radius:10px;
  font-family:inherit;font-size:var(--field);color:var(--ink);
  background:#fff;outline:none;
  transition:border-color .18s,box-shadow .18s;
}
input::placeholder{color:var(--faint)}
input:focus,select:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(21,36,59,.08)}
select{
  appearance:none;cursor:pointer;padding-right:38px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236a7588' fill='none' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 14px center;
}

/* choice tiles */
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.tiles.one{grid-template-columns:1fr}
.tile{
  display:flex;align-items:center;gap:11px;
  padding:13px 15px;border:1px solid var(--line-2);border-radius:11px;
  cursor:pointer;font-size:13.5px;color:var(--ink-2);background:#fff;
  transition:border-color .15s,background .15s;user-select:none;
}
.tile input{position:absolute;opacity:0;pointer-events:none}
.tile .dot{
  width:16px;height:16px;border-radius:50%;border:1.5px solid var(--line-2);
  flex-shrink:0;position:relative;transition:border-color .15s;
}
.tile:hover{border-color:var(--ink-2)}
.tile.sel{border-color:var(--ink);background:rgba(21,36,59,.025)}
.tile.sel .dot{border-color:var(--ink)}
.tile.sel .dot::after{
  content:'';position:absolute;inset:3px;border-radius:50%;background:var(--ink);
}
.tile .check{margin-left:auto;opacity:0;color:var(--accent);transition:opacity .15s;flex-shrink:0}
.tile.sel .check{opacity:1}

.divider{border:none;border-top:1px solid var(--line);margin:26px 0}

/* consent + submit */
.consent{
  display:flex;gap:11px;align-items:flex-start;
  font-size:12px;color:var(--muted);line-height:1.55;
  margin-bottom:20px;
}
.consent svg{flex-shrink:0;margin-top:1px;color:var(--faint)}
.consent strong{color:var(--ink-2);font-weight:600}

.submit{
  width:100%;padding:15px 22px;border:none;border-radius:11px;
  background:var(--ink);color:#fff;
  font-family:inherit;font-size:15px;font-weight:600;letter-spacing:.01em;
  cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;
  transition:background .2s,transform .15s,box-shadow .2s;
}
.submit:hover{background:#0d1a2e;transform:translateY(-1px);box-shadow:0 12px 30px rgba(21,36,59,.2)}
.submit:active{transform:translateY(0)}
.submit svg{transition:transform .18s}
.submit:hover svg{transform:translateX(3px)}

.reassure{
  display:flex;justify-content:center;gap:22px;margin-top:18px;flex-wrap:wrap;
}
.reassure span{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--muted)}
.reassure svg{color:var(--accent)}

/* ── STORY (bottom) ── */
.story{
  border-top:1px solid var(--line);
  padding:72px 0 64px;
}
.story-head{max-width:680px;margin:0 auto;text-align:center}
.story h2{
  font-family:'Fraunces',serif;font-weight:500;
  font-size:clamp(38px,6vw,68px);line-height:1.03;letter-spacing:-.02em;
  color:var(--ink);
}
.mark{
  background:linear-gradient(transparent 64%,var(--accent-soft) 0);
  padding:0 .04em;
}
.story-head .lead{
  font-size:17px;color:var(--muted);line-height:1.7;
  max-width:540px;margin:22px auto 0;
}

/* stat row — hairline separated, no boxes */
.stats{
  display:flex;justify-content:center;flex-wrap:wrap;
  max-width:760px;margin:52px auto 0;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.stat{
  flex:1;min-width:150px;text-align:center;
  padding:30px 20px;
  border-right:1px solid var(--line);
}
.stat:last-child{border-right:none}
.stat .n{
  font-family:'Fraunces',serif;font-weight:500;
  font-size:clamp(34px,4.4vw,46px);line-height:1;color:var(--ink);letter-spacing:-.01em;
}
.stat .l{
  font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--faint);margin-top:10px;
}

/* trust */
.trust{
  display:flex;justify-content:center;flex-wrap:wrap;gap:14px 32px;
  margin:44px auto 0;max-width:760px;
}
.trust li{list-style:none;display:flex;align-items:center;gap:9px;font-size:14px;color:var(--ink-2)}
.trust svg{color:var(--accent);flex-shrink:0}

/* ── FOOTER ── */
footer{border-top:1px solid var(--line);background:#fff}
.foot-inner{
  max-width:1080px;margin:0 auto;padding:26px 28px;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;
}
.foot-inner .org{font-size:13px;color:var(--muted)}
.foot-inner .org b{color:var(--ink);font-weight:600}
.intake{
  font-size:12.5px;color:var(--ink-2);
  display:inline-flex;align-items:center;gap:8px;
}
.intake .pip{width:6px;height:6px;border-radius:50%;background:var(--accent)}

/* ── MODAL ── */
.modal-bg{display:none;position:fixed;inset:0;z-index:200;background:rgba(21,36,59,.6);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px}
.modal-bg.on{display:flex}
.modal{
  background:#fff;border-radius:18px;padding:46px 44px;max-width:420px;width:100%;text-align:center;
  animation:pop .32s cubic-bezier(.18,.89,.32,1.28) both;
}
@keyframes pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
.modal-ic{width:60px;height:60px;border-radius:50%;background:rgba(245,194,0,.14);display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
.modal h3{font-family:'Fraunces',serif;font-weight:500;font-size:26px;color:var(--ink);margin-bottom:10px}
.modal p{font-size:14.5px;color:var(--muted);line-height:1.65;margin-bottom:24px}
.modal-btn{background:var(--ink);color:#fff;border:none;padding:12px 26px;border-radius:9px;font-family:inherit;font-size:14px;font-weight:500;cursor:pointer;transition:background .2s}
.modal-btn:hover{background:#0d1a2e}

/* ── ENTRANCE ── */
.rise{opacity:0;transform:translateY(14px);animation:rise .7s cubic-bezier(.22,.61,.36,1) forwards}
.d1{animation-delay:.05s}.d2{animation-delay:.13s}.d3{animation-delay:.21s}
@keyframes rise{to{opacity:1;transform:none}}

/* ── RESPONSIVE ── */
@media(max-width:680px){
  .wrap,.header-inner,.foot-inner{padding-left:20px;padding-right:20px}
  .card{padding:28px 22px 28px;border-radius:16px}
  .row2{grid-template-columns:1fr}
  .tiles{grid-template-columns:1fr}
  .apply{padding:44px 0 40px}
  .story{padding:56px 0 52px}
  .stat{flex:1 1 50%;border-right:none;border-bottom:1px solid var(--line)}
  .stat:nth-child(odd){border-right:1px solid var(--line)}
  .brand .sub{display:none}
  .reassure{gap:14px}
}

@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
  .rise{opacity:1;transform:none}
}
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <a href="#" class="brand">
      <span class="mark">OIHE</span>
      <span class="sub">Ozford Institute of Higher Education</span>
    </a>

  </div>
</header>

<!-- ── FORM (TOP) ── -->
<section class="apply" id="apply">
  <div class="wrap">
    <div class="apply-head rise d1">
      <div class="eyebrow"><span class="tick"></span> Postgraduate · Early Childhood Education</div>
      <h1>Start your application</h1>
      <p>A few quick details and our admissions team will map out your path into early childhood teaching.</p>
    </div>

    <div class="card rise d2">
      <div class="progress" aria-hidden="true">
        <span class="seg on"></span>
        <span class="seg"></span>
        <span class="seg"></span>
      </div>

      <form id="mainForm" novalidate>

        <p class="group-label">Your details</p>
        <div class="row2">
          <div class="fg">
            <label class="lbl" for="fullName">Full name <span class="req">*</span></label>
            <input type="text" id="fullName" name="fullName" placeholder="e.g. Sarah Johnson" required>
          </div>
          <div class="fg">
            <label class="lbl" for="phone">Mobile number <span class="req">*</span></label>
            <input type="tel" id="phone" name="phone" placeholder="+61 4XX XXX XXX" required>
          </div>
        </div>
        <div class="fg">
          <label class="lbl" for="email">Email address <span class="req">*</span></label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required>
        </div>

        <div class="fg">
          <label class="lbl">Student type <span class="req">*</span></label>
          <div class="tiles">
            <label class="tile">
              <input type="radio" name="stype" value="Domestic" required>
              <span class="dot"></span>
              <span>🇦🇺 &nbsp;Domestic student</span>
              <svg class="check" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
            </label>
            <label class="tile">
              <input type="radio" name="stype" value="International">
              <span class="dot"></span>
              <span>🌏 &nbsp;International student</span>
              <svg class="check" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
            </label>
          </div>
        </div>

        <hr class="divider">

        <p class="group-label">Course interest</p>
        <div class="tiles one">
          <label class="tile">
            <input type="radio" name="course" value="Graduate Diploma in Early Childhood Education" required>
            <span class="dot"></span>
            <span>Graduate Diploma in Early Childhood Education</span>
            <svg class="check" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
          </label>
          <label class="tile">
            <input type="radio" name="course" value="Master of Teaching (Early Childhood)">
            <span class="dot"></span>
            <span>Master of Teaching (Early Childhood)</span>
            <svg class="check" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
          </label>
          <label class="tile">
            <input type="radio" name="course" value="Not sure yet">
            <span class="dot"></span>
            <span>Not sure yet — I'd like more information</span>
            <svg class="check" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
          </label>
        </div>

        <hr class="divider">

        <p class="group-label">Your background</p>
        <div class="row2">
          <div class="fg">
            <label class="lbl" for="eng">English level <span class="req">*</span></label>
            <select id="eng" name="eng" required>
              <option value="" disabled selected>Select your level</option>
              <option>Beginner</option>
              <option>Elementary</option>
              <option>Intermediate</option>
              <option>Upper-Intermediate</option>
              <option>Advanced</option>
              <option>Completed an official English test</option>
              <option>Not sure</option>
            </select>
          </div>
          <div class="fg">
            <label class="lbl" for="edu">Highest education <span class="req">*</span></label>
            <select id="edu" name="edu" required>
              <option value="" disabled selected>Select level</option>
              <option>High School</option>
              <option>Certificate or Diploma</option>
              <option>Bachelor Degree</option>
              <option>Graduate Certificate / Diploma</option>
              <option>Master Degree</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <hr class="divider">

        <div class="consent">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <p>By submitting, I agree to be contacted by OIHE regarding my enquiry. Information handled per OIHE's <strong>privacy policy</strong>.</p>
        </div>

        <button type="submit" class="submit">
          Send enquiry via Zalo
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </button>

        <div class="reassure">
          <span><svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" clip-rule="evenodd"/></svg> Takes under 2 minutes</span>
          <span><svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" clip-rule="evenodd"/></svg> No payment required</span>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- ── STORY (BOTTOM) ── -->
<section class="story">
  <div class="wrap">
    <div class="story-head rise d3">
      <h2>Shape <span class="mark">little minds.</span><br>Build a big career.</h2>
      <p class="lead">Earn a postgraduate qualification in Early Childhood Education at OIHE — and step into one of Australia's fastest-growing, most rewarding professions.</p>
    </div>

    <div class="stats">
      <div class="stat"><div class="n">23</div><div class="l">Years running</div></div>
      <div class="stat"><div class="n">1,500+</div><div class="l">Graduates</div></div>
      <div class="stat"><div class="n">21,000+</div><div class="l">Educators needed</div></div>
    </div>

    <ul class="trust">
      <li><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Australian higher education provider</li>
      <li><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Approved practicum placements</li>
      <li><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Melbourne &amp; Brisbane campuses</li>
    </ul>
  </div>
</section>

<footer>
  <div class="foot-inner">
    <span class="org"><b>OIHE</b> · Ozford Institute of Higher Education · Melbourne &amp; Brisbane</span>
    <span class="intake"><span class="pip"></span> Next intake — 3 August 2026</span>
  </div>
</footer>


<script>
const form = document.getElementById('mainForm');
const segs = document.querySelectorAll('.seg');

// tile selection
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', () => {
    const radio = tile.querySelector('input[type=radio]');
    radio.checked = true;
    document.querySelectorAll(`input[name="${radio.name}"]`).forEach(r => r.closest('.tile').classList.remove('sel'));
    tile.classList.add('sel');
    updateProgress();
  });
});

function updateProgress(){
  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const em = document.getElementById('email');
  const detailsDone = name && phone && em.value.trim() && em.checkValidity();
  segs[1].classList.toggle('on', !!detailsDone);

  const choicesDone = form.querySelector('input[name=stype]:checked') &&
                      form.querySelector('input[name=course]:checked') &&
                      document.getElementById('eng').value &&
                      document.getElementById('edu').value;
  segs[2].classList.toggle('on', !!choicesDone);
}

form.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', updateProgress);
  el.addEventListener('change', updateProgress);
});

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz5y6XyPMMw_alPlix4hMheI3m7mBHcfPu7KM3OO1p-5maAQdtLtB7D02HKYaMf016Tgg/exec";

form.addEventListener('submit', e => {
  e.preventDefault();
  if(!form.checkValidity()){ form.reportValidity(); return; }

  const name    = document.getElementById('fullName').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const email   = document.getElementById('email').value.trim();
  const stype   = (form.querySelector('input[name=stype]:checked') || {}).value || '';
  const course  = (form.querySelector('input[name=course]:checked') || {}).value || '';
  const eng     = document.getElementById('eng').value;
  const edu     = document.getElementById('edu').value;

  // ── Send to Google Sheets via Apps Script ──
  // Apps Script uses JSON.parse(e.postData.contents), so we send JSON as text/plain.
  // text/plain is a "simple" CORS request — no preflight needed, works with no-cors.
  const payload = JSON.stringify({
    fullName:  name,
    phone:     phone,
    email:     email,
    stype:     stype,   // student type (International / Domestic)
    course:    course,  // course interest
    eng:       eng,     // English level
    edu:       edu,     // highest education
    requestId: Date.now()
  });
  fetch(WEBHOOK_URL, {
    method:  'POST',
    mode:    'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body:    payload
  });

  // ── Open Zalo ──
  // Note: Zalo chat links don't support pre-filled message text like WhatsApp does,
  // so the enquiry details are sent to Google Sheets above, and the user simply
  // lands in a fresh Zalo chat with this number.
  const zaloNumber = '61485669240';
  const zaloUrl = `https://zalo.me/${zaloNumber}`;
  window.open(zaloUrl, '_blank');
});
</script>
</body>
</html>
