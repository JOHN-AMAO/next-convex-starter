import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  User: defineTable({
    userId: v.string(),
    userType: v.string(),
  }),
});
