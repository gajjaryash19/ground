import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteCursor from "@/components/common/SiteCursor";
import HeroSection from "@/components/sections/HeroSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CustomerVoicesSection from "@/components/sections/CustomerVoicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SiteFooter from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <>
      {/* Navbar & Menu Overlay */}
      <SiteNavbar />

      {/* Interactive Cursor */}
      <SiteCursor />

      {/* Main Container */}
      <div id="main">
        {/* Page 1 (Hero Title & Hero Image) + Collection Intro */}
        <HeroSection />

        {/* Page 2 (Top Picks Collections) + Mission Manifesto */}
        <CollectionsSection />

        {/* Page 3 (Signature Footwear Catalog Cards) */}
        <ProductsSection />

        {/* Page 4 (Customer Voices & Interactive Quote Switcher) */}
        <CustomerVoicesSection />

        {/* Page 5 (Craftsmanship & Dual Parallax Editorial Images) */}
        <ProcessSection />

        {/* Global Editorial Footer */}
        <SiteFooter />
      </div>
    </>
  );
}
