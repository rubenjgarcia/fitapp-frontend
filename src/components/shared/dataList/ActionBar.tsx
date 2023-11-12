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
import debounce from "lodash/debounce";
import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/store";

export type DataListActionBarProps = {
  dataName: string;
  title: string;
  newButtonText: string;
};

const ActionBar = ({ dataName, title, newButtonText }: DataListActionBarProps) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef(null);

  const { t } = useTranslation();

  const view = useAppSelector((state: any) => state[dataName].data.view);

  const { sort } = useAppSelector((state: any) => state[dataName].data.query);

  const onViewToggle = () => {
    dispatch({
      payload: view === "grid" ? "list" : "grid",
      type: `${dataName}/state/toggleView`,
    });
  };

  const onToggleSort = () => {
    dispatch({
      payload: sort === "asc" ? "desc" : "asc",
      type: `${dataName}/state/toggleSort`,
    });
  };

  const onAddNew = () => {
    dispatch({ payload: true, type: `${dataName}/state/toggleNewDialog` });
  };

  const debounceFn = debounce(handleDebounceFn, 500);

  function handleDebounceFn(val: string) {
    dispatch({
      payload: val,
      type: `${dataName}/state/setSearch`,
    });
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounceFn(e.target.value);
  };

  return (
    <div className="lg:flex items-center justify-between mb-4">
      <h3 className="mb-4 lg:mb-0">{t(title)}</h3>
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
        <Button size="sm" variant="twoTone" icon={<HiOutlinePlusCircle />} onClick={onAddNew}>
          {t(newButtonText)}
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
