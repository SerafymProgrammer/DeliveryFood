
import { useState, useEffect } from "react";
import useWindowSize from "../use_window_size/use_window_size.hook";

export default function useMaxHeightContainer(ref) {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const {
        width,
        height,
    } = useWindowSize()
    const [max_height, set_max_height] = useState(0)

    useEffect(()=>{
        console.log(ref.current)
        if(ref.current) {
            set_max_height(height-ref.current.offsetTop)
        }
    }, [width, height, ref.current])


    return max_height;
}