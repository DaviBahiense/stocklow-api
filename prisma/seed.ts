import { prisma } from "../src/database.js";

async function main() {
  await prisma.category.createMany({
    data: [
      { category: "verduras" },
      { category: "legumes" },
      { category: "frutas" },
      { category: "outros" },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
