import { Component, onMount, createSignal, createEffect } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Background: Component = () => {
  const [expanded, setExpanded] = createSignal(false);
  const { IntroAnimFinished } = useAllContext();
  //   const timeline = gsap.timeline({ paused: true });
  //   let divRef;
  //   onMount(() => {
  //     const q = gsap.utils.selector(divRef);
  //     timeline.to(
  //       divRef,
  //       {
  //         scale: 2,
  //         duration: 1,
  //         ease: "elastic.inOut",
  //       },
  //       "<0.2"
  //     );
  //     timeline.play();
  //   });

  const timeline = gsap.timeline({});
  let bgref1;
  let bgref2;
  //   onMount(() => {
  //     timeline.to(bgref, { scale: 0.9, duration: 0.6, ease: "quint.easeInOut" });
  //   });

  createEffect(() => {
    console.log(
      "background component - introanimfinished is: " + IntroAnimFinished()
    );

    if (IntroAnimFinished() == true) {
      timeline.to(bgref1, {
        scale: 0.9,
        duration: 0.6,
        delay: 0.8,
        ease: "quint.easeInOut",
      });
    }
  });

  return (
    <>
      {/* <div class="plain-background" ref={bgref1} /> */}
      <div class="textured-background" ref={bgref2} />
    </>
    //   <div
    //     ref={divRef}
    //     onClick={() => {
    //       if (expanded()) timeline.reverse();
    //       else timeline.play();
    //       setExpanded((curr) => !curr);
    //     }}
    //     style={{
    //       width: "100px",
    //       height: "100px",
    //       background: "red",
    //       display: "flex",
    //       "align-items": "center",
    //       "justify-content": "center",
    //     }}
    //   ></div>
  );
};

export default Background;
