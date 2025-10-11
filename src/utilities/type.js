"use strict";

import { objectType } from "../dom/type";

export function stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes) {
  let string;

  string = (typePrefixName !== null) ?
             `${typePrefixName}${typeName}`:
               typeName;

  const superTypesString = superTypesStringFromSuperTypes(superTypes);

  if (superTypesString !== null) {
    string = `${string}:${superTypesString}`;
  }

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
