import cn from "@/app/lib/utils/cn";
import { MouseEventHandler, ReactNode } from "react";

export default function Button({
    text,
    type,
    className,
    onClick,
    children,
    disabled
}: {
    text?: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
    disabled?: boolean
}) {
    const mergedClasses = cn(
        "flex justify-center items-center h-[50px] w-[146px] rounded-[6px] gap-[10px] bg-blueBg text-white text-sm md:text-base font-[500] border-[1px] border-blueBg p-0 hover:scale-[1.03] duration-[.3s]",
        className
    )
    return(
        <button
        className={mergedClasses}
        type={type ?? 'button'}
        onClick={onClick}
        disabled={disabled ?? false}
        >
            {children}
            {text?.toUpperCase()}
        </button>
    )
}