import mongoose from "mongoose";

import {BlogType} from "@/types/blog";


const BlogSchema = new mongoose.Schema<BlogType>({
        title: {
            type: String,
            required: true
        },
        slug:{
            type: String,
            required: true,
            unique: true
        },
        excerpt:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        coverImage:{
            type: String,
        },
        tags:{
            type: [String],
            default: []
        },
        readingTime:{
            type: String,
            default: "5 min read"
        },
        published:{
            type: Boolean,
            default: false
        },
        views:{
            type: Number,
            default: 0
        },
        authorName:{
            type: String,
            required: true
        },
        featured:{
            type:Boolean,
            default: false
        },
        category:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const BlogModel = mongoose.models.Blog  || mongoose.model("Blog" , BlogSchema) ; 