import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaThumbsUp, FaThumbsDown  } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import clsx from "clsx";
import { Review } from "@/app/lib/definitions";


export default function HomepageReviewCard({
    category,
    ...props
}: Review) {
    return(
        <div className="w-[239px] h-[233px] flex flex-col items-center justify-start gap-2 rounded-[15px] bg-[#FAFCFD] drop-shadow-md p-[16px]">
            <div className="w-full h-fit flex justify-between items-center">
                <div className="flex gap-1 h-[25px]">
                    <Image
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] rounded-[50%]"
                    src={props?.imageURL}
                    alt="profile of girl"
                    objectPosition="center"
                    objectFit="center"
                    />

                    <div className="flex flex-col items-center">
                        <h2 className="font-[500] text-xs">{props?.reviewerName}</h2>
                        <p className="text-[#1E1E1E] font-[300] text-[8px]">{props?.time}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-[11px] font-[500] text-[#1E1E1E]">
                        {props?.address}
                    </h2>
                    <div className="flex gap-1 justify-center items-center">
                        {
                            Array.from({length: props?.starReview}, (_, i) => (
                                <IoIosStar key={i} size="12px" color="#FABB07"/>
                            ))
                        }
                        {
                            Array.from({length: 5 - props?.starReview}, (_, i) => (
                                <IoIosStar key={i} size="12px" color="#D1D1D1"/>
                            ))
                        }
                    </div>
                </div>
            </div>

            <p className="text-sm">
                {props?.body}
            </p>

            <div className="flex justify-between items-center w-full">
                <div className="flex h-[18px] items-center justify-center gap-1">
                    <div className="flex gap-1">
                        <FaThumbsUp size="14px" color="#D1D1D1"/>
                        <span className="text-[#8F95B2] font-[500] text-[10px]">{props?.likes}</span>
                    </div>
                    <div className="flex gap-1">
                        <FaThumbsDown size="14px" color="#D1D1D1"/>
                        <span className="text-[#8F95B2] font-[500] text-[10px]">{props?.dislikes}</span>
                    </div>
                    <div className="flex gap-1">
                        <FaCommentAlt size="14px" color="#D1D1D1"/>
                        <span className="text-[#8F95B2] font-[500] text-[10px]">{props?.comments}</span>
                    </div>
                </div>

                <div className={clsx(
                    "h-[14px] w-[43px] flex justify-center items-center text-[9px] font-[500] text-[#1F4781] border-[1px] rounded-[7px]",
                    {"bg-[#F5E9CB] border-[#A07C22]": category === 'traffic'},
                    {"bg-[#D1E4FA] border-[#2863B8]": category === 'water'},
                    {"bg-[#F3DFCC] border-[#B26D22]": category === 'road'},
                    {"bg-[#FCDCEF] border-[#AD307B]": category === 'network'},
                    {"bg-[#F66A57]": category === 'power'},
                )}>
                    {category}
                </div>
            </div>
        </div>
    )
}