import { PlanDifficulty, PlanDurationType, PlanResponse } from "@/services/PlanService";
import dayjs from "dayjs";

export const plans: PlanResponse[] = [
  {
    _id: "27",
    name: "Mesocycle I - Strength",
    description:
      "First mesocycle of strength. This is a program with a very long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dolor feugiat, interdum dui in, tempus ante. Pellentesque vulputate velit ut leo finibus, nec gravida sem pellentesque. Mauris feugiat massa at ante faucibus, vel tempus nisi lacinia. Fusce non ligula turpis. Aliquam id nunc in ligula porttitor finibus quis sit amet turpis. Morbi bibendum tortor magna. Vivamus ultricies laoreet consectetur. Donec tincidunt dapibus lacus, ac vulputate lectus tincidunt a. Nullam in mattis massa. In sollicitudin diam ut libero tincidunt, non varius leo euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae ultricies nisi, in tristique nibh.",
    difficulty: PlanDifficulty.BEGINNER,
    createdOn: dayjs("20230106").toDate(),
    durationNumber: 1,
    durationType: PlanDurationType.MONTHS
  },
  {
    _id: "28",
    name: "Mesocycle II - Strength",
    description: "Second mesocycle of strength",
    difficulty: PlanDifficulty.INTERMEDIATE,
    createdOn: dayjs("20230206").toDate(),
    durationNumber: 6,
    durationType: PlanDurationType.WEEKS
  },
  {
    _id: "29",
    name: "Marathon",
    description: "Plan for doing the New York Marathon",
    difficulty: PlanDifficulty.INTERMEDIATE,
    createdOn: dayjs("20230506").toDate(),
    durationNumber: 3,
    durationType: PlanDurationType.MONTHS
  },
  {
    _id: "31",
    name: "Calisthenics",
    description: "Beginner program",
    difficulty: PlanDifficulty.BEGINNER,
    createdOn: dayjs("20230401").toDate(),
    durationNumber: 15,
    durationType: PlanDurationType.DAYS
  },
  {
    _id: "30",
    name: "Calisthenics",
    description: "Intermediate program",
    difficulty: PlanDifficulty.INTERMEDIATE,
    createdOn: dayjs("20230501").toDate(),
    durationNumber: 5,
    durationType: PlanDurationType.WEEKS
  },
  {
    _id: "32",
    name: "Calisthenics",
    description: "Advanced program",
    difficulty: PlanDifficulty.ADVANCED,
    createdOn: dayjs("20230601").toDate(),
    durationNumber: 2,
    durationType: PlanDurationType.MONTHS
  },
];
