/**
 * @generated SignedSource<<cbbdc7f040ad6bbc0641d0049f31451d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthorMutation$variables = {
  birthRegion: string;
  birthYear: string;
  firstName: string;
  image_url?: string | null;
  lastName: string;
};
export type AuthorMutation$data = {
  readonly addAuthor: {
    readonly id: string | null;
  } | null;
};
export type AuthorMutation = {
  response: AuthorMutation$data;
  variables: AuthorMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "birthRegion"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "birthYear"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "firstName"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "image_url"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "birthRegion",
        "variableName": "birthRegion"
      },
      {
        "kind": "Variable",
        "name": "birthYear",
        "variableName": "birthYear"
      },
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "image_url",
        "variableName": "image_url"
      },
      {
        "kind": "Variable",
        "name": "lastName",
        "variableName": "lastName"
      }
    ],
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "addAuthor",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "AuthorMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "87f3908f471db91b06f9a856dd972297",
    "id": null,
    "metadata": {},
    "name": "AuthorMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorMutation(\n  $firstName: String!\n  $lastName: String!\n  $birthRegion: String!\n  $birthYear: String!\n  $image_url: String\n) {\n  addAuthor(firstName: $firstName, lastName: $lastName, birthRegion: $birthRegion, birthYear: $birthYear, image_url: $image_url) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e2b1c0c7b0b21771c267ecd97d80b060";

export default node;
