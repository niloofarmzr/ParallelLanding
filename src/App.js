import React from 'react'
import './App.css';
import './styles/common.css'
import './styles/grid.css'
import Header from './components/Header';
import Intro from "./components/Intro";
import Facts from "./components/Facts";
import Advantages from "./components/Advantages";
import Solution from "./components/Solutions";
import Features from "./components/Features";
import Investors from "./components/Investors";
import Security from "./components/Security";
import FinancialEmpowerment from "./components/FinancialEmpowerment";
import TeamIntroduction from "./components/TeamIntroduction";
import Footer from "./components/Footer";

function App() {
    return (
        <div id='app' className='app'>
            <div className='content-max-width'>
                <Header/>
                <Intro/>
                <Facts/>
            </div>
            <Advantages/>
            <div className='content-max-width'>
                <Solution/>
                <Features/>
                <Investors/>
                <Security/>
                <FinancialEmpowerment/>
            </div>
            <TeamIntroduction/>
            <Footer/>
        </div>
    );
}

export default App;
