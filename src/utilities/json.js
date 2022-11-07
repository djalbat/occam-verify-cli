"use strict";

import { arrayUtilities } from "necessary";

import { STRING, NUMBER, BOOLEAN } from "../constants";
import { NULL_JSON_TYPE, ARRAY_JSON_TYPE, OBJECT_JSON_TYPE, PRIMITIVE_JSON_TYPE } from "../jsonTypes";
import { BREAKING_VERSION_CHANGE, ADDITIVE_VERSION_CHANGE, COSMETIC_VERSION_CHANGE } from "../versionChanges";

const { first } = arrayUtilities;

function compareJSON(jsonA, jsonB) {
  let result = BREAKING_VERSION_CHANGE;

  const jsonAType = typeOf(jsonA),
        jsonBType = typeOf(jsonB);

  if (jsonAType === jsonBType) {
    const jsonType = jsonAType; ///

    switch (jsonType) {
      case ARRAY_JSON_TYPE: {
        const arrayA = jsonA, ///
              arrayB = jsonB; ///

        result = compareArrays(arrayA, arrayB);

        break;
      }

      case OBJECT_JSON_TYPE: {
        const objectA = jsonA, ///
              objectB = jsonB; ///

        result = compareObjects(objectA, objectB);

        break;
      }

      case PRIMITIVE_JSON_TYPE: {
        const primitiveA = jsonA, ///
              primitiveB = jsonB; ///

        result = comparePrimitives(primitiveA, primitiveB);

        break;
      }
    }
  }

  return result;
}

module.exports = {
  compareJSON
};

function compareArrays(arrayA, arrayB) {
  let result;

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength === 0) {
    if (arrayBLength === 0) {
      result = COSMETIC_VERSION_CHANGE;
    } else {
      result = ADDITIVE_VERSION_CHANGE;
    }
  } else {
    if (arrayBLength === 0) {
      result = BREAKING_VERSION_CHANGE;
    } else {
      const firstElementA = first(arrayA),  ///
            elementA = firstElementA, ///
            elementB = arrayB.find((elementB) => {
              const jsonA = elementA, ///
                    jsonB = elementB, ///
                    result = compareJSON(jsonA, jsonB);

              if (result === COSMETIC_VERSION_CHANGE) {
                return true;
              }
            }) || null;

      if (elementB !== null) {
        arrayA = deleteElement(arrayA, elementA);

        arrayB = deleteElement(arrayB, elementB);

        result = compareArrays(arrayA, arrayB);
      } else {
        result = BREAKING_VERSION_CHANGE;
      }
    }
  }

  return result;
}

function compareObjects(objectA, objectB) {
  let result;

  const keysA = Object.keys(objectA),
        keysB = Object.keys(objectB),
        keysALength = keysA.length,
        keysBLength = keysB.length;

  if (keysALength === 0) {
    if (keysBLength === 0) {
      result = COSMETIC_VERSION_CHANGE;
    } else {
      result = ADDITIVE_VERSION_CHANGE;
    }
  } else {
    if (keysBLength === 0) {
      result = BREAKING_VERSION_CHANGE;
    } else {
      const firstKeyA = first(keysA),  ///
            keyA = firstKeyA, ///
            keyB = keysB.find((keyB, index) => {
              if (keyA === keyB) {
                const valueA = objectA[keyA],
                      valueB = objectB[keyB],
                      jsonA = valueA, ///
                      jsonB = valueB, ///
                      result = compareJSON(jsonA, jsonB);

                if (result === COSMETIC_VERSION_CHANGE) {  ///
                  return true;
                }
              }
            }) || null;

      if (keyB !== null) {
        objectA = deleteKey(objectA, keyA);

        objectB = deleteKey(objectB, keyB);

        result = compareObjects(objectA, objectB);
      } else {
        result = BREAKING_VERSION_CHANGE;
      }
    }
  }

  return result;
}

function comparePrimitives(primitiveA, primitiveB) {
  let result = BREAKING_VERSION_CHANGE;

  if (primitiveA === primitiveB) {
    result = COSMETIC_VERSION_CHANGE;
  }

  return result;
}

function typeOf(json) {
  let type;

  const _null = isNull(json),
        array = isArray(json),
        object = isObject(json),
        primitive = isPrimitive(json);

  if (_null) {
    type = NULL_JSON_TYPE;
  }

  if (array) {
    type = ARRAY_JSON_TYPE;
  }

  if (object) {
    type = OBJECT_JSON_TYPE;
  }

  if (primitive) {
    type = PRIMITIVE_JSON_TYPE;
  }

  return type;
}

function isNull(json) {
  const _null = (json === null);

  return _null;
}

function isArray(json) {
  const array = Array.isArray(json);

  return array;
}

function isObject(json) {
  const array = isArray(json),
        primitive = isPrimitive(json),
        object = (!array && !primitive);

  return object;
}

function isString(json) {
  const string = ((typeof json) === STRING);

  return string;
}

function isNumber(json) {
  const number = ((typeof json) === NUMBER);

  return number;
}

function isBoolean(json) {
  const boolean = ((typeof json) === BOOLEAN);

  return boolean;
}

function isPrimitive(json) {
  const _null = isNull(json),
        string = isString(json),
        number = isNumber(json),
        boolean = isBoolean(json),
        primitive = (_null || string || number || boolean);

  return primitive;
}

function deleteElement(array, element) {
  const deletedElement = element; ///

  array = array.reduce((array, element) => {  ///
    if (element !== deletedElement) {
      array.push(element);
    }

    return array;
  }, []);

  return array;
}

function deleteKey(object, key) {
  const deletedKey = key, ///
        keys = Object.keys(object),
        values = Object.values(object);

  object = keys.reduce((object, key, index) => {  ///
    if (key !== deletedKey) {
      const value = values[index];

      object[key] = value;
    }

    return object;
  }, {});

  return object;
}
