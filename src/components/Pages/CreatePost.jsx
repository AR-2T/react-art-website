import { Flex } from '@aws-amplify/ui-react'
import React, {useState} from 'react'
import { CreatePosts} from "../../ui-components"
import { DataStore } from '@aws-amplify/datastore';
import { UserPosts } from "../../models";
import { Storage } from "aws-amplify";
import { toast } from 'react-toastify';
import config from '../../aws-exports'
import { v4 as uuidv4 } from 'uuid';

function CreatePost() {
  let url;
  const authorField = "";
  const titleField = "";
  const descField = "";
  const imageField = "";

  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("Drop your file here.");
  var [isLoading, setIsLoading] = useState(false);

  const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

  async function onChange(e){
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
            imageField(url);
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

  async function buttonOnClick(){
    try {
      await DataStore.save(
        new UserPosts({
          author: authorField,
          title: titleField,
          description: descField,
          image: imageField 
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  return (
    // <div><CreatePosts /></div>
      <form>
        <div class="form-group">
          <label for="title">Title of Post</label>
          <input type="text" class="form-control" id="inputTitle" placeholder="Starry Night" width="32"/>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" rows="5" id="comment" placeholder = "Lorem ipsum"/>
        </div>
        <div class="form-group">
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <button 
          type="submit" 
          class="btn btn-primary" 
          onClick={() => {
            uploadImage();
          }}>Submit
        </button>
      </form>
  )
}

export default CreatePost