import { useRef } from "react";

const useRefSection = () => {
  return {
    about_me: useRef(null),
    project: useRef(null),
    tools: useRef(null),
    contact: useRef(null),
  };
};

export default useRefSection;
