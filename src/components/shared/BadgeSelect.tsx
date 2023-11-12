import Select from "@/components/ui/Select";
import Badge from "@/components/ui/Badge";
import { components, ControlProps, OnChangeValue, OptionProps } from "react-select";
import { HiCheck } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export type Option = {
  value: string;
  label: string;
  color?: string;
};

const { Control } = components;

const BadgeSelectOption = ({ innerProps, label, data, isSelected }: OptionProps<Option>) => {
  return (
    <div
      className={`flex items-center justify-between p-2 cursor-pointer ${
        isSelected ? "bg-gray-100 dark:bg-gray-500" : "hover:bg-gray-50 dark:hover:bg-gray-600"
      }`}
      {...innerProps}
    >
      <div className="flex items-center gap-2">
        {data.color && <Badge innerClass={data.color} />}
        <span>{label}</span>
      </div>
      {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
    </div>
  );
};

const BagdeSelectControl = ({ children, ...props }: ControlProps<Option>) => {
  const selected = props.getValue()[0];
  return (
    <Control {...props}>
      {selected && selected.color && (
        <Badge className="ltr:ml-4 rtl:mr-4" innerClass={selected.color} />
      )}
      {children}
    </Control>
  );
};

export type BadgeSelectProps = {
  placeholder: string;
  options: Option[];
  onChange: (newValue: OnChangeValue<Option, boolean>) => void;
  value: string;
};

const BadgeSelect = ({ options, onChange, placeholder, value }: BadgeSelectProps) => {
  const { t } = useTranslation();

  return (
    <Select
      options={[{ value: "", label: t("common.clear") || "Clear" }, ...options]}
      size="sm"
      className="min-w-[130px]"
      components={{
        Option: BadgeSelectOption,
        Control: BagdeSelectControl,
      }}
      placeholder={placeholder}
      value={options.filter((option) => option.value === value)}
      onChange={onChange}
    />
  );
};

export default BadgeSelect;
