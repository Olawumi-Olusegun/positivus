import { useState } from "react"
import processSteps from "../utils/processSteps";
import { FaMinus, FaPlus } from "react-icons/fa";

const WorkingProcess = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

  return (
    <section className="pt-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
                <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
                    <h2 className="text-2xl font-bold">Our Workking Process</h2>
                </div>
                <div className="md:w-2/3">
                <p className="text-secondary md:w-2/6 py-5">Step-By-Step Guide to Acheiving Your Business Goals</p>
                </div>
            </div>

            {/* Accordion */}


        <div className="">
            {
                processSteps.map((process, index) => (
                    <div className={`border rounded-md mb-4 overflow-hidden ${openIndex === index ? "border-primary" : "border-gray-300"}`} key={process.number}>
                        <button onClick={() => handleToggle(index)} className={`w-full text-left p-4 flex justify-between items-center ${openIndex === index ? "bg-primary" : "bg-tertiary"}`}>
                            <div className="flex items-center gap-5">
                                <span className="text-secondary font-extrabold text-2xl">{process.number}</span>
                                <h3 className="text-lg font-semibold">{process.question}</h3>
                            </div>
                            <div className="bg-white text-black border p-1.5 rounded-full">
                                {
                                    openIndex === index ? <FaMinus /> : <FaPlus />
                                }
                            </div>
                        </button>
                        {
                            openIndex === index ? (
                                <div className="p-4 bg-primary text-secondary">
                                    <hr className="mt-0 mb-5 border border-black " />
                                    <p>{process.answer}</p>
                                </div>
                            ) : null
                        }
                    </div>
                ))
            }
        </div>

        </div>
    </section>
  )
}

export default WorkingProcess