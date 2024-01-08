/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuthSignOutAction } from "./utils";
import NavBarSide from "./NavBarSide";
import ProductDetail from "./ProductDetail";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Dashboard(props) {
  const { overrides, ...rest } = props;
  const signOutOnClick = useAuthSignOutAction({ global: true });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1818px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Dashboard")}
      {...rest}
    >
      <NavBarSide
        display="flex"
        gap="10px"
        direction="row"
        width="385px"
        height="762px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        {...getOverrideProps(overrides, "NavBarSide")}
      ></NavBarSide>
      <ProductDetail
        display="flex"
        gap="24px"
        direction="row"
        width="1160px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProductDetail")}
      ></ProductDetail>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign out"
        onClick={() => {
          signOutOnClick();
        }}
        {...getOverrideProps(overrides, "SignOut")}
      ></Button>
    </Flex>
  );
}
