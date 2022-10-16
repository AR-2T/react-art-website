/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function CreatePostTemp(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/create-post" });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CreatePostTemp")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1440px"
        height="548px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "CreatePostTemp34542721")}
      >
        <Flex
          gap="24px"
          direction="column"
          height="172px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Welcome Back!"
            {...getOverrideProps(overrides, "Create")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Main Body")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="This is your profile"
              {...getOverrideProps(
                overrides,
                "Ut enim ad minim veniam quis nostrud"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Click the button down below to create your first post"
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        >
          <Icon
            width="20px"
            height="20px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="none"
            fontSize="20px"
            {...getOverrideProps(overrides, "Button Icon34542732")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Post"
            {...getOverrideProps(overrides, "label")}
          ></Text>
          <Icon
            width="20px"
            height="20px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="none"
            fontSize="20px"
            {...getOverrideProps(overrides, "Button Icon34542734")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
