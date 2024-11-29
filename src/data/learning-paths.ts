export interface LearningPath {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  courseCount: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  courses: string[];
}

export const learningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'Full-Stack Developer Path',
    description: 'Become a professional full-stack developer. Master front-end and back-end development, databases, and deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    duration: '6 months',
    courseCount: 8,
    category: 'Web Development',
    level: 'beginner',
    courses: ['1', '3', '4', '5'],
  },
  {
    id: '2',
    title: 'Data Science Career Path',
    description: 'Start your career in Data Science. Learn statistics, machine learning, deep learning, and data visualization.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    duration: '8 months',
    courseCount: 10,
    category: 'Data Science',
    level: 'intermediate',
    courses: ['2', '6', '7', '8'],
  },
];