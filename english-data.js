// DEV5MONTHS - 1 Aylık Yazılımcı İngilizcesi ve Gramer Veritabanı
// 30 Günlük Hızlandırılmış Program, Fiiller, Fiilimsiler (Gerunds/Infinitives), Phrasal Verbs ve Mülakat Kalıpları

(function() {
const ENGLISH_DAYS = [
  // ================= HAFTA 1: FİİLLER, FİİLİMSİLER VE TEMEL GRAMER =================
  {
    id: 1,
    week: 1,
    day: 1,
    title: "En Temel Yazılımcı Eylem Fiilleri & Standup İngilizcesi",
    grammarTopic: "Present Continuous (Şimdiki Zaman) & Günlük Scrum / Standup Cümleleri",
    grammarExplanation: "Yazılımcılar günlük toplantılarda 'Dün şunu yaptım, bugün bunun üzerinde çalışıyorum' derken Present Continuous ve Past Simple kullanır: 'I am currently working on the auth module.' (Şu an auth modülü üzerinde çalışıyorum).",
    words: [
      { word: "implement", type: "Verb", meaning: "Uygulamak, hayata geçirmek, kodlamak", sentence: "We need to implement a refresh token mechanism." },
      { word: "deploy", type: "Verb", meaning: "Canlıya almak, dağıtmak", sentence: "The CI/CD pipeline will automatically deploy to production." },
      { word: "execute", type: "Verb", meaning: "Çalıştırmak, icra etmek", sentence: "The V8 engine will execute this function asynchronously." },
      { word: "configure", type: "Verb", meaning: "Yapılandırmak, ayarlarını yapmak", sentence: "You must configure the environment variables properly." },
      { word: "render", type: "Verb", meaning: "Ekrana çizdirmek, görselleştirmek", sentence: "React will re-render the component whenever state changes." },
      { word: "debug", type: "Verb", meaning: "Hata ayıklamak", sentence: "I spent three hours debugging that memory leak." },
      { word: "refactor", type: "Verb", meaning: "Kodu yeniden yapılandırmak (işlevini değiştirmeden iyileştirmek)", sentence: "We should refactor this file to follow the Single Responsibility Principle." },
      { word: "trigger", type: "Verb", meaning: "Tetiklemek", sentence: "Clicking this button will trigger an API request." },
      { word: "terminate", type: "Verb", meaning: "Sonlandırmak, durdurmak", sentence: "The server will terminate idle connections after 60 seconds." },
      { word: "optimize", type: "Verb", meaning: "İyileştirmek, optimize etmek", sentence: "We must optimize our bundle size for mobile users." }
    ],
    speakingDrill: "Standup Pratiği: 'Yesterday, I implemented the user profile view. Today, I am working on optimizing the database queries. I don't have any blockers.'",
    quiz: {
      question: "'We need to _______ the database connection before running tests.' cümlesinde boşluğa hangi fiil en uygundur?",
      options: ["configure", "terminate", "render", "hesitate"],
      correct: 0
    }
  },
  {
    id: 2,
    week: 1,
    day: 2,
    title: "Veri, Veritabanı & API Fiilleri",
    grammarTopic: "Past Simple vs Present Perfect ('I fixed' vs 'I have fixed')",
    grammarExplanation: "Belli bir zaman belirtiyorsan (yesterday, two hours ago) Past Simple: 'I fixed the bug yesterday.' Sonucu şu anı ilgilendiren yeni bir başarıysa Present Perfect: 'I have already pushed the code.' (Kodu gönderdim, şu an yayında).",
    words: [
      { word: "fetch", type: "Verb", meaning: "Gidip getirmek, veri çekmek", sentence: "The client will fetch products from the server." },
      { word: "retrieve", type: "Verb", meaning: "Geri çağırmak, sorgulayıp almak", sentence: "We retrieve the user data using their unique ID." },
      { word: "persist", type: "Verb", meaning: "Kalıcı olarak kaydetmek (diske/DB'ye)", sentence: "LocalStorage persists data even after the browser is closed." },
      { word: "mutate", type: "Verb", meaning: "Değiştirmek, başkalaştırmak (state/veri)", sentence: "Never mutate React state directly; always create a new copy." },
      { word: "sanitize", type: "Verb", meaning: "Zararlı kodlardan arındırmak/temizlemek", sentence: "Always sanitize user inputs to prevent XSS attacks." },
      { word: "populate", type: "Verb", meaning: "Doldurmak, veriyle beslemek", sentence: "This script will populate the database with seed data." },
      { word: "truncate", type: "Verb", meaning: "Kırpmak, sıfırlamak, kesmek", sentence: "Truncating a table deletes all rows instantly." },
      { word: "migrate", type: "Verb", meaning: "Taşımak, sürüm atlatmak (veritabanı şeması)", sentence: "Run Prisma migrate to apply schema changes to PostgreSQL." },
      { word: "parse", type: "Verb", meaning: "Ayrıştırmak, anlamlandırmak", sentence: "JSON.parse() converts a string into a JavaScript object." },
      { word: "stringify", type: "Verb", meaning: "Diziye/metne dönüştürmek", sentence: "We must stringify the payload before sending it in HTTP body." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'I have designed a schema that persists relational data without redundancy.'",
    quiz: {
      question: "React'te state'i doğrudan değiştirmemek (değiştirilemez kılmak) için hangi kelime kullanılır?",
      options: ["Do not mutate state", "Do not fetch state", "Do not migrate state", "Do not truncate state"],
      correct: 0
    }
  },
  {
    id: 3,
    week: 1,
    day: 3,
    title: "Yazılımda En Çok Karışan Düzensiz Fiiller (Irregular Verbs)",
    grammarTopic: "V1 (Yalın), V2 (Geçmiş) ve V3 (Participle / Edilgen) Halleri",
    grammarExplanation: "Git commit mesajlarında veya PR açıklamalarında V2 ve V3 halleri sürekli kullanılır: write -> wrote -> written, build -> built -> built, bind -> bound -> bound.",
    words: [
      { word: "build / built / built", type: "Irregular Verb", meaning: "İnşa etmek, derlemek", sentence: "The project was built successfully in 12 seconds." },
      { word: "bind / bound / bound", type: "Irregular Verb", meaning: "Bağlamak (this bağlamı vb.)", sentence: "The handler is bound to the component instance." },
      { word: "send / sent / sent", type: "Irregular Verb", meaning: "Göndermek (istek/veri)", sentence: "A verification email has been sent to your inbox." },
      { word: "catch / caught / caught", type: "Irregular Verb", meaning: "Yakalamak (hata)", sentence: "The exception was caught by the global error boundary." },
      { word: "run / ran / run", type: "Irregular Verb", meaning: "Çalışmak, yürütmek", sentence: "All automated tests have run and passed." },
      { word: "write / wrote / written", type: "Irregular Verb", meaning: "Yazmak", sentence: "This legacy code was written five years ago." },
      { word: "throw / threw / thrown", type: "Irregular Verb", meaning: "Fırlatmak (hata/istisna)", sentence: "A custom ValidationError was thrown by the server." },
      { word: "find / found / found", type: "Irregular Verb", meaning: "Bulmak", sentence: "No matching records were found in the database." },
      { word: "set / set / set", type: "Irregular Verb", meaning: "Atamak, kurmak", sentence: "The cookie has been set with the HttpOnly flag." },
      { word: "split / split / split", type: "Irregular Verb", meaning: "Bölmek (kod/string)", sentence: "The bundle is split into several smaller chunks." }
    ],
    speakingDrill: "Commit Pratiği: 'fix(auth): caught unhandled exception when token is invalid.'",
    quiz: {
      question: "'An error was ________ by the payment service.' cümlesinde throw fiilinin hangi hali gelmelidir?",
      options: ["thrown", "threw", "throwing", "throwed"],
      correct: 0
    }
  },
  {
    id: 4,
    week: 1,
    day: 4,
    title: "FİİLİMSİLER - BÖLÜM 1: Gerunds (-ing ile İsimleşen Fiiller)",
    grammarTopic: "Gerund Nedir? Fiilin İsim Haline Gelmesi (-ing Eki)",
    grammarExplanation: "İngilizcede bir fiilin sonuna '-ing' getirerek onu cümlenin öznesi veya nesnesi yapabilirsin (Tıpkı Türkçedeki '-mek/-mak' veya '-me/-ma' gibi). Örneğin: 'Code' (kod yazmak) -> 'Coding' (kod yazma/kodlama). Cümlenin başında özne olarak kullanılır: 'Debugging is twice as hard as writing the code.'",
    words: [
      { word: "avoid doing", type: "Gerund Rule", meaning: "Bir şeyi yapmaktan kaçınmak", sentence: "Avoid mutating the DOM directly in React applications." },
      { word: "consider using", type: "Gerund Rule", meaning: "Bir şeyi kullanmayı düşünmek", sentence: "Consider using Zustand instead of complex Redux boilerplate." },
      { word: "finish testing", type: "Gerund Rule", meaning: "Test etmeyi bitirmek", sentence: "Once we finish testing the API, we can merge the branch." },
      { word: "keep running", type: "Gerund Rule", meaning: "Çalışmaya devam etmek", sentence: "The daemon process will keep running in the background." },
      { word: "suggest refactoring", type: "Gerund Rule", meaning: "Yeniden yapılandırmayı önermek", sentence: "I suggest refactoring this module to improve readability." },
      { word: "mind sharing", type: "Gerund Rule", meaning: "Paylaşmanın sakıncası olmamak", sentence: "Would you mind sharing your screen during the call?" },
      { word: "risk crashing", type: "Gerund Rule", meaning: "Çökme riski taşımak", sentence: "Without a try-catch block, you risk crashing the server." },
      { word: "practice coding", type: "Gerund Rule", meaning: "Kod yazma pratiği yapmak", sentence: "You should practice coding algorithms every single morning." },
      { word: "look forward to hearing", type: "Gerund Rule", meaning: "Haber almayı dört gözle beklemek", sentence: "I look forward to hearing from your engineering team." },
      { word: "worth mentioning", type: "Gerund Rule", meaning: "Bahsetmeye değer olmak", sentence: "It is worth mentioning that Redis is an in-memory database." }
    ],
    speakingDrill: "Altın Kural: 'avoid, consider, suggest, finish, keep' fiillerinden sonra gelen fiil MUTLAKA '-ing' (Gerund) alır: 'Avoid doing', 'Consider using'.",
    quiz: {
      question: "'You should avoid ________ large objects in component state.' boşluğa hangisi gelmelidir?",
      options: ["storing", "to store", "stored", "store"],
      correct: 0
    }
  },
  {
    id: 5,
    week: 1,
    day: 5,
    title: "FİİLİMSİLER - BÖLÜM 2: Infinitives (to + Fiil ile Amaç Bildirme)",
    grammarTopic: "Infinitive Nedir? 'to + Verb' Kalıbı ve Neden Kullanılır?",
    grammarExplanation: "Bir eylemin amacını ('yapmak için') veya bir fiilden sonra ikinci fiile bağlanmayı ifade eder: 'I opened VS Code TO WRITE some code.' (Kod yazmak için VS Code'u açtım). Bazı fiiller ardından her zaman 'to + verb' ister: decide, manage, promise, afford, allow.",
    words: [
      { word: "decide to migrate", type: "Infinitive Rule", meaning: "Taşımaya karar vermek", sentence: "We decided to migrate from JavaScript to TypeScript." },
      { word: "manage to fix", type: "Infinitive Rule", meaning: "Düzeltmeyi başarmak", sentence: "I managed to fix the deadlock issue yesterday." },
      { word: "allow users to upload", type: "Infinitive Rule", meaning: "Kullanıcıların yüklemesine izin vermek", sentence: "The API allows users to upload avatar images." },
      { word: "refuse to execute", type: "Infinitive Rule", meaning: "Çalıştırmayı reddetmek", sentence: "The database refuses to execute unauthorized queries." },
      { word: "hesitate to ask", type: "Infinitive Rule", meaning: "Sormaktan çekinmek", sentence: "Don't hesitate to ask questions during the code review." },
      { word: "tend to cause", type: "Infinitive Rule", meaning: "Sebep olma eğiliminde olmak", sentence: "Deeply nested loops tend to cause high CPU usage." },
      { word: "attempt to connect", type: "Infinitive Rule", meaning: "Bağlanmaya teşebbüs etmek/denemek", sentence: "The client will attempt to connect three times before failing." },
      { word: "enable teams to collaborate", type: "Infinitive Rule", meaning: "Takımların işbirliği yapmasını sağlamak", sentence: "Git enables teams to collaborate smoothly." },
      { word: "strive to write", type: "Infinitive Rule", meaning: "Yazmaya gayret etmek", sentence: "Senior engineers strive to write maintainable code." },
      { word: "fail to deliver", type: "Infinitive Rule", meaning: "Teslim etmeyi başaramamak", sentence: "The webhook failed to deliver the notification." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'Our primary goal is to write clean, type-safe code that allows the system to scale horizontally.'",
    quiz: {
      question: "'Our team decided ________ Prisma ORM instead of raw SQL.' boşluğa hangisi gelmelidir?",
      options: ["to adopt", "adopting", "adopted", "adopt"],
      correct: 0
    }
  },
  {
    id: 6,
    week: 1,
    day: 6,
    title: "FİİLİMSİLER - BÖLÜM 3: Gerund vs Infinitive Anlam Farkları (Kritik!)",
    grammarTopic: "Fiile Göre Anlamı Değişen 'Stop, Try, Remember, Forget'",
    grammarExplanation: "1. 'Stop doing': Bir alışkanlığı/eylemi tamamen bırakmak ('Stop using var'). 'Stop to do': Başka bir şey yapmak için durmak ('I stopped to drink coffee').\n2. 'Try doing': Deneyip sonucunu görmek ('Try restarting the server'). 'Try to do': Çabalayıp zor bir şeyi başarmaya çalışmak ('Try to hit the deadline').",
    words: [
      { word: "stop using vs stop to use", type: "Shift", meaning: "Kullanmayı bırakmak vs Kullanmak için durmak", sentence: "Stop using 'any' in TypeScript! Stop to check the documentation." },
      { word: "try restarting vs try to restart", type: "Shift", meaning: "Yeniden başlatmayı denemek vs Yeniden başlatmaya çabalamak", sentence: "Try clearing your cache before refreshing." },
      { word: "remember doing vs remember to do", type: "Shift", meaning: "Yaptığını hatırlamak vs Yapmayı unutmamak", sentence: "Remember to close database connections in the finally block." },
      { word: "forget doing vs forget to do", type: "Shift", meaning: "Yaptığını unutmak vs Yapmayı unutmak", sentence: "Never forget to set HttpOnly on authentication cookies." },
      { word: "need to do vs need doing", type: "Shift", meaning: "Yapmaya ihtiyacı olmak vs Yapılması gerekmek", sentence: "This legacy component needs refactoring (= needs to be refactored)." },
      { word: "help (to) build", type: "Special", meaning: "İnşa etmeye yardımcı olmak", sentence: "This library helps build accessible UI primitives." },
      { word: "prefer ... to ...", type: "Special", meaning: "Bir şeyi diğerine tercih etmek", sentence: "I prefer using PostgreSQL to MongoDB for financial data." },
      { word: "used to do vs be used to doing", type: "Special", meaning: "Eskiden yapardı vs Yapmaya alışkın olmak", sentence: "I used to write jQuery, but now I am used to writing React." },
      { word: "look like vs seem to be", type: "Comparison", meaning: "Gibi görünmek", sentence: "This seems to be a race condition in the async worker." },
      { word: "lead to doing / something", type: "Special", meaning: "Bir şeye yol açmak", sentence: "Poor database indexing leads to degrading query performance." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'I always remember to write unit tests before pushing code to the repository.'",
    quiz: {
      question: "'Please remember ________ the .env.example file before submitting the Pull Request.'",
      options: ["to update", "updating", "update", "updated"],
      correct: 0
    }
  },
  {
    id: 7,
    week: 1,
    day: 7,
    title: "1. Hafta Değerlendirmesi & 15 Dakikalık Standup Provası",
    grammarTopic: "Haftalık Konuşma ve Akıcılık Entegrasyonu",
    grammarExplanation: "Bu hafta öğrendiğin 60 fiili ve Gerund/Infinitive kurallarını tek bir akıcı monologda birleştiriyoruz.",
    words: [
      { word: "currently", type: "Adverb", meaning: "Şu anda, halihazırda", sentence: "We are currently refactoring our core authentication pipeline." },
      { word: "primarily", type: "Adverb", meaning: "Öncelikli olarak, başlıca", sentence: "This service is primarily responsible for processing payments." },
      { word: "subsequently", type: "Adverb", meaning: "Sonrasında, ardından", sentence: "The token is verified and subsequently decoded." },
      { word: "initially", type: "Adverb", meaning: "Başlangıçta, ilk olarak", sentence: "Initially, we considered using WebSockets, but SSE was sufficient." },
      { word: "ultimately", type: "Adverb", meaning: "Nihayetinde, eninde sonunda", sentence: "Ultimately, performance depends on database query latency." }
    ],
    speakingDrill: "Ayna Karşısında Oku: 'Hi team. Yesterday, I managed to fix the authentication bug and finished testing the API endpoints. Today, I'm planning to implement the Redis caching layer to avoid querying the database repeatedly. No blockers on my side.'",
    quiz: {
      question: "Günlük standup toplantısında 'Şu an ödeme servisi üzerinde çalışıyorum' nasıl denir?",
      options: ["I am currently working on the payment service.", "I will be working on payment service yesterday.", "I have work payment service currently.", "I am worked on payment service."],
      correct: 0
    }
  },

  // ================= HAFTA 2: PHRASAL VERBS (DEYİMSEL FİİLLER) =================
  {
    id: 8,
    week: 2,
    day: 8,
    title: "Git, Versiyon Kontrolü & Takım Phrasal Verbleri",
    grammarTopic: "Phrasal Verbs Nedir? Fiil + Edat (Preposition) = Yeni Anlam!",
    grammarExplanation: "Phrasal verb'ler ana dili İngilizce olan yazılımcıların en çok kullandığı yapılardır. Düz 'revert' yerine 'roll back', 'download' yerine 'pull down' derler.",
    words: [
      { word: "roll back", type: "Phrasal Verb", meaning: "Geri almak, eski sürüme dönmek", sentence: "We had to roll back the release due to a critical memory leak." },
      { word: "branch off", type: "Phrasal Verb", meaning: "Ayrı bir dal (branch) açmak", sentence: "Always branch off from main before starting a new feature." },
      { word: "pull down", type: "Phrasal Verb", meaning: "Yerel makineye çekmek (git pull)", sentence: "Make sure to pull down the latest changes before testing." },
      { word: "push up", type: "Phrasal Verb", meaning: "Uzak sunucuya göndermek (git push)", sentence: "I just pushed up my commit to the remote repository." },
      { word: "merge in", type: "Phrasal Verb", meaning: "İçine dahil etmek, birleştirmek", sentence: "Once the code review is approved, we can merge in your PR." },
      { word: "check out", type: "Phrasal Verb", meaning: "Başka bir dala geçmek / kontrol etmek", sentence: "Check out the feature branch to inspect the bug locally." },
      { word: "squash down", type: "Phrasal Verb", meaning: "Commit'leri tek bir commit'te birleştirmek", sentence: "Please squash down your WIP commits into a single descriptive commit." },
      { word: "wipe out", type: "Phrasal Verb", meaning: "Tamamen silmek, yok etmek", sentence: "Running 'rm -rf' could accidentally wipe out your local config." },
      { word: "stash away", type: "Phrasal Verb", meaning: "Geçici olarak rafa kaldırmak", sentence: "Stash away your uncommitted changes before switching branches." },
      { word: "pick up", type: "Phrasal Verb", meaning: "Bir görevi üstlenmek / öğrenivermek", sentence: "I will pick up the ticket regarding the cart validation tomorrow." }
    ],
    speakingDrill: "PR Yorumu: 'I pulled down your branch, tested the feature locally, and everything looks solid. Feel free to merge it in!'",
    quiz: {
      question: "'Hatalı bir canlı yayından sonra acilen eski sürüme geri döndük' cümlesinde hangi phrasal verb kullanılır?",
      options: ["rolled back", "pushed up", "branched off", "checked out"],
      correct: 0
    }
  },
  {
    id: 9,
    week: 2,
    day: 9,
    title: "Bulut, Sunucu & Altyapı Phrasal Verbleri",
    grammarTopic: "Sistem ve DevOps Dünyasında Kullanılan Deyimsel Fiiller",
    grammarExplanation: "Konteyner ve sunucu yönetiminde kullanılan standart teknik terimler.",
    words: [
      { word: "spin up", type: "Phrasal Verb", meaning: "Hızlıca ayağa kaldırmak (sunucu/container)", sentence: "Docker Compose allows us to spin up PostgreSQL and Redis in seconds." },
      { word: "tear down", type: "Phrasal Verb", meaning: "İndirmek, yok etmek, kapatmak", sentence: "The testing framework will tear down the test database after each suite." },
      { word: "scale out / up", type: "Phrasal Verb", meaning: "Yatayda / Dikeyde büyütmek, ölçeklemek", sentence: "During Black Friday, our infrastructure will scale out automatically." },
      { word: "boot up", type: "Phrasal Verb", meaning: "Başlatmak, açılmak (sistem/OS)", sentence: "The virtual machine takes around 15 seconds to boot up." },
      { word: "shut down", type: "Phrasal Verb", meaning: "Güvenli şekilde kapatmak", sentence: "We must shut down the background workers gracefully." },
      { word: "wire up", type: "Phrasal Verb", meaning: "Birbirine bağlamak, entegre etmek", sentence: "Let's wire up the Stripe webhook handler with our order service." },
      { word: "back up", type: "Phrasal Verb", meaning: "Yedeklemek", sentence: "Our automated cron job backs up the PostgreSQL database every midnight." },
      { word: "plug in", type: "Phrasal Verb", meaning: "Takmak, eklenti olarak dahil etmek", sentence: "You can plug in any OAuth provider into Auth.js." },
      { word: "spin down", type: "Phrasal Verb", meaning: "Talebe göre sunucu sayısını azaltmak", sentence: "Idle instances will spin down to save cloud hosting costs." },
      { word: "set up", type: "Phrasal Verb", meaning: "Kurmak, hazırlamak", sentence: "It takes only five minutes to set up this repository locally." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'We spin up ephemeral Docker containers in our CI pipeline to test against a fresh database instance.'",
    quiz: {
      question: "'Docker ile PostgreSQL veritabanını birkaç saniyede ayağa kaldırdık' cümlesi için:",
      options: ["We spun up PostgreSQL", "We tore down PostgreSQL", "We backed up PostgreSQL", "We shut down PostgreSQL"],
      correct: 0
    }
  },
  {
    id: 10,
    week: 2,
    day: 10,
    title: "Hata Çözme & Problem Giderme Phrasal Verbleri",
    grammarTopic: "Bug Çözümü ve Kriz Anında İletişim",
    grammarExplanation: "Mülakatçılar 'Tell me about a hard bug' sorduğunda bu fiiller konuşmana profesyonellik katar.",
    words: [
      { word: "figure out", type: "Phrasal Verb", meaning: "Çözmek, anlamak, içyüzünü kavramak", sentence: "It took a while to figure out why the JWT signature was failing." },
      { word: "run into", type: "Phrasal Verb", meaning: "Karşılaşmak (beklenmedik sorun/hata)", sentence: "We ran into an unexpected CORS error on the staging server." },
      { word: "work around", type: "Phrasal Verb", meaning: "Geçici çözümle atlatmak (workaround)", sentence: "We worked around the third-party API limitation by caching requests." },
      { word: "track down", type: "Phrasal Verb", meaning: "İzini sürmek, kaynağını bulmak", sentence: "The senior engineer helped track down the memory leak to a missing cleanup." },
      { word: "sort out", type: "Phrasal Verb", meaning: "Halledivermek, düzene sokmak", sentence: "Let's sort out the merge conflicts before deploying to production." },
      { word: "end up with", type: "Phrasal Verb", meaning: "Sonunda ... ile karşılaşmak", sentence: "Without type checking, you often end up with undefined errors." },
      { word: "weed out", type: "Phrasal Verb", meaning: "Ayıklamak, elemek (hataları/kötü veriyi)", sentence: "Unit tests help weed out edge case defects early in the cycle." },
      { word: "fall back on/to", type: "Phrasal Verb", meaning: "B planına sığınmak / yedek sisteme geçmek", sentence: "If Redis goes down, the application will fall back to direct DB queries." },
      { word: "narrow down", type: "Phrasal Verb", meaning: "Daraltmak, seçenekleri azaltmak", sentence: "Using console logs, we narrowed down the problem to line 42." },
      { word: "bring down", type: "Phrasal Verb", meaning: "Çökertmek (sunucuyu)", sentence: "An unindexed database query brought down our entire backend." }
    ],
    speakingDrill: "Mülakat Hikayesi: 'Last month, we ran into a concurrency issue that brought down the payment server. I helped track down the bug and we figured out that a missing lock was causing double charges.'",
    quiz: {
      question: "'We ________ a strange bug where users could not log in after clearing cookies.'",
      options: ["ran into", "tore down", "scaled out", "plugged in"],
      correct: 0
    }
  },
  {
    id: 11,
    week: 2,
    day: 11,
    title: "Mimari Kararlar ve Modallar: Should vs Must vs Could",
    grammarTopic: "Kod İncelemelerinde (Code Review) Nezaket ve Kesinlik Dereceleri",
    grammarExplanation: "'Must' = Zorunlu/Kritik ('We must sanitize input'). 'Should' = Öneri/Best Practice ('We should extract this component'). 'Could' = Alternatif fikir ('We could also use a map here').",
    words: [
      { word: "must enforce", type: "Modal Phrase", meaning: "Zorunlu kılmak zorunda olmak", sentence: "We must enforce HTTPS across all production domains." },
      { word: "should decouple", type: "Modal Phrase", meaning: "Bağımsız hale getirmeli (öneri)", sentence: "We should decouple the business logic from UI components." },
      { word: "could potentially lead to", type: "Modal Phrase", meaning: "Muhtemelen yol açabilir", sentence: "Leaving this unmemoized could potentially lead to redundant re-renders." },
      { word: "ought to consider", type: "Modal Phrase", meaning: "Göz önünde bulundurmalı", sentence: "We ought to consider database sharding if user volume doubles." },
      { word: "might break", type: "Modal Phrase", meaning: "Bozabilir (ihtimal)", sentence: "Changing this API contract might break backward compatibility for mobile clients." },
      { word: "have to comply with", type: "Modal Phrase", meaning: "Uymak zorunda olmak", sentence: "All user data storage has to comply with GDPR regulations." },
      { word: "would rather avoid", type: "Modal Phrase", meaning: "Kaçınmayı tercih etmek", sentence: "I would rather avoid adding an external library for just one helper function." },
      { word: "had better validate", type: "Modal Phrase", meaning: "Doğrulasa iyi olur (yoksa kötü olur)", sentence: "You had better validate the payload before passing it to the ORM." },
      { word: "cannot afford to lose", type: "Modal Phrase", meaning: "Kaybetmeyi göze alamaz", sentence: "Financial systems cannot afford to lose transaction logs." },
      { word: "need not recompute", type: "Modal Phrase", meaning: "Tekrar hesaplamasına gerek yok", sentence: "With useMemo, the component need not recompute the total on every render." }
    ],
    speakingDrill: "PR Yorumu: 'We should consider moving this calculation into a custom hook; otherwise, it might cause performance bottlenecks.'",
    quiz: {
      question: "Nazik bir kod incelemesi önerisinde hangisi en profesyoneldir?",
      options: ["We should consider extracting this into a helper function.", "You must delete this right now.", "Why did you write this?", "Do it again."],
      correct: 0
    }
  },
  {
    id: 12,
    week: 2,
    day: 12,
    title: "Edilgen Çatı (Passive Voice) ile Teknik Dokümantasyon",
    grammarTopic: "Teknik Dökümanlarda Neden 'Passive Voice' Kullanılır?",
    grammarExplanation: "Yazılım dokümanlarında kimin yaptığı değil, sisteme ne yapıldığı önemlidir: 'The request IS SENT by the client and IS VALIDATED by the server.' (İstek istemci tarafından gönderilir ve sunucu tarafından doğrulanır).",
    words: [
      { word: "is authenticated", type: "Passive", meaning: "Kimliği doğrulanır", sentence: "The user is authenticated using JWT bearer tokens." },
      { word: "are cached", type: "Passive", meaning: "Önbelleğe alınır", sentence: "Frequent queries are cached in Redis with a 15-minute TTL." },
      { word: "was rejected", type: "Passive", meaning: "Reddedildi", sentence: "The Promise was rejected due to network timeout." },
      { word: "has been deprecated", type: "Passive", meaning: "Kullanımdan kaldırıldı (eski API)", sentence: "This lifecycle method has been deprecated since React 16.8." },
      { word: "will be dispatched", type: "Passive", meaning: "Gönderilecek / tetiklenecek", sentence: "A custom event will be dispatched when the form submits." },
      { word: "is serialized", type: "Passive", meaning: "Serileştirilir (JSON metnine)", sentence: "The payload is serialized before transmission over the socket." },
      { word: "can be overridden", type: "Passive", meaning: "Ezilebilir / üzerine yazılabilir", sentence: "Default Tailwind styles can be overridden using tailwind-merge." },
      { word: "is encrypted at rest", type: "Passive", meaning: "Bekleme halinde şifrelenir (diskte)", sentence: "All sensitive customer credentials are encrypted at rest." },
      { word: "are throttled", type: "Passive", meaning: "Hız sınırına tabi tutulur", sentence: "Incoming requests are throttled to 100 requests per minute." },
      { word: "was initialized", type: "Passive", meaning: "Başlatıldı", sentence: "The database connection pool was initialized successfully." }
    ],
    speakingDrill: "Sistem Anlatımı: 'When a request arrives, the token is verified, the input is sanitized, and the response is serialized into JSON.'",
    quiz: {
      question: "'This endpoint ________ by rate-limiting rules to prevent DDoS.'",
      options: ["is protected", "protects", "protecting", "was protect"],
      correct: 0
    }
  },
  {
    id: 13,
    week: 2,
    day: 13,
    title: "Şart Cümleleri (Conditionals): If, When, Unless",
    grammarTopic: "Mantık ve Sistem Tasarımı Şart Cümleleri",
    grammarExplanation: "'Unless' = 'If not' (Eğer ... olmazsa). 'Unless we add an index, the query will remain slow.' (Eğer bir indeks eklemezsek, sorgu yavaş kalmaya devam edecek).",
    words: [
      { word: "unless specified otherwise", type: "Condition", meaning: "Aksi belirtilmedikçe", sentence: "Default timeout is 30 seconds unless specified otherwise." },
      { word: "provided that", type: "Condition", meaning: "Şartıyla, koşuluyla", sentence: "We can scale smoothly provided that the services remain stateless." },
      { word: "in case of failure", type: "Condition", meaning: "Başarısızlık durumunda", sentence: "In case of server failure, the load balancer redirects traffic to secondary nodes." },
      { word: "as long as", type: "Condition", meaning: "...dığı sürece", sentence: "As long as components remain pure, React skips redundant renders." },
      { word: "even if", type: "Condition", meaning: "...sa bile", sentence: "Even if the database crashes, cached data remains accessible." },
      { word: "what if", type: "Condition", meaning: "Ya ... olursa? (Mülakat sorusu)", sentence: "What if two concurrent requests attempt to deduct balance at the same time?" },
      { word: "only when", type: "Condition", meaning: "Sadece ... olduğunda", sentence: "Re-render happens only when the referenced state property mutates." },
      { word: "otherwise", type: "Condition", meaning: "Aksi takdirde", sentence: "Return cached response if valid; otherwise, fetch fresh data." },
      { word: "in the event that", type: "Condition", meaning: "...olması halinde", sentence: "In the event that token expires, trigger automatic refresh." },
      { word: "should there be any error", type: "Formal Condition", meaning: "Herhangi bir hata olması durumunda (Devrik if)", sentence: "Should there be any validation failure, abort the transaction." }
    ],
    speakingDrill: "Mülakat Sorusu Cevabı: 'Unless we implement an idempotency key, a user double-clicking the pay button could result in duplicate charges.'",
    quiz: {
      question: "'________ we optimize our queries, our cloud bill will keep increasing.'",
      options: ["Unless", "Despite", "Because of", "Although"],
      correct: 0
    }
  },
  {
    id: 14,
    week: 2,
    day: 14,
    title: "2. Hafta Değerlendirmesi: Teknik Makale ve Doküman Okuma",
    grammarTopic: "İngilizce Dökümantasyon Hızlı Tarama (Skimming & Scanning)",
    grammarExplanation: "React ve Next.js resmi dokümanlarını sözlük kullanmadan anlama egzersizi.",
    words: [
      { word: "prerequisite", type: "Noun", meaning: "Ön koşul", sentence: "Node.js v18+ is a prerequisite for running Next.js 15." },
      { word: "seamlessly", type: "Adverb", meaning: "Kusursuzca, pürüzsüz şekilde", sentence: "Next.js integrates seamlessly with Tailwind CSS." },
      { word: "caveat", type: "Noun", meaning: "İstisna, dikkat edilmesi gereken püf noktası / uyarı", sentence: "One caveat with Server Actions is that they only run on POST requests." },
      { word: "out of the box", type: "Idiom", meaning: "Hazır gelen, ek kurulum gerektirmeyen", sentence: "Vite provides TypeScript support out of the box." },
      { word: "under the hood", type: "Idiom", meaning: "Kaputun altında, arka planda", sentence: "Under the hood, React Compiler automatically memoizes component outputs." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'Under the hood, React Server Components send a streaming JSON format rather than standard HTML.'",
    quiz: {
      question: "'Bu özellik hiçbir ek kütüphane kurmadan kendiliğinden hazır geliyor' İngilizce nasıl denir?",
      options: ["It works out of the box.", "It runs under the hood.", "It rolls back seamlessly.", "It spins down caveats."],
      correct: 0
    }
  },

  // ================= HAFTA 3: TEKNİK KELİME DAĞARCIĞI VE İLETİŞİM =================
  {
    id: 15,
    week: 3,
    day: 15,
    title: "Temiz Kod & Mimari İsimleri (Architectural Nouns)",
    grammarTopic: "Mühendislik Dili: Soyutlama, Bağımsızlık ve Ölçeklenme",
    grammarExplanation: "Junior 'kod çalışıyor' der; Senior 'mimari gevşek bağlı (loosely coupled) ve yüksek uyumlu (highly cohesive)' der.",
    words: [
      { word: "decoupling", type: "Noun", meaning: "Birbirinden bağımsız hale getirme, ayırma", sentence: "Decoupling components allows for independent testing." },
      { word: "redundancy", type: "Noun", meaning: "Gereksiz fazlalık / Güvenlik için yedeklilik", sentence: "Eliminating data redundancy is a core goal of normalization." },
      { word: "latency", type: "Noun", meaning: "Gecikme süresi (milisaniye)", sentence: "Edge functions help reduce network latency for international users." },
      { word: "throughput", type: "Noun", meaning: "İşlem kapasitesi / Birim zamanda geçen veri", sentence: "Our message queue achieved a throughput of 10,000 events per second." },
      { word: "bottleneck", type: "Noun", meaning: "Darboğaz (sistemi yavaşlatan en zayıf halka)", sentence: "The unindexed database query was the primary performance bottleneck." },
      { word: "abstraction", type: "Noun", meaning: "Soyutlama", sentence: "Prisma provides a high-level abstraction over raw SQL queries." },
      { word: "concurrency", type: "Noun", meaning: "Eşzamanlılık", sentence: "Node.js achieves high concurrency using non-blocking I/O operations." },
      { word: "scalability", type: "Noun", meaning: "Ölçeklenebilirlik", sentence: "Horizontal scalability is easier to achieve with stateless microservices." },
      { word: "maintainability", type: "Noun", meaning: "Bakımı yapılabilirlik, sürdürülebilirlik", sentence: "Writing clean, documented code drastically improves long-term maintainability." },
      { word: "trade-off", type: "Noun", meaning: "Ödünleşim, bir avantaj için diğerinden feragat etme", sentence: "Choosing NoSQL over SQL involves a trade-off between flexibility and ACID guarantees." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'Every architectural decision involves trade-offs between latency, maintainability, and development speed.'",
    quiz: {
      question: "Sistemin en yavaşlayan ve tüm hızı sınırlayan parçasına ne denir?",
      options: ["Bottleneck", "Throughput", "Redundancy", "Decoupling"],
      correct: 0
    }
  },
  {
    id: 16,
    week: 3,
    day: 16,
    title: "Kibar ve Profesyonel Kod İnceleme (Code Review) İngilizcesi",
    grammarTopic: "Takım İletişiminde 'Nitpick', 'What if' ve Öneri Kalıpları",
    grammarExplanation: "Yabancı şirketlerde PR'a 'This code is bad' denmez; yapıcı, nazik ve açık iletişim kurulur.",
    words: [
      { word: "Nit / Nitpick", type: "Slang/Term", meaning: "Önemsiz küçük detay (kodu kırmayan stil önerisi)", sentence: "Nit: You have an extra blank line here." },
      { word: "Could we consider ...?", type: "Phrase", meaning: "... yapmayı düşünebilir miyiz?", sentence: "Could we consider extracting this logic into a custom hook?" },
      { word: "What are your thoughts on ...?", type: "Phrase", meaning: "... hakkında ne düşünüyorsun?", sentence: "What are your thoughts on using Zustand instead of local state here?" },
      { word: "Good catch!", type: "Idiom", meaning: "Güzel yakaladın! / Harika fark ettin!", sentence: "Good catch! I totally missed that edge case." },
      { word: "LGTM (Looks Good To Me)", type: "Abbreviation", meaning: "Bana göre harika, onaylıyorum", sentence: "LGTM! Approved and ready to merge." },
      { word: "Just a minor suggestion:", type: "Phrase", meaning: "Sadece küçük bir öneri:", sentence: "Just a minor suggestion: we can use optional chaining (?.) here." },
      { word: "Are we sure about ...?", type: "Phrase", meaning: "... konusunda emin miyiz?", sentence: "Are we sure about exposing this endpoint without rate-limiting?" },
      { word: "Thanks for tackling this!", type: "Phrase", meaning: "Bu sorunu ele aldığın için teşekkürler!", sentence: "Thanks for tackling this tough refactoring task!" },
      { word: "Would it make sense to ...?", type: "Phrase", meaning: "... yapmak mantıklı olur mu?", sentence: "Would it make sense to cache this response in Redis?" },
      { word: "Left a few comments inline.", type: "Phrase", meaning: "Kod satırlarının arasına birkaç yorum bıraktım.", sentence: "Great work overall! Left a few minor comments inline." }
    ],
    speakingDrill: "GitHub Yorumu Yazma: 'Awesome PR! Just a small nit: could we extract line 45 into a utility function to prevent duplicate code? Otherwise, LGTM!'",
    quiz: {
      question: "Kod incelemesinde 'kodu bozmayan, önemsiz biçimsel detay' anlamına gelen kısaltma nedir?",
      options: ["Nit", "Blocker", "Bug", "WIP"],
      correct: 0
    }
  },
  {
    id: 17,
    week: 3,
    day: 17,
    title: "Sebep ve Sonuç Bağlaçları: Due to, Result in, Lead to",
    grammarTopic: "Hata Açıklarken Neden-Sonuç İlişkisi Kurma",
    grammarExplanation: "'Due to' (+ Noun) = ...den dolayı ('due to high traffic'). 'Lead to' (+ Verb-ing / Noun) = ...e yol açmak ('leads to crashing').",
    words: [
      { word: "due to", type: "Preposition", meaning: "-den dolayı, yüzünden", sentence: "The deployment failed due to missing environment variables." },
      { word: "result in", type: "Verb Phrase", meaning: "...ile sonuçlanmak", sentence: "Unvalidated user input can result in SQL injection vulnerabilities." },
      { word: "lead to", type: "Verb Phrase", meaning: "...e yol açmak", sentence: "Frequent polling can lead to server saturation." },
      { word: "as a consequence of", type: "Phrase", meaning: "-in bir sonucu olarak", sentence: "As a consequence of the outage, we lost 5% of daily transactions." },
      { word: "in order to", type: "Phrase", meaning: "-mek amacıyla, için", sentence: "We enabled gzip compression in order to reduce payload transfer size." },
      { word: "whereas", type: "Conjunction", meaning: "Oysa, -e rağmen, halbuki (karşılaştırma)", sentence: "localStorage persists data permanently, whereas sessionStorage clears upon tab close." },
      { word: "despite", type: "Preposition", meaning: "-e rağmen (+ İsim)", sentence: "Despite running thousands of concurrent tests, the build completed in 20 seconds." },
      { word: "hence", type: "Adverb", meaning: "Bu nedenle, bundan ötürü", sentence: "The token has expired; hence, the server returned a 401 Unauthorized." },
      { word: "so that", type: "Conjunction", meaning: "-sin diye, böylelikle", sentence: "We memoized the component so that it won't re-render unnecessarily." },
      { word: "owing to", type: "Preposition", meaning: "-den kaynaklı olarak", sentence: "Owing to Redis caching, response times dropped by 70%." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'We introduced optimistic updates in order to improve perceived performance, whereas data synchronization happens asynchronously in the background.'",
    quiz: {
      question: "'The website was down ________ a distributed denial of service attack.' boşluğa hangisi gelmelidir?",
      options: ["due to", "in order to", "so that", "whereas"],
      correct: 0
    }
  },
  {
    id: 18,
    week: 3,
    day: 18,
    title: "Web Güvenliği & Kimlik Doğrulama Terimleri",
    grammarTopic: "OWASP Top 10 ve Güvenlik Terminolojisi",
    grammarExplanation: "Mülakatlarda güvenlik sorularını rahatça anlatmak için gerekli teknik sözcükler.",
    words: [
      { word: "vulnerability", type: "Noun", meaning: "Güvenlik açığı, zafiyet", sentence: "We patched an XSS vulnerability in the comment rendering logic." },
      { word: "data breach", type: "Noun", meaning: "Veri sızıntısı / ihlali", sentence: "Storing plain-text passwords leads to catastrophic data breaches." },
      { word: "tampering", type: "Noun", meaning: "Veri üzerinde yetkisiz oynama, tahrifat", sentence: "Cryptographic signatures prevent tampering with JWT payloads." },
      { word: "credentials", type: "Noun", meaning: "Kimlik bilgileri (kullanıcı adı, şifre, API anahtarı)", sentence: "Never commit your database credentials into version control." },
      { word: "handshake", type: "Noun", meaning: "El sıkışma (TLS/SSL protokol başlangıcı)", sentence: "The TLS handshake ensures an encrypted channel between client and server." },
      { word: "eavesdropping", type: "Noun", meaning: "Ağ trafiğini gizlice dinleme", sentence: "HTTPS prevents third parties from eavesdropping on confidential packets." },
      { word: "obfuscate", type: "Verb", meaning: "Kodu karartmak, anlaşılmaz hale getirmek", sentence: "Production builds minify and obfuscate client-side JavaScript." },
      { word: "revoke", type: "Verb", meaning: "İptal etmek, geri çekmek (token/erişim)", sentence: "When a user logs out, we revoke their refresh token in the database." },
      { word: "impersonate", type: "Verb", meaning: "Başkasının kimliğine bürünmek", sentence: "Session hijacking allows an attacker to impersonate an authentic user." },
      { word: "least privilege", type: "Security Principle", meaning: "En az yetki prensibi", sentence: "Database roles should always adhere to the principle of least privilege." }
    ],
    speakingDrill: "Güvenlik Mülakatı: 'We store access tokens in memory and refresh tokens in HttpOnly Secure cookies to prevent cross-site scripting tampering.'",
    quiz: {
      question: "Bir saldırganın kullanıcı oturumunu taklit etmesine ne denir?",
      options: ["Impersonate", "Obfuscate", "Revoke", "Sanitize"],
      correct: 0
    }
  },
  {
    id: 19,
    week: 3,
    day: 19,
    title: "Performans, Önbellek & Optimizasyon Terimleri",
    grammarTopic: "Lighthouse Metrikleri ve Web Hızı",
    grammarExplanation: "Mülakatçının 'Sitenin hızını nasıl artırdın?' sorusuna verilecek teknik terimler.",
    words: [
      { word: "benchmark", type: "Noun/Verb", meaning: "Kıyaslama testi yapmak / Başarı standardı", sentence: "We ran benchmarks to compare Node.js against Bun performance." },
      { word: "payload", type: "Noun", meaning: "Taşınan veri yükü (JSON gövdesi / paket)", sentence: "Compressing images reduced the total network payload by 80%." },
      { word: "cache invalidation", type: "Noun", meaning: "Eski önbelleği geçersiz kılıp tazeleme", sentence: "Cache invalidation is notoriously one of the hardest problems in software." },
      { word: "memory footprint", type: "Noun", meaning: "Bellekte kapladığı yer / ayak izi", sentence: "Go applications typically have a smaller memory footprint than Java." },
      { word: "stale data", type: "Noun", meaning: "Bayatlamış / güncelliğini yitirmiş veri", sentence: "TanStack Query serves stale data instantly while revalidating in background." },
      { word: "overhead", type: "Noun", meaning: "Ek yük, fazladan getirilen külfet", sentence: "Microservices introduce additional operational and network overhead." },
      { word: "burst traffic", type: "Noun", meaning: "Anlık aşırı trafik patlaması", sentence: "Our queue buffers burst traffic during product launch events." },
      { word: "rate-limiting", type: "Noun", meaning: "İstek hızını sınırlandırma", sentence: "Rate-limiting prevents abusive bots from exhausting server resources." },
      { word: "warm up", type: "Verb Phrase", meaning: "Önceden ısıtmak (sunucusuz/serverless soğuk başlangıcı önlemek)", sentence: "A scheduled ping warms up our AWS Lambda functions." },
      { word: "cold start", type: "Noun", meaning: "Sunucunun sıfırdan ilk ayağa kalkış gecikmesi", sentence: "Serverless functions sometimes suffer from a 500ms cold start latency." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'By utilizing stale-while-revalidate caching, we minimized database overhead while ensuring users never see stale data for long.'",
    quiz: {
      question: "Güncelliğini yitirmiş, eski önbellek verisine ne ad verilir?",
      options: ["Stale data", "Cold data", "Benchmark", "Payload"],
      correct: 0
    }
  },
  {
    id: 20,
    week: 3,
    day: 20,
    title: "Dayanıklılık ve Hata Toleransı (Fault Tolerance) Terimleri",
    grammarTopic: "Sistemin Çökmesini Engelleyen Dayanıklı Mimari",
    grammarExplanation: "Senior yazılımcı 'sistem asla çökmez' demez; 'çöküşü zarifçe karşılar (graceful degradation)' der.",
    words: [
      { word: "graceful degradation", type: "Concept", meaning: "Zarif gerileme (hata olsa da ana fonksiyonların çalışması)", sentence: "If payment gateways fail, the app allows saving carts for later." },
      { word: "self-healing", type: "Concept", meaning: "Kendi kendini onaran sistem", sentence: "Kubernetes provides self-healing by restarting unhealthy containers." },
      { word: "deadlock", type: "Noun", meaning: "Kilitlenme, iki işlemin birbirini beklemesi", sentence: "Improper database lock ordering can result in an unavoidable deadlock." },
      { word: "retry mechanism", type: "Concept", meaning: "Yeniden deneme mekanizması (Exponential backoff)", sentence: "We implemented an exponential backoff retry mechanism for failed webhooks." },
      { word: "circuit breaker", type: "Design Pattern", meaning: "Sigorta deseni (batan servise isteği kesme)", sentence: "The circuit breaker pattern stops calling a failing dependency." },
      { word: "silent failure", type: "Anti-pattern", meaning: "Hatanın sessizce yutulması (çok tehlikeli)", sentence: "Empty catch blocks cause silent failures that are impossible to diagnose." },
      { word: "idempotent", type: "Concept", meaning: "Aynı sonucu üreten (tekrar çağrılsa bile)", sentence: "Stripe requires webhook handlers to be strictly idempotent." },
      { word: "race condition", type: "Concurrency Bug", meaning: "Yarış durumu (iki işlemin sırayı karıştırması)", sentence: "Using database transactions prevents race conditions on user inventory." },
      { word: "single point of failure (SPOF)", type: "Architectural Flaw", meaning: "Tek bir noktanın çökmesiyle tüm sistemin çökmesi", sentence: "Having only one database instance created a dangerous single point of failure." },
      { word: "resilient", type: "Adjective", meaning: "Dirençli, darbelere dayanıklı", sentence: "Our architecture is resilient against temporary regional cloud outages." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'We eliminated our single point of failure by introducing multi-region database replicas and an automated circuit breaker.'",
    quiz: {
      question: "Tek bir bileşen çöktüğünde tüm sistemin durmasına yol açan mimari zafiyete ne denir?",
      options: ["Single point of failure (SPOF)", "Circuit breaker", "Graceful degradation", "Deadlock"],
      correct: 0
    }
  },
  {
    id: 21,
    week: 3,
    day: 21,
    title: "3. Hafta Değerlendirmesi: Profesyonel GitHub PR & README Yazımı",
    grammarTopic: "İngilizce Pull Request Açıklaması ve Commit Standardı",
    grammarExplanation: "Mülakatçılar koduna bakmadan önce GitHub açıklamalarını okur.",
    words: [
      { word: "Motivation / Rationale", type: "PR Section", meaning: "Bu değişikliği yapma gerekçesi", sentence: "Motivation: Fixes high memory usage observed in issue #42." },
      { word: "Key Changes", type: "PR Section", meaning: "Yapılan ana değişiklikler", sentence: "Key Changes: Replaced polling with WebSockets; added unit tests." },
      { word: "How to Test", type: "PR Section", meaning: "Nasıl test edilir?", sentence: "How to test: Run 'npm test' and inspect the browser network tab." },
      { word: "Breaking Change", type: "PR Warning", meaning: "Eski sürümleri bozan köklü değişiklik", sentence: "Breaking Change: Deprecated the legacy v1 auth endpoints." },
      { word: "Closes #123", type: "Git Keyword", meaning: "Bu PR merge edilince 123 numaralı issue'yu otomatik kapat", sentence: "Closes #104 by implementing the Redis cache layer." }
    ],
    speakingDrill: "Yazılı İletişim Pratiği: '### Description\nThis PR introduces rate-limiting to prevent brute-force attacks on /api/login.\n\n### How has this been tested?\n- Unit tests added in auth.test.ts\n- Manual verification using Postman with 20 concurrent requests.\n\nCloses #56.'",
    quiz: {
      question: "Bir Pull Request merge edildiğinde ilgili issue'yu otomatik kapatmak için GitHub'da ne yazılır?",
      options: ["Closes #123", "Deletes #123", "Ignores #123", "Replaces #123"],
      correct: 0
    }
  },

  // ================= HAFTA 4: TEKNİK MÜLAKAT İNGİLİZCESİ =================
  {
    id: 22,
    week: 4,
    day: 22,
    title: "Kendini Tanıtma (Tell Me About Yourself) Şablonu",
    grammarTopic: "Present Perfect & Eylem Cümleleri ile Etkileyici Giriş",
    grammarExplanation: "Mülakatın ilk 2 dakikasında 'I was born in...' değil, 'I am a Fullstack developer specialized in...' denir.",
    words: [
      { word: "I specialize in ...", type: "Template", meaning: "... alanında uzmanlaşıyorum", sentence: "I specialize in building scalable web applications with Next.js and Node.js." },
      { word: "My core stack revolves around ...", type: "Template", meaning: "Ana teknolojilerim ... etrafında toplanıyor", sentence: "My core stack revolves around TypeScript, React, PostgreSQL, and Docker." },
      { word: "I have a strong passion for ...", type: "Template", meaning: "... konusunda büyük bir tutkum var", sentence: "I have a strong passion for clean architecture and web performance." },
      { word: "Over the past months, I have built ...", type: "Template", meaning: "Son aylarda ... inşa ettim", sentence: "Over the past months, I have built end-to-end fullstack SaaS applications." },
      { word: "What excites me about this role is ...", type: "Template", meaning: "Bu rolde beni heyecanlandıran şey ...", sentence: "What excites me about this role is your team's commitment to high engineering standards." }
    ],
    speakingDrill: "Ezberlenecek 90 Saniyelik Giriş: 'Hi! I am a Fullstack developer primarily focused on the TypeScript ecosystem. My core stack includes Next.js, React, Node.js, and PostgreSQL with Prisma. Over the past few months, I have focused heavily on mastering under-the-hood concepts like the JavaScript Event Loop, relational database query optimization, and resilient system design. I love building products that are fast, accessible, and clean. I am excited to contribute to your engineering culture.'",
    quiz: {
      question: "'Ana çalışma teknolojilerim TypeScript ve React etrafında şekilleniyor' nasıl denir?",
      options: ["My core stack revolves around TypeScript and React.", "My computer runs TypeScript and React.", "I am knowing TypeScript and React.", "TypeScript and React is my favourite."],
      correct: 0
    }
  },
  {
    id: 23,
    week: 4,
    day: 23,
    title: "Mimari Kararları ve Tercihleri (Trade-offs) Savunma",
    grammarTopic: "Karşılaştırma Cümleleri ve Neden Başka Bir Teknolojiyi Seçtiğini Anlatma",
    grammarExplanation: "Kıdemli mülakatında 'Neden MongoDB değil PostgreSQL seçtin?' sorusuna verilen cevap.",
    words: [
      { word: "The primary reason was ...", type: "Reasoning", meaning: "En temel sebep ... idi", sentence: "The primary reason was the strong ACID guarantees required for payments." },
      { word: "Compared to ..., it offers ...", type: "Comparison", meaning: "... ile kıyaslandığında, ... sunuyor", sentence: "Compared to Pages Router, App Router offers seamless server component streaming." },
      { word: "We opted for ... because ...", type: "Choice", meaning: "...'ı tercih ettik çünkü ...", sentence: "We opted for Zustand because it avoids the redundant boilerplate of Redux." },
      { word: "At the expense of ...", type: "Trade-off", meaning: "... pahasına, ...'dan fedakarlık ederek", sentence: "We achieved faster build times at the expense of slightly larger bundles." },
      { word: "It strikes the right balance between ...", type: "Balance", meaning: "... arasında doğru dengeyi kuruyor", sentence: "This architecture strikes the right balance between developer velocity and runtime speed." }
    ],
    speakingDrill: "Mülakat Cevabı: 'When designing the database, we opted for PostgreSQL instead of MongoDB because our business domain required strict relational integrity and complex joins.'",
    quiz: {
      question: "'Bir şeyin yerine diğerini tercih ettik' anlamında hangi kalıp kullanılır?",
      options: ["We opted for X over Y", "We dropped X to Y", "We broke X into Y", "We tied X with Y"],
      correct: 0
    }
  },
  {
    id: 24,
    week: 4,
    day: 24,
    title: "STAR Metodu ile Kriz Anlatımı (Behavioral Questions)",
    grammarTopic: "Situation (Durum) -> Task (Görev) -> Action (Eylem) -> Result (Sonuç)",
    grammarExplanation: "'En zorlandığın teknik problemi anlat' sorusunun küresel standart cevabı.",
    words: [
      { word: "Situation: We were experiencing ...", type: "STAR", meaning: "Durum: ... yaşıyorduk", sentence: "Situation: Our API was experiencing high latency during peak morning traffic." },
      { word: "Task: My responsibility was to ...", type: "STAR", meaning: "Görev: Benim sorumluluğum ... idi", sentence: "Task: My goal was to identify the bottleneck and bring response times under 200ms." },
      { word: "Action: To tackle this, I ...", type: "STAR", meaning: "Eylem: Bunu çözmek için ben ... yaptım", sentence: "Action: I analyzed the queries using EXPLAIN ANALYZE and added targeted B-Tree indexes." },
      { word: "Result: As a result, we achieved ...", type: "STAR", meaning: "Sonuç: Sonuç olarak ... başardık", sentence: "Result: Query times dropped by 85%, eliminating server timeouts completely." },
      { word: "Looking back, what I learned was ...", type: "STAR Reflection", meaning: "Geriye dönüp baktığımda öğrendiğim şey ...", sentence: "Looking back, what I learned was the massive importance of indexing early." }
    ],
    speakingDrill: "STAR Hikayesi Pratiği: 'Situation: We had a memory leak in our WebSocket server.\nTask: I was tasked with diagnosing the cause.\nAction: I took heap snapshots in Chrome DevTools and found orphaned event listeners.\nResult: Memory usage stabilized, dropping server restarts from daily to zero.'",
    quiz: {
      question: "STAR metodunun 'A' harfi neyi temsil eder?",
      options: ["Action (Attığın somut adımlar)", "Answer (Cevabın)", "Architecture (Mimari)", "Application (Uygulama)"],
      correct: 0
    }
  },
  {
    id: 25,
    week: 4,
    day: 25,
    title: "Mülakatın Sonunda Senin Soracağın Sorular",
    grammarTopic: "Mülakatçıya Karşı Tarafı Etkileyecek Sorular Sorma Sanatı",
    grammarExplanation: "'Any questions for us?' dendiğinde 'No' diyen elenir. Akıllıca sorular soran teklif alır.",
    words: [
      { word: "What does the typical deployment workflow look like?", type: "Question", meaning: "Tipik bir canlıya alma iş akışınız nasıl işliyor?", sentence: "What does the typical deployment workflow look like here?" },
      { word: "How does the engineering team handle technical debt?", type: "Question", meaning: "Mühendislik ekibi teknik borcu nasıl yönetiyor?", sentence: "How does the team balance shipping new features with resolving tech debt?" },
      { word: "What are the biggest technical challenges the team is facing?", type: "Question", meaning: "Ekibin şu an karşılaştığı en büyük teknik zorluklar neler?", sentence: "What are the biggest architectural challenges you are working on currently?" },
      { word: "How do you evaluate success for someone in this position?", type: "Question", meaning: "Bu pozisyondaki birinin başarısını ilk 90 günde nasıl ölçüyorsunuz?", sentence: "How do you evaluate success in the first three months?" },
      { word: "What opportunities exist for mentorship and growth?", type: "Question", meaning: "Mentorluk ve kişisel gelişim için ne gibi fırsatlar var?", sentence: "How do senior engineers share knowledge across the team?" }
    ],
    speakingDrill: "Kapanış Pratiği: 'Thank you for your time today. Before we wrap up, I'd love to ask: how does the team approach code reviews and automated testing across pull requests?'",
    quiz: {
      question: "Mülakatçının 'Bize sorun var mı?' sorusuna en iyi yanıt:",
      options: ["Yes, I have a couple of questions about your engineering workflow.", "No, everything was clear, thanks.", "How much salary do you pay?", "When will you hire me?"],
      correct: 0
    }
  },
  {
    id: 26,
    week: 4,
    day: 26,
    title: "Canlı Kodlama (Live Coding) Sesli Düşünme Kalıpları",
    grammarTopic: "Think Out Loud (Sesli Düşünme) İngilizcesi",
    grammarExplanation: "Canlı kodlamada sessiz kalırsan elenirsin. Adım adım ne yaptığını anlatmalısın.",
    words: [
      { word: "First, let me clarify the requirements ...", type: "Live Coding", meaning: "Önce gereksinimleri netleştireyim ...", sentence: "First, let me clarify: can the input array contain negative numbers?" },
      { word: "A brute-force approach would be ..., but ...", type: "Live Coding", meaning: "Kaba kuvvet çözümü ... olurdu ama ...", sentence: "A brute-force approach would be O(n^2), but we can optimize this to O(n)." },
      { word: "The edge cases we should consider are ...", type: "Live Coding", meaning: "Dikkate almamız gereken uç durumlar şunlardır ...", sentence: "The edge cases are empty strings and null inputs." },
      { word: "I'm going to iterate through the list and ...", type: "Live Coding", meaning: "Listenin üzerinde dönüp ... yapacağım", sentence: "I'm going to iterate through the array and store visited elements in a Set." },
      { word: "Let's test this with an example input:", type: "Live Coding", meaning: "Bunu bir örnek girdi ile test edelim:", sentence: "Let's trace this line by line with input [2, 7, 11, 15]." }
    ],
    speakingDrill: "Canlı Kodlama Açılışı: 'Before writing any code, let me make sure I understand the problem correctly. We are given an array of numbers, and we need to find two indices that sum up to the target. Is that correct?'",
    quiz: {
      question: "Canlı kodlamaya başlarken ilk söylenmesi gereken en profesyonel cümle:",
      options: ["Let me clarify the requirements and outline my approach first.", "I have no idea how to do this.", "Give me 10 minutes of complete silence.", "Can I copy from StackOverflow?"],
      correct: 0
    }
  },
  {
    id: 27,
    week: 4,
    day: 27,
    title: "Yazılımcı Jargonu & Günlük Deyimler (Tech Slang)",
    grammarTopic: "Yabancı Takımlarda Her Gün Duyacağın 10 Deyim",
    grammarExplanation: "Bu kelimeleri bilmek seni 'yabancı takımlarda çalışmış' gibi gösterir.",
    words: [
      { word: "bikeshedding", type: "Tech Slang", meaning: "Önemsiz detaylar üzerinde gereksiz saatlerce tartışmak", sentence: "Let's stop bikeshedding on button colors and focus on the database schema." },
      { word: "silver bullet", type: "Idiom", meaning: "Her sorunu çözen sihirli değnek (yazılımda yoktur)", sentence: "Microservices are not a silver bullet; they bring their own complexity." },
      { word: "eat our own dog food (dogfooding)", type: "Tech Slang", meaning: "Kendi ürettiğin yazılımı kendi şirketinde kullanmak", sentence: "We are dogfooding our new chat feature before releasing it publicly." },
      { word: "sanity check", type: "Tech Slang", meaning: "Mantık / akıl sağlığı kontrolü (hızlı test)", sentence: "Let's run a quick sanity check before deploying to production." },
      { word: "out of band", type: "Tech Slang", meaning: "Ana akışın dışında, harici bir kanaldan", sentence: "Let's discuss this credential issue out of band in a direct message." },
      { word: "rubber ducking", type: "Tech Slang", meaning: "Bir nesneye/ördeğe anlatarak hatayı kendi kendine çözme", sentence: "Explaining the bug out loud to a rubber duck helped me find the typo." },
      { word: "spaghetti code", type: "Tech Slang", meaning: "İç içe geçmiş, okunaksız dağınık kod", sentence: "Refactoring eliminated the spaghetti code in the legacy controller." },
      { word: "happy path", type: "Testing Term", meaning: "Hiçbir hatanın olmadığı ideal senaryo", sentence: "Make sure to test edge cases, not just the happy path." },
      { word: "yak shaving", type: "Idiom", meaning: "Asıl işe başlamak için ardı ardına çıkan gereksiz yan işlerle uğraşmak", sentence: "I spent three hours yak shaving just to update one dependency." },
      { word: "technical debt", type: "Core Concept", meaning: "Gelecekte faiz ödetecek aceleci kod kararları", sentence: "Skipping unit tests now will accumulate severe technical debt later." }
    ],
    speakingDrill: "Mülakat Cümlesi: 'I don't believe in silver bullets in software engineering; every architecture choice comes down to evaluating trade-offs.'",
    quiz: {
      question: "'Her derde deva sihirli çözüm' anlamına gelen meşhur yazılım deyimi:",
      options: ["Silver bullet", "Bikeshedding", "Yak shaving", "Dogfooding"],
      correct: 0
    }
  },
  {
    id: 28,
    week: 4,
    day: 28,
    title: "Mock Interview 1: Davranışsal ve Kültürel Mülakat Provası",
    grammarTopic: "En Çok Sorulan 3 Davranışsal Soru ve Örnek Cevaplar",
    grammarExplanation: "Bu 3 soruyu sesli olarak tekrarla.",
    words: [
      { word: "How do you handle disagreement with a teammate?", type: "Interview Q", meaning: "Takım arkadaşınla fikir ayrılığına düşersen ne yaparsın?", sentence: "Answer: 'I focus on objective data and user impact rather than personal opinions. We can benchmark both approaches or run an A/B test.'" },
      { word: "What is your greatest technical weakness?", type: "Interview Q", meaning: "En büyük teknik zayıflığın nedir?", sentence: "Answer: 'Earlier in my journey, I used to over-engineer solutions. Now, I strictly practice YAGNI (You Aren't Gonna Need It) and focus on MVP simplicity first.'" },
      { word: "Where do you see yourself in 3 years?", type: "Interview Q", meaning: "3 yıl sonra kendini nerede görüyorsun?", sentence: "Answer: 'I see myself taking ownership of core system architectures, mentoring junior developers, and contributing to technical strategy.'" }
    ],
    speakingDrill: "Sesli Oku: 'When a teammate and I disagree on architecture, I look at trade-offs objectively: readability, scalability, and delivery speed. We document the options in an RFC and let the team decide collaboratively.'",
    quiz: {
      question: "'En büyük zayıflığın nedir?' sorusuna en iyi yaklaşım:",
      options: ["Geçmişte yaşadığın gerçek bir eksiği ve onu aşmak için nasıl çalıştığını anlatmak", "'Hiç zayıflığım yok, mükemmelim' demek", "Kişisel kusurlarını sayıp dökmek", "Sessiz kalmak"],
      correct: 0
    }
  },
  {
    id: 29,
    week: 4,
    day: 29,
    title: "Mock Interview 2: Teknik Sistem Tasarımı ve Derin Mülakat Provası",
    grammarTopic: "Event Loop, REST vs GraphQL ve Veritabanı Sorularını İngilizce Cevaplama",
    grammarExplanation: "Teknik bilgin var, şimdi onu İngilizce akıcı cümlelerle ifade etme zamanı.",
    words: [
      { word: "Can you explain the Event Loop?", type: "Tech Q", meaning: "Event Loop'u açıklar mısınız?", sentence: "Answer: 'JavaScript is single-threaded. The Event Loop continuously checks if the Call Stack is empty. Once empty, it first exhausts the Microtask Queue, like resolved Promises, then dequeues tasks from the Macrotask Queue, such as setTimeout callbacks.'" },
      { word: "How do you handle the N+1 query problem?", type: "Tech Q", meaning: "N+1 sorgu problemini nasıl çözersiniz?", sentence: "Answer: 'The N+1 problem occurs when querying parent records triggers individual queries for each child relation. We resolve it by eager loading relations using SQL JOINs or Prisma `include` clauses to fetch everything in a single trip.'" },
      { word: "Why should we avoid storing JWTs in LocalStorage?", type: "Tech Q", meaning: "JWT'yi neden LocalStorage'a kaydetmemeliyiz?", sentence: "Answer: 'Because any cross-site scripting (XSS) vulnerability allows malicious scripts to access window.localStorage and steal credentials. Storing tokens in HttpOnly, Secure cookies protects them completely from JavaScript access.'" }
    ],
    speakingDrill: "Event Loop Telaffuz Pratiği: 'The event loop prioritizes microtasks over macrotasks. This ensures promise handlers run immediately before the next timer or I/O callback.'",
    quiz: {
      question: "'Microtask' kuyruğu hangi asenkron yapıları barındırır?",
      options: ["Promises and queueMicrotask", "setTimeout and setInterval", "DOM clicks only", "File system reads only"],
      correct: 0
    }
  },
  {
    id: 30,
    week: 4,
    day: 30,
    title: "BÜYÜK MEZUNİYET: 30 Günlük İngilizce Alışkanlığı & Mülakat Zaferi",
    grammarTopic: "Hayat Boyu İngilizce Akıcılığı Rutini",
    grammarExplanation: "30 günde 300+ kelime, tüm fiilimsiler, deyimler ve mülakat kalıplarını öğrendin!",
    words: [
      { word: "accomplishment", type: "Noun", meaning: "Büyük başarı, kazanım", sentence: "Completing this 30-day intensive curriculum is a major accomplishment!" },
      { word: "fluent", type: "Adjective", meaning: "Akıcı, rahat konuşan", sentence: "You now possess the technical fluency required for international remote roles." },
      { word: "confidence", type: "Noun", meaning: "Özgüven", sentence: "Speak with confidence; clear communication matters more than a perfect accent." },
      { word: "continuous improvement", type: "Principle", meaning: "Sürekli gelişim (Kaizen)", sentence: "Software engineering and language learning are lifelong journeys of continuous improvement." }
    ],
    speakingDrill: "Mezuniyet Konuşması: 'I have dedicated the past 30 days to sharpening both my software development and technical English skills. I am ready to collaborate with global teams, contribute to open-source projects, and ace international technical interviews!'",
    quiz: {
      question: "Tebrikler! 30 günlük İngilizce kampını bitirdin. Şimdi ne yapacaksın?",
      options: ["İngilizce doküman okumaya, sesli pratik yapmaya ve mülakatlara başvurmaya devam edeceğim!", "Hepsini unutacağım.", "Bir daha İngilizce konuşmayacağım.", "Hiçbiri"],
      correct: 0
    }
  }
];

// Complete Gerund & Infinitive Detailed Guide Data
const GERUND_INFINITIVE_GUIDE = [
  {
    category: "Sadece Gerund (-ing) Alan Kritik Fiiller",
    verbs: ["avoid (kaçınmak)", "consider (düşünmek)", "suggest (önermek)", "finish (bitirmek)", "keep (devam etmek)", "delay (ertelemek)", "mind (sakıncası olmak)", "practice (pratik yapmak)", "risk (riske atmak)", "enjoy (keyif almak)"],
    example: "We should AVOID MUTATING the state directly. / I FINISHED TESTING the endpoints.",
    rule: "Bu fiillerden sonra ASLA 'to + fiil' gelmez. Her zaman fiilin '-ing' hali gelir."
  },
  {
    category: "Sadece Infinitive (to + verb) Alan Kritik Fiiller",
    verbs: ["decide (karar vermek)", "manage (başarmak)", "allow (izin vermek)", "refuse (reddetmek)", "hesitate (çekinmek)", "tend (eğiliminde olmak)", "attempt (teşebbüs etmek)", "enable (sağlamak)", "promise (söz vermek)", "afford (maddi/manevi yetmek)"],
    example: "We DECIDED TO MIGRATE to TypeScript. / Git ENABLES teams TO COLLABORATE.",
    rule: "Bu fiillerden sonra eylem her zaman 'to + mastar' ile bağlanır."
  },
  {
    category: "Anlamı 180 Derece Değişen Fiiller (Mülakat Tuzağı!)",
    verbs: ["stop doing (bırakmak) VS stop to do (yapmak için durmak)", "try doing (deneyip görmek) VS try to do (çabalamak)", "remember doing (yaptığını hatırlamak) VS remember to do (yapmayı unutmamak)", "forget doing (yaptığını unutmak) VS forget to do (yapmayı unutmak)"],
    example: "1. 'Stop using var!' (var kullanmayı bırak!).\n2. 'I stopped to drink coffee.' (Kahve içmek için mola verdim/durdum).\n3. 'Remember to close DB connections.' (DB bağlantılarını kapatmayı unutma!).",
    rule: "Geçmişe veya yapılan eyleme işaret ediyorsa Gerund (-ing); gelecekteki amaca veya göreve işaret ediyorsa Infinitive (to)."
  },
  {
    category: "Edatlardan (Prepositions) Sonra Her Zaman Gerund Gelir!",
    verbs: ["interested in doing", "good at doing", "responsible for doing", "look forward to doing", "instead of doing", "before / after doing", "without doing", "by doing"],
    example: "We optimized the database BY ADDING indexes. / INSTEAD OF POLLING, we use WebSockets. / I am responsible FOR MAINTAINING this service.",
    rule: "İngilizcede edatlardan (in, on, at, for, by, without, instead of, of, about) sonra bir fiil gelirse %100 '-ing' eki alır."
  }
];

if (typeof window !== 'undefined') {
  window.DEV5MONTHS_ENGLISH = { ENGLISH_DAYS, GERUND_INFINITIVE_GUIDE };
}
if (typeof globalThis !== 'undefined') {
  globalThis.DEV5MONTHS_ENGLISH = { ENGLISH_DAYS, GERUND_INFINITIVE_GUIDE };
}
})();
