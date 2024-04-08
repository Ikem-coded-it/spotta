import Button from "../components/button"

export default function BottomButtons() {
    return(
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
            <Button
            text="submit"
            type="submit"
            className="w-[312px]"
            />

            <Button
            text="cancel"
            className="w-[312px] bg-transparent text-blue-600"
            />
        </div>
    )
}