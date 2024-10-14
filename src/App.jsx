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
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
      <section className="padding">
        <AboutUs />
      </section>
      <section className="padding">
        <OurSolutions />
      </section>
      <section className="padding-x py-10">
        <Testimonials />
      </section>
      <section className="padding">
        <CallToAction />
      </section>
      <section className="bg-pale-blue padding">
        <ContactUs />
      </section>
      <section className="ng-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </section>
  </main>
);

export default App;
