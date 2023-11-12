import { ExerciseEquipment } from "@/services/ExerciseService";
import { useTranslation } from "react-i18next";
import { CiDumbbell } from "react-icons/ci";

type EquipmentBadgeProps = {
  equipment: ExerciseEquipment;
};

const EquipmentBadge = ({ equipment }: EquipmentBadgeProps) => {
  const { t } = useTranslation();
  const text = t(`exercises.equipment.${equipment}`);
  return (
    <>
      <CiDumbbell className="text-base" />
      <span className="ml-1 rtl:mr-1 whitespace-nowrap">{text}</span>
    </>
  );
};

export default EquipmentBadge;
