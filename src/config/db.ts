import { MongoClient, Db } from 'mongodb'

const localUrl = 'mongodb://localhost:27017'
const dbName = 'dashboard' // Replace with your desired database name

const uri = process.env.MONGODB_URI || localUrl
const options = {}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDb(): Promise<Db> {
  // If we have a cached connection, use it
  if (cachedDb) {
    return cachedDb
  }

  try {
    if (!cachedClient) {
      cachedClient = await MongoClient.connect(uri, options)
    }

    cachedDb = cachedClient.db(dbName)
    console.log('Connected successfully to MongoDB')
    return cachedDb
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
    throw err
  }
}
