import React from 'react';
import NavBar from './NavBar';
export default function Layout({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div className='h-[100%]  md:h-screen'>
            <NavBar/>
            <div className='min-h-[90vh] bg-[#333333] w-full h-fit flex flex-col justify-center items-center gap-4 py-[32px] md:p-[50px] '>
                {children}
            </div>
        </div>
    )
}