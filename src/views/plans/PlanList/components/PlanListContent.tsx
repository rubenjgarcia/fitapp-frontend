import { useEffect } from "react";
import classNames from "classnames";
import GridItem from "./GridItem";
import ListItem from "./ListItem";
import Spinner from "@/components/ui/Spinner";
import { getList, useAppDispatch, useAppSelector } from "../store";

const PlanListContent = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.plans.data.loading);
  const planList = useAppSelector((state) => state.plans.data.list);
  const view = useAppSelector((state) => state.plans.data.view);
  const { sort, search } = useAppSelector((state) => state.plans.data.query);

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
      {view === "grid" && planList.length > 0 && !loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {planList.map((plan) => (
            <GridItem key={plan._id} data={plan} />
          ))}
        </div>
      )}
      {view === "list" &&
        planList.length > 0 &&
        !loading &&
        planList.map((plan) => <ListItem key={plan._id} data={plan} />)}
    </div>
  );
};

export default PlanListContent;
