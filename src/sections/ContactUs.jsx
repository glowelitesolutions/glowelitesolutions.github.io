const ContactUs = () => {
  return (
    <section className="bg-white py-16">
    <div className="container max-w-[70vw] flex-col gap-5 max-lg:max-w-[95vw]">
      <p className="section-id" id="our-solutions">CONTACT US</p>
      <h2 className="title text-center">Get in touch with us today!</h2>
      <h3 className="sub-title">Need more information on how GLOWELITE SOLUTION LLC can enhance your projects and unlock new market potentials?</h3>
      {/* Contact Form and Address */}
      <div className="grid grid-cols-3 gap-4 py-8 px-4 max-lg:grid-cols-2 max-[540px]:grid-cols-1">
        {/* {ourSolutions.map((feature) => (
          <FeatureCard key={feature.label} {...feature} />
        ))} */}
      </div>
      <a href="#" className="cta-button btn-link">Make Appointment</a>
    </div>
  </section>
  )
}

export default ContactUs;