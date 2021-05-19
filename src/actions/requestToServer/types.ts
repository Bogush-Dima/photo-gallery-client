import * as H from "history/index";
import { FormikValues } from "formik";

export interface Args {
  values: FormikValues;
  authMethod: string;
  history: H.History;
}
