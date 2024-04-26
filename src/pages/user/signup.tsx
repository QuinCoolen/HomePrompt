import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { Button } from "../../components/Button";

export default function Login() {
  return (
    <>
      <form
        className="mt-8 space-y-6 h-full flex flex-col justify-between text-center"
        action="#"
        method="POST"
      >
        <div className="space-y-6">
          <h1 className="text-2xl">Registreren</h1>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <Input type="email" placeholder="Email:" startContent={<EnvelopeIcon width={24}></EnvelopeIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-16", input: "text-xl text-black placeholder:text-xl placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />

            <Input type="password" placeholder="Wachtwoord:" startContent={<LockClosedIcon width={24}></LockClosedIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-16", input: "text-xl text-black placeholder:text-xl placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />
          </div>
        </div>

        <div>
          <Button type="submit">Registreren</Button>
        </div>
      </form>
    </>
  );
}
