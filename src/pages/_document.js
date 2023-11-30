import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Other head elements */}</Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
      window._mfq = window._mfq || [];
      (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.defer = true;
        mf.src = "//cdn.mouseflow.com/projects/a79132e9-5b27-42fa-9a8f-f966527e1cc5.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
      `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
