/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HeroLayout1OverridesProps = {
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    "Home 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroLayout1Props = React.PropsWithChildren<Partial<FlexProps> & {
    heroImage?: React.ReactNode;
} & {
    mode?: "Dark" | "Light";
} & {
    overrides?: HeroLayout1OverridesProps | undefined | null;
}>;
export default function HeroLayout1(props: HeroLayout1Props): React.ReactElement;
