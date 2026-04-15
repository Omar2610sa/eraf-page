import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // خليها smooth أو شيلها لو عايز فوري
        });
    }, [pathname]);

    return null;
};

export default ScrollTop;