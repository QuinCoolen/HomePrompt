import Image from "next/image";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <Image src={"/images/logo.svg"} width={300} height={100} alt="logo" />


      <Button type="submit">Doorgaan</Button>
    </>
  );
}
