import { authOptions } from '@/auth';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(authOptions);

  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json(todos);
}
