import { useEffect, useState } from 'react';

const useFadeInEffect = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setIsVisible(true);
        }, 50);

        return () => clearTimeout(fadeInTimer);
    }, []);

    return isVisible;
};

export default useFadeInEffect;
