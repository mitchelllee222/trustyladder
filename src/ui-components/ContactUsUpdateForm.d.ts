/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactUsUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    message?: string;
    createdAt?: string;
    status?: string;
};
export declare type ContactUsUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsUpdateFormOverridesProps = {
    ContactUsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactUs?: any;
    onSubmit?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onSuccess?: (fields: ContactUsUpdateFormInputValues) => void;
    onError?: (fields: ContactUsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onValidate?: ContactUsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsUpdateForm(props: ContactUsUpdateFormProps): React.ReactElement;
