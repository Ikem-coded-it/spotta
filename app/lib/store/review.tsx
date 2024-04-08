
// placeholder review
export const review = {
    reviewerName: "James T.",
    time: "5 months ago",
    address: "IKATE, LEKKI",
    starReview: 3,
    body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    likes: 24,
    dislikes: 2,
    comments: 125,
    reviewerImageURL: "/guy.jpg",
    amenities: []
}

// for placeholder reviews
export const reviewAmenities = ['network', 'traffic', 'power', 'water', 'security', 'road']

// for formik
export const initialReviewValues = {
    body: "",
    starReview: 0,
    reviewerName: "John T.", // gets pulled from auth
    address: "Bonny and Clyde Street, Ajao Estate, Lagos.",
    time: "1 hour ago",
    likes: 25, // default
    dislikes: 2,
    comments: 125,
    reviewerImageURL: "/guy.jpg",
    amenities: [],
    anonymous: false
}

// select input in create review form
export const reviewFormAmenities = [
    'Parking Lot', 'Nightlife', 'Hospitals', 'Adult Home', 'Schools',
    'Free Wi-Fi', 'Pet Store', 'Childcare', 'Gym', 'Security'
]