/*
  Warnings:

  - Added the required column `reference` to the `batik` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `batik` ADD COLUMN `reference` VARCHAR(191) NOT NULL;
