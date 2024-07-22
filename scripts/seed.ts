const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Software Engineering" },
        { name: "Accounting" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Engineering" },
        { name: "Music" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.error("Error during category creation:", error);
  } finally {
    await database.$disconnect();
  }
}

main();
