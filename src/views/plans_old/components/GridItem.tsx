import Card from "@/components/ui/Card";
import ItemDropdown from "./ItemDropdown";
import { Link } from "react-router-dom";
import DifficultyBadge from "./DifficultyBadge";
import { PlanDifficulty, PlanDurationType } from "@/services/PlanService";
import { TextEllipsis } from "@/components/shared";
import dayjs from "dayjs";
import DurationBadge from "./DurationBadge";

export type GridItemProps = {
  data: {
    _id: string;
    name: string;
    description?: string;
    difficulty: PlanDifficulty;
    createdOn: Date;
    durationNumber: number;
    durationType: PlanDurationType;
  };
};

const GridItem = ({ data }: GridItemProps) => {
  const { name, description } = data;

  return (
    <Card bodyClass="h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <Link to={`/plans/${data._id}`}>
            <h6>{name}</h6>
          </Link>
          <ItemDropdown />
        </div>
        <p className="mt-4">
          <TextEllipsis text={description || ""} maxTextCount={100} />
        </p>
        <div className="mt-3">
          <span className="mb-2 text-sm font-semibold">{dayjs(data.createdOn).format("ll")}</span>
          <div className="flex items-center justify-between mt-2">
            <DifficultyBadge difficulty={data.difficulty} />
            <div className="flex items-center rounded-full font-semibold text-xs">
              <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
                <DurationBadge
                  durationNumber={data.durationNumber}
                  durationType={data.durationType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GridItem;
