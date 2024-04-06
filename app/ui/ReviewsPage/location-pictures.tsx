import Image from "next/image";
import { locationPictures } from "@/app/lib/store/location";
import Link from "next/link";

type Props = {
    index: number
    src: string
}

export default function LocationPictures() {
    return (
        <section className="flex-1 max-w-[486px] h-fit grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4 lg:gap-x-0">
            {
                locationPictures.map((src, index) => (
                    <Piture key={index} {...({src, index})} />
                ))
            }
        </section>
    )
}

function Piture({
    ...props
}: Props) {
    return(
        <div className="relative w-[215px] h-[224px] rounded-[8px] overflow-clip">
            {
                props?.index === 3 && (
                    <Link
                    href="#"
                    className="h-full w-full flex items-center justify-center absolute text-[#FBFAFC] text-base font-[500] underline bg-gray-800 bg-opacity-50">
                        VIEW MORE
                    </Link>
                )
            }

            <Image
            src={props?.src}
            alt="depiction of a location"
            width={235}
            height={224}
            className="w-full h-full"
            />
        </div>
    )
}