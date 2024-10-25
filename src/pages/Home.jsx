
import image1 from "../assets/heroimage1.svg";
import image2 from "../assets/heroimage2.svg";
import bgImg from "../assets/ornament.svg";
import About from "./About";
import MarketplaceHome from "./MarketplaceHome";

const Home = () => {
  return (
    <main>
      <section className="bg-[#3F9AAE]/5 relative py-6">
        <div className="lg:w-[70%] md:w-[70%] w-[100%] mx-auto text-center my-12 px-4 lg:px-0 md:px-0">
          <h1 className="lg:text-[50px] md:text-[50px] text-[28px] font-[700] my-4">
            Local spot/Marketplace for Traders, Artisans, Small business owners.
          </h1>
          <p className="lg:text-[24px] md:text-[24px] text-[18px] text-[#0F160F]/80">
            Trade unused/spoilt products on the blockchain, to support the needy, with transparency and ease of tracking using the block explorer
          </p>
          <div className="mt-6">
            <button className="bg-[#3F9AAE] rounded-lg p-4 text-white mr-4 lg:text-[20px] md:text-[20px] text-[18px]">
              Sell Products
            </button>
            <button className="border border-[#3F9AAE] rounded-lg p-4 text-[#3F9AAE] bg-white lg:text-[20px] md:text-[20px] text-[18px]">
              Buy Products
            </button>
          </div>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[500px] w-[250px] h-[250px] bg-[#015C28]/20 blur-[80px] absolute top-0 left-0 rounded-full"></div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-between lg:w-[90%] md:w-[90%] w-[100%] mx-auto mb-10">
          <div className="flex justify-between items-center lg:w-[45%] md:w-[45%]w-[100%]">
            <img src={bgImg} alt="" className="hidden lg:block md:block" />
            <img src={image2} alt="" className=" ml-auto mb-4" />
          </div>
          <div className="flex justify-between items-center lg:w-[52%] md:w-[52%] w-[100%] ">
            <img src={image1} alt="" className="mr-auto" />
            <img src={bgImg} alt="" className="hidden lg:block md:block" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto">
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-[#3F9AAE] lg:w-[70%] md:w-[70%] w-[100%] my-12 font-titiliumweb text-center lg:text-left md:text-left">
            Welcome to Basearpsveris, where e-commerce helps the needy
          </h2>
          <div className="flex flex-col lg:flex-row md:flex-row justify-between">
            <div className="py-6 border-t-2 border-[#3F9AAE] lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
              <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4">
                Tradeable productss
              </h3>
              <p>
                E-commerce does not favor only the traders, It can reduce poverty too.
              </p>
            </div>
            <div className="py-6 border-t-2 border-[#3F9AAE] lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
              <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4">
                Be a Part of the Future
              </h3>
              <p>
                Basearpsveris harnesses the potential of blockchain and technology for a better world.
              </p>
            </div>
            <div className="py-6 border-t-2 border-[#3F9AAE] lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
              <h3 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] font-titiliumweb mb-4">
                Simple and Engaging
              </h3>
              <p>
                Basearpsveris makes sustainability accessible and engaging. Embrace the future of sustainability
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-10">
        <h2 className="px-4 lg:px-0 md:px-0 lg:text-[32px] md:text-[32px] text-[24px] font-[700] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-titiliumweb items-center text-center lg:text-left md:text-left">Unused materials for sale (Prices are in Unit of Measure) <span className="lg:text-[24px] md:text-[24px] text-[18px] font-[400]">View More</span></h2>
        <MarketplaceHome/>
      </section>
      <section id="about-us" className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto my-14">
        <About />
      </section>
    </main>
  );
};

export default Home;
