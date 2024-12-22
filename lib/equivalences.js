"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equivalences;
    }
});
var _necessary = require("necessary");
var _equivalence = /*#__PURE__*/ _interop_require_default(require("./equivalence"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var Equivalences = /*#__PURE__*/ function() {
    function Equivalences(array) {
        _class_call_check(this, Equivalences);
        this.array = array;
    }
    _create_class(Equivalences, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var types = this.array.map(function(equivalence) {
                    var type = equivalence.getType();
                    return type;
                });
                return types;
            }
        },
        {
            key: "pushEquivalences",
            value: function pushEquivalences(equivalences) {
                var array = equivalences.getArray();
                push(this.array, array);
            }
        },
        {
            key: "forEachEquivalence",
            value: function forEachEquivalence(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "separateEquivalences",
            value: function separateEquivalences(equivalencesA, equivalencesB, callback) {
                var arrayA = equivalencesA.getArray(), arrayB = equivalencesB.getArray();
                separate(this.array, arrayA, arrayB, callback);
            }
        },
        {
            key: "addEquivalence",
            value: function addEquivalence(equivalence, context) {
                var equivalenceString = equivalence.asString();
                context.trace("Added the '".concat(equivalenceString, "' equivalence."));
                this.array.push(equivalence);
            }
        },
        {
            key: "removeEquivalence",
            value: function removeEquivalence(equivalence, context) {
                var index = this.array.indexOf(equivalence), start = index, deleteCount = 1, equivalenceString = equivalence.getString();
                context.trace("Removed the '".concat(equivalenceString, "' equivalence."));
                this.array.splice(start, deleteCount);
            }
        },
        {
            key: "findEquivalenceByType",
            value: function findEquivalenceByType(type) {
                var equivalence = this.array.find(function(equivalence) {
                    var equivalenceMatchesType = equivalence.matchType(type);
                    if (equivalenceMatchesType) {
                        return true;
                    }
                }) || null;
                return equivalence;
            }
        },
        {
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                var equivalence = this.array.find(function(equivalence) {
                    var termEquates = equivalence.equateTerm(term);
                    if (termEquates) {
                        return true;
                    }
                }) || null;
                return equivalence;
            }
        },
        {
            key: "findEquivalenceByTermNodes",
            value: function findEquivalenceByTermNodes(termNodes) {
                var equivalence = this.array.find(function(equivalence) {
                    var equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);
                    if (equivalenceMatchesTerms) {
                        return true;
                    }
                }) || null;
                return equivalence;
            }
        },
        {
            key: "separateInitiallyGroundedEquivalences",
            value: function separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context) {
                this.separateEquivalences(remainingEquivalences, initiallyGroundedEquivalences, function(equivalence) {
                    var equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);
                    if (!equivalenceInitiallyGrounded) {
                        return true;
                    }
                });
            }
        },
        {
            key: "separateImplicitlyGroundedEquivalences",
            value: function separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
                this.separateEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, function(equivalence) {
                    var equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);
                    if (!equivalenceImplicitlyGrounded) {
                        return true;
                    }
                });
            }
        },
        {
            key: "separateGroundedTermsAndDefinedVariables",
            value: function separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context) {
                var equivalences = this, groundedEquivalences, remainingEquivalences, initiallyGroundedEquivalences, implicitlyGroundedEquivalences;
                remainingEquivalences = Equivalences.fromNothing();
                initiallyGroundedEquivalences = Equivalences.fromNothing();
                equivalences.separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context);
                var initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.getLength();
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
                        equivalences.separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);
                        groundedEquivalences.pushEquivalences(implicitlyGroundedEquivalences);
                        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength(); ///
                    }
                }
            }
        },
        {
            key: "unifySubstitutions",
            value: function unifySubstitutions(substitutions) {
                var _this = this;
                var substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                return substitutionsUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution) {
                var substitutionUnified = this.array.some(function(equivalence) {
                    var substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalence(equivalence);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return substitutionUnified;
            }
        },
        {
            key: "mergedWith",
            value: function mergedWith(equivalences) {
                var equivalencesA = this, equivalencesB = equivalences;
                equivalences = mergeEquivalences(equivalencesA, equivalencesB); ///
                return equivalences;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var equivalences = new Equivalences(array);
                return equivalences;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], equivalences = new Equivalences(array);
                return equivalences;
            }
        }
    ]);
    return Equivalences;
}();
function mergeEquivalences(equivalencesA, equivalencesB) {
    var typesA = equivalencesA.getTypes(), typesB = equivalencesB.getTypes(), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    compress(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var array = types.map(function(type) {
        var equivalence;
        var equivalenceA = equivalencesA.findEquivalenceByType(type), equivalenceB = equivalencesB.findEquivalenceByType(type); ///
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
    var equivalences = Equivalences.fromArray(array);
    return equivalences;
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
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
    groundedEquivalences.forEachEquivalence(function(groundedEquivalence) {
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4vZXF1aXZhbGVuY2VcIjtcblxuY29uc3QgeyBwdXNoLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBwdXNoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGFycmF5ID0gZXF1aXZhbGVuY2VzLmdldEFycmF5KCk7XG5cbiAgICBwdXNoKHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUEgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlCID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZS5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuYCk7XG5cbiAgICB0aGlzLmFycmF5LnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYXJyYXkuaW5kZXhPZihlcXVpdmFsZW5jZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJyR7ZXF1aXZhbGVuY2VTdHJpbmd9JyBlcXVpdmFsZW5jZS5gKTtcblxuICAgIHRoaXMuYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVR5cGUodHlwZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSA9IGVxdWl2YWxlbmNlLm1hdGNoVHlwZSh0eXBlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtRXF1YXRlcyA9IGVxdWl2YWxlbmNlLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLFxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID1FcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLnB1c2hFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmFycmF5LnNvbWUoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gc3Vic3RpdHV0aW9uLnVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlc0IgPSBlcXVpdmFsZW5jZXM7XG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCKTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCKSB7XG4gIGNvbnN0IHR5cGVzQSA9IGVxdWl2YWxlbmNlc0EuZ2V0VHlwZXMoKSxcbiAgICAgICAgdHlwZXNCID0gZXF1aXZhbGVuY2VzQi5nZXRUeXBlcygpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFycmF5ID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgbGV0IGVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VBID0gZXF1aXZhbGVuY2VzQS5maW5kRXF1aXZhbGVuY2VCeVR5cGUodHlwZSksIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGVxdWl2YWxlbmNlc0IuZmluZEVxdWl2YWxlbmNlQnlUeXBlKHR5cGUpOyAvLy9cblxuICAgIGlmICgoZXF1aXZhbGVuY2VBICE9PSBudWxsKSAmJiAoZXF1aXZhbGVuY2VCICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgbGVmdEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7ICAvLy9cblxuICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5tZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpO1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VBICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQTsgLy8vXG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZXM7XG59XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gZ3JvdW5kZWRUZXJtcywgIC8vL1xuICAgICAgICB2YXJpYWJsZXMgPSBkZWZpbmVkVmFyaWFibGVzOyAvLy9cblxuICB0ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybVZhcmlhYmxlcyA9IHRlcm0uZ2V0VmFyaWFibGVzKGNvbnRleHQpO1xuXG4gICAgdGVybVZhcmlhYmxlcy5mb3JFYWNoKCh0ZXJtVmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gdmFyaWFibGVzLmluY2x1ZGVzKHRlcm1WYXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0ZXJtVmFyaWFibGU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICBncm91bmRlZEVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIkVxdWl2YWxlbmNlcyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwic2VwYXJhdGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsIm1hcCIsImVxdWl2YWxlbmNlIiwidHlwZSIsImdldFR5cGUiLCJwdXNoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZm9yRWFjaEVxdWl2YWxlbmNlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsImFycmF5QSIsImFycmF5QiIsImFkZEVxdWl2YWxlbmNlIiwiY29udGV4dCIsImVxdWl2YWxlbmNlU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImdldFN0cmluZyIsInNwbGljZSIsImZpbmRFcXVpdmFsZW5jZUJ5VHlwZSIsImZpbmQiLCJlcXVpdmFsZW5jZU1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsInRlcm1FcXVhdGVzIiwiZXF1YXRlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsInNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJyZW1haW5pbmdFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwidW5pZnlTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwibWVyZ2VkV2l0aCIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZnJvbUFycmF5IiwidHlwZXNBIiwidHlwZXNCIiwidHlwZUEiLCJ0eXBlQiIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsIm1lcmdlIiwidGVybXMiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwidGVybVZhcmlhYmxlIiwidmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsInZhcmlh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