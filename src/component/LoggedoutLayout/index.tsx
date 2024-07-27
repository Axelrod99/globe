import React, { ReactNode } from "react";
import Header from './Header'
import Footer from './Footer'

interface LoggedoutLayoutProps {
    children: ReactNode;
}

const LoggedoutLayout: React.FC<LoggedoutLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}

export default LoggedoutLayout