import { prisma } from '@/db';

import { NextRequest, NextResponse } from 'next/server';
import { createInput } from './type';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = createInput.parse(data);

  const todo = await prisma.todo.create({
    data: {
      text: parcedData.newTodo,
      user: {
        connect: {
          id: parcedData.userId,
        },
      },
    },
  });

  return new NextResponse(`${todo.id}`, { status: 201 });
}
