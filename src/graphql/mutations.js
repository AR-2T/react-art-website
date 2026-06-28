/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChallengePage = /* GraphQL */ `
  mutation CreateChallengePage(
    $input: CreateChallengePageInput!
    $condition: ModelChallengePageConditionInput
  ) {
    createChallengePage(input: $input, condition: $condition) {
      id
      name
      image
      description
      created
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChallengePage = /* GraphQL */ `
  mutation UpdateChallengePage(
    $input: UpdateChallengePageInput!
    $condition: ModelChallengePageConditionInput
  ) {
    updateChallengePage(input: $input, condition: $condition) {
      id
      name
      image
      description
      created
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChallengePage = /* GraphQL */ `
  mutation DeleteChallengePage(
    $input: DeleteChallengePageInput!
    $condition: ModelChallengePageConditionInput
  ) {
    deleteChallengePage(input: $input, condition: $condition) {
      id
      name
      image
      description
      created
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createArtIdea = /* GraphQL */ `
  mutation CreateArtIdea(
    $input: CreateArtIdeaInput!
    $condition: ModelArtIdeaConditionInput
  ) {
    createArtIdea(input: $input, condition: $condition) {
      id
      idea
      filter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateArtIdea = /* GraphQL */ `
  mutation UpdateArtIdea(
    $input: UpdateArtIdeaInput!
    $condition: ModelArtIdeaConditionInput
  ) {
    updateArtIdea(input: $input, condition: $condition) {
      id
      idea
      filter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteArtIdea = /* GraphQL */ `
  mutation DeleteArtIdea(
    $input: DeleteArtIdeaInput!
    $condition: ModelArtIdeaConditionInput
  ) {
    deleteArtIdea(input: $input, condition: $condition) {
      id
      idea
      filter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserPosts = /* GraphQL */ `
  mutation CreateUserPosts(
    $input: CreateUserPostsInput!
    $condition: ModelUserPostsConditionInput
  ) {
    createUserPosts(input: $input, condition: $condition) {
      id
      author
      title
      description
      image
      challenge
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserPosts = /* GraphQL */ `
  mutation UpdateUserPosts(
    $input: UpdateUserPostsInput!
    $condition: ModelUserPostsConditionInput
  ) {
    updateUserPosts(input: $input, condition: $condition) {
      id
      author
      title
      description
      image
      challenge
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserPosts = /* GraphQL */ `
  mutation DeleteUserPosts(
    $input: DeleteUserPostsInput!
    $condition: ModelUserPostsConditionInput
  ) {
    deleteUserPosts(input: $input, condition: $condition) {
      id
      author
      title
      description
      image
      challenge
      createdAt
      updatedAt
      __typename
    }
  }
`;
