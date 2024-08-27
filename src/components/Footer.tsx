import { Link } from "react-router-dom";
import footerLogo from "./../assets/footer-logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-t-2xl p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-2 py-6 px-8 md:justify-between">
                
                <div className="">
                    <img src={footerLogo} alt="footer-logo" className="h-8 pointer-events-none" />
                </div>
                
                <div className="flex items-center gap-2 flex-col md:flex-row md:gap-8">
                    <Link className="text-white hover:text-gray-400" to={"#about"}>Home</Link>
                    <Link className="text-white hover:text-gray-400" to={"#about"}>Services</Link>
                    <Link className="text-white hover:text-gray-400" to={"#use-cases"}>Use Case</Link>
                    <Link className="text-white hover:text-gray-400" to={"#contact"}>Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to={"#"}> <FaFacebook className="text-white hover:text-gray-400" /> </Link>
                    <Link to={"#"}> <FaTwitter className="text-white hover:text-gray-400" /> </Link>
                    <Link to={"#"}> <FaLinkedin className="text-white hover:text-gray-400" /> </Link>
                </div>

            </div>

            <FooterContact />

            <hr className="border-white/20 mx-4 sm:px-6 lg:px-8" />

            <div className="text-white/50 p-5 flex flex-wrap md:gap-8 px-4 sm:px-6 lg:px-8">
                <p>&copy; {new Date().getFullYear()} Positivus. All Rights Reserved </p>
                <Link to={"#"} className="hover:underline underline-offset-4">Privacy Policy</Link>
            </div>

        </div>
    </footer>
  )
}

export default Footer