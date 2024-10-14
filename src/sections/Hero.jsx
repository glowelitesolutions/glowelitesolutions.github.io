// rafce, make sure react extension is installed
import { hero } from '../assets/images'
const Hero = () => {
  return (
    <section id="home" className='bg-bgColor py-24 max-lg:py-16'>
      <div
        className="container max-w-[80vw] flex min-h-[60vh] flex-col-reverse items-center justify-center gap-5 lg:flex-row max-lg:max-w-[95vw]"
      >
        {/* Hero Left */}
        <div className="flex flex-col space-y-4 max-lg:w-auto max-lg:items-center max-lg:justify-center">
          <h1
            className="title pt-4 max-lg:text-center"
          >
            GLOWELITE SOLUTION LLC
          </h1>
          <h2 className="text-xl font-afacad font-semibold text-subHeaderTxt max-lg:text-center lg:tracking-wide">Your partner in agritech and biotechnology innovation</h2>
          <p
            className="body-text py-4 max-lg:max-w-xl max-lg:text-center"
          >
            Unlock the full potential of your agricultural and biomedical projects with GLOWELITE SOLUTION LLC—where innovation meets sustainability!
          </p>
          <a
            href="#"
            className="cta-button btn-link"
            >Learn More</a
          >
        </div>
        {/* Hero right: Image */}
        <img src={ hero } alt="" className="px-20 max-md:px-16 max-sm:px-2 lg:max-w-[50vw]"/>
      </div>
    </section>
  )
}

export default Hero;