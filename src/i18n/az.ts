/**
 * Azərbaycan dili — mənbə dil. `en.ts` və `ru.ts` bu faylın strukturunu
 * təkrarlayır; tərcümə edilməmiş açarlar buradan fallback edir.
 *
 * Səhifədəki HƏR mətn buradan gəlir — komponentlərin içində sabit mətn yoxdur.
 */
const az = {
  meta: {
    title:
      "Voint — Zənglərinizə Azərbaycan dilində 24/7 cavab verən səsli AI agent",
    description:
      "Voint — bizneslər üçün səsli AI agent və zəng CRM-i. Agent sizin məlumat bazanızdan cavab verir, transkript və sorğular panelinizə düşür.",
    ogAlt: "Voint — bizneslər üçün səsli AI agent və zəng CRM-i",
  },

  nav: {
    features: "İmkanlar",
    panel: "Panel",
    pricing: "Qiymət",
    login: "Panelə giriş",
    cta: "Pilotda iştirak et",
    skipToContent: "Əsas məzmuna keç",
  },

  hero: {
    title: "Zənglərinizə Azərbaycan dilində 24/7 cavab verir.",
    subtitle:
      "Voint — bizneslər üçün səsli AI agent və zəng CRM-i. Müştəri zəng edir, agent sizin məlumat bazanızdan cavab verir, sorğu panelinizə düşür.",
    ctaPrimary: "Pilotda iştirak et",
    ctaSecondary: "Necə işləyir",
    demoLink: "Demo ilə tanış ol",
    videoLabel: "Voint təqdimat videosu",
  },

  platform: {
    title: "Bir zəngdə üç iş görülür.",
    note: "Texnika icarəsi, klinika və restoranlar üçün hazır şablonlar.",
    cards: [
      {
        icon: "book",
        title: "Bilik bazası",
        body: "Qiymətləriniz, iş saatlarınız, şərtləriniz. Agent yalnız bunlardan danışır.",
      },
      {
        icon: "file",
        title: "Zəng transkriptləri",
        body: "Hər zəngin tam mətni panelinizdə qalır.",
      },
      {
        icon: "users",
        title: "Müştəri bazası",
        body: "Zəng edən hər kəs avtomatik qeydə düşür.",
      },
      {
        icon: "calendar",
        title: "Rezervasiya sorğuları",
        body: "Agent sorğunu qeydə alır, təsdiqi əməkdaşınız verir.",
      },
      {
        icon: "forward",
        title: "Operatora ötürmə",
        body: "Agent bilmirsə və ya səlahiyyəti çatmırsa, zəngi insana bağlayır.",
      },
      {
        icon: "languages",
        title: "Çoxdilli",
        body: "Azərbaycan, rus və ingilis dilində danışır.",
      },
    ],
  },

  panel: {
    title: "Hər zəng panelinizdə qalır.",
    subtitle:
      "Zəng siyahısı, tam transkript, müştəri kartı və analitika — hamısı bir yerdə.",
    browserUrl: "panel.voint.az / demo",
    callsHeading: "Zənglər",
    callsCount: "Bu gün · 14",
    calls: [
      { phone: "+994 50 •• 41", duration: "2:14", label: "Rezervasiya sorğusu · Cavablandı" },
      { phone: "+994 55 •• 07", duration: "0:48", label: "Qiymət sorğusu · Cavablandı" },
      { phone: "+994 70 •• 92", duration: "1:05", label: "Operatora ötürüldü" },
      { phone: "+994 51 •• 33", duration: "3:27", label: "İş saatları · Cavablandı" },
      { phone: "+994 77 •• 18", duration: "0:32", label: "Rezervasiya sorğusu · Cavablandı" },
    ],
    transcriptHeading: "Transkript · +994 50 •• 41",
    transcriptDate: "27 iyul, 11:42",
    speakerCustomer: "MÜŞTƏRİ",
    speakerAgent: "AGENT",
    transcript: [
      { speaker: "customer", text: "Salam, sabah səhər üçün ekskavator icarəyə götürmək istəyirəm." },
      { speaker: "agent", text: "Əlbəttə. Günlük icarə 280 manatdır, çatdırılma Bakı daxilində daxildir. Neçə günə lazımdır?" },
      { speaker: "customer", text: "İki günə. Ünvan Xırdalandır." },
      { speaker: "agent", text: "Sorğunuzu qeydə aldım. Təsdiqi əməkdaşımız 30 dəqiqə ərzində zəng edib verəcək." },
    ],
    meta: [
      { label: "Nəticə", value: "Rezervasiya sorğusu" },
      { label: "Müştəri", value: "Yeni qeyd" },
      { label: "Status", value: "Təsdiq gözləyir" },
    ],
  },

  boundaries: {
    title: "Agentin sərhədləri açıq yazılıb.",
    subtitle:
      "Səsli agentin nəyi edə bilməyəcəyini bilmək, nəyi edə bildiyini bilməkdən vacibdir.",
    note: "Hər müəssisənin datası ayrıdır və yalnız öz panelində görünür.",
    items: [
      {
        title: "Qiymət danışığı aparmır",
        body: "Qiymətləri yalnız sizin yazdığınız kimi deyir, güzəşt təklif etmir.",
      },
      {
        title: "Qəti öhdəlik götürmür",
        body: "Sorğunu qeydə alır, «təsdiqləndi» demir. Təsdiqi insan verir.",
      },
      {
        title: "Tibbi və hüquqi məsləhət vermir",
        body: "Belə suallarda mütəxəssisə yönləndirir.",
      },
      {
        title: "Şikayəti özü həll etmir",
        body: "Eşidir, qeydə alır, operatora ötürür. Kompensasiya vəd etmir.",
      },
      {
        title: "Bilmədiyini uydurmur",
        body: "Məlumat bazasında cavab yoxdursa, dürüst deyir və insana bağlayır.",
      },
      {
        title: "Telefonla ödəniş məlumatı qəbul etmir",
        body: "Kart nömrəsi, CVV və hesab məlumatı soruşmur.",
      },
    ],
  },

  pricing: {
    title: "Aylıq abunə, gözlənilməz hesab yoxdur.",
    perMonth: "AZN / ay",
    includedLabel: "Daxil olan",
    overageLabel: "Artıq dəqiqə",
    notes: [
      "Hər tarifdə aylıq dəqiqə limiti var — limit dolanda zənglər dayanır, hesab şişmir.",
      "Bilik bazasının qurulması birdəfəlik quraşdırma işidir.",
    ],
    plans: [
      {
        name: "Başlanğıc",
        price: "149",
        included: "200 dəqiqə",
        overage: "0.60 AZN",
        cta: "Pilotda iştirak et",
        featured: false,
      },
      {
        name: "Biznes",
        price: "349",
        included: "600 dəqiqə",
        overage: "0.50 AZN",
        cta: "Pilotda iştirak et",
        featured: true,
      },
      {
        name: "Korporativ",
        price: "Fərdi",
        included: "Razılaşma ilə",
        overage: "Razılaşma ilə",
        cta: "Bizimlə əlaqə",
        featured: false,
      },
    ],
  },

  pilot: {
    title: "İlk pilot müştərilərimizdən biri olun.",
    subtitle:
      "Voint yeni məhsuldur. İlk müəssisələrlə birlikdə qururuq — quraşdırmanı özümüz edirik, geri dönüşünüzü birbaşa məhsula yazırıq.",
    fields: {
      name: "Ad Soyad",
      company: "Şirkət",
      industry: "Sahə",
      phone: "Telefon",
      email: "Email",
      callVolume: "Gündəlik zəng sayı",
      optional: "(opsional)",
    },
    industries: ["Texnika icarəsi", "Klinika", "Restoran", "Digər"],
    submit: "Sorğu göndər",
    submitting: "Göndərilir…",
    success: "Sorğunuz göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
    error: "Sorğu göndərilə bilmədi. Bizə birbaşa yaza bilərsiniz:",
  },

  footer: {
    tagline: "Bizneslər üçün səsli AI agent və zəng CRM-i.",
    copyright: "© 2026 Voint",
  },
} as const;

export default az;

/** Bütün dillərin uyğun gəlməli olduğu forma. */
export type Dictionary = typeof az;
