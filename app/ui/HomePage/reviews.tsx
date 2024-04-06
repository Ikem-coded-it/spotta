import HomepageReviewCard from "../components/review-cards"
import { review, reviewCategories } from "@/app/lib/store/review"

export default function HomePageReviews() {
    return(
        <section className="flex flex-col md:flex-row md:justify-center lg:justify-between md:gap-10 lg:gap-0 items-center w-full lg:w-[43%] bg-[#e5eaf5] relative">
            <div className="h-full w-full absolute bg-gradient-to-b from-[#FAFCFD] via-transparent to-[#FAFCFD] z-10"/>
            <div className="flex flex-col gap-[20px] justify-center">
                {
                    Array.from({ length: 6 }, (_, i) => {
                        const category = reviewCategories[i]
                        return (
                            <HomepageReviewCard
                            key={i}
                            category={category as typeof category}
                            {...(review ?? {})}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-col gap-[20px] justify-center">
                {
                    Array.from({ length: 6 }, (_, i) => {
                        const category = reviewCategories[i+1]
                        return (
                            <HomepageReviewCard
                            key={i}
                            category={category as typeof category}
                            {...(review ?? {})}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}