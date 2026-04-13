import {bigint , boolean , integer , pgTable , text} from "drizzle-orm/pg-core";

export const groceryItem = pgTable("grocery", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    category: text("category").notNull(),
    quantity: integer("quantity").notNull().default(1),
    purchased: boolean("purchased").notNull().default(false),
    priority: text("priority").notNull().default("medium"),
})