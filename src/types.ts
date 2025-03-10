export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  company: string;
  results: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}