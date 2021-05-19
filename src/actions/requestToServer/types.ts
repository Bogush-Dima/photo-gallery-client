import {RouteComponentProps} from "react-router-dom";
import {FormikValues} from "formik";

export interface Args extends RouteComponentProps {
    userFomik: FormikValues
    authMethod: string
}