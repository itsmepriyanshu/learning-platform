export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'instructor' | 'student';
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  thumbnail: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  rating: number;
  totalStudents: number;
  duration: string;
  lastUpdated: string;
  prerequisites: string[];
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  content: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  type: 'pdf' | 'video' | 'link';
  title: string;
  url: string;
}