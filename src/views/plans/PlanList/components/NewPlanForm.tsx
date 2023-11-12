import { FormItem, FormContainer } from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Field, Form, Formik, FieldProps } from "formik";
import { createPlan, toggleNewDialog } from "../store";
import { useAppDispatch } from "@/store";
import * as Yup from "yup";
import { PlanDifficulty, PlanDurationType } from "@/services/PlanService";
import { useTranslation } from "react-i18next";
import { Radio, Select } from "@/components/ui";

type FormModel = {
  name: string;
  description?: string;
  difficulty: PlanDifficulty;
  durationNumber: number;
  durationType: PlanDurationType;
};

const validationSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, t("plans.newPlanForm.form.fields.name_min"))
      .required(t("plans.newPlanForm.form.fields.name_required")),
    description: Yup.string(),
    difficulty: Yup.mixed<PlanDifficulty>()
      .required(t("plans.newPlanForm.form.fields.difficulty_required"))
      .oneOf(Object.values(PlanDifficulty)),
    durationNumber: Yup.number()
      .min(1, t("plans.newPlanForm.form.fields.duration_min"))
      .required(t("plans.newPlanForm.form.fields.duration_required")),
    durationType: Yup.mixed<PlanDurationType>()
      .required(t("plans.newPlanForm.form.fields.durationType_required"))
      .oneOf(Object.values(PlanDurationType)),
  });

const durationTypeOptions = Object.entries(PlanDurationType).map((kv) => ({
  value: kv[1],
  label: kv[0],
}));

const NewPlanForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSubmit = (formValue: FormModel, setSubmitting: (isSubmitting: boolean) => void) => {
    setSubmitting(true);
    dispatch(createPlan(formValue));
    dispatch(toggleNewDialog(false));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        difficulty: PlanDifficulty.BEGINNER,
        durationNumber: 1,
        durationType: PlanDurationType.MONTHS,
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
              label={t("plans.newPlanForm.form.fields.name") || "Name"}
              invalid={errors.name && touched.name}
              errorMessage={errors.name}
            >
              <Field
                type="text"
                autoComplete="off"
                name="name"
                placeholder={t("plans.newPlanForm.form.fields.name_placeholder") || "Enter name"}
                component={Input}
              />
            </FormItem>
            <FormItem
              label={t("plans.newPlanForm.form.fields.difficulty") || "Difficulty"}
              invalid={errors.difficulty && touched.difficulty}
              errorMessage={errors.difficulty}
            >
              <Field name="difficulty">
                {({ field, form }: FieldProps<FormModel>) => (
                  <Radio.Group
                    value={values.difficulty}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                  >
                    <Radio value={PlanDifficulty.BEGINNER} color="emerald-500">
                      {t("plans.newPlanForm.form.fields.difficulty_BEGINNER")}
                    </Radio>
                    <Radio value={PlanDifficulty.INTERMEDIATE} color="yellow-500">
                      {t("plans.newPlanForm.form.fields.difficulty_INTERMEDIATE")}
                    </Radio>
                    <Radio value={PlanDifficulty.ADVANCED} color="red-500">
                      {t("plans.newPlanForm.form.fields.difficulty_ADVANCED")}
                    </Radio>
                  </Radio.Group>
                )}
              </Field>
            </FormItem>
            <FormItem
              label={t("plans.newPlanForm.form.fields.description") || "Description"}
              invalid={errors.description && touched.description}
              errorMessage={errors.description}
            >
              <Field
                textArea
                type="text"
                autoComplete="off"
                name="description"
                placeholder={
                  t("plans.newPlanForm.form.fields.description_placeholder") || "Enter description"
                }
                component={Input}
              />
            </FormItem>
            <FormContainer layout="inline">
              <FormItem
                label={t("plans.newPlanForm.form.fields.duration") || "Duration"}
                invalid={errors.durationNumber && touched.durationNumber}
                errorMessage={errors.durationNumber}
              >
                <Field type="number" autoComplete="off" name="durationNumber" component={Input} />
              </FormItem>
              <FormItem
                invalid={errors.durationType && touched.durationType}
                errorMessage={errors.durationType}
              >
                <Field name="durationType">
                  {({ field, form }: FieldProps<FormModel>) => (
                    <Select
                      field={field}
                      form={form}
                      options={durationTypeOptions}
                      value={durationTypeOptions.filter(
                        (option) => option.value === values.durationType
                      )}
                      onChange={(option) => form.setFieldValue(field.name, option?.value)}
                    />
                  )}
                </Field>
              </FormItem>
            </FormContainer>
            <Button block variant="solid" type="submit">
              {t("plans.newPlanForm.form.submit")}
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default NewPlanForm;
