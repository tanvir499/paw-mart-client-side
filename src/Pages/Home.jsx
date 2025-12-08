import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import AdoptionAwareness from '../Component/AdoptionAwareness';
import PetHeroes from '../Component/petHeroes';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularSection></PopularSection>
           <AdoptionAwareness></AdoptionAwareness>
           <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;