import { prisma } from '@/db';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

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
  // const parcedData = zUpsertNote.parse(data);
  // const note = await prisma.note.create({
  //   data: { title: parcedData.title, body: parcedData.body },
  // });
  return new NextResponse(`${todo}`, { status: 201 });
}
