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
function groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, localContext) {
    var groundedEquivalences, remainingEquivalences, initiallyGroundedEquivalences, implicitlyGroundedEquivalences;
    remainingEquivalences = [];
    initiallyGroundedEquivalences = [];
    separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, localContext);
    var initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.length;
    if (initiallyGroundedEquivalencesLength > 0) {
        groundedEquivalences = initiallyGroundedEquivalences; ///
        var implicitlyGroundedEquivalencesLength = 1;
        while(implicitlyGroundedEquivalencesLength > 0){
            var definedVariablesLength = 0, previousDefinedVariablesLength = -1;
            while(definedVariablesLength > previousDefinedVariablesLength){
                previousDefinedVariablesLength = definedVariablesLength; ///
                groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, localContext);
                definedVariablesFromGroundedTerms(groundedTerms, definedVariables, localContext);
                definedVariablesLength = definedVariables.length;
            }
            equivalences = remainingEquivalences; ///
            remainingEquivalences = [];
            implicitlyGroundedEquivalences = [];
            separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, localContext);
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
function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, localContext) {
    var terms = groundedTerms, variables = definedVariables; ///
    terms.forEach(function(term) {
        var termVariables = term.getVariables(localContext);
        termVariables.forEach(function(termVariable) {
            var variablesIncludesTermVariable = variables.includes(termVariable);
            if (!variablesIncludesTermVariable) {
                var variable = termVariable; ///
                variables.push(variable);
            }
        });
    });
}
function separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, localContext) {
    (0, _array.separate)(equivalences, remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
        var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(localContext);
        if (!equivalenceInitiallyGrounded) {
            return true;
        }
    });
}
function separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, localContext) {
    (0, _array.separate)(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
        var equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, localContext);
        if (!equivalenceImplicitlyGrounded) {
            return true;
        }
    });
}
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, localContext) {
    groundedEquivalences.forEach(function(groundedEquivalence) {
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, localContext);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBjb21wcmVzcywgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXNBID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNCLCB0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUEsIC8vL1xuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgIC8vL1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUEgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBOyAvLy9cbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1Ob2Rlc0VxdWFsKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1aXZhbGVuY2VzKSB7XG4gIGxldCB0ZXJtTm9kZXNFcXVhbDtcblxuICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZXNFcXVhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcyk7XG5cbiAgICB0ZXJtTm9kZXNFcXVhbCA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gIH1cblxuICByZXR1cm4gdGVybU5vZGVzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUeXBlID0gZXF1aXZhbGVuY2UubWF0Y2hUeXBlKHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7XG5cbiAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAwLFxuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBlcXVpdmFsZW5jZXMgPSByZW1haW5pbmdFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHB1c2goZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyk7XG5cbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7ICAvLy9cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVzID0gZXF1aXZhbGVuY2VzLm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMoZXF1aXZhbGVuY2VzLCB0ZXJtTm9kZXMpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBncm91bmRlZFRlcm1zLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXM7IC8vL1xuXG4gIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVzID0gdGVybS5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIHRlcm1WYXJpYWJsZXMuZm9yRWFjaCgodGVybVZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh0ZXJtVmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybVZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgbG9jYWxDb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2goKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgbG9jYWxDb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXJlVGVybU5vZGVzRXF1YWwiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVR5cGUiLCJncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsImxvY2FsQ29udGV4dCIsInR5cGVzQSIsInR5cGVzRnJvbUVxdWl2YWxlbmNlcyIsInR5cGVzQiIsInR5cGVzIiwiY29tcHJlc3MiLCJ0eXBlQSIsInR5cGVCIiwiZXF1aXZhbGVuY2VzIiwibWFwIiwidHlwZSIsImVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwibWVyZ2UiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVzRXF1YWwiLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwidGVybU5vZGVzIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJmaW5kIiwiZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSIsIm1hdGNoVHlwZSIsInRlcm0iLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtIiwibWF0Y2hUZXJtIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwibGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJwdXNoIiwiZ2V0VHlwZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtcyIsInZhcmlhYmxlcyIsImZvckVhY2giLCJ0ZXJtVmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwidGVybVZhcmlhYmxlIiwidmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsInZhcmlhYmxlIiwic2VwYXJhdGUiLCJlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJncm91bmRlZEVxdWl2YWxlbmNlIiwiZ2V0R3JvdW5kZWRUZXJtcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUNnQkEsaUJBQWlCO2VBQWpCQTs7SUFnQ0FDLHFCQUFxQjtlQUFyQkE7O0lBWkFDLHFCQUFxQjtlQUFyQkE7O0lBd0JBQyxvREFBb0Q7ZUFBcERBOztJQWpGQUMsaUJBQWlCO2VBQWpCQTs7O3FCQUZ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsU0FBU0Esa0JBQWtCQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUMxRSxJ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