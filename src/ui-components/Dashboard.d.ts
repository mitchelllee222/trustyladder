/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarSideProps } from "./NavBarSide";
import { ProductDetailProps } from "./ProductDetail";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type DashboardOverridesProps = {
    Dashboard?: PrimitiveOverrideProps<FlexProps>;
    NavBarSide?: NavBarSideProps;
    ProductDetail?: ProductDetailProps;
    SignOut?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DashboardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardOverridesProps | undefined | null;
}>;
export default function Dashboard(props: DashboardProps): React.ReactElement;
