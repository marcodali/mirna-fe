export default function Header() {
    return (
        <>
            <h1 className="title">
                Welcome to <a href="/">Mirna Cloud!</a>
            </h1>

            <p>
                Forget about cloud infrastructure.
                Focus only on your sockets business logic
            </p>

            <style jsx>{`
                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }
                
                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }
                
                .title {
                    margin: 0 0 1rem;
                    line-height: 1.15;
                    font-size: 3.6rem;
                    text-align: center;
                }
            `}</style>
        </>
    )
}
