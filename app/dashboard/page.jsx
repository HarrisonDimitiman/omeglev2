import { getServerSession } from "next-auth"

export default async function Dashboard() {
  const session = await getServerSession()
  return (
    <>
      <h1>Dashboard { session?.user?.name } </h1>
    </>
  )
}

