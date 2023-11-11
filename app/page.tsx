import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()
  return (
    <>
      {session?.user?.name ? (
        <div className="h-full flex items-center justify-center flex-col space-y-2.5">
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-black">Start Chatting</p>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center flex-col space-y-2.5">
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-black">Sign in with GitHub to join the chat!</p>
        </div>
      )}
    </>
  )
}
