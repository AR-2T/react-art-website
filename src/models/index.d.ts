import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UserPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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