import DifficultyBadge from "./DifficultyBadge";
import { PlanResponse } from "@/services/PlanService";
import dayjs from "dayjs";
import DurationBadge from "./DurationBadge";
import { DataItem } from "@/components/shared/dataList/types";

const GridItem = (data: DataItem) => {
  const planData = data as PlanResponse;
  return (
    <div className="mt-3">
      <span className="mb-2 text-sm font-semibold">{dayjs(planData.createdOn).format("ll")}</span>
      <div className="flex items-center justify-between mt-2">
        <DifficultyBadge difficulty={planData.difficulty} />
        <div className="flex items-center rounded-full font-semibold text-xs">
          <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
            <DurationBadge
              durationNumber={planData.durationNumber}
              durationType={planData.durationType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
