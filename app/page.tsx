import HomepageNav from "@/app/ui/components/nav/homepage";
import Hero from "@/app/ui/HomePage/hero";
import HomePageReviews from "@/app/ui/HomePage/reviews";
import Main from "@/app/ui/components/main-tag"

export default function Home() {
  return (
    <Main>
      <HomepageNav/>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[32px] w-full min-h-[200vh] lg:min-h-[120vh] max-h-[200vh] lg:max-h-[120vh] flex-1 overflow-hidden">
        <Hero/>
        <HomePageReviews/>
      </section>
    </Main>
  );
}
