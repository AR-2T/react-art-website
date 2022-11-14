/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useState} from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { UserPosts } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { toast } from 'react-toastify';
import config from '../aws-exports'
import { v4 as uuidv4 } from 'uuid';

export default function CreatePosts(props) {
  let url;
  const { posts, overrides, ...rest } = props;
  const [textFieldOneValue, setTextFieldOneValue] = useStateMutationAction("");
  const [textFieldTwoValue, setTextFieldTwoValue] = useStateMutationAction("");
  const [textFieldThreeValue, setTextFieldThreeValue] =
    useStateMutationAction("");
  const [textFieldFourValue, setTextFieldFourValue] = useStateMutationAction("");

  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("Drop your file here.");
  var [isLoading, setIsLoading] = useState(false);

  const {
      aws_user_files_s3_bucket_region: region,
      aws_user_files_s3_bucket: bucket
  } = config

  const buttonOnClick = useDataStoreCreateAction({
      fields: {
        author: textFieldTwoValue,
        title: textFieldOneValue,
        description: textFieldThreeValue,
        image: textFieldFourValue
      },
      model: UserPosts,
      schema: schema,
    });

  async function onChange(e) {
    /***Make sure to implement a check so only one image is uploaded***/
    console.log(e.target.value);
    setFiles(e.target.files);
  }

  async function uploadImage(){
    setIsLoading(true);

    await Promise.all(
      [...files].map((file) => {
        if(file.type === 'image/jpeg' || file.type ==='image/png'){
          
          const extension = file.name.split(".")[1];
          const name = file.name.split(".")[0];
          const key = `images/${uuidv4()}${name}.${extension}`;
          url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
          //Puts the image file into s3 bucket
          Storage.put(key, file, {
            level: 'public',
            contentType: file.type
          }).then(result => {
            setIsLoading(false);
            toast.success('Successfully uploaded: ' + file.name, {
              position: "top-center",
            })
          })            
          .then(() =>{    //Do this if file is sucessfully uploaded
            //Implement Button on click function

            console.log(url);
            setTextFieldFourValue(url);
            buttonOnClick();
          })
            .catch((e) => {
              console.log('Upload Failed for ' + file.name + " due to: " + e );
              setIsLoading(false);
              toast.error('Upload Failed for ' + file.name + " due to: " + e, {
                position: "top-center",
                }); 
            })
        }
        
        else{
          toast.error('File type not supported for: ' + file.name + ' Please use PNG/JPEG.', {
            position: "top-center",
            }); 
          setIsLoading(false);
        }  
      })
    );
  }


  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      alignItems="center"
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
                      <input type="file"
            id="avatar" name="avatar" onChange = {onChange}
            accept="image/png, image/jpeg">  
          </input>
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
              uploadImage();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>

        </Flex>
      </Flex>
    </Flex>
  );
}
