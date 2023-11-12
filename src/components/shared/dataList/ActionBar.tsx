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
import BadgeSelect, { Option } from "../BadgeSelect";
import capitalize from "@/utils/capitalize";

export type DataListActionBarProps = {
  dataName: string;
  title: string;
  newButtonText: string;
  filters?: { placeholder: string; path: string; options: Option[] }[];
};

const ActionBar = ({ dataName, title, newButtonText, filters }: DataListActionBarProps) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef(null);

  const { t } = useTranslation();

  const view = useAppSelector((state: any) => state[dataName].data.view);

  const query = useAppSelector((state: any) => state[dataName].data.query);

  const onViewToggle = () => {
    dispatch({
      payload: view === "grid" ? "list" : "grid",
      type: `${dataName}/state/toggleView`,
    });
  };

  const onToggleSort = () => {
    dispatch({
      payload: query.sort === "asc" ? "desc" : "asc",
      type: `${dataName}/state/toggleSort`,
    });
  };

  const onSelectFilter = (path: string, value: string) => {
    dispatch({
      payload: value,
      type: `${dataName}/state/set${capitalize(path)}Filter`,
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
        {filters &&
          filters.map((f) => (
            <BadgeSelect
              key={f.path}
              placeholder={t(f.placeholder)}
              options={f.options}
              onChange={(sel) => onSelectFilter(f.path, (sel as Option).value)}
              value={query[f.path]}
            />
          ))}
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
        <Tooltip title={`Sort: ${query.sort === "asc" ? "A-Z" : "Z-A"}`}>
          <Button
            className="hidden md:flex"
            variant="plain"
            size="sm"
            icon={query.sort === "asc" ? <HiOutlineSortAscending /> : <HiOutlineSortDescending />}
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
