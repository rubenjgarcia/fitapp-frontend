import ApiService from "./ApiService";

export enum PlanDifficulty {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export enum PlanDurationType {
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
}

export type PlanResponse = {
  _id: string;
  name: string;
  description?: string;
  difficulty: PlanDifficulty;
  durationNumber: number;
  durationType: PlanDurationType;
  createdOn: Date;
};

export type PostPlanRequest = {
  name: string;
  description?: string;
  difficulty: PlanDifficulty;
  durationNumber: number;
  durationType: PlanDurationType;
};

export type GetPlanRequest = {
  sort?: "asc" | "desc";
  difficulty?: PlanDifficulty;
  search?: string;
};

export async function searchPlans(data: GetPlanRequest) {
  return ApiService.fetchData<PlanResponse[]>({
    url: "/plans/search",
    method: "post",
    data,
  });
}

export async function postPlan(data: PostPlanRequest) {
  return ApiService.fetchData<PlanResponse>({
    url: "/plans",
    method: "post",
    data,
  });
}
