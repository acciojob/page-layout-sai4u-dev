import React from "react"

function PageLayout({header,footer, children}){
    return(
        <div>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}

export default PageLayout