"use client";
import { Reveal } from "@/components/reveal";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";
import { Heading2 } from "../typography/headings";
import "./css/skillsContainer.css";

const SkillsEffectContainer = dynamic(
  () => import("./components/skillsEffectContainer/skillsEffectContainer"),
  {
    ssr: false,
  }
);

const SkillsContainer = () => {
  return (
    <ErrorBoundary fallback={<>Something went wrong with SkillsContainer</>}>
      <section className="skills">
        <Reveal type="right" delay={0.55}>
          <Heading2 ariaLabel="Skills" className="skills__title">
            Skills
          </Heading2>
        </Reveal>

        <Reveal type="up" delay={0.65} width="100%">
          <SkillsEffectContainer />
        </Reveal>
      </section>
    </ErrorBoundary>
  );
};

export default SkillsContainer;
