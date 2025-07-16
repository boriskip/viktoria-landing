import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import BlogSlider from "../components/BlogSlider";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-sans flex flex-col gap-12 items-center min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutMe />
      <BlogSlider />
      <ContactForm />
    </div>
  );
}
