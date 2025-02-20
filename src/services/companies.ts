import { connectToDb } from '../config/db'
import { Collection, ObjectId } from 'mongodb'

// Define the Company interface
export interface Company {
  _id?: ObjectId
  name: string
  email: string
  phone?: string
  address?: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Fetches all companies from the database
 * @returns Promise containing an array of companies
 */
export async function getAllCompanies(): Promise<Company[]> {
  try {
    const db = await connectToDb()
    const collection: Collection<Company> = db.collection('companies')

    const companies = await collection
      .find({})
      .sort({ name: 1 }) // Sort by company name alphabetically
      .toArray()

    return companies
  } catch (error) {
    console.error('Error fetching companies:', error)
    throw new Error('Failed to fetch companies')
  }
}
