import { statistics } from "../constants";
import { StatisticsCard } from "../components";

const CallToAction = () => {
  return (
    <section className="bg-bgColor py-16">
      <div className="container max-w-[70vw] flex gap-5 max-lg:max-w-[95vw] max-lg:flex-col-reverse">
        {/* stats left */}
        <div className="flex flex-col gap-5 max-lg:items-center max-lg:gap-8">
          <h2 className="sub-title text-left text-3xl leading-8 max-lg:text-center max-lg:pt-6">Empowering businesses with our collaborative expertise</h2>
          <a href="#" className="cta-button btn-link">Make Appointment</a>
        </div>
        {/* stats right */}
        <div className="flex gap-20 items-center justify-between max-xl:gap-14 max-sm:flex-col max-sm:gap-8">
          {statistics.map((stats) => (
            <StatisticsCard key={stats.label} {...stats} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CallToAction;