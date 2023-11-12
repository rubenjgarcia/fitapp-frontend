import reducer from "./store";
import { injectReducer } from "@/store";
import DataList from "@/components/shared/dataList/DataList";
import { ExerciseEquipment, ExerciseMuscle, searchExercises } from "@/services/ExerciseService";
import GridItem from "./components/GridItem";
import ListItem from "./components/ListItem";
import { getMuscleBadgeColor } from "./components/MuscleBadge";
import { useTranslation } from "react-i18next";
import NewExerciseForm from "./components/NewExerciseForm";

injectReducer("exercises", reducer);

const ExerciseList = () => {
  const { t } = useTranslation();

  return (
    <DataList
      dataName="exercises"
      dataListContentProps={{
        getListApi: searchExercises,
        path: "exercises",
        gridItemProps: { details: GridItem },
        listItemProps: { details: ListItem },
      }}
      dataListActionBarProps={{
        title: "exercises.exerciseList.title",
        newButtonText: "exercises.exerciseList.newExercise",
        filters: [
          {
            placeholder: "exercises.exerciseList.filters.muscle",
            path: "muscle",
            options: Object.entries(ExerciseMuscle).map((kv) => ({
              value: kv[1],
              label: t(`exercises.muscle.${kv[1]}`) || kv[1],
              color: getMuscleBadgeColor(kv[1]),
            })),
          },
          {
            placeholder: "exercises.exerciseList.filters.equipment",
            path: "equipment",
            options: Object.entries(ExerciseEquipment).map((kv) => ({
              value: kv[1],
              label: t(`exercises.equipment.${kv[1]}`) || kv[1],
            })),
          },
        ],
      }}
      newDialogProps={{ title: "exercises.newExerciseForm.title", form: <NewExerciseForm /> }}
    />
  );
};

export default ExerciseList;
