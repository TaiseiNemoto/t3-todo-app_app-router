import { getProviders } from 'next-auth/react';
import Image from 'next/image';

import ButtonAuth from '../_components/ButtonAuth';

export default async function Page() {
  const providers = await getProviders();

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
              {providers &&
                Object.values(providers).map((provider) => (
                  <ButtonAuth {...provider} key={provider.name} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
