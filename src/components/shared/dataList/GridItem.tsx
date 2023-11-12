import Card from "@/components/ui/Card";
import ItemDropdown from "./ItemDropdown";
import { Link } from "react-router-dom";
import { TextEllipsis } from "@/components/shared";
import { DataItem } from "./types";

export type GridItemProps = {
  data: DataItem;
  path: string;
  details?: (data: DataItem) => JSX.Element;
};

const GridItem = ({ data, path, details }: GridItemProps) => {
  const { name, description } = data;

  return (
    <Card bodyClass="h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <Link to={`/${path}/${data._id}`}>
            <h6>{name}</h6>
          </Link>
          <ItemDropdown />
        </div>
        <p className="mt-4">
          <TextEllipsis text={description || ""} maxTextCount={100} />
        </p>
        {details && details(data)}
      </div>
    </Card>
  );
};

export default GridItem;
