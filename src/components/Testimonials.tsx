import { BsChatQuote } from "react-icons/bs"
import testimonialsData from "../utils/testimonialsData"
import { IoArrowBack } from "react-icons/io5"
import { IoMdArrowForward } from "react-icons/io"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);


    const handleNext = () => {
        setCurrentIndex((prevState) => (prevState + itemsToShow) % testimonialsData.length)
    }

    const handlePrevious = () => {
        setCurrentIndex((prevState) => (prevState - itemsToShow +  testimonialsData.length) % testimonialsData.length)
    }

    const handleDotClick = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex])

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768) {
                setItemsToShow(3)
            } else {
                setItemsToShow(1)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])


  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
                <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
                <h2 className="text-2xl font-bold">Testimonials</h2>
                </div>
                <div className="md:w-2/3">
                <p className="text-secondary md:w-2/4 py-5">Hear from Our Satified Client; Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
            </div>

            {/* Testimonial slider */}

            <div className="relative mb-12">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-3 overflow-hidden">
                    {testimonialsData.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
                        <motion.div 
                         initial={{ opacity: 0, x: 50,  }}
                         animate={{ opacity: 1, x: 0,  }}
                         exit={{ opacity: 0, x: -50 }}
                         transition={{ duration: 0.5 }}
                        className="w-full relative py-5 md:max-w-md px-2" key={testimonial.id}>
                            <div className="absolute top-0 left-0 z-30">
                                <BsChatQuote className="size-8" />
                            </div>
                            <div className="flex flex-col h-48 bg-white hover:bg-primary rounded-lg border hover:border-primary p-6 cursor-pointer duration-300 ">
                                <p className="text-base font-medium mb-4">{testimonial.text}</p>
                                <span className="text-sm font-semibold text-gray-700 mt-auto">{testimonial.author}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                 {/* NAVIGATION DOTS */}

                 <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10 ">
                    <button className="text-black" onClick={handlePrevious}>
                        <IoArrowBack />
                    </button>
                    <div className="flex space-x-3">
                        {
                            testimonialsData.map((_, index) => (
                                <button onClick={() => handleDotClick(index)} key={index} className={`size-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsToShow ? "bg-primary" : "bg-gray-400"}`} />
                            ))
                        }
                    </div>
                    <button className="text-black" onClick={handleNext}>
                        <IoMdArrowForward />
                    </button>
                 </div>
            </div>

        </div>
    </section>
  )
}

export default Testimonials