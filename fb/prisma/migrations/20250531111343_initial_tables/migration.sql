-- CreateTable
CREATE TABLE `Batik` (
    `uuid` VARCHAR(191) NOT NULL,
    `classId` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `originCity` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `reference` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Batik_uuid_key`(`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `History` (
    `uuid` VARCHAR(191) NOT NULL,
    `userUuid` VARCHAR(191) NOT NULL,
    `batikUuid` VARCHAR(191) NOT NULL,
    `pictureUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `History_uuid_key`(`uuid`),
    INDEX `History_batikUuid_fkey`(`batikUuid`),
    INDEX `History_userUuid_fkey`(`userUuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `uuid` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_uuid_key`(`uuid`),
    UNIQUE INDEX `User_username_key`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_batikUuid_fkey` FOREIGN KEY (`batikUuid`) REFERENCES `Batik`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_userUuid_fkey` FOREIGN KEY (`userUuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
