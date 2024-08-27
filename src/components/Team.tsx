import { Link } from "react-router-dom"
import teamData from "../utils/teamData"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react"


const Team = () => {

    const [visibleTeam, setVisibleTeam] = useState(6);

    const handleShowMore = () => {
        setVisibleTeam((prevCount) => prevCount + 3)
    }

  return (
    <section className="pt-24 pb-12 bg-white" id="teams">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
            <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
              <h2 className="text-2xl font-bold">Team</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-secondary md:w-2/4 py-5">Meet the skilled and experience team behind our successful digital marketing strategies</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                teamData.slice(0, visibleTeam).map((team) => (
                    <div className="hover:bg-primary rounded-lg border hover:border-primary p-6 cursor-pointer duration-300" key={team.id}>
                        <div className="relative mb-4">
                            <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                                <img src={team.image} alt={`${team.name}-image`} className="rounded-full size-32 pointer-events-none object-cover" />
                            </div>
                        <div className="">
                            <h3 className="text-xl font-semibold">{team.name}</h3>
                            <p className="text-secondary">{team.position}</p>
                        </div>
                        <Link to={"#"} className="absolute top-0 right-0 bg-black hover:bg-primary duration-300 hover:text-black text-white p-2 rounded-full ">
                            <FaLinkedin className="size-5" />
                        </Link>
                        </div>

                        <div className="">
                            <hr className="my-4 border-secondary" />
                            <p>{team.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        {
            visibleTeam < teamData.length && (
                <div className="flex justify-end mt-8 w-full">
                    <button onClick={handleShowMore} className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black duration-300">See All Team</button>
                </div>

            )
        }


        </div>
    </section>
  )
}

export default Team