/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChallengePage = /* GraphQL */ `
  query GetChallengePage($id: ID!) {
    getChallengePage(id: $id) {
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
export const listChallengePages = /* GraphQL */ `
  query ListChallengePages(
    $filter: ModelChallengePageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengePages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      name
      biography
      profilepic
      createdAt
      updatedAt
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        biography
        profilepic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtIdea = /* GraphQL */ `
  query GetArtIdea($id: ID!) {
    getArtIdea(id: $id) {
      id
      idea
      filter
      createdAt
      updatedAt
    }
  }
`;
export const listArtIdeas = /* GraphQL */ `
  query ListArtIdeas(
    $filter: ModelArtIdeaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtIdeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idea
        filter
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPosts = /* GraphQL */ `
  query GetUserPosts($id: ID!) {
    getUserPosts(id: $id) {
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
export const listUserPosts = /* GraphQL */ `
  query ListUserPosts(
    $filter: ModelUserPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        title
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
