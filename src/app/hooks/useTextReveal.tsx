import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import SplitType from "split-type";


function useTextReveal() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        new SplitType(scope.current, {
            types: 'lines,words', 
            tagName: 'span',
    })
}, [scope])

const entranceAnimation = () => {
    return animate(scope.current.querySelectorAll('.word'), {
        transform: 'translateY(0)',
    }, {
        duration: 0.5,
        delay: stagger(0.2)
    })
}
  return {
    scope, entranceAnimation
  }
}

export default useTextReveal;

