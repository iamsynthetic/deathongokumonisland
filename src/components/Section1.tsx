import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Section1: Component = () => {
  const { IntroAnimFinished, setSectionToShow } = useAllContext();
  const tl = gsap.timeline({});
  const timeline = gsap.timeline({});

  let txt2Aref;
  let txt2Bref;

  createEffect(() => {
    gsap.set(".home p", { y: 32, opacity: 0 });

    if (IntroAnimFinished() == true) {
      timeline
        .to(".txt1", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0,
          delay: 0,
        })
        .to(".txt2", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0,
          delay: 0,
        })
        .to(".buttons", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0,
          delay: 0,
        })
        .to(".detective", {
          opacity: 0.99,
          y: 0,
          duration: 0.6,
          ease: "Expo.easeOut",
        })
        .to(".rock1", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.7,
        })
        .to(".rock2", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.5,
        })
        .to(".rock3", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.3,
        })
        .to(".rock4", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.1,
        })
        .to(".rock5", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1,
        });
    }
  });

  const animateImages = (e: any) => {
    let xPos = e.clientX / window.innerWidth - 0.1;
    let yPos = e.clientY / window.innerHeight - 0.1;

    gsap.to(".detective", {
      duration: 0.2,
      y: xPos * 30,
      x: yPos * 30,
    });
    gsap.to(".rock1", {
      duration: 0.5,
      y: xPos * 10,
      x: yPos * 10,
    });
    gsap.to(".rock2", {
      duration: 0.2,
      y: xPos * 60,
      x: yPos * 60,
    });
    gsap.to(".rock3", {
      duration: 0.5,
      y: xPos * 20,
      x: yPos * 20,
    });
    gsap.to(".rock4", {
      duration: 0.2,
      y: xPos * 50,
      x: yPos * 50,
    });
    gsap.to(".rock5", {
      duration: 0.5,
      y: xPos * 20,
      x: yPos * 20,
    });
  };

  window.addEventListener("mousemove", (e) => {
    animateImages(e);
  });

  const timeline3 = gsap.timeline({});

  onMount(() => {
    timeline3.to(".detective", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".rock1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".rock2", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".rock3", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".rock4", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".rock5", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt2", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".buttons", { opacity: 0.99, duration: 0.6, delay: 0 });
  });

  const btnclick = (param: String) => {
    console.log("btnclick - button clicked is: " + param);

    if (param == "next") {
      console.log("param is next");
      setSectionToShow(".section2");
    }
  };

  return (
    <>
      <div class="detective w-[800px] h-[800px] mt-[-200px] opacity-0">
        <img src="/src/assets/detective-crop.png" alt="detective image" />
      </div>
      <div class="rock1 w-[198px] h-[145px] ml-[-500px] mt-[300px] absolute opacity-0">
        <img src="/src/assets/rock1.png" alt="rock1 image" />
      </div>
      <div class="rock2 w-[148px] h-[149px] ml-[-400px] mt-[300px] absolute opacity-0">
        <img src="/src/assets/rock2.png" alt="rock2 image" />
      </div>
      <div class="rock3 w-[136px] h-[75px] ml-[500px] mt-[-110px] absolute opacity-0">
        <img src="/src/assets/rock3.png" alt="rock3 image" />
      </div>
      <div class="rock4 w-[89px] h-[63px] ml-[500px] mt-[0px] absolute opacity-0">
        <img src="/src/assets/rock4.png" alt="rock4 image" />
      </div>
      <div class="rock5 w-[121px] h-[91px] ml-[700px] mt-[300px] absolute opacity-0">
        <img src="/src/assets/rock5.png" alt="rock5 image" />
      </div>
      <div class="txt1 ml-[0px] mt-[600px] absolute opacity-0">
        <p class="eczar-thin text-5xl">The Detective</p>
      </div>
      <div class="txt2 max-w-[800px] mt-[800px] absolute text-center opacity-0">
        <p class="eczar-thin text-md">
          Detective Kosuke Kindaichi arrives on the remote Gokumon Island
          bearing tragic news—his friend and fellow soldier, the son of one of
          the island’s most important families has died, on a troop transport
          ship bringing him back home after the Second World War. But Kindaichi
          has not come merely as a messenger–with his last words, the dying man
          warned that his three step-sisters’ lives would now be in danger.
        </p>
        <div class="buttons flex flex-row place-content-center text-center pt-[20px]">
          <div
            class="relative group eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("next")}
          >
            <span class="text-xl">next</span>
            <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
