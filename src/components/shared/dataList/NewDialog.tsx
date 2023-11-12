import Dialog from "@/components/ui/Dialog";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/store";

export type NewDialogProps = {
  dataName: string;
  title: string;
  form: JSX.Element;
};

const NewDialog = ({ dataName, title, form }: NewDialogProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const newDialog = useAppSelector((state: any) => state[dataName].data.newDialog);

  const onDialogClose = () => {
    dispatch({ payload: false, type: `${dataName}/state/toggleNewDialog` });
  };

  return (
    <Dialog isOpen={newDialog} onClose={onDialogClose} onRequestClose={onDialogClose}>
      <h4>{t(title)}</h4>
      <div className="mt-4">{form}</div>
    </Dialog>
  );
};

export default NewDialog;
