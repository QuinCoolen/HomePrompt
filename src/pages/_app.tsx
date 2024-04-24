import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <Image src={"/images/banner.svg"} width={300} height={100} alt="logo" />
      <Component {...pageProps} />
    </main>);
}
