import { useEffect, useState } from "react";
import api from "../../API/Axios/Axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!endpoint) return;

        api.get(endpoint)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                setError(err.message);
            });

    }, [endpoint]);

    return { data, error };
};

export default useFetch;