import { getCompanySalesRecords } from '../../services/salesRecords'
import { OverviewCards } from './_components/OverviewCards'
import { RevenueChart } from './_components/RevenueChart'
import { OrdersChart } from './_components/OrdersChart'

interface PageProps {
  params: {
    company_id: string
  }
}

export default async function CompanyPage({ params }: PageProps) {
  // Fetch data server-side
  const salesData = await getCompanySalesRecords(params.company_id)

  // Calculate total metrics using the original salesData
  const totalRevenue = salesData.reduce((sum, item) => sum + item.metrics.totalSales, 0)
  const totalOrders = salesData.reduce((sum, item) => sum + item.metrics.orderCount, 0)
  const totalNewCustomers = salesData.reduce((sum, item) => sum + item.metrics.newCustomers, 0)
  const avgSatisfaction = (
    salesData.reduce((sum, item) => sum + item.metrics.customerSatisfaction, 0) /
    (salesData.length || 1)
  ).toFixed(1)

  // Format data for charts by converting dates and removing non-serializable fields
  const formattedData = salesData
    .map((item) => {
      const date = new Date(item.date) // Create date object
      date.setUTCHours(12) // Set to noon UTC to avoid timezone issues

      return {
        totalSales: item.metrics.totalSales,
        orderCount: item.metrics.orderCount,
        newCustomers: item.metrics.newCustomers,
        customerSatisfaction: item.metrics.customerSatisfaction,
        date: date.toISOString(),
        month: date.toLocaleString('default', { month: 'short' }),
      }
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 space-y-6 p-8">
        <OverviewCards
          totalRevenue={totalRevenue}
          totalOrders={totalOrders}
          totalNewCustomers={totalNewCustomers}
          avgSatisfaction={avgSatisfaction}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <RevenueChart data={formattedData} />
          <OrdersChart data={formattedData} />
        </div>
      </div>
    </div>
  )
}
