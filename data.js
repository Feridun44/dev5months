// 5 Aylık Fullstack Geliştirici Yol Haritası ve Eğitim Veritabanı
// 150 Günlük Detaylı Müfredat, Senior Taktikleri, Mülakat Soruları
(function() {
const MONTHS = [
  {
    id: 1,
    title: "1. Ay: JavaScript Core, ES6+, DOM & Mühendislik Temelleri",
    subtitle: "Temelleri sıradan bir kursiyer gibi değil, dilin motorunu (V8 & Event Loop) anlayarak öğrenme.",
    badge: "JavaScript Ninja",
    color: "from-amber-500 to-yellow-400",
    daysCount: 30
  },
  {
    id: 2,
    title: "2. Ay: TypeScript, Modern React & UI Mühendisliği",
    subtitle: "React'i kütüphane gibi değil, bileşen mimarisi ve type-safety ile profesyonel seviyede yazma.",
    badge: "Frontend Architect",
    color: "from-blue-500 to-cyan-400",
    daysCount: 30
  },
  {
    id: 3,
    title: "3. Ay: Next.js (App Router), Fullstack React & Modern State",
    subtitle: "SSR, SSG, Server Actions, Zustand ve TanStack Query ile endüstri standardı web mimarisi.",
    badge: "Next.js Master",
    color: "from-emerald-500 to-teal-400",
    daysCount: 30
  },
  {
    id: 4,
    title: "4. Ay: Production Backend, PostgreSQL, Prisma & Güvenlik",
    subtitle: "Node.js/Express, REST API, JWT/OAuth, İlişkisel Veritabanları ve Güvenlik (OWASP).",
    badge: "Backend Beast",
    color: "from-purple-500 to-indigo-400",
    daysCount: 30
  },
  {
    id: 5,
    title: "5. Ay: Capstone Fullstack SaaS, System Design & Mülakat Kampı",
    subtitle: "Canlıya alma (CI/CD, Docker), Test (Vitest/Playwright), Sistem Tasarımı ve Mülakat Teknikleri.",
    badge: "Job Ready Senior Mindset",
    color: "from-rose-500 to-pink-400",
    daysCount: 30
  }
];

const ROADMAP_DAYS = [
  // ================= AY 1 =================
  {
    id: 1,
    month: 1,
    week: 1,
    day: 1,
    title: "JavaScript'e Giriş, let vs const, Veri Tipleri",
    summary: "Neden 'var' öldü? Primitive vs Reference tipler bellekte (Stack vs Heap) nasıl saklanır?",
    tasks: [
      "let, const ve var arasındaki Scope farklarını (Block scope vs Function scope) araştır.",
      "Primitive tipleri (string, number, boolean, null, undefined, symbol, bigint) konsolda test et.",
      "Stack ve Heap bellek mantığını çizerek öğren (Primitive değer kopyalama vs Obje referans kopyalama)."
    ],
    seniorTip: "2 senelik juniorların en çok düştüğü hata: 'const obje = {}' yapınca objenin içindeki değerlerin değişmeyeceğini sanırlar. const değişkenin referansını kilitler, içindeki değerleri dondurmaz (Object.freeze gerekir).",
    interviewQuestion: "Primitive ve Reference tipler arasındaki fark nedir? Pass-by-value vs Pass-by-reference JS'de nasıl çalışır?"
  },
  {
    id: 2,
    month: 1,
    week: 1,
    day: 2,
    title: "Tip Dönüşümleri (Type Coercion) & Eşitlik Mantığı",
    summary: "== ile === arasındaki motor farkı ve 'falsy' değerlerin matematiği.",
    tasks: [
      "Falsy değerleri ezberle: false, 0, '', null, undefined, NaN.",
      "[] == ![] neden true döner? JS Tip Dönüşüm mekanizmasını (ToPrimitive) analiz et.",
      "Ternary operator ve Nullish Coalescing (??) ile Logical OR (||) farkını kodla."
    ],
    seniorTip: "Kodlarında asla '==' kullanma. Her zaman '===' kullan. Varsayılan değer atarken '||' yerine '??' tercih et çünkü 0 veya false geçerli bir veri olabilir.",
    interviewQuestion: "'==' ile '===' arasındaki fark nedir? JS tip dönüşümünü nasıl yönetir?"
  },
  {
    id: 3,
    month: 1,
    week: 1,
    day: 3,
    title: "Fonksiyonlar: Declaration, Expression & Arrow Functions",
    summary: "Fonksiyon mimarisi, 'this' bağlamı ve Arrow fonksiyonların sınırları.",
    tasks: [
      "Function declaration ile Function expression arasındaki hoisting farkını gör.",
      "Arrow fonksiyonların kendi 'this', 'arguments' ve 'super' nesnelerine sahip olmadığını anla.",
      "Default parametreler ve Rest parametreleri (...args) ile pratik yap."
    ],
    seniorTip: "Bir obje metodunda arrow function kullanırsan 'this' pencereye (window/global) bakar ve bug çıkar. Metotlarda normal fonksiyon veya shorthand sözdizimi kullan.",
    interviewQuestion: "Arrow function ile normal function arasındaki en temel 3 fark nedir?"
  },
  {
    id: 4,
    month: 1,
    week: 1,
    day: 4,
    title: "Dizi Metotları - Bölüm 1: map, filter, forEach",
    summary: "Modern frontend kodunun %60'ı dizilerdir. Mutasyon yapmadan veri işleme felsefesi.",
    tasks: [
      "forEach vs map farkını derinlemesine incele (dönen değer ve immutability).",
      "Bir kullanıcı listesi oluştur; sadece aktif olanları filter ile ayıkla, isimlerini map ile büyüt.",
      "Zincirleme (Method Chaining) yapısı ile 3 ardışık dizi işlemi yap."
    ],
    seniorTip: "map kullanıyorsan mutlaka yeni bir dizi döndürmelisin. Yan etki (side effect) için map değil forEach kullan. React'te immutability için bu metotlar hayati önemdedir.",
    interviewQuestion: "forEach ile map arasındaki fark nedir? Hangisi ne zaman tercih edilmelidir?"
  },
  {
    id: 5,
    month: 1,
    week: 1,
    day: 5,
    title: "Dizi Metotları - Bölüm 2: reduce, find, some, every",
    summary: "Tek satırda karmaşık veri manipülasyonu ve reduce ile gruplama.",
    tasks: [
      "reduce ile bir sepet tutarı hesaplama algoritması yaz.",
      "reduce kullanarak bir dizi nesneyi kategoriye göre grupla (group by).",
      "find, findIndex, some ve every metotlarının early-exit (erken çıkış) davranışını test et."
    ],
    seniorTip: "Senior yazılımcılar karmaşık for döngüleri yerine reduce ve deklaratif metotlar yazar. Ancak gereksiz yere karmaşık reduce yazmak okunabilirliği öldürür, dengeyi koru.",
    interviewQuestion: "Array.prototype.reduce nasıl çalışır? Bir diziyi id'lere göre key-value objesine nasıl dönüştürürsün?"
  },
  {
    id: 6,
    month: 1,
    week: 1,
    day: 6,
    title: "Nesneler (Objects), Destructuring & Spread/Rest",
    summary: "Modern JavaScript'in kalbi: Nesne manipülasyonu ve Shallow vs Deep Copy.",
    tasks: [
      "Object destructuring ile varsayılan değerler ve yeniden adlandırma (alias) uygula.",
      "Spread (...) operatörü ile nesneleri birleştir ve shallow copy sınırlarını (iç içe objeler) gör.",
      "structuredClone() ve JSON.parse(JSON.stringify()) ile Deep Copy farklarını test et."
    ],
    seniorTip: "İç içe bir objeyi {...obj} ile kopyalarsan alt nesneler referans kalır. 2 yıllık yazılımcıların state buglarının yarısı bu shallow copy yüzündendir.",
    interviewQuestion: "Shallow Copy ile Deep Copy arasındaki fark nedir? structuredClone() ne işe yarar?"
  },
  {
    id: 7,
    month: 1,
    week: 1,
    day: 7,
    title: "Haftalık Proje: Terminal / Konsol Tabanlı Kütüphane Sistemi",
    summary: "1. haftanın tüm kazanımlarını konsolda CRUD mantığıyla birleştiren mini sistem.",
    tasks: [
      "Kitap ekleme, silme, ödünç alma, kategoriye göre filtreleme yapan BookStore sınıfı/fonksiyonu yaz.",
      "Tüm listelemeleri map, filter ve reduce ile yap.",
      "Kodunu GitHub'a pushla ve ilk anlamlı commit geçmişini oluştur."
    ],
    seniorTip: "GitHub profilin bugünden itibaren her gün yeşillenecek. Mülakatçı koda bakmadan önce commit geçmişine bakar: 'fix: bug' yerine 'feat(store): add book borrowing logic with validation' yaz.",
    interviewQuestion: "Conventional Commits nedir? feat, fix, chore, refactor ne anlama gelir?"
  },

  // HAFTA 2
  {
    id: 8,
    month: 1,
    week: 2,
    day: 8,
    title: "Scope, Execution Context & Call Stack",
    summary: "JS motorunun beyni: Global Context, Function Context ve Call Stack taşması (Stack Overflow).",
    tasks: [
      "Call Stack simülasyonunu tarayıcı Developer Tools (Sources / Breakpoint) sekmesinde adım adım izle.",
      "Lexical Scope mantığını ve iç içe fonksiyonların dış değişkenlere erişimini test et.",
      "Rekürsif bir fonksiyon yazarak 'Maximum call stack size exceeded' hatasını kasıtlı olarak üret."
    ],
    seniorTip: "Debugger kullanmayı bilmeyen yazılımcı console.log ile ömrünü tüketir. Sources sekmesinde breakpoint koymayı ve Call Stack incelemeyi alışkanlık edin.",
    interviewQuestion: "Execution Context nedir? Creation phase ve Execution phase aşamalarında ne gerçekleşir?"
  },
  {
    id: 9,
    month: 1,
    week: 2,
    day: 9,
    title: "Hoisting & Temporal Dead Zone (TDZ)",
    summary: "Değişkenler ve fonksiyonlar nasıl yukarı çekilir, let/const neden TDZ'ye düşer?",
    tasks: [
      "var hoisting ile let/const hoisting arasındaki davranış farkını gör.",
      "Fonksiyon bildirimleri (declaration) ile fonksiyon ifadeleri (expression) hoisting farkını test et.",
      "TDZ sırasında bir değişkene erişmeye çalışınca çıkan ReferenceError'ı gözlemle."
    ],
    seniorTip: "Senior mülakatlarında en çok sorulan trick sorulardan biridir. 'let ve const hoist edilmez' demek yanlıştır! Hoist edilirler ama TDZ içinde oldukları için erişilemezler.",
    interviewQuestion: "Temporal Dead Zone (TDZ) nedir? let ve const hoist edilir mi?"
  },
  {
    id: 10,
    month: 1,
    week: 2,
    day: 10,
    title: "Closures (Kapanışlar) - Senior Seviye Kavrama",
    summary: "JavaScript'in en güçlü ve en çok mülakat sorusu üreten konusu: Fonksiyon hafızası.",
    tasks: [
      "Bir fonksiyonun başka bir fonksiyon döndürdüğü ve dış değişkene eriştiği sayaç (counter) yaz.",
      "Private değişkenler ve veri gizleme (encapsulation) için closure pattern uygula.",
      "Döngü içinde setTimeout çalıştırırken klasik var i vs let i closure problemini çöz."
    ],
    seniorTip: "React'teki useState hook'unun arka planı %100 closure'dur! Closure'ı anlamayan bir yazılımcı React state stale (bayat veri) hatalarını asla çözemez.",
    interviewQuestion: "Closure nedir? Gerçek hayatta hangi tasarım desenlerinde ve neden kullanılır?"
  },
  {
    id: 11,
    month: 1,
    week: 2,
    day: 11,
    title: "Prototypes & Prototypal Inheritance",
    summary: "JavaScript'te Class diye bir şey yoktur, sadece Prototype vardır!",
    tasks: [
      "__proto__ ve prototype arasındaki farkı incele.",
      "Bir objenin miras zincirini (Prototype Chain) Object.getPrototypeOf ile köke (null) kadar takip et.",
      "Class sözdiziminin arka planda prototype üzerinde syntactic sugar olduğunu gör."
    ],
    seniorTip: "Java/C# bilenler JS'deki class'ları görünce aynı sanır. JS prototip tabanlıdır; nesneler sınıflardan değil doğrudan diğer nesnelerden miras alır.",
    interviewQuestion: "JavaScript'te prototypal inheritance nasıl çalışır? Prototype chain sonu nereye çıkar?"
  },
  {
    id: 12,
    month: 1,
    week: 2,
    day: 12,
    title: "'this' Anahtar Kelimesi & call, apply, bind",
    summary: "'this' fonksiyonun tanımlandığı yere değil, çağrıldığı yere (call-site) bağlıdır.",
    tasks: [
      "Global context, nesne metodu, event handler ve standalone fonksiyonda 'this'in neye işaret ettiğini logla.",
      "call() ve apply() ile bir fonksiyona bağlam (context) ve argüman geçirerek çalıştır.",
      "bind() kullanarak fonksiyon bağlamını kalıcı olarak sabitle (hard binding)."
    ],
    seniorTip: "Mülakatçılar 'this' konusunu adayı elemeyi garanti görmek için sorar. 4 kuralı bil: 1. Default (window/undefined), 2. Implicit (obj.fn()), 3. Explicit (call/apply/bind), 4. new bağlamı.",
    interviewQuestion: "call, apply ve bind arasındaki farklar nelerdir? 'this' bağlamını nasıl değiştirirler?"
  },
  {
    id: 13,
    month: 1,
    week: 2,
    day: 13,
    title: "DOM Manipülasyonu & Event Delegation",
    summary: "Sayfayı canlı kılma: querySelector, classList, Event Bubbling ve Capturing.",
    tasks: [
      "querySelector ve querySelectorAll ile eleman seçme performansı pratikleri yap.",
      "Event Bubbling ve Capturing fazlarını (stopPropagation) test et.",
      "100 tane buton için 100 event listener eklemek yerine üst elemana tek bir Event Delegation listener'ı kur."
    ],
    seniorTip: "Her butona tek tek addEventListener ekleyen yazılımcı bellek sızıntısına (memory leak) yol açar. Profesyoneller her zaman Event Delegation kullanır.",
    interviewQuestion: "Event Bubbling ve Event Delegation nedir? Performansa katkısı nedir?"
  },
  {
    id: 14,
    month: 1,
    week: 2,
    day: 14,
    title: "Haftalık Proje: Dinamik Görev & Filtreleme Uygulaması (Vanilla JS)",
    summary: "DOM, Event Delegation, LocalStorage ve temiz mimari ile responsive yapılacaklar listesi.",
    tasks: [
      "Sıfırdan HTML/CSS/JS ile To-Do uygulaması kodla (Ekle, Sil, Tamamla, Filtrele, Arama).",
      "Tüm veriyi LocalStorage'da JSON formatında senkronize et.",
      "Event delegation ile tek bir container üzerinden buton tıklamalarını yönet."
    ],
    seniorTip: "Kodunu tek bir dev fonksiyonda yazma. Modüllere ayır: renderList(), addTask(), deleteTask(), saveToStorage(). Temiz kod (Clean Code) burada başlar.",
    interviewQuestion: "LocalStorage, SessionStorage ve Cookie arasındaki boyut ve güvenlik farkları nelerdir?"
  },

  // HAFTA 3
  {
    id: 15,
    month: 1,
    week: 3,
    day: 15,
    title: "Asenkron JavaScript Temelleri & Callbacks",
    summary: "Senkron tek kanallı (single-threaded) dilde asenkronluk nasıl mümkün oluyor?",
    tasks: [
      "setTimeout ve setInterval'in asenkron çalışma mantığını gör.",
      "Callback fonksiyonları ile asenkron veri akışını simüle et.",
      "Callback Hell (Pyramid of Doom) yapısını gör ve kodun neden okunamaz hale geldiğini anla."
    ],
    seniorTip: "JavaScript tek iş parçacıklı (single-threaded) bir dildir. Asenkron işlemleri yapan JS motoru değil, tarayıcının Web API'leri veya Node.js'in libuv kütüphanesidir.",
    interviewQuestion: "JavaScript single-threaded olmasına rağmen asenkron işlemleri nasıl bloklamadan yürütür?"
  },
  {
    id: 16,
    month: 1,
    week: 3,
    day: 16,
    title: "Promises Mimarisi: Pending, Fulfilled, Rejected",
    summary: "Callback cehenneminden kurtuluş: Promise yaşam döngüsü ve zincirleme.",
    tasks: [
      "new Promise() ile sıfırdan başarılı ve hatalı sonuç dönen bir promise fonksiyonu yaz.",
      ".then(), .catch() ve .finally() bloklarının çalışma sırasını test et.",
      "Promise zincirlemesi (Promise Chaining) ile bir işlemin sonucunu bir sonrakine aktar."
    ],
    seniorTip: "Promise içinde hata fırlatıldığında catch bloğu yoksa 'UnhandledPromiseRejection' alırsın. Her promise zincirinin sonunda mutlaka bir .catch olmalı.",
    interviewQuestion: "Promise nedir ve hangi durumları (state) alabilir? Callback'lere göre avantajları nelerdir?"
  },
  {
    id: 17,
    month: 1,
    week: 3,
    day: 17,
    title: "Async / Await & Modern Hata Yönetimi",
    summary: "Asenkron kodu senkron gibi okuma zarafeti ve try-catch-finally mimarisi.",
    tasks: [
      "Promise zincirlerini modern async/await sözdizimine dönüştür.",
      "try/catch bloğu ile ağ ve parse hatalarını zarifçe yakala (graceful error handling).",
      "İki bağımsız asenkron fonksiyonu await ile sırayla bekletmenin performans kaybını ölç."
    ],
    seniorTip: "Birbirine bağımlı olmayan iki isteği art arda 'await istek1(); await istek2();' yazarsan süreyi ikiye katlarsın! Bağımsız istekleri paralel çalıştırmalısın.",
    interviewQuestion: "async/await arka planda ne kullanır? Promise ile aralarındaki ilişki nedir?"
  },
  {
    id: 18,
    month: 1,
    week: 3,
    day: 18,
    title: "Promise Kombinasyonları: all, allSettled, race, any",
    summary: "Çoklu API isteklerini profesyonelce yönetme sanatları.",
    tasks: [
      "Promise.all() ile 3 isteği aynı anda at; biri patlarsa ne olduğunu gözlemle (fail-fast).",
      "Promise.allSettled() kullanarak biri patlasa bile diğerlerinin sonucunu almayı sağla.",
      "Promise.race() ile bir API isteğine zaman aşımı (Timeout) mekanizması kur."
    ],
    seniorTip: "Dashboard ekranlarında 5 farklı API çağrısı yaparken Promise.all kullanırsan bir servis çöktüğünde tüm sayfa çöker. Bunun yerine Promise.allSettled kullan.",
    interviewQuestion: "Promise.all ile Promise.allSettled arasındaki kritik fark nedir? Ne zaman hangisi seçilmelidir?"
  },
  {
    id: 19,
    month: 1,
    week: 3,
    day: 19,
    title: "Event Loop, Microtasks (Promise) vs Macrotasks (Timer)",
    summary: "Seni 2 senelik geliştiricilerin %80'inin önüne geçirecek derin konu: V8 Motorunun Kalbi.",
    tasks: [
      "Call Stack, Web APIs, Task Queue (Macrotask) ve Microtask Queue diyagramını çiz.",
      "console.log, setTimeout ve Promise.resolve içeren kod bloklarının konsol çıktı sırasını tahmin et ve test et.",
      "requestAnimationFrame ve queueMicrotask kavramlarını araştır."
    ],
    seniorTip: "Mülakatçıların en sevdiği tuzak soru: 'console.log(1); setTimeout(()=>console.log(2),0); Promise.resolve().then(()=>console.log(3)); console.log(4);' Çıktı: 1, 4, 3, 2. Microtask kuyruğu her zaman Macrotask'tan önce boşaltılır!",
    interviewQuestion: "Event Loop nasıl çalışır? Microtask queue ile Macrotask queue öncelik farkı nedir?"
  },
  {
    id: 20,
    month: 1,
    week: 3,
    day: 20,
    title: "Fetch API, HTTP Başlıkları & REST İstemcisi",
    summary: "Gerçek dünya ile iletişim: GET, POST, PUT, DELETE istekleri ve Status kodları.",
    tasks: [
      "JSONPlaceholder veya Rick and Morty API'sine fetch ile istek at.",
      "res.ok kontrolünün önemini gör (fetch 404 veya 500 hatalarında reject OLMAZ!).",
      "AbortController ile gereksiz veya devam eden bir API isteğini iptal etmeyi öğren."
    ],
    seniorTip: "fetch() yalnızca ağ hatasında (internet kopması gibi) reject olur; 404 veya 500 status kodlarında hata fırlatmaz! Her zaman 'if (!res.ok) throw new Error()' kontrolü yapmalısın.",
    interviewQuestion: "fetch() hata fırlatma davranışı nasıldır? AbortController ne için kullanılır?"
  },
  {
    id: 21,
    month: 1,
    week: 3,
    day: 21,
    title: "Haftalık Proje: Canlı Hava Durumu & Kripto Takip Paneli",
    summary: "Açık API'lerden veri çeken, arama ve filtreleme sunan, yükleniyor/hata durumlarını yöneten panel.",
    tasks: [
      "OpenWeatherMap veya CoinGecko API'sini bağla.",
      "Kullanıcı arama yaparken loading spinner ve hata uyarıları göster.",
      "Son aramaları LocalStorage'da tut ve tıklandığında yeniden getir."
    ],
    seniorTip: "Kullanıcı her harfe bastığında API'ye istek atarsan API limitin 10 saniyede biter. Debounce tekniği kullanmalısın (Yarınki konu!).",
    interviewQuestion: "API isteklerinde Loading, Error ve Success state'leri nasıl modellenmelidir?"
  },

  // HAFTA 4
  {
    id: 22,
    month: 1,
    week: 4,
    day: 22,
    title: "Debounce ve Throttle Mimarisi",
    summary: "Performans canavarı iki teknik: Arama çubukları ve kaydırma (scroll) olayları.",
    tasks: [
      "Kendi debounce() fonksiyonunu sıfırdan closure ve setTimeout kullanarak yaz.",
      "Kendi throttle() fonksiyonunu sıfırdan yaz ve scroll olayında test et.",
      "Arama çubuğuna debounce ekleyerek API istek sayısını 10 kattan fazla azalt."
    ],
    seniorTip: "Canlı kodlama (live coding) mülakatlarında en çok yazdırılan utility fonksiyon debounce'dur. Mantığını ezberleme, closure ve zamanlayıcı ilişkisini kavra.",
    interviewQuestion: "Debounce ile Throttle arasındaki fark nedir? Hangi senaryolarda hangisi kullanılır?"
  },
  {
    id: 23,
    month: 1,
    week: 4,
    day: 23,
    title: "Modern ES6+ Modülleri (ESM vs CJS)",
    summary: "import / export sözdizimi, Tree-shaking ve CommonJS (require) farkları.",
    tasks: [
      "Named export vs Default export farklarını ve kullanım standartlarını kodla.",
      "Dynamic import (import()) ile sayfa yükleme süresini optimize etme mantığını gör.",
      "Node.js tarafındaki require() (CommonJS) ile ESM arasındaki farkları not al."
    ],
    seniorTip: "Projelerinde her zaman named export tercih et. Default export refactor yaparken dosya adını takip etmeyi zorlaştırır ve tree-shaking verimini düşürür.",
    interviewQuestion: "CommonJS ile ES Modules (ESM) arasındaki farklar nelerdir? Tree-shaking nasıl çalışır?"
  },
  {
    id: 24,
    month: 1,
    week: 4,
    day: 24,
    title: "Hata Yönetimi & Custom Error Sınıfları",
    summary: "Profesyonel kodda console.log ile hata yönetilmez. Error objesi ve hata zinciri.",
    tasks: [
      "Error sınıfından türeyen (extends Error) ValidationError ve NetworkError sınıfları oluştur.",
      "Error stack trace'in nasıl okunacağını öğren.",
      "Global unhandled error dinleyicilerini (window.onerror, window.onunhandledrejection) kur."
    ],
    seniorTip: "Hataları sessizce yutmak ('catch (e) {}') yazılım dünyasının en büyük günahıdır. Hatayı ya kullanıcıya anlamlı göster, ya log servisine (Sentry vb.) bildir ya da yeniden fırlat.",
    interviewQuestion: "Custom Error sınıfı neden oluşturulur? Error handling best practice'leri nelerdir?"
  },
  {
    id: 25,
    month: 1,
    week: 4,
    day: 25,
    title: "Web Storage, Cookies & Web Güvenliği Temelleri",
    summary: "XSS ve CSRF saldırıları ve tarayıcıda hassas veri saklama kuralları.",
    tasks: [
      "LocalStorage vs HttpOnly Secure Cookie güvenlik farkını araştır.",
      "Basit bir XSS (Cross-Site Scripting) senaryosu oluştur ve innerHTML yerine textContent kullanımının önemini gör.",
      "Same-Origin Policy ve CORS mantığını anla."
    ],
    seniorTip: "JWT token'ı asla LocalStorage'a kaydetme! XSS açığı olan bir sitede kötü niyetli bir script tek satırda token'ı çalar. Mülakatta bunu söylersen tam puan alırsın.",
    interviewQuestion: "XSS ve CSRF nedir? JWT token nerede saklanmalıdır?"
  },
  {
    id: 26,
    month: 1,
    week: 4,
    day: 26,
    title: "Git & GitHub İleri Seviye (Interactive Rebase & Stash)",
    summary: "Takım çalışmasına hazır olma: Dal (branch) stratejileri, merge vs rebase.",
    tasks: [
      "git stash, git stash pop ve stash drop komutlarını dene.",
      "git rebase -i ile dağınık commit'leri tek bir temiz commit'te birleştir (squash).",
      "Git Flow ve Trunk-based development stratejilerini oku."
    ],
    seniorTip: "Bir şirkete girdiğinde ilk bakacakları şey Git kültüründür. 'git commit -m asdasd' yapan biri işe alınmaz. Anlamlı commit'ler ve temiz PR (Pull Request) açıklamaları yaz.",
    interviewQuestion: "Git merge ile git rebase arasındaki fark nedir? Rebase ne zaman tehlikelidir?"
  },
  {
    id: 27,
    month: 1,
    week: 4,
    day: 27,
    title: "1. Ay Büyük Proje - Mimari Tasarım & Planlama",
    summary: "GitHub API Entegrasyonlu Developer Portfolyo & Profil Analiz Aracı.",
    tasks: [
      "Uygulamanın ekran taslaklarını ve veri akış şemasını hazırla.",
      "GitHub REST API endpoints (user, repos, starred, commits) dökümanını incele.",
      "Modüler dosya yapısını kur (api.js, dom.js, storage.js, app.js)."
    ],
    seniorTip: "Koda balıklama atlama. İyi mühendis zamanının %60'ını planlamaya, %40'ını kodlamaya harcar.",
    interviewQuestion: "Büyük bir projeye başlarken mimariyi ve dosya hiyerarşisini nasıl kurgularsın?"
  },
  {
    id: 28,
    month: 1,
    week: 4,
    day: 28,
    title: "1. Ay Büyük Proje - Geliştirme (Core & API Entegrasyonu)",
    summary: "Arama, debounce, kullanıcı kartı, en popüler repolar ve istatistik grafikleri.",
    tasks: [
      "Debounce uygulanmış arama çubuğu ve kullanıcı profil detaylarını bas.",
      "Kullanıcının repo listesini yıldız ve fork sayısına göre dinamik sırala.",
      "İstek sınırına (Rate limit) takılınca zarif hata gösterimi yap."
    ],
    seniorTip: "Skeleton loading ekle. Kullanıcı boş ekrana bakmasın, veri yüklenirken gri animasyonlu kutular görsün.",
    interviewQuestion: "Skeleton loading nedir ve kullanıcı deneyimini (UX) nasıl iyileştirir?"
  },
  {
    id: 29,
    month: 1,
    week: 4,
    day: 29,
    title: "1. Ay Büyük Proje - Canlıya Alma & Dokümantasyon",
    summary: "Vercel / GitHub Pages üzerinde canlıya alma ve profesyonel README yazımı.",
    tasks: [
      "Projeyi Vercel veya GitHub Pages'e deploy et.",
      "Proje için ekran görüntüleri, özellik listesi ve kurulum adımlarını içeren README.md hazırla.",
      "Lighthouse testi çalıştır ve performans puanını 95+ seviyesine çıkar."
    ],
    seniorTip: "README'si olmayan veya özensiz olan repoyu mülakatçı incelemez bile. GIF veya demo linki koyduğun bir proje seni anında öne geçirir.",
    interviewQuestion: "Lighthouse metrikleri (FCP, LCP, CLS) ne anlama gelir?"
  },
  {
    id: 30,
    month: 1,
    week: 4,
    day: 30,
    title: "1. Ay Değerlendirmesi & Mock Interview (Simülasyon)",
    summary: "Tüm 1. ay konularının pekiştirilmesi ve teknik mülakat prova testi.",
    tasks: [
      "30 günlük müfredatın mülakat sorularını sesli olarak kendi kendine cevapla.",
      "Sitedeki 'Mülakat Kartları' bölümünden JavaScript sorularını çöz.",
      "Eksik hissettiğin bir konuyu seçip 2 saat boyunca sadece onun üzerine drill yap."
    ],
    seniorTip: "Tebrikler! JavaScript'in derinliklerini kavradın. Çoğu 2 yıllık geliştirici Event Loop ve Closure detaylarını bilmez. Şimdi üzerine TypeScript ve React inşa edeceğiz.",
    interviewQuestion: "JavaScript'te bellek sızıntıları (memory leaks) en çok hangi durumlarda oluşur?"
  },

  // ================= AY 2 =================
  {
    id: 31,
    month: 2,
    week: 5,
    day: 31,
    title: "TypeScript'e Giriş & Neden TypeScript?",
    summary: "Tip güvenliği, derleme zamanı (compile-time) hata yakalama ve TS konfigürasyonu.",
    tasks: [
      "tsconfig.json dosyasını ve strict mode ayarlarını incele.",
      "Temel tipler: string, number, boolean, array, tuple, enum, any, unknown, never.",
      "unknown ile any arasındaki güvenlik farkını kodla."
    ],
    seniorTip: "Asla 'any' kullanma! 'any' yazmak TypeScript'i kapatmak demektir. Tipini bilmiyorsan 'unknown' kullan ve type narrowing uygula.",
    interviewQuestion: "TypeScript'te 'any', 'unknown' ve 'never' tipleri arasındaki farklar nelerdir?"
  },
  {
    id: 32,
    month: 2,
    week: 5,
    day: 32,
    title: "Interfaces vs Type Aliases & Union/Intersection Types",
    summary: "Veri modellerini ve domain nesnelerini tanımlama standartları.",
    tasks: [
      "interface ile type arasındaki farkları (declaration merging, extends vs &) test et.",
      "Union (|) ve Intersection (&) tipleri ile karmaşık modeller üret.",
      "Optional properties (?) ve readonly belirteçlerini kullan."
    ],
    seniorTip: "Nesne şekilleri ve sınıf implementasyonları için interface, union veya primitif tipler için type alias tercih etmek endüstri konsensüsüdür.",
    interviewQuestion: "Interface ile Type Alias ne zaman birbirine tercih edilmelidir?"
  },
  {
    id: 33,
    month: 2,
    week: 5,
    day: 33,
    title: "Generics (Genel Tipler) - Esnek ve Tip Güvenli Kod",
    summary: "Fonksiyonlara ve interfacelere tip parametresi geçerek yeniden kullanılabilirlik.",
    tasks: [
      "Generic bir API response arayüzü yaz: ApiResponse<T> { data: T, status: number }.",
      "Generic fonksiyonlar ile dizi filtreleme ve dönüştürme fonksiyonu kodla.",
      "Generic kısıtlamaları (Generic Constraints: <T extends { id: string }>) incele."
    ],
    seniorTip: "Generics bilmeyen bir yazılımcı kütüphane yazamaz veya profesyonel state yönetimlerini doğru tipleştiremez.",
    interviewQuestion: "TypeScript Generics nedir? Hangi problemlere çözüm üretir?"
  },
  {
    id: 34,
    month: 2,
    week: 5,
    day: 34,
    title: "Utility Types (Partial, Pick, Omit, Record)",
    summary: "Mevcut tipleri dönüştürme: Tekrar eden tip tanımlarını yok etme.",
    tasks: [
      "Partial<T> ile güncelleme modelleri üret.",
      "Omit<T, K> ve Pick<T, K> ile var olan bir User tipinden UserPreview ve CreateUserDto türet.",
      "Record<K, T> ile tip güvenli dictionary/map yapıları kur."
    ],
    seniorTip: "Aynı tipin küçük varyasyonları için yeni tipler kopyala-yapıştır yapma. Utility tipler ile tek bir Single Source of Truth (Tek Gerçek Kaynağı) koru.",
    interviewQuestion: "Partial, Pick ve Omit utility tipleri ne işe yarar?"
  },
  {
    id: 35,
    month: 2,
    week: 5,
    day: 35,
    title: "React'e Giriş: Neden React & Virtual DOM Mantığı",
    summary: "Bileşen tabanlı mimari, JSX sözdizimi ve Virtual DOM vs Gerçek DOM.",
    tasks: [
      "Vite ile TypeScript destekli modern bir React projesi kur (npm create vite@latest).",
      "JSX'in React.createElement'e nasıl derlendiğini gör.",
      "Virtual DOM diffing algoritmasının (Reconciliation) mantığını öğren."
    ],
    seniorTip: "React sihirli değildir. Sadece UI = f(state) formülünü uygulayan bildirimsel (declarative) bir kütüphanedir. State değişir, React fonksiyonu tekrar çalıştırır.",
    interviewQuestion: "Virtual DOM nedir? React değişiklikleri gerçek DOM'a nasıl yansıtır?"
  },
  {
    id: 36,
    month: 2,
    week: 5,
    day: 36,
    title: "Bileşenler, Props & Tip Güvenli Bileşen Tasarımı",
    summary: "Bileşen hiyerarşisi, Children prop'u ve TypeScript ile React.FC / Props tanımları.",
    tasks: [
      "Yeniden kullanılabilir Button, Card ve Modal bileşenleri tasarla.",
      "Props tiplerini interface ile tanımla ve varsayılan değerler ver.",
      "children prop'u ile Composition (Bileşim) desenini uygula."
    ],
    seniorTip: "React.FC kullanmaktan kaçın. Direkt `function Button(props: ButtonProps)` şeklinde props tiplerini açıkça yazmak modern standarttır.",
    interviewQuestion: "React'te Props drilling nedir? Composition (bileşim) ile nasıl engellenebilir?"
  },
  {
    id: 37,
    month: 2,
    week: 5,
    day: 37,
    title: "Haftalık Proje: Tip Güvenli UI Bileşen Kütüphanesi (Storybook/Vite)",
    summary: "Tailwind CSS ve TypeScript ile mini bir UI kiti (Button, Input, Badge, Card, Modal).",
    tasks: [
      "Tailwind CSS'i Vite projesine entegre et.",
      "CVA (class-variance-authority) veya clsx/tailwind-merge ile varyantlı butonlar yap.",
      "Erişilebilirlik (ARIA etiketleri) ekle."
    ],
    seniorTip: "2 senelik geliştiricilerin çoğu CSS sınıflarını string birleştirme ile yönetir ve çatışmalar yaşar. clsx ve tailwind-merge kullanarak profesyonel UI mimarı ol.",
    interviewQuestion: "Tailwind CSS'te sınıf çatışmaları (class collision) nasıl önlenir?"
  },

  // HAFTA 6
  {
    id: 38,
    month: 2,
    week: 6,
    day: 38,
    title: "useState Hook'u & State Batching",
    summary: "State nasıl çalışır, neden doğrudan değiştirilemez (immutability) ve Automatic Batching.",
    tasks: [
      "Dizi ve obje state'lerini immutability kurallarına göre güncellemeyi dene.",
      "Functional state update (setCount(prev => prev + 1)) mantığını test et.",
      "React 18/19 Automatic Batching mekanizmasını gözlemle."
    ],
    seniorTip: "State bir anlık fotoğraftır (snapshot). setState çağırdıktan hemen sonraki satırda yeni değeri okuyamazsın!",
    interviewQuestion: "React'te state doğrudan neden mutate edilmez? Batching ne demektir?"
  },
  {
    id: 39,
    month: 2,
    week: 6,
    day: 39,
    title: "useEffect Hook'u & Yaşam Döngüsü (Lifecycle)",
    summary: "Side effect yönetimi, Dependency Array kuralları ve Cleanup fonksiyonu.",
    tasks: [
      "Mount, Update ve Unmount fazlarını useEffect ile simüle et.",
      "Zamanlayıcı (timer) ve event listener'lar için cleanup fonksiyonu yazarak bellek sızıntısını önle.",
      "Sonsuz döngü (infinite loop) tuzağını ve dependency array hatalarını gör."
    ],
    seniorTip: "useEffect veri getirmek için tek yol değildir! Veri çekme işlemleri için modern React'te TanStack Query veya Server Components kullanılır. useEffect sadece React dışı sistemlerle senkronizasyon içindir.",
    interviewQuestion: "useEffect cleanup fonksiyonu ne zaman çalışır ve neden zorunludur?"
  },
  {
    id: 40,
    month: 2,
    week: 6,
    day: 40,
    title: "useRef Hook'u: DOM Erişimi & Değer Saklama",
    summary: "Render tetiklemeden değer tutma ve DOM elemanlarını doğrudan kontrol etme.",
    tasks: [
      "Sayfa açıldığında input'a otomatik focus veren useRef senaryosu yaz.",
      "Bileşenin kaç kez render edildiğini sayan ama render tetiklemeyen bir ref kur.",
      "Önceki state değerini (previous state) tutan bir ref deseni oluştur."
    ],
    seniorTip: "State her değiştiğinde bileşen yeniden çizilir (re-render). Ref değiştiğinde ise render olmaz. Sadece veri tutmak ve render istemiyorsan ref kullan.",
    interviewQuestion: "useState ile useRef arasındaki fark nedir? useRef ne zaman tercih edilmelidir?"
  },
  {
    id: 41,
    month: 2,
    week: 6,
    day: 41,
    title: "useMemo ve useCallback: Performans Optimizasyonu",
    summary: "Gereksiz hesaplamaları ve fonksiyon yeniden tanımlamalarını engelleme sanatı.",
    tasks: [
      "Ağır bir hesaplamayı (örneğin 1 milyon elemanlı filtreleme) useMemo ile önbelleğe al.",
      "Alt bileşene prop olarak geçilen fonksiyonu useCallback ile sabitle.",
      "React.memo ile saf bileşen (pure component) oluştur ve gereksiz render'ları önle."
    ],
    seniorTip: "Her fonksiyonu useCallback içine alma! Optimizasyonun da bir maliyeti vardır (hafıza ve dependency karşılaştırma). Profiler ile gerçek darboğazı görmeden erken optimizasyon yapma.",
    interviewQuestion: "useMemo ile useCallback farkı nedir? Erken optimizasyon (premature optimization) zararı nedir?"
  },
  {
    id: 42,
    month: 2,
    week: 6,
    day: 42,
    title: "Custom Hook Mimarisi (Kendi Hook'unu Yaz)",
    summary: "İş mantığını (business logic) UI bileşeninden soyutlama ve kod paylaşımı.",
    tasks: [
      "useLocalStorage custom hook'u yaz (state ile local storage otomatik senkron olsun).",
      "useWindowSize veya useDebounce custom hook'u kodla.",
      "useFetch hook'u yazarak loading, error ve data state'lerini tek bir yerde paketle."
    ],
    seniorTip: "Senior yazılımcı bileşenleri aptal (dumb/presentational) tutar, tüm mantığı custom hook'lara taşır. Böylece kod hem test edilebilir olur hem de okunması çocuk oyuncağına döner.",
    interviewQuestion: "Custom hook nedir ve kuralları (Rules of Hooks) nelerdir?"
  },
  {
    id: 43,
    month: 2,
    week: 6,
    day: 43,
    title: "Form Yönetimi: React Hook Form & Zod Validasyonu",
    summary: "Formları useState ile değil, endüstri standardı kütüphaneler ile yönetme.",
    tasks: [
      "Zod ile bir kullanıcı kayıt formu doğrulama şeması (schema) tanımla.",
      "react-hook-form kütüphanesini Zod resolver ile entegre et.",
      "Uncontrolled components ve controlled components performans farkını gözlemle."
    ],
    seniorTip: "2 yıllık junior'lar 10 tane input için 10 tane useState açar ve her harfte tüm formu re-render eder. React Hook Form kullanarak sıfır gereksiz render ile formu yönet.",
    interviewQuestion: "Controlled vs Uncontrolled component nedir? React Hook Form neden performanslıdır?"
  },
  {
    id: 44,
    month: 2,
    week: 6,
    day: 44,
    title: "Haftalık Proje: Trello / Kanban Tarzı Görev Tahtası",
    summary: "Sürükle-bırak destekli, kolonlu, kart ekleme/silme özellikli dinamik React panosu.",
    tasks: [
      "Todo, In Progress, Done kolonları oluştur.",
      "Kartlar arası taşıma veya dnd-kit ile sürükle bırak mantığını kur.",
      "LocalStorage'a TypeScript modelleriyle kaydet."
    ],
    seniorTip: "State yapısını normalize et: Kartları kolon array'i içinde tutmak yerine { cards: { [id]: Card }, columns: { [id]: { cardIds: [] } } } şeklinde ID referanslarıyla tut. Performans uçar.",
    interviewQuestion: "Frontend'de State Normalization nedir ve neden gereklidir?"
  },

  // HAFTA 7
  {
    id: 45,
    month: 2,
    week: 7,
    day: 45,
    title: "Global State Yönetimi: Context API vs Zustand",
    summary: "Props drilling kabusuna son: Neden Redux yerine artık Zustand tercih ediliyor?",
    tasks: [
      "React Context API ile bir Tema (Dark/Light) ve Dil (i18n) sağlayıcısı kur.",
      "Zustand kur ve tek bir store oluştur (kullanıcı oturumu ve sepet).",
      "Context API'nin altındaki tüm ağacı re-render etme problemine karşı Zustand'ın selector avantajını gör."
    ],
    seniorTip: "Redux boilerplate'i (action, reducer, thunk) artık eski dünya. Modern şirketler %90 Zustand veya TanStack Query kullanıyor. Hafif, hızlı ve öğrenmesi kolay.",
    interviewQuestion: "Context API neden büyük ölçekli ve sık değişen state'ler için uygun değildir?"
  },
  {
    id: 46,
    month: 2,
    week: 7,
    day: 46,
    title: "Server State Yönetimi: TanStack Query (React Query)",
    summary: "Frontend state ile Server state farkı: Caching, Deduping, Polling ve Invalidation.",
    tasks: [
      "useQuery ile API'den veri çek ve loading/error durumlarını yönet.",
      "staleTime ve gcTime (cacheTime) kavramlarını öğren.",
      "useMutation ile yeni kayıt oluştur ve queryClient.invalidateQueries ile listeyi otomatik tazele."
    ],
    seniorTip: "Kullanıcıların en büyük hatası backend verisini Zustand veya Redux içine koymaktır. Sunucu verisi 'Server State'tir ve yeri TanStack Query'dir. Client State (modal açık mı vb.) ile karıştırma.",
    interviewQuestion: "Client State ile Server State arasındaki fark nedir? TanStack Query ne sağlar?"
  },
  {
    id: 47,
    month: 2,
    week: 7,
    day: 47,
    title: "Client-Side Routing: React Router v6 / TanStack Router",
    summary: "Çok sayfalı SPA mimarisi, Dynamic Routes, Nested Routes ve Loaders.",
    tasks: [
      "BrowserRouter, Routes, Route, Link ve NavLink ile temel rotaları kur.",
      "Dinamik rotalar (:id) ile detay sayfası yap ve useParams ile id'yi yakala.",
      "Protected Route (Korumalı Rota) bileşeni yazarak giriş yapmamış kullanıcıyı yönlendir."
    ],
    seniorTip: "Protected Route yazarken yönlendirme sonrası kullanıcının gitmek istediği URL'i state'te sakla ki login olduktan sonra ana sayfaya değil kaldığı yere dönebilsin.",
    interviewQuestion: "SPA'larda (Single Page App) client-side routing nasıl çalışır? History API nedir?"
  },
  {
    id: 48,
    month: 2,
    week: 7,
    day: 48,
    title: "Code Splitting, Lazy Loading & Suspense",
    summary: "Performans: İlk yükleme (Initial bundle size) boyutunu küçültme stratejileri.",
    tasks: [
      "React.lazy ve Suspense ile sayfa bileşenlerini dinamik olarak böl.",
      "Görsel lazy loading (loading='lazy') ve Intersection Observer kullanımını incele.",
      "Tarayıcı Network sekmesinde JS chunk dosyalarının ne zaman yüklendiğini kontrol et."
    ],
    seniorTip: "Kullanıcının hiç girmeyeceği bir admin panelinin kodunu ana sayfayı açan müşteriye yükletmek amatörlüktür. Rotaları mutlaka React.lazy ile ayır.",
    interviewQuestion: "Code splitting nedir? Webpack / Vite bunu bundle aşamasında nasıl böler?"
  },
  {
    id: 49,
    month: 2,
    week: 7,
    day: 49,
    title: "Erişilebilirlik (a11y) & Web Vitals",
    summary: "Engelsiz web, semantik HTML, klavye navigasyonu ve Core Web Vitals optimizasyonu.",
    tasks: [
      "Radix UI veya Headless UI gibi unstyled erişilebilir bileşen kütüphanelerini incele.",
      "WAI-ARIA rollerini (role='dialog', aria-expanded, aria-label) modal bileşenine uygula.",
      "Sadece klavye (Tab, Enter, Escape) ile web sitesinde gezinebilmeyi test et."
    ],
    seniorTip: "Kurumsal şirketler ve yabancı uzaktan (remote) iş ilanları erişilebilirliğe (a11y) çok önem verir. Mülakatta 'Radix primitives ile headless ve aria-compliant yapılar kuruyorum' demek seni doğrudan kıdemli sınıfına sokar.",
    interviewQuestion: "Web erişilebilirliği (a11y) neden önemlidir? ARIA öznitelikleri ne işe yarar?"
  },
  {
    id: 50,
    month: 2,
    week: 7,
    day: 50,
    title: "React Testing: Vitest & React Testing Library (RTL)",
    summary: "Koduna güvenme sanatı: Unit test ve Component integration testi.",
    tasks: [
      "Vitest ve React Testing Library kurulumunu yap.",
      "Kullanıcı perspektifinden (getByRole, getByText) buton tıklaması ve form submit testi yaz.",
      "Mock servisler (MSW - Mock Service Worker) ile API isteklerini testte taklit et."
    ],
    seniorTip: "Uygulama detaylarını (state değişkeninin adı ne vb.) test etme! Kullanıcının ekranda gördüğünü ve yaptığı etkileşimi test et. Bu yüzden RTL 'getByTestId' yerine 'getByRole' önerir.",
    interviewQuestion: "Unit test ile Integration test farkı nedir? React Testing Library felsefesi nedir?"
  },
  {
    id: 51,
    month: 2,
    week: 7,
    day: 51,
    title: "Haftalık Proje: E-Ticaret Ürün Kataloğu & Sepet (Zustand + TanStack Query)",
    summary: "Filtreleme, arama, sepet yönetimi, optimistik güncellemeler ve persist storage.",
    tasks: [
      "DummyJSON Products API'sini TanStack Query ile bağla.",
      "Zustand ile sepet store'u oluştur (LocalStorage persist middleware ile).",
      "Kategori ve fiyat filtreleri ekle, arama kutusuna debounce koy."
    ],
    seniorTip: "Sepete ürün eklerken butonun hemen güncellenmesini sağla (Optimistic UI). Kullanıcı backend cevabını bekleyip gecikme hissetmesin.",
    interviewQuestion: "Optimistic UI nedir? Başarısızlık durumunda rollback nasıl yapılır?"
  },

  // HAFTA 8
  {
    id: 52,
    month: 2,
    week: 8,
    day: 52,
    title: "React 19 Yenilikleri & Geleceğin React'i",
    summary: "React Compiler, Actions, useActionState, useOptimistic ve Server Functions.",
    tasks: [
      "React 19 ile gelen form Actions yapısını ve useActionState hook'unu incele.",
      "useOptimistic hook'unun nasıl çalıştığını kodla.",
      "React Compiler'ın useMemo ve useCallback ihtiyacını nasıl ortadan kaldırdığını araştır."
    ],
    seniorTip: "React 19 ekosistemi değiştiriyor. Çoğu geliştirici eski React 16/17 kalıplarında takılı kalmışken senin React 19 Actions ve Compiler'ı bilmen mülakatta şok etkisi yaratır.",
    interviewQuestion: "React 19 ile gelen Actions ve useActionState neyi kolaylaştırır?"
  },
  {
    id: 53,
    month: 2,
    week: 8,
    day: 53,
    title: "Tailwind CSS İleri Düzey & Animasyonlar (Framer Motion)",
    summary: "Mikro etkileşimler ve profesyonel UI animasyonları.",
    tasks: [
      "Framer Motion kurulumunu yap ve anın yumuşak açılış (fade-in, slide) animasyonlarını kodla.",
      "AnimatePresence ile listeden eleman silinirken akıcı kaybolma efekti ver.",
      "Dark mode geçişini Tailwind dark class ve sistem tercihi (prefers-color-scheme) ile kur."
    ],
    seniorTip: "Aşırı animasyon siteyi oyuncak gibi gösterir ve kullanıcıyı yorar. 200-300ms süren zarif mikro etkileşimler (micro-interactions) kullan.",
    interviewQuestion: "Web'de 60 FPS akıcı animasyon için CSS transform/opacity neden layout özelliklerinden (top/left/height) daha iyidir?"
  },
  {
    id: 54,
    month: 2,
    week: 8,
    day: 54,
    title: "Temiz React Mimarisi & Feature-Based Folder Structure",
    summary: "Büyüdükçe çökmeyen klasör yapısı: components, features, hooks, services, types.",
    tasks: [
      "Büyük projelerde kullanılan Bulletproof React mimarisini incele.",
      "Feature-based (özellik bazlı) klasörleme yapısı kur: features/auth, features/products.",
      "Her klasör için index.ts (barrel export) deseni oluştur."
    ],
    seniorTip: "Tüm bileşenleri tek bir /components klasörüne atan geliştirici 3 ay sonra projenin içinde kaybolur. Kodları özelliklerine göre grupla.",
    interviewQuestion: "Feature-based klasör yapısının katmanlı (layered) klasör yapısına göre avantajı nedir?"
  },
  {
    id: 55,
    month: 2,
    week: 8,
    day: 55,
    title: "2. Ay Büyük Proje - Mimari & Tasarım (SaaS Dashboard)",
    summary: "Kripto / Finans Analiz ve Portföy Yönetim Paneli.",
    tasks: [
      "Proje gereksinimlerini ve veri modellerini TypeScript arayüzleri olarak yaz.",
      "Chart.js veya Recharts kütüphanesini projeye dahil et.",
      "Kullanıcı giriş ekranı ve Dashboard layout'u (Sidebar, Navbar, Content) iskeletini oluştur."
    ],
    seniorTip: "Bileşenleri küçük tut. Bir dosya 150 satırı geçiyorsa bölme zamanı gelmiştir.",
    interviewQuestion: "Compound Components deseni nedir?"
  },
  {
    id: 56,
    month: 2,
    week: 8,
    day: 56,
    title: "2. Ay Büyük Proje - Dashboard Geliştirme (Grafikler & Tablolar)",
    summary: "Dinamik grafikler, filtrelenebilir veri tabloları (TanStack Table mantığı) ve istatistik kartları.",
    tasks: [
      "Gerçek finansal verilerle interaktif çizgi ve çubuk grafikleri çizdir.",
      "Sıralanabilir ve sayfalanabilir (pagination) veri tablosu yap.",
      "Zustand ile para birimi seçimi (USD, EUR, TRY) store'u kur ve tüm fiyatları otomatik çevir."
    ],
    seniorTip: "Büyük tablolarda binlerce satır varsa sanallaştırma (virtualization - TanStack Virtual) kullanarak sadece ekranda görünen satırları DOM'a bas.",
    interviewQuestion: "DOM Virtualization (Windowing) nedir?"
  },
  {
    id: 57,
    month: 2,
    week: 8,
    day: 57,
    title: "2. Ay Büyük Proje - Caching, Error Boundary & Polish",
    summary: "Sayfa çökmesini engelleyen React Error Boundary ve UX cilalama.",
    tasks: [
      "React Error Boundary bileşeni yazarak beklenmeyen hatalarda sayfanın beyaz ekranda kalmasını önle.",
      "Toast bildirim sistemi kur (Sonner kütüphanesi).",
      "Mobil duyarlılığı ve dokunmatik kontrolleri test et."
    ],
    seniorTip: "Error Boundary olmayan bir React uygulaması canlıya alınamaz. Bir alt bileşendeki JS hatası tüm sayfayı beyaz ekrana gömer.",
    interviewQuestion: "React Error Boundary nedir ve hangi hataları yakalayamaz?"
  },
  {
    id: 58,
    month: 2,
    week: 8,
    day: 58,
    title: "2. Ay Büyük Proje - Deploy & Dokümantasyon",
    summary: "Vercel üzerinde canlı ortam, çevre değişkenleri (.env) ve açık kaynak sunumu.",
    tasks: [
      "Projeyi Vercel'e bağla ve Production build al.",
      "Lighthouse performans, erişilebilirlik ve SEO kontrollerini tamamla.",
      "GitHub reposu için canlı demo ve mimari diyagram içeren README oluştur."
    ],
    seniorTip: "Çevre değişkenlerini (API anahtarları vb.) asla GitHub'a atma (.env.example oluştur).",
    interviewQuestion: "Frontend'de public vs private environment variables farkı nedir?"
  },
  {
    id: 59,
    month: 2,
    week: 8,
    day: 59,
    title: "2. Ay Teknik Mülakat Provası (React & TypeScript)",
    summary: "React ve TS mülakat soruları üzerinden derin pratik.",
    tasks: [
      "React render mekanizması ve hook kuralları üzerine 10 zorlu soru çöz.",
      "TypeScript generic ve utility type kodlama pratikleri yap.",
      "Eksik kalan kısımları gözden geçir."
    ],
    seniorTip: "Mülakatta soru sorulduğunda önce problemi anladığını teyit et, sonra adım adım sesli düşün (Think out loud). Sessizce kod yazan adaylar elenir.",
    interviewQuestion: "React'te neden hook'lar if blokları veya döngüler içinde çağrılamaz?"
  },
  {
    id: 60,
    month: 2,
    week: 8,
    day: 60,
    title: "2. Ay Sonu: Portföy Değerlendirmesi & Dinlenme / Refactor",
    summary: "2 aylık sürede yazılan projelerin kod kalitesi incelemesi (Code Review).",
    tasks: [
      "Önceki projelerindeki 'any' tiplerini ve gereksiz render'ları temizle.",
      "Kod tabanına ESLint ve Prettier standartlarını tam uygula.",
      "Zihnini 3. ayın Next.js ve Fullstack dünyasına hazırla."
    ],
    seniorTip: "Şu an piyasadaki birçok 'React Geliştiricisi' unvanlı kişiden daha sağlam temel mimariye sahipsin. Şimdi Fullstack sınırlarını zorlama vakti!",
    interviewQuestion: "Clean Code prensiplerinde DRY ve KISS ne anlama gelir?"
  },

  // ================= AY 3 =================
  {
    id: 61,
    month: 3,
    week: 9,
    day: 61,
    title: "Next.js 15+ Giriş & App Router Mimarisi",
    summary: "SSR, SSG, ISR kavramları ve neden Next.js modern webin standardı?",
    tasks: [
      "create-next-app ile App Router tabanlı Next.js projesi oluştur.",
      "Klasör tabanlı yönlendirme (Folder-based routing: page.tsx, layout.tsx, loading.tsx, error.tsx) mantığını kur.",
      "Metadata API ile dinamik SEO etiketleri oluştur."
    ],
    seniorTip: "Pages Router artık eski teknolojidir. Yeni projelerde ve modern iş ilanlarında %100 App Router aranır.",
    interviewQuestion: "CSR (Client Side Rendering) ile SSR (Server Side Rendering) arasındaki farklar ve SEO etkisi nedir?"
  },
  {
    id: 62,
    month: 3,
    week: 9,
    day: 62,
    title: "React Server Components (RSC) vs Client Components",
    summary: "Sunucuda çalışan bileşenler ve 'use client' direktifinin gerçek anlamı.",
    tasks: [
      "Server Component'lerin sıfır istemci bundle boyutu avantajını gör.",
      "Ne zaman 'use client' kullanılmalı? (useState, onClick, browser API'leri).",
      "Server ve Client bileşenlerini iç içe geçirme (composition) kurallarını test et."
    ],
    seniorTip: "Her dosyanın başına refleks olarak 'use client' yazma! Sadece kullanıcı etkileşimi (state/event) olan en küçük yaprak bileşeni (leaf component) client yap.",
    interviewQuestion: "React Server Components (RSC) nedir? Geleneksel SSR'dan farkı nedir?"
  },
  {
    id: 63,
    month: 3,
    week: 9,
    day: 63,
    title: "Veri Çekme (Data Fetching), Caching & Revalidation",
    summary: "Next.js'te fetch geliştirmeleri, ISR (Incremental Static Regeneration) ve Tag-based revalidation.",
    tasks: [
      "Server component içinde doğrudan async/await ile veritabanı veya API'den veri çek.",
      "revalidateTime (ISR) ve cache seçeneklerini (force-cache, no-store) yapılandır.",
      "revalidatePath ve revalidateTag fonksiyonlarının çalışma mantığını anla."
    ],
    seniorTip: "ISR sayesinde sayfan statik HTML hızında açılır ama arka planda belirlenen sürede bir sessizce güncellenir. Mükemmel hız ve taze veri!",
    interviewQuestion: "Incremental Static Regeneration (ISR) nedir ve e-ticaret siteleri için neden devrimdir?"
  },
  {
    id: 64,
    month: 3,
    week: 9,
    day: 64,
    title: "Server Actions: API Yazmadan Sunucuda Kod Çalıştırma",
    summary: "Form submit işlemlerinde REST API katmanını ortadan kaldıran Next.js Server Actions.",
    tasks: [
      "'use server' direktifi ile doğrudan sunucuda çalışan bir mutasyon fonksiyonu yaz.",
      "Form submit olduğunda Server Action çağır ve revalidatePath ile listeyi anında güncelle.",
      "Zod ile sunucu tarafı veri doğrulamasını (Server-side validation) bağla."
    ],
    seniorTip: "Server Actions çağrılırken arka planda POST isteği atar. Asla istemciden gelen veriye güvenme; Zod ile sunucu fonksiyonunun ilk satırında doğrulama yap.",
    interviewQuestion: "Next.js Server Actions nedir? REST endpoint'lerine göre avantajları nelerdir?"
  },
  {
    id: 65,
    month: 3,
    week: 9,
    day: 65,
    title: "Next.js Route Handlers (API Routes)",
    summary: "Kendi REST API endpoint'lerini yazma: app/api/.../route.ts mimarisi.",
    tasks: [
      "GET, POST, PATCH, DELETE metotlarını destekleyen bir Route Handler yaz.",
      "NextRequest ve NextResponse objelerini incele.",
      "HTTP Status kodlarını ve JSON yanıtlarını doğru formatta dön."
    ],
    seniorTip: "Eğer veriyi sadece kendi uygulamanın UI'ında güncelleyeceksen Server Actions kullan. Dış sistemlere (mobil app, webhook vb.) açık endpoint lazımsa Route Handler yaz.",
    interviewQuestion: "Ne zaman Server Action, ne zaman Route Handler (API Route) kullanılmalıdır?"
  },
  {
    id: 66,
    month: 3,
    week: 9,
    day: 66,
    title: "Next.js Middleware: İstekleri Önleme & Yönlendirme",
    summary: "Tüm isteklerin geçtiği kapı: Auth kontrolü, coğrafi yönlendirme ve güvenlik başlıkları.",
    tasks: [
      "middleware.ts dosyası oluştur ve matcher kuralları tanımla.",
      "Kullanıcının auth cookie'si yoksa login sayfasına yönlendiren bir mantık kur.",
      "İstek başlıklarına (headers) özel parametreler eklemeyi dene."
    ],
    seniorTip: "Middleware Edge Runtime üzerinde çalışır. Node.js'e özgü ağır kütüphaneleri (büyük DB client'ları vb.) middleware içine koyamazsın, hafif tut.",
    interviewQuestion: "Next.js Middleware nedir ve Edge Runtime kısıtlamaları nelerdir?"
  },
  {
    id: 67,
    month: 3,
    week: 9,
    day: 67,
    title: "Haftalık Proje: Çok Dilli & SEO Uyumlu Blog / Medya Platformu",
    summary: "MDX veya harici API'den içerik çeken, ISR ve dinamik OG image destekli Next.js projesi.",
    tasks: [
      "Dinamik blog rotaları kur (/blog/[slug]).",
      "generateStaticParams ile sayfaları build zamanında statik HTML olarak üret.",
      "generateMetadata ile sosyal medya paylaşımları için OpenGraph etiketleri ekle."
    ],
    seniorTip: "generateStaticParams kullanarak 10.000 makaleyi anında açılan statik sayfalara dönüştürebilirsin.",
    interviewQuestion: "Next.js generateStaticParams fonksiyonu ne işe yarar?"
  },

  // HAFTA 10
  {
    id: 68,
    month: 3,
    week: 10,
    day: 68,
    title: "Authentication Mimarisi: NextAuth / Auth.js Temelleri",
    summary: "Güvenli oturum açma: OAuth (Google, GitHub) ve Credentials Provider.",
    tasks: [
      "NextAuth (Auth.js v5) kurulumunu yap.",
      "GitHub OAuth sağlayıcısını bağla ve test et.",
      "Kullanıcı oturum bilgilerini (session) Server Component ve Client Component'lerde oku."
    ],
    seniorTip: "Kendi şifre ve token sistemini sıfırdan yazmak yerine Auth.js gibi test edilmiş standart kütüphaneleri kullanmak güvenlik açıklarını engeller.",
    interviewQuestion: "OAuth 2.0 akışı nasıl çalışır? Access Token ile Refresh Token farkı nedir?"
  },
  {
    id: 69,
    month: 3,
    week: 10,
    day: 69,
    title: "Rol Tabanlı Yetkilendirme (RBAC: Admin vs User)",
    summary: "Kullanıcı rollerine göre sayfaları ve API işlemlerini kısıtlama.",
    tasks: [
      "Session içine user role bilgisini ekle.",
      "Admin paneli için özel middleware ve sayfa seviyesinde rol kontrolü yap.",
      "Yetkisiz kullanıcılar için 403 Forbidden veya Unauthorized sayfaları tasarla."
    ],
    seniorTip: "Sadece frontend butonunu gizlemek yetkilendirme DEĞİLDİR! Kötü niyetli kullanıcı butonu gizlesen de API isteğini atabilir. Yetkiyi mutlaka sunucu fonksiyonunda doğrula.",
    interviewQuestion: "Frontend vs Backend yetkilendirme (Authorization) prensipleri nelerdir?"
  },
  {
    id: 70,
    month: 3,
    week: 10,
    day: 70,
    title: "Görsel & Font Optimizasyonu (next/image, next/font)",
    summary: "LCP puanını uçurma: Otomatik WebP/AVIF dönüştürme ve Layout Shift önleme.",
    tasks: [
      "next/font/google ile Google Fonts'u sıfır network gecikmesiyle (self-hosted) yükle.",
      "next/image kullanarak genişlik, yükseklik ve responsive srcset optimizasyonlarını gör.",
      "priority özniteliği ile ekranın üstündeki (above the fold) ana görseli anında yüklet."
    ],
    seniorTip: "Düz <img> etiketi kullanırsan görsel yüklenirken sayfa aşağı kayar ve CLS (Cumulative Layout Shift) puanın düşer. next/image görsel boyutunu rezerve ederek bunu önler.",
    interviewQuestion: "next/image arka planda neleri otomatik optimize eder?"
  },
  {
    id: 71,
    month: 3,
    week: 10,
    day: 71,
    title: "Interpreting Core Web Vitals: LCP, FID/INP, CLS",
    summary: "Google'ın sıralama kriteri olan hız metriklerini kod seviyesinde çözme.",
    tasks: [
      "INP (Interaction to Next Paint) metriğini incele.",
      "Sayfa yükleme performansını Chrome Performance sekmesinde profille.",
      "Next.js Speed Insights veya Vercel Analytics bağla."
    ],
    seniorTip: "Google FID yerine INP metriğine geçti. Tıklama sonrası ana thread'i bloklayan ağır JS kodları INP puanını mahveder.",
    interviewQuestion: "INP (Interaction to Next Paint) nedir ve React tarafında nasıl iyileştirilir?"
  },
  {
    id: 72,
    month: 3,
    week: 10,
    day: 72,
    title: "Next.js Paralel ve Önleyici Rotalar (Parallel & Intercepting Routes)",
    summary: "Instagram/Twitter modal mimarisi: Sayfayı yenilemeden URL değiştiren modallar.",
    tasks: [
      "Slots (@modal) kullanarak Paralel Rota oluştur.",
      "(..) intercepting route sözdizimi ile tıklandığında modal açılan, yenilenince tam sayfa olan yapı kur.",
      "Escape tuşuna basıldığında router.back() ile modalı kapat."
    ],
    seniorTip: "Bu özellik Next.js'in en havalı ve modern özelliklerindendir. Portföyünde bunu gösterirsen mülakatçının gözleri parlar.",
    interviewQuestion: "Next.js Intercepting Routes hangi kullanım senaryoları için tasarlanmıştır?"
  },
  {
    id: 73,
    month: 3,
    week: 10,
    day: 73,
    title: "Haftalık Proje: Sosyal İçerik Platformu (Auth + Server Actions + Modallar)",
    summary: "Gönderi paylaşma, beğenme, profil detayları ve intercepting route fotoğraf görüntüleyicisi.",
    tasks: [
      "NextAuth ile kullanıcı girişi ekle.",
      "Server Action ile post paylaşımı ve yorum ekleme yap.",
      "Fotoğrafa tıklandığında Instagram benzeri modal pencere aç."
    ],
    seniorTip: "Optimistic updates kullanarak beğeni butonuna basıldığı an sayacı 1 artır, backend cevabını bekleme.",
    interviewQuestion: "Server-side state ile client-side optimistic UI nasıl senkronize tutulur?"
  },

  // HAFTA 11-12 Devamı (özet ve kritik günler)
  {
    id: 74,
    month: 3,
    week: 11,
    day: 74,
    title: "Dosya Yükleme (File Upload) & Cloud Storage (AWS S3 / Uploadthing)",
    summary: "Büyük dosyaları sunucuyu tıkamadan doğrudan bulut depolamaya yükleme.",
    tasks: [
      "Presigned URL mantığını anla.",
      "Uploadthing veya Supabase Storage ile görsel yükleme entegrasyonu kur.",
      "Görsel formatı ve boyut doğrulamalarını hem client hem server tarafında yap."
    ],
    seniorTip: "Dosyaları asla kendi web sunucunun diskine yükleme! Sunucun büyüdüğünde (horizontal scale) o dosyalar kaybolur. Her zaman harici nesne depolama (S3) kullan.",
    interviewQuestion: "Presigned URL nedir ve dosya yüklemede neden tercih edilir?"
  },
  {
    id: 75,
    month: 3,
    week: 11,
    day: 75,
    title: "Ödeme Entegrasyonları Temelleri (Stripe / Iyzico Mantığı)",
    summary: "Webhook güvenliği, Idempotency ve ödeme yaşam döngüsü.",
    tasks: [
      "Stripe Checkout veya test kartlarıyla ödeme akışını incele.",
      "Webhook endpoint'i oluştur ve imza (signature) doğrulamasını yap.",
      "Idempotency Key mantığı ile çift çekim yapılmasını engellemeyi öğren."
    ],
    seniorTip: "Mülakatçılar 'Kullanıcı ödeme yaparken interneti koptu, parası çekildi ama sipariş oluşmadı, ne yaparsın?' diye sorar. Cevap: Güvenli Webhook dinleme ve Idempotency!",
    interviewQuestion: "Idempotency nedir ve ödeme sistemlerinde neden hayati öneme sahiptir?"
  },
  {
    id: 85,
    month: 3,
    week: 12,
    day: 85,
    title: "3. Ay Büyük Proje - Fullstack SaaS Girişim Mimarisi",
    summary: "Gerçek abonelik modeli olan, Auth, AI API veya veri analizi sunan Next.js SaaS uygulaması.",
    tasks: [
      "Mimari tasarımı, veritabanı şemasını ve ekran akışlarını çıkar.",
      "Landing page, Dashboard, Settings ve Fatura sayfalarını tasarla.",
      "Performans ve SEO için tüm rotaları optimize et."
    ],
    seniorTip: "Portföyüne oyuncak to-do uygulaması koyarsan elenirsin. Gerçek bir problemi çözen, ödeme veya üyelik alan bir SaaS projesi koyarsan iş teklifi kaparsın.",
    interviewQuestion: "SaaS uygulamalarında çoklu kiracılık (Multi-tenancy) mimarisi nasıl kurulur?"
  },
  {
    id: 90,
    month: 3,
    week: 12,
    day: 90,
    title: "3. Ay Sonu Değerlendirmesi: Modern Frontend & Next.js Üstatlığı",
    summary: "3 ay bittiğinde: Frontend tarafında kıdemli bir mühendisin bilmesi gereken her şeye hakimsin.",
    tasks: [
      "Next.js projesini canlıya al ve özel domain bağla.",
      "Frontend performans raporunu LinkedIn'de paylaş.",
      "Artık Backend'in derinliklerine (Node.js, SQL, Docker) dalmaya hazırsın!"
    ],
    seniorTip: "3. ayın sonunda piyasadaki pek çok 2-3 yıllık geliştiriciden daha güncel ve temiz Next.js yazıyorsun. Şimdi backend motorunu inşa edeceğiz.",
    interviewQuestion: "Monolitik mimari ile Headless mimari arasındaki farklar nelerdir?"
  },

  // ================= AY 4 =================
  {
    id: 91,
    month: 4,
    week: 13,
    day: 91,
    title: "Node.js İç Mimarisi & libuv",
    summary: "Node.js'in çalışma motoru: Event Loop fazları, Thread Pool ve Worker Threads.",
    tasks: [
      "Node.js Event Loop'unun 6 fazını (Timers, Pending, Poll, Check, Close vb.) öğren.",
      "libuv kütüphanesinin arka plandaki C++ thread havuzunu incele.",
      "CPU-heavy (işlemciyi kilitleyen) işlemler için Worker Threads kullanımını test et."
    ],
    seniorTip: "Node.js I/O işlemlerinde (veritabanı, dosya okuma, ağ) süper hızlıdır ama CPU işlemlerinde (ağır kriptografi, video işleme) ana kanalı kilitler. Bu durumlarda Worker Thread veya mikroservis kullanılır.",
    interviewQuestion: "Node.js CPU-intensive görevleri nasıl yönetir? Worker Threads ne zaman kullanılır?"
  },
  {
    id: 92,
    month: 4,
    week: 13,
    day: 92,
    title: "Express.js & Katmanlı Mimari (Controller - Service - Repository)",
    summary: "Spagetti kod yerine profesyonel backend mimarisi ve Middleware zinciri.",
    tasks: [
      "Express.js projesini TypeScript ile kur.",
      "Middleware mantığı ile logger ve rate-limiter middleware'leri yaz.",
      "Controller, Service ve Repository katmanlarını birbirinden soyutla."
    ],
    seniorTip: "İş mantığını (business logic) Controller içine yazan geliştirici acemidir. Controller sadece HTTP istek/yanıtını yönetir; mantık Service'tedir, veri erişimi Repository'dedir.",
    interviewQuestion: "Katmanlı mimarinin (Layered Architecture) yazılım test edilebilirliğine ve bakımına faydası nedir?"
  },
  {
    id: 95,
    month: 4,
    week: 14,
    day: 95,
    title: "İlişkisel Veritabanları & PostgreSQL Temelleri",
    summary: "Tablolar, Foreign Keys, İlişkiler (1-1, 1-N, N-N) ve Normalizasyon.",
    tasks: [
      "PostgreSQL'i Docker veya yerel olarak ayağa kaldır (ya da Supabase/Neon kullan).",
      "Kullanıcılar, Siparişler ve Ürünler tabloları tasarlayarak foreign key ilişkilerini kur.",
      "Veritabanı normalizasyonunun 1NF, 2NF, 3NF kurallarını öğren."
    ],
    seniorTip: "NoSQL (MongoDB) modası geçicidir, SQL kalıcıdır. Finans, e-ticaret ve kurumsal sistemlerin %95'i ilişkisel veritabanı (PostgreSQL) kullanır.",
    interviewQuestion: "SQL ile NoSQL arasındaki ACID farkları ve kullanım senaryoları nelerdir?"
  },
  {
    id: 100,
    month: 4,
    week: 15,
    day: 100,
    title: "Prisma ORM & Veritabanı Migrasyonları (Migrations)",
    summary: "Tip güvenli veritabanı sorguları ve şema versiyonlama.",
    tasks: [
      "schema.prisma dosyasını oluştur ve modelleri tanımla.",
      "prisma migrate dev komutu ile veritabanına migrasyon bas.",
      "Prisma Client ile CRUD sorguları yaz ve TypeScript otomatik tip tamamlama gücünü gör."
    ],
    seniorTip: "Canlı veritabanında asla elle sütun silip ekleme! Her değişiklik versiyon kontrolü olan bir 'migration' dosyasıyla yapılmalıdır.",
    interviewQuestion: "ORM nedir? ORM kullanmanın avantajları ve N+1 sorgu problemi gibi dezavantajları nelerdir?"
  },
  {
    id: 105,
    month: 4,
    week: 15,
    day: 105,
    title: "Veritabanı İndeksleme (Indexing) & N+1 Sorgu Problemi",
    summary: "2 senelik backendcileri eleyen kritik konu: Sorgu optimizasyonu ve EXPLAIN ANALYZE.",
    tasks: [
      "100.000 sahte kullanıcı oluştur ve e-posta sorgusunun milisaniyesini ölç.",
      "email sütununa B-Tree Index ekle ve sorgu süresinin 100 kat hızlandığını gör.",
      "N+1 sorgu problemini kodla ve Prisma'nın `include` veya SQL JOIN ile bunu nasıl 1 sorguya düşürdüğünü gözlemle."
    ],
    seniorTip: "Senior backend mülakatında mutlaka 'N+1 problemi nedir?' sorulur. Bir liste çekerken her eleman için ayrı sorgu atmak felakettir. Çözüm: Eager Loading veya JOIN.",
    interviewQuestion: "N+1 sorgu problemi nedir? Nasıl tespit edilir ve nasıl çözülür?"
  },
  {
    id: 110,
    month: 4,
    week: 16,
    day: 110,
    title: "Kimlik Doğrulama: JWT (Access + Refresh Token) & Hashleme",
    summary: "Bcrypt şifreleme, JWT imzalama, Token rotation ve güvenlik.",
    tasks: [
      "bcrypt ile kullanıcı şifresini salt ekleyerek güvenli hashle.",
      "Kısa ömürlü (15 dk) Access Token ve uzun ömürlü (7 gün) Refresh Token mimarisi kur.",
      "Refresh Token'ı HttpOnly Cookie içinde saklayarak token tazeleme endpoint'i yaz."
    ],
    seniorTip: "Şifreleri asla düz metin (plain text) kaydetme. MD5 veya SHA-256 da şifre hashlemek için YETERSİZDİR. Bcrypt veya Argon2 kullanmalısın.",
    interviewQuestion: "Access Token neden kısa ömürlü tutulmalıdır? Refresh Token Rotation nedir?"
  },
  {
    id: 115,
    month: 4,
    week: 16,
    day: 115,
    title: "Önbellekleme (Caching) & Redis Entegrasyonu",
    summary: "Veritabanı yükünü %90 azaltma: In-memory cache ve TTL stratejileri.",
    tasks: [
      "Redis'i yerel veya Docker üzerinden bağla.",
      "Sık okunan ama az değişen bir sorguyu (örneğin popüler ürünler) Redis'e önbelleğe al.",
      "Veri güncellendiğinde Cache Invalidation (önbellek temizleme) mekanizmasını tetikle."
    ],
    seniorTip: "Yazılım dünyasının iki zor şeyi vardır: 1. İsimlendirme, 2. Cache Invalidation! Eski veriyi önbellekten silmeyi unutursan kullanıcı hatalı veri görür.",
    interviewQuestion: "Redis nedir ve veritabanı önünde Cache katmanı olarak nasıl çalışır?"
  },
  {
    id: 120,
    month: 4,
    week: 16,
    day: 120,
    title: "4. Ay Sonu: Production-Ready REST API Projesi & Dokümantasyon",
    summary: "Swagger/OpenAPI dokümantasyonlu, Auth, Rate Limiting, Logging ve PostgreSQL destekli API.",
    tasks: [
      "Winston veya Pino ile profesyonel loglama sistemi kur.",
      "Swagger UI ile API dokümantasyonunu otomatik üret.",
      "Tüm API'yi Dockerize et (Dockerfile ve docker-compose.yml)."
    ],
    seniorTip: "Docker bilen bir Fullstack geliştirici, 'Benim bilgisayarımda çalışıyordu' bahanesinden sonsuza dek kurtulur. Her şirkette Docker zorunludur.",
    interviewQuestion: "Docker Container ile Virtual Machine arasındaki fark nedir?"
  },

  // ================= AY 5 =================
  {
    id: 121,
    month: 5,
    week: 17,
    day: 121,
    title: "Sistem Tasarımı (System Design) Temelleri: Yük Dengeleme & Ölçeklenme",
    summary: "Dikey (Vertical) vs Yatay (Horizontal) Ölçeklenme, Load Balancer (Nginx/Cloudflare).",
    tasks: [
      "Yatay ve dikey ölçeklenme arasındaki maliyet ve mimari farkları öğren.",
      "Stateless (durumsuz) mimarinin yatay ölçeklenmedeki önemini anla.",
      "Basit bir CDN ve Reverse Proxy akış şeması çiz."
    ],
    seniorTip: "Junior'lar sadece kod yazar, Senior'lar sistemin 100.000 eşzamanlı kullanıcıda nasıl çökmeyeceğini tasarlar.",
    interviewQuestion: "Stateless mimari nedir ve sunucuların yatay ölçeklenmesini nasıl mümkün kılar?"
  },
  {
    id: 125,
    month: 5,
    week: 17,
    day: 125,
    title: "WebSockets & Gerçek Zamanlı (Real-Time) İletişim",
    summary: "HTTP polling vs WebSockets: Gerçek zamanlı bildirim ve mesajlaşma.",
    tasks: [
      "Socket.io veya yerel WebSocket ile çift yönlü iletişim kanalı kur.",
      "Kullanıcı çevrimiçi/çevrimdışı durumunu anlık yayınla.",
      "Birden fazla sunucuda WebSocket senkronizasyonu için Redis Pub/Sub mantığını öğren."
    ],
    seniorTip: "Kullanıcıya veri geldi mi diye 2 saniyede bir fetch atmak (polling) sunucuyu boğar. İki yönlü canlı akış için WebSocket kullan.",
    interviewQuestion: "HTTP ile WebSocket protokolleri arasındaki el sıkışma (handshake) ve mimari farklar nelerdir?"
  },
  {
    id: 130,
    month: 5,
    week: 18,
    day: 130,
    title: "Uçtan Uca (E2E) Test: Playwright",
    summary: "Kullanıcının yerine siteyi test eden otomatik robotlar.",
    tasks: [
      "Playwright kurulumunu yap.",
      "Kullanıcının kayıt olup, ürünü sepete ekleyip, ödemeyi tamamladığı 'Happy Path' senaryosunu baştan sona otomatik test et.",
      "Testi headless ve görsel modda çalıştırarak ekran görüntülerini incele."
    ],
    seniorTip: "Canlıya çıkmadan önce Playwright testin yeşil yanıyorsa gece rahat uyursun.",
    interviewQuestion: "E2E testlerin Unit testlere göre avantaj ve dezavantajları nelerdir? Test Piramidi nedir?"
  },
  {
    id: 135,
    month: 5,
    week: 18,
    day: 135,
    title: "CI/CD Pipeline Kurulumu (GitHub Actions)",
    summary: "Kodu pushladığın an otomatik test, build ve canlıya alma otomasyonu.",
    tasks: [
      ".github/workflows/deploy.yml dosyası oluştur.",
      "Pull Request açıldığında otomatik linter ve test çalıştıran GitHub Action yaz.",
      "Main branch'e merge edildiğinde otomatik production deployment tetikle."
    ],
    seniorTip: "Manuel olarak sunucuya FTP veya SSH ile bağlanıp kod atan devir 10 yıl önce bitti. Her şey CI/CD ile otomatik olmalı.",
    interviewQuestion: "CI (Continuous Integration) ile CD (Continuous Deployment) arasındaki fark nedir?"
  },
  {
    id: 140,
    month: 5,
    week: 19,
    day: 140,
    title: "5. Ay Capstone Proje: Production Fullstack SaaS",
    summary: "Tüm 5 ayın zirve eseri: Next.js + PostgreSQL + Prisma + Auth + Stripe + Tailwind.",
    tasks: [
      "İş fikrini netleştir (örneğin: Yapay Zeka Destekli CV Analiz Platformu veya Takım Görev Yönetimi).",
      "Veritabanı ilişkilerini, backend API ve frontend arayüzünü uçtan uca bağla.",
      "Canlıya al ve gerçek kullanıcı testi yap."
    ],
    seniorTip: "Bu proje senin mülakattaki en büyük kozun olacak. Mülakatçıya 'Ben eğitim projeleri değil, yayında olan ve gerçek kullanıcı alan bu SaaS'ı yaptım' dediğin an iş senindir.",
    interviewQuestion: "Büyük ölçekli bir uygulamayı sıfırdan canlıya alma sürecini baştan sona nasıl yönetirsin?"
  },
  {
    id: 145,
    month: 5,
    week: 20,
    day: 145,
    title: "Teknik Algoritma & Veri Yapıları Kampı (LeetCode Blind 75 JS)",
    summary: "Mülakat canlı kodlama (Live Coding) sorularını rahatça çözme teknikleri.",
    tasks: [
      "Two Sum, Valid Anagram, Two Pointers ve Sliding Window tekniklerini pratik et.",
      "Zaman karmaşıklığı (Big O: O(1), O(n), O(n log n), O(n²)) analizini her çözümde yap.",
      "JavaScript Map ve Set veri yapılarının arama hızındaki O(1) avantajını kullan."
    ],
    seniorTip: "İç içe iki for döngüsü yazarsan O(n²) olur ve mülakatta elenirsin. Bir Hash Map (nesne/Map) kullanarak karmaşıklığı O(n)'e düşürmeyi öğren.",
    interviewQuestion: "Big O gösterimi nedir? Bir algoritmanın zaman ve alan karmaşıklığı nasıl hesaplanır?"
  },
  {
    id: 148,
    month: 5,
    week: 20,
    day: 148,
    title: "CV, GitHub & LinkedIn Optimizasyonu",
    summary: "İK ve Teknik Liderlerin dikkatini 6 saniyede çekme stratejisi.",
    tasks: [
      "Tek sayfalık, ATS uyumlu (Applicant Tracking System), sade ve temiz bir yazılımcı CV'si hazırla.",
      "Projelerinin canlı demo linklerini ve GitHub repolarını ekle.",
      "LinkedIn başlığını 'Fullstack Developer | Next.js, TypeScript, Node.js, PostgreSQL' olarak güncelle ve öne çıkan projelerini sabitle."
    ],
    seniorTip: "CV'ne 'HTML/CSS/JS biliyorum' yazma. Başarılarını etki odaklı yaz: 'Next.js App Router ve Redis önbellekleme mimarisi ile sayfa yanıt süresini %45 optimize ettim.'",
    interviewQuestion: "Kendinizi ve en gurur duyduğunuz projenizi 2 dakikada nasıl özetlersiniz?"
  },
  {
    id: 149,
    month: 5,
    week: 20,
    day: 149,
    title: "Davranışsal Mülakatlar (Behavioral Interview) & STAR Metodu",
    summary: "Teknik kadar önemli olan insan ilişkileri ve kriz yönetimi anlatımı.",
    tasks: [
      "STAR Metodunu öğren: Situation (Durum), Task (Görev), Action (Eylem), Result (Sonuç).",
      "'Daha önce yaşadığınız en büyük teknik kriz neydi ve nasıl çözdünüz?' sorusuna STAR metoduyla hikaye hazırla.",
      "'Bir takım arkadaşınızla fikir ayrılığına düştüğünüzde nasıl yaklaşırsınız?' sorusunu prova et."
    ],
    seniorTip: "Şirketler sadece dahi kod yazanları değil, birlikte çalışması keyifli olan, egosu düşük ve öğrenmeye aç insanları işe alır.",
    interviewQuestion: "STAR metodu nedir ve davranışsal mülakatlarda nasıl kullanılır?"
  },
  {
    id: 150,
    month: 5,
    week: 20,
    day: 150,
    title: "BÜYÜK GÜN: İş Başvuruları & Mülakat Maratonu Başlıyor!",
    summary: "5 aylık disiplinli çalışmanın zaferi: Artık mülakatlarda soruları bekleyen değil, yöneten taraftasın.",
    tasks: [
      "İlk 20 hedeflenen şirkete özelleştirilmiş başvuru gönder.",
      "Teknik liderlere LinkedIn üzerinden saygılı ve proje odaklı direkt mesajlar at.",
      "Her mülakat sonrasında notlar al ve eksiklerini anında kapat."
    ],
    seniorTip: "İlk 2-3 mülakatta reddedilmek sürecin doğal bir parçasıdır. Her 'hayır' seni doğru 'evet'e bir adım daha yaklaştırır. Sen temelleri sağlam attın, kendine güven!",
    interviewQuestion: "Şirketimize ve ekibimize katabileceğiniz en belirgin değer nedir?"
  }
];

const SENIOR_SECRETS = [
  {
    title: "2 Senelik Yazılımcı vs Senior Farkı #1: İsimlendirme & Okunabilirlik",
    desc: "Acemi yazılımcı zeki görünmek için tek satırda anlaşılmaz kod yazar. Kıdemli yazılımcı ise 6 ay sonra o koda bakacak takım arkadaşının anlaması için açık, kendini belgeleyen (self-documenting) kod yazar.",
    quote: "Herkes bilgisayarın anlayacağı kod yazabilir. İyi programcılar insanların anlayacağı kod yazar. — Martin Fowler"
  },
  {
    title: "2 Senelik Yazılımcı vs Senior Farkı #2: Premature Optimization Tuzağı",
    desc: "Sorun olmadan optimizasyon yapmaya çalışmak kodun mimarisini çöp eder. Önce çalışan temiz kodu yaz, darboğaz (bottleneck) varsa ölç (profiler ile) ve sadece o noktayı optimize et.",
    quote: "Erken optimizasyon tüm kötülüklerin anasıdır. — Donald Knuth"
  },
  {
    title: "2 Senelik Yazılımcı vs Senior Farkı #3: Hata Mesajlarından Korkmamak",
    desc: "Acemi kırmızı hatayı görünce panikler veya direkt yapay zekaya atıp anlamadan dener. Kıdemli ise hatanın stack trace'ini okur: Hangi dosya, hangi satır, hangi tip uyuşmazlığı? Hata bir hediye gibi okunmalıdır.",
    quote: "Debugging, kod yazmaktan iki kat daha zordur. Kodu olabildiğince akıllıca yazarsanız, debug edecek kadar zeki olamazsınız."
  },
  {
    title: "2 Senelik Yazılımcı vs Senior Farkı #4: Kütüphane Bağımlılığı vs Web Standartları",
    desc: "Her küçük iş için 'npm i bilmemne' yapanlar güvenlik ve bundle boyutu krizleri yaşar. Modern JavaScript API'lerini (fetch, Intl, structuredClone, AbortController) derinlemesine bilenler daha az bağımlılıkla daha sağlam işler çıkarır.",
    quote: "En az kod, en az bakım gerektiren koddur."
  },
  {
    title: "2 Senelik Yazılımcı vs Senior Farkı #5: Veritabanı ve Ağ Maliyeti Bilinci",
    desc: "Acemi frontendci backend'e sınırsız istek atar, acemi backendci veritabanına döngü içinde sorgu atar. Kıdemli her ağ paketinin ve her disk okumasının milisaniye ve para maliyetini hesaplar.",
    quote: "Mühendislik, eldeki kısıtlar altında en doğru ödünleşimi (trade-off) seçme sanatıdır."
  }
];

const INTERVIEW_FLASHCARDS = [
  {
    category: "JavaScript",
    question: "JavaScript'te Closure (Kapanış) nedir ve gerçek hayatta nerede kullanılır?",
    answer: "Bir fonksiyonun, kendi lexical scope'u dışındaki bir üst fonksiyonun değişkenlerine, üst fonksiyon çalışmasını tamamlasa bile erişebilme yeteneğidir. Private değişken oluşturmada, factory fonksiyonlarda, currying ve React'in useState hook'unun arka planında hafıza tutmak için kullanılır."
  },
  {
    category: "JavaScript",
    question: "Event Loop nasıl çalışır? Microtask ile Macrotask farkı nedir?",
    answer: "JS tek kanallıdır (single-threaded). Call stack boşaldığında Event Loop devreye girer. Önce Microtask Queue (Promises, queueMicrotask, MutationObserver) tamamen boşaltılır. Ardından Macrotask Queue'dan (setTimeout, setInterval, I/O) tek bir görev alınıp çalıştırılır ve döngü tekrarlanır."
  },
  {
    category: "React",
    question: "Virtual DOM nedir ve React neden doğrudan DOM'u güncellemez?",
    answer: "Gerçek DOM ağacı çok ağırdır ve her değişiklikte tarayıcı 'reflow' ve 'repaint' maliyeti üretir. Virtual DOM, gerçek DOM'un bellekteki hafif bir JavaScript nesne kopyasıdır. State değiştiğinde React yeni VDOM üretir, öncekiyle kıyaslar (Diffing/Reconciliation) ve sadece değişen kısımları tek seferde gerçek DOM'a yansıtır."
  },
  {
    category: "React",
    question: "useEffect bağımlılık dizisi (dependency array) nasıl çalışır ve cleanup fonksiyonu ne zaman tetiklenir?",
    answer: "Boş dizi ([]) sadece bileşen ilk kez yüklendiğinde (mount) çalışır. Dolu dizi ([a, b]) bu değerlerden biri değiştiğinde yeniden çalışır. Dizi verilmezse her render'da çalışır. Cleanup fonksiyonu ise bileşen ekrandan kaldırılırken (unmount) ve bir sonraki effect çalışmadan hemen önce hafıza sızıntılarını temizlemek için tetiklenir."
  },
  {
    category: "Next.js",
    question: "React Server Components (RSC) ile Client Components arasındaki temel fark nedir?",
    answer: "Server Component'ler yalnızca sunucuda çalışır, istemciye (tarayıcıya) sıfır JavaScript kodu gönderir ve doğrudan veritabanı veya sunucu kaynaklarına erişebilir. Client Component'ler ise 'use client' direktifiyle tanımlanır; tarayıcıda çalışır, state (useState), effect ve olay dinleyicileri (onClick) barındırabilir."
  },
  {
    category: "Backend & SQL",
    question: "İlişkisel veritabanında N+1 sorgu problemi nedir ve nasıl çözülür?",
    answer: "Bir ana kayıt listesi (örneğin 100 kullanıcı) çekildikten sonra, her bir kaydın ilişkili verisini (örneğin siparişleri) almak için döngü içinde 100 ayrı sorgu atılmasıdır (toplam 1 + 100 = 101 sorgu). Çözüm: Eager loading yaparak ilişkili veriyi tek bir SQL JOIN sorgusu ile veya 'IN (...)' operatörü ile topluca çekmektir."
  },
  {
    category: "Güvenlik",
    question: "JWT token'lar neden LocalStorage'da saklanmamalıdır? En güvenli alternatif nedir?",
    answer: "LocalStorage tarayıcıdaki tüm JavaScript kodları tarafından okunabilir. Sitede oluşabilecek en ufak bir XSS (Cross-Site Scripting) açığında kötü niyetli scriptler token'ı anında çalar. En güvenli yöntem: Token'ı JavaScript'in erişemediği 'HttpOnly, Secure, SameSite=Strict' cookie'ler içinde saklamaktır."
  },
  {
    category: "Mimari",
    question: "Idempotency (Eşgüçlülük) nedir ve API tasarımında neden önemlidir?",
    answer: "Bir işlemin bir kez yapılması ile birden çok kez tekrarlanmasının sistem üzerinde aynı sonucu üretmesidir. Örneğin GET, PUT ve DELETE işlemleri idempotenttir. POST genellikle değildir. Ödeme ve sipariş sistemlerinde ağ kesintisinde tekrar gönderilen isteklerin mükerrer çekim yapmaması için idempotency key'ler kullanılır."
  }
];

// Browser & Node universal export
if (typeof window !== 'undefined') {
  window.DEV5MONTHS_DATA = { MONTHS, ROADMAP_DAYS, SENIOR_SECRETS, INTERVIEW_FLASHCARDS };
}
if (typeof globalThis !== 'undefined') {
  globalThis.DEV5MONTHS_DATA = { MONTHS, ROADMAP_DAYS, SENIOR_SECRETS, INTERVIEW_FLASHCARDS };
}
})();
