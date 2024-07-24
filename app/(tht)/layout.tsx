import Navbar from "@/components/tht/Navbar";
import Footer from "@/components/tht/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden">{children}</div>
      <Footer />
    </main>
  );
}
