import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src={"/images/logo.svg"} width={300} height={100} alt="logo" />

      <button
        type="submit"
        className="w-full text-white text-base bg-secondary border-4 border-primary rounded-full shadow active:border-opacity-50 active:bg-opacity-50"
      >
        Sign in
      </button>
    </>
  );
}
