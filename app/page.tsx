/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import App from '../components/Rate'; 
import SignupFormDemo from "@/components/example/signup-form-demo";
import RateHero from './../components/RateHero';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


    {/* Add in the Hero Container here  */}

    {/* Add in the hero here  */}
    <RateHero/> 
    

        <App/>  
    
    </div>
  );
}
