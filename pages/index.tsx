
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import { Element } from "react-scroll";
import Navbar from "./../Components/Navbar/Navbar";
import HomeScreen from "./../Components/HomeScreen/HomeScreen";
import Skills from "./../Components/Skills/Skills";
import About from "./../Components/About/About";
import Projects from "./../Components/Projects/Projects";
import Footer from "./../Components/Footer/Footer";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <div className="App">
        <Navbar />
        <Element name="home">
          <HomeScreen />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Footer />
        </Element>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
