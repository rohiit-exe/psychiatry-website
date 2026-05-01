import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
