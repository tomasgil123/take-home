import { connectToDb } from '../config/db'
import { Collection, ObjectId } from 'mongodb'

// Define interfaces for your document types
export interface SalesRecord {
  _id?: ObjectId
  companyId: ObjectId
  metrics: {
    totalSales: number
    orderCount: number
    averageOrderValue: number
    topCategory: string
    customerSatisfaction: number
    newCustomers: number
    returnRate: number
  }
  date: Date
}

/**
 * Fetches all sales records for a specific company
 * @param companyId - The ID of the company to fetch sales records for
 * @returns Promise containing an array of sales records
 */
export async function getCompanySalesRecords(companyId: string): Promise<SalesRecord[]> {
  try {
    const db = await connectToDb() // Wait for connection and get db instance
    const collection: Collection<SalesRecord> = db.collection('SalesRecords')

    // Convert the string companyId to ObjectId before querying
    const query = { companyId: new ObjectId(companyId) }

    const salesRecords = await collection
      .find(query)
      .sort({ date: -1 }) // Sort by date descending (newest first)
      .toArray()

    return salesRecords
  } catch (error) {
    console.error('Error fetching sales records:', error)
    throw new Error('Failed to fetch sales records')
  }
}
