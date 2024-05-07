import { useEffect, useState } from "react";
import { base64ToUint8Array } from "@/utils/convert";

export default function Groups() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
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
  }, [])

  const subscribeHandler = async (event: any) => {
    event.preventDefault()
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
  }

  const unsubscribeHandler = async (event: any) => {
    event.preventDefault()

    if (!subscription) {
      console.error('subscription not found')
      return
    }

    const response = await subscription.unsubscribe()

    if (!response) {
      console.error('web push unsubscribed failed')
      return
    }
    // TODO: you should call your API to delete or invalidate subscription data on server
    setSubscription(null)
    setIsSubscribed(false)
  }

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
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-md w-full h-full px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Homeprompt
            </h2>
          </div>
          <div className="mt-8 space-y-6 h-full flex flex-col">
            <button className="py-2 border-2 border-primary rounded-2xl shadow active:border-primary-700"
              onClick={subscribeHandler}>
              Join Group
            </button>

            <button className="py-2 border-2 border-primary rounded-2xl shadow active:border-primary-700"
              onClick={unsubscribeHandler}>
              Leave Group
            </button>

            <button className="py-2 border-2 border-primary rounded-2xl shadow active:border-primary-700"
              onClick={sendNotification}>
              Send Notification
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
