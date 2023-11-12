import Dialog from "@/components/ui/Dialog";
import NewPlanForm from "./NewPlanForm";
import { toggleNewDialog, useAppDispatch, useAppSelector } from "../store";
import { useTranslation } from "react-i18next";

const NewPlanDialog = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const newPlanDialog = useAppSelector((state) => state.plans.data.newDialog);

  const onDialogClose = () => {
    dispatch(toggleNewDialog(false));
  };

  return (
    <Dialog isOpen={newPlanDialog} onClose={onDialogClose} onRequestClose={onDialogClose}>
      <h4>{t("plans.newPlanForm.title")}</h4>
      <div className="mt-4">
        <NewPlanForm />
      </div>
    </Dialog>
  );
};

export default NewPlanDialog;
