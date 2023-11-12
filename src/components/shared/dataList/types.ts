export type DataItem = {
  _id: string;
  name: string;
  description?: string;
};

export type DataListState = {
  loading: boolean;
  list: DataItem[];
  view: "grid";
  query: {
    sort: "asc";
    search: "";
  };
  newDialog: boolean;
};
