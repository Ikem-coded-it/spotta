import SpottaLogo from "../logo";
import Image from "next/image";

export default function HomepageNav() {
    return (
        <nav className="flex justify-between items-center h-[50px] bg-whiteBg w-full">
            <SpottaLogo/>

            <div className="flex justify-between items-center gap-3">
                <p className="font[500] text-base">Welcome!</p>
                <Image
                width={29}
                height={29}
                className="w-[29px] h-[29px] rounded-[50%]"
                src="/girl.jpg"
                alt="profile of girl"
                objectPosition="center"
                objectFit="center"
                />
            </div>
        </nav>
    )
}