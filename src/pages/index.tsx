import Image from "next/image";
import { Button } from "../components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Image src={"/images/logo.svg"} width={300} height={100} alt="logo" />


      <Button onClick={() => router.push('/user/signup')}>Doorgaan</Button>
    </>
  );
}
