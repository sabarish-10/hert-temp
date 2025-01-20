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
  
       <section className="bg-black h-scroll w-screen flex items-center justify-center text-center flex-col overflow-hidden pb-20 sm:w-screen sm:scroll-x-hidden">
      <h1 className="text-glow text-4xl sm:text-5xl md:text-6xl font-bold text-[#fe5d26] m-6 sm:m-10">
  What We Do?
</h1>
<p className="text-2xl sm:text-2xl md:text-4xl text-center mb-6 sm:mb-8 text-gray-100">
  We Develop Products That People Love to Use.
</p>
<img 
  className="h-auto w-[80%] sm:w-[60%] md:w-[40%] mx-auto"
  src='/assets/images/img1.png'
  alt="Product Image"
/>
<p className="text-center text-white text-xl sm:text-lg md:text-4xl p-6 sm:p-10 overflow-x-hidden relative leading-[40px] sm:leading-[70px]">
  We specialize in developing products that not only meet user needs but exceed their expectations.
  With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, 
  we craft solutions that people genuinely love to use. Our goal is to create experiences that are intuitive, 
  engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral part of 
  our users’ lives.
</p>



{/*DESIGN SERVICES*/}
    {/*Mobile Application*/}
    {/*Web Application*/}
    {/*Development Services*/}
              
<DesignServices/>





{/* APPLICATION DESIGN STAGES */}
    {/*TRANSFORMATION*/}
    {/*MOBILE DEVELOPMENT*/}
    {/*WEB DEVELOPMENT*/}

<DesignStages/>

{/*AI ML SERVICES*/}
  
<AimlServices/>

{/*EMBEDDED SYSTEMS*/}

<EmbeddedSystems/>

{/*BLOCKCHAIN*/}

<BlockChain/>

{/*OUR STORY*/}
<OurStory/>



      </section>
        </>
    );
}