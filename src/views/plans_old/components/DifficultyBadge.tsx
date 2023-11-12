import { Badge } from "@/components/ui";
import { PlanDifficulty } from "@/services/PlanService";
import { useTranslation } from "react-i18next";

type DifficultyBadgeProps = {
  difficulty: PlanDifficulty;
};

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const { t } = useTranslation();
  let color;

  switch (difficulty) {
    case PlanDifficulty.BEGINNER:
      color = "bg-emerald-500";
      break;
    case PlanDifficulty.INTERMEDIATE:
      color = "bg-yellow-500";
      break;
    case PlanDifficulty.ADVANCED:
      color = "bg-red-500";
      break;
  }

  return (
    <Badge
      className="mr-4"
      innerClass={color}
      content={t(`plans.difficulty.${difficulty}`) || difficulty}
    />
  );
};

export default DifficultyBadge;
