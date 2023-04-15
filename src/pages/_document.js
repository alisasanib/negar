import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import StyledComponentsRegistry from "../lib/registery";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {" "}
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cantarell&family=Quicksand:wght@500&display=swap'
          rel='stylesheet'
        />
        {/* <link
          href='https://fonts.googleapis.com/css?family=Quicksand&display=optional'
          rel='stylesheet'
        /> */}
        <link
          href='https://fonts.googleapis.com/css?family=Cantarell&display=optional'
          rel='stylesheet'
        />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <Main />
        </StyledComponentsRegistry>
        <NextScript />
      </body>
    </Html>
  );
}
