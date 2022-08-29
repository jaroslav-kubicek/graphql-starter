/**
 * @generated SignedSource<<1ae56df716a1ae52b91f71458d09b911>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DashboardQuery$variables = {};
export type DashboardQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
    readonly followers: {
      readonly totalCount: number;
    };
    readonly following: {
      readonly totalCount: number;
    };
    readonly id: string;
    readonly name: string | null;
    readonly twitterUsername: string | null;
  } | null;
};
export type DashboardQuery = {
  response: DashboardQuery$data;
  variables: DashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "login",
        "value": "gaearon"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "twitterUsername",
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "size",
            "value": 100
          }
        ],
        "kind": "ScalarField",
        "name": "avatarUrl",
        "storageKey": "avatarUrl(size:100)"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FollowerConnection",
        "kind": "LinkedField",
        "name": "followers",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FollowingConnection",
        "kind": "LinkedField",
        "name": "following",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": "user(login:\"gaearon\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "143e7137185f4c5242a837e676b7c1c4",
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery {\n  user(login: \"gaearon\") {\n    id\n    name\n    twitterUsername\n    avatarUrl(size: 100)\n    followers {\n      totalCount\n    }\n    following {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "078e73da11d59867fe373fee7ae9dcbd";

export default node;
