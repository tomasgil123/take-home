import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 space-y-6 p-8">
        {/* Overview Cards Loading State */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="h-4 w-24 animate-pulse bg-muted rounded" />
                <div className="h-4 w-4 animate-pulse bg-muted rounded" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-28 animate-pulse bg-muted rounded" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Loading State */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Revenue Chart Skeleton */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="h-6 w-32 animate-pulse bg-muted rounded" />
              <div className="h-4 w-48 animate-pulse bg-muted rounded" />
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full animate-pulse bg-muted rounded" />
            </CardContent>
          </Card>

          {/* Orders Chart Skeleton */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle className="h-6 w-32 animate-pulse bg-muted rounded" />
              <div className="h-4 w-48 animate-pulse bg-muted rounded" />
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full animate-pulse bg-muted rounded" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
