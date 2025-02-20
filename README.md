This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to Contribute

### Setting Up Local Database

Before you can start contributing, you'll need to set up a local MongoDB database with mock data.
Follow these instructions for Mac:

1. Install MongoDB using Homebrew:
```bash
brew tap mongodb/brew
brew install mongodb-community
```

2. Start the MongoDB service:
```bash
brew services start mongodb-community
```

3. Install MongoDB Compass:
   - Go to [MongoDB Compass Download Page](https://www.mongodb.com/try/download/compass)
   - Download the .dmg file for Mac
   - Double-click the downloaded .dmg file
   - Drag MongoDB Compass to your Applications folder
   - Open MongoDB Compass from your Applications folder

4. Connect to your local MongoDB:
   - When MongoDB Compass opens, you'll see a "New Connection" screen
   - The default URI `mongodb://localhost:27017` should be pre-filled
   - Click "Connect"

5. Import the mock data:
   - In MongoDB Compass, click on the "Import Data" button
   - Select the "From JSON" option
   - Choose the `mockData.json` file
   - Click "Import"

### Using the Next.js App

After setting up your database, follow these steps to run and use the application:

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up your environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the variables with your local settings

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Access the application:
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The admin dashboard is available at [http://localhost:3000/admin](http://localhost:3000/admin)

5. Common development tasks:
   - Components are located in `src/components`
   - Pages are in `src/app`
   - API routes are in `src/app/api`
   - To add a new page, create a new directory in `src/app` with a `page.tsx` file
   - To create an API endpoint, add a `route.ts` file in `src/app/api`

6. Testing:
```bash
npm run test
# or
yarn test
```

7. Building for production:
```bash
npm run build
# or
yarn build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.