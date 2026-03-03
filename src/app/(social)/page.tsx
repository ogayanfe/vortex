import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { SupportedGames } from "@/components/SupportedGames";

export default function Home() {
  return (
    <>
      <main style={{ flex: 1 }}>
        <Hero />
        <ValueProps />
        <SupportedGames />
      </main>
    </>
  );
}
