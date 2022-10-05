/**
 * @generated SignedSource<<9a230b0ad9be2989afc061b7af02cd69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAuthorsNameQuery$variables = {};
export type AppAuthorsNameQuery$data = {
  readonly authors: ReadonlyArray<{
    readonly firstName: string | null;
  } | null> | null;
};
export type AppAuthorsNameQuery = {
  response: AppAuthorsNameQuery$data;
  variables: AppAuthorsNameQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAuthorsNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "authors",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAuthorsNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "authors",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a09dd75ecee321ad7ece2f712ef6a862",
    "id": null,
    "metadata": {},
    "name": "AppAuthorsNameQuery",
    "operationKind": "query",
    "text": "query AppAuthorsNameQuery {\n  authors {\n    firstName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a3a9be57669dd68d53aab06bf504b7b";

export default node;
