import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from "aws-amplify";
import { listChallengePages, getChallengePage } from "../../graphql/queries";

export default function ChallengeDetailsPage() {
  let { challengeID } = useParams();
  const [challengePage, setChallengePage] = useState()

  //Get a specific item
  async function oneChallengePage() {
    const oneChallengePage = await API.graphql({
      query: getChallengePage,
      variables: { id: challengeID }
    });
    if (oneChallengePage !== undefined) {
      setChallengePage(oneChallengePage.data.getChallengePage)
    }
  }

  useEffect(() => {
    oneChallengePage().then(
      console.log(challengePage)
    )
  }, [])

  return (
    < >
      {
        challengePage != undefined ?
        <div>{challengePage.id}</div>
        :
        <div>Loading</div>
      }
    </>
  )
}
