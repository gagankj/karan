import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Preloader duration

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            const fadeTimer = setTimeout(() => {
                setFadeIn(true);
            }, 100); // Small delay before fade-in starts
            return () => clearTimeout(fadeTimer);
        }
    }, [loading]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div
            className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default App;
