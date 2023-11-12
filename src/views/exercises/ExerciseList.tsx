import reducer from "./store";
import { injectReducer } from "@/store";
import DataList from "@/components/shared/dataList/DataList";
import { searchExercises } from "@/services/ExerciseService";

injectReducer("exercises", reducer);

const ExerciseList = () => {
  return (
    <DataList
      dataName="exercises"
      dataListContentProps={{
        getListApi: searchExercises,
        path: 'exercises',
        // gridItemProps: { details: GridItem },
        // listItemProps: { details: ListItem },
      }}
      dataListActionBarProps={{
        title: "exercises.exerciseList.title",
        newButtonText: "exercises.exerciseList.newExercise",
      }}
      // newDialogProps={{ title: "exercises.newExerciseForm.title", form: <NewPlanForm /> }}
    />
  );
};

export default ExerciseList;
