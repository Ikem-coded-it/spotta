export type Review = {
    reviewerName: string
    address: string
    starReview: number
    time: string | null,
    body: string,
    likes: number,
    dislikes: number,
    comments: number,
    reviewerImageURL: string,
    anonymous?: boolean,
    amenities?: string[]
    amenity?: string
}