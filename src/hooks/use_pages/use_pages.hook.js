import {useMemo} from "react";


export const usePagesArray = (total_pages) => {
    const pages_array =useMemo( () => {
        let array = [...Array(total_pages).keys()];
        return array;
    }, [total_pages])

    return pages_array
}