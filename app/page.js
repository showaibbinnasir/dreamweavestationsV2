import Image from "next/image";
import logo from "@/public/mainlogo.png"
import CustomButton from "./components/CustomButton/CustomButton";
import buttonBg from "@/public/Subtract.png"
import OurServices from "./components/OurServices/OurServices";
import Coordinators from "./components/Coordinators/Coordinators";
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center my-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-medium lg:font-semibold">Get Start With</h1>
        <Image src={logo} alt="this is logo" placeholder="blur" quality={75} />
      </div>
      <div>
        <div className="mx-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium lg:font-semibold">Dream Weave Stations</h1>
          <h1 className="text-center text-sm">Where immagination meets innovations in a tapestry of digital artistry</h1>
        </div>
        <div className="flex justify-center my-5">
          <CustomButton text={"Book Now"} />
        </div>
        <div className="my-5">
          <OurServices></OurServices>
        </div>
        <div className="mt-5 lg:mt-[-100px]">
          <Coordinators></Coordinators>
        </div>
      </div>
    </div>
  );
}
