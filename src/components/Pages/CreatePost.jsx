import { Flex } from '@aws-amplify/ui-react'
import React, {useState} from 'react'
import { CreatePosts} from "../../ui-components"
import { DataStore } from '@aws-amplify/datastore';
import { UserPosts } from "../../models";
import { Storage } from "aws-amplify";
import { toast } from 'react-toastify';
import config from '../../aws-exports'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

function CreatePost() {
  const authorField = "PP";
  const titleField = useRef(null);
  const descField = useRef(null);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Drop your file here.");
  var [isLoading, setIsLoading] = useState(false);

  const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

  async function onChange(e){
    setFile(e.target.files[0]);
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
    try {
      await DataStore.save(
        new UserPosts({
          author: authorField,
          title: titleField.current.value,
          description: descField.current.value,
          image: url
        })
      );
      console.log("Post saved successfully!");
      console.log("Image URL: " + url);
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  return (
    // <div><CreatePosts /></div>
      <form>
        <div class="form-group">
          <label for="title">Title of Post</label>
          <input type="text" class="form-control" ref={titleField} id="inputTitle" placeholder="Starry Night" width="32"/>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" ref={descField} rows="5" id="comment" placeholder = "Lorem ipsum"/>
        </div>
        <div class="form-group">
          <input type="file" onChange={onChange} class="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <button 
          type="submit" 
          class="btn btn-primary" 
          onClick={uploadImage}>Submit
        </button>
      </form>
  )
}

export default CreatePost