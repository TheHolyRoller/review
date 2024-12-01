'use client'; 
import React from 'react'; 
import Link from 'next/Link'; 

import snow from '../assets/Snow.jpg'; 
import Image from 'next/image';


export default function RateHero(){

return(

    <div class='HeroContainer' >
    <div class='imageContainer'>
        <Image src={snow} alt='snow' width={50} height={50}>

        </Image>


    </div>


    {/* Add in the text container here  */}
    <div className='heroTextContainer'>


    <h1 className='heroText' >

    We would appreciate your feedback! 

    </h1>

    </div>




    </div>




); 




}
