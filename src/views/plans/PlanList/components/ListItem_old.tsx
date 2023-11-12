import Card from "@/components/ui/Card";
import ItemDropdown from "./ItemDropdown";
import { Link } from "react-router-dom";
import { PlanDifficulty, PlanDurationType } from "@/services/PlanService";
import DifficultyBadge from "./DifficultyBadge";
import dayjs from "dayjs";
import DurationBadge from "./DurationBadge";

export type ListItemData = {
  _id: string;
  name: string;
  description?: string;
  difficulty: PlanDifficulty;
  createdOn: Date;
  durationNumber: number;
  durationType: PlanDurationType;
};

type ListItemProps = {
  data: ListItemData;
  cardBorder?: boolean;
};

const ListItem = ({ data, cardBorder }: ListItemProps) => {
  const { name } = data;

  return (
    <div className="mb-4">
      <Card bordered={cardBorder}>
        <div className="grid gap-x-4 grid-cols-12">
          <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
            <div className="flex flex-col">
              <h6 className="font-bold">
                <Link to={`/plans/${data._id}`}>{name}</Link>
              </h6>
            </div>
          </div>
          <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-2 md:flex md:items-center">
            <span className="text-sm font-semibold">{dayjs(data.createdOn).format("ll")}</span>
          </div>
          <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-2 md:flex md:items-center">
            <DifficultyBadge difficulty={data.difficulty} />
          </div>
          <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-2 md:flex md:items-center">
            <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
              <DurationBadge
                durationNumber={data.durationNumber}
                durationType={data.durationType}
              />
            </div>
          </div>

          <div className="my-1 sm:my-0 col-span-12 sm:col-span-3 md:col-span-1 lg:col-span-3 flex md:items-center justify-end">
            <ItemDropdown />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListItem;
