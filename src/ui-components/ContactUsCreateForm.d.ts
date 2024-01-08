/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUsCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    message?: string;
};
export declare type ContactUsCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsCreateFormOverridesProps = {
    ContactUsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onSuccess?: (fields: ContactUsCreateFormInputValues) => void;
    onError?: (fields: ContactUsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onValidate?: ContactUsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsCreateForm(props: ContactUsCreateFormProps): React.ReactElement;
