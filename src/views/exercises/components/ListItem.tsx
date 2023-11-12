import { PlanResponse } from "@/services/PlanService";
import { DataItem } from "@/components/shared/dataList/types";
import { ExerciseResponse } from "@/services/ExerciseService";
import MuscleBadge from "./MuscleBadge";
import EquipmentBadge from "./EquipmentBadge";

const ListItem = (data: DataItem) => {
  const exerciseData = data as ExerciseResponse;

  return (
    <>
      <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
        <MuscleBadge muscle={exerciseData.muscle} />
      </div>
      <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
        <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
          <EquipmentBadge equipment={exerciseData.equipment} />
        </div>
      </div>
    </>
  );
};

export default ListItem;
