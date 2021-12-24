set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	"createdAt" timestamptz(0) NOT NULL default now(),
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."folders" (
	"folderId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"userId" int NOT NULL,
	CONSTRAINT "folders_pk" PRIMARY KEY ("folderId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."icons" (
	"iconId" serial NOT NULL,
	"folderId" int,
	"name" TEXT NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "icons_pk" PRIMARY KEY ("iconId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "folders" ADD CONSTRAINT "folders_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "icons" ADD CONSTRAINT "icons_fk0" FOREIGN KEY ("folderId") REFERENCES "folders"("folderId");
