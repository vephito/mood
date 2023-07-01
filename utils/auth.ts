import { prisma } from './db';
import { auth } from '@clerk/nextjs';
export const getUserByClerkID = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });
  return user;
};
