import { PlanResponse } from "@/services/PlanService";
import DifficultyBadge from "./DifficultyBadge";
import dayjs from "dayjs";
import DurationBadge from "./DurationBadge";
import { DataItem } from "@/components/shared/dataList/types";

const ListItem = (data: DataItem) => {
  const planData = data as PlanResponse;

  return (
    <>
      <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-2 md:flex md:items-center">
        <span className="text-sm font-semibold">{dayjs(planData.createdOn).format("ll")}</span>
      </div>
      <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-2 md:flex md:items-center">
        <DifficultyBadge difficulty={planData.difficulty} />
      </div>
      <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-2 md:flex md:items-center">
        <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
          <DurationBadge
            durationNumber={planData.durationNumber}
            durationType={planData.durationType}
          />
        </div>
      </div>
    </>
  );
};

export default ListItem;
