/*
  Warnings:

  - Added the required column `author_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `author_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
