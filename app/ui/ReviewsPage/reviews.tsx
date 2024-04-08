import ReviewPageReviewCard from "@/app/ui/ReviewsPage/review-card";
import { review } from "@/app/lib/store/review";
import { getReviews } from "@/app/lib/actions";

export default async function Reviews() {
    const reviews = await getReviews()
    return (
        <section className="flex-1 max-w-[622px] h-fit flex flex-col gap-4 justify-start items-start">
            {
                reviews.map((review: any, idx: any) => {
                    review['reviewerImageURL'] = review['reviewer_image_url']
                    review['starReview'] = review['star_review']
                    review['reviewerName'] = review['reviewer_name']
                    return(
                        <ReviewPageReviewCard
                        key={idx}
                        {...(review ?? {})}
                        />
                    )
                })
            }
        </section>
    )
}