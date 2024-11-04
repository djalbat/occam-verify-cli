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
                var equivalenceString = equivalence.getString();
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
            value: function findEquivalenceByTerm(equivalences, term) {
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
            value: function findEquivalenceByTermNodes(equivalences, termNodes) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4vZXF1aXZhbGVuY2VcIjtcblxuY29uc3QgeyBwdXNoLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBwdXNoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGFycmF5ID0gZXF1aXZhbGVuY2VzLmdldEFycmF5KCk7XG5cbiAgICBwdXNoKHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUEgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlCID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy5hcnJheS5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIHJlbW92ZUVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFycmF5LmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFJlbW92ZWQgdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuYCk7XG5cbiAgICB0aGlzLmFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUeXBlKHR5cGUpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUgPSBlcXVpdmFsZW5jZS5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUeXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0oZXF1aXZhbGVuY2VzLCB0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtRXF1YXRlcyA9IGVxdWl2YWxlbmNlLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMoZXF1aXZhbGVuY2VzLCB0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCA9IGVxdWl2YWxlbmNlLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMsXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPUVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICBsZXQgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gMTtcblxuICAgICAgd2hpbGUgKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAwLFxuICAgICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPiBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgpIHtcbiAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBlcXVpdmFsZW5jZXMgPSByZW1haW5pbmdFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMucHVzaEVxdWl2YWxlbmNlcyhpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuYXJyYXkuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBzdWJzdGl0dXRpb24udW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXNBID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQiA9IGVxdWl2YWxlbmNlcztcblxuICAgIGVxdWl2YWxlbmNlcyA9IG1lcmdlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGVxdWl2YWxlbmNlc0IpIHtcbiAgY29uc3QgdHlwZXNBID0gZXF1aXZhbGVuY2VzQS5nZXRUeXBlcygpLFxuICAgICAgICB0eXBlc0IgPSBlcXVpdmFsZW5jZXNCLmdldFR5cGVzKCksXG4gICAgICAgIHR5cGVzID0gW1xuICAgICAgICAgIC4uLnR5cGVzQSxcbiAgICAgICAgICAuLi50eXBlc0JcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyh0eXBlcywgKHR5cGVBLCB0eXBlQikgPT4ge1xuICAgIGlmICh0eXBlQSA9PT0gdHlwZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYXJyYXkgPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZUEgPSBlcXVpdmFsZW5jZXNBLmZpbmRFcXVpdmFsZW5jZUJ5VHlwZSh0eXBlKSwgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VCID0gZXF1aXZhbGVuY2VzQi5maW5kRXF1aXZhbGVuY2VCeVR5cGUodHlwZSk7IC8vL1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBsZWZ0RXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUEsIC8vL1xuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgIC8vL1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUEgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VBOyAvLy9cbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUI7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfSk7XG5cbiAgY29uc3QgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21BcnJheShhcnJheSk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbn1cblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBncm91bmRlZFRlcm1zLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXM7IC8vL1xuXG4gIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVzID0gdGVybS5nZXRWYXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICB0ZXJtVmFyaWFibGVzLmZvckVhY2goKHRlcm1WYXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModGVybVZhcmlhYmxlKTtcblxuICAgICAgaWYgKCF2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRlcm1WYXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2VzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJzZXBhcmF0ZSIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUeXBlcyIsInR5cGVzIiwibWFwIiwiZXF1aXZhbGVuY2UiLCJ0eXBlIiwiZ2V0VHlwZSIsInB1c2hFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJmb3JFYWNoRXF1aXZhbGVuY2UiLCJjYWxsYmFjayIsImZvckVhY2giLCJzZXBhcmF0ZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwiYXJyYXlBIiwiYXJyYXlCIiwiYWRkRXF1aXZhbGVuY2UiLCJjb250ZXh0IiwiZXF1aXZhbGVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZpbmRFcXVpdmFsZW5jZUJ5VHlwZSIsImZpbmQiLCJlcXVpdmFsZW5jZU1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsInRlcm1FcXVhdGVzIiwiZXF1YXRlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsInNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJyZW1haW5pbmdFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwidW5pZnlTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwibWVyZ2VkV2l0aCIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZnJvbUFycmF5IiwidHlwZXNBIiwidHlwZXNCIiwidHlwZUEiLCJ0eXBlQiIsImVxdWl2YWxlbmNlQSIsImVxdWl2YWxlbmNlQiIsImxlZnRFcXVpdmFsZW5jZSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsIm1lcmdlIiwidGVybXMiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwidGVybVZhcmlhYmxlIiwidmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsInZhcmlhYmxlIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZSIsImdldEdyb3VuZGVkVGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO2tFQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRQyxPQUE2QkMseUJBQWMsQ0FBM0NELE1BQU1FLFdBQXVCRCx5QkFBYyxDQUFyQ0MsVUFBVUMsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRVQsSUFBQSxBQUFNSiw2QkFBTjthQUFNQSxhQUNQSyxLQUFLO2dDQURFTDtRQUVqQixJQUFJLENBQUNLLEtBQUssR0FBR0E7O2tCQUZJTDs7WUFLbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxTQUFDQztvQkFDNUIsSUFBTUMsT0FBT0QsWUFBWUUsT0FBTztvQkFFaEMsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFlBQVk7Z0JBQzNCLElBQU1YLFFBQVFXLGFBQWFWLFFBQVE7Z0JBRW5DTCxLQUFLLElBQUksQ0FBQ0ksS0FBSyxFQUFFQTtZQUNuQjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFFBQVE7Z0JBQUksSUFBSSxDQUFDYixLQUFLLENBQUNjLE9BQU8sQ0FBQ0Q7WUFBVzs7O1lBRTdERSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUosUUFBUTtnQkFDekQsSUFBTUssU0FBU0YsY0FBY2YsUUFBUSxJQUMvQmtCLFNB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