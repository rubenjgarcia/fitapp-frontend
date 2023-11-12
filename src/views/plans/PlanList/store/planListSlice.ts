import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetPlanRequest,
  PlanResponse,
  PostPlanRequest,
  searchPlans,
  postPlan,
} from "@/services/PlanService";

export type PlanListState = {
  loading: boolean;
  list: PlanResponse[];
  view: "grid" | "list";
  query: GetPlanRequest;
  newDialog: boolean;
};

export const SLICE_NAME = "plans";

export const getList = createAsyncThunk(SLICE_NAME + "/getList", async (data: GetPlanRequest) => {
  const response = await searchPlans(data);
  return response.data;
});

const initialState: PlanListState = {
  loading: false,
  list: [],
  view: "grid",
  query: {
    sort: "asc",
    search: "",
  },
  newDialog: false,
};

export const createPlan = createAsyncThunk(
  SLICE_NAME + "/createPlan",
  async (data: PostPlanRequest) => {
    const response = await postPlan(data);
    return response.data;
  }
);

const planListSlice = createSlice({
  name: `${SLICE_NAME}/state`,
  initialState,
  reducers: {
    toggleView: (state, action) => {
      state.view = action.payload;
    },
    toggleSort: (state, action) => {
      state.query.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.query.search = action.payload;
    },
    toggleNewDialog: (state, action) => {
      state.newDialog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export const { toggleView, toggleSort, toggleNewDialog, setSearch } = planListSlice.actions;

export default planListSlice.reducer;
