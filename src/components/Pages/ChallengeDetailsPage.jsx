import {React, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from "aws-amplify";
import { listChallengePages, getChallengePage } from "../../graphql/queries";

export default async function ChallengeDetailsPage() {
    const {challengeID} = useParams();

    //Get a specific item
    const oneChallengePage = await API.graphql({
        query: getChallengePage,
        variables: { id: challengeID}
    });
  return ( 
  < > 
    <div>{challengeID}</div>
  </>
  )
}
