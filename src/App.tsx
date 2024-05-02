import { Component, Show, createSignal } from "solid-js";
import { useAllContext } from "./context/AllContext";
import Background from "./components/Background";
import Borders from "./components/Borders";
import WindowTooSmall from "./components/WindowTooSmall";

const App: Component = (props) => {
  const { IntroAnimFinished } = useAllContext();

  const [windowTooSmall, setWindowTooSmall] = createSignal(false);

  function updateSize() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if (window.innerWidth < 940) {
      setWindowTooSmall(true);
    } else {
      setWindowTooSmall(false);
    }
  }

  updateSize();
  window.addEventListener("resize", updateSize);

  return (
    <div>
      <Borders />
      <Background />
      <header class="the-header">
        <Show when={IntroAnimFinished() == true}>
          <div class="flex fixed w-screen mt-5">
            <div class="flex-1 flex justify-center">
              Death on Gokumon Island
            </div>
          </div>
        </Show>
      </header>
      <Show when={windowTooSmall() == false}>
        <div class="min-h-screen justify-center items-center z-1">
          {props.children}
        </div>
      </Show>
      <Show when={windowTooSmall() == true}>
        <section class="the-window-is-too-small h-screen flex justify-center items-center">
          <WindowTooSmall />
        </section>
      </Show>
    </div>
  );
};

export default App;
