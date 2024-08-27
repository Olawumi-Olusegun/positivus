import amazonLogo from "./../assets/logos/amazon.png";
import dribbleLogo from "./../assets/logos/dribble.png";
import hubspotLogo from "./../assets/logos/hubspot.png";
import netflixLogo from "./../assets/logos/netflix.png";
import notionLogo from "./../assets/logos/notion.png";
import zoomLogo from "./../assets/logos/zoom.png";


const LogoCarousel = () => {
  return (
    <section className="py-12 overflow-hidden bg-white max-w-4xl mx-auto">
        <div className="animate-marquee flex items-center justify-center gap-x-6">
            <img src={amazonLogo} alt="h-12" className="pointer-events-none " />
            <img src={dribbleLogo} alt="h-12" className="pointer-events-none " />
            <img src={hubspotLogo} alt="h-12" className="pointer-events-none " />
            <img src={netflixLogo} alt="h-12" className="pointer-events-none " />
            <img src={notionLogo} alt="h-12" className="pointer-events-none " />
            <img src={zoomLogo} alt="h-12" className="pointer-events-none " />
        </div>
    </section>
  )
}

export default LogoCarousel