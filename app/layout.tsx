import './globals.css'
import {Nunito} from 'next/font/google'
import React, {ReactNode} from "react";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOny from "@/app/components/ClientOny";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";


export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
}

const font = Nunito({
    subsets: ['latin']
})

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ClientOny>
            <ToasterProvider/>
            <RegisterModal/>
            <Navbar/>
        </ClientOny>
        <div className="pb-20 pt-28">
          {children}
        </div>
        </body>
        </html>
    )
}
