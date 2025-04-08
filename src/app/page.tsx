import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview/Overview";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Overview/>
      <Features/>
      <Contact/>
    </>
  );
}
