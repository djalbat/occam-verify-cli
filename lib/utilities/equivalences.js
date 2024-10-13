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
function mergeEquivalences(equivalencesA, equivalencesB, localContext) {
    var typesA = typesFromEquivalences(equivalencesA, localContext), typesB = typesFromEquivalences(equivalencesB, localContext), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    compress(types, function(typeA, typeB) {
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
            push(groundedEquivalences, implicitlyGroundedEquivalences);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuXG5jb25zdCB7IHB1c2gsIGNvbXByZXNzLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXNBID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNCLCB0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUEsIC8vL1xuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgIC8vL1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUEgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBOyAvLy9cbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXMsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUgPSBlcXVpdmFsZW5jZS5tYXRjaFR5cGUodHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUeXBlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVxdWl2YWxlbmNlQnlUZXJtKGVxdWl2YWxlbmNlcywgdGVybSkge1xuICBjb25zdCBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlcy5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0gPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm0odGVybSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKGVxdWl2YWxlbmNlcywgdGVybU5vZGVzKSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXNGcm9tRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCByZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpO1xuXG4gIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMubGVuZ3RoO1xuXG4gIGlmIChpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgd2hpbGUgKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgd2hpbGUgKGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPiBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgpIHtcbiAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBwdXNoKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMubGVuZ3RoOyAgLy8vXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0eXBlcyA9IGVxdWl2YWxlbmNlcy5tYXAoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBncm91bmRlZFRlcm1zLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXM7IC8vL1xuXG4gIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVzID0gdGVybS5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIHRlcm1WYXJpYWJsZXMuZm9yRWFjaCgodGVybVZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh0ZXJtVmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybVZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgcmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICBzZXBhcmF0ZShlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgbG9jYWxDb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2goKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgbG9jYWxDb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJmaW5kRXF1aXZhbGVuY2VCeVR5cGUiLCJncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsInNlcGFyYXRlIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJsb2NhbENvbnRleHQiLCJ0eXBlc0EiLCJ0eXBlc0Zyb21FcXVpdmFsZW5jZXMiLCJ0eXBlc0IiLCJ0eXBlcyIsInR5cGVBIiwidHlwZUIiLCJlcXVpdmFsZW5jZXMiLCJtYXAiLCJ0eXBlIiwiZXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZUEiLCJlcXVpdmFsZW5jZUIiLCJsZWZ0RXF1aXZhbGVuY2UiLCJyaWdodEVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJtZXJnZSIsImZpbmQiLCJlcXVpdmFsZW5jZU1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwidGVybSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0iLCJtYXRjaFRlcm0iLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyIsIm1hdGNoVGVybU5vZGVzIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwibGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJnZXRUeXBlIiwidGVybXMiLCJ2YXJpYWJsZXMiLCJmb3JFYWNoIiwidGVybVZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsInRlcm1WYXJpYWJsZSIsInZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ2YXJpYWJsZSIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5RGdCQSxxQkFBcUI7ZUFBckJBOztJQVlBQywwQkFBMEI7ZUFBMUJBOztJQXhCQUMscUJBQXFCO2VBQXJCQTs7SUFvQ0FDLG9EQUFvRDtlQUFwREE7O0lBekVBQyxpQkFBaUI7ZUFBakJBOzs7eUJBTmU7a0VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBUUMsT0FBNkJDLHlCQUFjLENBQTNDRCxNQUFNRSxXQUF1QkQseUJBQWMsQ0FBckNDLFVBQVVDLFdBQWFGLHlCQUFjLENBQTNCRTtBQUVqQixTQUFTSixrQkFBa0JLLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQzFFLElBQU1DLFNBQVNDLHNCQUFzQkosZUFBZUUsZUFDOUNHLFNBQVNELHNCQUFzQkgsZUFBZUMsZUFDOUNJLFFBQVEsQUFDTixxQkFBR0gsZUFDSCxxQkFBR0U7SUFHWFAsU0FBU1EsT0FBTyxTQUFDQyxPQUFPQztRQUN0QixJQUFJRCxVQUFVQyxPQUFPO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBTUMsZUFBZUgsTUFBTUksR0FBRyxDQUFDLFNBQUNDO1FBQzlCLElBQUlDO1FBRUosSUFBTUMsZUFBZXBCLHNCQUFzQk8sZUFBZVcsTUFBTVQsZUFDMURZLGVBQWVyQixzQkFBc0JRLGVBQWVVLE1BQU1UO1FBRWhFLElBQUksQUFBQ1csaUJBQWlCLFFBQVVDLGlCQUFpQixNQUFPO1lBQ3RELElBQU1DLGtCQUFrQkYsY0FDbEJHLG1CQUFtQkYsY0FBZSxHQUFHO1lBRTNDRixjQUFjSyxvQkFBVyxDQUFDQyxLQUFLLENBQUNILGlCQUFpQkM7UUFDbkQsT0FBTyxJQUFJSCxpQkFB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