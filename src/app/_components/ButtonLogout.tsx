'use client';

import { signOut } from 'next-auth/react';

export default function ButtonLogout() {
  return (
    <button
      className="mb-8 inline-flex cursor-pointer items-center justify-center rounded-md py-2 px-4 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
      onClick={() => void signOut()}
    >
      Sign out
    </button>
  );
}
