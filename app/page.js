import Image from "next/image";
import logo from "@/public/mainlogo.png"
import CustomButton from "./components/CustomButton/CustomButton";
import buttonBg from "@/public/Subtract.png"
import OurServices from "./components/OurServices/OurServices";
import Coordinators from "./components/Coordinators/Coordinators";
import OurWorks from "./components/OurWorks/OurWorks";
import ContactUs from "./components/ContactUs/ContactUs";
import BookNowBtn from "./components/BookNowBtn/BookNowBtn";
import ContactForm from "./components/ContactForm/ContactForm";
import AffiliatedProgram from "./components/AffiliatedProgram/AffiliatedProgram";
import BlogSection from "./components/BlogSection/BlogSection";



export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center my-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-medium lg:font-semibold">Get Start With</h1>
        <Image src={logo} alt="this is logo" placeholder="blur" quality={100} />
      </div>
      <div>
        <div className="mx-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium lg:font-semibold">Dream Weave Stations</h1>
          <h1 className="text-center text-sm">Where immagination meets innovations in a tapestry of digital artistry</h1>
        </div>
        <div>
          <BookNowBtn></BookNowBtn>
        </div>
        <div className="my-5">
          <OurServices></OurServices>
        </div>
        <div className="mt-5 lg:mt-[-100px]">
          <Coordinators></Coordinators>
        </div>
        <div>
          <OurWorks></OurWorks>
        </div>
        <div>
          <BlogSection></BlogSection>
        </div>
        <div>
          <div>
            <AffiliatedProgram></AffiliatedProgram>
          </div>
        </div>
        <hr className=" mx-2 mb-10 lg:mx-10" />
        <div>
          <div>
            <ContactUs></ContactUs>
          </div>
        </div>

        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
