import gsap from "gsap";

const UseHover = (el: any, _accessor: any) => {
  const animation = gsap.to(el, {
    // properties
  });

  el.addEventListener("mouseenter", () => {
    animation.play();
  });

  el.addEventListener("mouseleave", () => {
    animation.pause();
  });

  return <div class="textured-background" use:hoverAnimation />;
};

export default UseHover;
