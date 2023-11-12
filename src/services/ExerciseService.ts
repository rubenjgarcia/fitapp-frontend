import ApiService from "./ApiService";

export enum ExerciseEquipment {
  NONE = "NONE",
  DUMBELLS = "DUMBELLS",
  BARBELL = "BARBELL",
  KETTLEBELL = "KETTLEBELL",
  EZ_BARBELL = "EZ_BARBELL",
}

export enum ExerciseMuscle {
  NONE = "NONE",
  SHOULDERS = "SHOULDERS",
  BICEPS = "BICEPS",
  TRICEPS = "TRICEPS",
  FOREARMS = "FOREARMS",
  CHEST = "CHEST",
  CORE = "CORE",
  BACK = "BACK",
  UPPER_LEGS = "UPPER_LEGS",
  GLUTES = "GLUTES",
  CALVES = "CALVES",
}

export type ExerciseResponse = {
  _id: string;
  name: string;
  description?: string;
  equipment: ExerciseEquipment;
  muscle: ExerciseMuscle;
};

export type PostExerciseRequest = {
  name: string;
  description?: string;
  equipment: ExerciseEquipment;
  muscle: ExerciseMuscle;
};

export type GetExerciseRequest = {
  sort?: "asc" | "desc";
  search?: string;
};

export async function searchExercises(data: GetExerciseRequest) {
  return ApiService.fetchData<ExerciseResponse[]>({
    url: "/exercises/search",
    method: "post",
    data,
  });
}

export async function postExercise(data: PostExerciseRequest) {
  return ApiService.fetchData<ExerciseResponse>({
    url: "/exercises",
    method: "post",
    data,
  });
}
