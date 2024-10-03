import Image from "next/image";
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-black">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}