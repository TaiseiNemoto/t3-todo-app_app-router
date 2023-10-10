import { prisma } from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import { createInput, updateInput } from './type';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = createInput.parse(data);
  const session = await getServerSession(authOptions);

  const todo = await prisma.todo.create({
    data: {
      text: parcedData.newTodo,
      user: {
        connect: {
          id: session?.user.id,
        },
      },
    },
  });

  return new NextResponse(`${todo.id}`, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  const parcedData = updateInput.parse(data);
  const { id, text, isCompleted } = parcedData;
  console.log(id, text, isCompleted);

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted,
      text,
    },
  });
  return new NextResponse(null, { status: 204 });
}
