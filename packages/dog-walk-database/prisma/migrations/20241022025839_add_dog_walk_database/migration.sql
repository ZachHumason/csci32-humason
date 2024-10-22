/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientMeasurement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Ingredient`;

-- DropTable
DROP TABLE `IngredientMeasurement`;

-- DropTable
DROP TABLE `Recipe`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Owner` (
    `owner_id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner_name` VARCHAR(191) NOT NULL,
    `owner_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Owner_owner_email_key`(`owner_email`),
    PRIMARY KEY (`owner_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Walker` (
    `walker_id` INTEGER NOT NULL AUTO_INCREMENT,
    `walker_name` VARCHAR(191) NOT NULL,
    `walker_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Walker_walker_email_key`(`walker_email`),
    PRIMARY KEY (`walker_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dog` (
    `dog_id` INTEGER NOT NULL AUTO_INCREMENT,
    `dog_name` VARCHAR(191) NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`dog_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Walk` (
    `walk_id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `duration` INTEGER NOT NULL,
    `dogId` INTEGER NOT NULL,
    `walkerId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`walk_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `review_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `comment` VARCHAR(191) NULL,
    `walkId` INTEGER NOT NULL,
    `walkerId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
