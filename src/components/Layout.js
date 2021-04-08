import React from "react"

import Header from "./Header"
import Footer from "./footer"

const Layout = (props) => {
    return (
        <>
            <Header />
                <main className="container sm:mx-auto px-4 py-2">
                    {props.children}
                </main>
            <Footer />
        </>
    )
}

export default Layout
