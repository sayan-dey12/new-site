  export type BlogType = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover?: string;
    tags?: string[];
    createdAt: Date | string;
    updatedAt?: Date | string
    readingTime?: string;
    catagory?: string;
    authorName?: string;
    featured: boolean
    published: boolean
    views?: number
  }

  