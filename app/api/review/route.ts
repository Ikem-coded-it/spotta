// This route file is irrelevant @vercel/postgres doesn't work in api

import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest, response:NextResponse) {
    try {
        const requestBody = await request.json();
        console.log(requestBody)
        const {
            address, amenities, anonymous, body, comments,
            dislikes, likes, reviewerImageURL, reviewerName, starReview, time
        } = requestBody
        await sql`
            INSERT INTO reviews (address, amenities, anonymous, body, comments, dislikes, likes, reviewer_image_url, reviewer_name, star_review, time)
            VALUES (${address}, ${amenities}, ${anonymous}, ${body}, ${comments}, ${dislikes}, ${likes}, ${reviewerImageURL}, ${reviewerName}, ${starReview}, ${time})
        `;
        console.log("finished saving")
        return NextResponse.json({
            review: requestBody,
        });
    } catch (error: any) {
        console.log(error.message)
    }
}