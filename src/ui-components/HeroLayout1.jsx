/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { heroImage, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow: {},
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        "Home 1": {},
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        Eyebrow: { color: "rgba(184,206,249,1)", children: "Full-stack" },
        Heading: {
          color: "rgba(255,255,255,1)",
          children:
            "Build full-stack web and mobile apps in hours. Easy to start, easy to scale",
        },
        Body: {
          color: "rgba(255,255,255,1)",
          children:
            "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed.",
        },
        Message: {},
        Button: { children: "Get started" },
        HeroMessage: {},
        Left: { backgroundColor: "rgba(13,26,38,1)" },
        "Home 1": {},
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,106,191,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Empowering Trade Services"
              {...getOverrideProps(overrides, "Eyebrow")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Streamlining Your Business Operations. Simplified Quoting, Scheduling, and Invoicing for Trade Professionals."
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="TrustyLadder is designed to elevate the efficiency of small trade businesses. From crafting accurate quotes to scheduling jobs and managing invoices, our intuitive app simplifies the day-to-day tasks that keep your business running smoothly. Tailored for trades like HVAC, plumbing, electrical work, and carpentry, TrustyLadder ensures you spend less time on paperwork and more time delivering exceptional service. Embrace a solution that grows with your business, offering the power and flexibility needed for every stage of your journey."
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Learn More"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        children={heroImage}
        {...getOverrideProps(overrides, "Right")}
      ></Flex>
    </Flex>
  );
}
