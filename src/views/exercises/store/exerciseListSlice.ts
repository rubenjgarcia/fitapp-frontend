import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetExerciseRequest,
  ExerciseResponse,
  PostExerciseRequest,
  searchExercises,
  postExercise,
} from "@/services/ExerciseService";

export type ExerciseListState = {
  loading: boolean;
  list: ExerciseResponse[];
  view: "grid" | "list";
  query: GetExerciseRequest;
  newDialog: boolean;
};

export const SLICE_NAME = "exercises";

export const getList = createAsyncThunk(
  SLICE_NAME + "/getList",
  async (data: GetExerciseRequest) => {
    const response = await searchExercises(data);
    return response.data;
  }
);

const initialState: ExerciseListState = {
  loading: false,
  list: [],
  view: "grid",
  query: {
    sort: "asc",
    search: "",
  },
  newDialog: false,
};

export const createExercise = createAsyncThunk(
  SLICE_NAME + "/createExercise",
  async (data: PostExerciseRequest) => {
    const response = await postExercise(data);
    return response.data;
  }
);

const exerciseListSlice = createSlice({
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
    setMuscleFilter: (state, action) => {
      state.query.muscle = action.payload;
    },
    setEquipmentFilter: (state, action) => {
      state.query.equipment = action.payload;
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
      .addCase(createExercise.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export const {
  toggleView,
  toggleSort,
  toggleNewDialog,
  setSearch,
  setMuscleFilter,
  setEquipmentFilter,
} = exerciseListSlice.actions;

export default exerciseListSlice.reducer;
