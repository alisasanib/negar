/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import NProgress from "nprogress";
import "@/styles/globals.css";
import "nprogress/nprogress.css";
import "./storyboard.css";

export default function App({
  Component,
  pageProps,
}) {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/geo", {
      method: "POST",
      headers: {
        Accept:
          "application/json",
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        route: router.asPath,
      }),
    })
      .then((res) =>
        res.json()
      )
      .then((data) => {
        // console.log(data);
      });
    const handleRouteChange =
      (url, { shallow }) => {
        fetch("/api/geo", {
          method: "POST",
          headers: {
            Accept:
              "application/json",
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            {
              route: url,
            }
          ),
        })
          .then((res) =>
            res.json()
          )
          .then((data) => {
            // console.log(data);
          });
      };

    router.events.on(
      "routeChangeStart",
      handleRouteChange
    );

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off(
        "routeChangeStart",
        handleRouteChange
      );
    };
  }, [router]);

  useEffect(() => {
    const handleRouteStart =
      () => NProgress.start();
    const handleRouteDone =
      () => NProgress.done();

    router.events.on(
      "routeChangeStart",
      handleRouteStart
    );
    router.events.on(
      "routeChangeComplete",
      handleRouteDone
    );
    router.events.on(
      "routeChangeError",
      handleRouteDone
    );

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off(
        "routeChangeStart",
        handleRouteStart
      );
      router.events.off(
        "routeChangeComplete",
        handleRouteDone
      );
      router.events.off(
        "routeChangeError",
        handleRouteDone
      );
    };
  }, []);
  return (
    <>
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
        <link
          href='https://fonts.googleapis.com/css?family=Cantarell&display=optional'
          rel='stylesheet'
        />
      </Head>
      <Navbar>
        <Component
          {...pageProps}
        />
        <Analytics />
      </Navbar>
    </>
  );
}
