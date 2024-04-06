import SearchBar from "../components/search-bar"
import Button from "../components/button"

export default function Hero() {
    return(
        <section className="w-full md:w-[65%] lg:w-[35%] flex-1 h-full flex items-start lg:items-center justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start justify-center gap-10">
                <h1 className="font-[700] w-full text-center lg:text-left text-[34px] lg:text-[64px] text-[#1E1E1E]">
                    Find a place you will love to live!
                </h1>

                <p className="text-xl lg:text-2xl text-center lg:text-left text-darkFont">
                    See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
                </p>

                <form className="w-fit flex flex-col items-center lg:items-start justify-start lg:justify-center gap-5">
                    <SearchBar
                    type="text"
                    inputClassName="w-[250px] md:w-[400px] lg:w-[537px]"
                    placeholder="Enter Address"
                    />
                    <Button text="search"/>
                </form>
            </div>
        </section>
    )
}