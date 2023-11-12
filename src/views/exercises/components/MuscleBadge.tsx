import { Badge } from "@/components/ui";
import { ExerciseMuscle } from "@/services/ExerciseService";
import { useTranslation } from "react-i18next";

type MuscleBadgeProps = {
  muscle: ExerciseMuscle;
};

export const getMuscleBadgeColor = (muscle: ExerciseMuscle) => {
  switch (muscle) {
    case ExerciseMuscle.NONE:
      return "bg-stone-500";
    case ExerciseMuscle.SHOULDERS:
      return "bg-orange-500";
    case ExerciseMuscle.BICEPS:
      return "bg-red-500";
    case ExerciseMuscle.TRICEPS:
      return "bg-yellow-500";
    case ExerciseMuscle.FOREARMS:
      return "bg-lime-500";
    case ExerciseMuscle.CHEST:
      return "bg-indigo-500";
    case ExerciseMuscle.CORE:
      return "bg-green-500";
    case ExerciseMuscle.BACK:
      return "bg-teal-500";
    case ExerciseMuscle.UPPER_LEGS:
      return "bg-blue-500";
    case ExerciseMuscle.GLUTES:
      return "bg-purple-500";
    case ExerciseMuscle.CALVES:
      return "bg-pink-500";
  }
};

const MuscleBadge = ({ muscle }: MuscleBadgeProps) => {
  const { t } = useTranslation();
  const color = getMuscleBadgeColor(muscle);

  return (
    <Badge
      className="mr-4"
      innerClass={color}
      content={t(`exercises.muscle.${muscle}`) || muscle}
    />
  );
};

export default MuscleBadge;
