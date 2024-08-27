import { Link } from "react-router-dom"
import caseStudies from "../utils/case-studies"
import { MdOutlineArrowOutward } from "react-icons/md"

const CaseStudy = () => {
  return (
        <section className="pt-16 pb-15 bg-white" id="use-cases">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
                    <h2 className="text-2xl font-bold">Case STUDIES</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3 py-5">Explore Real-Life Example of Our Proven Digital Marketing Siccess through Our Case Studies</p>
                    </div>
                </div>

            {/* case study card */}
            <div className="bg-black text-white p-8 rounded-md ">
                <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        caseStudies.map((useCase) => (
                            <div className="p-4 border border-gray-700 rounded-md " key={useCase.id}>
                                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                                <p className="mb-4">{useCase.description}</p>
                                <Link to={"#"} className="flex items-center gap-1.5 text-primary hover:underline duration-300 ">
                                    <span>Learn More</span> 
                                    <MdOutlineArrowOutward className="" /> 
                                </Link>
                            </div>
                        ))
                    }
                </article>
            </div>

            </div>
        </section>
  )
}

export default CaseStudy