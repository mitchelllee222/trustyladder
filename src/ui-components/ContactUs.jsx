/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { createContactUs } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import {
  Button,
  CheckboxField,
  Flex,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function ContactUs(props) {
  const { contactUs, overrides, ...rest } = props;
  const buttonOnClick = async () => {
    await client.graphql({
      query: createContactUs.replaceAll("__typename", ""),
      variables: { input: {} },
    });
  };
  return (
    <Flex
      gap="24px"
      direction="column"
      width="823px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "ContactUs")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <TextField
          width="unset"
          height="unset"
          label="First name"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={contactUs?.firstName}
          {...getOverrideProps(overrides, "TextField29766936")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Last name"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={contactUs?.lastName}
          {...getOverrideProps(overrides, "TextField29766938")}
        ></TextField>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="Email address"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={contactUs?.emailAddress}
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <TextAreaField
        width="unset"
        height="unset"
        label="Message"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={contactUs?.message}
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <CheckboxField
        width="unset"
        height="unset"
        label="You agree to our Privacy Policy"
        shrink="0"
        size="default"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        value={contactUs?.acceptPrivacyPolicy}
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Send message"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
