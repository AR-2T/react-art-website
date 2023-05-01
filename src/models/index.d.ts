import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum FilterType {
  PEOPLE = "PEOPLE",
  PLACES = "PLACES",
  OBJECTS = "OBJECTS",
  IDEAS = "IDEAS",
  ANIMALS = "ANIMALS"
}

type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtIdeaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUserModel = {
  readonly id: string;
  readonly name?: string | null;
  readonly biography?: string | null;
  readonly profilepic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly id: string;
  readonly name?: string | null;
  readonly biography?: string | null;
  readonly profilepic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel, UserModelMetaData>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}

type EagerArtIdea = {
  readonly id: string;
  readonly idea: string;
  readonly filter: FilterType | keyof typeof FilterType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArtIdea = {
  readonly id: string;
  readonly idea: string;
  readonly filter: FilterType | keyof typeof FilterType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ArtIdea = LazyLoading extends LazyLoadingDisabled ? EagerArtIdea : LazyArtIdea

export declare const ArtIdea: (new (init: ModelInit<ArtIdea, ArtIdeaMetaData>) => ArtIdea) & {
  copyOf(source: ArtIdea, mutator: (draft: MutableModel<ArtIdea, ArtIdeaMetaData>) => MutableModel<ArtIdea, ArtIdeaMetaData> | void): ArtIdea;
}

type EagerUserPosts = {
  readonly id: string;
  readonly author?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserPosts = {
  readonly id: string;
  readonly author?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserPosts = LazyLoading extends LazyLoadingDisabled ? EagerUserPosts : LazyUserPosts

export declare const UserPosts: (new (init: ModelInit<UserPosts, UserPostsMetaData>) => UserPosts) & {
  copyOf(source: UserPosts, mutator: (draft: MutableModel<UserPosts, UserPostsMetaData>) => MutableModel<UserPosts, UserPostsMetaData> | void): UserPosts;
}