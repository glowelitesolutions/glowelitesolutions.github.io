import { aboutUs } from '../assets/images'
const AboutUs = () => {
  return (
    <section className="bg-white">
    <div className="container flex-col gap-3 py-16 max-lg:max-w-[95vw]">
      <p className="section-id" id="about-us">About Us</p>
      <h2 className="title text-center">At GLOWELITE SOLUTIONS LLC</h2>
      <div className="flex items-center justify-center gap-10 max-xl:gap-5 max-md:flex-col">
        <img src={ aboutUs } alt="about-us" className="px-20 max-xl:px-4 max-lg:px-2" />
        <div className="flex flex-col space-y-10 px-14 max-xl:px-4 max-lg:px-1 max-md:items-center">
          <p className="body-text max-w-1/2 max-md:px-6 max-md:text-center">We specialize in bridging the gap between
            agriculture and biotechnology to develop sustainable health solutions that improve lives. Our integrated
            AgriBio strategy empowers companies and research institutions to leverage the full potential of agricultural
            resources through innovative biotechnological processes</p>
          <a href="#" className="cta-button btn-link">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs;