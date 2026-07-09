import bhadakuda from "../../assets/bhadakuda.svg";
import kitab from "../../assets/kitab.svg";
import cook from "../../assets/cook.svg";

export type HomeCardType = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
};

export const homeCards: HomeCardType[] = [
  {
    id: 1,
    title: "Diploma in Hotel Management",
    subtitle: "(DHM) (Level III, IV, V)",
    image: bhadakuda,
    description: "Affiliated to CTEVT, Nepal & IAMA, India (DHM)",
  },
  {
    id: 2,
    title: "Diploma in Culinary Arts",
    subtitle: "(DCA) (Level III, IV, V)",
    image: kitab,
    description: "Affiliated to CTEVT, Nepal & IAMA, India (DCA)",
  },
  {
    id: 3,
    title: "Professional Cook",
    image: cook,
    description:
      "Affiliated from Council for Technical Education and Vocational Training (CTEVT) Nepal",
  },
];
