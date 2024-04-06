import SearchBar from "../search-bar";
import Image from "next/image";
import SpottaLogo from "../logo";

export default function ReviewsPageNav() {
    return (
        <nav className="flex justify-between items-center h-[50px] md:h-[82px] bg-[#F2F6FD] w-full mb-5 fixed top-0 left-0 px-[15px] md:px-[50px] lg:px-[50px] z-50">
            <SpottaLogo/>

            <SearchBar
            type="search"
            inputClassName="bg-[#FBFAFC] w-[240px] md:w-[300px]"
            containerClassName="bg-[#FBFAFC] hidden md:flex"
            inputValue="Bonny and Clyde Street, Ajao Estate, Lagos"
            />

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