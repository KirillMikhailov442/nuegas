'use client'

import BottomBar from "@/components/BottomBar/BottomBar"
import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"
import { NextPage } from "next"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"

const MainLayout: NextPage<{children: ReactNode}> = ({children}) =>{
    const pathName = usePathname()

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [pathName]);
    return (
        <>
        <Sidebar/>
        <main className="main">
            <Header/>
            {children}
        </main>
        <BottomBar/>
        </>
    )
}

export default MainLayout