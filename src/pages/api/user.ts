import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { user } = req.body;

    const newUser = await prisma.profile.create({
      data: {
        email: user.email,
        username: user.username,
      }
    })

    return res.status(200).json({ userId: newUser.id });
  } else {
    return res.status(405).send("Method Not Allowed");
  }
}
