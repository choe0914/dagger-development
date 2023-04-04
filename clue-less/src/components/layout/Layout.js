import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}