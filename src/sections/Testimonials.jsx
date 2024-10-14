import { testimonials } from "../constants";
import { TestimonialsCard } from "../components";

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
    <div className="container max-w-[70vw] flex-col gap-5 max-lg:max-w-[95vw]">
      <p className="section-id" id="testimonials">TESTIMONIALS</p>
      {/* <div className=""> */}
      <h2 className="title text-center">What our clients are saying about us</h2>
      <h3 className="sub-title">See how our strategic consulting and collaborative expertise empower businesses to develop sustainable, compliant, and market-ready health products.</h3>
      {/* </div> */}
      {/* Features card */}
      <div className="flex gap-4 py-20 items-center justify-between max-lg:flex-col max-lg:gap-16">
        {testimonials.map((testimonial) => (
          <TestimonialsCard key={testimonial.label} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials;