import * as H from "history/index";
import { FormikValues } from "formik";

export interface Props {
  userFormik: FormikValues;
  authMethod: string;
  history: H.History;
}
