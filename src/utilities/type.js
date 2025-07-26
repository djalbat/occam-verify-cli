"use strict";

import { objectType } from "../dom/type";

export function stringFromTypeNameNameAndSuperTypes(typeName, superTypes) {
  const superTypesString = superTypesStringFromSuperTypes(superTypes),
        string = (superTypesString !== null) ?
                   `${typeName}:${superTypesString}` :
                     typeName; ///

  return string;
}

export function superTypesStringFromSuperTypes(superTypes) {
  const superTypesString = superTypes.reduce((superTypesString, superType) => {
    if (superType !== objectType) {
      const superTypeString = superType.getString();

      superTypesString = (superTypesString === null) ?
                           `'${superTypeString}'` :
                             `${superTypesString}, '${superTypeString}'`;
    }

    return superTypesString;
  }, null);

  return superTypesString;
}
