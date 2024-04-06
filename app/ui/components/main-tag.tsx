import React from "react";

const Main = ({
    className,
    children
}: {
    className?: string
    children: React.ReactNode
}) => (
    <main className="flex flex-col px-[15px] md:px-[50px] py-[20px] pt-[100px] w-full lg:w-[98.8vw] min-h-screen max-h-fit">
        {children}
    </main>
)

export default Main