/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function TempPost(props) {
  const { UserPost, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="407px"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TempPost")}
    >
      <Image
        width="285px"
        height="285px"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        src={UserPost?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={UserPost?.title}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="300"
          color="rgba(13,26,38,1)"
          lineHeight="4px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={UserPost?.author}
          {...getOverrideProps(overrides, "Author")}
        ></Text>
      </Flex>
    </Flex>
  );
}
