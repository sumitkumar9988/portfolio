import { motion } from "framer-motion";
import Head from "next/head";
import Contact from "./../components/Contact";
import Education from "./../components/Education";
import Experience from "./../components/Experience";
import Footer from "./../components/Footer";
import Headers from "./../components/Headers";
import Hero from "./../components/Hero";
import Project from "./../components/Project";
import Skills from "./../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumit Portolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        className="bg-black"
      >
        <Headers />
        <Hero />
        <Skills />
        <Project />
        <Experience />
        {/* <Education /> */}
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
