import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FiThumbsUp, FiThumbsDown  } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { Review } from "@/app/lib/definitions";

export default function ReviewPageReviewCard({
    reviewerImageURL,
    body,
    reviewerName,
    time,
    address,
    starReview,
    likes,
    dislikes,
    comments
}: Review) {
    return(
        <div className="w-full min-h-[143px] max-h-fit flex flex-col items-start justify-start gap-2">
            <div className="w-full h-fit flex justify-between items-center">
                <div className="flex gap-1 h-[25px]">
                    <Image
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] rounded-[50%]"
                    src={reviewerImageURL}
                    alt="profile of girl"
                    />

                    <div className="flex items-center justify-start gap-1">
                        <h2 className="font-[500] text-sm">{reviewerName}</h2>
                        <p className="text-[#1E1E1E] font-[300] text-[10px]">{time}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-[14px]">
                    <IoIosStar size="12px" color="#FABB07"/>
                    {starReview + ".0"}
                </div>
            </div>

            <p className="text-base text-[#18181B] w-full break-words text-wrap">
                {body}
            </p>

            <div className="flex h-[18px] items-center justify-start gap-8 w-full">
                <div className="flex gap-1 items-center">
                    <button>
                        <FiThumbsUp size="24px" color="#0D2159"/>
                    </button>
                    <span className="text-[#0D2159] font-[500] text-[14px]">{likes}</span>
                </div>
                <div className="flex gap-1 items-center">
                    <button>
                        <FiThumbsDown size="24px" color="#0D2159"/>
                    </button>
                    <span className="text-[#0D2159] font-[500] text-[14px]">{dislikes}</span>
                </div>
                <div className="flex gap-1 items-center">
                    <button>
                        <FaRegCommentAlt size="24px" color="#0D2159"/>
                    </button>
                    <span className="text-[#0D2159] font-[500] text-[14px]">{comments}</span>
                </div>
            </div>
        </div>
    )
}