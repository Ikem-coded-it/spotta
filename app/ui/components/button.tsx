import cn from "@/app/lib/utils/cn";

export default function Button({
    text,
    type,
    className
}: {
    text: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
}) {
    const mergedClasses = cn(
        "h-[50px] w-[146px] rounded-[6px] gap-[10px] bg-blueBg text-white text-[16px] font-[500] hover:scale-1",
        className
    )
    return(
        <button
        className={mergedClasses}
        type={type ?? 'button'}>
            {text.toUpperCase()}
        </button>
    )
}