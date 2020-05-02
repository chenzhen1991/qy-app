import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Page(props) {
    return (
        <>
            <Header />
            {props.children} 
            <Footer />
        </>
    )
}
