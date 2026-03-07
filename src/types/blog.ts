  export type BlogType = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    tags?: string[];
    createdAt: string;
    updatedAt?: string 
    readingTime?: string;
    category?: string;
    authorName: string;
    featured: boolean
    published: boolean
    views?: number
  }

  