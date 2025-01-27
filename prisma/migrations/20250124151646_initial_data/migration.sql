-- CreateTable
CREATE TABLE "Product" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "details" TEXT NOT NULL,
    "fullPriceInCents" INTEGER NOT NULL,
    "salePriceInCents" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "stockAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" SERIAL NOT NULL,
    "productCode" TEXT NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_productCode_fkey" FOREIGN KEY ("productCode") REFERENCES "Product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
