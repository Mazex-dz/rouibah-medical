import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DemoOne, { LoaderDemo } from './components/demo';

const carouselRoot = document.getElementById('react-carousel-root');
if (carouselRoot) {
    createRoot(carouselRoot).render(<DemoOne />);
}

const SiteLoader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 500); // 0.5s extra just to show it nicely
        };
        if (document.readyState === 'complete') {
             handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (!loading) return null;
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999999, backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LoaderDemo />
        </div>
    );
};

const loaderRoot = document.getElementById('react-loader-root');
if (loaderRoot) {
    createRoot(loaderRoot).render(<SiteLoader />);
}
