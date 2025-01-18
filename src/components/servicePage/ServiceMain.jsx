import DesignServices from './designServices';
import AimlServices from './aiml';
import Navbar from "./navbar"
import EmbeddedSystems from './embedded';
import BlockChain from './blockChain'
import OurStory from './ourStory';
import DesignStages from './Applicationdesignstages';
export default function ServiceMain(){
    return(
        <>
        
        <Navbar />
  
        <section className="bg-black h-scroll w-screen flex items-center justify-center text-center flex-col overflow-hidden pb-20">
          <h1 className=" text-glow text-[50px] font-bold text-[#fe5d26] m-10">What We Do?</h1>
          <p className="text-[36px] text-center mb-8 text-gray-100" >
            We Develop Products That People Love to Use.
          </p>
          <img className="h-[500px] w-[591] items-center justify-center" src='/assets/images/img1.png' />
          <p className="text-center text-white text-[28px] p-[10px] overflow-x-hidden relative leading-[45px]">We specialize in developing products that not only meet user needs but exceed their expectations.
            With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality,
            we craft solutions that people genuinely love to use. Our goal is to create experiences that are intuitive,
            engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral part of
            our users’ lives.</p>
            
  
  
  
  
        <DesignServices />
  
        <DesignStages />
        <AimlServices />
        <EmbeddedSystems />
        <BlockChain />
        <OurStory />
  
        </section>
        </>
    );
}