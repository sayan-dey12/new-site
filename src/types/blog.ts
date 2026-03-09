  export type BlogType = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt?: Date 
    readingTime?: string;
    catagory?: string;
    authorName?: string;
    featured: boolean
    published: boolean
    views?: number
  }

  