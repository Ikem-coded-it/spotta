export type Review = {
    reviewerName: string
    address: string
    starReview: number
    time: string,
    body: string,
    likes: number,
    dislikes: number,
    comments: number,
    imageURL: string
    category?: string
}