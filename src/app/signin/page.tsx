import Image from 'next/image';
// import ButtonAuth from '../_components/ButtonAuth';
async function getData() {
  const res = await fetch('http://localhost:3000/api/auth/providers');
  console.log(res);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <div className="min-h-screen bg-olive-one p-0 selection:bg-green-two md:py-24 md:px-8">
        <div className="flex flex-col items-center space-y-20 pt-40">
          <Image
            src="/images/github-icon.png"
            width={170}
            height={170}
            alt="github-icon"
          />
          <div className="text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flexjustify-center"></div>
              {/* {Object.values(data).map((provider) => (
                <ButtonAuth provider={provider} key={provider.name} />
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
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
