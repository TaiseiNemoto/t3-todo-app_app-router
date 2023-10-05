import { prisma } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

// 2. ノート一覧を取得するAPI
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  console.log(params);

  // 3. DBからノート一覧を取得
  const todos = await prisma.todo.findMany({
    where: {
      userId: params.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json(todos);
}
