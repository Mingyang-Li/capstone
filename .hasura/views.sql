CREATE OR REPLACE VIEW "STEPS_BY_DATE" AS 
  SELECT date, sum(value), "public"."Steps"."userId"
    FROM "public"."Steps"
    GROUP BY date, "public"."Steps"."userId"