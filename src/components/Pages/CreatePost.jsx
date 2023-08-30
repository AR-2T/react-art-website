import { Flex } from '@aws-amplify/ui-react'
import React, {useState} from 'react'
import { CreatePosts} from "../../ui-components"

import { Storage, Auth } from "aws-amplify";
import { toast } from 'react-toastify';
import config from '../../aws-exports'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import './createPost.css';
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { API } from "aws-amplify";
import { createUserPosts } from '../../graphql/mutations';

function CreatePost() {
  const authorField = "PP";
  const titleField = useRef(null);
  const descField = useRef(null);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Drop your file here.");
  var [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { route } = useAuthenticator(context => [context.route]);

  const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

  async function onChange(e){
    setFile(e.target.files[0]);
  }

  if (route !== 'authenticated' ) {
    navigate("/login");
  }
  
  async function uploadImage(e){
    e.preventDefault();
    setIsLoading(true);
    if(file !== null){
      if(file.type === 'image/jpeg' || file.type ==='image/png'){
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = (`https://${bucket}.s3.${region}.amazonaws.com/public/${key}`);
        //Puts the image file into s3 bucket
        try{
          await Storage.put(key, file, {
            level: 'public',
            contentType: file.type
          })
          setIsLoading(false);
          toast.success('Successfully uploaded: ' + file.name, {
            position: "top-center",
          })     
          saveData(url);
        }
        catch(e){
            console.log('Upload Failed for ' + file.name + " due to: " + e );
            setIsLoading(false);
            toast.error('Upload Failed for ' + file.name + " due to: " + e, {
              position: "top-center",
              }); 
        }
      }
      else{
        toast.error('File type not supported for: ' + file.name + ' Please use PNG/JPEG.', {
          position: "top-center",
          }); 
        setIsLoading(false);
      }  
    }
    else{
      toast.error('File is empty', {
        position: "top-center",
        }); 
      setIsLoading(false);
    }
  }

  async function saveData(url){
    let user = await Auth.currentAuthenticatedUser(); 
    try {
      const newUserPosts = await API.graphql({
        query: createUserPosts,
        variables: {
            input: {
            "author": user.username,
            "title": titleField.current.value,
            "description": descField.current.value,
            "image": url
            }
        }
      });

      console.log("Post saved successfully!");
      console.log("Image URL: " + url);
      navigate("/profile");

    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  return (

    <div className="min-h-screen w-full container mx-auto">

      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[4rem]">
        <form>
          <section className="cardContainer">
            <div className="createSec1">
              <h1 className="subHeadingCreate text-start mb-[0.5rem]">
                New Post
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                Upload your work here to be published in our gallery!
              </p>
            </div>
          </section>

          <section className="cardContainer mt-[2rem]">
            <div className="blockGridSystem createSec1 gap-[2rem]">
              <section className="submissionSection">
                <p className="subHeading2 text-[1.25rem] text-[#2d2d2d] mb-[0.5rem] text-start">
                  Title of Post
                </p>
                <input type="text" class="form-control mb-[1rem]" ref={titleField} id="inputTitle" placeholder="Lorem ipsum"/>

                <div className="submissionSector flex flex-row">
                  <input type="file" onChange={onChange} class="form-control-file w-[65%]" id="exampleFormControlFile1"/>
                  <button type="submit" class="btn btn-primary ml-[1rem] w-[35%] bg-[#2d2d2d] border-transparent rounded-full" onClick={uploadImage}>Submit</button>
                </div>
              </section>

              <section className="descriptionSection">
                <p className="subHeading2 text-[1.25rem] text-[#2d2d2d] mb-[0.5rem] text-start">
                  Description
                </p>
                <textarea class="form-control" ref={descField} rows="5" id="comment" placeholder = "Lorem ipsum"/>
              </section>

            </div>
          </section>
          
        </form>
      </section>

    </div>
  )
}

export default CreatePost