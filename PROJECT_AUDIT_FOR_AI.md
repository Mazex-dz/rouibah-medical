# 📑 CAHIER DES CHARGES TECHNIQUE COMPLET — CLINIQUE MÉDICALE ROUIBAH
## Projet : Plateforme Web Médicale — 3 Pages — Bordj Menaïel, Boumerdès, Algérie

---

## 🏥 Identité & Contexte du Projet

- **Client :** Clinique Médicale Rouibah (Rouibah Medical Group)
- **Localisation :** Bordj Menaïel, Wilaya de Boumerdès — Coordonnées GPS : `36.7404707, 3.7351859`
- **Activité :** Centre Médical Pluridisciplinaire Privé — Urgences 24h/24 et 7j/7
- **Présence numérique existante :** Page Facebook (`Rouibah Medical Group`) + Google Maps (31 avis, note 3.7/5)
- **Contacts intégrés dans le site :** `0559 50 50 01`, `0559 50 50 02`, `0559 50 50 03`, `0559 50 50 05`, `0559 40 01 00`
- **Tech Stack :** Next.js 16.3.0 · React 19.2.8 · TypeScript 5 · Tailwind CSS v4 · Framer Motion 13 · Lucide-React · FontAwesome 6 · Vanilla HTML5/CSS3/JS (version standalone)
- **Système bilingue :** Arabe (RTL) ↔ Français (LTR) — basculement instantané sans rechargement

---

## 📄 PAGE 1 — Page Principale / Accueil (`index.html`)
> **Fichier :** `index.html` — **1 122 lignes — 71.8 Ko**
> **Équivalent Next.js :** `app/page.tsx` — 1 338 lignes — 69.3 Ko

### Structure complète section par section :

---

### 🔝 TOP BAR (Barre supérieure)
- Adresse géographique : Bordj Menaïel, Wilaya de Boumerdès, Algérie
- Horaires : Ouvert 24h/24, 7j/7
- Liens réseaux : Facebook, WhatsApp, bouton "Appeler" direct (`tel:0559505001`)

---

### 🧭 HEADER / NAVIGATION (Entête)
- **Logo animé :** Icône `fa-heart-pulse` + "Rouibah Medical" (EN) + "عيادة الرويبح" (AR)
- **Navigation principale :**
  - Switcher de pages : `Accueil` (actif) / `Services` / `Les Spécialités`
  - Liens d'ancres : `À Propos` / `Notre Équipe` / `Galerie` / `Avis Patients` / `Contact`
- **CTA (Call To Action) :** Bouton "Prendre Rendez-vous" → ancre `#appointment`
- **Sélecteur de langue :** Boutons `FR` (Français) / `العربية` (Arabe)
- **Menu Burger** (Mobile) : 3 barres animées pour ouverture du menu responsive
- **Liens mobile additionnels** : Liens rapides Services & Spécialités dans le menu mobile

---

### 🦸 HERO SECTION (Section d'accueil principale)
- **Fond :** Photo réelle de la clinique (Google Maps Street View) avec overlay dégradé + particules animées
- **Badge de certification :** "Centre Médical Agréé — Bordj Menaïel, Algérie" avec icône bouclier
- **Titre principal (H1) :** "صحتك أمانة في أيدٍ متخصصة وموثوقة" (Votre santé est entre des mains spécialisées et fiables)
- **Sous-titre :** Description de la mission de soins de la clinique en arabe
- **Boutons d'action :**
  - "Réserver un rendez-vous" → `#appointment`
  - "Découvrez-nous" → `#about`
- **Statistiques animées (compteurs) :**
  - `31+` avis sur Google
  - `6+` spécialités médicales
  - `24h` Urgences 24/7
- **Indicateur de défilement :** "Découvrir plus" + icône chevron bas

---

