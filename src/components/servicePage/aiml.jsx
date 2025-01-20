const AimlServices = () => {
  return (
    <>
      <h1 className=" text-glow text-[50px] font-bold text-gray-100 mb-4 flex flex-row mt-[147px] h-[47px]"><h1 className="text-[#fe5d26] underline">AI/ML</h1> Services</h1>
  <img src="/assets/images/ai.svg" alt="aiml" class="w-[1471px] h-[830.34px] t-[9492px] l-[-22px] align-middle"/>


  <div className="relative h-auto w-[1218px] flex flex-col items-center bg-[#1E1E1E] text-white py-8 px-6">
  <div className="text-center mb-8">
    <h2 className="max-w-[1026px] text-[#9C9C9C] text-[20px] font-normal leading-[26.6px] md:text-[24px] lg:text-[28px]">
      AI/ML Solutions
    </h2>
    <h1 className="max-w-[1026px] text-[14px] font-xl leading-[36.06px] mt-4 md:text-[22px] lg:text-[30px]">
      Innovation Empowered: Driving Intelligent Solutions for a <br /> Smarter Future.
    </h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto">
    {[...Array(4)].map((_, index) => {
      const headings = [
        "Predictive Insights",
        "Automation Excellence",
        "Personalized Experiences",
        "Enhanced Accuracy",
      ];
      const descriptions = [
        "Harness the power of AI to anticipate trends and outcomes, enabling data-driven decision-making with unmatched precision.",
        "Streamline complex processes with AI-powered automation, saving time, reducing costs, and increasing efficiency across operations.",
        "Deliver tailored experiences to your customers with intelligent algorithms that understand and adapt to individual preferences.",
        "Leverage machine learning models to minimize errors and optimize accuracy in critical tasks, ensuring reliable and consistent performance.",
      ];
      const images = [
        "/assets/images/aiml icon1.svg",
        "/assets/images/aiml icon2.svg",
        "/assets/images/aiml icon3.svg",
        "/assets/images/aiml icon4.svg",
      ];

      return (
        <div
          key={index}
          className="group relative w-full max-w-[274.5px] h-auto bg-[#FFFFFF0D] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mx-auto hover:border-2 hover:border-blue-500"
        >
          {/* Icon container */}
          <div
            className="absolute top-1 left-4 transform transition-transform duration-300 group-hover:scale-50 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]"
          >
            <img
              src={images[index]}
              alt={`icon-${index + 1}`}
              className="w-[100px] h-[100px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]"
            />
          </div>
          <div className="mt-20 group-hover:mt-12"> {/* Reduced margin-top during hover */}
            <h3
              className="text-[16px] font-semibold text-left bg-gradient-to-l from-[#6C63FF66] to-[#6C63FF] text-transparent bg-clip-text transition-all duration-300 group-hover:text-[23px] sm:text-[18px] md:text-[20px] lg:text-[20px]"
              style={{
                textShadow: "0 0 4px rgba(108, 99, 255, 0.5), 0 0 6px rgba(108, 99, 255, 0.3)"
              }}
            >
              {headings[index]}
            </h3>
            <div className="h-[1px] w-20 bg-white mt-6 mb-4"></div>
            <p className="text-gray-300 text-left text-[14.75px] sm:text-[15px] md:text-[16px] lg:text-[14.75px]">
              {descriptions[index]}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>


<h1 className="text-neutral-400 font-segoe text-[30px] font-normal text-center p-10 md:text-[36px] lg:text-[40px]">
  Transformative Power: Harness AI and ML to stay ahead in an ever-evolving digital landscape
</h1>

<div className="flex flex-col gap-y-[40px]">
  {/* First Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] px-5 md:px-10">
    <img src="/assets/images/AI (1).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
    <img src="/assets/images/AI (2).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
  </div>

  {/* Second Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] px-5 md:px-10">
    <img src="/assets/images/AI (3).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
    <img src="/assets/images/AI (4).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
  </div>
</div>
  <div classname="w-[1204px] h-[215px] t-[11774px] l-[38px] ">
<p className=" text-neutral-400 font-segoe text-[24px] font-normal leading-[43px] text-center p-40">We harness the transformative power of Artificial Intelligence (AI) and Machine<span className='text-white'> Learning (ML)</span> to help businesses <br/>stay ahead in an ever-evolving digital landscape. Our AI/ML solutions are designed to <span className='text-white'>automate processes</span>,<br/> enhance decision-making, and unlock hidden opportunities within your data. From predictive analytics to natural<br/> language processing and computer vision, we tailor our services to solve real-world challenges and <span className='text-white'> drive <br/>measurable results</span>.</p>
</div>

<img src="/assets/images/AI ML.svg" alt="aiml" className='w-[700px] h-[698.6px] t-[12229px] l-[290px]'/>
<div className="w-full flex items-start justify-start">
  <img
    src="/assets/images/aiml2.svg"
    alt="aiml2"
    className="w-[502px] h-[376px]"
  />
</div>

<div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 gap-[24px]">
  <h1 className="text-4xl md:text-6xl font-normal text-[45.56px] mb-16 text-center relative max-w-[800px] mx-auto">
    Unleash your{" "}
    <span className="relative inline-block px-4 py-2">
      <span
        className="absolute inset-0 border border-dashed border-neutral-700 rounded-md"
        aria-hidden="true"
      ></span>
      <span
        className="absolute top-0 left-0 w-2 h-2"
        style={{
          borderTop: "1px solid",
          borderLeft: "1px solid",
          borderImageSource: "linear-gradient(253.84deg, #434AFF -13.78%, #47B2FF 67.1%, #39EDAC 111.72%)",
          borderImageSlice: 1,
        }}
        aria-hidden="true"
      ></span>
      <span
        className="absolute bottom-0 right-0 w-2 h-2"
        style={{
          borderBottom: "1px solid",
          borderRight: "1px solid",
          borderImageSource: "linear-gradient(253.84deg, #434AFF -13.78%, #47B2FF 67.1%, #39EDAC 111.72%)",
          borderImageSlice: 1,
        }}
        aria-hidden="true"
      ></span>
      <span className="relative font-normal text-[43.31px]">CREATIVITY</span>
    </span>
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 max-w-6xl mx-auto mt-20 gap-y-12">
    {/* Section 1 */}
    <div className="flex flex-col items-center relative group mt-12">
      {/* SVG Image Positioned at the Top-Right of Heading */}
      <img
        src="/assets/images/SVG (2).svg"
        alt="svg"
        className="absolute top-[-80px] md:top-[-100px] left-[35px] w-[55.39px] h-[48.18px]"
      />
      {/* Heading */}
      <h2 className="text-xl text-[22.5px] mb-4 relative transition-all duration-300 transform group-hover:text-[32px] text-center md:text-left">
        Plug-and-Play AI Solutions
      </h2>

      <div className="relative flex items-center justify-center gap-12 mt-10 group-hover:gap-8">
        <img
          src="/assets/images/line1.svg"
          alt="feature"
          className="w-[195.26px] h-[58.89px]"
        />

        <div className="bg-transparent border border-[#FFFFFF1A] w-full sm:w-[138.48px] h-auto p-4 rounded-2xl relative z-10 flex items-center justify-center">
          <img
            src="/assets/images/feature1.svg"
            alt="feature"
            className="transition-all duration-300 group-hover:filter group-hover:sepia group-hover:saturate-150 group-hover:brightness-110 object-contain"
          />
        </div>

        <img
          src="/assets/images/line2.svg"
          alt="feature"
          className="w-[136.68px] h-[58.89px]"
        />
      </div>

      <p className="text-gray-400 text-left mt-12 text-base transition-all duration-300 transform group-hover:text-xl group-hover:mt-6 text-center md:text-left">
        Unlike traditional AI platforms, our AI/ML solutions don’t
        require extensive technical expertise. Designed for a seamless plug-and-play experience, our platform empowers businesses to harness
        the capabilities of Artificial Intelligence and Machine Learning
        effortlessly.
      </p>
    </div>

    {/* Section 2 */}
    <div className="flex flex-col items-center relative group mt-12">
      {/* SVG Image Positioned at the Top-Right of Heading */}
      <img
        src="/assets/images/SVG (2).svg"
        alt="svg"
        className="absolute top-[-80px] md:top-[-100px] left-[35px] w-[55.39px] h-[48.18px]"
      />
      {/* Heading */}
      <h2 className="text-xl text-[22.5px] mb-4 relative transition-all duration-300 transform group-hover:text-[32px] text-center md:text-left">
        Automating Processes
      </h2>

      <div className="relative flex items-center justify-center gap-12 mt-10 group-hover:gap-8">
        <img
          src="/assets/images/line1.svg"
          alt="feature"
          className="w-[195.26px] h-[58.89px]"
        />

        <div className="bg-transparent border border-[#FFFFFF1A] w-full sm:w-[138.48px] h-auto p-4 rounded-2xl relative z-10 flex items-center justify-center">
          <img
            src="/assets/images/feature2.svg"
            alt="feature"
            className="transition-all duration-300 group-hover:filter group-hover:sepia group-hover:saturate-150 group-hover:brightness-110 object-contain"
          />
        </div>

        <img
          src="/assets/images/line2.svg"
          alt="feature"
          className="w-[136.68px] h-[58.89px]"
        />
      </div>

      <p className="text-gray-400 text-left mt-12 text-base transition-all duration-300 transform group-hover:text-xl group-hover:mt-6 text-center md:text-left">
        From automating processes to making data-driven decisions, our solutions cater to users of all skill levels,
        enabling them to unlock valuable insights and transform
        their operations with minimal effort. Embrace innovation
        and let AI/ML elevate your business to new heights.
      </p>
    </div>
  </div>
</div>

<img src="/assets/images/aitoy.svg" alt="aiml" className='w-[1015px] h-[659px] t-[13991px] l-[132px]'/>

<div class="ml-10 mr-[auto] text-left p-6 sm:p-8 md:p-10">
  <h1 class="w-full text-[#4280EF] text-[16.62px] sm:text-[18px] md:text-[20px] font-semibold">
    How it works
  </h1>
  <h1 class="w-full text-white font-semibold text-[33.97px] sm:text-[28px] md:text-[33px] leading-[-0.45px] mt-3">
    We Can Expect To Get From The <br />AI ML
  </h1>

  <div class="w-full sm:w-auto md:w-[1225px] h-auto gap-[16.09px] mx-auto bg-black text-white p-6 mt-5">
    <div class="flex flex-col items-center">

      <div class="flex flex-wrap justify-between w-full mb-4 gap-[40px] sm:gap-8">
        <h3 class="text-[24px] sm:text-[20px] md:text-[24px] font-normal text-center flex-1 mb-4 sm:mb-2">
          Access To Cutting-<br />Edge <span class="text-orange-500"><br />Technology</span>
        </h3>
        <h3 class="text-[24px] sm:text-[20px] md:text-[24px] font-normal text-center flex-1 mb-4 sm:mb-2">
          Data-Driven <span class="text-orange-500"><br />Decision Making</span>
        </h3>
        <h3 class="text-[24px] sm:text-[20px] md:text-[24px] font-normal text-center flex-1 mb-4 sm:mb-2">
          Focus on Core <span class="text-orange-500"><br />Competencies</span>
        </h3>
        <h3 class="text-[24px] sm:text-[20px] md:text-[24px] font-normal text-center flex-1 mb-4 sm:mb-2">
          Expert Digital <span class="text-orange-500"><br />Solutions</span>
        </h3>
      </div>

      <hr class="w-full md:w-[1225px] h-[2px] border-t border-[#86868B] mb-4 mt-4" />

      <div class="flex flex-wrap justify-between w-full gap-[109px] sm:gap-4">
        <p class="text-[#86868B] text-[14.58px] sm:text-[12px] md:text-[14.58px] leading-[24.14px] text-left flex-1 mb-4 sm:mb-2">
          We provide access to the<br />latest technologies, ensuring<br />your business stays ahead of<br />
          the competition with<br />innovative solutions that drive<br />growth and efficiency.
        </p>
        <p class="text-[#86868B] text-[14.58px] sm:text-[12px] md:text-[14.58px] leading-[24.14px] text-left flex-1 mb-4 sm:mb-2">
          Leverage data insights to<br />make informed, strategic<br />decisions that enhance your<br />
          operations, improve<br />performance, and maximize<br />ROI.
        </p>
        <p class="text-[#86868B] text-[14.58px] sm:text-[12px] md:text-[14.58px] leading-[24.14px] text-left flex-1 mb-4 sm:mb-2">
          We enable your team to<br />concentrate on your core<br />strengths while we handle the<br />
          digital solutions that propel<br />your business forward.
        </p>
        <p class="text-[#86868B] text-[14.58px] sm:text-[12px] md:text-[14.58px] leading-[24.14px] text-left flex-1 mb-4 sm:mb-2">
          Our team of skilled<br />professionals, with expertise<br />across various digital<br />disciplines,
          will help you<br />navigate the digital landscape<br />and achieve your business<br />objectives with
          tailored<br />solutions.
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default AimlServices;
