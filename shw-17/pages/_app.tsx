import "../styles/globals.css";
import { SafeHydrate } from "../components/SafeHydrate";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}
