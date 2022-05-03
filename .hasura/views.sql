CREATE OR REPLACE VIEW "STEPS_BY_DATE" AS 
  SELECT date, sum(value), "public"."Steps"."userId"
    FROM "public"."Steps"
    GROUP BY date, "public"."Steps"."userId"

CREATE OR REPLACE VIEW "DISTANCE_BY_DATE" AS 
  SELECT date, sum(value), "public"."Distance"."userId"
    FROM "public"."Distance"
    GROUP BY date, "public"."Distance"."userId"