// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FilterType = {
  "PEOPLE": "PEOPLE",
  "PLACES": "PLACES",
  "OBJECTS": "OBJECTS",
  "IDEAS": "IDEAS"
};

const { ArtIdea, UserPosts } = initSchema(schema);

export {
  ArtIdea,
  UserPosts,
  FilterType
};