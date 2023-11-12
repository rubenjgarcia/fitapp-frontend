import { DataItem } from "@/components/shared/dataList/types";
import { ExerciseResponse } from "@/services/ExerciseService";
import MuscleBadge from "./MuscleBadge";
import EquipmentBadge from "./EquipmentBadge";

const GridItem = (data: DataItem) => {
  const exerciseData = data as ExerciseResponse;
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mt-2">
        <MuscleBadge muscle={exerciseData.muscle} />
        <div className="flex items-center rounded-full font-semibold text-xs">
          <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
            <EquipmentBadge equipment={exerciseData.equipment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
