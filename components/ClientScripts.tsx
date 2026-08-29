"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // ─── Language Switcher (runs after hydration) ────────────────────────────
    const translations: Record<string, Record<string, string>> = {
      fr: {
        'topbar-address': '<i class="fa-solid fa-location-dot"></i> Bordj Menaïel, Wilaya de Boumerdès, Algérie',
        'topbar-hours': '<i class="fa-solid fa-clock"></i> Ouvert 24h/24, 7j/7',
        'topbar-contact': '<i class="fa-solid fa-phone"></i> Contactez-nous',
        'nav-home': 'Accueil','nav-about': 'À propos','nav-services': 'Nos Services',
        'nav-doctors': 'Notre Équipe','nav-gallery': 'Galerie','nav-testimonials': 'Avis Patients','nav-contact': 'Contact',
        'btn-book': '<i class="fa-solid fa-calendar-plus"></i> Prendre Rendez-vous',
        'hero-badge': '<i class="fa-solid fa-shield-heart"></i> Centre Médical Agréé — Bordj Menaïel, Algérie',
        'hero-title': 'Votre santé est une priorité entre des mains<br><span class="gradient-text">spécialisées et de confiance</span>',
        'hero-subtitle': 'Au Groupe Médical Rouibah, nous allions une haute compétence médicale à une vraie prise en charge humaine pour être votre partenaire santé de confiance à tout moment.',
        'hero-btn-book': 'Réserver un rendez-vous <i class="fa-solid fa-arrow-right"></i>',
        'hero-btn-about': '<i class="fa-solid fa-play-circle"></i> Découvrez-nous',
        'stat-google-label': 'Avis sur Google','stat-spec-label': 'Spécialités médicales','stat-emerg-label': 'Urgences 24/7','hero-scroll': 'Découvrir plus',
        'emerg-title': 'Service des Urgences Ouvert 24/7','emerg-desc': "Nous accueillons les urgences médicales 24h/24 — N'hésitez pas à nous contacter",'emerg-btn': '<i class="fa-solid fa-phone-volume"></i> Appeler Maintenant',
        'about-tag': '<i class="fa-solid fa-circle-dot"></i> À propos de nous',
        'about-title': "Notre mission : des soins<br>médicaux d'excellence",
        'about-lead': "Le Groupe Médical Rouibah est un établissement médical privé créé pour servir les habitants de Bordj Menaïel et ses environs, offrant des soins de santé complets qui allient compétence professionnelle et humanité.",
        'about-desc': "Nous croyons que chaque patient mérite une attention sincère et un diagnostic précis. C'est pourquoi nous utilisons les technologies médicales les plus récentes et sélectionnons rigoureusement notre équipe qualifiée.",
        'val1-title': 'Précision & Efficacité','val1-desc': 'Diagnostic exact et traitement efficace dès la première visite',
        'val2-title': 'Soins Humains','val2-desc': 'Nous traitons chaque patient avec respect et compassion',
        'val3-title': 'Technologies Avancées','val3-desc': 'Équipements de diagnostic et de traitement de pointe',
        'val4-title': 'Développement Continu','val4-desc': "Nous investissons constamment dans l'amélioration de nos services",
        'about-badge-title': 'Centre Médical Intégré','about-badge-sub': 'Bordj Menaïel',
        'about-rating-text': 'Avis Google','about-btn': 'Découvrez nos services <i class="fa-solid fa-arrow-right"></i>',
        'stat-counter1-label': 'Patients accompagnés','stat-counter2-label': 'Médecins spécialistes','stat-counter3-label': 'Spécialités médicales','stat-counter4-label': 'Avis Google Maps',
        'services-tag': '<i class="fa-solid fa-circle-dot"></i> Nos Services','services-title': 'Des soins spécialisés <span class="text-teal">pour toute la famille</span>',
        'svc1-title': 'Médecine Générale','svc1-desc': 'Consultations générales, bilans de santé, prévention et orientation vers les spécialités appropriées.',
        'svc2-title': 'Pédiatrie','svc2-desc': 'Suivi de croissance, vaccinations, maladies infantiles et soins complets pour enfants et nourrissons.',
        'svc3-title': 'Urgences 24/7','svc3-desc': 'Service des urgences disponible 24 heures sur 24, 7 jours sur 7 pour toute situation critique.',
        'svc4-title': 'Analyses & Laboratoire','svc4-desc': 'Analyses de sang, urines et microbiologie avec résultats rapides et fiables.',
        'svc5-title': 'Radiologie & Imagerie','svc5-desc': 'Radiographies numériques et échographies pour un diagnostic précis et rapide.',
        'svc6-title': 'Consultations Spécialisées','svc6-desc': 'Cardiologie, ophtalmologie, orthopédie, neurologie et autres spécialités sur rendez-vous.',
        'whyus-tag': '<i class="fa-solid fa-circle-dot"></i> Pourquoi Nous Choisir','whyus-title': 'Votre santé entre les meilleures <span class="text-teal">mains</span>',
        'f1-title': 'Équipements Médicaux Modernes','f1-desc': "Nous utilisons les équipements les plus récents pour garantir un diagnostic précis et un traitement efficace.",
        'f2-title': 'Médecins Spécialisés','f2-desc': "Notre équipe est composée de médecins qualifiés dans toutes les spécialités médicales.",
        'f3-title': 'Urgences 24h/24','f3-desc': "Nous sommes disponibles à toute heure pour les urgences médicales.",
        'f4-title': 'Sécurité & Hygiène','f4-desc': "Nous appliquons les normes d'hygiène les plus strictes pour la protection de nos patients.",
        'doctors-tag': '<i class="fa-solid fa-circle-dot"></i> Notre Équipe Médicale','doctors-title': 'Des médecins <span class="text-teal">expérimentés & dévoués</span>','doctors-lead': "Notre équipe se compose de médecins qualifiés dans diverses spécialités et dévoués à votre santé.",
        'doc1-name': 'Dr. Rouibah','doc1-spec': 'Médecin Généraliste & Directeur Médical','doc1-avail': 'Disponible sur rendez-vous',
        'doc2-name': 'Dr. Amel Benali','doc2-spec': 'Pédiatre spécialisée','doc2-avail': 'Disponible sur rendez-vous',
        'doc3-name': 'Dr. Karim Meziane','doc3-spec': 'Chirurgien Général','doc3-avail': 'Disponible sur rendez-vous',
        'gallery-tag': '<i class="fa-solid fa-circle-dot"></i> Galerie de la Clinique','gallery-title': 'Découvrez notre clinique <span class="text-teal">en images</span>','gallery-lead': 'Nous offrons un cadre médical moderne et confortable, digne de chaque patient.',
        'testi-tag': '<i class="fa-solid fa-circle-dot"></i> Avis Patients','testi-title': 'Ce que disent nos patients <span class="text-teal">sur la clinique</span>',
        'testi-lead': 'Avis authentiques de nos patients sur Google Maps — leur confiance est notre plus grande récompense.',
        'testi-rating-count': 'Basé sur <strong>31 avis</strong> sur Google Maps','testi-rate-btn': 'Nous évaluer sur Google',
        'clinic-reply-label': 'Réponse de la Clinique Rouibah :','clinic-reply-3': '"Que Dieu vous bénisse. Nous vous souhaitons bonne santé à tous."','clinic-reply-4': '"Merci infiniment pour votre confiance."','clinic-reply-5': '"Que Dieu vous garde. Nous souhaitons la guérison à tous les patients. Merci beaucoup."',
        'commit-title': 'Notre engagement envers vous','commit-desc': "Nous prenons chaque avis et commentaire très au sérieux. Nos réponses immédiates témoignent de notre engagement constant à améliorer nos services.",'commit-btn': 'Lire tous les avis',
        'process-tag': '<i class="fa-solid fa-circle-dot"></i> Comment ça marche ?','process-title': 'Quatre étapes simples <span class="text-teal">pour obtenir vos soins</span>',
        'step1-title': 'Prenez rendez-vous','step1-desc': 'Contactez-nous par téléphone, formulaire en ligne ou WhatsApp pour fixer votre rendez-vous.',
        'step2-title': 'Accueil par le médecin','step2-desc': "À l'heure convenue, le médecin de la spécialité choisie vous reçoit pour l'examen et l'évaluation initiale.",
        'step3-title': 'Diagnostic précis','step3-desc': "Les analyses et examens nécessaires sont réalisés pour établir un diagnostic exact et fiable.",
        'step4-title': 'Plan de traitement','step4-desc': "Le médecin établit un plan thérapeutique clair avec un suivi régulier jusqu'au rétablissement complet.",
        'contact-tag': '<i class="fa-solid fa-circle-dot"></i> Contactez-nous','contact-title': 'Nous sommes à <span class="text-teal">Bordj Menaïel</span> — Venez nous voir',
        'c-addr-title': 'Adresse de la Clinique','c-addr-val': 'Bordj Menaïel, Wilaya de Boumerdès, Algérie',
        'c-phone-title': 'Téléphone & Urgences','c-hours-title': 'Heures de travail',"c-hours-val": "7j/7 - 24h/24 (Service d'urgences continu)",
        'hours-weekdays': 'Lundi – Vendredi','hours-weekend': 'Samedi – Dimanche','hours-holidays': 'Jours fériés','hours-open': 'Ouvert 24/7',
        'contact-call-btn': '<i class="fa-solid fa-phone"></i> Appeler','contact-wa-btn': '<i class="fa-brands fa-whatsapp"></i> WhatsApp','directions-btn': "<i class='fa-solid fa-map-location-dot'></i> Obtenir l'itinéraire",
        'form-title': 'Formulaire de demande de rendez-vous','form-sub': 'Remplissez les informations suivantes pour réserver votre consultation','form-privacy': '<i class="fa-solid fa-lock"></i> Vos informations sont sécurisées — elles ne seront jamais partagées avec des tiers.',
        'appt-why-title': 'Pourquoi réserver chez nous ?','appt-b1': '<i class="fa-solid fa-check-circle"></i> Confirmation immédiate du rendez-vous','appt-b2': '<i class="fa-solid fa-check-circle"></i> Rappel 24h avant votre rendez-vous','appt-b3': '<i class="fa-solid fa-check-circle"></i> Équipe médicale spécialisée qui vous attend','appt-b4': '<i class="fa-solid fa-check-circle"></i> Environnement propre et confortable','appt-b5': '<i class="fa-solid fa-check-circle"></i> Suivi médical après la visite',
        'emerg-box-title': 'Urgence médicale ?',"emerg-box-desc": "N'attendez pas — appelez-nous directement ou venez aux urgences immédiatement.",
        'whyus-cta-q': 'Vous avez une question ?','whyus-cta-sub': 'Notre équipe est toujours à votre service',
        'footer-google-rating': '3.7/5 — 31 avis sur Google','footer-desc': 'Groupe Médical Rouibah — Votre centre de santé de référence à Bordj Menaïel. Urgences 24/7, soins de qualité et suivi personnalisé.',
        'footer-quick': 'Liens Rapides','footer-services': 'Nos Services','footer-contact': 'Informations de Contact','footer-rights': 'Tous droits réservés © Groupe Médical Rouibah.',
        
        /* Inner Pages: Services & Specialistes */
        'nav-specialistes': 'Les Spécialités',
        'srv-page-tag': '<i class="fa-solid fa-circle-dot"></i> Nos Services Médicaux', 'srv-page-title': 'Des soins médicaux <span class="text-teal">complets et accessibles</span>', 'srv-page-desc': 'Le Groupe Médical Rouibah met à votre disposition des services médicaux de haute qualité à Bordj Menaïel. Chaque service est assuré par des professionnels qualifiés avec des équipements modernes.', 'srv-page-call': '<i class="fa-solid fa-phone"></i> Appeler maintenant', 'srv-page-book': '<i class="fa-solid fa-calendar-plus"></i> Prendre rendez-vous', 'srv-card-call': '<i class="fa-solid fa-phone"></i> Appeler', 'srv-card-book': '<i class="fa-solid fa-calendar-plus"></i> Rendez-vous', 'srv-page-cta-title': 'Besoin d\'une consultation d\'urgence ?', 'srv-page-cta-desc': 'Notre équipe est disponible 24h/24 — Ne tardez pas.',
        
        'spec-page-tag': '<i class="fa-solid fa-circle-dot"></i> Nos Spécialités Médicales', 'spec-page-title': 'Les spécialités médicales <span class="text-teal">à votre service</span>', 'spec-page-desc': 'Notre clinique regroupe de nombreuses spécialités médicales sous un même toit. Consultez nos médecins qualifiés et expérimentés, tous disponibles sur rendez-vous à Bordj Menaïel.', 'spec-page-btn-book': '<i class="fa-solid fa-calendar-plus"></i> Prendre rendez-vous', 'spec-page-btn-call': '<i class="fa-solid fa-phone"></i> 0559 50 50 01', 'spec-avail-badge': 'Disponible sur rendez-vous', 'spec-actes-title': 'Actes & consultations :', 'spec-card-btn-book': '<i class="fa-solid fa-calendar-plus"></i> Prendre rendez-vous', 'spec-card-btn-call': '<i class="fa-solid fa-phone"></i> Appeler', 'spec-page-cta-title': 'Besoin d\'une consultation spécialisée ?', 'spec-page-cta-desc': 'Appelez-nous pour prendre rendez-vous dans la spécialité de votre choix.',

        'srv-urgences-title': 'Urgences 24/7', 'srv-urgences-sub': 'Service des urgences médicales', 'srv-urgences-desc': "Notre service des urgences est ouvert 24 heures sur 24, 7 jours sur 7, 365 jours par an. Une équipe médicale qualifiée est toujours présente pour prendre en charge toute situation d'urgence médicale rapidement et efficacement.", 'srv-urgences-feat-0': 'Disponible 24h/24 — 7j/7', 'srv-urgences-feat-1': 'Équipe médicale permanente', 'srv-urgences-feat-2': 'Matériel de réanimation complet', 'srv-urgences-feat-3': 'Prise en charge immédiate', 'srv-urgences-feat-4': 'Coordination avec les hôpitaux',
        'srv-anapate-title': 'Anapate', 'srv-anapate-sub': 'Anatomie pathologique', 'srv-anapate-desc': "Le service d'anatomie et de pathologie (Anapate) réalise des analyses histologiques et cytologiques pour établir des diagnostics précis. Nos pathologistes examinent les prélèvements tissulaires avec les équipements les plus modernes.", 'srv-anapate-feat-0': 'Analyses histologiques', 'srv-anapate-feat-1': 'Études cytologiques', 'srv-anapate-feat-2': 'Biopsies et prélèvements', 'srv-anapate-feat-3': 'Résultats fiables et rapides', 'srv-anapate-feat-4': 'Rapports détaillés',
        'srv-laboratoire-title': 'Laboratoire', 'srv-laboratoire-sub': 'Analyses biologiques et médicales', 'srv-laboratoire-desc': "Notre laboratoire d'analyses médicales réalise un large éventail d'examens biologiques : analyses de sang, d'urine, bactériologie, sérologie et bien plus. Les résultats sont transmis rapidement pour une prise en charge optimale.", 'srv-laboratoire-feat-0': 'Analyses de sang complètes', 'srv-laboratoire-feat-1': "Analyses d'urine", 'srv-laboratoire-feat-2': 'Bactériologie & sérologie', 'srv-laboratoire-feat-3': 'Résultats rapides', 'srv-laboratoire-feat-4': 'Équipements automatisés',
        'srv-imagerie-title': 'Imagerie Médicale', 'srv-imagerie-sub': 'Radiologie & échographie', 'srv-imagerie-desc': "Le service d'imagerie médicale propose des radiographies numériques et des échographies pour un diagnostic précis et rapide. Nos techniciens et médecins radiologues interprètent les images avec la plus grande rigueur.", 'srv-imagerie-feat-0': 'Radiographie numérique', 'srv-imagerie-feat-1': 'Échographie', 'srv-imagerie-feat-2': 'Interprétation par radiologues', 'srv-imagerie-feat-3': 'Résultats immédiats', 'srv-imagerie-feat-4': 'Archivage numérique',

        'spec-dentiste-title': 'Dentisterie', 'spec-dentiste-role': 'Chirurgien-Dentiste', 'spec-dentiste-desc': 'Notre cabinet dentaire prend en charge toutes les pathologies bucco-dentaires : soins conservateurs, extractions, prothèses, détartrage et blanchiment. Un suivi régulier pour une santé bucco-dentaire optimale.', 'spec-dentiste-acte-0': 'Soins conservateurs', 'spec-dentiste-acte-1': 'Extraction dentaire', 'spec-dentiste-acte-2': 'Prothèses dentaires', 'spec-dentiste-acte-3': 'Détartrage', 'spec-dentiste-acte-4': 'Traitement des caries',
        'spec-gynecologie-title': 'Gynécologie', 'spec-gynecologie-role': 'Gynécologue-Obstétricien', 'spec-gynecologie-desc': 'Notre service de gynécologie assure le suivi gynécologique et obstétrical de la femme à tous les stades de sa vie. Consultations, grossesse, dépistage et prévention des pathologies féminines.', 'spec-gynecologie-acte-0': 'Suivi de grossesse', 'spec-gynecologie-acte-1': 'Consultations gynécologiques', 'spec-gynecologie-acte-2': 'Échographies obstétricales', 'spec-gynecologie-acte-3': 'Dépistage', 'spec-gynecologie-acte-4': 'Contraception',
        'spec-orthopedie-title': 'Orthopédie', 'spec-orthopedie-role': 'Chirurgien Orthopédiste', 'spec-orthopedie-desc': "Le service orthopédique traite les affections de l'appareil locomoteur : traumatismes, fractures, douleurs articulaires, pathologies osseuses et tendineuses. Diagnostic précis et plan de traitement adapté.", 'spec-orthopedie-acte-0': 'Fractures & traumatismes', 'spec-orthopedie-acte-1': 'Douleurs articulaires', 'spec-orthopedie-acte-2': 'Pathologies osseuses', 'spec-orthopedie-acte-3': 'Rééducation', 'spec-orthopedie-acte-4': 'Entorses & tendinites',
        'spec-cci-title': 'CCI', 'spec-cci-role': 'Centre de Chimiothérapie Intraveineux', 'spec-cci-desc': "Notre centre CCI (Chambre à Cathéter Implantable) assure la pose, le suivi et l'entretien des chambres implantables pour les patients sous traitement intraveineux prolongé, dans un environnement sécurisé et stérile.", 'spec-cci-acte-0': 'Pose de CCI', 'spec-cci-acte-1': 'Suivi et entretien', 'spec-cci-acte-2': 'Perfusions intraveineuses', 'spec-cci-acte-3': 'Protocoles oncologiques', 'spec-cci-acte-4': 'Soins infirmiers spécialisés',
        'spec-gastrologie-title': 'Gastroentérologie', 'spec-gastrologie-role': 'Gastroentérologue', 'spec-gastrologie-desc': "Notre gastroentérologue prend en charge les maladies du système digestif : estomac, intestin, foie, pancréas et vésicule biliaire. Consultations, endoscopies et suivi des pathologies digestives chroniques.", 'spec-gastrologie-acte-0': 'Pathologies digestives', 'spec-gastrologie-acte-1': 'Hépatologie', 'spec-gastrologie-acte-2': 'Coloscopie & endoscopie', 'spec-gastrologie-acte-3': 'Reflux & ulcères', 'spec-gastrologie-acte-4': 'Maladies inflammatoires',
        'spec-pediatrie-title': 'Pédiatrie', 'spec-pediatrie-role': 'Pédiatre Spécialisé', 'spec-pediatrie-desc': "Notre pédiatre assure le suivi de la croissance et du développement de l'enfant de la naissance à l'adolescence. Consultations, vaccinations, maladies infantiles, et bilans de santé réguliers.", 'spec-pediatrie-acte-0': 'Suivi de croissance', 'spec-pediatrie-acte-1': 'Vaccinations', 'spec-pediatrie-acte-2': 'Maladies infantiles', 'spec-pediatrie-acte-3': 'Bilans de santé', 'spec-pediatrie-acte-4': 'Alimentation & nutrition',
        'spec-cardiologie-title': 'Cardiologie', 'spec-cardiologie-role': 'Cardiologue', 'spec-cardiologie-desc': "Le service de cardiologie assure le dépistage, le diagnostic et le suivi des maladies cardiovasculaires. Électrocardiogramme, échocardiographie, Holter et consultations spécialisées pour la santé de votre cœur.", 'spec-cardiologie-acte-0': 'Électrocardiogramme (ECG)', 'spec-cardiologie-acte-1': 'Échocardiographie', 'spec-cardiologie-acte-2': 'Holter cardiaque', 'spec-cardiologie-acte-3': 'Hypertension artérielle', 'spec-cardiologie-acte-4': 'Insuffisance cardiaque',
      },
      ar: {
        'topbar-address': '<i class="fa-solid fa-location-dot"></i> برج منايل، ولاية بومرداس، الجزائر',
        'topbar-hours': '<i class="fa-solid fa-clock"></i> مفتوح 24/7 - سبعة أيام في الأسبوع',
        'topbar-contact': '<i class="fa-solid fa-phone"></i> تواصل معنا',
        'nav-home': 'الرئيسية','nav-about': 'عن العيادة','nav-services': 'خدماتنا','nav-doctors': 'فريقنا','nav-gallery': 'معرض الصور','nav-testimonials': 'آراء المرضى','nav-contact': 'تواصل معنا',
        'btn-book': '<i class="fa-solid fa-calendar-plus"></i> احجز موعدك',
        'hero-badge': '<i class="fa-solid fa-shield-heart"></i> مركز طبي معتمد — برج منايل، الجزائر',
        'hero-title': 'صحتك أولويتنا في أيدٍ<br><span class="gradient-text">متخصصة وموثوقة</span>',
        'hero-subtitle': 'في عيادة الرويبح، نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية لنكون شريكك الصحي الموثوق في كل الأوقات.',
        'hero-btn-book': 'احجز موعدك الآن <i class="fa-solid fa-arrow-right"></i>','hero-btn-about': '<i class="fa-solid fa-play-circle"></i> تعرف علينا',
        'stat-google-label': 'تقييم على جوجل','stat-spec-label': 'تخصصات طبية','stat-emerg-label': 'طوارئ 24/7','hero-scroll': 'اكتشف المزيد',
        'emerg-title': 'خدمة الطوارئ مفتوحة 24/7','emerg-desc': 'نستقبل الحالات الطارئة على مدار الساعة — لا تتردد في الاتصال بنا','emerg-btn': '<i class="fa-solid fa-phone-volume"></i> اتصل الآن',
        'about-tag': '<i class="fa-solid fa-circle-dot"></i> عن العيادة',
        'about-title': 'مهمتنا: رعاية طبية<br>متكاملة وعالية الجودة',
        'about-lead': 'عيادة الرويبح مؤسسة طبية خاصة أُسست لخدمة سكان برج منايل والمناطق المجاورة، تقدم رعاية صحية شاملة تجمع بين الكفاءة المهنية والإنسانية.',
        'about-desc': 'نؤمن بأن كل مريض يستحق اهتماماً صادقاً وتشخيصاً دقيقاً. لهذا نعتمد أحدث التقنيات الطبية وننتقي فريقنا المؤهل بعناية فائقة.',
        'val1-title': 'الدقة والفعالية','val1-desc': 'تشخيص صحيح وعلاج فعّال من أول زيارة',
        'val2-title': 'الرعاية الإنسانية','val2-desc': 'نتعامل مع كل مريض باحترام وإنسانية',
        'val3-title': 'التقنيات المتطورة','val3-desc': 'أجهزة تشخيص وعلاج من أحدث ما توصل إليه العلم',
        'val4-title': 'التطوير المستمر','val4-desc': 'نستثمر باستمرار في تحسين خدماتنا',
        'about-badge-title': 'مركز طبي متكامل','about-badge-sub': 'برج منايل',
        'about-rating-text': 'تقييم جوجل','about-btn': 'اكتشف خدماتنا <i class="fa-solid fa-arrow-right"></i>',
        'stat-counter1-label': 'مريض تمت رعايتهم','stat-counter2-label': 'طبيب متخصص','stat-counter3-label': 'تخصصات طبية','stat-counter4-label': 'تقييم على Google Maps',
        'services-tag': '<i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية','services-title': 'رعاية متخصصة <span class="text-teal">لكل أفراد العائلة</span>',
        'svc1-title': 'طب عام','svc1-desc': 'استشارات طبية عامة، فحوصات دورية، وقاية وتوجيه نحو الاختصاصات الطبية المناسبة.',
        'svc2-title': 'طب الأطفال','svc2-desc': 'متابعة نمو الأطفال، التطعيمات، وعلاج الأمراض الطفولية والرضع.',
        'svc3-title': 'طوارئ 24/7','svc3-desc': 'خدمة الطوارئ متاحة على مدار الساعة طوال أيام الأسبوع لأي حالة حرجة.',
        'svc4-title': 'التحاليل والمختبر','svc4-desc': 'تحاليل الدم والبول والجراثيم بنتائج سريعة وموثوقة.',
        'svc5-title': 'الأشعة والتصوير الطبي','svc5-desc': 'أشعة رقمية وتصوير بالموجات الصوتية لتشخيص دقيق وسريع.',
        'svc6-title': 'استشارات متخصصة','svc6-desc': 'قلب، عيون، عظام، أعصاب وتخصصات أخرى بموعد مسبق.',
        'whyus-tag': '<i class="fa-solid fa-circle-dot"></i> لماذا تختارنا','whyus-title': 'صحتك بين أفضل <span class="text-teal">الأيدي</span>',
        'f1-title': 'معدات طبية حديثة','f1-desc': 'نستخدم أحدث الأجهزة لضمان تشخيص دقيق وعلاج فعّال.',
        'f2-title': 'أطباء في مختلف الاختصاصات','f2-desc': 'فريقنا يضم أطباء ذوي خبرة وكفاءة عالية في مختلف الاختصاصات الطبية.',
        'f3-title': 'طوارئ 24/24','f3-desc': 'نحن متاحون في أي وقت للحالات الطارئة.',
        'f4-title': 'أمان وصرامة صحية','f4-desc': 'نطبق أعلى معايير النظافة لحماية مرضانا.',
        'doctors-tag': '<i class="fa-solid fa-circle-dot"></i> فريقنا الطبي','doctors-title': 'أطباء <span class="text-teal">متمرسون ومتفانون</span>','doctors-lead': 'يتكون فريقنا من نخبة من الأطباء ذوي الكفاءة العالية في مختلف الاختصاصات لخدمة صحتكم.',
        'doc1-name': 'د. الرويبح','doc1-spec': 'طبيب عام ومدير طبي','doc1-avail': 'متاح بموعد مسبق',
        'doc2-name': 'د. أمل بن علي','doc2-spec': 'طبيبة أطفال متخصصة','doc2-avail': 'متاحة بموعد مسبق',
        'doc3-name': 'د. كريم مزيان','doc3-spec': 'جراح عام','doc3-avail': 'متاح بموعد مسبق',
        'gallery-tag': '<i class="fa-solid fa-circle-dot"></i> معرض العيادة','gallery-title': 'جولة مصورة <span class="text-teal">داخل العيادة</span>','gallery-lead': 'نوفر بيئة طبية حديثة ومريحة تليق بكل مريض.',
        'testi-tag': '<i class="fa-solid fa-circle-dot"></i> آراء المرضى','testi-title': 'ماذا يقول مرضانا <span class="text-teal">عن خدماتنا</span>',
        'testi-lead': 'تقييمات حقيقية من مرضانا على Google Maps — ثقتهم هي وسام شرفنا.',
        'testi-rating-count': 'بناءً على <strong>31 تقييم</strong> على Google Maps','testi-rate-btn': 'قيّمنا على Google',
        'clinic-reply-label': 'رد عيادة الرويبح:','clinic-reply-3': '"بارك الله فيكم. نتمنى التوفيق والسداد لكم وللجميع."','clinic-reply-4': '"شكراً جزيلاً لكم مسبقاً، حضراتكم."','clinic-reply-5': '"حفظكم الله وأتم عليكم نعمه، وشفى جميع المرضى. شكراً جزيلاً."',
        'commit-title': 'التزامنا نحوك','commit-desc': 'نأخذ كل رأي وكل تعليق بجدية تامة. ردودنا الفورية يعكس التزامنا الراسخ بتحسين خدماتنا.','commit-btn': 'اقرأ كل التقييمات',
        'process-tag': '<i class="fa-solid fa-circle-dot"></i> كيف يعمل النظام؟','process-title': 'أربع خطوات بسيطة <span class="text-teal">للحصول على رعايتك</span>',
        'step1-title': 'احجز موعدك','step1-desc': 'تواصل معنا عبر الهاتف أو نموذج الحجز أو واتساب لتحديد موعدك.',
        'step2-title': 'استقبال الطبيب','step2-desc': 'في الموعد المحدد، يستقبلك الطبيب في مختلف الاختصاصات للفحص والتقييم الأولي.',
        'step3-title': 'التشخيص الدقيق','step3-desc': 'يتم إجراء التحاليل والفحوصات اللازمة للوصول لتشخيص دقيق وصحيح.',
        'step4-title': 'خطة العلاج','step4-desc': 'يضع لك الطبيب خطة علاجية واضحة مع متابعة دورية حتى شفائك التام.',
        'contact-tag': '<i class="fa-solid fa-circle-dot"></i> تواصل معنا','contact-title': 'نحن في <span class="text-teal">برج منايل</span> — تعال إلينا',
        'c-addr-title': 'عنوان العيادة','c-addr-val': 'برج منايل، ولاية بومرداس، الجزائر',
        'c-phone-title': 'الهاتف والاستعجالات','c-hours-title': 'أوقات العمل','c-hours-val': '7 أيام / 7 - 24 ساعة / 24 (استعجالات مستمرة)',
        'hours-weekdays': 'الإثنين – الجمعة','hours-weekend': 'السبت – الأحد','hours-holidays': 'الأعياد','hours-open': 'مفتوح 24/7',
        'contact-call-btn': '<i class="fa-solid fa-phone"></i> اتصل بنا','contact-wa-btn': '<i class="fa-brands fa-whatsapp"></i> واتساب','directions-btn': '<i class="fa-solid fa-map-location-dot"></i> احصل على الاتجاهات',
        'form-title': 'نموذج طلب موعد','form-sub': 'يرجى إدخال البيانات التالية لحجز استشارتك الطبية','form-privacy': '<i class="fa-solid fa-lock"></i> معلوماتك آمنة ومحفوظة — لن تُشارك مع أي طرف ثالث.',
        'appt-why-title': 'لماذا تحجز معنا؟','appt-b1': '<i class="fa-solid fa-check-circle"></i> تأكيد فوري للموعد','appt-b2': '<i class="fa-solid fa-check-circle"></i> تذكير قبل الموعد بـ 24 ساعة','appt-b3': '<i class="fa-solid fa-check-circle"></i> طاقم طبي متخصص ينتظرك','appt-b4': '<i class="fa-solid fa-check-circle"></i> بيئة نظيفة ومريحة','appt-b5': '<i class="fa-solid fa-check-circle"></i> خدمة ما بعد الزيارة',
        'emerg-box-title': 'حالة طارئة؟','emerg-box-desc': 'لا تنتظر — اتصل بنا مباشرة أو تعال للطوارئ على الفور.',
        'whyus-cta-q': 'هل لديك سؤال؟','whyus-cta-sub': 'فريقنا في خدمتك دائماً',
        'footer-google-rating': '3.7/5 — 31 تقييم على Google','footer-desc': 'عيادة الرويبح — مركزك الطبي الموثوق في برج منايل. استعجالات 24/7، رعاية طبية عالية الجودة ومتابعة مخصصة.',
        'footer-quick': 'روابط سريعة','footer-services': 'خدماتنا الطبية','footer-contact': 'معلومات الاتصال','footer-rights': 'جميع الحقوق محفوظة © عيادة الرويبح.',
        
        /* Inner Pages: Services & Specialistes */
        'nav-specialistes': 'الاختصاصات',
        'srv-page-tag': '<i class="fa-solid fa-circle-dot"></i> خدماتنا الطبية', 'srv-page-title': 'رعاية طبية <span class="text-teal">شاملة ومتاحة</span>', 'srv-page-desc': 'يضع مجمع الرويبح الطبي بين أيديكم خدمات طبية عالية الجودة في برج منايل. يُشرف على كل خدمة طاقم محترف ومؤهل مزود بأحدث المعدات.', 'srv-page-call': '<i class="fa-solid fa-phone"></i> اتصل الآن', 'srv-page-book': '<i class="fa-solid fa-calendar-plus"></i> احجز موعدك', 'srv-card-call': '<i class="fa-solid fa-phone"></i> اتصال', 'srv-card-book': '<i class="fa-solid fa-calendar-plus"></i> موعد', 'srv-page-cta-title': 'بحاجة لاستشارة مستعجلة؟', 'srv-page-cta-desc': 'فريقنا متاح على مدار الساعة — لا تتردد.',
        
        'spec-page-tag': '<i class="fa-solid fa-circle-dot"></i> الاختصاصات الطبية', 'spec-page-title': 'الاختصاصات <span class="text-teal">في خدمتكم</span>', 'spec-page-desc': 'تجمع عيادتنا عدة اختصاصات طبية تحت سقف واحد. استشر أطباءنا المؤهلين وذوي الخبرة، والمتاحين بناءً على موعد مسبق في برج منايل.', 'spec-page-btn-book': '<i class="fa-solid fa-calendar-plus"></i> احجز موعدك', 'spec-page-btn-call': '<i class="fa-solid fa-phone"></i> 0559 50 50 01', 'spec-avail-badge': 'متاح بموعد مسبق', 'spec-actes-title': 'الخدمات والاستشارات:', 'spec-card-btn-book': '<i class="fa-solid fa-calendar-plus"></i> احجز موعدك', 'spec-card-btn-call': '<i class="fa-solid fa-phone"></i> اتصال', 'spec-page-cta-title': 'بحاجة إلى استشارة في اختصاص طبي؟', 'spec-page-cta-desc': 'اتصل بنا لحجز موعد مع الطبيب في الاختصاص الطبي المطلوب.',

        'srv-urgences-title': 'طوارئ 24/7', 'srv-urgences-sub': 'خدمة الطوارئ الطبية', 'srv-urgences-desc': 'قسم الطوارئ لدينا مفتوح على مدار 24 ساعة في اليوم، 7 أيام في الأسبوع، 365 يوماً في السنة. فريق طبي مؤهل حاضر دائماً للتعامل مع أي حالة طبية طارئة بسرعة وكفاءة.', 'srv-urgences-feat-0': 'متاح 24/24 — 7/7', 'srv-urgences-feat-1': 'فريق طبي دائم', 'srv-urgences-feat-2': 'معدات إنعاش كاملة', 'srv-urgences-feat-3': 'رعاية فورية', 'srv-urgences-feat-4': 'تنسيق مع المستشفيات',
        'srv-anapate-title': 'علم الأمراض (Anapate)', 'srv-anapate-sub': 'التشريح المرضي', 'srv-anapate-desc': 'يقوم قسم علم الأمراض والتشريح المرضي بإجراء تحاليل نسيجية وخلوية لتحديد تشخيصات دقيقة. يفحص أطباؤنا عينات الأنسجة باستخدام أحدث المعدات.', 'srv-anapate-feat-0': 'تحاليل نسيجية', 'srv-anapate-feat-1': 'دراسات خلوية', 'srv-anapate-feat-2': 'خزعات وعينات', 'srv-anapate-feat-3': 'نتائج موثوقة وسريعة', 'srv-anapate-feat-4': 'تقارير مفصلة',
        'srv-laboratoire-title': 'المختبر', 'srv-laboratoire-sub': 'التحاليل البيولوجية والطبية', 'srv-laboratoire-desc': 'يُجري مختبر التحاليل الطبية لدينا مجموعة واسعة من الفحوصات البيولوجية: تحاليل الدم، البول، علم الجراثيم، الأمصال وأكثر من ذلك بكثير. يتم إرسال النتائج بسرعة للحصول على رعاية مثالية.', 'srv-laboratoire-feat-0': 'تحاليل دم كاملة', 'srv-laboratoire-feat-1': 'تحاليل البول', 'srv-laboratoire-feat-2': 'علم الجراثيم والأمصال', 'srv-laboratoire-feat-3': 'نتائج سريعة', 'srv-laboratoire-feat-4': 'معدات آلية',
        'srv-imagerie-title': 'التصوير الطبي', 'srv-imagerie-sub': 'الأشعة والموجات فوق الصوتية', 'srv-imagerie-desc': 'يقدم قسم التصوير الطبي صور أشعة رقمية وفحوصات بالموجات فوق الصوتية لتشخيص دقيق وسريع. يقوم الفنيون وأطباء الأشعة لدينا بتفسير الصور بمنتهى الدقة.', 'srv-imagerie-feat-0': 'أشعة رقمية', 'srv-imagerie-feat-1': 'موجات فوق صوتية', 'srv-imagerie-feat-2': 'تفسير من قبل أطباء الأشعة', 'srv-imagerie-feat-3': 'نتائج فورية', 'srv-imagerie-feat-4': 'أرشفة رقمية',

        'spec-dentiste-title': 'طب الأسنان', 'spec-dentiste-role': 'جراح أسنان', 'spec-dentiste-desc': 'تتولى عيادة الأسنان لدينا جميع أمراض الفم والأسنان: العلاجات التحفظية، الخلع، الأطراف الصناعية، إزالة الترسبات وتبييض الأسنان. متابعة منتظمة لصحة فم مثالية.', 'spec-dentiste-acte-0': 'علاجات تحفظية', 'spec-dentiste-acte-1': 'خلع الأسنان', 'spec-dentiste-acte-2': 'تعويضات سنية', 'spec-dentiste-acte-3': 'إزالة الترسبات', 'spec-dentiste-acte-4': 'علاج التسوس',
        'spec-gynecologie-title': 'أمراض النساء', 'spec-gynecologie-role': 'طبيب أمراض النساء والتوليد', 'spec-gynecologie-desc': 'يضمن قسم أمراض النساء لدينا المتابعة النسائية والتوليدية للمرأة في جميع مراحل حياتها. الاستشارات، الحمل، الفحص، والوقاية من أمراض النساء.', 'spec-gynecologie-acte-0': 'متابعة الحمل', 'spec-gynecologie-acte-1': 'استشارات أمراض النساء', 'spec-gynecologie-acte-2': 'الموجات فوق الصوتية التوليدية', 'spec-gynecologie-acte-3': 'الفحص والكشف', 'spec-gynecologie-acte-4': 'تنظيم الأسرة',
        'spec-orthopedie-title': 'جراحة العظام', 'spec-orthopedie-role': 'جراح عظام', 'spec-orthopedie-desc': 'يعالج قسم العظام أمراض الجهاز الحركي: الصدمات، الكسور، آلام المفاصل، وأمراض العظام والأوتار. تشخيص دقيق وخطة علاج مناسبة.', 'spec-orthopedie-acte-0': 'الكسور والإصابات', 'spec-orthopedie-acte-1': 'آلام المفاصل', 'spec-orthopedie-acte-2': 'أمراض العظام', 'spec-orthopedie-acte-3': 'إعادة التأهيل', 'spec-orthopedie-acte-4': 'الالتواءات والتهاب الأوتار',
        'spec-cci-title': 'مركز العلاج الكيميائي', 'spec-cci-role': 'مركز العلاج الكيميائي الوريدي (CCI)', 'spec-cci-desc': 'يضمن مركز CCI لدينا تركيب، متابعة، وصيانة الغرف المزروعة للمرضى الذين يخضعون لعلاج وريدي طويل الأمد، في بيئة آمنة ومعقمة.', 'spec-cci-acte-0': 'تركيب CCI', 'spec-cci-acte-1': 'متابعة وصيانة', 'spec-cci-acte-2': 'تسريب وريدي', 'spec-cci-acte-3': 'بروتوكولات علاج الأورام', 'spec-cci-acte-4': 'رعاية تمريضية متخصصة',
        'spec-gastrologie-title': 'أمراض الجهاز الهضمي', 'spec-gastrologie-role': 'أخصائي أمراض الجهاز الهضمي', 'spec-gastrologie-desc': 'يتكفل أخصائي الجهاز الهضمي لدينا بأمراض الجهاز الهضمي: المعدة، الأمعاء، الكبد، البنكرياس والمرارة. استشارات، تنظير ومتابعة لأمراض الجهاز الهضمي المزمنة.', 'spec-gastrologie-acte-0': 'أمراض الجهاز الهضمي', 'spec-gastrologie-acte-1': 'أمراض الكبد', 'spec-gastrologie-acte-2': 'تنظير القولون والمعدة', 'spec-gastrologie-acte-3': 'الارتجاع والقرحة', 'spec-gastrologie-acte-4': 'الأمراض الالتهابية',
        'spec-pediatrie-title': 'طب الأطفال', 'spec-pediatrie-role': 'أخصائي طب الأطفال', 'spec-pediatrie-desc': 'يضمن طبيب الأطفال لدينا متابعة نمو وتطور الطفل من الولادة وحتى المراهقة. الاستشارات، التطعيمات، أمراض الطفولة، والفحوصات الصحية الدورية.', 'spec-pediatrie-acte-0': 'متابعة النمو', 'spec-pediatrie-acte-1': 'التطعيمات', 'spec-pediatrie-acte-2': 'أمراض الطفولة', 'spec-pediatrie-acte-3': 'فحوصات صحية', 'spec-pediatrie-acte-4': 'التغذية والنظام الغذائي',
        'spec-cardiologie-title': 'أمراض القلب', 'spec-cardiologie-role': 'طبيب قلب', 'spec-cardiologie-desc': 'يضمن قسم أمراض القلب الفحص، التشخيص والمتابعة لأمراض القلب والأوعية الدموية. تخطيط القلب، صدى القلب، جهاز هولتر واستشارات متخصصة لصحة قلبك.', 'spec-cardiologie-acte-0': 'تخطيط القلب (ECG)', 'spec-cardiologie-acte-1': 'تخطيط صدى القلب', 'spec-cardiologie-acte-2': 'هولتر القلب', 'spec-cardiologie-acte-3': 'ارتفاع ضغط الدم', 'spec-cardiologie-acte-4': 'قصور القلب',
      }
    };

    function applyLang(lang: string) {
      const l = lang === 'ar' ? 'ar' : 'fr';
      const dict = translations[l];
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
      try { localStorage.setItem('preferred_lang', l); } catch(_) {}
      document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')!;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });
      document.querySelectorAll<HTMLInputElement>('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph')!;
        if (dict[key] !== undefined) el.placeholder = dict[key];
      });
      document.querySelectorAll<HTMLElement>('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === l);
      });
    }

    // Apply saved language on mount (after hydration)
    const savedLang = (() => { try { return localStorage.getItem('preferred_lang') || 'fr'; } catch(_) { return 'fr'; } })();
    applyLang(savedLang);

    // Click handler for switcher buttons
    const onLangClick = (e: MouseEvent) => {
      const btn = (e.target as Element).closest<HTMLElement>('.lang-btn');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang');
      if (lang) applyLang(lang);
    };
    document.addEventListener('click', onLangClick, true);


    // 1. Current year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // 2. Topbar & Header offset
    const topbar = document.querySelector(".topbar") as HTMLElement | null;
    const header = document.getElementById("header") as HTMLElement | null;

    const setHeaderOffset = () => {
      if (header) {
        const h = topbar ? topbar.offsetHeight : 0;
        header.style.top = h + "px";
      }
    };
    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);

    // 3. Sticky Header & Back to Top visibility & Scroll Spy
    const bttBtn = document.getElementById("back-to-top");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (header) {
        header.classList.toggle("scrolled", currentScroll > 60);
      }
      if (bttBtn) {
        bttBtn.classList.toggle("visible", currentScroll > 400);
      }
      if (topbar && header) {
        if (currentScroll > 80) {
          topbar.style.transform = "translateY(-100%)";
          topbar.style.transition = "transform .3s ease";
          if (header.classList.contains("scrolled")) {
            header.style.top = "0";
          }
        } else {
          topbar.style.transform = "translateY(0)";
          setHeaderOffset();
        }
      }

      // Scroll spy
      let currentSectionId = "";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (currentScroll + 120 >= el.offsetTop) {
          currentSectionId = el.id;
        }
      });
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === "#" + currentSectionId);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 4. Mobile menu (Event Delegation for SPA)
    const onMobileMenuClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const btn = target.closest('#menu-toggle');
      const nav = document.getElementById('navbar');
      
      if (btn && nav) {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
        return;
      }
      
      if (nav && target.closest('#navbar a')) {
        const toggleBtn = document.getElementById('menu-toggle');
        if (toggleBtn) toggleBtn.classList.remove('open');
        nav.classList.remove('open');
      }
    };
    document.addEventListener('click', onMobileMenuClick);

    // 5. Intersection Observer — Animate elements
    const animateEls = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    animateEls.forEach((el) => observer.observe(el));

    // 6. Stat Counter animation
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const decimal = el.getAttribute("data-decimal") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1800;
      const steps = 60;
      const step = target / steps;
      let count = 0;
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        if (decimal) {
          el.textContent = count.toFixed(0) + decimal;
        } else if (suffix) {
          el.textContent = suffix;
        } else {
          el.textContent = Math.floor(count).toString();
        }
      }, duration / steps);
    };

    const counters = document.querySelectorAll(
      ".stat-counter, .hero-stat .stat-number[data-target]"
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));

    // 7. Hero Particles
    const particlesContainer = document.getElementById("hero-particles");
    if (particlesContainer && particlesContainer.childElementCount === 0) {
      const TOTAL = 18;
      for (let i = 0; i < TOTAL; i++) {
        const dot = document.createElement("div");
        dot.style.cssText = `
          position: absolute;
          width: ${Math.random() * 6 + 3}px;
          height: ${Math.random() * 6 + 3}px;
          background: rgba(20,184,166,${Math.random() * 0.3 + 0.1});
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: float-particle ${Math.random() * 8 + 6}s ease-in-out infinite;
          animation-delay: ${Math.random() * -8}s;
        `;
        particlesContainer.appendChild(dot);
      }
    }

    // 8. Gallery Lightbox
    const galleryItems = document.querySelectorAll(".gallery-item");
    const cleanupFns: Array<() => void> = [];

    galleryItems.forEach((item) => {
      const clickHandler = () => {
        const img = item.querySelector("img");
        if (!img) return;
        const caption = item.querySelector(".gallery-caption");
        const overlay = document.createElement("div");
        overlay.id = "lightbox";
        overlay.style.cssText = `
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,.92);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 16px;
          cursor: zoom-out; padding: 20px;
        `;
        const lbImg = document.createElement("img");
        lbImg.src = img.src;
        lbImg.style.cssText =
          "max-width: 90vw; max-height: 80vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,.5);";
        const lbCaption = document.createElement("p");
        lbCaption.textContent = caption ? caption.textContent : "";
        lbCaption.style.cssText =
          "color: rgba(255,255,255,.85); font-size: 1rem;";
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        closeBtn.style.cssText = `position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,.15); border: none; color: #fff; font-size: 1.5rem; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;`;

        overlay.appendChild(lbImg);
        overlay.appendChild(lbCaption);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        const close = () => {
          overlay.remove();
          document.body.style.overflow = "";
        };
        overlay.addEventListener("click", close);
        closeBtn.addEventListener("click", close);
      };
      item.addEventListener("click", clickHandler);
      cleanupFns.push(() => item.removeEventListener("click", clickHandler));
    });

    // 9. Back to Top Click
    if (bttBtn) {
      const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });
      bttBtn.addEventListener("click", scrollToTop);
      cleanupFns.push(() => bttBtn.removeEventListener("click", scrollToTop));
    }

    // 10. Booking Form submission
    const form = document.getElementById("booking-form") as HTMLFormElement | null;
    if (form) {
      const submitHandler = (e: Event) => {
        e.preventDefault();
        const nameInput = document.getElementById("f-name") as HTMLInputElement | null;
        const serviceSelect = document.getElementById("f-service") as HTMLSelectElement | null;
        const dateInput = document.getElementById("f-date") as HTMLInputElement | null;

        const name = nameInput ? nameInput.value.trim() : "";
        const svcText = serviceSelect
          ? serviceSelect.options[serviceSelect.selectedIndex]?.text || ""
          : "";
        const date = dateInput ? dateInput.value : "";

        const btn = form.querySelector(".btn-submit-appt") as HTMLButtonElement | null;
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check-circle"></i> تم الإرسال بنجاح!';
          btn.style.background = "linear-gradient(135deg, #059669, #10b981)";
          btn.disabled = true;

          setTimeout(() => {
            alert(
              `✅ شكراً لك يا ${name}!\n\nتم استلام طلب حجز موعدك بنجاح.\nالتخصص: ${svcText}\nالتاريخ: ${date}\n\nسيتواصل معك فريقنا خلال أقل من 24 ساعة لتأكيد الموعد.`
            );
            form.reset();
            btn.innerHTML = orig;
            btn.style.background = "";
            btn.disabled = false;
          }, 800);
        }
      };
      form.addEventListener("submit", submitHandler);
      cleanupFns.push(() => form.removeEventListener("submit", submitHandler));
    }

    // 11. Remove Netlify Badge & Drawer script/elements dynamically
    const removeNetlifyElements = () => {
      const selectors = [
        '[id*="netlify"]',
        '[class*="netlify"]',
        '[data-netlify-badge]',
        'iframe[src*="netlify"]',
        'a[href*="netlify.com"]',
        'button[aria-label*="Netlify"]',
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (
            el.id !== "react-loader-root" &&
            el.id !== "react-carousel-root"
          ) {
            el.remove();
          }
        });
      });
    };

    removeNetlifyElements();
    const netlifyInterval = setInterval(removeNetlifyElements, 500);
    cleanupFns.push(() => clearInterval(netlifyInterval));

    return () => {
      window.removeEventListener("resize", setHeaderOffset);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener('click', onLangClick, true);
      document.removeEventListener('click', onMobileMenuClick);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return null;
}
