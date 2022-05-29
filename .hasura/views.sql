CREATE OR REPLACE VIEW "STEPS_BY_DATE" AS 
  SELECT date, sum(value), "public"."Steps"."userId"
    FROM "public"."Steps"
    GROUP BY date, "public"."Steps"."userId"
    ORDER BY min(date)

CREATE OR REPLACE VIEW "DISTANCE_BY_DATE" AS 
  SELECT date, sum(value), "public"."Distance"."userId"
    FROM "public"."Distance"
    GROUP BY date, "public"."Distance"."userId"
    ORDER BY min(date)

CREATE OR REPLACE VIEW "CALORIES_BY_DATE" AS 
  SELECT date, sum(value), "public"."Calories"."userId"
    FROM "public"."Calories"
    GROUP BY date, "public"."Calories"."userId"
    ORDER BY min(date)

CREATE OR REPLACE VIEW "VERY_ACTIVE_MINUTES_BY_DATE" AS
  SELECT date, sum(value), "public"."VeryActiveMinutes"."userId"
    FROM "public"."VeryActiveMinutes"
    GROUP BY date, "public"."VeryActiveMinutes"."userId"
    ORDER BY min(date)