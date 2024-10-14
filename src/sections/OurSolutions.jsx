import { ourSolutions } from "../constants";
import { FeatureCard } from "../components";

const OurSolutions = () => {
  return (
    <section className="bg-bgColor py-16">
    <div className="container max-w-[70vw] flex-col gap-5 max-lg:max-w-[95vw]">
      <p className="section-id" id="our-solutions">OUR SOLUTIONS</p>
      <h2 className="title text-center">Transformative Solutions for Health Innovation</h2>
      <h3 className="sub-title">Explore how our expert services can elevate your agritech and biotech ventures, driving
          sustainability and market success.</h3>
      {/* Features card */}
      <div className="grid grid-cols-3 gap-4 py-8 px-4 max-lg:grid-cols-2 max-[540px]:grid-cols-1">
        {ourSolutions.map((feature) => (
          <FeatureCard key={feature.label} {...feature} />
        ))}
      </div>
      <a href="#" className="cta-button btn-link">Make Appointment</a>
    </div>
  </section>
  )
}

export default OurSolutions;