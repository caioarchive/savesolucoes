import RadialParticleField from "@/components/effects/RadialParticleField";
import Container from "@/components/layout/Container";
import HeroMotion from "@/components/motion/HeroMotion";

import HeroIntro from "./HeroIntro";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <HeroMotion className="relative isolate overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
      <RadialParticleField />

      <Container className="relative z-10">
        <HeroIntro />

        <div className="mx-auto mt-14 w-full max-w-5xl sm:mt-18 lg:mt-20">
          <HeroVideo />
        </div>
      </Container>
    </HeroMotion>
  );
}
