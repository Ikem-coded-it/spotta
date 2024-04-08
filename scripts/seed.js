const { db } = require('@vercel/postgres');
// const reviews = require('../app/lib/store/seed');

const reviews = [
    {
        reviewerName: "James T.",
        time: "5 months ago",
        address: "IKATE, LEKKI",
        starReview: 3,
        body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        reviewerImageURL: "/guy.jpg",
        amenities: [],
        anonymous: false
    },
    {
        reviewerName: "James T.",
        time: "5 months ago",
        address: "IKATE, LEKKI",
        starReview: 3,
        body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        reviewerImageURL: "/guy.jpg",
        amenities: [],
        anonymous: false
    },
    {
        reviewerName: "James T.",
        time: "5 months ago",
        address: "IKATE, LEKKI",
        starReview: 3,
        body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        reviewerImageURL: "/guy.jpg",
        amenities: [],
        anonymous: false
    }
]


async function seedReviews(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "reviews" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS reviews (
        id BIGSERIAL PRIMARY KEY,
        reviewer_name VARCHAR(255),
        time VARCHAR(50),
        address VARCHAR(255),
        star_review INT,
        body TEXT,
        likes INT,
        dislikes INT,
        comments INT,
        reviewer_image_url VARCHAR(255),
        amenities JSON,
        anonymous BOOLEAN
    )
`;

    console.log(`Created "reviews" table`);

    // Insert placeholder data into the "reviews" table
    const insertedReviews = await Promise.all(
      reviews.map(
        (review) => client.sql`
        INSERT INTO reviews (address, amenities, anonymous, body, comments, dislikes, likes, reviewer_image_url, reviewer_name, star_review, time)
        VALUES (${review.address}, ${JSON.stringify(review.amenities)}, ${review.anonymous}, ${review.body}, ${review.comments}, ${review.dislikes}, ${review.likes}, ${review.reviewerImageURL}, ${review.reviewerName}, ${review.starReview}, ${review.time})
      `,
      ),
    );

    console.log(`Seeded ${insertedReviews.length} reviews`);

    return {
      createTable,
      reviews: insertedReviews,
    };
  } catch (error) {
    console.error('Error seeding reviews:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedReviews(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});