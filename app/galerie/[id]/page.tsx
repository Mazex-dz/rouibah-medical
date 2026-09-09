import { galleryData } from "../../data/galleries";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function GaleriePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const gallery = galleryData[id];

  if (!gallery) {
    notFound();
  }

  return (
    <>
      {/* Top Navigation / Breadcrumb */}
      <div className="bg-soft" style={{ padding: "40px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container">
          <Link href="/" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <i className="fa-solid fa-arrow-left"></i> Retour au site
          </Link>
          
          <div className="section-header">
            <span className="label-tag"><i className="fa-solid fa-camera"></i> Album Photo</span>
            <h1 className="section-title" dir="rtl">{gallery.title}</h1>
            
            {gallery.arabicDesc && (
              <p className="section-lead" dir="rtl" style={{ marginBottom: "15px", fontSize: "1.1rem", color: "#444" }}>
                {gallery.arabicDesc}
              </p>
            )}
            
            {gallery.description && (
              <p className="section-lead" style={{ fontSize: "1.05rem", color: "#666" }}>
                {gallery.description}
              </p>
            )}
            
            {!gallery.arabicDesc && !gallery.description && (
              <p className="section-lead" dir="rtl">
                Découvrez toutes les installations et équipements liés à ce service.
              </p>
            )}
            
            {gallery.phone && (
              <div style={{ marginTop: "25px", textAlign: "center" }}>
                <a href={`tel:${gallery.phone.replace(/\s/g, "")}`} className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "1.1rem", padding: "12px 24px" }}>
                  <i className="fa-solid fa-phone fa-shake"></i> اتصل الآن: 
                  <span style={{ userSelect: "all", fontWeight: "bold", fontFamily: "monospace", letterSpacing: "1px" }} dir="ltr">{gallery.phone}</span>
                </a>
                <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#666" }} dir="rtl">
                  يمكنك نسخ الرقم مباشرة.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="masonry-gallery">
            {gallery.images.map((imgSrc, idx) => (
              <div key={idx} className="masonry-item animate" data-animation="fade-up" style={{ animationDelay: `${(idx % 4) * 100}ms` }}>
                <img src={imgSrc} alt={`${gallery.title} - Photo ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