### 🚨 EMERGENCY BAR (Bande d'urgences)
- Icône siren animée (effet pulse-ring)
- Texte : "Service des Urgences Ouvert 24/7 — Ne tardez pas"
- Bouton d'appel immédiat : `tel:0559505001`

---

### ℹ️ ABOUT SECTION (À propos) — `id="about"`
- **Images :** 2 photos réelles de la clinique (Google Maps) avec badge flottant "Centre Médical Intégré — Bordj Menaïel" et badge de note Google 3.7/5
- **Texte de mission :** "Rouibah Medical Group" est un centre médical privé fondé pour servir les habitants de Bordj Menaïel et ses environs
- **4 valeurs fondamentales :**
  1. Précision & Efficacité
  2. Soins Humains
  3. Technologies Avancées
  4. Développement Continu
- **CTA :** Bouton "اكتشف خدماتنا" (Découvrez nos services) → `#services`

---

### 📊 STATS SECTION (Compteurs animés)
- `500+` Patients accompagnés
- `12+` Médecins spécialistes
- `6` Spécialités médicales
- `3.7/5` Note Google Maps

---

### 🏥 SERVICES SECTION — `id="services"` (6 services en grille)
Chaque carte contient : numéro, icône, titre, description, liste de 3 caractéristiques.

| N° | Service | Caractéristiques |
| :---: | :--- | :--- |
| **01** | **Médecine Générale & Urgences** | Accueil immédiat, Diagnostic rapide, Surveillance médicale continue |
| **02** | **Médecine Dentaire & Chirurgie** | Soins sans douleur, Esthétique dentaire, Implants immédiats |
| **03** | **Gynécologie & Obstétrique** | Suivi grossesse, Accouchement naturel/césarienne, Soins post-partum |
| **04** | **Pédiatrie** | Suivi croissance, Vaccinations, Maladies infantiles |
| **05** | **Laboratoire d'Analyses Médicales** | Analyses sang/urine, Bactériologie/Anapath, Résultats rapides |
| **06** | **Imagerie Médicale & Radiologie** | Radiographie (Radio), Échographie (Echo), Imagerie spécialisée |

---

### 💡 WHY US SECTION (Pourquoi nous choisir ?) — `id="whyus"`
- **4 avantages différenciants :**
  1. Urgences 24/7 sans interruption
  2. Équipements diagnostiques les plus modernes
  3. Amélioration continue du service
  4. Environnement propre et stérilisé
- Photo d'équipe médicale + carte CTA "هل لديك سؤال؟ فريقنا في خدمتك دائماً"

---

### 👨‍⚕️ DOCTORS SECTION (Équipe Médicale) — `id="doctors"`
- **4 fiches médecins :**
  1. Dr. Rouibah — Médecin Directeur & Généraliste
  2. Dr. Gynécologue Spécialiste — Gynécologie-Obstétrique
  3. Dr. Pédiatre Spécialiste — Pédiatrie
  4. Équipe d'Urgences — Médecins Urgentistes & Infirmiers
- Chaque carte : photo, nom, spécialité, overlay "احجز موعداً" au survol

---

### 🖼️ GALLERY SECTION (Galerie de la clinique) — `id="gallery"`
- **12 photos** réelles de l'intérieur de la clinique (Google Maps)
- Grille responsive avec des items larges (wide) alternés
- Carousel interactif React (composant React intégré via `react-bundle.js`)
- Chaque photo : caption descriptif

---

### ⭐ TESTIMONIALS SECTION (Avis Patients Google) — `id="testimonials"`
- Note globale affichée : **3.7/5** sur 31 avis Google
- **5 vrais avis Google Maps** intégrés (avec traduction arabe de chaque avis) :
  1. **Lynda Lynda** ★★★★★ — Éloge d'une médecin de médecine interne
  2. **Aklil Sou** ★★★★★ — Soins et dévouement exceptionnels
  3. **Xasraw Ismail** ★★★★★ — Amélioration constante, professionnalisme
  4. **Youcef Rouibah** ★★★★★ — Bonne clinique, personnel accueillant
  5. **Bilal Salem** ★★★★★ — Personnel sérieux, service Anapath excellent
