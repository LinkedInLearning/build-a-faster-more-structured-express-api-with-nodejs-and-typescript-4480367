import { db } from ".";
require("dotenv").config();

const postSeed = [
  {
    content: "You're doing great!",
    author: "author1",
  },
  {
    content: "Keep going!",
    author: "author2",
  },
  {
    content: "Almost there!",
    author: "author3",
  }

];

const seed = async () => {
  try {
    await db.createCollection('posts');

    const seedPosts = await db
      .collection("posts")
      .insertMany(postSeed);

    console.log("Database seeded 🌱");
    return { seedMsg: seedPosts };
  } catch (x) {
    console.error(x);
    return { error: x };
  }
};

seed();