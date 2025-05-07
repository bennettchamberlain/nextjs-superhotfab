export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    [key: string]: any;
  };
  body?: any[];
} 