export default function Groups() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-md w-full h-full px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6 h-full flex flex-col">
            <button className="py-2 border border-green-500 rounded-2xl shadow active:border-green-700">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
