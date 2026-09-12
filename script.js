const RELEASE_AT = Date.parse('2026-09-17T17:00:00Z');
const chapters = ['THE SIGNAL','THE REVEAL','THE CELEBRATION',"SHADOW'S ARCHIVE",'THE OCEAN INCIDENT','ONE WITH THE OCEAN'];
const chapterNumerals = ['I','II','III','IV','V','VI'];
const archiveRecords = [
  {id:'01',title:'RECORD SLOT',meta:'CONTENT PENDING APPROVAL',text:'A future personal archive record will live here.',kind:'PLACEHOLDER ARTIFACT'},
  {id:'02',title:'RECORD SLOT',meta:'CONTENT PENDING APPROVAL',text:'A future memory, quote, or message will live here.',kind:'PLACEHOLDER ARTIFACT'},
  {id:'03',title:'SUBJECT PROFILE',meta:'SHADOW // PERSONAL ARCHIVE',text:'NAME: SHADOW\nDISCORD STATUS: ACTIVE\nCURRENT STATUS: CELEBRATING ANOTHER YEAR',kind:'STRUCTURED RECORD'}
];
const contributions = [
  {type:'message',from:'Revy',message:`Happy birthday Shadow!!

Hope you have a good birthday and actually get to enjoy your day for once. I just wanted to say I’m genuinely glad I got to meet you and become friends with you. We’ve had a lot of random conversations and dumb moments but I really do appreciate having you around.

I’m sorry I haven’t been around as much lately. I know I’ve been pretty on and off and haven’t really been able to hang out or talk as much as I used to. I’ve had a lot of stuff going on, but I’m slowly getting back into things, so hopefully I’ll be around more again soon.

You’ve always been someone I could talk to, and I appreciate all the times you’ve checked up on me or tried to help me out when I had stuff going on. Even when you probably didn’t think much of it all those little things meant a lot to me. You’ve given me advice, made sure I was doing alright, and even just talking with you has helped take my mind off things sometimes.

And we still gotta isekai together one day :>

I know you’ve got a lot going on with med school and everything that comes with it, so I hope this next year is a good one for you and that things work out the way you want them to. You’ve already put a lot of work into getting where you are and I'm wishing you all the best so hopefully it all pays off. Just remember to take care of yourself too and don’t let school completely consume you.

Hopefully I’ll be around more and we can actually chill and talk like we used to. Until then, keep doing your thing and keep pushing through everything you’ve got going on.

Happy birthday again bro. I hope you have a great day and that this next year treats you well. You deserve it. Love ya homie.`,date:'2026.09.18'},
  {type:'card',from:'CONTRIBUTOR',image:'assets/images/contributions/card-placeholder.svg',date:'2026.09.18',caption:'Development placeholder card.'},
  {type:'message',from:'Ruby',message:`Hello lil bro! I am glad I met you, we might not be related by blood but I still consider you as my real brother. You are such a kind and caring and amazing person. I want you to live for 150- no 300 years like a tortoise hehe. And don't say you gonna be single forever hmph humph. I want you to find a person who will love you more than anyone in this world.
And last but not least love ya lil bro chuu~
And you will be my eternal slave forever
Happy 20th birthday you little brat!`,date:'2026.09.18'},
  {type:'card',from:'CONTRIBUTOR',image:'assets/images/contributions/card-placeholder-02.svg',date:'2026.09.18',caption:'Development placeholder card.'},
  {type:'message',from:'Nams',message:'Hiii Shadoww! HAPPY BIRTHDAY!!! I hope you spend the day of your birth the best! I wish you more blessings and happiness!!🎂🎉✨\n------ Nams',date:'2026.09.18'},
  {type:'message',from:'Izumi',message:`Heya Shadow
Happy Bday bud
:jinhsi_gojo:
Wishing you so much luck on your future and happiness, stay focused on your current path and don't listen or bother bs around with what others have to say
Thanks for the many times you've helped me a lot buddy :yangyangheart:
It truly means a lot
Once again Happy Birthday and wishing only the best and only the best`,date:'2026.09.18'},
  {type:'message',from:'StormTempest',message:`Happy birthday, Shadow, hope your day shines bright,
May laughter find you from morning to night.
Keep chasing your dreams, keep being you,
And may this year bring good things your way too. 🎂`,date:'2026.09.18'},
  {type:'message',from:'Coffee',message:`Dear Shadow ,
Happy Birthday! Today is all about celebrating you, the genuine goodness you carry, and the incredible impact you have on everyone around you. I want to take a moment to reflect on your character and thank you for being such an exceptional person.
Looking back across our friendship, so many of my favorite memories have you right at the center. You are a partner in every adventure, a source of great conversations, and the first person I reach out to when life presents a milestone or a challenge. You set a standard for kindness, integrity, and humor that inspires everyone in your circle.
Your kindness is quiet, instinctual, and constant. Whether it is making people feel truly heard or offering a helping hand long before being asked, you have a rare ability to step up precisely when someone needs support. Beyond that, your loyalty defines who you are. Whenever life gets chaotic, you are a reliable, grounding presence. Knowing you have my back gives me strength and confidence.
You handle life’s hurdles with grace, patience, and a calm focus that commands respect. You bring a warmth into every room you enter, and your sense of humor is completely contagious. Thank you for the endless memories, the shared laughter, the deep talks, and the unspoken trust between us.
My wish for you in the year ahead is that you receive back all the goodness, joy, and encouragement you so freely give to others. May this year bring you closer to your biggest goals and surround you with happiness.
Happy Birthday, my friend! I’m truly grateful for our friendship.

------ Exclusive coffee supplier aka ZhugeBasha`,date:'2026.09.18'},
  {type:'message',from:'Cheese',message:`Many many happy returns of the day, Shadow/void catto nyaa~ 🎂

May this birthday mark the beginning of a really amazing year for you, filled with good moments, good luck, and of course, insane gacha luck. 😭🙏

Also, thank you so much for taking care of the server and handling everything. Because of you, we barely have anything to worry about, and it genuinely means a lot. Really appreciate you and everything you do for the server. 🫶

Hope you have a wonderful birthday and an even better year ahead. Enjoy your day! 🎉
--- by Cheese Catto`,date:'2026.09.18'},
  {type:'message',from:'Kuro',message:`⋆˚꩜｡ HAPPY BIRTHDAY ｡꩜˚⋆
╰・Void Catto Nyaaa~ !! :detectivo:

Another year closer to becoming an ancient Gambler, may your pulls be extremely lucky, may you never get jump scared by a 4 star, and may you never say “one last pull” 47 times in a row :encorewheeezee:

⋆｡° ✩ NYAA BIRTHDAY !! :Hug:
(Hope you wallet survives~)`,date:'2026.09.18'},
  {type:'message',from:'King',message:`May this year bring you more happiness
my dear friend may your life be more beautiful and peaceful
and hope you can accomplish your goal in life
happy birthday dear friend shadow.
-- King/ HosenKing`,date:'2026.09.18'},
  {type:'message',from:'Loki',message:`Happy birthday, Shadow/void catto nyaa~
Wishing you a full year of unending luck, both in gacha and in life. And thank you so much for taking care of the server because of you, we barely have anything to worry about. Really appreciate you. Happy birthday`,date:'2026.09.18'},
  {type:'message',from:'Minze',message:`Happy Birthday, Shadow/Void Catto Nyaa!

Here's to another year of keeping the server in check, banning chaos before it even spawns, and somehow still finding time to grind for that 0.6% pull rate

May your pity counter be low, your rolls be legendary, and your day be as smooth as your admin logs. Thanks for everything you do to keep this place running — hope today's a certified 5-star day, no pity needed!`,date:'2026.09.18'},
  {type:'message',from:'Kurumii',message:`Hello my dear child, :dorodance2:
Still thinking about where should i start from but here's something i put up together.
As my 3rd child from this discord thingy, you are such a good and nice person. Good thing that you are not inheriting my wicked humor .
Even though we are not related by any means and just randomly met on discord, it's still great being knowing you.
You are a nice guy so try your best to live a good life.
Not gonna infect you with the 'stay single' curse so do try to find a great partner who understands you well. :VivianPat:
Here's some advice, you shall be obedient to your elder sister or you shall face consequences. :encorewheeezee~1:

So, Happy 20th birthday man!!
Best regards from this frequent profile changer aka Kurumii :KurumiLove:`,date:'2026.09.18'},

{
  type: 'card',
  from: 'Kurumii',
  image: 'assets/images/contributions/your-card-name.png',
  date: '2026.09.18',
  caption: 'Wishes from Kurumii.'
},
{
  type: 'card',
  from: 'Skadi',
  image: 'assets/images/contributions/skadi-wish.png',
  date: '2026.09.18',
  caption: 'Happy Birthday!!'
},
{
  type: 'card',
  from: 'Loki',
  image: 'assets/images/contributions/loki-wish.png',
  date: '2026.09.18',
  caption: 'Birthday Shadow.'
},
{
  type: 'card',
  from: 'Nexus/ I Go Meow',
  image: 'assets/images/contributions/nexus-wish.png',
  date: '2026.09.18',
  caption: 'Birthday card for Shadow.'
}
];
const wellWishers = [
  ['Izumi','izumi-pfp.png',['#6da9ff','#b5d8ff']],['Ruby','ruby-pfp.png',['#ff7897','#ffd0d8']],['Minze','mint-pfp.png',['#75d7bc','#d0fff0']],['Shin','shin-pfp.png',['#8e86ff','#d2cfff']],['Kuro','kuro-catto-nyaa-pfp.gif',['#7f91ad','#dbe7f5']],['cheese catto nyaa','cheese-catto-nyaa-pfp.png',['#f1c55e','#fff0b0']],['Revy','revy-pfp.png',['#d46f73','#ffc2ae']],['Kurumii','kurumii-pfp.png',['#a77aff','#e2cfff']],['Nexus','nexus-pfp.png',['#59c6d2','#c2fbff']],['Kad','kad-pfp.png',['#d28f62','#ffe0c4']],['Skadi','skadi-pfp.png',['#91b6e9','#e1efff']],['Saber','saber-pfp.png',['#82d1cb','#d1fff7']],['Bugs bunny','bugs-bunny-pfp.png',['#c4c9d8','#f4f5ff']],['Aprillis','aprillis-pfp.png',['#df9bd1','#ffe2f7']],['Stormtempest','stormtempest-pfp.png',['#7189d8','#c4d0ff']],['Gun','gun-pfp.png',['#9c9da9','#e5e5ef']],['Coffee','coffee-pfp.png',['#b4866a','#f2d0b5']],['Nams','nams-pfp.png',['#6fb8a5','#c5f0df']],['King','king-pfp.png',['#d2b26f','#fff0c9']],['Kami','kami-pfp.png',['#7ab4d9','#dff5ff']],['Loki','loki-pfp.png',['#7295d8','#d4e1ff']]
].map(([name,file,palette],index) => ({name,file,palette,index}));
const $ = selector => document.querySelector(selector);
const lock = $('#site-lock');
const app = $('#app');
const securityPass = $('#security-pass');
const securityForm = $('#security-form');
const securityInput = $('#security-input');
const securityStatus = $('#security-status');
let authority = sessionStorage.getItem('shadowArchiveAuthority');
let authenticated = false;
let devBypassProgression = false;
let bakaEarlyAccessGranted = sessionStorage.getItem('shadowArchiveBakaEarlyAccess') === 'true';
let bakaEarlyAccessDeclined = sessionStorage.getItem('shadowArchiveBakaEarlyAccess') === 'declined';
let currentChapter = 0;
let highestChapter = Number(localStorage.getItem('shadowArchiveHighestChapter')) || 0;
let unlocked = false;
let oceanAttempts = 0;
let activeAudio = null;
let backgroundMusic = null;
let backgroundMusicEnabled = true;
const deniaSubtitleCues = [
  { start: 0, end: 4, text: "Happy birthday!" },
  {
    start: 4,
    end: 10,
    text: "I sincerely wish that, as you journey forward, your heart stays full of happiness,"
  },
  {
    start: 10,
    end: 20.5,
    text: "and that nothing—no matter how absurd or painful—ever truly defeats you."
  }
];
let oceanCompleted = localStorage.getItem('shadowArchiveOceanComplete') === 'true';
if(!oceanCompleted && highestChapter > 4) highestChapter = 4;
let oceanScrollFrame = null;
let oceanScrollCancelled = false;
let oceanAtmosphereTimers = [];

