export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  skills: string[];
  tools?: string[];
  syllabus: {
    week: string;
    topic: string;
    details: string[];
  }[];
  features: string[];
  icon: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'enrolled';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: string;
}
