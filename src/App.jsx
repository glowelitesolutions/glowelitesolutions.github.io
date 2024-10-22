import Nav from "./components/Nav";
import {
  Hero,
  AboutUs,
  OurSolutions,
  Testimonials,
  CallToAction,
  ContactUs,
  Footer,
} from "./sections";

const App = () => (
  <main id="main" className="relative">
    <Nav />
    {/* <section className="xl:padding-1 wide:padding-r padding-b"> */}
    <section className="">
      <Hero />
      <section className="">
        <AboutUs />
      </section>
      <section className="">
        <OurSolutions />
      </section>
      <section className="">
        <Testimonials />
      </section>
      <section className="">
        <CallToAction />
      </section>
      <section className="">
        <ContactUs />
      </section>
      <section className="">
        <Footer />
      </section>
    </section>
  </main>
);

export default App;
