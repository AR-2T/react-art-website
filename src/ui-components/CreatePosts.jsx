/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { UserPosts } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function CreatePosts(props) {
  const { posts, overrides, ...rest } = props;
  const [textFieldTwoValue, setTextFieldTwoValue] = useStateMutationAction("");
  const [textFieldOneValue, setTextFieldOneValue] = useStateMutationAction("");
  const [textFieldThreeValue, setTextFieldThreeValue] =
    useStateMutationAction("");
  const uploadImageOnClick = useDataStoreUpdateAction({
    fields: {},
    id: posts?.image,
    model: UserPosts,
    schema: schema,
  });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      author: textFieldTwoValue,
      title: textFieldOneValue,
      description: textFieldThreeValue,
      image: textFieldTwoValue,
    },
    model: UserPosts,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CreatePosts")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="640px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Create Post")}
      >
        <Flex
          gap="24px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="24px 24px 24px 24px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="16px"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Profile")}
          >
            <Image
              width="96px"
              height="96px"
              shrink="0"
              position="relative"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "image")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Upload New Image"
              onClick={() => {
                uploadImageOnClick();
              }}
              {...getOverrideProps(overrides, "Upload Image")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Forms")}
          >
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Title"
              placeholder="Mona Lisa"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldOneValue}
              onChange={(event) => {
                setTextFieldOneValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField1")}
            ></TextField>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Author"
              placeholder="Da Vinci"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoValue}
              onChange={(event) => {
                setTextFieldTwoValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField2")}
            ></TextField>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Description"
              placeholder="Painting by guy"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeValue}
              onChange={(event) => {
                setTextFieldThreeValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField3")}
            ></TextField>
          </Flex>
          <Button
            display="flex"
            gap="0"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
