const DesignServices = () => {
  const boxes = [
    { title: "User Interface", icon: <img
      src="/assets/images/mobapp1.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[197px]", top: "top-[1440px]" }, 
    
    { title: "Smooth Development", icon: <img
      src="/assets/images/mobapp2.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[283px]", top: "top-[1540px]" },
    
    { title: "User Experience", icon: <img
      src="/assets/images/mobapp3.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[218px]", top: "top-[1670px]" }, 
    
    { title: "Interactions", icon: <img
      src="/assets/images/mobapp4.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[175px]", top: "top-[1800px]" }, 
  ];
    

const items = [  "User-Centric Website Design",  "Custom Website Design",  "Responsive and Adaptive Layouts",  "Interactive Prototyping",];
  
const steps = [
  {
    title: "Research & Discovery",
    description:
      "We start by understanding your vision, target audience, and market trends. This ensures our designs align with your goals and resonate with your users.",
    icon: "/assets/images/research.svg",
  },
  {
    title: "Ideation",
    description:
      "Through brainstorming and wireframing, we create innovative concepts and layouts, focusing on functionality, aesthetics, and user experience.",
    icon: "/assets/images/search.svg",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team transforms ideas into detailed, visually appealing designs. Interactive prototypes allow you to experience the look and feel before finalization.",
    icon: "/assets/images/paint.svg",
  },
  {
    title: "Review & Refinement",
    description:
      "We incorporate feedback and refine designs to perfection, ensuring the final product meets your expectations and is ready for implementation.",
    icon: "/assets/images/review.svg",
  },
];  
    

return (

<>

        {/* DESIGN SERVICES*/}
        <h1 className="text-glow text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 flex flex-row mt-6 sm:mt-10">
  <span className="text-[#fe5d26] underline">D</span>esign Services
</h1>

  
       {/* Mobile Application*/}
       <div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[100px] md:mt-[120px] lg:mt-[150px] p-4 sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
    In<span className="text-[#fe5d26] underline ml-2">M</span>obile Application
  </h1>
  <img
    src="/assets/images/img2.png"
    alt="Icon"
    className="h-[25px] sm:h-[30px] md:h-[37px] lg:h-[40px] ml-0 item-end"
  />
</div>


  
<div className="w-full flex flex-col justify-between sm:flex-row lg:gap-10">
  {/* Boxes Section */}
  <div className="relative flex-col flex-wrap px-6 gap-6 my-10 flex justify-between">
  {boxes.map((box, index) => (
    <div
      key={index}
      className={`relative bg-transparent border border-orange-600 rounded-lg shadow-lg inline-flex items-center px-4 gap-2`}
      style={{
        boxShadow:
          "8px 8px 4px 0px #FFFFFF40, 12px 12px 200px 0px #FFFFFF40",
        width: 'fit-content', 
      }}
    >
      <span className="text-orange-600 text-[14px] sm:text-[20px] leading-[20px] sm:leading-[41px]">
        {box.title}
      </span>
      <span className="text-base sm:text-xl">{box.icon}</span>
    </div>
  ))}
</div>

  {/* Image Section */}
  <div className="relative h-auto lg:w-[70%]  ml-auto mr-0 sm:w-[80%]  flex flex-col sm:flex-row items-center sm:items-end rounded-tl-[24px] rounded-bl-[24px] bg-[#1d1d1f] mt-[30px] sm:mt-[50px]">
  {/* Gradient Circle */}
<div className="absolute 
  top-[45%] sm:top-[20%] md:top-[27%] lg:top-[25%] 
  right-[-5%] sm:right-[-2%] md:right-[0%] lg:right-[-2%] 
  transform 
  translate-x-[50%] sm:translate-x-[60%] md:translate-x-[85%] lg:translate-x-[70%] 
  -translate-y-[50%]">
    <div className="w-[100px] sm:w-[160px] md:w-[220px] lg:w-[260px] h-[100px] sm:h-[160px] md:h-[220px] lg:h-[260px] bg-gradient-to-b from-[#7e3535] to-[#fe5d26] rounded-full"></div>
  </div>

  {/* Image Section */}
  <div className="relative mx-auto pt-20 pr-10">
    <img
      src="/assets/images/img3.png"
      alt="Phones"
      className="w-[70%] mr-auto ml-0 h-auto top-auto bottom-10 sm:w-[400px]  md:w-[600px] lg:w-[750px] transform -translate-y-4 md:-translate-y-8 lg:-translate-y-10"
    />
  </div>
</div>


</div>


  
        {/* Content Section */}
   <div className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          > 
          <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src={step.icon}
          alt="Research Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      {step.title}
    </h2>
    <hr className="border-t border-gray-500 border-[1px] w-full mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-xl text-start leading-7">
     {step.description}
    </p>
      </div>
        ))}
    </div>


          
<p className="text-center text-gray-500 text-3xl px-10 leading-10 max-w-[1300px] mx-auto mt-20">
  We specialize in developing products that not only meet user needs but exceed their expectations. With a
  perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, we craft
  solutions that people genuinely love to use. Our goal is to create experiences that are intuitive,
  engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral
  part of our users’ lives.
</p>


{/*Web Application*/}

<div className="flex gap-2 ml-0 mr-[auto] mt-8 sm:mt-[100px] md:mt-[120px] lg:mt-[150px] p-4 sm:p-6 md:p-10 w-full sm:w-[375px] md:w-[450px] lg:w-[600px] h-auto">
  <h1 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-bold text-white flex">
    In<span className="text-[#fe5d26] underline ml-2">W</span>eb Application
  </h1>
  <img
    src="/assets/images/img5.svg"
    alt="Icon"
    className="h-[20px] sm:h-[25px] md:h-[30px] lg:h-[35px] ml-2 item-end"
  />
</div>

<img
  className="h-[60%] sm:h-[75%] md:h-[90%] lg:h-[95%] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[85%] mx-auto mt-8 sm:mt-12 md:mt-16"
  src='/assets/images/img4.png'
  alt="Web Application"
/>



<div className="bg-black text-white py-10 px-4">
  <h2 className="text-center text-3xl font-semibold mb-8">
    <span className="text-orange-500 font-bold underline">T</span>ransform Your Digital Presence with Exceptional Website Design
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-4">
  {items.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-[48%] lg:w-[23%] h-[134px] flex items-center justify-between gap-2 px-4 py-2 border-2 border-gray-600 
                rounded-3xl group hover:border-blue-500 transition-transform duration-300"
    >
      {/* Text */}
      <span className="text-lg sm:text-xl lg:text-2xl text-[#86868b] font-medium group-hover:text-blue-500 transform transition-transform duration-300">
        {index + 1}. {item}
      </span>
      {/* Arrow */}
      <span className="text-2xl sm:text-3xl text-[#86868b] rounded-lg transform transition-transform duration-700 
                       group-hover:text-blue-500 group-hover:translate-y-[-10px] sm:group-hover:translate-y-[-20px] lg:group-hover:translate-y-[-40px] 
                       group-hover:rotate-[30deg]">
        ▶
      </span>
    </div>
  ))}
</div>

</div>
</div>
</>
    
  );
};
  
  export default DesignServices;
  