import { z } from 'zod';

import { prisma } from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import { createInput, updateInput } from './type';

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

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const parcedData = updateInput.parse(data);
  const { id, text, is_completed } = parcedData;
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted: is_completed,
      text: text,
    },
  });
  return new NextResponse(null, { status: 204 });
}

export async function DELETE(req: NextRequest) {
  const parcedData = z.string().parse(req);
  await prisma.todo.delete({
    where: { id: parcedData },
  });
  return new NextResponse(null, { status: 204 });
}
