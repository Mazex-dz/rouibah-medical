export interface GalleryItem {
  title: string;
  images: string[];
  phone?: string;
  description?: string;
  arabicDesc?: string;
}

export const galleryData: Record<string, GalleryItem> = {
  // Services
  urgences: {
    title: "Urgences 24/7 (قسم الاستعجالات)",
    phone: "0559 50 50 05",
    description: "Notre service des urgences est ouvert 24h/24 et 7j/7. Une équipe médicale qualifiée est toujours présente pour prendre en charge toute situation d'urgence.",
    arabicDesc: "لأن الحالات الطارئة لا تنتظر، تضع عيادة رويبح بين أيديكم مصلحة استعجالات مجهزة بكل ما يلزم للتكفل السريع والفعال: استقبال 24 ساعة، طاقم طبي جاهز للتدخل في أي لحظة، وتجهيزات حديثة ومتكاملة (جهاز ECG، مركزات الأوكسجين).",
    images: Array.from({ length: 17 }, (_, i) => `/clinic-images/batch3/emergency-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  dentaire: {
    title: "Médecine Dentaire (طب الأسنان)",
    phone: "0559 50 50 06",
    description: "Des soins de haute qualité, de la prévention à la restauration complexe, avec les dernières technologies.",
    arabicDesc: "نوفّر لكم خدمات علاج الأسنان تحت إشراف طبيب أسنان مختص، باستخدام تجهيزات حديثة، من أجل صحة فم وأسنان أفضل. علاج التسوّس، آلام الأسنان، تبييض الأسنان، ومتابعة دورية للوقاية من المضاعفات.",
    images: Array.from({ length: 12 }, (_, i) => `/clinic-images/batch3/dental-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  anapate: {
    title: "Anatomie Pathologique (التشريح المرضي)",
    phone: "0559 50 50 02",
    description: "Le service d'anatomie et de pathologie réalise des analyses histologiques et cytologiques pour établir des diagnostics précis.",
    arabicDesc: "نوفر لكم خدمة التشريح المرضي بإشراف طبيب مختص بخبرة تفوق 25 سنة. يساعد على تشخيص العديد من الأمراض من خلال فحص الأنسجة والخلايا بدقة.",
    images: Array.from({ length: 3 }, (_, i) => `/clinic-images/batch3/anapath-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  laboratoire: {
    title: "Laboratoire d'Analyses (مخبر التحاليل)",
    phone: "0559 50 50 01",
    description: "Laboratoire d'analyses médicales pour un large éventail d'examens biologiques avec résultats rapides.",
    arabicDesc: "مخبر التحاليل الطبية مزود بأحدث الأجهزة لضمان دقة وسرعة النتائج. نقوم بجميع أنواع التحاليل بفضل فريقنا المخبري المتخصص.",
    images: Array.from({ length: 8 }, (_, i) => `/clinic-images/batch3/lab-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  imagerie: {
    title: "Imagerie Médicale (الأشعة الطبية)",
    phone: "0559 50 50 03",
    description: "Le service d'imagerie médicale propose des radiographies numériques, des échographies, et des examens Scanner.",
    arabicDesc: "نضع بين أيديكم جهاز سكانير حديث وعالي الجودة، إضافة إلى خدمة التصوير بالأمواج فوق الصوتية (الإيكوغرافيا) باستعمال تجهيزات حديثة لضمان فحوصات دقيقة وسريعة.",
    images: Array.from({ length: 16 }, (_, i) => `/clinic-images/batch3/medical-imaging-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  ambulance: {
    title: "Ambulance et Transport (الإسعاف والنقل)",
    phone: "0559 90 01 00",
    description: "Transport sanitaire rapide et sécurisé, assuré par des professionnels.",
    arabicDesc: "لأن سلامتكم لا تحتمل الانتظار، نوفر لكم خدمة إسعاف سريعة وآمنة لنقل المرضى في أفضل الظروف، مع تغطية شاملة لولاية بومرداس بأسعار تنافسية (مجاناً لتلاميذ المدارس).",
    images: Array.from({ length: 14 }, (_, i) => `/clinic-images/batch3/ambulance-home-care-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  domicile: {
    title: "Soins à Domicile (الرعاية المنزلية)",
    phone: "0559 90 01 00",
    description: "Prise en charge médicale et soins infirmiers dans le confort de votre foyer.",
    arabicDesc: "بما أن بعض الحالات تحتاج إلى الراحة بعيدا عن عناء التنقل، توفر لكم عيادة رويبح خدمة العلاج والرعاية المنزلية لتستفيدوا من متابعة طبية في منزلكم بكل راحة وأمان.",
    images: Array.from({ length: 14 }, (_, i) => `/clinic-images/batch3/ambulance-home-care-${String(i + 1).padStart(2, '0')}.jpeg`),
  },
  
  // Specialties
  gynecologie: {
    title: "Gynécologie (طب النساء والتوليد)",
    phone: "0559 50 50 01",
    description: "Le service de gynécologie-obstétrique prend en charge le suivi des grossesses, les accouchements et le traitement des maladies féminines.",
    arabicDesc: "يقدم قسم طب النساء والتوليد رعاية شاملة لصحة المرأة، بدءاً من متابعة الحمل والولادة وحتى علاج الأمراض النسائية بفضل طاقم متخصص وتجهيزات حديثة.",
    images: ["/clinic-images/batch3/gynecology-01.jpeg", "/clinic-images/batch3/gynecology-02.jpeg"],
  },
  gastrologie: {
    title: "Gastroentérologie (أمراض الجهاز الهضمي)",
    phone: "0559 50 50 01",
    description: "Consultation, diagnostic et traitement des maladies du système digestif, incluant l'endoscopie.",
    arabicDesc: "تشخيص وعلاج أمراض الجهاز الهضمي والكبد بدقة عالية. نوفر فحوصات المنظار الداخلي بأحدث الأجهزة لضمان راحة وسلامة المريض.",
    images: ["/clinic-images/batch3/gastro-01.jpeg", "/clinic-images/batch3/gastro-02.jpeg", "/clinic-images/batch3/gastro-03.jpeg"],
  },
  interne: {
    title: "Médecine Interne (الطب الداخلي)",
    phone: "0559 50 50 01",
    description: "Prise en charge globale des patients adultes atteints de maladies chroniques ou de polypathologies.",
    arabicDesc: "قسم الطب الداخلي متخصص في العناية الشاملة بالمرضى البالغين، خاصة المصابين بأمراض مزمنة أو متعددة، لضمان تشخيص دقيق وعلاج متكامل.",
    images: ["/clinic-images/batch3/internal-medicine-01.jpeg"],
  },
  orthopedie: {
    title: "Chirurgie Orthopédique",
    phone: "0559 50 50 01",
    images: ["/clinic-images/specialistes/orthopedie.jpeg"],
  },
  cci: {
    title: "Chirurgie Coelio et Infantile",
    phone: "0559 50 50 01",
    images: [
      "/clinic-images/specialistes/cci.jpeg",
      "/clinic-images/specialistes/cci_gen.jpg"
    ],
  },
  pediatrie: {
    title: "Pédiatrie",
    phone: "0559 50 50 01",
    images: [
      "/clinic-images/specialistes/pediatrie.jpeg",
      "/clinic-images/specialistes/pediatrie_gen.jpg"
    ],
  },
  cardiologie: {
    title: "Cardiologie",
    phone: "0559 50 50 01",
    images: [
      "/clinic-images/specialistes/cardiologie.jpeg",
      "/clinic-images/specialistes/cardiologie_gen.jpg"
    ],
  }
};
