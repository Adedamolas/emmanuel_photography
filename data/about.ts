import { LucideIcon, Eye, Settings, Check } from "lucide-react";

interface Approach {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const approach: Approach[] = [
  {
    title: "Vision",
    description:
      "I focus on capturing authentic moments that tell unique stories and evoke genuine emotions.",
    icon: Eye,
  },
  {
    title: "Process",
    description:
      "Every project begins with understanding your needs, followed by careful planning and creative execution.",
    icon: Settings,
  },
  {
    title: "Result",
    description:
      "The final images are thoughtfully edited to enhance their natural beauty while maintaining authenticity.",
    icon: Check,
  },
];
