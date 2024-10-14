import { footerLogo } from "../assets/images"
import { contactUs } from "../constants"

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-white py-16">
    <div className="container max-w-[80vw] flex-col gap-5 max-lg:max-w-[95vw]">
      <p className="section-id" id="our-solutions">CONTACT US</p>
      <h2 className="title text-center">Get in touch with us today!</h2>
      <h3 className="sub-title">Need more information on how GLOWELITE SOLUTION LLC can enhance your projects and unlock new market potentials?</h3>
      {/* Contact Form and Address */}
      <div className="flex justify-center items-center py-12 gap-8 max-md:flex-col-reverse max-md:gap-5 max-md:py-6">
        {/* form */}
        <form action="" className="grid grid-cols-2 rounded-sm gap-2 p-4 border border-contactBorder max-sm:p-2 max-sm:gap-1 max-sm:w-[85vw]">
          <input type="" placeholder="First name" className="form-input" />
          <input type="" placeholder="Last name" className="form-input" />
          <input type="" placeholder="Phone number" className="col-span-full form-input" />
          <input type="" placeholder="Email" className="col-span-full form-input" />
          <textarea type="" placeholder="Message" className="col-span-full form-input min-h-[25vh]" />
          <button type="submit" className="cta-button col-span-full text-lg">
            Send
          </button>
        </form>
        {/* address */}
        <div className="flex flex-col gap-5 max-md:items-center">
          <img src={footerLogo} alt="footer-logo" className="w-[12vw] max-md:w-[18vw] max-sm:w-[30vw]" />
          {contactUs.map((item) => (
          <div key={item.label} className="flex flex-col max-md:flex-row max-md:gap-3 max-md:w-[60vw] max-sm:w-[85vw] max-sm:flex-col">
            <h3 className="sub-title text-2xl max-md:w-[20vw] text-left">{item.label}</h3>
            <a href={item.link} className="body-text text-sm text-left max-md:w-[60vw]">{item.subtext}</a>
          </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs;