import { ChartBarIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Button, Link } from "@nextui-org/react";
import { MedalIcon } from "@/components/icons/MedalIcon";
import { useEffect, useState } from "react";
import { base64ToUint8Array } from "@/utils/convert";
import { Button as CustomButton } from "@/components/Button";
import useAsyncEffect from "use-async-effect";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function Index() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useAsyncEffect(async () => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window as any).workbox !== undefined) {
      // run only in browser
      navigator.serviceWorker.ready.then(reg => {
        reg.pushManager.getSubscription().then(sub => {
          if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
            setSubscription(sub)
            setIsSubscribed(true)
          }
        })
        setRegistration(reg)
      })
    }

    if (!registration) {
      console.error('service worker not ready')
      return
    }

    if (!process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY) {
      console.error('web push public key not found')
      return
    }

    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
    })
    // TODO: you should call your API to save subscription data on server in order to send web push notification from server
    setSubscription(sub)
    setIsSubscribed(true)
  }, [])

  const sendNotification = async (event: any) => {
    event.preventDefault()

    if (subscription == null) {
      console.error('web push not subscribed')
      return
    }

    try {
      const response = await fetch('/api/notification', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription,
        })
      })
    } catch (error) {
      console.error('web push notification failed')
      console.error(error)
      return
    }
  }

  return (
    <>
      <div
        className="space-y-6 h-full flex flex-col justify-between"
      >
        <div className="space-y-6">
          <h1 className="text-2xl text-center">Group 1</h1>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4 text-xl px-8">
            <div className="flex flex-row">
              <p>Woonkamer</p>
              <LightBulbIcon width={30}></LightBulbIcon>
            </div>
            <div>
              <p>Badkamer</p>
            </div>
            <div>
              <p>Slaapkamer 1</p>
            </div>
            <div>
              <p>Slaapkamer 2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <CustomButton onClick={() => sendNotification(event)}>Check</CustomButton>
      </div>
      <nav className="border-t-3 border-primary h-20 w-screen flex flex-row gap-[1px]">
        <Button as={Link} href="/groups/1" className="bg-secondary text-white w-full h-full rounded-none"><HomeIcon width={30}></HomeIcon></Button>
        <Button as={Link} href="/groups/1/chart" className="bg-secondary text-white w-full h-full rounded-none"><ChartBarIcon width={30}></ChartBarIcon></Button>
        <Button as={Link} href="/groups/1/leaderboard" className="bg-secondary text-white w-full h-full rounded-none"><MedalIcon width={30}></MedalIcon></Button>
      </nav>
    </>
  );
}
