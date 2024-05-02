import { createStore } from "solid-js/store";
import { createContext, useContext, createSignal } from "solid-js";

export const AllContext = createContext();

export function AllContextProvider(props) {
  const [items, setItems] = createStore([]);
  const [IntroAnimFinished, setIntroAnimFinished] = createSignal(false);
  const [sectionToShow, setSectionToShow] = createSignal(".intro");

  return (
    <AllContext.Provider
      value={{
        items,
        setItems,
        IntroAnimFinished,
        setIntroAnimFinished,
        sectionToShow,
        setSectionToShow,
      }}
    >
      {props.children}
    </AllContext.Provider>
  );
}

export function useAllContext() {
  return useContext(AllContext);
}
