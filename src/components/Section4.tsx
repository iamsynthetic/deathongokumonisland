import { Component, onMount, createEffect, createSignal } from "solid-js";
import { useAllContext } from "../context/AllContext";
import gsap from "gsap";

const Section4: Component = () => {
  const { IntroAnimFinished, setSectionToShow } = useAllContext();
  // const tl = gsap.timeline({});
  // const timeline = gsap.timeline({});
  const timeline3 = gsap.timeline({});
  // let section4ref;
  // let txt3Aref;
  // let txt3Bref;

  // prettier-ignore
  const animateImages = (e: any) => {
    let xPos = e.clientX / window.innerWidth - 0.1;
    let yPos = e.clientY / window.innerHeight - 0.1;

    gsap.to(".sister",    { duration: 0.2, y: xPos * 30, x: yPos * 30, });
    gsap.to(".bird1",     { duration: 0.2, y: xPos * 60, x: yPos * 60, }); 
    gsap.to(".bird2",     { duration: 0.2, y: xPos * 65, x: yPos * 65, });
    gsap.to(".bird3",     { duration: 0.2, y: xPos * 80, x: yPos * 80, });
    gsap.to(".bird4",     { duration: 0.2, y: xPos * 50, x: yPos * 50, });
    gsap.to(".flower",    { duration: 0.2, y: xPos * 42, x: yPos * 42, });
    gsap.to(".flower2",   { duration: 0.2, y: xPos * 35, x: yPos * 35, });
    gsap.to(".flower3",   { duration: 0.2, y: xPos * 45, x: yPos * 45, });
    gsap.to(".leaf",      { duration: 0.2, y: xPos * 70, x: yPos * 70, });
    gsap.to(".leaf2",     { duration: 0.2, y: xPos * 54, x: yPos * 54, });
    gsap.to(".leaf3",     { duration: 0.2, y: xPos * 63, x: yPos * 63, });
    gsap.to(".leaf4",     { duration: 0.2, y: xPos * 37, x: yPos * 37, });
    gsap.to(".red-leaf",  { duration: 0.2, y: xPos * 25, x: yPos * 25, });
    gsap.to(".red-leaf2", { duration: 0.2, y: xPos * 45, x: yPos * 45, });
    gsap.to(".red-leaf3", { duration: 0.2, y: xPos * 75, x: yPos * 75, });
  };
  // prettier-ignore
  onMount(() => {
    timeline3
      .add("start")
      .to( ".sister",    { opacity: 0.99, duration: 2, delay: 0,   ease: "Expo.easeOut" }, "start" )
      .to( ".bird1",     { opacity: 0.99, duration: 2, delay: 1.2, ease: "Expo.easeOut" }, "start" )
      .to( ".bird2",     { opacity: 0.99, duration: 2, delay: 1.4, ease: "Expo.easeOut" }, "start" )
      .to( ".bird3",     { opacity: 0.99, duration: 2, delay: 1.6, ease: "Expo.easeOut" }, "start" )
      .to( ".bird4",     { opacity: 0.99, duration: 2, delay: 1.8, ease: "Expo.easeOut" }, "start" )
      .to( ".leaf",      { opacity: 0.99, duration: 2, delay: 2,   ease: "Expo.easeOut" }, "start" )
      .to( ".leaf3",     { opacity: 0.99, duration: 2, delay: 2.1, ease: "Expo.easeOut" }, "start" )
      .to( ".leaf2",     { opacity: 0.99, duration: 2, delay: 2.3, ease: "Expo.easeOut" }, "start" )
      .to( ".flower",    { opacity: 0.99, duration: 2, delay: 2.4, ease: "Expo.easeOut" }, "start" )
      .to( ".flower2",   { opacity: 0.99, duration: 2, delay: 2.5, ease: "Expo.easeOut" }, "start" )
      .to( ".flower3",   { opacity: 0.99, duration: 2, delay: 2.6, ease: "Expo.easeOut" }, "start" )
      .to( ".leaf4",     { opacity: 0.99, duration: 2, delay: 2.7, ease: "Expo.easeOut" }, "start" )
      .to( ".red-leaf",  { opacity: 0.99, duration: 2, delay: 2.9, ease: "Expo.easeOut" }, "start" )
      .to( ".red-leaf2", { opacity: 0.99, duration: 2, delay: 3,   ease: "Expo.easeOut" }, "start" )
      .to( ".red-leaf3", { opacity: 0.99, duration: 2, delay: 3.1, ease: "Expo.easeOut" }, "start" )
      .to( ".txt1",      { opacity: 0.99, duration: 2, delay: 2.4, ease: "Expo.easeOut" }, "start" )
      .to( ".txt2",      { opacity: 0.99, duration: 2, delay: 2.5, ease: "Expo.easeOut" }, "start" );
  });

  window.addEventListener("mousemove", (e) => {
    animateImages(e);
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
      <div class="sister w-[800px] h-[800px] mt-[-300px] bg-opacity-10 opacity-0">
        <img src="/src/assets/sister.png" alt="sister image" />
      </div>
      <div class="bird1 w-[40px] h-[49px] ml-[650px] mt-[-800px] absolute opacity-0">
        <img src="/src/assets/bird1.png" alt="bird1 image" />
      </div>
      <div class="bird2 w-[38px] h-[39px] ml-[500px] mt-[-900px] absolute opacity-0">
        <img src="/src/assets/bird2.png" alt="bird2 image" />
      </div>
      <div class="bird3 w-[42px] h-[50px] ml-[-300px] mt-[-770px] absolute opacity-0">
        <img src="/src/assets/bird3.png" alt="bird3 image" />
      </div>
      <div class="bird4 w-[29px] h-[32px] ml-[-400px] mt-[-700px] absolute opacity-0">
        <img src="/src/assets/bird4.png" alt="bird4 image" />
      </div>
      <div class="flower w-[223px] h-[227px] ml-[-350px] mt-[-100px] absolute opacity-0">
        <img src="/src/assets/flower.png" alt="flower image" />
      </div>
      <div class="flower2 w-[100px] h-[100px] ml-[-220px] mt-[300px] absolute opacity-0">
        <img src="/src/assets/flower.png" alt="flower image" />
      </div>
      <div class="flower3 w-[150px] h-[150px] ml-[-800px] mt-[250px] absolute opacity-0">
        <img src="/src/assets/flower.png" alt="flower image" />
      </div>
      <div class="leaf w-[71px] h-[70px] ml-[750px] mt-[-280px] absolute opacity-0">
        <img src="/src/assets/leaf.png" alt="leaf image" />
      </div>
      <div class="leaf2 w-[81px] h-[80px] ml-[-300px] mt-[-550px] absolute opacity-0">
        <img src="/src/assets/leaf.png" alt="leaf image" />
      </div>
      <div class="leaf3 w-[121px] h-[120px] ml-[700px] mt-[100px] absolute opacity-0">
        <img src="/src/assets/leaf.png" alt="leaf image" />
      </div>
      <div class="leaf4 w-[141px] h-[140px] ml-[-700px] mt-[-300px] absolute opacity-0">
        <img src="/src/assets/leaf.png" alt="leaf image" />
      </div>
      <div class="red-leaf w-[222px] h-[270px] ml-[-500px] mt-[150px] absolute opacity-0">
        <img src="/src/assets/red-leaf.png" alt="red leaf image" />
      </div>
      <div class="red-leaf2 w-[170px] h-[170px] ml-[-500px] mt-[-400px] absolute opacity-0">
        <img src="/src/assets/red-leaf.png" alt="red leaf image" />
      </div>
      <div class="red-leaf3 w-[132px] h-[130px] ml-[-1000px] mt-[200px] absolute opacity-0">
        <img src="/src/assets/red-leaf.png" alt="rlinsed leaf image" />
      </div>
      <div class="txt1 ml-[0px] mt-[600px] absolute opacity-0">
        <p class="eczar-thin text-5xl">The Sisters</p>
      </div>
      <div class="txt2 max-w-[800px] mt-[800px] absolute text-center opacity-0">
        <p class="eczar-thin text-md">
          Tsukiyo, Yukie, and Hanako. Three sisters who live on Gokumon island.
          Their brother has passed away and the detective Kosuke Kindaichi has
          come to deliver the news. Strangely, none of them seem too upset by
          this.
        </p>
        <div class="buttons flex flex-row place-content-center text-center pt-[20px]">
          <div
            class="relative group eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("prev")}
          >
            <span class="text-xl">previous</span>
            <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
          </div>
          {/* <div
            class="relative group eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("next")}
          >
            <span>next</span>
            <span class="absolute -bottom-1 left-0 w-0 h-1 hoverline transition-all group-hover:w-full"></span>
          </div> */}

          {/* <div
            class="eczar-thin text-md cursor-pointer"
            onclick={() => btnclick("prev")}
          >
            previous
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section4;
