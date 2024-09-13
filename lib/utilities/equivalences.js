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
    findEquivalenceByTerm: function() {
        return findEquivalenceByTerm;
    },
    findEquivalenceByTermNodes: function() {
        return findEquivalenceByTermNodes;
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
var _equivalence = /*#__PURE__*/ _interop_require_default(require("../equivalence"));
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            equivalence = _equivalence.default.merge(leftEquivalence, rightEquivalence);
        } else if (equivalenceA !== null) {
            equivalence = equivalenceA; ///
        } else if (equivalenceB !== null) {
            equivalence = equivalenceB; ///
        }
        return equivalence;
    });
    return equivalences;
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
function findEquivalenceByTermNodes(equivalences, termNodes) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);
        if (equivalenceMatchesTerms) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4uL2VxdWl2YWxlbmNlXCI7XG5cbmltcG9ydCB7IHB1c2gsIGNvbXByZXNzLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0eXBlc0EgPSB0eXBlc0Zyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgdHlwZXNCID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0IsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzID0gW1xuICAgICAgICAgIC4uLnR5cGVzQSxcbiAgICAgICAgICAuLi50eXBlc0JcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyh0eXBlcywgKHR5cGVBLCB0eXBlQikgPT4ge1xuICAgIGlmICh0eXBlQSA9PT0gdHlwZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZXF1aXZhbGVuY2VzID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgbGV0IGVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VBID0gZmluZEVxdWl2YWxlbmNlQnlUeXBlKGVxdWl2YWxlbmNlc0EsIHR5cGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VCID0gZmluZEVxdWl2YWxlbmNlQnlUeXBlKGVxdWl2YWxlbmNlc0IsIHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkgJiYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQSwgLy8vXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAgLy8vXG5cbiAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUE7IC8vL1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VCICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9KTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUeXBlKGVxdWl2YWxlbmNlcywgdHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSA9IGVxdWl2YWxlbmNlLm1hdGNoVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVRlcm0oZXF1aXZhbGVuY2VzLCB0ZXJtKSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybSh0ZXJtKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMoZXF1aXZhbGVuY2VzLCB0ZXJtTm9kZXMpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7XG5cbiAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAwLFxuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBlcXVpdmFsZW5jZXMgPSByZW1haW5pbmdFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHB1c2goZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyk7XG5cbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7ICAvLy9cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVzID0gZXF1aXZhbGVuY2VzLm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IGdyb3VuZGVkVGVybXMsICAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gZGVmaW5lZFZhcmlhYmxlczsgLy8vXG5cbiAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZXMgPSB0ZXJtLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpO1xuXG4gICAgdGVybVZhcmlhYmxlcy5mb3JFYWNoKCh0ZXJtVmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gdmFyaWFibGVzLmluY2x1ZGVzKHRlcm1WYXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0ZXJtVmFyaWFibGU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gIHNlcGFyYXRlKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gIHNlcGFyYXRlKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaCgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsImZpbmRFcXVpdmFsZW5jZUJ5VHlwZSIsImdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMiLCJtZXJnZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwibG9jYWxDb250ZXh0IiwidHlwZXNBIiwidHlwZXNGcm9tRXF1aXZhbGVuY2VzIiwidHlwZXNCIiwidHlwZXMiLCJjb21wcmVzcyIsInR5cGVBIiwidHlwZUIiLCJlcXVpdmFsZW5jZXMiLCJtYXAiLCJ0eXBlIiwiZXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZUEiLCJlcXVpdmFsZW5jZUIiLCJsZWZ0RXF1aXZhbGVuY2UiLCJyaWdodEVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJtZXJnZSIsImZpbmQiLCJlcXVpdmFsZW5jZU1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwidGVybSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0iLCJtYXRjaFRlcm0iLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyIsIm1hdGNoVGVybU5vZGVzIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwibGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJwdXNoIiwiZ2V0VHlwZSIsInRlcm1zIiwidmFyaWFibGVzIiwiZm9yRWFjaCIsInRlcm1WYXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJ0ZXJtVmFyaWFibGUiLCJ2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwidmFyaWFibGUiLCJzZXBhcmF0ZSIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RGdCQSxxQkFBcUI7ZUFBckJBOztJQVlBQywwQkFBMEI7ZUFBMUJBOztJQXhCQUMscUJBQXFCO2VBQXJCQTs7SUFvQ0FDLG9EQUFvRDtlQUFwREE7O0lBekVBQyxpQkFBaUI7ZUFBakJBOzs7a0VBSlE7cUJBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLFNBQVNBLGtCQUFrQkMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFlBQVk7SUFDMUUsSUFBTUMsU0FBU0Msc0JBQXNCSixlQUFlRSxlQUM5Q0csU0FBU0Qsc0JBQXNCSCxlQUFlQyxlQUM5Q0ksUUFBUSxBQUNOLHFCQUFHSCxlQUNILHFCQUFHRTtJQUdYRSxJQUFBQSxlQUFRLEVBQUNELE9BQU8sU0FBQ0UsT0FBT0M7UUFDdEIsSUFBSUQsVUFBVUMsT0FBTztZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQU1DLGVBQWVKLE1BQU1LLEdBQUcsQ0FBQyxTQUFDQztRQUM5QixJQUFJQztRQUVKLElBQU1DLGVBQWVqQixzQkFBc0JHLGVBQWVZLE1BQU1WLGVBQzFEYSxlQUFlbEIsc0JBQXNCSSxlQUFlVyxNQUFNVjtRQUVoRSxJQUFJLEFBQUNZLGlCQUFpQixRQUFVQyxpQkFBaUIsTUFBTztZQUN0RCxJQUFNQyxrQkFBa0JGLGNBQ2xCRyxtQkFBbUJGLGNBQWUsR0FBRztZQUUzQ0YsY0FBY0ssb0JBQVcsQ0FBQ0MsS0FBSyxDQUFDSCxpQkFBaUJDO1FBQ25ELE9BQU8sSUFBSUgsaUJBQWlCLE1BQU07WUFDaENELGNBQWNDLGNBQWMsR0FBRztRQUNqQyxPQUFPLElBQUlDLGlCQUFpQixNQUFNO1lBQ2hDRixjQUFjRSxjQUFjLEdBQUc7UUFDakM7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVP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