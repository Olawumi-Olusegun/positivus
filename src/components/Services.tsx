import { Link } from "react-router-dom"
import { services } from "../utils/services"
import LinkIcon from "./../assets/link-icon.png";


const Services = () => {
  return (
    <section className="pt-24 pb-15 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
            <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
              <h2 className="text-2xl font-bold">Services</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-secondary md:w-2/3 py-5">At our digital marketing agency, we offer a range of services to help business grow and succeed online. These services include.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191a23] ${service.backgroundColor} ${service.textColor} `}>
                <div className="md:w-1/2 flex flex-col h-full justify-between">
                  <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                  <Link to={`#`} className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}>
                    <img src={LinkIcon} alt={`${service.title}-icon`} className="size-6 rounded-full" />
                    <span className="text-lg font-medium">Learn More</span>
                  </Link>
                </div>
                <div className="md:w-1/2 order-first md:order-last">
                  <img src={service.image} alt={`${service.title}-image`} className="object-center object-cover rounded-md mb-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Services