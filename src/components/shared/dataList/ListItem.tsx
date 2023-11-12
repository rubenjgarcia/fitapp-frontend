import Card from "@/components/ui/Card";
import ItemDropdown from "./ItemDropdown";
import { Link } from "react-router-dom";
import { DataItem } from "./types";

export type ListItemProps = {
  data: DataItem;
  path: string;
  cardBorder?: boolean;
  details?: (data: DataItem) => JSX.Element;
};

const ListItem = ({ data, path, cardBorder, details }: ListItemProps) => {
  const { name } = data;

  return (
    <div className="mb-4">
      <Card bordered={cardBorder}>
        <div className="grid gap-x-4 grid-cols-12">
          <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
            <div className="flex flex-col">
              <h6 className="font-bold">
                <Link to={`/${path}/${data._id}`}>{name}</Link>
              </h6>
            </div>
          </div>
          {details && details(data)}
          <div className="my-1 sm:my-0 col-span-12 sm:col-span-3 md:col-span-1 lg:col-span-3 flex md:items-center justify-end">
            <ItemDropdown />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListItem;
