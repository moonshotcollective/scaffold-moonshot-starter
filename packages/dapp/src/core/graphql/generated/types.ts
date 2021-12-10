import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contributor = {
  __typename?: 'Contributor';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['String'];
  did: Scalars['String'];
  githubUsername: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['String'];
};

export type JoinAsContributorInput = {
  did: Scalars['String'];
  githubUsername: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Join as a Contributor */
  joinAsContributor?: Maybe<Contributor>;
  /** Sign in a user and notifies the connected clients */
  signIn: User;
  /** Logs out a user an notifies the connected clients */
  signOut: Scalars['Boolean'];
};


export type MutationJoinAsContributorArgs = {
  input: JoinAsContributorInput;
};


export type MutationSignInArgs = {
  input: SiweRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  /** Gets all the contributors */
  getAllContributors?: Maybe<Array<Contributor>>;
  /** Gets a nonce */
  getNonce?: Maybe<Scalars['String']>;
  /** Gets the currently logged in user */
  me?: Maybe<User>;
};

/** EIP-191 signature scheme */
export enum SignatureType {
  PersonalSignature = 'PERSONAL_SIGNATURE'
}

export type SiweMessageInput = {
  address: Scalars['String'];
  chainId: Scalars['String'];
  domain: Scalars['String'];
  expirationTime?: InputMaybe<Scalars['String']>;
  issuedAt: Scalars['String'];
  nonce: Scalars['String'];
  notBefore?: InputMaybe<Scalars['String']>;
  requestId?: InputMaybe<Scalars['String']>;
  resources?: InputMaybe<Array<Scalars['String']>>;
  signature: Scalars['String'];
  statement: Scalars['String'];
  type: SignatureType;
  uri: Scalars['String'];
  version: Scalars['String'];
};

export type SiweRegisterInput = {
  ens?: InputMaybe<Scalars['String']>;
  message: SiweMessageInput;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['String'];
  ens?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['String'];
};

export type JoinAsContributorMutationVariables = Exact<{
  input: JoinAsContributorInput;
}>;


export type JoinAsContributorMutation = { __typename?: 'Mutation', joinAsContributor?: { __typename?: 'Contributor', did: string, githubUsername: string } | null | undefined };

export type GetAllContributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContributorsQuery = { __typename?: 'Query', getAllContributors?: Array<{ __typename?: 'Contributor', did: string, githubUsername: string }> | null | undefined };

export type SignInMutationVariables = Exact<{
  input: SiweRegisterInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', address: string, ens?: string | null | undefined } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', address: string, ens?: string | null | undefined } | null | undefined };

export type GetNonceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNonceQuery = { __typename?: 'Query', getNonce?: string | null | undefined };


export const JoinAsContributorDocument = gql`
    mutation JoinAsContributor($input: JoinAsContributorInput!) {
  joinAsContributor(input: $input) {
    did
    githubUsername
  }
}
    `;
export type JoinAsContributorMutationFn = Apollo.MutationFunction<JoinAsContributorMutation, JoinAsContributorMutationVariables>;

/**
 * __useJoinAsContributorMutation__
 *
 * To run a mutation, you first call `useJoinAsContributorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinAsContributorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinAsContributorMutation, { data, loading, error }] = useJoinAsContributorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJoinAsContributorMutation(baseOptions?: Apollo.MutationHookOptions<JoinAsContributorMutation, JoinAsContributorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinAsContributorMutation, JoinAsContributorMutationVariables>(JoinAsContributorDocument, options);
      }
export type JoinAsContributorMutationHookResult = ReturnType<typeof useJoinAsContributorMutation>;
export type JoinAsContributorMutationResult = Apollo.MutationResult<JoinAsContributorMutation>;
export type JoinAsContributorMutationOptions = Apollo.BaseMutationOptions<JoinAsContributorMutation, JoinAsContributorMutationVariables>;
export const GetAllContributorsDocument = gql`
    query GetAllContributors {
  getAllContributors {
    did
    githubUsername
  }
}
    `;

/**
 * __useGetAllContributorsQuery__
 *
 * To run a query within a React component, call `useGetAllContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContributorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContributorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContributorsQuery, GetAllContributorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContributorsQuery, GetAllContributorsQueryVariables>(GetAllContributorsDocument, options);
      }
export function useGetAllContributorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContributorsQuery, GetAllContributorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContributorsQuery, GetAllContributorsQueryVariables>(GetAllContributorsDocument, options);
        }
export type GetAllContributorsQueryHookResult = ReturnType<typeof useGetAllContributorsQuery>;
export type GetAllContributorsLazyQueryHookResult = ReturnType<typeof useGetAllContributorsLazyQuery>;
export type GetAllContributorsQueryResult = Apollo.QueryResult<GetAllContributorsQuery, GetAllContributorsQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: SiweRegisterInput!) {
  signIn(input: $input) {
    address
    ens
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  signOut
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    address
    ens
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetNonceDocument = gql`
    query GetNonce {
  getNonce
}
    `;

/**
 * __useGetNonceQuery__
 *
 * To run a query within a React component, call `useGetNonceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNonceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNonceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNonceQuery(baseOptions?: Apollo.QueryHookOptions<GetNonceQuery, GetNonceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNonceQuery, GetNonceQueryVariables>(GetNonceDocument, options);
      }
export function useGetNonceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNonceQuery, GetNonceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNonceQuery, GetNonceQueryVariables>(GetNonceDocument, options);
        }
export type GetNonceQueryHookResult = ReturnType<typeof useGetNonceQuery>;
export type GetNonceLazyQueryHookResult = ReturnType<typeof useGetNonceLazyQuery>;
export type GetNonceQueryResult = Apollo.QueryResult<GetNonceQuery, GetNonceQueryVariables>;