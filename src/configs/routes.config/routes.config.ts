import { lazy } from "react";
import authRoute from "./authRoute";
import type { Routes } from "@/@types/routes";

export const publicRoutes: Routes = [...authRoute];

export const protectedRoutes = [
  {
    key: "home",
    path: "/home",
    component: lazy(() => import("@/views/Home")),
    authority: [],
  },
  {
    key: "plans.list",
    path: `/plans`,
    component: lazy(() => import("@/views/plans/PlanList")),
    authority: [],
  },
  {
    key: "exercises.list",
    path: `/exercises`,
    component: lazy(() => import("@/views/exercises/ExerciseList")),
    authority: [],
  },
];
