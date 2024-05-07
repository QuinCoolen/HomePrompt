import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { Button } from "../../components/Button";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Inputs = {
  email: string;
  username: string;
}

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ user: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      const { userId } = await response.json()
      console.log(userId);
      localStorage.setItem('userId', userId);
      router.push('/groups')
    }
  }

  return (
    <>
      <form
        className="mt-8 space-y-6 h-full flex flex-col justify-between text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <div className="leading-8">
            <h1 className="text-2xl">Registreren</h1>
            <Link className="text-sm text-gray-700 hover:text-primary" href={'/user/login'}>Heb je al een account?</Link>
          </div>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <Input type="email" placeholder="Email:" {...register("email")} startContent={<EnvelopeIcon width={24}></EnvelopeIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-16", input: "text-xl text-black placeholder:text-xl placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />

            <Input type="text" placeholder="Username:" {...register("username")} startContent={<UserIcon width={24}></UserIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-16", input: "text-xl text-black placeholder:text-xl placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />

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
