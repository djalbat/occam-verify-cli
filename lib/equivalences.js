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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVpdmFsZW5jZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4vZXF1aXZhbGVuY2VcIjtcblxuY29uc3QgeyBwdXNoLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBwdXNoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGFycmF5ID0gZXF1aXZhbGVuY2VzLmdldEFycmF5KCk7XG5cbiAgICBwdXNoKHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGZvckVhY2hFcXVpdmFsZW5jZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUEgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlCID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy5hcnJheS5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIHJlbW92ZUVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFycmF5LmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFJlbW92ZWQgdGhlICcke2VxdWl2YWxlbmNlU3RyaW5nfScgZXF1aXZhbGVuY2UuYCk7XG5cbiAgICB0aGlzLmFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUeXBlKHR5cGUpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUgPSBlcXVpdmFsZW5jZS5tYXRjaFR5cGUodHlwZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUeXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdGVybUVxdWF0ZXMgPSBlcXVpdmFsZW5jZS5lcXVhdGVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAodGVybUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2VzID0gdGhpcyxcbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9RXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5wdXNoRXF1aXZhbGVuY2VzKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyk7XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5hcnJheS5zb21lKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0EgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXNCID0gZXF1aXZhbGVuY2VzO1xuXG4gICAgZXF1aXZhbGVuY2VzID0gbWVyZ2VFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQik7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBuZXcgRXF1aXZhbGVuY2VzKGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBuZXcgRXF1aXZhbGVuY2VzKGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQikge1xuICBjb25zdCB0eXBlc0EgPSBlcXVpdmFsZW5jZXNBLmdldFR5cGVzKCksXG4gICAgICAgIHR5cGVzQiA9IGVxdWl2YWxlbmNlc0IuZ2V0VHlwZXMoKSxcbiAgICAgICAgdHlwZXMgPSBbXG4gICAgICAgICAgLi4udHlwZXNBLFxuICAgICAgICAgIC4uLnR5cGVzQlxuICAgICAgICBdO1xuXG4gIGNvbXByZXNzKHR5cGVzLCAodHlwZUEsIHR5cGVCKSA9PiB7XG4gICAgaWYgKHR5cGVBID09PSB0eXBlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhcnJheSA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGVxdWl2YWxlbmNlc0EuZmluZEVxdWl2YWxlbmNlQnlUeXBlKHR5cGUpLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZUIgPSBlcXVpdmFsZW5jZXNCLmZpbmRFcXVpdmFsZW5jZUJ5VHlwZSh0eXBlKTsgLy8vXG5cbiAgICBpZiAoKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkgJiYgKGVxdWl2YWxlbmNlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGxlZnRFcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQSwgLy8vXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAgLy8vXG5cbiAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcbiAgICB9IGVsc2UgaWYgKGVxdWl2YWxlbmNlQSAhPT0gbnVsbCkge1xuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUE7IC8vL1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VCICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9KTtcblxuICBjb25zdCBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbUFycmF5KGFycmF5KTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2VzO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IGdyb3VuZGVkVGVybXMsICAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gZGVmaW5lZFZhcmlhYmxlczsgLy8vXG5cbiAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZXMgPSB0ZXJtLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIHRlcm1WYXJpYWJsZXMuZm9yRWFjaCgodGVybVZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh0ZXJtVmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybVZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChncm91bmRlZEVxdWl2YWxlbmNlKSA9PiB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZS5nZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZXMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsInNlcGFyYXRlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFR5cGVzIiwidHlwZXMiLCJtYXAiLCJlcXVpdmFsZW5jZSIsInR5cGUiLCJnZXRUeXBlIiwicHVzaEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImZvckVhY2hFcXVpdmFsZW5jZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsInNlcGFyYXRlRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJhcnJheUEiLCJhcnJheUIiLCJhZGRFcXVpdmFsZW5jZSIsImNvbnRleHQiLCJlcXVpdmFsZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlRXF1aXZhbGVuY2UiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZmluZEVxdWl2YWxlbmNlQnlUeXBlIiwiZmluZCIsImVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwidGVybUVxdWF0ZXMiLCJlcXVhdGVUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyIsIm1hdGNoVGVybU5vZGVzIiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImRlZmluZWRWYXJpYWJsZXMiLCJlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJkZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwicHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwiZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJldmVyeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInNvbWUiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJtZXJnZWRXaXRoIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJmcm9tQXJyYXkiLCJ0eXBlc0EiLCJ0eXBlc0IiLCJ0eXBlQSIsInR5cGVCIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwibWVyZ2UiLCJ0ZXJtcyIsInZhcmlhYmxlcyIsInRlcm1WYXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJ0ZXJtVmFyaWFibGUiLCJ2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwidmFyaWFibGUiLCJncm91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