function renderLockChapters(){ $('#lock-chapters').innerHTML = chapters.map((chapter,index)=>`<div>${chapterNumerals[index]} ${chapter} <span>🔒</span></div>`).join(''); }
function updateCountdown(){
  const remaining = Math.max(0, RELEASE_AT - Date.now());
  const days = Math.floor(remaining / 86400000); const hours = Math.floor(remaining % 86400000 / 3600000); const minutes = Math.floor(remaining % 3600000 / 60000); const seconds = Math.floor(remaining % 60000 / 1000);
  $('#countdown').textContent = `${String(days).padStart(2,'0')}:${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  if(remaining === 0 && authority === 'VOID' && !unlocked) unlockSite();
}
function updateArchiveTime(){
  const now = new Date(Date.now() + 7 * 60 * 60 * 1000);
  const pad = value => String(value).padStart(2,'0');
  const date = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}`;
  const time = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:00`;
  $('#archive-time').textContent = `${pad(now.getUTCDate())}.${pad(now.getUTCMonth() + 1)}.${now.getUTCFullYear()}   ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())} UTC+7`;
  $('#archive-time').dateTime = `${date}T${time}+07:00`;
}
function unlockSite(){ unlocked = true; lock.hidden = true; app.hidden = false; initApp(); startBackgroundMusic(); }
function startBackgroundMusic(){
  if(!backgroundMusic) backgroundMusic = new Audio('assets/audio/bgmusic.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.volume = .35;
  if(backgroundMusicEnabled && !activeAudio) backgroundMusic.play().catch(() => {});
}
function pauseBackgroundMusic(){ if(backgroundMusic) backgroundMusic.pause(); }
function resumeBackgroundMusic(){ if(backgroundMusicEnabled && !activeAudio) startBackgroundMusic(); }
function renderProgress(){ $('#chapter-progress').innerHTML = chapters.map((chapter,index)=>{ const inaccessible = !devBypassProgression && (index > highestChapter || (index === 5 && !oceanCompleted)); return `<button class="progress-dot ${index === 0 ? 'active':''}" data-go="${index}" aria-label="Chapter ${index + 1}: ${chapter}" ${inaccessible ? 'disabled':''}><span>${chapterNumerals[index]}</span></button>`; }).join(''); }
function showChapter(index, remember = true){
  currentChapter = Math.max(0, Math.min(5,index));
  if(currentChapter !== 4) stopOceanAutoScroll();
  if(!devBypassProgression && currentChapter > highestChapter){ highestChapter = currentChapter; localStorage.setItem('shadowArchiveHighestChapter', String(highestChapter)); }
  document.querySelectorAll('.chapter').forEach(chapter => chapter.classList.toggle('active', Number(chapter.dataset.chapter) === currentChapter));
  app.classList.toggle('chapter-nav-visible', currentChapter > 0);
  document.querySelectorAll('.progress-dot').forEach((dot,index) => { dot.classList.toggle('active', index === currentChapter); dot.disabled = !devBypassProgression && (index > highestChapter || (index === 5 && !oceanCompleted)); });
  if(remember) localStorage.setItem('shadowArchiveChapter', String(currentChapter));
  window.scrollTo({top:0,behavior:'smooth'});
  if(currentChapter === 4 && !oceanCompleted) scheduleOceanEntry();
}
function stopOceanAutoScroll(){
  if(oceanScrollFrame) cancelAnimationFrame(oceanScrollFrame);
  oceanScrollFrame = null;
  oceanScrollCancelled = true;
  window.scrollTo({top:window.scrollY, behavior:'auto'});
  document.removeEventListener('wheel', stopOceanAutoScroll);
  document.removeEventListener('touchstart', stopOceanAutoScroll);
  document.removeEventListener('pointerdown', stopOceanAutoScroll);
  document.removeEventListener('keydown', stopOceanAutoScroll);
}
function startOceanAutoScroll(){
  stopOceanAutoScroll();
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || currentChapter !== 4 || oceanCompleted) return;
  oceanScrollCancelled = false;
  ['wheel','touchstart','pointerdown','keydown'].forEach(type => document.addEventListener(type, stopOceanAutoScroll, {passive:true}));
  const target = $('#prevent-merger');
  if(!target) return;
  window.scrollTo({top:0, behavior:'auto'});
  const startY = window.scrollY;
  const targetY = Math.max(startY, target.getBoundingClientRect().top + startY - window.innerHeight * .7);
  const duration = window.innerWidth <= 700 ? 22000 : 18000;
  const startedAt = performance.now();
  const step = now => {
    if(oceanScrollCancelled || currentChapter !== 4) return;
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = progress * progress * (3 - 2 * progress);
    window.scrollTo({top:startY + (targetY - startY) * eased, behavior:'auto'});
    if(progress < 1) oceanScrollFrame = requestAnimationFrame(step);
    else stopOceanAutoScroll();
  };
  oceanScrollFrame = requestAnimationFrame(step);
}
function scheduleOceanEntry(){
  window.setTimeout(() => startOceanAutoScroll(), 450);
  clearOceanAtmosphereTimers();
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  oceanAtmosphereTimers = [
    window.setTimeout(() => triggerOceanPowerCut(false), 10500),
    window.setTimeout(() => triggerOceanPowerCut(true), 15500)
  ];
}
function clearOceanAtmosphereTimers(){ oceanAtmosphereTimers.forEach(timer => clearTimeout(timer)); oceanAtmosphereTimers = []; }
function triggerOceanPowerCut(deep){
  if(currentChapter !== 4) return;
  const chapter = $('#chapter-4');
  chapter.classList.remove('power-cut','deep-power-cut');
  void chapter.offsetWidth;
  chapter.classList.add(deep ? 'deep-power-cut' : 'power-cut');
  window.setTimeout(() => chapter.classList.remove('power-cut','deep-power-cut'), deep ? 900 : 520);
}
function createParticles(){
  const field = $('#particle-field');
  field.innerHTML = Array.from({length:38}, (_, index) => `<i class="particle particle-${index % 6}" style="--x:${(index * 37) % 100}%;--y:${(index * 61) % 100}%;--delay:-${index % 9}s;--duration:${14 + index % 12}s"></i>`).join('');
}
function initSignal(){
  const bar = $('#signal-progress-bar'); const label = $('#signal-label');
  const stages = [$('#signal-confirmation'), $('#signal-name'), $('#signal-occasion'), $('#signal-birthday'), $('#signal-warmth'), $('#signal-subtitle'), $('#enter-archive')];
  const reveal = element => { element.classList.add('is-visible'); element.setAttribute('aria-hidden', 'false'); if(element === $('#enter-archive')) element.removeAttribute('tabindex'); };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timings = reducedMotion ? [100, 180, 260, 340, 460, 580, 700] : [3000, 3140, 4500, 5300, 6200, 6500, 6900];
  setTimeout(() => { bar.style.width = '100%'; }, reducedMotion ? 0 : 120);
  setTimeout(() => { label.textContent = 'IDENTITY FOUND'; }, reducedMotion ? 40 : 2100);
  stages.forEach((stage, index) => setTimeout(() => reveal(stage), timings[index]));
}
function renderRecords(){ $('#record-stream').innerHTML = archiveRecords.map(record => `<article class="record-card"><p class="eyebrow">RECORD // ${record.id}</p><h3>${record.title}</h3><p class="eyebrow">${record.meta}</p><p>${record.text.replaceAll('\n','<br>')}</p><div class="placeholder">STILL TO BE ADDED</div></article>`).join(''); }
function renderCompanion(){ $('#companion-stage').innerHTML = `<div class="companion-prompt"><p class="eyebrow">TODAY'S BIRTHDAY SUBJECT</p><h2>SHADOW</h2><p class="lede">A companion may join you for this special occasion.</p><div class="companion-record"><p class="eyebrow">COMPANION AVAILABILITY</p><p class="availability-count">ONE RECORD FOUND</p><h3>DENIA</h3><p class="availability-status">STATUS: AVAILABLE</p><button class="archive-button" id="select-companion" type="button">SELECT COMPANION <span>↗</span></button></div></div>`; $('#select-companion').addEventListener('click', showCelebration); }
function showCelebration(){ $('#companion-stage').innerHTML = `<div class="companion-confirmation"><p class="eyebrow">DENIA SELECTED</p><h3>COMPANION CONFIRMED</h3></div>`; setTimeout(renderCelebrationScene, 900); }
function renderCelebrationScene(){ $('#companion-stage').innerHTML = `<div class="celebration-scene"><div class="denia-presence"><div class="denia-glow" aria-hidden="true"></div><img id="denia-fullbody" src="assets/images/denia/denia-fullbody.png" alt="Denia" /><div class="denia-ground" aria-hidden="true"></div></div><div class="celebration-data"><p class="eyebrow">BIRTHDAY CELEBRATION</p><h3>SHADOW</h3><p class="celebration-date">18 SEPTEMBER 2026</p><p class="eyebrow">COMPANION // DENIA</p><p class="lede">A special birthday message has been prepared for you.</p><div class="voice-section"><p class="eyebrow">VOICE // DENIA</p><div class="voice-controls"><button class="selected" data-voice="jp" type="button">JP</button><button data-voice="en" type="button">EN</button><button class="play-voice" id="play-voice" type="button">▶ PLAY MESSAGE</button></div><p class="subtitle" id="denia-subtitle" aria-live="polite"></p><p class="audio-note" id="audio-note">READY // SELECT A LANGUAGE TO BEGIN</p></div><div class="celebration-complete" id="celebration-complete" hidden><p class="eyebrow">BIRTHDAY MOMENT COMPLETE</p><p>DENIA HAS LEFT A MESSAGE FOR TODAY'S BIRTHDAY SUBJECT.</p><p class="eyebrow">NO OCEAN-RELATED INCIDENTS DETECTED.</p></div></div></div>`; setupAudio(); }
function updateSubtitle(){ if(!activeAudio || activeAudio.paused || document.querySelector('[data-voice].selected')?.dataset.voice !== 'jp'){ $('#denia-subtitle').textContent = ''; return; } const cue = deniaSubtitleCues.find(item => activeAudio.currentTime >= item.start && activeAudio.currentTime < item.end); $('#denia-subtitle').textContent = cue?.text || ''; }
function finishCelebration(){ const complete = $('#celebration-complete'); complete.hidden = false; $('#play-voice').disabled = true; $('.celebration-scene').classList.add('is-complete'); setTimeout(() => showChapter(3), 2500); }
function setupAudio(){ document.querySelectorAll('[data-voice]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-voice]').forEach(item => item.classList.remove('selected')); button.classList.add('selected'); if(activeAudio){activeAudio.pause(); activeAudio = null; resumeBackgroundMusic();} $('#denia-subtitle').textContent = ''; $('#audio-note').textContent = `READY // ${button.dataset.voice.toUpperCase()} AUDIO`; $('#play-voice').disabled = false; })); $('#play-voice').addEventListener('click', () => { const selected = document.querySelector('[data-voice].selected').dataset.voice; if(activeAudio){activeAudio.pause();} pauseBackgroundMusic(); activeAudio = new Audio(`assets/audio/denia/birthday-${selected}.mp3`); activeAudio.addEventListener('timeupdate', updateSubtitle); activeAudio.addEventListener('play', () => { pauseBackgroundMusic(); $('.celebration-scene').classList.add('is-playing'); $('#audio-note').textContent = `PLAYING // ${selected.toUpperCase()}`; }); activeAudio.addEventListener('pause', () => { activeAudio = null; $('.celebration-scene').classList.remove('is-playing'); updateSubtitle(); resumeBackgroundMusic(); }); activeAudio.addEventListener('ended', () => { activeAudio = null; resumeBackgroundMusic(); finishCelebration(); }); activeAudio.addEventListener('error', () => { activeAudio = null; $('.celebration-scene').classList.remove('is-playing'); $('#audio-note').textContent = `AUDIO UNAVAILABLE // ADD assets/audio/denia/birthday-${selected}.mp3`; resumeBackgroundMusic(); }); activeAudio.play().catch(() => { activeAudio = null; $('#audio-note').textContent = `AUDIO UNAVAILABLE // ADD assets/audio/denia/birthday-${selected}.mp3`; resumeBackgroundMusic(); }); }); }
function oceanInteraction(){ const button = $('#prevent-merger'); const warning = $('#ocean-warning'); oceanAttempts++; button.disabled = true; document.querySelector('.ocean-incident').classList.add('is-escalating'); if(oceanAttempts === 1){ warning.textContent = 'ATTEMPTING INTERVENTION...'; setTimeout(() => { warning.textContent = 'INTERVENTION FAILED. REASON: SUBJECT APPEARS TO LIKE THE OCEAN.'; button.textContent = 'PREVENT OCEAN MERGER'; button.disabled = false; }, 1100); } else if(oceanAttempts === 2){ warning.textContent = 'INTERVENTION FAILED.'; setTimeout(() => { warning.textContent = 'THE OCEAN HAS BEEN INFORMED.'; button.hidden = true; triggerSeaFlash(); }, 950); } }
function triggerSeaFlash(){ const flash = $('#sea-flash'); const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; const fadeIn = reducedMotion ? 150 : 500; const hold = reducedMotion ? 500 : 2000; const fadeOut = reducedMotion ? 250 : 3000; flash.hidden = false; flash.classList.remove('fade-out'); document.body.classList.add('ocean-contact'); setTimeout(() => { flash.classList.add('show'); }, 0); setTimeout(() => { flash.classList.remove('show'); flash.classList.add('fade-out'); setTimeout(() => { flash.classList.remove('fade-out'); flash.hidden = true; document.body.classList.remove('ocean-contact'); setTimeout(showOceanRecovery, 650); }, fadeOut); }, fadeIn + hold); }
function showOceanRecovery(){ $('#ocean-incident').classList.add('recovered'); $('#ocean-recovery').hidden = false; oceanCompleted = true; localStorage.setItem('shadowArchiveOceanComplete','true'); highestChapter = Math.max(highestChapter,4); localStorage.setItem('shadowArchiveHighestChapter',String(highestChapter)); renderProgress(); document.querySelectorAll('.progress-dot').forEach((dot,index) => { dot.classList.toggle('active', index === currentChapter); dot.disabled = !devBypassProgression && (index > highestChapter || (index === 5 && !oceanCompleted)); }); }
function renderContributions(){ const populated = contributions.filter(item => !(item.type === 'card' && item.image.includes('card-placeholder'))); const cards = populated.filter(item => item.type === 'card'); const messages = populated.filter(item => item.type === 'message'); let cardNumber = 0; let messageNumber = 0; $('#contribution-count').textContent = `ARCHIVE CONTRIBUTIONS // ${populated.length}`; $('#finale-stats').textContent = `${cards.length} RECORDS / ${messages.length} MESSAGES / 1 BIRTHDAY`; $('#contribution-stream').innerHTML = populated.map(item => item.type === 'card' ? `<article class="contribution contribution-card"><p class="eyebrow">RECORD // CONTRIBUTION ${String(++cardNumber).padStart(2,'0')}</p><p class="author">FROM: ${item.from}</p><p class="contribution-date">${item.date || ''}</p><button class="contribution-art" type="button" data-image="${item.image}" aria-label="Open birthday card from ${item.from}"><img src="${item.image}" alt="Birthday card from ${item.from}" loading="lazy"><span class="art-fallback">BIRTHDAY CARD<br>PLACEHOLDER ARTWORK</span></button>${item.caption ? `<p class="card-caption">${item.caption}</p>` : ''}</article>` : `<article class="contribution message-note"><p class="eyebrow">MESSAGE // ${String(++messageNumber).padStart(2,'0')}</p><p class="author">FROM: ${item.from}</p><p class="contribution-date">${item.date || ''}</p><p class="message">${item.message}</p><p class="author">— ${item.from}</p></article>`).join(''); $('#wish-stream').innerHTML = messages.map((item,index) => `<article class="wish-note"><p class="eyebrow">WISH // ${String(index + 1).padStart(2,'0')}</p><p>${item.message}</p><p class="author">— ${item.from}</p></article>`).join(''); $('#well-wisher-board').innerHTML = wellWishers.map(person => `<article class="well-wisher" style="--aura:${person.palette[0]};--aura-soft:${person.palette[1]};--delay:${person.index * -0.35}s"><div class="pfp-wrap"><span class="pfp-particle pfp-particle-a"></span><span class="pfp-particle pfp-particle-b"></span><img src="assets/images/well-wishers/${person.file}" alt="${person.name}" loading="lazy"><span class="pfp-fallback" aria-hidden="true">${person.name.charAt(0)}</span></div><p>${person.name}</p></article>`).join(''); document.querySelectorAll('.contribution-art').forEach(card => card.addEventListener('click', () => { $('#viewer-image').src = card.dataset.image; $('#viewer').hidden = false; })); }
function renderContributions(){
  const populated = contributions.filter(item => !(item.type === 'card' && item.image.includes('card-placeholder')));
  const cards = populated.filter(item => item.type === 'card');
  const messages = populated.filter(item => item.type === 'message');
  let cardNumber = 0;
  let messageNumber = 0;
  const videoSlot = {type:'video',from:'VIDEO WISH',date:'2026.09.18'};
  const ordered = [...cards,videoSlot,...messages];
  $('#contribution-count').textContent = `ARCHIVE CONTRIBUTIONS // ${cards.length + messages.length + 1}`;
  $('#finale-stats').textContent = `${cards.length} RECORDS / 1 VIDEO / ${messages.length} MESSAGES / 1 BIRTHDAY`;
  $('#contribution-stream').innerHTML = ordered.map(item => {
    if(item.type === 'card') return `<article class="contribution contribution-card"><p class="eyebrow">RECORD // CONTRIBUTION ${String(++cardNumber).padStart(2,'0')}</p><p class="author">FROM: ${item.from}</p><p class="contribution-date">${item.date || ''}</p><button class="contribution-art" type="button" data-image="${item.image}" aria-label="Open birthday card from ${item.from}"><img src="${item.image}" alt="Birthday card from ${item.from}" loading="lazy"><span class="art-fallback">BIRTHDAY CARD<br>PLACEHOLDER ARTWORK</span></button>${item.caption ? `<p class="card-caption">${item.caption}</p>` : ''}</article>`;
    if(item.type === 'video') return `<article class="contribution video-wish-card"><p class="eyebrow">VIDEO // WISH SLOT</p><p class="author">FROM: ${item.from}</p><p class="contribution-date">${item.date}</p><div class="video-wish-placeholder"><span aria-hidden="true">▶</span><p>VIDEO WISH CARD</p><small>VIDEO ASSET PENDING</small></div></article>`;
    return `<article class="contribution message-note"><p class="eyebrow">MESSAGE // ${String(++messageNumber).padStart(2,'0')}</p><p class="author">FROM: ${item.from}</p><p class="contribution-date">${item.date || ''}</p><p class="message">${item.message}</p><p class="author">— ${item.from}</p></article>`;
  }).join('');
  $('#well-wisher-board').innerHTML = wellWishers.map(person => `<article class="well-wisher" style="--aura:${person.palette[0]};--aura-soft:${person.palette[1]};--delay:${person.index * -0.35}s"><div class="pfp-wrap"><span class="pfp-particle pfp-particle-a"></span><span class="pfp-particle pfp-particle-b"></span><img src="assets/images/well-wishers/${person.file}" alt="${person.name}" loading="lazy"><span class="pfp-fallback" aria-hidden="true">${person.name.slice(0,1)}</span></div><p>${person.name}</p></article>`).join('');
}
function setupFinaleEnhancements(){ document.querySelectorAll('.contribution-art img,.pfp-wrap img').forEach(image => image.addEventListener('error', () => { image.hidden = true; image.parentElement.classList.add('asset-missing'); })); $('#viewer').addEventListener('click', event => { if(event.target === event.currentTarget) $('#viewer').hidden = true; }); document.addEventListener('keydown', event => { if(event.key === 'Escape') $('#viewer').hidden = true; }); }
function showSecurityPass(){ securityPass.hidden = false; lock.hidden = true; app.hidden = true; securityInput.value = ''; securityStatus.textContent = 'AWAITING AUTHORITY'; securityInput.focus(); }
function showEarlyAccessPrompt(){
  securityPass.hidden = true;
  app.hidden = true;
  lock.hidden = true;
  $('#early-access-dialog').showModal();
}
function denyEarlyAccess(){
  bakaEarlyAccessDeclined = true;
  sessionStorage.setItem('shadowArchiveBakaEarlyAccess', 'declined');
  $('#early-access-dialog').close();
  securityPass.hidden = true;
  app.hidden = true;
  lock.hidden = false;
  $('#lock-copy').textContent = 'AUTHORITY VERIFIED // BAKA\nEARLY ACCESS DECLINED.';
}
function routeAuthority(withTransition = true){
  if(!authority) return showSecurityPass();
  authenticated = true;
  if(authority === 'VOID' && Date.now() < RELEASE_AT){
    securityPass.hidden = true;
    app.hidden = true;
    lock.hidden = false;
    $('#lock-copy').textContent = 'AUTHORITY VERIFIED // VOID\nTHE RECORD IS NOT YET OPEN.';
    return;
  }
  if(authority === 'BAKA' && Date.now() < RELEASE_AT){
    if(bakaEarlyAccessGranted) return unlockSite();
    if(bakaEarlyAccessDeclined){
      securityPass.hidden = true;
      app.hidden = true;
      lock.hidden = false;
      $('#lock-copy').textContent = 'AUTHORITY VERIFIED // BAKA\nEARLY ACCESS DECLINED.';
      return;
    }
    return showEarlyAccessPrompt();
  }
  const open = () => { securityPass.hidden = true; unlockSite(); };
  if(!withTransition) return open();
  securityStatus.textContent = 'AUTHORITY VERIFIED';
  securityPass.classList.add('is-authenticating');
  setTimeout(() => { securityStatus.textContent = 'ACCESS GRANTED'; setTimeout(open, 360); }, 420);
}
function authenticate(event){
  event.preventDefault();
  const pass = securityInput.value.trim().toUpperCase();
  if(!['VOID','BAKA','KURU'].includes(pass)){
    securityStatus.textContent = 'AUTHORITY NOT RECOGNIZED';
    securityPass.classList.remove('is-invalid');
    void securityPass.offsetWidth;
    securityPass.classList.add('is-invalid');
    securityInput.focus();
    return;
  }
  authority = pass;
  sessionStorage.setItem('shadowArchiveAuthority', authority);
  routeAuthority();
}
function setupDeveloperMode(){
  const panel = $('#developer-panel');
  if(authority !== 'KURU') return;
  panel.hidden = false;
  devBypassProgression = true;
  renderProgress();
  $('#dev-bypass').addEventListener('click', event => { devBypassProgression = !devBypassProgression; event.currentTarget.textContent = `BYPASS PROGRESSION: ${devBypassProgression ? 'ON' : 'OFF'}`; renderProgress(); });
  $('#dev-reset').addEventListener('click', () => { localStorage.removeItem('shadowArchiveChapter'); localStorage.removeItem('shadowArchiveHighestChapter'); localStorage.removeItem('shadowArchiveOceanComplete'); highestChapter = 0; oceanCompleted = false; showChapter(0, false); renderProgress(); });
  $('#dev-lock').addEventListener('click', showSecurityPass);
  panel.querySelectorAll('[data-dev-chapter]').forEach(button => button.addEventListener('click', () => showChapter(Number(button.dataset.devChapter), false)));
}
function initApp(){ renderProgress(); renderRecords(); renderContributions(); setupFinaleEnhancements(); createParticles(); initSignal(); renderCompanion(); setupDeveloperMode(); document.addEventListener('click', event => { const target = event.target.closest('[data-next]'); if(target) showChapter(Number(target.dataset.next)); const go = event.target.closest('[data-go]'); if(go && !go.disabled && (devBypassProgression || Number(go.dataset.go) <= highestChapter) && (devBypassProgression || Number(go.dataset.go) !== 5 || oceanCompleted)) showChapter(Number(go.dataset.go)); }); $('#enter-archive').addEventListener('click', () => { $('#chapter-0').classList.add('signal-exit'); setTimeout(() => showChapter(1), 320); }); $('#index-records').addEventListener('click', () => showChapter(4)); $('#prevent-merger').addEventListener('click', oceanInteraction); $('#finish-ocean').addEventListener('click', () => showChapter(5)); $('.wordmark').addEventListener('click', () => showChapter(0,false)); $('#viewer-close').addEventListener('click', () => $('#viewer').hidden = true); $('#sound-toggle').addEventListener('click', event => { backgroundMusicEnabled = !backgroundMusicEnabled; event.currentTarget.setAttribute('aria-pressed', String(backgroundMusicEnabled)); event.currentTarget.textContent = `SOUND / ${backgroundMusicEnabled ? 'ON' : 'OFF'}`; if(backgroundMusicEnabled) resumeBackgroundMusic(); else pauseBackgroundMusic(); }); const savedChapter = Number(localStorage.getItem('shadowArchiveChapter')); const savedHighest = Number(localStorage.getItem('shadowArchiveHighestChapter')); if(savedHighest >= 0) highestChapter = Math.max(highestChapter, Math.min(5,savedHighest)); if(!oceanCompleted && highestChapter > 4) highestChapter = 4; if(savedChapter > highestChapter) highestChapter = Math.min(5,savedChapter); if(savedChapter > 0 && savedChapter < chapters.length && savedChapter <= highestChapter && !devBypassProgression) showChapter(savedChapter,false); updateArchiveTime(); }
securityInput.addEventListener('input', () => { securityInput.value = securityInput.value.toUpperCase(); });
securityForm.addEventListener('submit', authenticate);
$('#early-access-yes').addEventListener('click', () => { bakaEarlyAccessGranted = true; sessionStorage.setItem('shadowArchiveBakaEarlyAccess', 'true'); $('#early-access-dialog').close(); unlockSite(); });
$('#early-access-no').addEventListener('click', denyEarlyAccess);
renderLockChapters(); routeAuthority(false); updateArchiveTime(); setInterval(() => { updateCountdown(); updateArchiveTime(); },1000);
