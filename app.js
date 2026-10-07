// DEV5MONTHS - Core Application Logic
(function() {
const { MONTHS, ROADMAP_DAYS, SENIOR_SECRETS, INTERVIEW_FLASHCARDS } = window.DEV5MONTHS_DATA || {};

// LocalStorage State Keys
const STORAGE_KEY = 'DEV5MONTHS_STATE_V1';

// Initial or loaded state
let appState = {
  completedDays: [],       // Array of numbers (e.g. [1, 2])
  completedSubtasks: {},   // Object: { "1-0": true, "1-1": true }
  dayNotes: {},            // Object: { "1": "Notes here..." }
  streak: 0,
  lastActiveDate: null
};

// UI Filter State
let currentTab = 'roadmap';
let selectedMonth = 'all';
let selectedStatus = 'all';
let searchQuery = '';
let activeModalDayId = null;

// Complete 150 Days Generator
function getFull150Days() {
  const dayMap = new Map();
  ROADMAP_DAYS.forEach(d => dayMap.set(d.id, d));

  const allDays = [];
  for (let i = 1; i <= 150; i++) {
    if (dayMap.has(i)) {
      allDays.push(dayMap.get(i));
    } else {
      // Intelligently generate missing day matching its month theme
      const month = Math.ceil(i / 30);
      const week = Math.ceil(i / 7);
      const dayInMonth = ((i - 1) % 30) + 1;
      
      let themeTitle = "Uygulamalı Kod Pratiği & Proje İlerlemesi";
      let summary = "Öğrenilen kavramları pekiştirmek için derinlemesine mini egzersiz ve GitHub commit'i.";
      let seniorTip = "Bir konuyu öğrendikten sonra başka birine anlatabiliyorsan gerçekten anlamışsın demektir (Feynman Tekniği).";
      let interviewQuestion = "Bu konuyu üretim ortamında (production) ölçeklerken karşılaşabileceğin en büyük risk nedir?";
      let tasks = [
        "Bugünkü konunun kodlarını sıfırdan boş bir dosyada tek başına tekrar yaz.",
        "Konsol veya tarayıcı testlerini yap, olası uç durumları (edge cases) dene.",
        "GitHub reposuna anlamlı bir commit mesajı ile pushla."
      ];

      if (month === 1) {
        themeTitle = `JS Derinleşme & Algoritma Pratiği (Gün ${dayInMonth})`;
        summary = "Modern JavaScript diziler, nesneler veya asenkron mekanizmalar üzerinde pratik.";
        seniorTip = "Konsolda debug yaparken console.table() kullanmayı alışkanlık edin, objeleri çok daha hızlı analiz edersin.";
      } else if (month === 2) {
        themeTitle = `React & TypeScript Bileşen Refaktörü (Gün ${dayInMonth})`;
        summary = "Bileşenleri daha modüler hale getirme, custom hook yazımı veya TypeScript tip güvenliği.";
        seniorTip = "State'i mümkün olduğunca en alt bileşende tut. Gereksiz yere yukarı kaldırma (Lifting state up) render yükü yaratır.";
      } else if (month === 3) {
        themeTitle = `Next.js App Router & API Optimizasyonu (Gün ${dayInMonth})`;
        summary = "Server actions, caching mekanizması veya dinamik rotaların test edilmesi.";
        seniorTip = "Kritik olmayan bileşenler için Suspense sınırları (Suspense Boundaries) koyarak sayfanın anında açılmasını sağla.";
      } else if (month === 4) {
        themeTitle = `Backend Servis Mimarisi & DB Egzersizi (Gün ${dayInMonth})`;
        summary = "PostgreSQL şeması, Prisma ilişkileri veya JWT doğrulama middleware denemeleri.";
        seniorTip = "API isteklerinde gelen verileri mutlaka sunucuda validate et. Asla frontend validasyonuna tek başına güvenme.";
      } else if (month === 5) {
        themeTitle = `Capstone SaaS Geliştirme & Mock Mülakat (Gün ${dayInMonth})`;
        summary = "Büyük bitirme projesine yeni bir özellik ekleme ve teknik mülakat provası.";
        seniorTip = "Mülakatta bilmediğin bir şey sorulursa panikleme: 'Bunu henüz üretimde kullanmadım ama arkasındaki prensibin şu olduğunu biliyorum' diyerek mühendislik yaklaşımını göster.";
      }

      allDays.push({
        id: i,
        month,
        week,
        day: i,
        title: themeTitle,
        summary,
        tasks,
        seniorTip,
        interviewQuestion
      });
    }
  }
  return allDays;
}

const ALL_DAYS = getFull150Days();

// LocalStorage Sync
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      appState = Object.assign(appState, JSON.parse(saved));
    }
  } catch (e) {
    console.error("State loading error:", e);
  }
  checkStreak();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("State saving error:", e);
  }
  updateStatsUI();
}

