import { PrismaClient, Prisma } from "../db/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Devi Mulyana",
        username: "jangbe",
        password: "$2y$10$FMpsHjRpqEC8WU6690qdTefsJIy1kOY3cfEDI8fO/tQlXC33lGpKu",
    }
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main();