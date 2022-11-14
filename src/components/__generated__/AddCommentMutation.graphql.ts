/**
 * @generated SignedSource<<462b9b8ef0bbc0eef5a0e25ee4ef75c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddDiscussionCommentInput = {
  body: string;
  clientMutationId?: string | null;
  discussionId: string;
  replyToId?: string | null;
};
export type AddCommentMutation$variables = {
  connections: ReadonlyArray<string>;
  input: AddDiscussionCommentInput;
};
export type AddCommentMutation$data = {
  readonly addDiscussionComment: {
    readonly comment: {
      readonly " $fragmentSpreads": FragmentRefs<"Comment">;
    } | null;
  } | null;
};
export type AddCommentMutation$rawResponse = {
  readonly addDiscussionComment: {
    readonly comment: {
      readonly author: {
        readonly __typename: string;
        readonly __isNode: string;
        readonly id: string;
        readonly login: string;
      } | null;
      readonly body: string;
      readonly id: string;
    } | null;
  } | null;
};
export type AddCommentMutation = {
  rawResponse: AddCommentMutation$rawResponse;
  response: AddCommentMutation$data;
  variables: AddCommentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddDiscussionCommentPayload",
        "kind": "LinkedField",
        "name": "addDiscussionComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DiscussionComment",
            "kind": "LinkedField",
            "name": "comment",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Comment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddDiscussionCommentPayload",
        "kind": "LinkedField",
        "name": "addDiscussionComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DiscussionComment",
            "kind": "LinkedField",
            "name": "comment",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "body",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "login",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "comment",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "DiscussionCommentEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "351762c13c0ed4f109652ede95a09d85",
    "id": null,
    "metadata": {},
    "name": "AddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation AddCommentMutation(\n  $input: AddDiscussionCommentInput!\n) {\n  addDiscussionComment(input: $input) {\n    comment {\n      ...Comment\n      id\n    }\n  }\n}\n\nfragment Comment on DiscussionComment {\n  body\n  author {\n    __typename\n    login\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aff4145471be86093df7912e3faeaa34";

export default node;
