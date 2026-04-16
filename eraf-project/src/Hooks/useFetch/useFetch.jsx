import { useEffect, useState } from "react";
import api from "../../API/Axios/Axios";
import { useNavigate } from "react-router-dom";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!endpoint) return;

        api.get(endpoint)
            .then((res) => {
                setData(res.data.data);
            })
.catch((err) => {
                const isNetworkError = !err.response || 
                    err.code === 'ERR_NETWORK' || 
                    err.code === 'ECONNABORTED' ||
                    err.message?.includes('Network Error') || 
                    err.message?.includes('timeout') ||
                    err.message?.includes('Failed to fetch');
                
                if (isNetworkError) {
                    navigate('/server-not-found');
                } else {
                    setError(err.message);
                }
            });

    }, [endpoint]);

    return { data, error };
};

export default useFetch;