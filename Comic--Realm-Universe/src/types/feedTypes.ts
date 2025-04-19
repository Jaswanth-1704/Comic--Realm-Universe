export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  reposts: number;
  liked: boolean;
  bookmarked: boolean;
  createdAt: Date;
}
