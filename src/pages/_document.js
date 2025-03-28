// import {
//   Html,
//   Head,
//   Main,
//   NextScript,
// } from "next/document";
// import StyledComponentsRegistry from "../lib/registery";

// export default function Document() {
//   return (
//     <Html lang='en'>
//       <Head>
//         {" "}
//         <link
//           rel='preconnect'
//           href='https://fonts.googleapis.com'
//         />
//         <link
//           rel='preconnect'
//           href='https://fonts.gstatic.com'
//         />
//         <link
//           href='https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'
//           rel='stylesheet'
//         />
//         <link
//           href='https://fonts.googleapis.com/css2?family=Cantarell&family=Quicksand:wght@500&display=swap'
//           rel='stylesheet'
//         />
//         {/* <link
//           href='https://fonts.googleapis.com/css?family=Quicksand&display=optional'
//           rel='stylesheet'
//         /> */}
//         <link
//           href='https://fonts.googleapis.com/css?family=Cantarell&display=optional'
//           rel='stylesheet'
//         />
//       </Head>
//       <body>
//         <StyledComponentsRegistry>
//           <Main />
//         </StyledComponentsRegistry>
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, {
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx
  ) {
    const sheet =
      new ServerStyleSheet();
    const originalRenderPage =
      ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (App) =>
            (props) =>
              sheet.collectStyles(
                <App
                  {...props}
                />
              ),
        });

      const initialProps =
        await Document.getInitialProps(
          ctx
        );
      return {
        ...initialProps,
        styles: (
          <>
            {
              initialProps.styles
            }
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
