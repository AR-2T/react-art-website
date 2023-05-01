/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArtIdea = /* GraphQL */ `
  subscription OnCreateArtIdea($filter: ModelSubscriptionArtIdeaFilterInput) {
    onCreateArtIdea(filter: $filter) {
      id
      idea
      filter
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArtIdea = /* GraphQL */ `
  subscription OnUpdateArtIdea($filter: ModelSubscriptionArtIdeaFilterInput) {
    onUpdateArtIdea(filter: $filter) {
      id
      idea
      filter
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArtIdea = /* GraphQL */ `
  subscription OnDeleteArtIdea($filter: ModelSubscriptionArtIdeaFilterInput) {
    onDeleteArtIdea(filter: $filter) {
      id
      idea
      filter
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserPosts = /* GraphQL */ `
  subscription OnCreateUserPosts(
    $filter: ModelSubscriptionUserPostsFilterInput
  ) {
    onCreateUserPosts(filter: $filter) {
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
export const onUpdateUserPosts = /* GraphQL */ `
  subscription OnUpdateUserPosts(
    $filter: ModelSubscriptionUserPostsFilterInput
  ) {
    onUpdateUserPosts(filter: $filter) {
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
export const onDeleteUserPosts = /* GraphQL */ `
  subscription OnDeleteUserPosts(
    $filter: ModelSubscriptionUserPostsFilterInput
  ) {
    onDeleteUserPosts(filter: $filter) {
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
