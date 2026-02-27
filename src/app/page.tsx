import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ValueProps } from "../components/ValueProps";
import { SupportedGames } from "../components/SupportedGames";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <ValueProps />
        <SupportedGames />
      </main>
      <Footer />
    </>
  );
}
