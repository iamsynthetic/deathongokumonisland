import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const SectionTest: Component = () => {
  const [expanded, setExpanded] = createSignal(false);

  // gsap.registerPlugin(ScrollTrigger);

  const { IntroAnimFinished } = useAllContext();
  // const tl = gsap.timeline({});
  const timeline = gsap.timeline({});

  let txt1ref;
  let allsectionsref;
  let txt2Aref;
  let txt2Bref;

  createEffect(() => {
    if (IntroAnimFinished() == true) {
      timeline
        .to(".sec1-txt1", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0.08,
          delay: 1.6,
        })
        .to(".sec1-txt2", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0.08,
          delay: -0.3,
        })
        .to(".elements", {
          y: 0,
          opacity: 0.99,
          duration: 1,
          ease: "Quint.easeInOut",
          stagger: 0.08,
          delay: -1.6,
        });
    }
  });

  // createEffect(() => {
  //   gsap.set(".home p", { y: 0, opacity: 0 });

  //   if (IntroAnimFinished() == true) {
  //     timeline
  //       .to(".home .sec2-txt1", {
  //         y: 0,
  //         opacity: 0.99,
  //         duration: 1,
  //         ease: "Quint.easeInOut",
  //         stagger: 0.08,
  //         delay: 1.6,
  //       })
  //       .to(".home .sec2-txt2", {
  //         y: 0,
  //         opacity: 0.99,
  //         duration: 1,
  //         ease: "Quint.easeInOut",
  //         stagger: 0.08,
  //         delay: -0.85,
  //       })
  //       .to(".home .the-element1", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //       })
  //       .to(".home .cherry-blossom-element", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -1.7,
  //       })
  //       .to(".home .the-element3", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -1.5,
  //       })
  //       .to(".home .the-element4", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -1.3,
  //       })
  //       .to(".home .the-element5", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -1.1,
  //       })
  //       .to(".home .the-element6", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -1,
  //       })
  //       .to(".home .the-element6b", {
  //         opacity: 0.99,
  //         y: 0,
  //         duration: 2,
  //         ease: "Expo.easeOut",
  //         delay: -0.8,
  //       });

  //     let tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section2",
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });

  //     tl2
  //       .to(
  //         ".the-element1",
  //         { ease: "none", yPercent: gsap.utils.random(-20, -30) },
  //         0
  //       )
  //       .to(
  //         ".cherry-blossom-element",
  //         { ease: "none", yPercent: gsap.utils.random(-90, -100) },
  //         0
  //       )
  //       .to(
  //         ".sec2-txt1",
  //         { ease: "none", yPercent: gsap.utils.random(-500, -510) },
  //         0
  //       )
  //       .to(
  //         ".sec2-txt2",
  //         { ease: "none", yPercent: gsap.utils.random(-200, -130) },
  //         0
  //       );
  //   }
  // });

  // const lenis = new Lenis();

  // lenis.on("scroll", ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });

  // gsap.ticker.lagSmoothing(0);

  const animateImages = (e: any) => {
    let xPos = e.clientX / window.innerWidth - 0.1;
    let yPos = e.clientY / window.innerHeight - 0.1;

    gsap.to(".the-element1", {
      duration: 0.5,
      y: xPos * 30,
      x: yPos * 30,
    });
    gsap.to(".the-element2", {
      duration: 0.5,
      y: xPos * 10,
      x: yPos * 10,
    });
    gsap.to(".the-element3", {
      duration: 0.2,
      y: xPos * 60,
      x: yPos * 60,
    });
    gsap.to(".the-element4", {
      duration: 0.5,
      y: xPos * 20,
      x: yPos * 20,
    });
    gsap.to(".the-element5", {
      duration: 0.2,
      y: xPos * 50,
      x: yPos * 50,
    });
    gsap.to(".the-element6", {
      duration: 0.5,
      y: xPos * 20,
      x: yPos * 20,
    });
    gsap.to(".the-element6b", {
      duration: 0.5,
      y: xPos * 30,
      x: yPos * 30,
    });
  };

  window.addEventListener("mousemove", (e) => {
    animateImages(e);
  });

  return (
    <>
      {/* <div>
        <p class="sec2-txt1 eczar-thin text-5xl">Section test</p>
        <p class="sec2-txt2 eczar-regular text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          veritatis rerum. Dolores itaque iste fugit natus quasi, dolorem minus
          nobis magni dolorum placeat saepe perspiciatis sapiente a, dolor
          facilis ex molestias in. Aspernatur illo obcaecati ipsa magni,
          quibusdam eos reiciendis corporis delectus eaque dignissimos
          similique, possimus, cum dolore harum a!
        </p>
      </div> */}

      {/* <div class="section1"> */}
      <div class="grid grid-cols-2 gap-2 z-1 h-screen opacity-[99.99%]">
        <div class="bg-red-300 bg-opacity-0 h-screen flex items-center">
          <div
            ref={txt2Aref}
            class="home text-right pl-32 bg-red-700 bg-opacity-0"
          >
            <p class="sec1-txt1 eczar-thin text-5xl">The Story</p>
            <p class="sec1-txt2 eczar-regular text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, veritatis rerum. Dolores itaque iste fugit natus
              quasi, dolorem minus nobis magni dolorum placeat saepe
              perspiciatis sapiente a, dolor facilis ex molestias in. Aspernatur
              illo obcaecati ipsa magni, quibusdam eos reiciendis corporis
              delectus eaque dignissimos similique, possimus, cum dolore harum
              a!
            </p>
          </div>
        </div>
        <div class="h-screen flex items-center">
          <div ref={txt2Bref} class="home m-auto">
            <div class="elements the-element1">
              <img
                class="ml-[-100px] mt-[-200px]"
                src="/src/assets/detective-crop.png"
                alt="detective image"
              />
            </div>
            <div class="elements the-element2 ml-[-50px] mt-[-200px]">
              <img class="rock1" src="/src/assets/rock1.png" alt="rock image" />
            </div>
            <div class="elements the-element3 ml-[50px] mt-[-120px]">
              <img class="rock2" src="/src/assets/rock2.png" alt="rock image" />
            </div>
            <div class="elements the-element4 ml-[-200px] mt-[-110px]">
              <img class="rock3" src="/src/assets/rock3.png" alt="rock image" />
            </div>
            <div class="elements the-element5 ml-[450px] ">
              <img class="rock4" src="/src/assets/rock4.png" alt="rock image" />
            </div>
            <div class="elements the-element6 ml-[420px] mt-[-300px]">
              <img class="rock5" src="/src/assets/rock5.png" alt="rock image" />
            </div>
            <div class="elements the-element6b ml-[420px] mt-[-30px] w-[10px] h-auto">
              <img class="rock5" src="/src/assets/rock5.png" alt="rock image" />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SectionTest;