// Streak Calculation
function checkStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (!appState.lastActiveDate) {
    appState.streak = appState.completedDays.length > 0 ? 1 : 0;
  } else {
    const lastDate = new Date(appState.lastActiveDate);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Continued streak yesterday
    } else if (diffDays > 1) {
      // Streak broken
      appState.streak = 1;
    }
  }
}

function recordActivity() {
  const today = new Date().toISOString().slice(0, 10);
  if (appState.lastActiveDate !== today) {
    appState.streak = (appState.streak || 0) + 1;
    appState.lastActiveDate = today;
  }
}

// Stats & XP
function calculateXP() {
  const daysXP = appState.completedDays.length * 100;
  const subtasksCount = Object.values(appState.completedSubtasks).filter(Boolean).length;
  const subtasksXP = subtasksCount * 25;
  return daysXP + subtasksXP;
}

function getDeveloperRank(xp) {
  if (xp < 500) return "Level 1: JavaScript Çaylağı";
  if (xp < 1500) return "Level 2: DOM & Logic Savaşçısı";
  if (xp < 3500) return "Level 3: Modern Frontend Mühendisi";
  if (xp < 6500) return "Level 4: Next.js & Fullstack Ustası";
  if (xp < 10000) return "Level 5: Backend & Sistem Mimarı";
  return "Level 6: 2 Senelikleri Sollayan Senior Dev 🚀";
}

function updateStatsUI() {
  const totalDays = 150;
  const completedCount = appState.completedDays.length;
  const percent = Math.round((completedCount / totalDays) * 100);
  const xp = calculateXP();
  const rank = getDeveloperRank(xp);

  document.getElementById('stat-percent').textContent = `${percent}%`;
  document.getElementById('stat-completed-days').textContent = `${completedCount} / ${totalDays}`;
  document.getElementById('stat-remaining-days').textContent = `${totalDays - completedCount} gün kaldı`;
  document.getElementById('stat-xp').textContent = `${xp} XP`;
  document.getElementById('stat-streak').textContent = `${appState.streak || 0} Gün`;
  document.getElementById('user-rank').textContent = rank;
  document.getElementById('bar-percent-text').textContent = `${percent}%`;
  document.getElementById('main-progress-bar').style.width = `${percent}%`;
}

