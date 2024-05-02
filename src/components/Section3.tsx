import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Section3: Component = () => {
  const { IntroAnimFinished, setSectionToShow } = useAllContext();
  const tl = gsap.timeline({});
  const timeline = gsap.timeline({});

  let txt3Aref;
  let txt3Bref;

  createEffect(() => {
    gsap.set(".home p", { y: 32, opacity: 0 });

    if (IntroAnimFinished() == true) {
      timeline
        .to(".txt1", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0.08,
          delay: 1.6,
        })
        .to(".txt2", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0.08,
          delay: -0.85,
        })
        .to(".police", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
        })
        .to(".sign1", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.7,
        })
        .to(".sign2", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.5,
        })
        .to(".sign3", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.3,
        })
        .to(".sign4", {
          opacity: 0.99,
          y: 0,
          duration: 2,
          ease: "Expo.easeOut",
          delay: -1.1,
        });
    }
  });

  const animateImages = (e: any) => {
    let xPos = e.clientX / window.innerWidth - 0.1;
    let yPos = e.clientY / window.innerHeight - 0.1;

    gsap.to(".police", {
      duration: 0.5,
      y: xPos * 30,
      x: yPos * 30,
    });
    gsap.to(".sign1", {
      duration: 0.5,
      y: xPos * 10,
      x: yPos * 10,
    });
    gsap.to(".sign2", {
      duration: 0.2,
      y: xPos * 60,
      x: yPos * 60,
    });
    gsap.to(".sign3", {
      duration: 0.5,
      y: xPos * 20,
      x: yPos * 20,
    });
    gsap.to(".sign4", {
      duration: 0.2,
      y: xPos * 50,
      x: yPos * 50,
    });
  };

  window.addEventListener("mousemove", (e) => {
    animateImages(e);
  });

  const timeline3 = gsap.timeline({});

  onMount(() => {
    timeline3.to(".police", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".sign1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".sign2", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".sign3", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".sign4", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt1", { opacity: 0.99, duration: 0.6, delay: 0 });
    timeline3.to(".txt2", { opacity: 0.99, duration: 0.6, delay: 0 });
  });

  const btnclick = (param: String) => {
    console.log("btnclick - button clicked is: " + param);

    if (param == "next") {
      console.log("param is next");
      setSectionToShow(".section4");
    } else if (param == "prev") {
      console.log("param is prev");
      setSectionToShow(".section2");
    }
  };

  return (
    <>
      <div class="police w-[600px] h-[600px] ml-[0px] mt-[-200px] absolute opacity-0">
        <img src="/src/assets/police-crop.png" alt="police image" />
      </div>
      <div class="sign1 w-[171px] h-[291px] ml-[-600px] mt-[200px] absolute opacity-0">
        <img src="/src/assets/sign1.png" alt="sign1 image" />
      </div>
      <div class="sign2 w-[164px] h-[427px] ml-[-540px] mt-[-0px] absolute opacity-0">
        <img src="/src/assets/sign2.png" alt="sign2 image" />
      </div>
      <div class="sign3 w-[261px] h-[197px] ml-[400px] mt-[100px] absolute opacity-0">
        <img src="/src/assets/sign3.png" alt="sign3 image" />
      </div>
      <div class="sign4 w-[147px] h-[263px] ml-[600px] mt-[-100px] absolute opacity-0">
        <img src="/src/assets/sign4.png" alt="sign4 image" />
      </div>
      <div class="txt1 ml-[0px] mt-[600px] absolute opacity-0">
        <p class="eczar-thin text-5xl">The Authoriy</p>
      </div>
      <div class="txt2 max-w-[800px] mt-[800px] absolute text-center opacity-0">
        <p class="eczar-thin text-md">
          The local police sergeant, ultimately a good person, but completely
          suspicious of Kosuke. Who is this guy? why is he here? The only
          authority on the island is intent on finding out, as soon as he
          figures out how to stop the pirates circling the island. No rest for
          the wicked.
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

          {/* <div class="eczar-thin text-md pr-4 cursor-pointer" onclick={() => btnclick("prev")}>
            previous
          </div>
          <div class="eczar-thin text-md cursor-pointer" onclick={() => btnclick("next")}>
            next
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section3;
