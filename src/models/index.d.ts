import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum FilterType {
  PEOPLE = "PEOPLE",
  PLACES = "PLACES",
  OBJECTS = "OBJECTS",
  IDEAS = "IDEAS",
  ANIMALS = "ANIMALS"
}

type ArtIdeaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ArtIdea {
  readonly id: string;
  readonly idea: string;
  readonly filter: FilterType | keyof typeof FilterType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ArtIdea, ArtIdeaMetaData>);
  static copyOf(source: ArtIdea, mutator: (draft: MutableModel<ArtIdea, ArtIdeaMetaData>) => MutableModel<ArtIdea, ArtIdeaMetaData> | void): ArtIdea;
}

export declare class UserPosts {
  readonly id: string;
  readonly author?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPosts, UserPostsMetaData>);
  static copyOf(source: UserPosts, mutator: (draft: MutableModel<UserPosts, UserPostsMetaData>) => MutableModel<UserPosts, UserPostsMetaData> | void): UserPosts;
}