// Trigger Confetti
function triggerCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Render Roadmap Days
function renderRoadmap() {
  const container = document.getElementById('roadmap-days-container');
  if (!container) return;

  // Filter logic
  let filtered = ALL_DAYS.filter(item => {
    // Month filter
    if (selectedMonth !== 'all' && item.month !== parseInt(selectedMonth, 10)) {
      return false;
    }
    // Status filter
    const isCompleted = appState.completedDays.includes(item.id);
    if (selectedStatus === 'completed' && !isCompleted) return false;
    if (selectedStatus === 'uncompleted' && isCompleted) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchTasks = item.tasks.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSummary && !matchTasks) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card rounded-2xl p-12 text-center text-slate-400 space-y-3">
        <i data-lucide="inbox" class="w-12 h-12 mx-auto text-slate-600"></i>
        <p class="text-base font-medium">Bu filtreye uygun gün bulunamadı.</p>
        <p class="text-xs text-slate-500">Filtreleri sıfırlayarak tekrar deneyebilirsin.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isDayCompleted = appState.completedDays.includes(item.id);
    const hasNote = Boolean(appState.dayNotes[item.id]);

    return `
      <div class="glass-card day-card rounded-2xl p-5 lg:p-6 transition-all ${isDayCompleted ? 'completed' : ''}" id="day-card-${item.id}">
        <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          
          <!-- Left: Big Checkbox & Day Header -->
          <div class="flex items-start gap-4 flex-1">
            <input 
              type="checkbox" 
              class="custom-checkbox mt-1 day-check-input" 
              data-day-id="${item.id}"
              ${isDayCompleted ? 'checked' : ''}
              title="Bugünü Tamamlandı Olarak İşaretle"
            />
            
            <div class="space-y-2 flex-1">
              
              <!-- Badges -->
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30">
                  ${item.month}. Ay • ${item.week}. Hafta • Gün ${item.day}
                </span>
                ${isDayCompleted ? `
                  <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> Tamamlandı (+100 XP)
                  </span>
                ` : ''}
                ${hasNote ? `
                  <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <i data-lucide="file-text" class="w-3 h-3"></i> Not Var
                  </span>
                ` : ''}
              </div>

              <!-- Title & Summary -->
              <div>
                <h3 class="text-base lg:text-lg font-bold text-white day-title">${item.title}</h3>
                <p class="text-xs lg:text-sm text-slate-400 mt-1 leading-relaxed">${item.summary}</p>
              </div>

              <!-- Tasks Checklist -->
              <div class="pt-2 space-y-2">
                <div class="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Günün Somut Görevleri</div>
                <div class="space-y-1.5">
                  ${item.tasks.map((task, idx) => {
                    const taskKey = `${item.id}-${idx}`;
                    const isTaskDone = Boolean(appState.completedSubtasks[taskKey]);
                    return `
                      <label class="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          class="subtask-checkbox mt-0.5 subtask-input" 
                          data-day-id="${item.id}"
                          data-task-key="${taskKey}"
                          ${isTaskDone ? 'checked' : ''}
                        />
                        <span class="group-hover:text-white transition-colors ${isTaskDone ? 'line-through text-slate-500' : ''}">
                          ${task}
                        </span>
                      </label>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Senior Tip Callout -->
              <div class="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                <i data-lucide="sparkles" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-bold text-amber-300">2 Senelikleri Sollayan İpucu:</span>
                  ${item.seniorTip}
                </div>
              </div>

              <!-- Interview Question Accordion -->
              <details class="mt-2 text-xs group rounded-xl bg-slate-900/60 border border-white/5 p-3">
                <summary class="font-semibold text-slate-300 cursor-pointer flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <i data-lucide="help-circle" class="w-3.5 h-3.5 text-cyan-400"></i>
                    Günün Mülakat Sorusu
                  </span>
                  <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="pt-2.5 text-slate-400 text-xs border-t border-white/5 mt-2 space-y-1">
                  <p class="font-medium text-slate-200">"${item.interviewQuestion}"</p>
                  <p class="text-[11px] text-cyan-400/80">Bu soruyu sesli olarak kendine açıkla veya notlar kısmına cevabını yaz.</p>
                </div>
              </details>

            </div>
          </div>

          <!-- Right: Note button -->
          <div class="flex lg:flex-col items-center justify-end gap-2 pt-2 lg:pt-0">
            <button 
              class="open-notes-btn px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 border border-white/5 transition-colors"
              data-day-id="${item.id}"
              data-day-title="Gün ${item.day}: ${item.title}"
            >
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              ${hasNote ? 'Notu Düzenle' : 'Not Ekle'}
            </button>
          </div>

        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Senior Secrets Tab
function renderSecrets() {
  const container = document.getElementById('secrets-container');
  if (!container) return;

  container.innerHTML = SENIOR_SECRETS.map((item, idx) => `
    <div class="glass-card rounded-2xl p-6 space-y-4 border border-white/10 hover:border-amber-500/30 transition-all">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 font-bold font-mono flex items-center justify-center text-sm">
          0${idx + 1}
        </span>
        <h3 class="font-bold text-base text-white">${item.title}</h3>
      </div>
      <p class="text-sm text-slate-300 leading-relaxed">${item.desc}</p>
      <div class="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-400 italic font-mono">
        ${item.quote}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Interview Flashcards Tab
function renderFlashcards() {
  const container = document.getElementById('flashcards-container');
  if (!container) return;

  container.innerHTML = INTERVIEW_FLASHCARDS.map((item, idx) => `
    <div class="flashcard glass-card rounded-2xl p-6 cursor-pointer border border-white/10 hover:border-cyan-500/40 transition-all min-h-[220px] flex flex-col justify-between" data-idx="${idx}">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-semibold">
            ${item.category}
          </span>
          <span class="text-[11px] text-slate-500 flex items-center gap-1">
            <i data-lucide="refresh-cw" class="w-3 h-3"></i> Ters Çevir
          </span>
        </div>
        <h4 class="text-base font-bold text-white mb-2">${item.question}</h4>
        <div class="flashcard-answer hidden mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-3 rounded-xl">
          <span class="text-emerald-400 font-bold block mb-1">Senior Düzey Cevap:</span>
          ${item.answer}
        </div>
      </div>
      <div class="text-[11px] text-slate-500 font-mono mt-4">Tıkla ve cevabı gör</div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Attach Event Listeners
function setupEventListeners() {
  // Tabs switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;
      currentTab = tab;

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      // Toggle tab contents
      ['roadmap', 'secrets', 'flashcards', 'cheatsheet'].forEach(t => {
        const el = document.getElementById(`tab-content-${t}`);
        if (el) {
          if (t === tab) el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });

      if (tab === 'secrets') renderSecrets();
      if (tab === 'flashcards') renderFlashcards();
    });
  });

  // Month filters
  const monthPills = document.querySelectorAll('.month-pill');
  monthPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      monthPills.forEach(p => p.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40'));
      e.currentTarget.classList.add('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
      selectedMonth = e.currentTarget.dataset.month;
      renderRoadmap();
    });
  });

  // Status Filter
  const statusFilter = document.getElementById('status-filter');
  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      selectedStatus = e.target.value;
      renderRoadmap();
    });
  }

  // Search Input with Debounce
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let timeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        searchQuery = e.target.value;
        renderRoadmap();
      }, 250);
    });
  }

  // Day Checkbox & Subtask Checkbox clicks (Event Delegation)
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('day-check-input')) {
      const dayId = parseInt(e.target.dataset.dayId, 10);
      const isChecked = e.target.checked;

      if (isChecked) {
        if (!appState.completedDays.includes(dayId)) {
          appState.completedDays.push(dayId);
          recordActivity();
          triggerCelebration();
        }
        // Also check all subtasks for this day
        const dayItem = ALL_DAYS.find(d => d.id === dayId);
        if (dayItem) {
          dayItem.tasks.forEach((_, idx) => {
            appState.completedSubtasks[`${dayId}-${idx}`] = true;
          });
        }
      } else {
        appState.completedDays = appState.completedDays.filter(id => id !== dayId);
        // Uncheck all subtasks for this day
        const dayItem = ALL_DAYS.find(d => d.id === dayId);
        if (dayItem) {
          dayItem.tasks.forEach((_, idx) => {
            delete appState.completedSubtasks[`${dayId}-${idx}`];
          });
        }
      }

      saveState();
      renderRoadmap();
    }

    if (e.target.classList.contains('subtask-input')) {
      const taskKey = e.target.dataset.taskKey;
      const dayId = parseInt(e.target.dataset.dayId, 10);
      const isChecked = e.target.checked;

      if (isChecked) {
        appState.completedSubtasks[taskKey] = true;
        recordActivity();
      } else {
        delete appState.completedSubtasks[taskKey];
      }

      // Check if all subtasks are done for this day
      const dayItem = ALL_DAYS.find(d => d.id === dayId);
      if (dayItem) {
        const allSubtasksDone = dayItem.tasks.every((_, idx) => appState.completedSubtasks[`${dayId}-${idx}`]);
        if (allSubtasksDone && !appState.completedDays.includes(dayId)) {
          appState.completedDays.push(dayId);
          triggerCelebration();
        } else if (!allSubtasksDone && appState.completedDays.includes(dayId)) {
          appState.completedDays = appState.completedDays.filter(id => id !== dayId);
        }
      }

      saveState();
      renderRoadmap();
    }
  });

  // Notes Modal Open / Save
  document.addEventListener('click', (e) => {
    const noteBtn = e.target.closest('.open-notes-btn');
    if (noteBtn) {
      const dayId = parseInt(noteBtn.dataset.dayId, 10);
      const dayTitle = noteBtn.dataset.dayTitle;
      openNotesModal(dayId, dayTitle);
    }

    // Flashcard Toggle Answer
    const flashcard = e.target.closest('.flashcard');
    if (flashcard) {
      const answerEl = flashcard.querySelector('.flashcard-answer');
      if (answerEl) {
        answerEl.classList.toggle('hidden');
      }
    }
  });

  // Modal actions
  const closeBtn = document.getElementById('close-modal-btn');
  const saveNoteBtn = document.getElementById('save-note-btn');
  const modal = document.getElementById('notes-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeNotesModal);
  if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
      const textarea = document.getElementById('modal-notes-textarea');
      if (activeModalDayId) {
        appState.dayNotes[activeModalDayId] = textarea.value.trim();
        saveState();
        closeNotesModal();
        renderRoadmap();
      }
    });
  }

  // Export / Reset actions
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `DEV5MONTHS_Ilerleme_${new Date().toISOString().slice(0, 10)}.json`);
      dlAnchor.click();
    });
  }

  const resetAllBtn = document.getElementById('reset-all-btn');
  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', () => {
      if (confirm("Tüm ilerlemeyi sıfırlamak istediğine emin misin?")) {
        appState = {
          completedDays: [],
          completedSubtasks: {},
          dayNotes: {},
          streak: 0,
          lastActiveDate: null
        };
        saveState();
        renderRoadmap();
      }
    });
  }

  // Pomodoro Timer Setup
  setupPomodoro();
}

