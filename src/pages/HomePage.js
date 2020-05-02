import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Title from '../component/Title';

export default function HomePage() {
    return (
        <div>
            <Header />
            <Title title='业务简介' msg='BUSINESS BRIEF'/>
            <Footer />
        </div>
    )
}
