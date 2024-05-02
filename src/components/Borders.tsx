import { Component, onMount, createSignal, createEffect } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Borders: Component = () => {
  const [expanded, setExpanded] = createSignal(false);
  const { IntroAnimFinished } = useAllContext();
  const timeline = gsap.timeline({});
  let b1;
  let b2;
  let b3;
  let b4;

  createEffect(() => {
    if (IntroAnimFinished() == true) {
      //   timeline.to(bgref, {
      //     scale: 0.9,
      //     duration: 0.6,
      //     delay: 0.8,
      //     ease: "quint.easeInOut",
      //   });
    }
  });

  return (
    <>
    <div class="top-bar" ref={b1}/>
      <div class="left-bar" ref={b2}/>
      <div class="bottom-bar" ref={b3}/>
      <div class="right-bar" ref={b4}/>
    </>
  );
};

export default Borders;