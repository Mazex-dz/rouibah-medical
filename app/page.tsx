export default function HomePage() {
  return (
    <>
      {/* ============================================================
          TOP BAR
         ============================================================ */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>
              <i className="fa-solid fa-location-dot"></i> برج منايل، ولاية
              بومرداس، الجزائر
            </span>
            <span>
              <i className="fa-solid fa-clock"></i> مفتوح 24 ساعة / 7 أيام
            </span>
          </div>
          <div className="topbar-right">
            <a
              href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:0559505001">
              <i className="fa-solid fa-phone"></i> اتصل بنا
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================
          HEADER
         ============================================================ */}
      <header className="header" id="header">
        <div className="container header-container">
          <a href="#home" className="logo">
            <div className="logo-icon-wrap">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="logo-text">
              <span className="logo-en">Rouibah Medical</span>
              <span className="logo-ar">عيادة الرويبح</span>
            </div>
          </a>

          <nav className="navbar" id="navbar">
            <ul className="nav-links">
              <li>
                <a href="#home">الرئيسية</a>
              </li>
              <li>
                <a href="#about">من نحن</a>
              </li>
              <li>
                <a href="#services">خدماتنا</a>
              </li>
              <li>
                <a href="#doctors">فريقنا</a>
              </li>
              <li>
                <a href="#gallery">معرض الصور</a>
              </li>
              <li>
                <a href="#testimonials">آراء المرضى</a>
              </li>
              <li>
                <a href="#contact">تواصل معنا</a>
              </li>
            </ul>
          </nav>

          <div className="header-cta">
            <a href="#appointment" className="btn btn-primary">
              <i className="fa-solid fa-calendar-plus"></i>
              احجز موعداً
            </a>
            <button
              className="menu-toggle"
              id="menu-toggle"
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================
          HERO SECTION
         ============================================================ */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm02njxxQUSz_VbHcdcNouoeHSMhf_VfnQJdu7K_At85GF4ZMz1gwX29RcjpPHoUhsDaShXHOC6KzWssqg_yn90Kd6fBJmH0LG67UbvPpwAj5N3kcXx2cq5zfAEdabhmasRhgZ8=s1920"
            alt="عيادة الرويبح الطبية"
            loading="eager"
          />
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-particles" id="hero-particles"></div>
        <div className="container hero-content">
          <div className="hero-badge fade-in" data-delay="100">
            <i className="fa-solid fa-shield-heart"></i>
            <span>مركز طبي معتمد — برج منايل، الجزائر</span>
          </div>
          <h1 className="hero-title fade-in" data-delay="200">
            صحتك أمانة في أيدٍ
            <br />
            <span className="gradient-text">متخصصة وموثوقة</span>
          </h1>
          <p className="hero-subtitle fade-in" data-delay="300">
            في عيادة الرويبح نجمع بين الكفاءة الطبية العالية والرعاية الإنسانية
            الحقيقية، لنكون شريكك الصحي الذي تثق به في كل الأوقات.
          </p>
          <div className="hero-buttons fade-in" data-delay="400">
            <a href="#appointment" className="btn btn-hero-primary">
              احجز موعداً الآن
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <a href="#about" className="btn btn-hero-ghost">
              <i className="fa-solid fa-play-circle"></i>
              تعرف علينا
            </a>
          </div>

          <div className="hero-stats fade-in" data-delay="500">
            <div className="hero-stat">
              <div className="stat-number" data-target="31">
                0
              </div>
              <div className="stat-label">تقييم على Google</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number" data-target="6">
                0
              </div>
              <div className="stat-label">تخصصات طبية</div>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <div className="stat-number" data-suffix="ساعة">
                24
              </div>
              <div className="stat-label">استعجالات على مدار الساعة</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>اكتشف المزيد</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* ============================================================
          EMERGENCY BANNER
         ============================================================ */}
      <section className="emergency-bar">
        <div className="container emergency-inner">
          <div className="emergency-icon pulse-ring">
            <i className="fa-solid fa-truck-medical"></i>
          </div>
          <div className="emergency-text">
            <strong>قسم الطوارئ مفتوح 24/7</strong>
            <span>
              نستقبل حالات الطوارئ الطبية على مدار الساعة — لا تتردد في التواصل
            </span>
          </div>
          <a href="tel:0559505001" className="btn btn-emergency">
            <i className="fa-solid fa-phone-volume"></i>
            اتصل الآن
          </a>
        </div>
      </section>

      {/* ============================================================
          ABOUT SECTION
         ============================================================ */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual animate" data-animation="slide-right">
              <div className="about-img-main">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm02njxxQUSz_VbHcdcNouoeHSMhf_VfnQJdu7K_At85GF4ZMz1gwX29RcjpPHoUhsDaShXHOC6KzWssqg_yn90Kd6fBJmH0LG67UbvPpwAj5N3kcXx2cq5zfAEdabhmasRhgZ8=s900"
                  alt="طاقم عيادة الرويبح الطبي"
                />
              </div>
              <div className="about-img-secondary">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkpI4c6DIcoYP3aAHVXTa-jSBMo4ihlebHIeDWY2LiM35V0bfTqBge2qnBKxU7qDJY83ObWliYBjzBmY6lBGF_tz36tr4VKcsmV13xRr88Wc9At_U4XoELHMo8DG1v7aZQAg48p_Beu1reJ=s800"
                  alt="مستلزمات طبية"
                />
              </div>
              <div className="about-badge-float">
                <i className="fa-solid fa-award"></i>
                <div>
                  <strong>مركز طبي متكامل</strong>
                  <span>برج منايل</span>
                </div>
              </div>
              <div className="about-rating-float">
                <div className="float-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span>تقييم Google</span>
                <strong>3.7 / 5</strong>
              </div>
            </div>

            <div className="about-content animate" data-animation="slide-left">
              <span className="label-tag">
                <i className="fa-solid fa-circle-dot"></i> من نحن
              </span>
              <h2 className="section-title">
                رسالتنا: رعاية
                <br />
                طبية تستحقها
              </h2>
              <p className="about-lead">
                عيادة الرويبح (Rouibah Medical Group) هي صرح طبي خاص تأسس لخدمة
                أهالي برج منايل ومناطقها المجاورة، بهدف توفير رعاية صحية
                متكاملة تجمع بين الكفاءة المهنية والإنسانية الراقية.
              </p>
              <p className="about-desc">
                نؤمن أن كل مريض يستحق اهتماماً حقيقياً وتشخيصاً دقيقاً، لذلك نوظف
                أحدث التقنيات الطبية ونختار بعناية فريقاً طبياً مؤهلاً في مختلف
                التخصصات.
              </p>

              <div className="about-values">
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div className="value-text">
                    <h4>الدقة والكفاءة</h4>
                    <p>تشخيص صحيح وعلاج فعّال من أول زيارة</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="value-text">
                    <h4>الرعاية الإنسانية</h4>
                    <p>نعامل كل مريض بالاحترام والتعاطف</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-flask"></i>
                  </div>
                  <div className="value-text">
                    <h4>تقنيات متطورة</h4>
                    <p>أحدث الأجهزة التشخيصية والعلاجية</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fa-solid fa-rotate"></i>
                  </div>
                  <div className="value-text">
                    <h4>تطوير مستمر</h4>
                    <p>نستثمر دائماً في التحسين والنمو</p>
                  </div>
                </div>
              </div>
              <a href="#services" className="btn btn-primary mt-30">
                اكتشف خدماتنا
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS SECTION
         ============================================================ */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="0"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="stat-counter" data-target="500">
              0
            </div>
            <div className="stat-suffix">+</div>
            <p>مريض خُدم</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="100"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <div className="stat-counter" data-target="12">
              0
            </div>
            <div className="stat-suffix">+</div>
            <p>طبيب متخصص</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="200"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-microscope"></i>
            </div>
            <div className="stat-counter" data-target="6">
              0
            </div>
            <div className="stat-suffix"></div>
            <p>تخصصات طبية</p>
          </div>
          <div
            className="stat-box animate"
            data-animation="fade-up"
            data-delay="300"
          >
            <div className="stat-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="stat-counter" data-target="3" data-decimal=".7">
              0
            </div>
            <div className="stat-suffix">/5</div>
            <p>تقييم Google Maps</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
         ============================================================ */}
      <section className="services section bg-wave" id="services">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> خدماتنا الطبية
            </span>
            <h2 className="section-title">
              تخصصات شاملة <span className="text-teal">لرعايتك الكاملة</span>
            </h2>
            <p className="section-lead">
              نوفر مجموعة متكاملة من الخدمات الطبية في مكان واحد، لأن صحتك لا
              تستحق أقل من ذلك.
            </p>
          </div>

          <div className="services-grid">
            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="service-card-inner">
                <div className="service-number">01</div>
                <div className="service-icon">
                  <i className="fa-solid fa-truck-medical"></i>
                </div>
                <h3>الطب العام والطوارئ</h3>
                <p>
                  قسم طوارئ مجهز بالكامل يعمل 24 ساعة في اليوم 7 أيام في الأسبوع
                  لاستقبال جميع الحالات المستعجلة.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> استقبال فوري للحالات
                    الطارئة
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> تشخيص وعلاج سريع
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> إشراف طبي مستمر
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="service-card-inner">
                <div className="service-number">02</div>
                <div className="service-icon">
                  <i className="fa-solid fa-tooth"></i>
                </div>
                <h3>طب وجراحة الأسنان</h3>
                <p>
                  خدمات تقويم وعلاج وتجميل الأسنان بأحدث التقنيات، من يد أطباء
                  متخصصين ذوي خبرة.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> علاج وحشوات بدون ألم
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> تجميل الأسنان
                    والابتسامة
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> زراعة الأسنان الفورية
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="service-card-inner">
                <div className="service-number">03</div>
                <div className="service-icon">
                  <i className="fa-solid fa-baby"></i>
                </div>
                <h3>النساء والتوليد</h3>
                <p>
                  متابعة شاملة للحمل، ولادة آمنة، ورعاية ما بعد الولادة في بيئة
                  مريحة وآمنة.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> متابعة دورية للحامل
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> ولادة طبيعية وقيصرية
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> رعاية ما بعد الوضع
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="service-card-inner">
                <div className="service-number">04</div>
                <div className="service-icon">
                  <i className="fa-solid fa-child-reaching"></i>
                </div>
                <h3>طب الأطفال</h3>
                <p>
                  رعاية متكاملة وشاملة لصحة أطفالك، من الولادة إلى المراهقة،
                  بأيدي أطباء متفانين.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> متابعة النمو والتطور
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> التطعيمات والوقاية
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> علاج أمراض الأطفال
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="400"
            >
              <div className="service-card-inner">
                <div className="service-number">05</div>
                <div className="service-icon">
                  <i className="fa-solid fa-flask-vial"></i>
                </div>
                <h3>المخبر والتحاليل الطبية</h3>
                <p>
                  مخبر حديث ومجهز بأحدث الأجهزة، يوفر نتائج دقيقة وسريعة لجميع
                  أنواع التحاليل.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> تحاليل دم وبول شاملة
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> تحاليل البكتيريولوجيا
                    (Anapath)
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> نتائج سريعة ودقيقة
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="service-card animate"
              data-animation="fade-up"
              data-delay="500"
            >
              <div className="service-card-inner">
                <div className="service-number">06</div>
                <div className="service-icon">
                  <i className="fa-solid fa-x-ray"></i>
                </div>
                <h3>الأشعة والتصوير الطبي</h3>
                <p>
                  قسم أشعة مجهز بالكامل يوفر جميع أنواع التصوير الطبي اللازمة
                  للتشخيص الدقيق.
                </p>
                <ul className="service-features">
                  <li>
                    <i className="fa-solid fa-check"></i> أشعة سينية (Radio)
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> الموجات فوق الصوتية
                    (Echo)
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> تصوير متخصص
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY US SECTION
         ============================================================ */}
      <section className="whyus section" id="whyus">
        <div className="container whyus-grid">
          <div className="whyus-content animate" data-animation="slide-right">
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> لماذا تختارنا؟
            </span>
            <h2 className="section-title">
              ما يجعلنا الخيار
              <br />
              <span className="text-teal">الأول في برج منايل</span>
            </h2>
            <p className="whyus-desc">
              نحن لا نقدم مجرد خدمة طبية — نحن نبني معك علاقة ثقة وشراكة في
              الصحة. ما يميزنا هو التزامنا الثابت بالجودة والتطوير المستمر، حتى في
              مواجهة التحديات.
            </p>

            <div className="features-list">
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="0"
              >
                <div className="feature-icon teal">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className="feature-body">
                  <h4>استعجالات 24/7 بلا انقطاع</h4>
                  <p>
                    طاقم طبي متواجد على مدار الساعة للتعامل مع أي حالة طارئة
                    باحترافية تامة.
                  </p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="100"
              >
                <div className="feature-icon blue">
                  <i className="fa-solid fa-microscope"></i>
                </div>
                <div className="feature-body">
                  <h4>أحدث الأجهزة التشخيصية</h4>
                  <p>
                    نستثمر باستمرار في أجهزة طبية حديثة لضمان دقة التشخيص وجودة
                    العلاج.
                  </p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="200"
              >
                <div className="feature-icon green">
                  <i className="fa-solid fa-person-walking-luggage"></i>
                </div>
                <div className="feature-body">
                  <h4>تحسين مستمر في الخدمة</h4>
                  <p>
                    نأخذ كل ملاحظة مرضانا بجدية تامة ونعمل على تطوير خدماتنا
                    باستمرار.
                  </p>
                </div>
              </div>
              <div
                className="feature-item animate"
                data-animation="slide-right"
                data-delay="300"
              >
                <div className="feature-icon purple">
                  <i className="fa-solid fa-shield-virus"></i>
                </div>
                <div className="feature-body">
                  <h4>بيئة نظيفة ومعقمة</h4>
                  <p>
                    نلتزم بأعلى معايير التعقيم والنظافة لضمان سلامة مرضانا
                    وفريقنا.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="whyus-image animate" data-animation="slide-left">
            <div className="img-stack">
              <img
                className="img-back"
                src="/downloaded_images/img_14.jpg"
                alt="طاقم طبي"
              />
            </div>
            <div className="whyus-cta-card">
              <i className="fa-solid fa-headset"></i>
              <div>
                <strong>هل لديك سؤال؟</strong>
                <span>فريقنا في خدمتك دائماً</span>
              </div>
              <a href="#contact" className="btn btn-sm-primary">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DOCTORS / TEAM SECTION
         ============================================================ */}
      <section className="doctors section bg-soft" id="doctors">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> فريقنا الطبي
            </span>
            <h2 className="section-title">
              أطباء متخصصون <span className="text-teal">في خدمتك</span>
            </h2>
            <p className="section-lead">
              يضم فريق الرويبح الطبي نخبة من الأطباء المتخصصين ذوي الخبرة
              والكفاءة العالية.
            </p>
          </div>

          <div className="doctors-grid">
            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب متخصص"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white">
                    احجز موعداً
                  </a>
                </div>
              </div>
              <div className="doctor-info">
                <h4>د. مختص في الطب الداخلي</h4>
                <p>طب داخلي — تجربة 10+ سنوات</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-stethoscope"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="150"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيبة أخصائية"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white">
                    احجز موعداً
                  </a>
                </div>
              </div>
              <div className="doctor-info">
                <h4>د. أخصائية في النساء والتوليد</h4>
                <p>نساء وتوليد — خبرة ومتابعة متميزة</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-heart-pulse"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب أطفال"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white">
                    احجز موعداً
                  </a>
                </div>
              </div>
              <div className="doctor-info">
                <h4>د. أخصائي في طب الأطفال</h4>
                <p>طب الأطفال — رعاية ودافئة</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-child"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="doctor-card animate"
              data-animation="fade-up"
              data-delay="450"
            >
              <div className="doctor-img">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>"
                  alt="طبيب أسنان"
                />
                <div className="doctor-overlay">
                  <a href="#appointment" className="btn btn-sm-white">
                    احجز موعداً
                  </a>
                </div>
              </div>
              <div className="doctor-info">
                <h4>د. جراح أسنان متخصص</h4>
                <p>جراحة وتجميل الأسنان</p>
                <div className="doctor-socials">
                  <span>
                    <i className="fa-solid fa-tooth"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY SECTION
         ============================================================ */}
      <section className="gallery section" id="gallery">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> معرض الصور
            </span>
            <h2 className="section-title">
              داخل <span className="text-teal">عيادة الرويبح</span>
            </h2>
            <p className="section-lead">
              نوفر بيئة طبية حديثة ومريحة تليق بكل مريض.
            </p>
          </div>

          <div className="gallery-grid">
            <div
              className="gallery-item gallery-item-wide animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnY2v8ZLeGFxF3wVFczcIG2l61GOHeUnXlRpkO6ln8lDrsYmhysUKcqge33oRDDrrdKRtUXXdCm6Oyxm7tsyX5B69wKZEZhsOZqGlPSwlbbE02osfsDLv0k4qhKaNdRYthe4sK0=s800"
                alt="صورة من العيادة 1"
              />
              <div className="gallery-caption">
                تحليل الصورة 1: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="50"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2QZJ2uo0pVJykrphmJS9rmSzSXgCTHCKAbeQt_cWMozJjFUaM8P-6pGUghC_cSIn-MFHwTJupsing4KTjGMvhoeIswrZU_ioHyCHCB0PcHWikSbAzwti0o8TeDM2x7DsFCq9o=s800"
                alt="صورة من العيادة 2"
              />
              <div className="gallery-caption">
                تحليل الصورة 2: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkYI0AtSy9FHtA1Wq76X02Dzb7DE4_FxuOq6GfOUqnDc1v4GSul7Bn0PBhhk-1dqziq3Qlxt9CmsLFFvS4uNcP2ODZNgZOl9N0RsZgQxBpRrrrDe1gfl2vnIwwvYeEPIrgCGnkH=s800"
                alt="صورة من العيادة 3"
              />
              <div className="gallery-caption">
                تحليل الصورة 3: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="150"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkENYUE4M9aIsFiiP-4oRlnGf2uZXG2VFILoUnnOTldVudd-BkOCgrlsY2pifltr-BnPmNOSJhjq4TCYGC-_LZwomXZo-1LJ3Gvxn-_fAbQxcEi0LtuhA-bJ5RI8ZMLoTchwuzgxR7ELt8=s800"
                alt="صورة من العيادة 4"
              />
              <div className="gallery-caption">
                تحليل الصورة 4: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkFgnHXHPIjqaHHA01zQl3Ry5hrqmrU-rbD-FcJ2z0_4d607PF0IVleuMaBx5GvsS0WJ4gPG_NDGgZerSc_wVdbi9rgji7fDzFJTaMBJG1He-7KFw04jhk1WaupJj-KcdqjMFGEUzepZT2=s800"
                alt="صورة من العيادة 5"
              />
              <div className="gallery-caption">
                تحليل الصورة 5: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="50"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCeHg3YTAuEB4nIDm2432kvaUSJ9ardDBbI_3trnUf4l_ySJqxeeDyuAgYsTaOiMKezQaqPLGMNAAiOv-rAaatvxsensKCtW00f6yBowUzcPCjs3Hb6Q8mtw2moZRCPpK_BtsAkFI7Q6D6=s800"
                alt="صورة من العيادة 6"
              />
              <div className="gallery-caption">
                تحليل الصورة 6: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLHsDHM3pVxEgKWJJ40bHvEvhRPmZJHKPG0m2-TkMsDsAidDSCXjeb8euQAMLq-AW1eI_gwbUNa7qAYO1-z5VQVA72s9DLcizEwozXYKrloTkJ0f_C0KaMbfjPwXeutG0Fxwwu5SnojMHQ=s800"
                alt="صورة من العيادة 7"
              />
              <div className="gallery-caption">
                تحليل الصورة 7: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="150"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5GyiNZ5hnR3IwdJE4e7B6WoZ4XHwglYPvyXskST789xcrAtIDUIQiiX_dixKAvgxy83TdpxmQgyJdn3TUeMIt6E1tmU5681U52Wdqnc91YBRbTiC_g5xQBhjMFiS829ycREQSAQ=s800"
                alt="صورة من العيادة 8"
              />
              <div className="gallery-caption">
                تحليل الصورة 8: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkjIBH6yFIPAQp-R3NgBkBVDnYZdcf5kBdsoyTsJfjVd7Mes1Lb7qrWaz4vx014P9ExTumxfKCs9Vn6BWUbzB7YdGn4Y2mLuwmLDl07TI88g3EryctgfwT-pahUTH469uDzyZ7PXQ=s800"
                alt="صورة من العيادة 9"
              />
              <div className="gallery-caption">
                تحليل الصورة 9: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="50"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXtfQN9n235zGpo-4bYL3SzKRFIbXhcAP8Ii7ZaGd4kiWs8atqMp_TDDIn36HoeE1idu00D_k8Vj_yJnNWA3XTgva6Yo2_vWhRBks5iukSW_6adKpDv5paFjbxVblc2nHx5bMLYA=s800"
                alt="صورة من العيادة 10"
              />
              <div className="gallery-caption">
                تحليل الصورة 10: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxhMxEI73qXF1tzV38JCxDut08mRkioYRgJGYoZh_9DbDWXE34bcHyv53WU-2cOG6P8XOQkgJIA3AraQD2hF63-OgoDgeoj1iiX_dz_5UxUkqathaDssnDvuav5e3uTSElSwNZs6zxVFgP=s800"
                alt="صورة من العيادة 11"
              />
              <div className="gallery-caption">
                تحليل الصورة 11: مرفق طبي معتمد 🩺
              </div>
            </div>
            <div
              className="gallery-item animate"
              data-animation="fade-up"
              data-delay="150"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0FwP1HDZP6Ss9mGRJt79ayhFJVFP0ztnyTZi-76NOEAcKo9pVOVFgn6lUPh7F9htkbUwlVZxMeVzcDJ3AnZW4DUOO8fMIoc1LronwL9Jbng556rUKzQ7gUZcdFxdIJq4In0w=s800"
                alt="صورة من العيادة 12"
              />
              <div className="gallery-caption">
                تحليل الصورة 12: مرفق طبي معتمد 🩺
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS SECTION
         ============================================================ */}
      <section className="testimonials section bg-soft" id="testimonials">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> آراء مرضانا
            </span>
            <h2 className="section-title">
              ماذا قالوا عنّا <span className="text-teal">على Google?</span>
            </h2>
            <p className="section-lead">
              تقييمات حقيقية من مرضانا على Google Maps — ثقتهم هي وسام شرفنا.
            </p>
            <div
              className="overall-rating animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="rating-score">3.7</div>
              <div className="rating-details">
                <div className="stars-row">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>
                  بناءً على <strong>31 تقييم</strong> على Google Maps
                </p>
                <a
                  href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="google-link"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                  />{" "}
                  قيّمنا على Google
                </a>
              </div>
            </div>
          </div>

          <div className="testimonials-grid">
            {/* ★★★★★ Review 1 - Lynda Lynda */}
            <div
              className="review-card featured animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="review-header">
                <div className="reviewer-avatar">L</div>
                <div className="reviewer-info">
                  <h5>Lynda Lynda</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Je tiens à exprimer ma plus profonde gratitude à l'une des
                formidables médecins du service de médecine interne de la
                clinique Rouibah. Elle a fait preuve d'une compétence et d'un
                dévouement exceptionnels lors de mes soins. Elle ne s'est pas
                contentée de me soigner, mais a également veillé constamment à
                mon bien-être physique et mental, avec une grande gentillesse et
                beaucoup de patience. Un immense merci à cette remarquable
                médecin pour tous ses efforts et son dévouement envers ses
                patients."
              </blockquote>
              <div className="review-translation">
                🌟 ترجمة: "أعرب عن امتناني العميق لإحدى الطبيبات الرائعات في قسم
                الطب الداخلي بعيادة الرويبح. أبدت كفاءة وتفانياً استثنائيين في
                رعايتي. لم تكتفِ بعلاجي فحسب، بل حرصت على رفاهيتي الجسدية
                والنفسية بلطف كبير وصبر."
              </div>
            </div>

            {/* ★★★★★ Review 2 - Aklil Sou */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#10b981,#065f46)",
                  }}
                >
                  A
                </div>
                <div className="reviewer-info">
                  <h5>Aklil Sou</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Que Dieu vous accorde santé et bien-être. Vos soins et votre
                dévouement sont véritablement exceptionnels. Vous êtes une
                source de fierté et d'honneur pour nous et pour les patients, de
                véritables héros de l'ombre !"
              </blockquote>
              <div className="review-translation">
                🌟 ترجمة: "بارك الله فيكم. عنايتكم وتفانيكم استثنائيان حقاً.
                أنتم مصدر فخر وشرف لنا وللمرضى — أبطال حقيقيون!"
              </div>
            </div>

            {/* ★★★★★ Review 3 - xasraw ismail */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#8b5cf6,#4c1d95)",
                  }}
                >
                  X
                </div>
                <div className="reviewer-info">
                  <h5>Xasraw Ismail</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "La clinique Masha'Allah ne cesse de s'améliorer. Malgré les
                conditions difficiles de la région, vous avez su vous adapter
                et prodiguer d'excellents soins. Vous avez été d'un soutien
                indéfectible envers nous et nos patients, malgré nos inquiétudes
                et nos manquements. Cela témoigne de votre grand
                professionnalisme."
              </blockquote>
              <div className="review-translation">
                🌟 ترجمة: "العيادة ما شاء الله لا تزال تتحسن باستمرار. رغم الظروف
                الصعبة للمنطقة، تمكنتم من التكيف وتقديم رعاية ممتازة. دعمكم
                الثابت لنا وللمرضى يشهد على احترافيتكم العالية."
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong>رد عيادة الرويبح:</strong> "بارك الله فيكم. نتمنى
                التوفيق والسداد لكم وللجميع."
              </div>
            </div>

            {/* ★★★★★ Review 4 - youcef rouibah */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#f59e0b,#92400e)",
                  }}
                >
                  Y
                </div>
                <div className="reviewer-info">
                  <h5>Youcef Rouibah</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Très bonne clinique, personnel accueillant et médecin
                compétent. Merci pour votre sérieux."
              </blockquote>
              <div className="review-translation">
                🌟 ترجمة: "عيادة جيدة جداً، الموظفون ودودون والطبيب كفء. شكراً
                على جدّيتكم."
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong>رد عيادة الرويبح:</strong> "شكراً جزيلاً لكم مسبقاً،
                حضراتكم."
              </div>
            </div>

            {/* ★★★★★ Review 5 - Bilal Salem */}
            <div
              className="review-card animate"
              data-animation="fade-up"
              data-delay="400"
            >
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{
                    background: "linear-gradient(135deg,#06b6d4,#164e63)",
                  }}
                >
                  B
                </div>
                <div className="reviewer-info">
                  <h5>Bilal Salem</h5>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <blockquote dir="ltr">
                "Personnel sérieux et à l'écoute des patients, la prise en
                charge est rapide. Le service Anapath est très bien."
              </blockquote>
              <div className="review-translation">
                🌟 ترجمة: "الطاقم جاد ومنتبه للمرضى، والرعاية سريعة. قسم الـ
                Anapath (التحاليل النسيجية) ممتاز."
              </div>
              <div className="owner-reply">
                <i className="fa-solid fa-reply"></i>
                <strong>رد عيادة الرويبح:</strong> "حفظكم الله وأتم عليكم نعمه،
                وشفى جميع المرضى. شكراً جزيلاً."
              </div>
            </div>

            {/* Commitment Card */}
            <div
              className="review-commitment animate"
              data-animation="fade-up"
              data-delay="500"
            >
              <div className="commitment-icon">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h3>التزامنا نحوك</h3>
              <p>
                نأخذ كل رأي وكل تعليق بجدية تامة. ردودنا الفورية على كل تقييم
                يعكس التزامنا الراسخ بتحسين خدماتنا لنلبّي توقعاتكم دائماً.
              </p>
              <a
                href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-teal"
              >
                <i className="fa-brands fa-google"></i>
                اقرأ كل التقييمات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS / HOW TO BOOK SECTION
         ============================================================ */}
      <section className="process section" id="process">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> كيف يعمل النظام؟
            </span>
            <h2 className="section-title">
              أربع خطوات بسيطة{" "}
              <span className="text-teal">للحصول على رعايتك</span>
            </h2>
          </div>

          <div className="process-steps">
            <div
              className="process-step animate"
              data-animation="fade-up"
              data-delay="0"
            >
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <h4>احجز موعدك</h4>
              <p>
                تواصل معنا عبر الهاتف أو نموذج الحجز أو واتساب لتحديد موعدك.
              </p>
            </div>
            <div className="process-arrow">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="process-step animate"
              data-animation="fade-up"
              data-delay="100"
            >
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="fa-solid fa-user-clock"></i>
              </div>
              <h4>استقبال الطبيب</h4>
              <p>
                في الموعد المحدد، يستقبلك الطبيب المتخصص للفحص والتقييم الأولي.
              </p>
            </div>
            <div className="process-arrow">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="process-step animate"
              data-animation="fade-up"
              data-delay="200"
            >
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>
              <h4>التشخيص الدقيق</h4>
              <p>
                يتم إجراء التحاليل والفحوصات اللازمة للوصول لتشخيص دقيق وصحيح.
              </p>
            </div>
            <div className="process-arrow">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="process-step animate"
              data-animation="fade-up"
              data-delay="300"
            >
              <div className="step-number">04</div>
              <div className="step-icon">
                <i className="fa-solid fa-notes-medical"></i>
              </div>
              <h4>خطة العلاج</h4>
              <p>
                يضع لك الطبيب خطة علاجية واضحة مع متابعة دورية حتى شفاءك التام.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT & MAP SECTION
         ============================================================ */}
      <section className="contact section bg-soft" id="contact">
        <div className="container">
          <div
            className="section-header text-center animate"
            data-animation="fade-up"
          >
            <span className="label-tag">
              <i className="fa-solid fa-circle-dot"></i> تواصل معنا
            </span>
            <h2 className="section-title">
              نحن في <span className="text-teal">برج منايل</span> — تعال إلينا
            </h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info animate" data-animation="slide-right">
              <div className="info-card">
                <div className="info-icon blue">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4>العنوان</h4>
                  <p>
                    برج منايل (Bordj Menaiel)
                    <br />
                    ولاية بومرداس، الجزائر
                  </p>
                  <p className="coords">
                    <small>
                      خط العرض: 36.7404707 — خط الطول: 3.7351859
                    </small>
                  </p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon teal">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4>ساعات العمل</h4>
                  <table className="hours-table">
                    <tbody>
                      <tr>
                        <td>الإثنين – الجمعة</td>
                        <td>
                          <span className="open">مفتوح 24/7</span>
                        </td>
                      </tr>
                      <tr>
                        <td>السبت – الأحد</td>
                        <td>
                          <span className="open">مفتوح 24/7</span>
                        </td>
                      </tr>
                      <tr>
                        <td>الأعياد</td>
                        <td>
                          <span className="open">مفتوح 24/7</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon green">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4>وسائل التواصل</h4>
                  <div className="contact-channels">
                    <a href="tel:0559505001" className="channel-btn phone">
                      <i className="fa-solid fa-phone"></i> اتصل بنا
                    </a>
                    <a
                      href="https://wa.me/213559505001"
                      className="channel-btn whatsapp"
                    >
                      <i className="fa-brands fa-whatsapp"></i> واتساب
                    </a>
                    <a
                      href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
                      target="_blank"
                      rel="noreferrer"
                      className="channel-btn facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-wrapper animate" data-animation="slide-left">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.253683058869!2d3.732611!3d36.740475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e7786fe9f2429%3A0x4a748e99eb894554!2sClinique%20Rouibah!5e0!3m2!1sar!2sdz!4v1700000000000!5m2!1sar!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z"
                target="_blank"
                rel="noreferrer"
                className="directions-btn"
              >
                <i className="fa-solid fa-map-location-dot"></i>
                احصل على الاتجاهات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          APPOINTMENT FORM SECTION
         ============================================================ */}
      <section className="appointment section" id="appointment">
        <div className="appt-bg">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm02njxxQUSz_VbHcdcNouoeHSMhf_VfnQJdu7K_At85GF4ZMz1gwX29RcjpPHoUhsDaShXHOC6KzWssqg_yn90Kd6fBJmH0LG67UbvPpwAj5N3kcXx2cq5zfAEdabhmasRhgZ8=s1920"
            alt="خلفية طبية"
          />
          <div className="appt-overlay"></div>
        </div>
        <div className="container appt-container">
          <div className="appt-form-card animate" data-animation="fade-up">
            <div className="appt-form-header">
              <div className="appt-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h2>احجز موعدك الآن</h2>
              <p>أكمل النموذج وسنتصل بك خلال 24 ساعة لتأكيد موعدك.</p>
            </div>
            <form className="appt-form" id="booking-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-name">
                    <i className="fa-solid fa-user"></i> الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="f-name"
                    placeholder="مثال: أحمد محمد"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-phone">
                    <i className="fa-solid fa-phone"></i> رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="f-phone"
                    placeholder="05X XX XX XX"
                    required
                  />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-service">
                    <i className="fa-solid fa-stethoscope"></i> التخصص المطلوب
                  </label>
                  <select id="f-service" defaultValue="" required>
                    <option value="" disabled>
                      اختر التخصص
                    </option>
                    <option>الطب العام والطوارئ</option>
                    <option>طب وجراحة الأسنان</option>
                    <option>طب النساء والتوليد</option>
                    <option>طب الأطفال</option>
                    <option>التحاليل الطبية</option>
                    <option>الأشعة والتصوير الطبي</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="f-date">
                    <i className="fa-solid fa-calendar"></i> التاريخ المفضل
                  </label>
                  <input type="date" id="f-date" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="f-message">
                  <i className="fa-solid fa-comment-medical"></i> وصف مختصر
                  للحالة (اختياري)
                </label>
                <textarea
                  id="f-message"
                  rows={4}
                  placeholder="أذكر لنا أي معلومات تساعدنا على تحضير موعدك..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-submit-appt">
                <i className="fa-solid fa-paper-plane"></i>
                إرسال طلب الحجز
              </button>
              <p className="form-note">
                <i className="fa-solid fa-lock"></i> معلوماتك آمنة ومحفوظة — لن
                تُشارك مع أي طرف ثالث.
              </p>
            </form>
          </div>

          <div className="appt-info animate" data-animation="slide-left">
            <h3>لماذا تحجز معنا؟</h3>
            <ul className="appt-benefits">
              <li>
                <i className="fa-solid fa-check-circle"></i> تأكيد فوري للموعد
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> تذكير قبل الموعد بـ
                24 ساعة
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> طاقم طبي متخصص
                ينتظرك
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> بيئة نظيفة ومريحة
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i> خدمة ما بعد الزيارة
              </li>
            </ul>
            <div className="appt-emergency-box">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <div>
                <strong>حالة طارئة؟</strong>
                <p>لا تنتظر — اتصل بنا مباشرة أو تعال للطوارئ على الفور.</p>
                <a href="tel:0559505001" className="emergency-call-btn">
                  <i className="fa-solid fa-phone-volume"></i> اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
         ============================================================ */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container footer-top-grid">
            <div className="footer-brand">
              <div className="logo footer-logo">
                <div className="logo-icon-wrap">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div className="logo-text">
                  <span className="logo-en">Rouibah Medical</span>
                  <span className="logo-ar">عيادة الرويبح</span>
                </div>
              </div>
              <p>
                مركز طبي متكامل في برج منايل، نلتزم بتقديم أفضل رعاية طبية لكل
                مريض، 24 ساعة في اليوم 7 أيام في الأسبوع.
              </p>
              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.google.com/maps/place/Clinique+Rouibah/@36.7404707,3.7351859,17z"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Maps"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>روابط سريعة</h4>
              <ul>
                <li>
                  <a href="#home">
                    <i className="fa-solid fa-chevron-left"></i> الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fa-solid fa-chevron-left"></i> من نحن
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#doctors">
                    <i className="fa-solid fa-chevron-left"></i> فريقنا الطبي
                  </a>
                </li>
                <li>
                  <a href="#gallery">
                    <i className="fa-solid fa-chevron-left"></i> معرض الصور
                  </a>
                </li>
                <li>
                  <a href="#testimonials">
                    <i className="fa-solid fa-chevron-left"></i> آراء المرضى
                  </a>
                </li>
                <li>
                  <a href="#appointment">
                    <i className="fa-solid fa-chevron-left"></i> احجز موعداً
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>تخصصاتنا</h4>
              <ul>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> الطب العام
                    والطوارئ
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> طب وجراحة
                    الأسنان
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> طب النساء
                    والتوليد
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> طب الأطفال
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> التحاليل
                    الطبية
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa-solid fa-chevron-left"></i> الأشعة والتصوير
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>تواصل معنا</h4>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>برج منايل، ولاية بومرداس، الجزائر</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-clock"></i>
                <span>مفتوح 24/7 — كل أيام الأسبوع</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-brands fa-facebook-f"></i>
                <a
                  href="https://www.facebook.com/p/Rouibah-Medical-Group-61559585559411/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rouibah Medical Group
                </a>
              </div>
              <div className="footer-google-rating">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                  alt="Google"
                />
                <div>
                  <div className="mini-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span>3.7/5 — 31 تقييم على Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>
              &copy; <span id="current-year"></span> Rouibah Medical Group. جميع
              الحقوق محفوظة.
            </p>
            <p>تصميم موقع احترافي لـ عيادة الرويبح، برج منايل، الجزائر.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        id="back-to-top"
        aria-label="العودة للأعلى"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
