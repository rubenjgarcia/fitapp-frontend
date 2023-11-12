import { FormItem, FormContainer } from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Field, Form, Formik, FieldProps } from "formik";
import { createExercise, toggleNewDialog } from "../store";
import { useAppDispatch } from "@/store";
import * as Yup from "yup";
import { PlanDifficulty, PlanDurationType } from "@/services/PlanService";
import { useTranslation } from "react-i18next";
import { Radio, Select } from "@/components/ui";
import { ExerciseEquipment, ExerciseMuscle } from "@/services/ExerciseService";

type FormModel = {
  name: string;
  description?: string;
  muscle: ExerciseMuscle;
  equipment: ExerciseEquipment;
};

const validationSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, t("exercises.newExerciseForm.form.fields.name_min"))
      .required(t("exercises.newExerciseForm.form.fields.name_required")),
    description: Yup.string(),
    muscle: Yup.mixed<ExerciseMuscle>()
      .required(t("exercises.newExerciseForm.form.fields.muscle_required"))
      .oneOf(Object.values(ExerciseMuscle)),
    equipment: Yup.mixed<ExerciseEquipment>()
      .required(t("exercises.newExerciseForm.form.fields.equipment_required"))
      .oneOf(Object.values(ExerciseEquipment)),
  });

const muscleOptions = Object.entries(ExerciseMuscle).map((kv) => ({
  value: kv[1],
  label: kv[0],
}));

const equipmentOptions = Object.entries(ExerciseEquipment).map((kv) => ({
  value: kv[1],
  label: kv[0],
}));

const NewExerciseForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSubmit = (formValue: FormModel, setSubmitting: (isSubmitting: boolean) => void) => {
    setSubmitting(true);
    dispatch(createExercise(formValue));
    dispatch(toggleNewDialog(false));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        muscle: ExerciseMuscle.NONE,
        equipment: ExerciseEquipment.NONE,
      }}
      validationSchema={validationSchema(t)}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting);
      }}
    >
      {({ touched, errors, values }) => (
        <Form>
          <FormContainer>
            <FormItem
              label={t("exercises.newExerciseForm.form.fields.name") || "Name"}
              invalid={errors.name && touched.name}
              errorMessage={errors.name}
            >
              <Field
                type="text"
                autoComplete="off"
                name="name"
                placeholder={
                  t("exercises.newExerciseForm.form.fields.name_placeholder") || "Enter name"
                }
                component={Input}
              />
            </FormItem>
            <FormItem
              label={t("exercises.newExerciseForm.form.fields.description") || "Description"}
              invalid={errors.description && touched.description}
              errorMessage={errors.description}
            >
              <Field
                textArea
                type="text"
                autoComplete="off"
                name="description"
                placeholder={
                  t("exercises.newExerciseForm.form.fields.description_placeholder") ||
                  "Enter description"
                }
                component={Input}
              />
            </FormItem>
            <FormItem
              label={t("exercises.newExerciseForm.form.fields.muscle") || "Muscle"}
              invalid={errors.muscle && touched.muscle}
              errorMessage={errors.muscle}
            >
              <Field name="muscle">
                {({ field, form }: FieldProps<FormModel>) => (
                  <Select
                    field={field}
                    form={form}
                    options={muscleOptions.map((o) => ({
                      value: o.value,
                      label: t(`exercises.muscle.${o.value}`) || o.label,
                    }))}
                    value={muscleOptions.filter((option) => option.value === values.muscle)}
                    onChange={(option) => form.setFieldValue(field.name, option?.value)}
                    getOptionLabel={(o) => t(`exercises.muscle.${o.value}`) || o.label}
                  />
                )}
              </Field>
            </FormItem>
            <FormItem
              label={t("exercises.newExerciseForm.form.fields.equipment") || "Equipment"}
              invalid={errors.equipment && touched.equipment}
              errorMessage={errors.equipment}
            >
              <Field name="equipment">
                {({ field, form }: FieldProps<FormModel>) => (
                  <Select
                    field={field}
                    form={form}
                    options={equipmentOptions.map((o) => ({
                      value: o.value,
                      label: t(`exercises.equipment.${o.value}`) || o.label,
                    }))}
                    value={equipmentOptions.filter((option) => option.value === values.equipment)}
                    onChange={(option) => form.setFieldValue(field.name, option?.value)}
                    getOptionLabel={(o) => t(`exercises.equipment.${o.value}`) || o.label}
                  />
                )}
              </Field>
            </FormItem>
            <Button block variant="solid" type="submit">
              {t("exercises.newExerciseForm.form.submit")}
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default NewExerciseForm;
