"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areTermNodesEqual: function() {
        return areTermNodesEqual;
    },
    compressDefinedVariables: function() {
        return compressDefinedVariables;
    },
    definedVariablesFromGroundedEquivalences: function() {
        return definedVariablesFromGroundedEquivalences;
    },
    findEquivalenceByTerm: function() {
        return findEquivalenceByTerm;
    },
    findEquivalenceByType: function() {
        return findEquivalenceByType;
    },
    implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables: function() {
        return implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables;
    },
    mergeEquivalences: function() {
        return mergeEquivalences;
    },
    separateEquivalences: function() {
        return separateEquivalences;
    }
});
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function areTermNodesEqual(leftTermNode, rightTermNode, equivalences) {
    var termNodesEqual;
    var leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
    if (leftTermNodeMatchesRightTermNode) {
        termNodesEqual = true;
    } else {
        var termNodes = [
            leftTermNode,
            rightTermNode
        ], equivalence = findEquivalenceByTermNodes(equivalences, termNodes);
        termNodesEqual = equivalence !== null;
    }
    return termNodesEqual;
}
function findEquivalenceByType(equivalences, type, localContext) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesType = equivalence.matchType(type, localContext);
        if (equivalenceMatchesType) {
            return true;
        }
    }) || null;
    return equivalence;
}
function findEquivalenceByTerm(equivalences, term) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesTerm = equivalence.matchTerm(term);
        if (equivalenceMatchesTerm) {
            return true;
        }
    }) || null;
    return equivalence;
}
function mergeEquivalences(equivalencesA, equivalencesB, localContext) {
    var typesA = typesFromEquivalences(equivalencesA, localContext), typesB = typesFromEquivalences(equivalencesB, localContext), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    (0, _array.compress)(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var equivalences = types.map(function(type) {
        var equivalence;
        var equivalenceA = findEquivalenceByType(equivalencesA, type, localContext), equivalenceB = findEquivalenceByType(equivalencesB, type, localContext);
        if (equivalenceA !== null && equivalenceB !== null) {
            var leftEquivalence = equivalenceA, rightEquivalence = equivalenceB; ///
            equivalence = Equivalence.merge(leftEquivalence, rightEquivalence);
        } else if (equivalenceA !== null) {
            equivalence = equivalenceA; ///
        } else if (equivalenceB !== null) {
            equivalence = equivalenceB; ///
        }
        return equivalence;
    });
    return equivalences;
}
function separateEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences) {
    (0, _array.separate)(equivalences, remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
        var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded();
        if (!equivalenceInitiallyGrounded) {
            return true;
        }
    });
}
function compressDefinedVariables(definedVariables) {
    (0, _array.compress)(definedVariables, function(definedVariableA, definedVariableB) {
        if (definedVariableA === definedVariableB) {
            return true;
        }
    });
}
function definedVariablesFromGroundedEquivalences(groundedEquivalences, definedVariables, context) {
    groundedEquivalences.forEach(function(groundedEquivalence) {
        var variables = groundedEquivalence.getVariables(context);
        (0, _array.push)(definedVariables, variables);
    });
}
function implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables(remainingEquivalences, definedVariables) {
    var implicitlyGroundedEquivalences = [];
    (0, _array.filter)(remainingEquivalences, function(remainingEquivalence) {
        var remainingEquivalenceImplicitlyGrounded = remainingEquivalence.isImplicitlyGrounded(definedVariables);
        if (remainingEquivalenceImplicitlyGrounded) {
            var implicitlyGroundedEquivalence = remainingEquivalence; ///
            implicitlyGroundedEquivalences.push(implicitlyGroundedEquivalence);
        }
        if (!remainingEquivalenceImplicitlyGrounded) {
            return true;
        }
    });
    return implicitlyGroundedEquivalences;
}
function findEquivalenceByTermNodes(equivalences, termNodes) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);
        if (equivalenceMatchesTerms) {
            return true;
        }
    }) || null;
    return equivalence;
}
function typesFromEquivalences(equivalences, localContext) {
    var types = equivalences.map(function(equivalence) {
        var type = equivalence.getType(localContext);
        return type;
    });
    return types;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaWx0ZXIsIGNvbXByZXNzLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1Ob2Rlc0VxdWFsKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1aXZhbGVuY2VzKSB7XG4gIGxldCB0ZXJtTm9kZXNFcXVhbDtcblxuICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZXNFcXVhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcyk7XG5cbiAgICB0ZXJtTm9kZXNFcXVhbCA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gIH1cblxuICByZXR1cm4gdGVybU5vZGVzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUeXBlID0gZXF1aXZhbGVuY2UubWF0Y2hUeXBlKHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXNBID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNCLCB0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUEsIC8vL1xuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgIC8vL1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUEgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBOyAvLy9cbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcykge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0RlZmluZWRWYXJpYWJsZXMoZGVmaW5lZFZhcmlhYmxlcykge1xuICBjb21wcmVzcyhkZWZpbmVkVmFyaWFibGVzLCAoZGVmaW5lZFZhcmlhYmxlQSwgZGVmaW5lZFZhcmlhYmxlQikgPT4ge1xuICAgIGlmIChkZWZpbmVkVmFyaWFibGVBID09PSBkZWZpbmVkVmFyaWFibGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBncm91bmRlZEVxdWl2YWxlbmNlcy5mb3JFYWNoKChncm91bmRlZEVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gZ3JvdW5kZWRFcXVpdmFsZW5jZS5nZXRWYXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICBwdXNoKGRlZmluZWRWYXJpYWJsZXMsIHZhcmlhYmxlcyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzRnJvbVJlbWFpbmluZ0VxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzKSB7XG4gIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIGZpbHRlcihyZW1haW5pbmdFcXVpdmFsZW5jZXMsIChyZW1haW5pbmdFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlbWFpbmluZ0VxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gcmVtYWluaW5nRXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcyk7XG5cbiAgICBpZiAocmVtYWluaW5nRXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlID0gcmVtYWluaW5nRXF1aXZhbGVuY2U7IC8vL1xuXG4gICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZW1haW5pbmdFcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xufVxuXG5mdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcykge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVzID0gZXF1aXZhbGVuY2VzLm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cbiJdLCJuYW1lcyI6WyJhcmVUZXJtTm9kZXNFcXVhbCIsImNvbXByZXNzRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVR5cGUiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNGcm9tUmVtYWluaW5nRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsIm1lcmdlRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZXF1aXZhbGVuY2VzIiwidGVybU5vZGVzRXF1YWwiLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsInR5cGUiLCJsb2NhbENvbnRleHQiLCJmaW5kIiwiZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSIsIm1hdGNoVHlwZSIsInRlcm0iLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtIiwibWF0Y2hUZXJtIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJ0eXBlc0EiLCJ0eXBlc0Zyb21FcXVpdmFsZW5jZXMiLCJ0eXBlc0IiLCJ0eXBlcyIsImNvbXByZXNzIiwidHlwZUEiLCJ0eXBlQiIsIm1hcCIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsIm1lcmdlIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJzZXBhcmF0ZSIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZUEiLCJkZWZpbmVkVmFyaWFibGVCIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJjb250ZXh0IiwiZm9yRWFjaCIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJ2YXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJwdXNoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZmlsdGVyIiwicmVtYWluaW5nRXF1aXZhbGVuY2UiLCJyZW1haW5pbmdFcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyIsIm1hdGNoVGVybU5vZGVzIiwiZ2V0VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxpQkFBaUI7ZUFBakJBOztJQTJGQUMsd0JBQXdCO2VBQXhCQTs7SUFRQUMsd0NBQXdDO2VBQXhDQTs7SUFuRUFDLHFCQUFxQjtlQUFyQkE7O0lBWkFDLHFCQUFxQjtlQUFyQkE7O0lBdUZBQywwRUFBMEU7ZUFBMUVBOztJQS9EQUMsaUJBQWlCO2VBQWpCQTs7SUFxQ0FDLG9CQUFvQjtlQUFwQkE7OztxQkFuRmlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxTQUFTUCxrQkFBa0JRLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQ3pFLElBQUlDO0lBRUosSUFBTUMsbUNBQW1DSixhQUFhSyxLQUFLLENBQUNKO0lBRTVELElBQUlHLGtDQUFrQztRQUNwQ0QsaUJBQWlCO0lBQ25CLE9BQU87UUFDTCxJQUFNRyxZQUFZO1lBQ1ZOO1lBQ0FDO1NBQ0QsRUFDRE0sY0FBY0MsMkJBQTJCTixjQUFjSTtRQUU3REgsaUJBQWtCSSxnQkFBZ0I7SUFDcEM7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU1Asc0JBQXNCTSxZQUFZLEVBQUVPLElBQUksRUFBRUMsWUFBWTtJ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