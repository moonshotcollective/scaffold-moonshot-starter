import { gql } from "@apollo/client";

export const CREATE_COURSE_MUTATION = gql`
  mutation JoinAsContributor($input: JoinAsContributorInput!) {
    joinAsContributor(input: $input) {
      did
      githubUsername
    }
  }
`;

export const GET_ALL_COURSES_QUERY = gql`
  query GetAllContributors {
    getAllContributors {
      did
      githubUsername
    }
  }
`;
