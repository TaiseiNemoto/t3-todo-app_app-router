import { prisma } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await prisma.todo.delete({
    where: { id: params.id },
  });
  return new NextResponse(null, { status: 204 });
}
