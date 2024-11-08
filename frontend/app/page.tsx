import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CounterContainer from "@/components/Home/counter-section";
import FeaturedSchools from "@/components/Home/featured-schools";
import HeroSection from "@/components/Home/hero-section";
import JoinAsDonor from "@/components/Home/join-as-donor";
import LittleBrief from "@/components/Home/little-brief";
import RatingContainer from "@/components/Home/rating-container";
import SponsorCompanies from "@/components/Home/sponsor-companies";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CounterContainer/>
    <LittleBrief/>
    <FeaturedSchools/>
    <JoinAsDonor/>
    <RatingContainer/>
    <SponsorCompanies/>
    <Footer/>
    </>
  );
}
