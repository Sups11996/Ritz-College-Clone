export interface Course {
  id: number;
  title: string;
  affiliation: string;
  category: "Diploma" | "Vocational";
  image: string;
  duration: string;
  description: string;
}
