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
        var termEquates = equivalence.equateTerm(term);
        if (termEquates) {
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
    separate(equivalences, remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
        var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);
        if (!equivalenceInitiallyGrounded) {
            return true;
        }
    });
}
function separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
    separate(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuXG5jb25zdCB7IHB1c2gsIGNvbXByZXNzLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCKSB7XG4gIGNvbnN0IHR5cGVzQSA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBKSxcbiAgICAgICAgdHlwZXNCID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0IpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZUIgPSBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzQiwgdHlwZSk7XG5cbiAgICBpZiAoKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkgJiYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQSwgLy8vXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAgLy8vXG5cbiAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUE7IC8vL1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VCICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9KTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUeXBlKGVxdWl2YWxlbmNlcywgdHlwZSkge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUgPSBlcXVpdmFsZW5jZS5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCB0ZXJtRXF1YXRlcyA9IGVxdWl2YWxlbmNlLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICBpZiAodGVybUVxdWF0ZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcykge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGxldCBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpO1xuXG4gIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMubGVuZ3RoO1xuXG4gIGlmIChpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgd2hpbGUgKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgd2hpbGUgKGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPiBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgpIHtcbiAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBlcXVpdmFsZW5jZXMgPSByZW1haW5pbmdFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBwdXNoKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMubGVuZ3RoOyAgLy8vXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMpIHtcbiAgY29uc3QgdHlwZXMgPSBlcXVpdmFsZW5jZXMubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IGdyb3VuZGVkVGVybXMsICAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gZGVmaW5lZFZhcmlhYmxlczsgLy8vXG5cbiAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZXMgPSB0ZXJtLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIHRlcm1WYXJpYWJsZXMuZm9yRWFjaCgodGVybVZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh0ZXJtVmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybVZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgc2VwYXJhdGUoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaCgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJmaW5kRXF1aXZhbGVuY2VCeVR5cGUiLCJncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsInNlcGFyYXRlIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJ0eXBlc0EiLCJ0eXBlc0Zyb21FcXVpdmFsZW5jZXMiLCJ0eXBlc0IiLCJ0eXBlcyIsInR5cGVBIiwidHlwZUIiLCJlcXVpdmFsZW5jZXMiLCJtYXAiLCJ0eXBlIiwiZXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZUEiLCJlcXVpdmFsZW5jZUIiLCJsZWZ0RXF1aXZhbGVuY2UiLCJyaWdodEVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJtZXJnZSIsImZpbmQiLCJlcXVpdmFsZW5jZU1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwidGVybSIsInRlcm1FcXVhdGVzIiwiZXF1YXRlVGVybSIsInRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtTm9kZXMiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImNvbnRleHQiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwibGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJnZXRUeXBlIiwidGVybXMiLCJ2YXJpYWJsZXMiLCJmb3JFYWNoIiwidGVybVZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsInRlcm1WYXJpYWJsZSIsInZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ2YXJpYWJsZSIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5RGdCQSxxQkFBcUI7ZUFBckJBOztJQVlBQywwQkFBMEI7ZUFBMUJBOztJQXhCQUMs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