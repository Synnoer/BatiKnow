import prisma from "@/lib/prisma";
import { User } from "@/context/AuthContext";
import { Prisma } from "../../../../db/generated/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token");
  if (token?.value == null)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const user = verifyToken(token?.value) as User;
  const query: Prisma.HistoryFindManyArgs = {
    include: {
      batik: {
        select: {
          name: true,
        },
      },
    },
    where: { userUuid: user.uuid },
  };

  const history = await prisma.history.findMany(query);

  const res = NextResponse.json({
    message: "History Retrieved",
    data: history,
  });

  return res;
}
