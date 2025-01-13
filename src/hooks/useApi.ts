
import { useEffect, useState } from "react";
import axios from "axios";

export function useGet<T>(url : string) : { data : T[], loading : boolean, isError : boolean } {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(response => {
            if (response.status === 200) {
                setData(response.data);
            }
            setLoading(false);
        }).catch(() => {
            setIsError(true);
            setLoading(false);
        });

        return () => {};

    }, [url]);

    return {
        data,
        loading,
        isError
    }
}
