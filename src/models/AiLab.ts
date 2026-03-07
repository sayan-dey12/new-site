import mongoose from "mongoose"
import { AIElement } from "@/types/ai-lab"

const AIElementSchema = new mongoose.Schema<AIElement>(
  {
    title: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    excerpt: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      enum: ["experiment", "agent", "tool", "research"],
      required: true
    },

    status: {
      type: String,
      enum: ["idea", "building", "completed", "archived"],
      required: true
    },

    tech: {
      type: [String],
      default: []
    },

    coverImage: {
      type: String,
      required: true
    },

    images: {
      type: [String],
      default: []
    },

    tags: {
      type: [String],
      default: []
    },

    github: {
      type: String
    },

    demo: {
      type: String
    },

    blog: {
      type: String
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

AIElementSchema.index({ slug: 1 })

export const AIElementModel =
  mongoose.models.AIElement ||
  mongoose.model("AIElement", AIElementSchema)