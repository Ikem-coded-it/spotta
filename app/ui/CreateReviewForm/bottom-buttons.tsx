'use client'
import Button from "../components/button";
import { useFormikContext } from "formik";
import Link from "next/link";
import { storeReview } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export default function BottomButtons() {
    const { isSubmitting, values, setSubmitting, errors } = useFormikContext<any>()
    const router = useRouter();

    const handleUploadReview = async () => {
        if (errors.starReview || errors.body || errors.amenities) return
        console.log("storing", values)
        setSubmitting(true)
        try {
            if (values?.anonymous  === true) {
                values.reviewerName = 'Anonymous'
                values.reviewerImageURL = '/default-profile.png'
            }
            console.log(values)
            const response = await storeReview(values)
            console.log(response)
            if (response == 'PROCEED') {
                setSubmitting(false);
                router.push("/locations/bonny-and-clyde/reviews")
            }
        } catch (error: any) {
            alert(error?.message as string)
        }
    }

    return(
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
            <Button
            text="submit"
            type="submit"
            className="w-[312px]"
            onClick={() => handleUploadReview()}
            disabled={isSubmitting  === true ? true : false}
            />

            <Link href="/locations/bonny-and-clyde/reviews">
                <Button
                text="cancel"
                className="w-[312px] bg-transparent text-blue-600"
                />
            </Link>
        </div>
    )
}