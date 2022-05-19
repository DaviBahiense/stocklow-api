/*
  Warnings:

  - You are about to drop the column `userId` on the `categories` table. All the data in the column will be lost.
  - Added the required column `userId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_userId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
