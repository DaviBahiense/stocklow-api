import { prisma } from "../src/database.js";

async function main() {
  await prisma.category.createMany({
    data: [
      { category: "Verduras" },
      { category: "Legumes" },
      { category: "Frutas" },
      { category: "Outros" },
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
