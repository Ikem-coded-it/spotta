import Main from "@/app/ui/components/main-tag"
import ReviewsPageNav from "@/app/ui/components/nav/reviews-page-nav";
import LocationInfo from "@/app/ui/ReviewsPage/location-info-section";
import Reviews from "@/app/ui/ReviewsPage/reviews";
import LocationPictures from "@/app/ui/ReviewsPage/location-pictures";

export default function ReviewsPage() {
    return(
        <Main className="px-0 md:px-0 pt-[50px] md:pt-[82px]">
            <ReviewsPageNav/>
            <LocationInfo/>

            <section className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-[28px] w-full min-h-[120vh] max-h-fit px-[30px] md:px-[80px] lg:px-[100px] mt-[30px]">
                <Reviews/>
                <LocationPictures/>
            </section>
        </Main>
    )
}