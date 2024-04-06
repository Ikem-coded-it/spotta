import ReviewPageReviewCard from "@/app/ui/ReviewsPage/review-card";
import { review } from "@/app/lib/store/review"

export default function Reviews() {
    return (
        <section className="flex-1 max-w-[622px] h-fit flex flex-col gap-4 justify-start items-start">
            {
                Array.from({length: 5}, (_, idx) => (
                    <ReviewPageReviewCard
                    key={idx}
                    {...(review ?? {})}
                    />
                ))
            }
        </section>
    )
}