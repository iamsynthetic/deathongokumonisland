import {
  Component,
  onMount,
  createEffect,
  onCleanup,
  Show,
  createSignal,
} from "solid-js";

import gsap from "gsap";
import { useAllContext } from "../context/AllContext";
import Intro from "../components/Intro";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const Home: Component = () => {
  let allsectionsref;

  const { IntroAnimFinished, sectionToShow } = useAllContext();
  const [currentSection, setCurrentSection] = createSignal(".intro");

  createEffect(() => {
    if (IntroAnimFinished() == true) {
      console.log("create effect finished - section should be 1");
      setCurrentSection(".section1");
    }
    console.log("sectiontoshow is: " + sectionToShow());
    setCurrentSection(sectionToShow());
  });
  //return statement
  return (
    <div
      ref={allsectionsref}
      id="maindiv"
      class="allsections overflow-hidden overflow-y-scroll h-screen snap-mandatory snap-y"
    >
      <Show when={currentSection() === ".intro"}>
        <section class="intro h-screen flex justify-center items-center bg-red-300">
          <Intro />
        </section>
      </Show>
      <Show when={currentSection() === ".section1"}>
        <section class="section1 h-screen flex justify-center items-center bg-red-300">
          <Section1 />
        </section>
      </Show>
      <Show when={currentSection() === ".section2"}>
        <section class="section2 h-screen flex justify-center items-center bg-blue-300">
          <Section2 />
        </section>
      </Show>
      <Show when={currentSection() === ".section3"}>
        <section class="section3 h-screen flex justify-center items-center bg-green-300">
          <Section3 />
        </section>
      </Show>
      <Show when={currentSection() === ".section4"}>
        <section class="section4 h-screen flex justify-center items-center bg-orange-300">
          <Section4 />
        </section>
      </Show>
    </div>
  );
};

export default Home;
