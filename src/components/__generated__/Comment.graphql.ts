/**
 * @generated SignedSource<<6cc05462d3344740b1a883e3e8ea125e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Comment$data = {
  readonly author: {
    readonly login: string;
  } | null;
  readonly body: string;
  readonly " $fragmentType": "Comment";
};
export type Comment$key = {
  readonly " $data"?: Comment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Comment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Comment",
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
          "name": "login",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DiscussionComment",
  "abstractKey": null
};

(node as any).hash = "ddba3b1c9d1c99eaa390f6b142c54715";

export default node;
