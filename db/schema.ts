import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// For select queries
export type User = typeof users.$inferSelect;

// For insert queries
export type InsertUser = typeof users.$inferInsert;
