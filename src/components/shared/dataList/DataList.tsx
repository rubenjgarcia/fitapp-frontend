import ActionBar, { DataListActionBarProps } from "./ActionBar";
import DataListContent, { DataListContentProps } from "./DataListContent";
import NewDialog, { NewDialogProps } from "./NewDialog";
import Container from "@/components/shared/Container";

export type DataListProps = {
  dataName: string;
  dataListActionBarProps: Omit<DataListActionBarProps, "dataName">;
  dataListContentProps: Omit<DataListContentProps, "dataName">;
  newDialogProps?: Omit<NewDialogProps, "dataName">;
};

const DataList = ({
  dataName,
  dataListContentProps,
  dataListActionBarProps,
  newDialogProps,
}: DataListProps) => {
  return (
    <Container className="h-full">
      <ActionBar {...dataListActionBarProps} dataName={dataName} />
      <DataListContent {...dataListContentProps} dataName={dataName} />
      {newDialogProps && <NewDialog {...newDialogProps} dataName={dataName} />}
    </Container>
  );
};

export default DataList;
