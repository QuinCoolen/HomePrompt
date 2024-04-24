

export default function Home() {
  return (
    <>
      <div className="min-w-full h-screen flex items-center justify-center">
        <div className="max-w-md w-full h-full">
          <form
            className="mt-8 space-y-6 h-full flex flex-col"
            action="#"
            method="POST"
          >
            <div className="space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mb-4 w-full py-2 border-2 border-primary rounded-2xl shadow active:border-primary"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full py-2 border-2 border-primary rounded-2xl shadow active:border-primary"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full py-2 text-white bg-secondary border-4 border-primary rounded-full shadow active:border-opacity-50 active:bg-opacity-50"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
