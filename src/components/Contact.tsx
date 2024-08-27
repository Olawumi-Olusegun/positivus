import contactImage from "./../assets/contact.png";

const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 my-5">
                  <div className="flex-shrink-0 bg-primary text-black py-2 px-3">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-secondary md:w-2/4 py-5">Let{"'"}s Connect with us: <br /> Discuss Your Digital Marketing Needs</p>
                  </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between bg-tertiary rounded-md md:p-8 p-4">
            <div className="w-full md:w-1/2 p-4 ">
              <form className="space-y-4">
                <div className="flex gap-2 flex-col md:flex-row md:space-x-4 items-start justify-start">
                  <label htmlFor="contact-type" className="flex items-center gap-1.5">
                    <input type="radio" name="contact-type" id="contact-type" value={"general"} />
                    Say Hi
                  </label>
                  <label htmlFor="quote" className="flex items-center gap-1.5">
                    <input type="radio" name="contact-type" id="quote" value={"quote"} />
                    Get a Quote
                  </label>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="block text-sm text-gray-700">Name:</label>
                  <input type="text" name="name" id="name" placeholder="John Doe" className="py-2.5 px-4 block w-full rounded-md focus:outline-none focus:ring focus:ring-primary" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="block text-sm text-gray-700">Email:</label>
                  <input type="email" name="email" id="email" placeholder="johndoe@mail.com" className="py-2.5 px-4 block w-full rounded-md focus:outline-none focus:ring focus:ring-primary" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="block text-sm text-gray-700">Message:</label>
                  <textarea name="message" id="message" placeholder="Type Your Message..." rows={5}  className="resize-y py-2.5 px-4 block w-full rounded-md focus:outline-none focus:ring focus:ring-primary"></textarea>
                </div>

                <div className="my-5 w-full">
                  <button type="button" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 duration-300">Send Message</button>
                </div>

              </form>
            </div>
            <div className="w-full md:w-1/2 relative md:flex justify-end items-center md:-m-8 overflow-hidden">
              <img src={contactImage} alt="contact-image" className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full pointer-events-none" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact