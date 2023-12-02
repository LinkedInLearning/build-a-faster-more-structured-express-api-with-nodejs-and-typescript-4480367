import { Schema, model, connect } from 'mongoose'
import { MongoClient } from 'mongodb'
import { userInfo } from 'os'
require('dotenv').config()

interface IPost {
  content: string,
  author: string
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  author: { type: String, required: true }
})

const Post = model<IPost>('Post', postSchema)

export const client = new MongoClient(process.env.MONGO_URI!);
export const db = client.db('node-ts-api')

const connectToMongoDb = async (): Promise<object> => {
  try {
    await connect(process.env.MONGO_URI!);

    const post = new Post({
      content: "First post!",
      author: "author0"
    })

    await post.save()
    // console.log("post added")
    return { status: 200, msg: 'OK - Connected' }
  } catch (err) {
    console.error(err)
    return { status: 400, msg: 'Bad Request - Could Not Connect' }
  }
}

export default connectToMongoDb;
