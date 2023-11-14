import React from "react"
import DocumentationExample from "./DocumentationExample"

type HeaderProps = {
    showSampleProject: boolean
}

export default function Header({ showSampleProject }: HeaderProps) {
    return (
        <>
            <h1 className="m-0 text-center text-7xl leading-none mb-4">
                Welcome to&nbsp;
                <a href="/" className="text-blue-600 no-underline hover:underline focus:underline active:underline">
                    Mirna Cloud!
                </a>
            </h1>
            {showSampleProject ? <DocumentationExample /> : null}
        </>
    )
}
