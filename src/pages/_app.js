import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import NProgress from "nprogress";
import "@/styles/globals.css";
import "nprogress/nprogress.css";

export default function App({
  Component,
  pageProps,
}) {
  const router = useRouter();

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
    <Navbar>
      <Component
        {...pageProps}
      />
    </Navbar>
  );
}
