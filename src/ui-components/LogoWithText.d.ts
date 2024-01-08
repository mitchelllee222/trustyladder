/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoWithTextOverridesProps = {
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    "trustyladdersmall_logo 4"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3849700?: PrimitiveOverrideProps<IconProps>;
    Vector3849701?: PrimitiveOverrideProps<IconProps>;
    Vector3849702?: PrimitiveOverrideProps<IconProps>;
    Vector3849703?: PrimitiveOverrideProps<IconProps>;
    Vector3849704?: PrimitiveOverrideProps<IconProps>;
    Vector3849705?: PrimitiveOverrideProps<IconProps>;
    Vector3849706?: PrimitiveOverrideProps<IconProps>;
    Vector3849707?: PrimitiveOverrideProps<IconProps>;
    Vector3849708?: PrimitiveOverrideProps<IconProps>;
    Vector3849709?: PrimitiveOverrideProps<IconProps>;
    Vector3849710?: PrimitiveOverrideProps<IconProps>;
    Vector3849711?: PrimitiveOverrideProps<IconProps>;
    Vector3849712?: PrimitiveOverrideProps<IconProps>;
    Vector3849713?: PrimitiveOverrideProps<IconProps>;
    Vector3849714?: PrimitiveOverrideProps<IconProps>;
    Vector3849715?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoWithTextProps = React.PropsWithChildren<Partial<ViewProps> & {
    color?: "brand" | "neutral";
} & {
    overrides?: LogoWithTextOverridesProps | undefined | null;
}>;
export default function LogoWithText(props: LogoWithTextProps): React.ReactElement;
