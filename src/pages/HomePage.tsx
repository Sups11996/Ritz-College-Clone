import GalleryScroll from "../components/home/GallerySection"
import Hero from "../components/home/Hero"
import InfiniteScroll from "../components/home/InfiniteScroll"
import WhoAreWe from "../components/home/WhoAreWe"
import Section from "../components/home/Section"

const HomePage = () => {
  return (
    <>
    <Hero />
    <InfiniteScroll />
    <WhoAreWe />
    <GalleryScroll />
    <Section />
    </>
  )
}

export default HomePage