import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { DataStore } from '@aws-amplify/datastore';
import { UserPosts } from "../../models";

const CreatePost2 = () => {
    const authorField = "";
    const titleField = "";
    const descField = "";
    const imageField = "";
    
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
    return(
        <form>
            <div class="form-group">
                <label for="inputTitle">Title</label>
                <input type="text" class="form-control" id="Title"  placeholder="Mona Lisa"/>
            </div>
            <div class="form-group">
                <label for="inputDesc">Description</label>
                <input type="text" class="form-control" id="Desc"  placeholder="A painting by Da Vinci"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Choose Image</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
export default CreatePost2
// await DataStore.save(
//     new UserPosts({
// 		"author": "Lorem ipsum dolor sit amet",
// 		"title": "Lorem ipsum dolor sit amet",
// 		"description": "Lorem ipsum dolor sit amet",
// 		"image": "Lorem ipsum dolor sit amet"
// 	})
// );