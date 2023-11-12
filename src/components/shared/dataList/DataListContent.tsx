import { useEffect } from "react";
import classNames from "classnames";
import GridItem, { GridItemProps } from "./GridItem";
import ListItem, { ListItemProps } from "./ListItem";
import Spinner from "@/components/ui/Spinner";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store";
import { DataItem } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type DataListContentProps = {
  dataName: string;
  path: string;
  getListApi: (data: any) => Promise<AxiosResponse<any, any>>;
  gridItemProps?: Omit<GridItemProps, "data" | "path">;
  listItemProps?: Omit<ListItemProps, "data" | "path">;
};

const DataListContent = ({
  dataName,
  path,
  getListApi,
  gridItemProps,
  listItemProps,
}: DataListContentProps) => {
  const dispatch = useAppDispatch();

  const loading = useSelector((state: any) => state[dataName].data.loading);
  const list = useSelector((state: any) => state[dataName].data.list);
  const view = useSelector((state: any) => state[dataName].data.view);
  const { sort, search } = useSelector((state: any) => state[dataName].data.query);

  const getList = createAsyncThunk(dataName + "/getList", async (data: any) => {
    const response = await getListApi(data);
    return response.data;
  });

  useEffect(() => {
    dispatch(getList({ sort, search }));
  }, [dispatch, sort, search]);

  return (
    <div className={classNames("mt-6 h-full flex flex-col", loading && "justify-center")}>
      {loading && (
        <div className="flex justify-center">
          <Spinner size={40} />
        </div>
      )}
      {view === "grid" && list.length > 0 && !loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((item: DataItem) => (
            <GridItem key={item._id} data={item} path={path} {...gridItemProps} />
          ))}
        </div>
      )}
      {view === "list" &&
        list.length > 0 &&
        !loading &&
        list.map((item: DataItem) => (
          <ListItem key={item._id} data={item} path={path} {...listItemProps} />
        ))}
    </div>
  );
};

export default DataListContent;
