import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Myskills from '../Myskills/Myskills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <About></About>
           <Myskills></Myskills>
           <Projects></Projects>
        </div>
    );
};

export default Home;