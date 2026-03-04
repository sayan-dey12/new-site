  export type BlogType = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    tags?: string[];
    createdAt: string;
    authorId: string; 
    readingTime?: string;
    category?: string;
    authorName: string;
  }

  