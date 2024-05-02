import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Section2: Component = () => {
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
        .to(".monk", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
        })
        .to(".cherryblossom", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.7,
        })
        .to(".dirt1", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.5,
        })
        .to(".dirt2", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.3,
        });
    }
  });

  const animateImages = (e: any) => {
    let xPos = e.clientX / window.innerWidth - 0.1;
    let yPos = e.clientY / window.innerHeight - 0.1;

    gsap.to(".monk", {
      duration: 0.5,
      y: xPos * 30,
      x: yPos * 30,
    });
    gsap.to(".cherryblossom", {
      duration: 0.5,
      y: xPos * 10,
      x: yPos * 10,
    });
    gsap.to(".dirt1", {
      duration: 0.2,
      y: xPos * 60,
      x: yPos * 60,
    });
    gsap.to(".dirt2", {
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
    timeline3.to(".monk", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".cherryblossom", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".dirt1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".dirt2", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt2", { opacity: 0.99, duration: 0.6, delay: 0 });
  });

  const btnclick = (param: String) => {
    console.log("btnclick - button clicked is: " + param);

    if (param == "next") {
      console.log("param is next");
      setSectionToShow(".section3");
    } else if (param == "prev") {
      console.log("param is prev");
      setSectionToShow(".section1");
    }
  };

  return (
    <>
      <div class="monk w-[700px] h-[700px] mt-[-200px] absolute opacity-0">
        <img src="/src/assets/monk-crop.png" alt="monk image" />
      </div>
      <div class="cherryblossom w-[484px] h-[441px] mt-[60px] absolute opacity-0">
        <img src="/src/assets/cherry-blossom.png" alt="cherry-blossom image" />
      </div>
      <div class="dirt1 w-[800px] h-[800px] ml-[-100px] mt-[-200px] absolute opacity-0">
        <img src="/src/assets/dirt1.png" alt="dirt1 image" />
      </div>
      <div class="dirt2 w-[800px] h-[800px] ml-[0px] mt-[-100px] opacity-0">
        <img src="/src/assets/dirt2.png" alt="dirt2 image" />
      </div>
      <div class="txt1 ml-[0px] mt-[600px] absolute opacity-0">
        <p class="eczar-thin text-5xl">The Priest</p>
      </div>
      <div class="txt2 max-w-[800px] mt-[800px] absolute text-center opacity-0">
        <p class="eczar-thin text-md">
          Ryonen, the priest from Senkoji Temple, mysterious, cunning, likes to
          quote kaiku and, along with his disciple Takarai Kikaku, are the only
          religious authority on the island.
        </p>
        <div class="buttons flex flex-row place-content-center text-center pt-[20px]">
          <div
            class="relative group eczar-thin text-md mr-4 cursor-pointer"
            onclick={() => btnclick("prev")}
          >
            <span class="text-xl">previous</span>
            <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
          </div>
          <div
            class="relative group eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("next")}
          >
            <span class="text-xl">next</span>
            <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
          </div>

          {/* <div
            class="eczar-thin text-md pr-4 cursor-pointer"
            onclick={() => btnclick("prev")}
          >
            previous
          </div>
          <div
            class="eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("next")}
          >
            next
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section2;
