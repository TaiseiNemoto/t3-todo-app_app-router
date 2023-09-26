import { prisma } from '@/db';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const todo = await prisma.todo.create({
    data: {
      text: data.newTodo,
      user: {
        connect: {
          id: data.userId,
        },
      },
    },
  });

  // parceを調べる
  // const parcedData = zUpsertNote.parse(data);
  return new NextResponse(`${todo.id}`, { status: 201 });
}
