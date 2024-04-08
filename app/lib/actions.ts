'use server';
import { sql } from '@vercel/postgres';
import { Review } from '@/app/lib/definitions';
import toast from "react-hot-toast"
import { unstable_noStore as noStore } from 'next/cache';

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
        return 'PROCEED'
    } catch (error: any) {
        console.log(error.message)
    }
}

export async function getReviews() {
    noStore()
    try {
        const data = await sql`SELECT * FROM reviews ORDER BY id DESC`;
        return data.rows;
    } catch (error: any) {
        console.log(error.message)
    }
}