function openNotesModal(dayId, dayTitle) {
  activeModalDayId = dayId;
  const modal = document.getElementById('notes-modal');
  const titleEl = document.getElementById('modal-day-title');
  const textarea = document.getElementById('modal-notes-textarea');

  titleEl.textContent = dayTitle || `Gün ${dayId} Notları`;
  textarea.value = appState.dayNotes[dayId] || '';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeNotesModal() {
  const modal = document.getElementById('notes-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  activeModalDayId = null;
}

// Pomodoro Timer
let timerSeconds = 25 * 60;
let timerRunning = false;
let timerInterval = null;
let isFocusMode = true;

function setupPomodoro() {
  const toggleBtn = document.getElementById('timer-toggle-btn');
  const resetBtn = document.getElementById('timer-reset-btn');
  const display = document.getElementById('timer-display');
  const modeEl = document.getElementById('timer-mode');
  const iconEl = document.getElementById('timer-icon');

  function updateDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateIcon() {
    toggleBtn.innerHTML = `<i data-lucide="${timerRunning ? 'pause' : 'play'}" class="w-4 h-4"></i>`;
    if (window.lucide) lucide.createIcons();
  }

  function playChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
      // AudioContext might be blocked until user interaction
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        updateIcon();
      } else {
        timerRunning = true;
        updateIcon();
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            updateDisplay();
          } else {
            clearInterval(timerInterval);
            timerRunning = false;
            playChime();
            isFocusMode = !isFocusMode;
            timerSeconds = isFocusMode ? 25 * 60 : 5 * 60;
            modeEl.textContent = isFocusMode ? "Odak" : "Mola";
            updateDisplay();
            updateIcon();
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerRunning = false;
      isFocusMode = true;
      timerSeconds = 25 * 60;
      modeEl.textContent = "Odak";
      updateDisplay();
      updateIcon();
    });
  }
}

// Initialize Application
function init() {
  loadState();
  updateStatsUI();
  renderRoadmap();
  setupEventListeners();
  if (window.lucide) lucide.createIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();
