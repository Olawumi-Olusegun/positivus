import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Logo from "../Logo";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    const handleToggleMenu = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleMenuClick = (name: string) => {
        setActiveItem(name)
        setIsOpen(false)
    }

    const menuList = [
        { name: "About Us", href: "#about"},
        { name: "Services", href: "#services"},
        { name: "Use Cases", href: "#use-cases"},
        { name: "Teams", href: "#teams"},
        { name: "Testimonials", href: "#testimonials"},
    ];

    useEffect(() => {
        const sections = menuList.map((menu) => document.querySelector(menu.href)) as any;
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSection: any;
            sections.forEach((section: any) => {
                if(section && section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    currentSection = section.getAttribute("id");
                }
            })
            setActiveItem(menuList.find((item) => item.href === `#${currentSection}`)?.name || "")
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [menuList])



  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <nav className="relative w-full lg:max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:px-8 flex items-center justify-between">
            <Logo onClick={() => handleMenuClick("/")} />
            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-x-5">
                {
                    menuList.map((menu) => (
                        <a 
                        key={menu.href} 
                        href={menu.href}
                        onClick={() => handleMenuClick(menu.href)}
                        className={`${activeItem === menu.href ? "bg-primary" : ""} px-2 text-black hover:bg-primary hover:underline hover:underline-offset-4 transit rounded duration-300`}
                        >
                            {menu.name}
                        </a>
                    ))
                }
                <a 
                href={"#contact"} 
                onClick={() => setActiveItem("#contact")} 
                className={`${activeItem === "#contact" ? "bg-primary border-primary" : ""} border px-4 py-2 border-black rounded-md hover:bg-primary hover:border-primary duration-300`}
                >
                    Request a quote
                </a>
            </div>

            {
                isOpen && (
                    <div className="lg:hidden absolute flex flex-col  py-3 lg:px-8 bg-white top-0 left-0 right-0">
                        
                        <div className="flex items-center justify-between px-4 sm:px-6">
                            <Logo onClick={() => {
                                setActiveItem("/")
                                setIsOpen(false)
                            }} />                            
                            <button onClick={() => setIsOpen(false)} className="flex items-center justify-center lg:hidden rounded-md bg-gray-100 hover:bg-gray-200 size-8 focus-visible:outline-primary duration-300 focus-visible:duration-0">
                                <RiCloseFill /> 
                            </button>
                        </div>
                        <div className="relative flex flex-col w-full border-t mt-3 px-4 sm:px-6">
                            <div className="relative flex flex-col gap-y-3 px-4 sm:px-3 pt-3 pb-3 space-y-1 ">
                            {
                                menuList.map((menu) => (
                                    <a 
                                    key={menu.href} 
                                    href={menu.href}
                                    onClick={() => handleMenuClick(menu.href)}
                                    className={`${activeItem === menu.href ? "bg-primary" : "" } p-2 w-[90%] text-black hover:bg-primary hover:underline hover:underline-offset-4 transition-all rounded duration-300`}
                                    >
                                        {menu.name}
                                    </a>
                                ))
                            }
                            </div>
                            <a 
                                href={"#contact"}
                                onClick={() => handleMenuClick("#contact")}
                                className={`${activeItem === "#contact" ? "bg-primary border-primary" : ""} gap-y-20 border px-4 py-3 mt-5 text-center border-black rounded-md hover:bg-primary hover:border-primary duration-300`}>
                                    Request a quote
                            </a>
                        </div>

                    </div>
                )
            }


            <button onClick={handleToggleMenu} className="flex items-center justify-center lg:hidden rounded-md bg-gray-100 hover:bg-gray-200 size-8 focus-visible:outline-primary duration-300 focus-visible:duration-0">
               { isOpen ? <RiCloseFill /> : <HiOutlineMenuAlt3 /> }  
            </button>

        </nav>
    </header>
  )
}

export default Navbar