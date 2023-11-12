import reducer from "./store";
import { injectReducer } from "@/store";
import DataList from "@/components/shared/dataList/DataList";
import { searchPlans } from "@/services/PlanService";
import NewPlanForm from "./components/NewPlanForm";
import GridItem from "./components/GridItem";
import ListItem from "./components/ListItem";

injectReducer("plans", reducer);

const PlanList = () => {
  return (
    <DataList
      dataName="plans"
      dataListContentProps={{
        getListApi: searchPlans,
        path: 'plans',
        gridItemProps: { details: GridItem },
        listItemProps: { details: ListItem },
      }}
      dataListActionBarProps={{
        title: "plans.planList.title",
        newButtonText: "plans.planList.newPlan",
      }}
      newDialogProps={{ title: "plans.newPlanForm.title", form: <NewPlanForm /> }}
    />
  );
};

export default PlanList;
