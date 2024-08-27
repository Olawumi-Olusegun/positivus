
const FooterContact = () => {
  return (
    <section className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8 mt-6">
        <div className="flex-1 space-y-4 ">
            <button className="bg-primary text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-60 duration-300">Contact Us</button>
            <div className="flex flex-col gap-3 text-white">
                <span> <strong>Email:</strong> info@positivus.com </span>
                <span> <strong>Phone:</strong> +234 594 0934 045 </span>
                <span> <strong>Address:</strong> 1234 simple-drive way calvary lane </span>
            </div>
        </div>
        <div className="flex-1 bg-[#292a32] justify-center items-center p-8 rounded-md flex">
            <form className="flex items-center flex-col justify-center h-20 md:flex-row gap-4">
                <input type="email" name="email" id="email" placeholder="johndoe@mail.com" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="button" className="bg-primary text-black px-6 py-2.5 rounded-md font-medium hover:bg-opacity-60 duration-300">Subscribe to news</button>
            </form>
        </div>
    </section>
  )
}

export default FooterContact