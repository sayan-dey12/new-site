import mongoose from "mongoose"
import { Project } from "@/types/project"

const ProjectSchema = new mongoose.Schema<Project>(
  {
    title: {
      type: String,
      required: true
    },

    excerpt: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    coverImage: {
      type: String,
      required: true
    },

    images: {
      type: [String],
      default: []
    },

    category: {
      type: String,
      enum: [
        "fullstack",
        "backend",
        "frontend",
        "ai",
        "devops",
        "systems"
      ],
      required: true
    },

    status: {
      type: String,
      enum: [
        "completed",
        "in-progress",
        "planned"
      ],
      required: true
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

    video: {
      type: String
    },

    featured: {
      type: Boolean,
      default: false
    },

    highlight: {
      type: String
    },

    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

ProjectSchema.index({ slug: 1 })

export const ProjectModel =
  mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema)