import { GoSearch } from "react-icons/go";
import cn from "@/app/lib/utils/cn";

export default function SearchBar(
    {
        inputClassName,
        containerClassName,
        type,
        placeholder,
        inputValue
    }: {
        inputClassName?: string
        containerClassName?: string
        type: 'text' | 'search'
        placeholder?: string
        inputValue?: string | number
    }) {

    const mergedContainerClasses = cn(
        "w-fit h-fit bg-[#D4DCF1] flex justify-center items-center gap-[10px] rounded-[6px] overflow-clip px-[12px] border-[1px] border-[#D4DCF1]",
        containerClassName
    )
    const mergedInputClasses = cn(
        "lg:w-[537px] h-[50px] bg-[#D4DCF1] border-none outline-0",
        inputClassName
    )
    return(
        <div className={mergedContainerClasses}>
            <GoSearch size="16px"/>

            <input
            className={mergedInputClasses}
            type={type}
            placeholder={placeholder}
            value={inputValue ?? ""}
            />
        </div>
    )
}