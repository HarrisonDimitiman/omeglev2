"use client"
import Link from "next/link"
import {signIn, signOut, useSession} from "next-auth/react"

function AuthButton() {
    const { data: session } = useSession() 

    if (session) {
        return (
            <>
                
                <main className="flex flex-col items-center justify-between p-24">
                    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                            Welcome to Omegle V2 - {session?.user?.name} <br />
                        </div>
                        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                            <button
                                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                                rel="noopener noreferrer"
                                onClick={() => signOut()}
                            >
                                Sign Out
                            </button>
                        </p>
                    </div>
                </main>
            </>
        );
    }
    return (
        <>
            <main className="flex flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                        Welcome to Omegle V2
                    </div>
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        
                        <button
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            rel="noopener noreferrer"
                            onClick={() => signIn()}
                        >
                            Sign In W/ GitHub
                        </button>
                    </p>
                </div>
            </main>
        </>
    );
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}