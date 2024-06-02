import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-3xl mx-auto text-3xl mt-5 dark">
      <Component {...pageProps} />
    </div>
  );
}
