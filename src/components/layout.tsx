import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between h-screen pt-5 ">
      <Image src={"/images/banner.svg"} width={300} height={100} alt="logo" />
      <div className="min-w-full h-[calc(100vh-100px)] flex items-center justify-center uppercase">
        <div className="mx-auto h-full flex flex-col justify-between">
          {children}
        </div >
      </div >
    </main>
  )
}