import { DURAZNO_WEBSITE, DURAZNO_NAME } from "../utils/constants"

export default function Footer() {
    return (
        <>
            <footer>
                <a
                    href={DURAZNO_WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer">
                        Powered by{' '}
                        <img src="/durazno.svg"
                            alt={DURAZNO_NAME}
                            className="logo" />
                </a>
            </footer>
    
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                footer img {
                    margin-left: 0.5rem;
                }
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }
                .logo {
                    height: 1em;
                }
            `}</style>
        </>
    )
}
