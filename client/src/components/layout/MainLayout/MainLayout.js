import React from 'react';
import NavBar from '../../features/NavBar/NavBarContainer';
import Footer from '../../features/Footer/Footer';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ( {children} ) => (
    <div>
        <NavBar />
        <PageContainer>
            {children}
        </PageContainer>
        <Footer />
    </div>
);

export default MainLayout;