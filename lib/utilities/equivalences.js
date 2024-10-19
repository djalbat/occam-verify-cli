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
var _necessary = require("necessary");
var _equivalence = /*#__PURE__*/ _interop_require_default(require("../equivalence"));
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
var push = _necessary.arrayUtilities.push, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
function mergeEquivalences(equivalencesA, equivalencesB) {
    var typesA = typesFromEquivalences(equivalencesA), typesB = typesFromEquivalences(equivalencesB), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    compress(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var equivalences = types.map(function(type) {
        var equivalence;
        var equivalenceA = findEquivalenceByType(equivalencesA, type), equivalenceB = findEquivalenceByType(equivalencesB, type);
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
function findEquivalenceByType(equivalences, type) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesType = equivalence.matchType(type);
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
            push(groundedEquivalences, implicitlyGroundedEquivalences);
            implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length; ///
        }
    }
}
function typesFromEquivalences(equivalences) {
    var types = equivalences.map(function(equivalence) {
        var type = equivalence.getType();
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
    separate(equivalences, remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
        var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(localContext);
        if (!equivalenceInitiallyGrounded) {
            return true;
        }
    });
}
function separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, localContext) {
    separate(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuXG5jb25zdCB7IHB1c2gsIGNvbXByZXNzLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCKSB7XG4gIGNvbnN0IHR5cGVzQSA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBKSxcbiAgICAgICAgdHlwZXNCID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0IpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZUIgPSBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzQiwgdHlwZSk7XG5cbiAgICBpZiAoKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkgJiYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQSwgLy8vXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAgLy8vXG5cbiAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUE7IC8vL1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VCICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9KTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUeXBlKGVxdWl2YWxlbmNlcywgdHlwZSkge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUgPSBlcXVpdmFsZW5jZS5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcykge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzLFxuICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KTtcblxuICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmxlbmd0aDtcblxuICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICBsZXQgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gMTtcblxuICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gLTE7XG5cbiAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgcHVzaChncm91bmRlZEVxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmxlbmd0aDsgIC8vL1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gIGNvbnN0IHR5cGVzID0gZXF1aXZhbGVuY2VzLm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IGdyb3VuZGVkVGVybXMsICAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gZGVmaW5lZFZhcmlhYmxlczsgLy8vXG5cbiAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZXMgPSB0ZXJtLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpO1xuXG4gICAgdGVybVZhcmlhYmxlcy5mb3JFYWNoKCh0ZXJtVmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gdmFyaWFibGVzLmluY2x1ZGVzKHRlcm1WYXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0ZXJtVmFyaWFibGU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gIHNlcGFyYXRlKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gIHNlcGFyYXRlKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaCgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsImZpbmRFcXVpdmFsZW5jZUJ5VHlwZSIsImdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMiLCJtZXJnZUVxdWl2YWxlbmNlcyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwic2VwYXJhdGUiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsInR5cGVzQSIsInR5cGVzRnJvbUVxdWl2YWxlbmNlcyIsInR5cGVzQiIsInR5cGVzIiwidHlwZUEiLCJ0eXBlQiIsImVxdWl2YWxlbmNlcyIsIm1hcCIsInR5cGUiLCJlcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsIm1lcmdlIiwiZmluZCIsImVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJ0ZXJtIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybSIsIm1hdGNoVGVybSIsInRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtTm9kZXMiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsImdyb3VuZGVkRXF1aXZhbGVuY2VzIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJsZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJkZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwicHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwiZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImdldFR5cGUiLCJ0ZXJtcyIsInZhcmlhYmxlcyIsImZvckVhY2giLCJ0ZXJtVmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwidGVybVZhcmlhYmxlIiwidmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsInZhcmlhYmxlIiwiZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiZ3JvdW5kZWRFcXVpdmFsZW5j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