- **Réponses officielles** de la clinique sous les avis
- Lien direct vers la fiche Google Maps pour lire tous les avis

---

### 🔄 PROCESS SECTION (Comment ça marche ?) — `id="process"`
4 étapes illustrées pour la prise en charge :
1. Réserver le rendez-vous (téléphone / formulaire / WhatsApp)
2. Accueil par le médecin
3. Diagnostic précis (examens et analyses)
4. Plan de traitement + suivi régulier

---

### 📞 CONTACT & MAP SECTION — `id="contact"`
- **Adresse :** Bordj Menaïel (Bordj Menaiel), Wilaya de Boumerdès — coordonnées GPS
- **Horaires :** Ouvert 24/7 tous les jours y compris les jours fériés
- **Canaux de contact :** Téléphone `0559505001`, WhatsApp, Facebook
- **Google Maps intégré :** Iframe embed de la localisation exacte de la clinique
- Bouton "احصل على الاتجاهات" (Obtenir l'itinéraire) → lien direct Google Maps

---

### 📅 APPOINTMENT FORM SECTION (Formulaire de réservation) — `id="appointment"`
- Fond photo de la clinique avec overlay sombre
- **Formulaire de réservation complet :**
  - Champs : Nom complet, Téléphone, Spécialité (liste déroulante avec 6 options), Date préférée, Description de la situation (optionnel)
  - Bouton de soumission "إرسال طلب الحجز" (Envoyer la demande)
  - Note de confidentialité : informations sécurisées, non partagées
- **Paneau latéral "Pourquoi réserver ?" :**
  - 5 avantages : confirmation immédiate, rappel 24h avant, équipe prête, environnement propre, service après-visite
  - Encart URGENCE avec bouton d'appel immédiat

---

### 🦶 FOOTER (Pied de page)
- **Logo** + description courte de la mission
- **Réseaux sociaux :** Facebook, Instagram, WhatsApp, Google Maps
- **Liens rapides :** Accueil, À propos, Services, Équipe, Galerie, Avis, Rendez-vous
- **Spécialités :** Liens vers les 6 spécialités
- **Contacts :** Adresse, Horaires 24/7, Facebook, Note Google (3.7/5 — 31 avis)
- Copyright © Groupe Médical Rouibah
- **Bouton "Retour en haut"** flottant

---

---

## 📄 PAGE 2 — Page Services (`app/services/page.tsx`)
> **Fichier :** `app/services/page.tsx` — **183 lignes — 7.5 Ko**
> **URL :** `/services` (Next.js App Router)

### SEO :
- **Title :** `Nos Services | Groupe Médical Rouibah — Bordj Menaïel`
- **Description :** Urgences 24/7, Anapate, Laboratoire d'analyses, Imagerie médicale à Bordj Menaïel

### Structure de la page :

#### 1. Hero Banner (Bannière d'en-tête interne)
- Tag : "Nos Services Médicaux"
- Titre H1 : "Des soins médicaux complets et accessibles"
- Description : Services de haute qualité à Bordj Menaïel par des professionnels qualifiés
- **2 boutons CTA :** "Appeler maintenant" (`tel:0559505001`) + "Prendre rendez-vous" (`/#appointment`)

#### 2. Services Grid (Grille détaillée des 4 services majeurs)
Chaque service : zone image placeholder (à remplacer par photos WhatsApp), icône colorée, titre, sous-titre, description longue, liste de 5 caractéristiques, boutons Appeler + Rendez-vous.

| Service | Couleur | Description | 5 Caractéristiques |
| :--- | :---: | :--- | :--- |
| **Urgences 24/7** | Rouge `#ef4444` | Équipe médicale 24/24 · 365j/an pour toute urgence | Disponible 24/7 · Équipe permanente · Matériel de réanimation · Prise en charge immédiate · Coordination hôpitaux |
| **Anapate (Anatomopathologie)** | Violet `#8b5cf6` | Analyses histologiques et cytologiques pour diagnostics précis | Analyses histologiques · Études cytologiques · Biopsies · Résultats fiables · Rapports détaillés |
| **Laboratoire d'Analyses** | Cyan `#0891b2` | Large éventail d'examens biologiques, résultats rapides | Analyses sang complètes · Analyses urine · Bactériologie & sérologie · Résultats rapides · Équipements automatisés |
| **Imagerie Médicale** | Teal `#0f766e` | Radiographies numériques et échographies, interprétées par radiologues | Radiographie numérique · Échographie · Interprétation radiologues · Résultats immédiats · Archivage numérique |

> **Note :** Les zones images de cette page sont actuellement des **placeholders** (`Image à venir`) — elles sont destinées à recevoir les **photos WhatsApp** triées et organisées.

#### 3. CTA Strip (Bandeau d'appel à l'action finale)
- Texte : "Besoin d'une consultation d'urgence ? Notre équipe est disponible 24h/24"
- **2 boutons téléphoniques :** `0559 50 50 01` et `0559 50 50 02`

---

---

## 📄 PAGE 3 — Page Spécialités (`app/specialistes/page.tsx`)
> **Fichier :** `app/specialistes/page.tsx` — **215 lignes — 9.8 Ko**
> **URL :** `/specialistes` (Next.js App Router)

### SEO :
- **Title :** `Les Spécialités | Groupe Médical Rouibah — Bordj Menaïel`
- **Description :** Dentisterie, Gynécologie, Orthopédie, CCI, Gastroentérologie, Pédiatrie, Cardiologie — sur rendez-vous.

### Structure de la page :

#### 1. Hero Banner (Bannière d'en-tête interne — variante spécialistes)
- Tag : "Nos Spécialités Médicales"
- Titre H1 : "Les spécialités médicales à votre service"
- Description : Toutes les spécialités sous un même toit, disponibles sur rendez-vous à Bordj Menaïel
- **2 boutons CTA :** "Prendre rendez-vous" (`/#appointment`) + "0559 50 50 01" (appel direct)

#### 2. Quick Nav Pills (Barre de navigation rapide par spécialité)
- Pilules de navigation cliquables (ancres `#id`) pour chaque spécialité avec couleur propre et icône FontAwesome.

#### 3. Liste des 7 Spécialités (alternance gauche/droite — layout zigzag)
Chaque spécialité : image placeholder (pour photo WhatsApp), badge "Disponible sur rendez-vous", icône, titre (H2), rôle du spécialiste, description longue, liste de 5 actes médicaux, boutons "Rendez-vous" + "Appeler".

| Spécialité | Couleur | Spécialiste | 5 Actes Médicaux |
| :--- | :---: | :--- | :--- |
| **Dentisterie** | Cyan `#0891b2` | Chirurgien-Dentiste | Soins conservateurs · Extraction · Prothèses · Détartrage · Traitement des caries |
| **Gynécologie** | Rose `#db2777` | Gynécologue-Obstétricien | Suivi grossesse · Consultations · Échographies obstétricales · Dépistage · Contraception |
| **Orthopédie** | Ambre `#d97706` | Chirurgien Orthopédiste | Fractures & traumatismes · Douleurs articulaires · Pathologies osseuses · Rééducation · Entorses |
| **CCI** | Violet `#7c3aed` | Centre de Chimiothérapie Intraveineux | Pose de CCI · Suivi et entretien · Perfusions IV · Protocoles oncologiques · Soins infirmiers spécialisés |
| **Gastroentérologie** | Vert `#059669` | Gastroentérologue | Pathologies digestives · Hépatologie · Coloscopie & endoscopie · Reflux & ulcères · Maladies inflammatoires |
| **Pédiatrie** | Vert clair `#16a34a` | Pédiatre Spécialisé | Suivi de croissance · Vaccinations · Maladies infantiles · Bilans de santé · Alimentation & nutrition |
| **Cardiologie** | Rouge `#dc2626` | Cardiologue | ECG · Échocardiographie · Holter cardiaque · Hypertension artérielle · Insuffisance cardiaque |

> **Note :** Les zones images de cette page sont actuellement des **placeholders** — elles sont destinées à recevoir les **photos WhatsApp** organisées par spécialité.

#### 4. CTA Strip (Bandeau final)
- Texte : "Besoin d'une consultation spécialisée ? Appelez-nous pour prendre rendez-vous"
- **2 boutons :** `0559 50 50 01` + "Rendez-vous en ligne" (`/#appointment`)

---

---

## 🧩 COMPOSANTS PARTAGÉS (PageShell & Scripts)

### `components/PageShell.tsx` (148 lignes — 7.8 Ko)
- Enveloppe commune (`layout shell`) pour les pages Services et Spécialités.
- Inclut : Header (avec navigation, sélecteur de langue, menu mobile), Footer complet.
- Injecte les scripts client côté navigateur (langue, animations de défilement).

### `components/ClientScripts.tsx` (494 lignes — 52 Ko)
- Gestion du menu burger mobile animé
- Compteurs animés au scroll (`IntersectionObserver`)
- Carousel / Slider des avis et de la galerie React
- Validation et traitement des formulaires de réservation
- Effets de défilement parallaxe

### `public/lang-switcher.js` (581 lignes — 41.4 Ko)
- **Dictionnaire bilingue complet** (200+ clés) Français ↔ Arabe
- Basculement instantané de l'interface sans rechargement de page
- Inversion automatique de la direction `RTL` ↔ `LTR` sur tout le DOM
- Mémorisation du choix dans le `localStorage`

---

---

## 📊 TABLEAU DE SYNTHÈSE DES 3 PAGES

| Critère | Page Accueil (`index.html`) | Page Services | Page Spécialités |
| :--- | :---: | :---: | :---: |
| **Taille du fichier** | 71.8 Ko | 7.5 Ko | 9.8 Ko |
| **Nombre de lignes** | 1 122 | 183 | 215 |
| **Sections / Blocs** | 12 sections | 3 sections | 4 sections |
| **Services / Spécialités listés** | 6 services | 4 services détaillés | 7 spécialités détaillées |
| **CTA téléphoniques intégrés** | 5 boutons d'appel | 3 boutons d'appel | 3 boutons d'appel |
| **Photos réelles intégrées** | 14 photos Google Maps | Placeholders (WhatsApp à venir) | Placeholders (WhatsApp à venir) |
| **Avis Google intégrés** | 5 vrais avis + traductions | — | — |
| **Formulaire de réservation** | ✅ Complet | Lien vers accueil | Lien vers accueil |
| **Carte Google Maps intégrée** | ✅ | — | — |
| **Support bilingue AR/FR** | ✅ complet | ✅ complet | ✅ complet |
| **Animations & micro-interactions** | ✅ avancées | ✅ basiques | ✅ basiques |

---

## ⚙️ TRAVAUX EN ATTENTE (Pending Tasks)

1. **Intégration des photos WhatsApp** dans les zones placeholder des pages `Services` et `Spécialités` — lot initial (84 photos triées) + 4 à 5 lots futurs.
2. **Remplacement des avatars** de l'équipe médicale (actuellement en SVG gris) par de vraies photos des médecins.
3. **Traduction complète** de tous les textes restants en arabe dans les nouvelles sections.
4. **Déploiement production** sur hébergement sécurisé (Netlify/Vercel — `netlify.toml` déjà configuré).
5. **SEO Local** : optimisation des balises Schema.org pour les établissements de santé et Google Business Profile.
