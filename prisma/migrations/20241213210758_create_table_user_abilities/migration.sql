-- CreateTable
CREATE TABLE "UsersAbilities" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "ability_id" TEXT NOT NULL,
    "years_experience" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersAbilities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersAbilities" ADD CONSTRAINT "UsersAbilities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersAbilities" ADD CONSTRAINT "UsersAbilities_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "Abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
