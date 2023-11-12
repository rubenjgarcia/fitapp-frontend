import { useRef } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Tooltip from "@/components/ui/Tooltip";
import {
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import {
  toggleView,
  toggleSort,
  setSearch,
  toggleNewDialog,
  useAppDispatch,
  useAppSelector,
} from "../store";
import debounce from "lodash/debounce";
import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const ActionBar = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef(null);

  const { t } = useTranslation();

  const view = useAppSelector((state) => state.plans.data.view);

  const { sort } = useAppSelector((state) => state.plans.data.query);

  const onViewToggle = () => {
    dispatch(toggleView(view === "grid" ? "list" : "grid"));
  };

  const onToggleSort = () => {
    dispatch(toggleSort(sort === "asc" ? "desc" : "asc"));
  };

  const onAddNewProject = () => {
    dispatch(toggleNewDialog(true));
  };

  const debounceFn = debounce(handleDebounceFn, 500);

  function handleDebounceFn(val: string) {
    dispatch(setSearch(val));
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounceFn(e.target.value);
  };

  return (
    <div className="lg:flex items-center justify-between mb-4">
      <h3 className="mb-4 lg:mb-0">{t("plans.planList.title")}</h3>
      <div className="flex flex-col md:flex-row md:items-center gap-1">
        <Input
          ref={inputRef}
          size="sm"
          placeholder={t("common.search") || "Search"}
          prefix={<HiOutlineSearch className="text-lg" />}
          onChange={handleInputChange}
        />
        <Tooltip title={view === "grid" ? t("common.listView") : t("common.gridView")}>
          <Button
            className="hidden md:flex"
            variant="plain"
            size="sm"
            icon={view === "grid" ? <HiOutlineViewList /> : <HiOutlineViewGrid />}
            onClick={() => onViewToggle()}
          />
        </Tooltip>
        <Tooltip title={`Sort: ${sort === "asc" ? "A-Z" : "Z-A"}`}>
          <Button
            className="hidden md:flex"
            variant="plain"
            size="sm"
            icon={sort === "asc" ? <HiOutlineSortAscending /> : <HiOutlineSortDescending />}
            onClick={onToggleSort}
          />
        </Tooltip>
        <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewProject}
        >
          {t("plans.planList.newPlan")}
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
