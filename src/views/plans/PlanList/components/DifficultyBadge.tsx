import { Badge } from "@/components/ui";
import { PlanDifficulty } from "@/services/PlanService";
import { useTranslation } from "react-i18next";

type DifficultyBadgeProps = {
  difficulty: PlanDifficulty;
};

export const getDifficultyBadgeColor = (difficulty: PlanDifficulty) => {
  switch (difficulty) {
    case PlanDifficulty.BEGINNER:
      return "green-500";
    case PlanDifficulty.INTERMEDIATE:
      return "yellow-500";
    case PlanDifficulty.ADVANCED:
      return "red-500";
  }
};

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const { t } = useTranslation();
  const color = "bg-" + getDifficultyBadgeColor(difficulty);

  return (
    <Badge
      className="mr-4"
      innerClass={color}
      content={t(`plans.difficulty.${difficulty}`) || difficulty}
    />
  );
};

export default DifficultyBadge;
