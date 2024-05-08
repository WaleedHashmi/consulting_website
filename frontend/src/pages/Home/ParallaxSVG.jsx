import React, { useEffect, useState, useRef } from 'react';
import getSvgContent from './GetSvgContent';

function seededRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

const ParallaxSVG = () => {
    const [scrollY, setScrollY] = useState(0);
    const svgRef = useRef(null);

    const svgContent = getSvgContent();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (svgRef.current) {
            const children = svgRef.current.querySelectorAll('*');
            children.forEach((child, index) => {
                const speed = seededRandom(index) - 0.5;
                const transform = `translateY(${scrollY * speed}px)`;
                child.style.transform = transform;
            });
        }
    }, [scrollY]);

    return (
        <div style={{ height: '100vh', position: 'relative', zIndex: 0 }}>
            <div ref={svgRef} style={{ position: 'sticky', top: '50px' }}
                dangerouslySetInnerHTML={{ __html: svgContent }} />
        </div>
    );
};

export default ParallaxSVG;
