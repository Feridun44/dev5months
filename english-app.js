// DEV5MONTHS - English Accelerator Application Logic
(function() {
const { ENGLISH_DAYS, GERUND_INFINITIVE_GUIDE } = window.DEV5MONTHS_ENGLISH || {};

const STORAGE_KEY = 'DEV5MONTHS_ENG_STATE_V1';

let engState = {
  completedDays: [],
  memorizedWords: {},
  quizAnswers: {},
  streak: 0,
  lastActiveDate: null
};

let currentTab = 'curriculum';
let selectedWeek = 'all';
let selectedStatus = 'all';
let dictSearch = '';

// Load / Save State
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      engState = Object.assign(engState, JSON.parse(saved));
    }
  } catch (e) {
    console.error("English state load error:", e);
  }
  checkStreak();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(engState));
  } catch (e) {
    console.error("English state save error:", e);
  }
  updateStatsUI();
}

function checkStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (!engState.lastActiveDate) {
    engState.streak = engState.completedDays.length > 0 ? 1 : 0;
  } else {
    const lastDate = new Date(engState.lastActiveDate);
    const currentDate = new Date(today);
    const diff = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));
    if (diff > 1) {
      engState.streak = 1;
    }
  }
}

function recordActivity() {
  const today = new Date().toISOString().slice(0, 10);
  if (engState.lastActiveDate !== today) {
    engState.streak = (engState.streak || 0) + 1;
    engState.lastActiveDate = today;
  }
}

// Text to Speech Function (Native English Pronunciation)
function speakText(text) {
  if (!window.speechSynthesis) {
    alert("Tarayıcınızda sesli okuma desteği bulunamadı.");
    return;
  }
  window.speechSynthesis.cancel(); // Stop current speech if any

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.95; // Slightly slower for crisp learning clarity
  utterance.pitch = 1.0;

  // Prefer natural US voices if available
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
  if (enVoice) utterance.voice = enVoice;

  window.speechSynthesis.speak(utterance);
}

// Celebration
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }
}

// Fluency Rank
function getFluencyRank(completedDaysCount) {
  if (completedDaysCount < 5) return "A1: Başlangıç (Pre-Intermediate)";
  if (completedDaysCount < 12) return "A2: Teknik Temeller Kuruldu";
  if (completedDaysCount < 20) return "B1: Standup & PR İletişimi Rahat";
  if (completedDaysCount < 27) return "B2: Akıcı Mülakat & Mimari Dili";
  return "C1: Global Senior Developer Seviyesi 🇬🇧";
}

function updateStatsUI() {
  const totalDays = 30;
  const completed = engState.completedDays.length;
  const percent = Math.round((completed / totalDays) * 100);
  const wordsCount = Object.keys(engState.memorizedWords).length;

  document.getElementById('eng-stat-percent').textContent = `${percent}%`;
  document.getElementById('eng-stat-days').textContent = `${completed} / ${totalDays}`;
  document.getElementById('eng-stat-remaining').textContent = `${totalDays - completed} gün kaldı`;
  document.getElementById('eng-stat-words').textContent = `${wordsCount} / 300+`;
  document.getElementById('eng-stat-streak').textContent = `${engState.streak || 0} Gün`;
  document.getElementById('eng-rank').textContent = getFluencyRank(completed);
  document.getElementById('eng-bar-text').textContent = `${percent}%`;
  document.getElementById('eng-progress-bar').style.width = `${percent}%`;
}

