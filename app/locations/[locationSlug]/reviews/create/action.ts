'use server';
import { sql } from '@vercel/postgres';
import { Review } from '@/app/lib/definitions';
import toast from "react-hot-toast"

export async function storeReview(review: Review) {
    try {
        const {
            address, amenities, anonymous, body, comments,
            dislikes, likes, reviewerImageURL, reviewerName, starReview, time
        } = review

        const stringAmenities = JSON.stringify(amenities)
        await sql`
            INSERT INTO reviews (address, amenities, anonymous, body, comments, dislikes, likes, reviewer_image_url, reviewer_name, star_review, time)
            VALUES (${address}, ${stringAmenities}, ${anonymous}, ${body}, ${comments}, ${dislikes}, ${likes}, ${reviewerImageURL}, ${reviewerName}, ${starReview}, ${time})
        `;
        toast.success("Review uploaded successfully", {
            duration: 6000,
        });
        return 'PROCEED'
    } catch (error: any) {
        console.log(error.message)
    }
}