(function() {
    'use strict';

    // Translations dictionary (French main, Arabic secondary)
    const translations = {
        fr: {
            // Topbar & Nav
            'topbar-address': '<i class="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie',
            'topbar-hours': '<i class="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7',
            'topbar-contact': '<i class="fa-solid fa-phone"></i> Contactez-nous',
            'nav-home': 'Accueil',
            'nav-about': 'À propos',
            'nav-services': 'Nos Services',
            'nav-doctors': 'Notre Équipe',
            'nav-gallery': 'Galerie',
            'nav-testimonials': 'Avis Patients',
            'nav-contact': 'Contact',
            'btn-book': '<i class="fa-solid fa-calendar-plus"></i> Prendre Rendez-vous',

            // Hero
            'hero-badge': '<i class="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie',
            'hero-title': 'Votre santé est une priorité entre des mains<br><span class="gradient-text">spécialisées et de confiance</span>',
            'hero-subtitle': 'Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.',
            'hero-btn-book': 'Réserver un rendez-vous <i class="fa-solid fa-arrow-right"></i>',
            'hero-btn-about': '<i class="fa-solid fa-play-circle"></i> Découvrez-nous',
            'stat-google-label': 'Avis sur Google',
            'stat-spec-label': 'Spécialités médicales',
            'stat-emerg-label': 'Urgences 24/7',
            'hero-scroll': 'Découvrir plus',

            // Emergency Bar
            'emerg-title': 'Service des Urgences Ouvert 24/7',
            'emerg-desc': 'Nous accueillons les urgences médicales 24h/24 — N\'hésitez pas à nous contacter',
            'emerg-btn': '<i class="fa-solid fa-phone-volume"></i> Appeler Maintenant',

            // About Section
            'about-tag': '<i class="fa-solid fa-circle-dot"></i> À propos de nous',
            'about-title': 'Notre mission : des soins<br>médicaux d\'excellence',
            'about-lead': 'Le Groupe Médical Rouibah (Rouibah Medical Group) est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.',
            'about-desc': 'Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C\'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.',
            'val1-title': 'Précision & Efficacité',
            'val1-desc': 'Diagnostic exact et traitement efficace dès la première visite',
            'val2-title': 'Soins Humains',
            'val2-desc': 'Nous traitons chaque patient avec respect et compassion',
            'val3-title': 'Technologies Avancées',
            'val3-desc': 'Équipements de diagnostic et de traitement de pointe',
            'val4-title': 'Développement Continu',
            'val4-desc': 'Nous investissons constamment dans l\'amélioration de nos services',
            'about-badge-title': 'Centre Médical Intégré',
            'about-badge-sub': 'Bordj Menaïel',
            'about-rating-text': 'Avis Google',
            'about-btn': 'Découvrez nos services <i class="fa-solid fa-arrow-right"></i>',

            // Stats Counter
            'stat-counter1-label': 'Patients accompagnés',
            'stat-counter2-label': 'Médecins spécialistes',
            'stat-counter3-label': 'Spécialités médicales',
            'stat-counter4-label': 'Avis Google Maps',

            // Services Section
            'services-tag': '<i class="fa-solid fa-circle-dot"></i> Nos Services Médicaux',
            'services-title': 'Spécialités complètes <span class="text-teal">pour vos soins</span>',
            'services-lead': 'Nous offrons une gamme complète de services médicaux et diagnostiques au même endroit, car votre santé mérite le meilleur.',
            's1-title': 'Médecine Générale & Urgences',
            's1-desc': 'Un service d\'urgence entièrement équipé, ouvert 24h/24 et 7j/7 pour accueillir tous les cas urgents.',
            's1-f1': '<i class="fa-solid fa-check"></i> Prise en charge immédiate des urgences',
            's1-f2': '<i class="fa-solid fa-check"></i> Diagnostic et traitement rapides',
            's1-f3': '<i class="fa-solid fa-check"></i> Surveillance médicale continue',

            's2-title': 'Médecine Dentaire & Chirurgie',
            's2-desc': 'Services d\'orthodontie, de soin et d\'esthétique dentaire avec des technologies récentes et des spécialistes expérimentés.',
            's2-f1': '<i class="fa-solid fa-check"></i> Soins et obturations sans douleur',
            's2-f2': '<i class="fa-solid fa-check"></i> Esthétique dentaire et du sourire',
            's2-f3': '<i class="fa-solid fa-check"></i> Implantologie dentaire',

            's3-title': 'Gynécologie & Obstétrique',
            's3-desc': 'Suivi complet de la grossesse, accouchement sécurisé et soins post-partum dans un environnement confortable.',
            's3-f1': '<i class="fa-solid fa-check"></i> Suivi prénatal régulier',
            's3-f2': '<i class="fa-solid fa-check"></i> Accouchement naturel et césarienne',
            's3-f3': '<i class="fa-solid fa-check"></i> Soins gynécologiques post-partum',

            's4-title': 'Pédiatrie',
            's4-desc': 'Soins complets pour la santé de vos enfants, de la naissance à l\'adolescence, dispensés par des pédiatres dévoués.',
            's4-f1': '<i class="fa-solid fa-check"></i> Suivi de la croissance et du développement',
            's4-f2': '<i class="fa-solid fa-check"></i> Vaccination et prévention',
            's4-f3': '<i class="fa-solid fa-check"></i> Traitement des maladies infantiles',

            's5-title': 'Laboratoire d\'Analyses Médicales',
            's5-desc': 'Laboratoire moderne équipé d\'appareils de pointe offrant des résultats rapides et précis pour toutes les analyses.',
            's5-f1': '<i class="fa-solid fa-check"></i> Bilan sanguin et urinaire complet',
            's5-f2': '<i class="fa-solid fa-check"></i> Analyses bactériologiques et d\'anapath',
            's5-f3': '<i class="fa-solid fa-check"></i> Résultats fiables et rapides',

            's6-title': 'Imagerie Médicale & Radiologie',
            's6-desc': 'Service d\'imagerie entièrement équipé proposant tous les examens nécessaires à un diagnostic précis.',
            's6-f1': '<i class="fa-solid fa-check"></i> Radiographie numérique (Radio)',
            's6-f2': '<i class="fa-solid fa-check"></i> Échographie (Echo 3D/4D)',
            's6-f3': '<i class="fa-solid fa-check"></i> Examens spécialisés',

            // Why Us
            'why-tag': '<i class="fa-solid fa-circle-dot"></i> Pourquoi nous choisir ?',
            'why-title': 'Ce qui fait de nous le premier choix <br><span class="text-teal">à Bordj Menaïel</span>',
            'why-desc': 'Nous ne proposons pas uniquement un service médical : nous bâtissons avec vous une relation de confiance et de partenariat pour votre santé. Notre engagement envers la qualité et l\'amélioration continue fait notre force.',
            'w1-title': 'Urgences 24/7 sans interruption',
            'w1-desc': 'Équipe médicale disponible 24h/24 pour prendre en charge toute urgence avec professionnalisme.',
            'w2-title': 'Équipements et technologies modernes',
            'w2-desc': 'Nous investissons dans des appareils de diagnostic de pointe pour garantir des résultats précis.',
            'w3-title': 'Médecins spécialisés et expérimentés',
            'w3-desc': 'Une équipe médicale hautement qualifiée dans diverses disciplines à votre service.',
            'w4-title': 'Environnement propre et confortable',
            'w4-desc': 'Une clinique conçue selon les plus hauts standards d\'hygiène pour assurer votre bien-être.',

            // Doctors
            'doctors-tag': '<i class="fa-solid fa-circle-dot"></i> Équipe Médicale',
            'doctors-title': 'Des médecins spécialisés <span class="text-teal">à votre service</span>',
            'doctors-lead': 'Notre équipe se compose de médecins et spécialistes expérimentés et dévoués à votre santé.',
            'd1-name': 'Dr. Rouibah',
            'd1-role': 'Médecin Directeur & Généraliste',
            'd1-exp': '15+ ans d\'expérience',
            'd2-name': 'Dr. Pédiatre Spécialiste',
            'd2-role': 'Spécialiste en Pédiatrie',
            'd2-exp': '10+ ans d\'expérience',
            'd3-name': 'Dr. Gynécologue Spécialiste',
            'd3-role': 'Spécialiste en Gynécologie-Obstétrique',
            'd3-exp': '12+ ans d\'expérience',
            'd4-name': 'Équipe d\'Urgences',
            'd4-role': 'Médecins Urgentistes & Infirmiers',
            'd4-exp': 'Service continu 24/7',

            // Appointment
            'apt-tag': '<i class="fa-solid fa-circle-dot"></i> Prise de Rendez-vous',
            'apt-title': 'Prenez votre rendez-vous <span class="text-teal">facilement en ligne</span>',
            'apt-lead': 'Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement pour confirmer votre rendez-vous.',
            'form-title': 'Formulaire de demande de rendez-vous',
            'form-sub': 'Remplissez les informations suivantes pour réserver votre consultation',
            'lbl-name': 'Nom et Prénom *',
            'ph-name': 'Ex: Benali Mohamed',
            'lbl-phone': 'Numéro de téléphone *',
            'ph-phone': 'Ex: 0550 12 34 56',
            'lbl-service': 'Spécialité souhaitée *',
            'opt-select': '-- Choisissez un service --',
            'opt-s1': 'Médecine Générale / Urgences',
            'opt-s2': 'Dentiste / Chirurgie dentaire',
            'opt-s3': 'Gynécologie & Obstétrique',
            'opt-s4': 'Pédiatrie',
            'opt-s5': 'Laboratoire d\'analyses',
            'opt-s6': 'Radiologie / Échographie',
            'lbl-date': 'Date souhaitée *',
            'lbl-time': 'Période préférée',
            'opt-t1': 'Matin (08:00 - 12:00)',
            'opt-t2': 'Après-midi (13:00 - 17:00)',
            'opt-t3': 'Soir (17:00 - 20:00)',
            'lbl-notes': 'Remarques ou symptômes (Optionnel)',
            'ph-notes': 'Décrivez brièvement le motif de votre visite...',
            'btn-submit-apt': '<i class="fa-solid fa-paper-plane"></i> Confirmer la demande de rendez-vous',

            // Gallery & Testimonials & Contact
            'gallery-tag': '<i class="fa-solid fa-circle-dot"></i> Galerie de la Clinique',
            'gallery-title': 'Découvrez notre clinique <span class="text-teal">en images</span>',
            'gallery-lead': 'Nous offrons un cadre médical moderne et confortable, digne de chaque patient.',
            'testi-tag': '<i class="fa-solid fa-circle-dot"></i> Avis Patients',
            'testi-title': 'Ce que disent nos patients <span class="text-teal">sur la clinique</span>',
            'testi-lead': 'Avis authentiques de nos patients sur Google Maps — leur confiance est notre plus grande récompense.',
            'testi-rating-count': 'Basé sur <strong>31 avis</strong> sur Google Maps',
            'testi-rate-btn': 'Nous évaluer sur Google',
            'clinic-reply-label': 'Réponse de la Clinique Rouibah :',
            'clinic-reply-3': '"Que Dieu vous bénisse. Nous vous souhaitons bonne santé à tous."',
            'clinic-reply-4': '"Merci infiniment pour votre confiance."',
            'clinic-reply-5': '"Que Dieu vous garde. Nous souhaitons la guérison à tous les patients. Merci beaucoup."',
            'commit-title': 'Notre engagement envers vous',
            'commit-desc': 'Nous prenons chaque avis et commentaire très au sérieux. Nos réponses immédiates témoignent de notre engagement constant à améliorer nos services.',
            'commit-btn': 'Lire tous les avis',
            'process-tag': '<i class="fa-solid fa-circle-dot"></i> Comment ça marche ?',
            'process-title': 'Quatre étapes simples <span class="text-teal">pour obtenir vos soins</span>',
            'step1-title': 'Prenez rendez-vous',
            'step1-desc': 'Contactez-nous par téléphone, formulaire en ligne ou WhatsApp pour fixer votre rendez-vous.',
            'step2-title': 'Accueil par le médecin',
            'step2-desc': 'À l\'heure convenue, le spécialiste vous reçoit pour l\'examen et l\'évaluation initiale.',
            'step3-title': 'Diagnostic précis',
            'step3-desc': 'Les analyses et examens nécessaires sont réalisés pour établir un diagnostic exact et fiable.',
            'step4-title': 'Plan de traitement',
            'step4-desc': 'Le médecin établit un plan thérapeutique clair avec un suivi régulier jusqu\'au rétablissement complet.',
            'contact-tag': '<i class="fa-solid fa-circle-dot"></i> Contactez-nous',
            'contact-title': 'Nous sommes à <span class="text-teal">Bordj Menaïel</span> — Venez nous voir',
            'c-addr-title': 'Adresse de la Clinique',
            'c-addr-val': 'Bordj Menaïel, Wilaya de Boumerdès, Algérie',
            'c-phone-title': 'Téléphone & Urgences',
            'c-hours-title': 'Heures de travail',
            'c-hours-val': '7j/7 - 24h/24 (Service d\'urgences continu)',
            'hours-weekdays': 'Lundi – Vendredi',
            'hours-weekend': 'Samedi – Dimanche',
            'hours-holidays': 'Jours fériés',
            'hours-open': 'Ouvert 24/7',
            'contact-call-btn': '<i class="fa-solid fa-phone"></i> Appeler',
            'contact-wa-btn': '<i class="fa-brands fa-whatsapp"></i> WhatsApp',
            'directions-btn': '<i class="fa-solid fa-map-location-dot"></i> Obtenir l\'itinéraire',
            'form-title': 'Formulaire de demande de rendez-vous',
            'form-sub': 'Remplissez les informations suivantes pour réserver votre consultation',
            'form-privacy': '<i class="fa-solid fa-lock"></i> Vos informations sont sécurisées — elles ne seront jamais partagées avec des tiers.',
            'appt-why-title': 'Pourquoi réserver chez nous ?',
            'appt-b1': '<i class="fa-solid fa-check-circle"></i> Confirmation immédiate du rendez-vous',
            'appt-b2': '<i class="fa-solid fa-check-circle"></i> Rappel 24h avant votre rendez-vous',
            'appt-b3': '<i class="fa-solid fa-check-circle"></i> Équipe médicale spécialisée qui vous attend',
            'appt-b4': '<i class="fa-solid fa-check-circle"></i> Environnement propre et confortable',
            'appt-b5': '<i class="fa-solid fa-check-circle"></i> Suivi médical après la visite',
            'emerg-box-title': 'Urgence médicale ?',
            'emerg-box-desc': 'N\'attendez pas — appelez-nous directement ou venez aux urgences immédiatement.',
            'whyus-cta-q': 'Vous avez une question ?',
            'whyus-cta-sub': 'Notre équipe est toujours à votre service',
            'footer-google-rating': '3.7/5 — 31 avis sur Google',

            // Footer
            'footer-desc': 'Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.',
            'footer-quick': 'Liens Rapides',
            'footer-services': 'Nos Services',
            'footer-contact': 'Informations de Contact',
            'footer-rights': 'Tous droits réservés © Groupe Médical Rouibah.'
        },
        ar: {
            // Topbar & Nav
            'topbar-address': '<i class="fa-solid fa-location-dot"></i> برج منايل، ولاية بومرداس، الجزائر',
            'topbar-hours': '<i class="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام',
            'topbar-contact': '<i class="fa-solid fa-phone"></i> اتصل بنا',
            'nav-home': 'الرئيسية',
            'nav-about': 'من نحن',
            'nav-services': 'خدماتنا',
            'nav-doctors': 'فريقنا',
            'nav-gallery': 'معرض الصور',
            'nav-testimonials': 'آراء المرضى',
            'nav-contact': 'تواصل معنا',
            'btn-book': '<i class="fa-solid fa-calendar-plus"></i> احجز موعداً',

            // Hero
            'hero-badge': '<i class="fa-solid fa-shield-heart"></i> مركز طبي معتمد — برج منايل، الجزائر',
            'hero-title': 'صحتك أمانة في أيدٍ<br><span class="gradient-text">متخصصة وموثوقة</span>',
            'hero-subtitle': 'في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.',
            'hero-btn-book': 'احجز موعداً الآن <i class="fa-solid fa-arrow-left"></i>',
            'hero-btn-about': '<i class="fa-solid fa-play-circle"></i> تعرف علينا',
            'stat-google-label': 'تقييم على Google',
            'stat-spec-label': 'تخصصات طبية',
            'stat-emerg-label': 'استعجالات على مدار الساعة',
            'hero-scroll': 'اكتشف المزيد',

            // Emergency Bar
            'emerg-title': 'قسم الطوارئ مفتوح 24/7',
            'emerg-desc': 'نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل',
            'emerg-btn': '<i class="fa-solid fa-phone-volume"></i> اتصل الآن',

            // About Section
            'about-tag': '<i class="fa-solid fa-circle-dot"></i> من نحن',
            'about-title': 'رسالتنا: رعاية<br>طبية تستحقها',
            'about-lead': 'عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.',
            'about-desc': 'نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف التخصصات.',
            'val1-title': 'الدقة والكفاءة',
            'val1-desc': 'تشخيص صحيح وعلاج فعّال من أول زيارة',
            'val2-title': 'الرعاية الإنسانية',
            'val2-desc': 'نعامل كل مريض بالاحترام والتعاطف',
            'val3-title': 'تقنيات متطورة',
            'val3-desc': 'أحدث الأجهزة التشخيصية والعلاجية',
            'val4-title': 'تطوير مستمر',
            'val4-desc': 'نستثمر دائماً في التحسين والنمو',
            'about-badge-title': 'مركز طبي متكامل',
            'about-badge-sub': 'برج منايل',
            'about-rating-text': 'تقييم Google',
            'about-btn': 'اكتشف خدماتنا <i class="fa-solid fa-arrow-left"></i>',

            // Stats Counter
            'stat-counter1-label': 'مريض خُدم',
            'stat-counter2-label': 'طبيب متخصص',
            'stat-counter3-label': 'تخصصات طبية',
            'stat-counter4-label': 'تقييم Google Maps',

            // Services Section
            'services-tag': '<i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية',
            'services-title': 'تخصصات شاملة <span class="text-teal">لرعايتك الكاملة</span>',
            'services-lead': 'نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا تستحق أقل من ذلك.',
            's1-title': 'الطب العام والطوارئ',
            's1-desc': 'قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع لاستقبال جميع الحالات المستعجلة.',
            's1-f1': '<i class="fa-solid fa-check"></i> استقبال فوري للحالات الطارئة',
            's1-f2': '<i class="fa-solid fa-check"></i> تشخيص وعلاج سريع',
            's1-f3': '<i class="fa-solid fa-check"></i> إشراف طبي مستمر',

            's2-title': 'طب وجراحة الأسنان',
            's2-desc': 'خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء متخصصين ذوي خبرة.',
            's2-f1': '<i class="fa-solid fa-check"></i> علاج وحشوات بدون ألم',
            's2-f2': '<i class="fa-solid fa-check"></i> تجميل الأسنان والابتسامة',
            's2-f3': '<i class="fa-solid fa-check"></i> زراعة الأسنان الفورية',

            's3-title': 'النساء والتوليد',
            's3-desc': 'متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة مريحة وآمنة.',
            's3-f1': '<i class="fa-solid fa-check"></i> متابعة دورية للحامل',
            's3-f2': '<i class="fa-solid fa-check"></i> ولادة طبيعية وقيصرية',
            's3-f3': '<i class="fa-solid fa-check"></i> رعاية ما بعد الوضع',

            's4-title': 'طب الأطفال',
            's4-desc': 'رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة، بأيدي أطباء متفانين.',
            's4-f1': '<i class="fa-solid fa-check"></i> متابعة النمو والتطور',
            's4-f2': '<i class="fa-solid fa-check"></i> التطعيمات والوقاية',
            's4-f3': '<i class="fa-solid fa-check"></i> علاج أمراض الأطفال',

            's5-title': 'المخبر والتحاليل الطبية',
            's5-desc': 'مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع أنواع التحاليل.',
            's5-f1': '<i class="fa-solid fa-check"></i> تحاليل دم وبول شاملة',
            's5-f2': '<i class="fa-solid fa-check"></i> تحاليل البكتيريولوجيا (Anapath)',
            's5-f3': '<i class="fa-solid fa-check"></i> نتائج سريعة ودقيقة',

            's6-title': 'الأشعة والتصوير الطبي',
            's6-desc': 'قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة للتشخيص الدقيق.',
            's6-f1': '<i class="fa-solid fa-check"></i> أشعة سينية (Radio)',
            's6-f2': '<i class="fa-solid fa-check"></i> الموجات فوق الصوتية (Echo)',
            's6-f3': '<i class="fa-solid fa-check"></i> تصوير متخصص',

            // Why Us
            'why-tag': '<i class="fa-solid fa-circle-dot"></i> لماذا تختارنا؟',
            'why-title': 'ما يجعلنا الخيار <br><span class="text-teal">الأول في برج منايل</span>',
            'why-desc': 'نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر.',
            'w1-title': 'استعجالات 24/7 بلا انقطاع',
            'w1-desc': 'طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة باحترافية تامة.',
            'w2-title': 'تجهيزات وتقنيات حديثة',
            'w2-desc': 'نستثمر في أحدث الأجهزة التشخيصية لضمان دقة النتائج وسلامتك.',
            'w3-title': 'أطباء متخصصون وذوو خبرة',
            'w3-desc': 'فريق طبي مؤهل يتكون من استشاريين وأخصائيين في مختلف المجالات الطبية.',
            'w4-title': 'بيئة نظيفة ومريحة',
            'w4-desc': 'عيادة صُممت وفق أعلى معايير النظافة والراحة النفسية للمريض.',

            // Doctors
            'doctors-tag': '<i class="fa-solid fa-circle-dot"></i> طاقمنا الطبي',
            'doctors-title': 'أطباء متخصصون <span class="text-teal">في خدمتك</span>',
            'doctors-lead': 'يتكون فريقنا من نخبة من الأطباء والاستشاريين الملتزمين بتقديم أفضل مستوى من الرعاية الطبية.',
            'd1-name': 'د. الرويبح',
            'd1-role': 'طبيب مدير وطبيب عام',
            'd1-exp': 'خبرة تزيد عن 15 سنة',
            'd2-name': 'د. أخصائي الأطفال',
            'd2-role': 'أخصائي في طب الأطفال',
            'd2-exp': 'خبرة تزيد عن 10 سنوات',
            'd3-name': 'د. أخصائية النساء',
            'd3-role': 'أخصائية في أمراض النساء والتوليد',
            'd3-exp': 'خبرة تزيد عن 12 سنة',
            'd4-name': 'فريق الاستعجالات',
            'd4-role': 'أطباء وممرضون مستعدون 24/7',
            'd4-exp': 'خدمة مستمرة طوال اليوم',

            // Appointment
            'apt-tag': '<i class="fa-solid fa-circle-dot"></i> حجز المواعيد',
            'apt-title': 'احجز موعدك الآن <span class="text-teal">بسهولة عبر الإنترنت</span>',
            'apt-lead': 'قم بملء النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لتأكيد موعدك.',
            'form-title': 'نموذج طلب موعد',
            'form-sub': 'يرجى إدخال البيانات التالية لحجز استشارتك الطبية',
            'lbl-name': 'الاسم الكامل *',
            'ph-name': 'مثال: محمد بن علي',
            'lbl-phone': 'رقم الهاتف *',
            'ph-phone': 'مثال: 0550 12 34 56',
            'lbl-service': 'التخصص المطلوب *',
            'opt-select': '-- اختر الخدمة --',
            'opt-s1': 'الطب العام / الاستعجالات',
            'opt-s2': 'طب وجراحة الأسنان',
            'opt-s3': 'أمراض النساء والتوليد',
            'opt-s4': 'طب الأطفال',
            'opt-s5': 'مخبر التحاليل الطبية',
            'opt-s6': 'الأشعة والتصوير الطبي',
            'lbl-date': 'التاريخ المطلوب *',
            'lbl-time': 'الفترة المفضلة',
            'opt-t1': 'صباحاً (08:00 - 12:00)',
            'opt-t2': 'مساءً (13:00 - 17:00)',
            'opt-t3': 'ليلاً (17:00 - 20:00)',
            'lbl-notes': 'ملاحظات أو أعراض (اختياري)',
            'ph-notes': 'اكتب باختصار سبب الزيارة...',
            'btn-submit-apt': '<i class="fa-solid fa-paper-plane"></i> تأكيد طلب الحجز',

            // Gallery & Testimonials & Contact
            'gallery-tag': '<i class="fa-solid fa-circle-dot"></i> معرض العيادة',
            'gallery-title': 'جولة مصورة <span class="text-teal">داخل العيادة</span>',
            'gallery-lead': 'نوفر بيئة طبية حديثة ومريحة تليق بكل مريض.',
            'testi-tag': '<i class="fa-solid fa-circle-dot"></i> آراء المرضى',
            'testi-title': 'ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span>',
            'testi-lead': 'تقييمات حقيقية من مرضانا على Google Maps — ثقتهم هي وسام شرفنا.',
            'testi-rating-count': 'بناءً على <strong>31 تقييم</strong> على Google Maps',
            'testi-rate-btn': 'قيّمنا على Google',
            'clinic-reply-label': 'رد عيادة الرويبح:',
            'clinic-reply-3': '"بارك الله فيكم. نتمنى التوفيق والسداد لكم وللجميع."',
            'clinic-reply-4': '"شكراً جزيلاً لكم مسبقاً، حضراتكم."',
            'clinic-reply-5': '"حفظكم الله وأتم عليكم نعمه، وشفى جميع المرضى. شكراً جزيلاً."',
            'commit-title': 'التزامنا نحوك',
            'commit-desc': 'نأخذ كل رأي وكل تعليق بجدية تامة. ردودنا الفورية يعكس التزامنا الراسخ بتحسين خدماتنا.',
            'commit-btn': 'اقرأ كل التقييمات',
            'process-tag': '<i class="fa-solid fa-circle-dot"></i> كيف يعمل النظام؟',
            'process-title': 'أربع خطوات بسيطة <span class="text-teal">للحصول على رعايتك</span>',
            'step1-title': 'احجز موعدك',
            'step1-desc': 'تواصل معنا عبر الهاتف أو نموذج الحجز أو واتساب لتحديد موعدك.',
            'step2-title': 'استقبال الطبيب',
            'step2-desc': 'في الموعد المحدد، يستقبلك الطبيب المتخصص للفحص والتقييم.',
            'step3-title': 'التشخيص الدقيق',
            'step3-desc': 'يتم إجراء التحاليل والفحوصات اللازمة للوصول لتشخيص دقيق وصحيح.',
            'step4-title': 'خطة العلاج',
            'step4-desc': 'يضع لك الطبيب خطة علاجية واضحة مع متابعة دورية حتى شفائك التام.',
            'contact-tag': '<i class="fa-solid fa-circle-dot"></i> تواصل معنا',
            'contact-title': 'نحن في <span class="text-teal">برج منايل</span> — تعال إلينا',
            'c-addr-title': 'عنوان العيادة',
            'c-addr-val': 'برج منايل، ولاية بومرداس، الجزائر',
            'c-phone-title': 'الهاتف والاستعجالات',
            'c-hours-title': 'أوقات العمل',
            'c-hours-val': '7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)',
            'hours-weekdays': 'الإثنين – الجمعة',
            'hours-weekend': 'السبت – الأحد',
            'hours-holidays': 'الأعياد',
            'hours-open': 'مفتوح 24/7',
            'contact-call-btn': '<i class="fa-solid fa-phone"></i> اتصل بنا',
            'contact-wa-btn': '<i class="fa-brands fa-whatsapp"></i> واتساب',
            'directions-btn': '<i class="fa-solid fa-map-location-dot"></i> احصل على الاتجاهات',
            'form-title': 'نموذج طلب موعد',
            'form-sub': 'يرجى إدخال البيانات التالية لحجز استشارتك الطبية',
            'form-privacy': '<i class="fa-solid fa-lock"></i> معلوماتك آمنة ومحفوظة — لن تُشارك مع أي طرف ثالث.',
            'appt-why-title': 'لماذا تحجز معنا؟',
            'appt-b1': '<i class="fa-solid fa-check-circle"></i> تأكيد فوري للموعد',
            'appt-b2': '<i class="fa-solid fa-check-circle"></i> تذكير قبل الموعد بـ 24 ساعة',
            'appt-b3': '<i class="fa-solid fa-check-circle"></i> طاقم طبي متخصص ينتظرك',
            'appt-b4': '<i class="fa-solid fa-check-circle"></i> بيئة نظيفة ومريحة',
            'appt-b5': '<i class="fa-solid fa-check-circle"></i> خدمة ما بعد الزيارة',
            'emerg-box-title': 'حالة طارئة؟',
            'emerg-box-desc': 'لا تنتظر — اتصل بنا مباشرة أو تعال للطوارئ على الفور.',
            'whyus-cta-q': 'هل لديك سؤال؟',
            'whyus-cta-sub': 'فريقنا في خدمتك دائماً',
            'footer-google-rating': '3.7/5 — 31 تقييم على Google',

            // Footer
            'footer-desc': 'عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7، رعاية طبية عالية الجودة ومتابعة مخصصة.',
            'footer-quick': 'روابط سريعة',
            'footer-services': 'خدماتنا الطبية',
            'footer-contact': 'معلومات الاتصال',
            'footer-rights': 'جميع الحقوق محفوظة © عيادة الرويبح.'
        }
    };

    function setLanguage(lang) {
        const selectedLang = lang === 'ar' ? 'ar' : 'fr';
        const dir = selectedLang === 'ar' ? 'rtl' : 'ltr';

        document.documentElement.lang = selectedLang;
        document.documentElement.dir = dir;
        try { localStorage.setItem('preferred_lang', selectedLang); } catch(e) {}

        const langDict = translations[selectedLang];

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langDict[key] !== undefined) {
                el.innerHTML = langDict[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (langDict[key] !== undefined) {
                el.setAttribute('placeholder', langDict[key]);
            }
        });

        // Update active class on language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === selectedLang);
        });
    }

    // Expose globally so it can be called from anywhere
    window.setClinicLanguage = setLanguage;

    // ─── Hydration-safe init ───────────────────────────────────────────────────
    // Next.js hydration wipes innerHTML after DOMContentLoaded.
    // Strategy: apply language immediately, then watch for DOM changes
    // (hydration) and re-apply, with a final retry burst.

    let _applied = false;
    let _debounceTimer = null;
    let _observer = null;

    function getSavedLang() {
        try { return localStorage.getItem('preferred_lang') || 'fr'; } catch(e) { return 'fr'; }
    }

    function applyAndWatch() {
        const lang = getSavedLang();
        setLanguage(lang);
        _applied = true;
    }

    // Debounced re-apply after DOM mutations (hydration)
    function onMutation() {
        clearTimeout(_debounceTimer);
        _debounceTimer = setTimeout(() => {
            applyAndWatch();
        }, 80);
    }

    function startObserver() {
        if (_observer) return;
        _observer = new MutationObserver(onMutation);
        _observer.observe(document.body, { childList: true, subtree: true });
        // Stop observing after 5s (well past hydration)
        setTimeout(() => { if (_observer) { _observer.disconnect(); _observer = null; } }, 5000);
    }

    // Click handler — attached to document in capture phase so it always fires
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
            // Stop observer during manual switch to prevent re-apply fighting with user choice
            if (_observer) { _observer.disconnect(); _observer = null; }
            setLanguage(targetLang);
        }
    }, true);

    // Apply immediately (before hydration)
    applyAndWatch();

    // Re-apply after DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { applyAndWatch(); startObserver(); });
    } else {
        applyAndWatch();
        startObserver();
    }

    // Retry burst at key hydration milestones
    [100, 300, 600, 1000, 1800].forEach(ms => {
        setTimeout(applyAndWatch, ms);
    });

})();
