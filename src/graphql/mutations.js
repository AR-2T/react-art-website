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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
