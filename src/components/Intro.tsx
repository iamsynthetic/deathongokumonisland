import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Intro: Component = () => {
  // const { setIntroAnimFinished, setSectionToShow } = useAllContext();
  // const tl = gsap.timeline({});
  // const timeline = gsap.timeline({});

  const timeline = gsap.timeline({});
  const { IntroAnimFinished, setIntroAnimFinished, setSectionToShow } =
    useAllContext();
  let txt1ref;

  const setUpNextSection = () => {
    console.log("setUpNextSection");
    setIntroAnimFinished(true);
    setSectionToShow(".section1");
  };

  //prettier-ignore
  const finishAnimation = () => {
    timeline.add("start")
    timeline.to(".txt1", { opacity: 0, duration: 0.4, delay: 0 })
    timeline.to(".txt2", { opacity: 0, duration: 0.4, delay: -.4 })
    timeline.to(".nextbutton", { opacity: 0, duration: 0.4, delay: 0, onComplete: () => setUpNextSection()});
  }
  //prettier-ignore
  onMount(() => {
    timeline.to(".txt1", { opacity: 0.99, duration: 0.6, delay: 0 })
    .to(".txt2", { opacity: 0.99, duration: 0.6, delay: 0 })
    .to(".nextbutton", { opacity: 0.99, duration: 0.6, delay: 0 });
  });

  const btnclick = () => {
    finishAnimation();
  };

  return (
    <>
      <div class="txt1 ml-[0px] mt-[-200px] absolute opacity-0">
        <p class="eczar-thin text-5xl">Death on Gokumon Island</p>
      </div>
      <div class="txt2 max-w-[700px] mt-[50px] absolute text-center opacity-0">
        <p>
          Written by Seishi Yokomizo and published in January of 1948, Death on
          Gokumon Island is a story that takes place on the fictional island,
          where a detective arrives to deliver a dead friend's last wish, to
          warn his family of a coming tradgedy. <br></br>
          <br></br>Loosely inspired by Agatha Christie's '
          <i>And Then There Were None</i>', this clever tale is perhaps the most
          highly regarded of all of Seishi Yokomizo's classic Japanese
          mysteries.
        </p>
      </div>
      <div class="nextbutton mt-[300px] absolute opacity-0">
        <div
          class="relative group eczar-thin text-md cursor-pointer"
          onclick={() => btnclick()}
        >
          <span class="text-xl">next</span>
          <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
        </div>
      </div>
    </>
  );
};

export default Intro;
