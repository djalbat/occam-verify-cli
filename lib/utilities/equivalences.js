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
    findEquivalenceByTerm: function() {
        return findEquivalenceByTerm;
    },
    findEquivalenceByType: function() {
        return findEquivalenceByType;
    },
    groundedTermsAndDefinedVariablesFromFromEquivalences: function() {
        return groundedTermsAndDefinedVariablesFromFromEquivalences;
    },
    mergeEquivalences: function() {
        return mergeEquivalences;
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
function groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, context) {
    var groundedEquivalences, remainingEquivalences, initiallyGroundedEquivalences, implicitlyGroundedEquivalences;
    remainingEquivalences = [];
    initiallyGroundedEquivalences = [];
    separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, context);
    var initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.length;
    if (initiallyGroundedEquivalencesLength > 0) {
        groundedEquivalences = initiallyGroundedEquivalences; ///
        var implicitlyGroundedEquivalencesLength = 1;
        while(implicitlyGroundedEquivalencesLength > 0){
            var definedVariablesLength = 0, previousDefinedVariablesLength = -1;
            while(definedVariablesLength > previousDefinedVariablesLength){
                previousDefinedVariablesLength = definedVariablesLength; ///
                groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context);
                definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context);
                definedVariablesLength = definedVariables.length;
            }
            equivalences = remainingEquivalences; ///
            remainingEquivalences = [];
            implicitlyGroundedEquivalences = [];
            separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);
            (0, _array.push)(groundedEquivalences, implicitlyGroundedEquivalences);
            implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length; ///
        }
    }
}
function typesFromEquivalences(equivalences, localContext) {
    var types = equivalences.map(function(equivalence) {
        var type = equivalence.getType(localContext);
        return type;
    });
    return types;
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
function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context) {
    var terms = groundedTerms, variables = definedVariables; ///
    terms.forEach(function(term) {
        var termVariables = term.getVariables(context);
        termVariables.forEach(function(termVariable) {
            var variablesIncludesTermVariable = variables.includes(termVariable);
            if (!variablesIncludesTermVariable) {
                var variable = termVariable; ///
                variables.push(variable);
            }
        });
    });
}
function separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, context) {
    (0, _array.separate)(equivalences, remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
        var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);
        if (!equivalenceInitiallyGrounded) {
            return true;
        }
    });
}
function separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
    (0, _array.separate)(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
        var equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);
        if (!equivalenceImplicitlyGrounded) {
            return true;
        }
    });
}
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
    groundedEquivalences.forEach(function(groundedEquivalence) {
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBjb21wcmVzcywgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXNBID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNCLCB0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUEsIC8vL1xuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgIC8vL1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUEgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBOyAvLy9cbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1Ob2Rlc0VxdWFsKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1aXZhbGVuY2VzKSB7XG4gIGxldCB0ZXJtTm9kZXNFcXVhbDtcblxuICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZXNFcXVhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcyk7XG5cbiAgICB0ZXJtTm9kZXNFcXVhbCA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gIH1cblxuICByZXR1cm4gdGVybU5vZGVzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUeXBlID0gZXF1aXZhbGVuY2UubWF0Y2hUeXBlKHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBsZXQgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmxlbmd0aDtcblxuICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICBsZXQgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gMTtcblxuICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gLTE7XG5cbiAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgcHVzaChncm91bmRlZEVxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmxlbmd0aDsgIC8vL1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXMgPSBlcXVpdmFsZW5jZXMubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcykge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBncm91bmRlZFRlcm1zLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXM7IC8vL1xuXG4gIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVzID0gdGVybS5nZXRWYXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICB0ZXJtVmFyaWFibGVzLmZvckVhY2goKHRlcm1WYXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModGVybVZhcmlhYmxlKTtcblxuICAgICAgaWYgKCF2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRlcm1WYXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gIHNlcGFyYXRlKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgc2VwYXJhdGUoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2goKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImFyZVRlcm1Ob2Rlc0VxdWFsIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUeXBlIiwiZ3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXNGcm9tRnJvbUVxdWl2YWxlbmNlcyIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJsb2NhbENvbnRleHQiLCJ0eXBlc0EiLCJ0eXBlc0Zyb21FcXVpdmFsZW5jZXMiLCJ0eXBlc0IiLCJ0eXBlcyIsImNvbXByZXNzIiwidHlwZUEiLCJ0eXBlQiIsImVxdWl2YWxlbmNlcyIsIm1hcCIsInR5cGUiLCJlcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsIm1lcmdlIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1Ob2Rlc0VxdWFsIiwibGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUiLCJtYXRjaCIsInRlcm1Ob2RlcyIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwiZmluZCIsImVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJ0ZXJtIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybSIsIm1hdGNoVGVybSIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiY29udGV4dCIsImdyb3VuZGVkRXF1aXZhbGVuY2VzIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJsZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJkZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwicHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwiZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInB1c2giLCJnZXRUeXBlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1zIiwidmFyaWFibGVzIiwiZm9yRWFjaCIsInRlcm1WYXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJ0ZXJtVmFyaWFibGUiLCJ2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwidmFyaWFibGUiLCJzZXBhcmF0ZSIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5Q2dCQSxpQkFBaUI7ZUFBakJBOztJQWdDQUMscUJBQXFCO2VBQXJCQTs7SUFaQUMscUJBQXFCO2VBQXJCQTs7SUF3QkFDLG9EQUFvRDtlQUFwREE7O0lBakZBQyxpQkFBaUI7ZUFBakJBOzs7cUJBRnlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTQSxrQkFBa0JDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQzFFLElBQU1DLFNBQVNDLHNCQUFzQkosZUFBZUUsZUFDOUNHLFNBQVNELHNCQUFzQkgsZUFBZUMsZUFD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