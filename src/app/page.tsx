import { getAllCompanies } from '../services/companies'

export default async function Home() {
  const companies = await getAllCompanies()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Companies</h1>

      <div className="w-full max-w-2xl">
        <ul className="space-y-4">
          {companies.map((company) => (
            <li
              key={company._id?.toString()}
              className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold">{company.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
