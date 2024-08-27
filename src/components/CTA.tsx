import CTAImage from "./../assets/cta-image.png";

const CTA = () => {
  return (
    <div className="relative py-12 mt-14">
      {/*   px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-md sm:py-14 pt-8 px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Let{"'"}s make things happen
              </h1>
              <p className="text-gray-600 mb-6 md:w-2/3">
               Contact use today to learn more about how our digital marketing services can help your business grow and succeed online
              </p>
              <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">Get your free proposal</button>
            </div>
            <div className="md:w-1/2 flex justify-center items-end relative ">
              <img src={CTAImage} alt="cta-image" className="md:absolute md:-top-52 md:bottom-0 right-2 pointer-events-none" />
            </div>
        </div>
    </div>
  )
}

export default CTA