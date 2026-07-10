import GalleryScroll from "../components/home/GallerySection"
import Hero from "../components/home/Hero"
import InfiniteScroll from "../components/home/InfiniteScroll"
import WhoAreWe from "../components/home/WhoAreWe"
import ServicesSection from "../components/home/ServicesSection"
import TeamSection from "../components/home/TeamSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import EndorsementSection from "../components/home/EndorsementSection"
import MapSection from "../components/home/MapSection"

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <WhoAreWe />
      <GalleryScroll />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <EndorsementSection />
      <MapSection />
    </>
  )
}

export default HomePage