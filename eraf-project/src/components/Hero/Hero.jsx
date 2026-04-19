import { memo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { getLocalizedText, texts } from "../../utils/localization.js";

const Hero = ({ hero }) => {
    const { lang } = useLanguage();
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !hero?.media?.media_url) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.src = hero.media.media_url;
                    video.load();

                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => { });
                    }

                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, [hero?.media?.media_url]);

    const title = getLocalizedText(hero, 'title', lang);
    const description = getLocalizedText(hero, 'description', lang);

    return (
        <div className="relative z-40 w-full md:h-[calc(100vh-92px)] h-[calc(90vh-92px)] overflow-hidden">

            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
                muted
                loop
                playsInline
                preload="none"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 z-30"></div>

            <div className="relative z-40 h-full flex items-center justify-center text-center text-secondary">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-10 px-6 max-w-[379px] md:max-w-[600px]">

                    <h1 className="font-bold text-[40px] md:text-[52px] leading-[1.4]">
                        {title}
                    </h1>

                    <p className="text-[16px] leading-relaxed">
                        {description}
                    </p>

                    <div className="flex gap-6 md:gap-4">
                        <Link to="/الخدمات">
                            <button className="primary-btn">{texts[lang].exploreServices}</button>
                        </Link>
                        <Link to="/تواصل-معانا">
                            <button className="secondary-btn">{texts[lang].contactUs}</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default memo(Hero);

