import {useState} from "react";

export const useFetchHook = (callback) => {
    const [is_loading, set_is_loading] = useState()
    const [error, set_error] = useState()

    const fetching =async  (...args)=>{
        try {
            set_is_loading(true)
            await callback(...args)
        } catch (e) {
            set_error(e.message)
        } finally {
            set_is_loading(false)
        }
    }

    return [fetching, is_loading, error]
};

