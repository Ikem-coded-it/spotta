import React from "react";
import cn from "@/app/lib/utils/cn";

const Main = ({
    className,
    children
}: {
    className?: string
    children: React.ReactNode
}) => {
    const mergedClasses = cn(
        "flex flex-col px-[15px] md:px-[50px] py-[20px] pt-[100px] w-full lg:w-[98.8vw] min-h-screen max-h-fit",
        className
    )

    return(
        <main className={mergedClasses}>
            {children}
        </main>
    )
}

export default Main