// Render 30 Days Curriculum
function renderCurriculum() {
  const container = document.getElementById('eng-days-container');
  if (!container || !ENGLISH_DAYS) return;

  let filtered = ENGLISH_DAYS.filter(d => {
    if (selectedWeek !== 'all' && d.week !== parseInt(selectedWeek, 10)) return false;
    const isDone = engState.completedDays.includes(d.id);
    if (selectedStatus === 'completed' && !isDone) return false;
    if (selectedStatus === 'uncompleted' && isDone) return false;
    return true;
  });

  container.innerHTML = filtered.map(d => {
    const isDone = engState.completedDays.includes(d.id);
    const userQuizChoice = engState.quizAnswers[d.id];

    return `
      <div class="glass-card rounded-2xl p-6 transition-all ${isDone ? 'border-emerald-500/40 bg-emerald-950/10' : ''}" id="eng-day-${d.id}">
        <div class="space-y-5">
          
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/5 pb-4">
            <div class="flex items-start gap-3 flex-1">
              <input 
                type="checkbox" 
                class="custom-checkbox mt-1 eng-day-checkbox" 
                data-day-id="${d.id}"
                ${isDone ? 'checked' : ''}
                title="Günü Tamamlandı Olarak İşaretle"
              />
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30">
                    ${d.week}. Hafta • Gün ${d.day}
                  </span>
                  ${isDone ? `
                    <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center gap-1">
                      <i data-lucide="check" class="w-3 h-3"></i> Tamamlandı (+10 Kelime)
                    </span>
                  ` : ''}
                </div>
                <h3 class="text-lg font-bold text-white">${d.title}</h3>
              </div>
            </div>

            <!-- Speech Audio Button for the whole topic -->
            <button class="speech-btn px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-colors self-start" data-speak="${d.speakingDrill}">
              <i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i>
              <span>Günün Konuşmasını Dinle</span>
            </button>
          </div>

          <!-- Grammar Rule Callout -->
          <div class="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed space-y-1">
            <div class="flex items-center gap-2 font-bold text-cyan-300">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>${d.grammarTopic}</span>
            </div>
            <p class="text-slate-300">${d.grammarExplanation}</p>
          </div>

          <!-- Words Table / Cards -->
          <div class="space-y-2">
            <div class="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Günün 10 Kritik Kelimesi / Kalıbı</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${d.words.map((w, idx) => {
                const wordKey = `${d.id}-${w.word}`;
                const isMemorized = Boolean(engState.memorizedWords[wordKey]);

                return `
                  <div class="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between gap-2.5">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                          <button class="speech-btn p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors" data-speak="${w.word}. ${w.sentence}" title="Sesli Telaffuz">
                            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                          </button>
                          <span class="font-bold font-mono text-sm text-emerald-300">${w.word}</span>
                        </div>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">${w.type}</span>
                      </div>
                      <p class="text-xs text-slate-300 mt-1.5 font-medium">${w.meaning}</p>
                    </div>

                    <div class="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span class="italic text-[11px] text-slate-400 line-clamp-1 pr-2">"${w.sentence}"</span>
                      <button class="word-check-btn text-[11px] font-semibold px-2 py-0.5 rounded transition-colors ${isMemorized ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 hover:bg-slate-700 text-slate-400'}" data-word-key="${wordKey}">
                        ${isMemorized ? '✓ Ezberlendi' : 'Ezberledim'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Speaking Drill -->
          <div class="p-4 rounded-xl bg-slate-950 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="space-y-1 flex-1">
              <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">🗣️ Sesli Tekrar Görevi:</span>
              <p class="text-xs font-mono text-slate-200">${d.speakingDrill}</p>
            </div>
            <button class="speech-btn px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors" data-speak="${d.speakingDrill}">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              Telaffuzu Dinle
            </button>
          </div>

          <!-- Interactive Mini Quiz -->
          <div class="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
            <div class="text-xs font-bold text-slate-300 flex items-center gap-2">
              <i data-lucide="help-circle" class="w-4 h-4 text-cyan-400"></i>
              <span>Günün Hızlı Testi:</span>
            </div>
            <p class="text-xs text-slate-200">${d.quiz.question}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${d.quiz.options.map((opt, optIdx) => {
                let btnClass = "bg-slate-950 hover:bg-slate-800 text-slate-300 border-white/5";
                if (userQuizChoice !== undefined) {
                  if (optIdx === d.quiz.correct) {
                    btnClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold";
                  } else if (userQuizChoice === optIdx) {
                    btnClass = "bg-rose-500/20 text-rose-300 border-rose-500/50";
                  }
                }
                return `
                  <button class="quiz-opt-btn text-left p-2.5 rounded-lg border text-xs transition-colors ${btnClass}" data-day-id="${d.id}" data-opt-idx="${optIdx}" ${userQuizChoice !== undefined ? 'disabled' : ''}>
                    ${opt}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Gerunds Guide
function renderGerundsGuide() {
  const container = document.getElementById('gerunds-guide-container');
  if (!container || !GERUND_INFINITIVE_GUIDE) return;

  container.innerHTML = GERUND_INFINITIVE_GUIDE.map(item => `
    <div class="glass-card rounded-2xl p-6 space-y-4 border border-white/10 hover:border-cyan-500/30 transition-all">
      <h3 class="font-bold text-base text-cyan-300 flex items-center gap-2">
        <i data-lucide="book-mark" class="w-4 h-4 text-cyan-400"></i>
        ${item.category}
      </h3>
      <div class="p-3 rounded-xl bg-slate-950 text-xs font-mono text-slate-300 border border-white/5 leading-relaxed">
        ${item.verbs.join(', ')}
      </div>
      <div class="space-y-1">
        <span class="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">Teknik Örnekler:</span>
        <pre class="bg-slate-950 p-3 rounded-lg text-xs font-mono text-emerald-200 overflow-x-auto whitespace-pre-wrap">${item.example}</pre>
      </div>
      <div class="p-2.5 rounded-lg bg-amber-500/10 text-amber-200/90 text-xs border border-amber-500/20">
        💡 <strong>Altın Kural:</strong> ${item.rule}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Dictionary
function renderDictionary() {
  const container = document.getElementById('dictionary-list-container');
  if (!container || !ENGLISH_DAYS) return;

  // Flatten all words across 30 days
  const allWords = [];
  ENGLISH_DAYS.forEach(d => {
    d.words.forEach(w => allWords.push({ ...w, day: d.day, week: d.week }));
  });

  const query = dictSearch.toLowerCase().trim();
  const filtered = allWords.filter(w => {
    if (!query) return true;
    return w.word.toLowerCase().includes(query) ||
           w.meaning.toLowerCase().includes(query) ||
           w.type.toLowerCase().includes(query) ||
           w.sentence.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full glass-card p-8 text-center text-slate-400 text-sm">
        Aradığınız kriterde kelime bulunamadı.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(w => `
    <div class="glass-card rounded-xl p-4 space-y-2 border border-white/5 hover:border-emerald-500/30 transition-all">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button class="speech-btn p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors" data-speak="${w.word}. ${w.sentence}" title="Sesli Telaffuz">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
          </button>
          <span class="font-bold text-sm text-emerald-300 font-mono">${w.word}</span>
        </div>
        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">${w.type}</span>
      </div>
      <p class="text-xs text-slate-200 font-medium">${w.meaning}</p>
      <p class="text-[11px] text-slate-400 italic line-clamp-2">"${w.sentence}"</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-white/5">
        Gün ${w.day} (Hafta ${w.week})
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Event Listeners Setup
function setupEventListeners() {
  // Tabs
  document.querySelectorAll('.eng-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;
      currentTab = tab;

      document.querySelectorAll('.eng-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      ['curriculum', 'gerunds', 'interview', 'dictionary'].forEach(t => {
        const el = document.getElementById(`eng-tab-content-${t}`);
        if (el) {
          if (t === tab) el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });

      if (tab === 'gerunds') renderGerundsGuide();
      if (tab === 'dictionary') renderDictionary();
    });
  });

  // Week Filter
  document.querySelectorAll('.week-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.week-pill').forEach(p => p.classList.remove('active', 'bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40'));
      e.currentTarget.classList.add('active', 'bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
      selectedWeek = e.currentTarget.dataset.week;
      renderCurriculum();
    });
  });

  // Status Filter
  const statusFilter = document.getElementById('eng-status-filter');
  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      selectedStatus = e.target.value;
      renderCurriculum();
    });
  }

  // Dictionary Search
  const dictInput = document.getElementById('dict-search-input');
  if (dictInput) {
    let timeout;
    dictInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dictSearch = e.target.value;
        renderDictionary();
      }, 200);
    });
  }

  // Event Delegation for Speech, Day Checkbox, Word Checkbox, and Quiz
  document.addEventListener('click', (e) => {
    // Speech button
    const speechBtn = e.target.closest('.speech-btn');
    if (speechBtn) {
      const textToSpeak = speechBtn.dataset.speak;
      if (textToSpeak) speakText(textToSpeak);
      return;
    }

    // Word Memorized toggle
    const wordBtn = e.target.closest('.word-check-btn');
    if (wordBtn) {
      const key = wordBtn.dataset.wordKey;
      if (engState.memorizedWords[key]) {
        delete engState.memorizedWords[key];
      } else {
        engState.memorizedWords[key] = true;
        recordActivity();
      }
      saveState();
      renderCurriculum();
      return;
    }

    // Quiz Option Click
    const quizBtn = e.target.closest('.quiz-opt-btn');
    if (quizBtn) {
      const dayId = parseInt(quizBtn.dataset.dayId, 10);
      const optIdx = parseInt(quizBtn.dataset.optIdx, 10);
      const dayData = ENGLISH_DAYS.find(d => d.id === dayId);
      if (dayData) {
        engState.quizAnswers[dayId] = optIdx;
        if (optIdx === dayData.quiz.correct) {
          triggerConfetti();
        }
        recordActivity();
        saveState();
        renderCurriculum();
      }
      return;
    }
  });

  // Day Checkbox
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('eng-day-checkbox')) {
      const dayId = parseInt(e.target.dataset.dayId, 10);
      const isChecked = e.target.checked;

      if (isChecked) {
        if (!engState.completedDays.includes(dayId)) {
          engState.completedDays.push(dayId);
          recordActivity();
          triggerConfetti();
        }
        // Mark all 10 words of this day as memorized
        const dayData = ENGLISH_DAYS.find(d => d.id === dayId);
        if (dayData) {
          dayData.words.forEach(w => {
            engState.memorizedWords[`${dayId}-${w.word}`] = true;
          });
        }
      } else {
        engState.completedDays = engState.completedDays.filter(id => id !== dayId);
      }

      saveState();
      renderCurriculum();
    }
  });

  // Export / Reset
  const exportBtn = document.getElementById('eng-export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(engState, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `DEV_ENGLISH_Ilerleme_${new Date().toISOString().slice(0, 10)}.json`);
      dlAnchor.click();
    });
  }

  const resetBtn = document.getElementById('eng-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Tüm İngilizce ilerlemenizi sıfırlamak istediğinize emin misiniz?")) {
        engState = {
          completedDays: [],
          memorizedWords: {},
          quizAnswers: {},
          streak: 0,
          lastActiveDate: null
        };
        saveState();
        renderCurriculum();
      }
    });
  }
}

// Init
function init() {
  loadState();
  updateStatsUI();
  renderCurriculum();
  setupEventListeners();
  if (window.lucide) lucide.createIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();
