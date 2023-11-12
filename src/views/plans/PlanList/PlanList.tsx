import reducer from "./store";
import { injectReducer } from "@/store";
import DataList from "@/components/shared/dataList/DataList";
import { PlanDifficulty, searchPlans } from "@/services/PlanService";
import NewPlanForm from "./components/NewPlanForm";
import GridItem from "./components/GridItem";
import ListItem from "./components/ListItem";
import { useTranslation } from "react-i18next";
import { getDifficultyBadgeColor } from "./components/DifficultyBadge";

injectReducer("plans", reducer);

const PlanList = () => {
  const { t } = useTranslation();

  return (
    <DataList
      dataName="plans"
      dataListContentProps={{
        getListApi: searchPlans,
        path: "plans",
        gridItemProps: { details: GridItem },
        listItemProps: { details: ListItem },
      }}
      dataListActionBarProps={{
        title: "plans.planList.title",
        newButtonText: "plans.planList.newPlan",
        filters: [
          {
            placeholder: "plans.planList.filters.difficulty",
            path: "difficulty",
            options: Object.entries(PlanDifficulty).map((kv) => ({
              value: kv[1],
              label: t(`plans.difficulty.${kv[1]}`) || kv[1],
              color: "bg-" + getDifficultyBadgeColor(kv[1]),
            })),
          },
        ],
      }}
      newDialogProps={{ title: "plans.newPlanForm.title", form: <NewPlanForm /> }}
    />
  );
};

export default PlanList;
