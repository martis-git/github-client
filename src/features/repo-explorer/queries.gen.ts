/** @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import * as Types from '../../models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type RepoDefaultBranchQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type RepoDefaultBranchQuery = { readonly repository?: Types.Maybe<{ readonly id: string, readonly defaultBranchRef?: Types.Maybe<{ readonly name: string }> }> };

export type RepoBranchInfoQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
  qualifiedName: Types.Scalars['String'];
  expression: Types.Scalars['String'];
}>;


export type RepoBranchInfoQuery = { readonly repository?: Types.Maybe<{ readonly id: string, readonly url: any, readonly ref?: Types.Maybe<{ readonly name: string, readonly target?: Types.Maybe<{ readonly id: string, readonly messageHeadline: string, readonly author?: Types.Maybe<{ readonly date?: Types.Maybe<any>, readonly user?: Types.Maybe<{ readonly avatarUrl: any, readonly login: string }> }> }> }>, readonly object?: Types.Maybe<{ readonly entries?: Types.Maybe<ReadonlyArray<{ readonly name: string, readonly extension?: Types.Maybe<string>, readonly type: string }>> }>, readonly refs?: Types.Maybe<{ readonly nodes?: Types.Maybe<ReadonlyArray<Types.Maybe<{ readonly name: string, readonly prefix: string }>>> }> }> };


export const RepoDefaultBranchDocument = gql`
    query RepoDefaultBranch($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    id
    defaultBranchRef {
      name
    }
  }
}
    `;

/**
 * __useRepoDefaultBranchQuery__
 *
 * To run a query within a React component, call `useRepoDefaultBranchQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepoDefaultBranchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepoDefaultBranchQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRepoDefaultBranchQuery(baseOptions?: Apollo.QueryHookOptions<RepoDefaultBranchQuery, RepoDefaultBranchQueryVariables>) {
        return Apollo.useQuery<RepoDefaultBranchQuery, RepoDefaultBranchQueryVariables>(RepoDefaultBranchDocument, baseOptions);
      }
export function useRepoDefaultBranchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepoDefaultBranchQuery, RepoDefaultBranchQueryVariables>) {
          return Apollo.useLazyQuery<RepoDefaultBranchQuery, RepoDefaultBranchQueryVariables>(RepoDefaultBranchDocument, baseOptions);
        }
export type RepoDefaultBranchQueryHookResult = ReturnType<typeof useRepoDefaultBranchQuery>;
export type RepoDefaultBranchLazyQueryHookResult = ReturnType<typeof useRepoDefaultBranchLazyQuery>;
export type RepoDefaultBranchQueryResult = Apollo.QueryResult<RepoDefaultBranchQuery, RepoDefaultBranchQueryVariables>;
export const RepoBranchInfoDocument = gql`
    query RepoBranchInfo($owner: String!, $name: String!, $qualifiedName: String!, $expression: String!) {
  repository(owner: $owner, name: $name) {
    id
    url
    ref(qualifiedName: $qualifiedName) {
      name
      target {
        ... on Commit {
          id
          messageHeadline
          author {
            date
            user {
              avatarUrl(size: 36)
              login
            }
          }
        }
      }
    }
    object(expression: $expression) {
      ... on Tree {
        entries {
          name
          extension
          type
        }
      }
    }
    refs(first: 20, refPrefix: "refs/heads/", orderBy: {field: ALPHABETICAL, direction: ASC}) {
      nodes {
        name
        prefix
      }
    }
  }
}
    `;

/**
 * __useRepoBranchInfoQuery__
 *
 * To run a query within a React component, call `useRepoBranchInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepoBranchInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepoBranchInfoQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      name: // value for 'name'
 *      qualifiedName: // value for 'qualifiedName'
 *      expression: // value for 'expression'
 *   },
 * });
 */
export function useRepoBranchInfoQuery(baseOptions?: Apollo.QueryHookOptions<RepoBranchInfoQuery, RepoBranchInfoQueryVariables>) {
        return Apollo.useQuery<RepoBranchInfoQuery, RepoBranchInfoQueryVariables>(RepoBranchInfoDocument, baseOptions);
      }
export function useRepoBranchInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepoBranchInfoQuery, RepoBranchInfoQueryVariables>) {
          return Apollo.useLazyQuery<RepoBranchInfoQuery, RepoBranchInfoQueryVariables>(RepoBranchInfoDocument, baseOptions);
        }
export type RepoBranchInfoQueryHookResult = ReturnType<typeof useRepoBranchInfoQuery>;
export type RepoBranchInfoLazyQueryHookResult = ReturnType<typeof useRepoBranchInfoLazyQuery>;
export type RepoBranchInfoQueryResult = Apollo.QueryResult<RepoBranchInfoQuery, RepoBranchInfoQueryVariables>;