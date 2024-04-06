import cn from "@/app/lib/utils/cn"
import Link from "next/link";

export default function SpottaLogo() {
    return(
        <Link href="/">
            <div className="h-[29px] flex justify-between items-center rounded-[4px] gap-1">
                <span className="font-[700] text-[10px] text-darkFont tracking-widest">SPOTTA</span>
                <span className="bg-blueBg h-[11px] w-[13px] text-[7px] font[600] flex justify-center items-center text-white p-[2px]">NG</span>
            </div>
        </Link>
    )
}