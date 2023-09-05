import { getProviders } from 'next-auth/react';

export default async function SignIn() {
  const providers = await getProviders();
  // https://nextjs.org/docs/app/building-your-application/routing/route-handlers

  return (
    <>
      <div>
        {providers?.github.id}
        {/* {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold hover:text-green-five"
              // このボタンを押すと GitHub による認証が行われます
              // また、認証後のリダイレクト先をルートパスに設定しています
              onClick={() =>
                void signIn(provider.id, {
                  callbackUrl: '/',
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))} */}
      </div>
    </>
  );
}
