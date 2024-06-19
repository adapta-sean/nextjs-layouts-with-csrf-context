import {ComponentType, ReactElement, ReactNode} from "react";

export default function Layout({ children, Component }: {children: ReactNode, Component: ComponentType}) {
    return (
        <div className='p-16'>
            <p>Am I SSR?</p>
            <main>{children}</main>
            <p className='border-b w-full pb-4'> render under this</p>
            <Component />
        </div>
    )
}