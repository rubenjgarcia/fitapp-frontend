import { Badge } from "@/components/ui";
import { PlanDurationType } from "@/services/PlanService";
import { useTranslation } from "react-i18next";
import { HiCalendar } from "react-icons/hi";

type DurationBadgeProps = {
  durationNumber: number;
  durationType: PlanDurationType;
};

const DurationBadge = ({ durationNumber, durationType }: DurationBadgeProps) => {
  const { t } = useTranslation();
  const text = t(`plans.durationType.${durationType}`, { count: durationNumber });
  return (
    <>
      <HiCalendar className="text-base" />
      <span className="ml-1 rtl:mr-1 whitespace-nowrap">{text}</span>
    </>
  );
};

export default DurationBadge;
