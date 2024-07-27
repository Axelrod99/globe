import React, { ReactNode } from "react";
import Header from './Header'
import Footer from './Footer'

interface LoggedinLayoutProps {
    children: ReactNode;
}

const LoggedinLayout: React.FC<LoggedinLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}

export default LoggedinLayout