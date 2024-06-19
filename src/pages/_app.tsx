import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CsrfTokenProvider from "@/components/csrf-context";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
      <CsrfTokenProvider>
        {getLayout(<Component {...pageProps} />)}
      </CsrfTokenProvider>
  )
}
