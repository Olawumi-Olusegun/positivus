import bannerImage from "./../assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-white  pt-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[45%]">
                    <h1 className="text-5xl lg:text-6xl lg:leading-[1.2] font-bold text-secondary mb-4 lg:max-w-[531px]">Navigating the digital landscape for success</h1>
                    <p className="text-gray-600 mb-6 lg:max-w-[450px]">
                        Out digital marketing agency helps business to grow and succeed online through a range of services including SEO, PPC, Social media marketing and content creation.
                    </p>
                    <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 duration-300">Book a consultation</button>
                </div>
                <div className="md:w-[55%] order-first md:order-last flex items-center justify-center">
                    <img src={bannerImage} alt="banner-image" className="object-center object-cover rounded-md pointer-events-none" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero