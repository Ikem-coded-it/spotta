import SpottaLogo from "../logo";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function HomepageNav() {
    return (
        <nav className="flex justify-between items-center h-[50px] bg-whiteBg w-full mb-5 fixed top-0 left-0 px-[15px] md:px-[50px] lg:px-[50px] z-50">
            <SpottaLogo/>

            <Link href="/locations/bonny-and-clyde/reviews" className="text-sm underline text-blue-400">
                Reviews
            </Link>

            <div className="flex justify-between items-center gap-3">
                <p className="font[500] text-base">Welcome!</p>
                <Image
                width={25}
                height={29}
                className="w-[27px] h-[29px] rounded-[50%]"
                src="/girl.jpg"
                alt="profile of girl"
                objectPosition="center"
                objectFit="center"
                />
            </div>
        </nav>
    )
}