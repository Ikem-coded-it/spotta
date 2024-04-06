import SliderFrame from "../components/slider-frame";
import Button from "../components/button";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { locationAmenities } from "@/app/lib/store/location";

export default function LocationInfo() {
    return (
        <section className="flex flex-col w-full items-start justify-start py-[20px] px-[15px] md:px-[50px] bg-[#F2F6FD] gap-4">
            <div className="flex flex-col md:flex-row justify-between items-start h-fit w-full gap-3">
                <div className="flex flex-col items-start justify-start w-full md:w-fit gap-3">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#1E1E1E]">
                        Bonny and Clyde Street, Ajao Estate, Lagos
                    </h1>
                    <p className="text-sm lg:text-base font-[500] text-[#18181B]">
                        <span>{`"${450}"`}</span>
                        {"Reviews (People are raving about the selected location)"}
                    </p>
                </div>

                <div className="flex items-start justify-end gap-4">
                    <Button
                    text="leave a review"
                    className="w-[140px] md:w-[210px]"
                    />

                    <Button className="w-[56px] bg-transparent">
                        <CiBookmark color="#3366FF" size="24px"/>
                    </Button>

                    <Button className="w-[56px] bg-transparent">
                        <IoShareSocialOutline color="#3366FF" size="24px"/>
                    </Button>
                </div>
            </div>

            <SliderFrame>
                <div className="flex justify-start items-center gap-2 h-fit w-fit">
                    {
                        locationAmenities.map(amenity => (
                            <PlaceBox text={amenity} key={amenity}/>
                        ))
                    }
                </div>
            </SliderFrame>
        </section>
    )
}

function PlaceBox({
    text
}: {
    text: string
}) {
    return (
        <div className="flex justify-center items-center h-[24px] w-[130px] rounded-[4px] bg-[#FBFAFC] px-2 border-[1px] border-[#1E1E1E]">
            <p className="text-xs text-[#1E1E1E] w-fit text-center">
            {text}
            </p>
        </div>
    )
}