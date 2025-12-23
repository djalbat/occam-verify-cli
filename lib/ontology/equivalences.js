"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _ontology = require("../ontology");
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
var push = _necessary.arrayUtilities.push, separate = _necessary.arrayUtilities.separate;
var _default = (0, _ontology.define)(/*#__PURE__*/ function() {
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
            key: "addEquivalence",
            value: function addEquivalence(equivalence) {
                this.array.push(equivalence);
            }
        },
        {
            key: "addEquivalences",
            value: function addEquivalences(equivalences) {
                var array = equivalences.getArray();
                push(this.array, array);
            }
        },
        {
            key: "someEquivalence",
            value: function someEquivalence(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everyEquivalence",
            value: function everyEquivalence(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachEquivalence",
            value: function forEachEquivalence(callback) {
                this.array.forEach(callback);
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
            key: "mergedWith",
            value: function mergedWith(equivalences) {
                var mergedEquivalences = this.clone(); ///
                equivalences.forEachEquivalence(function(equivalence) {
                    mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence);
                });
                return mergedEquivalences;
            }
        },
        {
            key: "mergedWithEquivalence",
            value: function mergedWithEquivalence(equivalence) {
                var equivalences = Equivalences.fromNothing();
                var mergedEquivalence = equivalence; ///
                this.forEachEquivalence(function(equivalence) {
                    var mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);
                    if (mergedEquivalenceDisjointFromEquivalence) {
                        equivalences.addEquivalence(equivalence);
                    } else {
                        mergedEquivalence = mergedEquivalence.mergedWith(equivalence);
                    }
                });
                equivalence = mergedEquivalence; ///
                equivalences.addEquivalence(equivalence);
                return equivalences;
            }
        },
        {
            key: "separateEquivalences",
            value: function separateEquivalences(equivalencesA, equivalencesB, callback) {
                var equivalencesAArray = equivalencesA.getArray(), equivalencesBArray = equivalencesB.getArray();
                separate(this.array, equivalencesAArray, equivalencesBArray, callback);
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
                        groundedEquivalences.addEquivalences(implicitlyGroundedEquivalences);
                        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength(); ///
                    }
                }
            }
        },
        {
            key: "clone",
            value: function clone() {
                var array = _to_consumable_array(this.array), equivalences = new Equivalences(array);
                return equivalences;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], equivalences = new Equivalences(array);
                return equivalences;
            }
        }
    ]);
    return Equivalences;
}());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9lcXVpdmFsZW5jZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuY29uc3QgeyBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBlcXVpdmFsZW5jZXMuZ2V0QXJyYXkoKTtcblxuICAgIHB1c2godGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgc29tZUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtRXF1YXRlcyA9IGVxdWl2YWxlbmNlLmVxdWF0ZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICh0ZXJtRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZXMpIHtcbiAgICBsZXQgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IHRoaXMuY2xvbmUoKTsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgbWVyZ2VkRXF1aXZhbGVuY2VzID0gbWVyZ2VkRXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgbWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBsZXQgbWVyZ2VkRXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZTsgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5pc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSk7XG5cbiAgICAgIGlmIChtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlKSB7XG4gICAgICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRFcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZTsgIC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzZXBhcmF0ZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0FBcnJheSA9IGVxdWl2YWxlbmNlc0EuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXNCQXJyYXkgPSBlcXVpdmFsZW5jZXNCLmdldEFycmF5KCk7XG5cbiAgICBzZXBhcmF0ZSh0aGlzLmFycmF5LCBlcXVpdmFsZW5jZXNBQXJyYXksIGVxdWl2YWxlbmNlc0JBcnJheSwgY2FsbGJhY2spO1xuICB9XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLFxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyxcbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzO1xuXG4gICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID1FcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBncm91bmRlZEVxdWl2YWxlbmNlcyA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgbGV0IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChkZWZpbmVkVmFyaWFibGVzTGVuZ3RoID4gcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoKSB7XG4gICAgICAgICAgcHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gZGVmaW5lZFZhcmlhYmxlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzID0gcmVtYWluaW5nRXF1aXZhbGVuY2VzOyAvLy9cblxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgICAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlcyhpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5nZXRMZW5ndGgoKTsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBncm91bmRlZFRlcm1zLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXM7IC8vL1xuXG4gIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVzID0gdGVybS5nZXRWYXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICB0ZXJtVmFyaWFibGVzLmZvckVhY2goKHRlcm1WYXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModGVybVZhcmlhYmxlKTtcblxuICAgICAgaWYgKCF2YXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRlcm1WYXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwic2VwYXJhdGUiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsIm1hcCIsImVxdWl2YWxlbmNlIiwidHlwZSIsImdldFR5cGUiLCJhZGRFcXVpdmFsZW5jZSIsImFkZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInNvbWVFcXVpdmFsZW5jZSIsImNhbGxiYWNrIiwic29tZSIsImV2ZXJ5RXF1aXZhbGVuY2UiLCJldmVyeSIsImZvckVhY2hFcXVpdmFsZW5jZSIsImZvckVhY2giLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZCIsInRlcm1FcXVhdGVzIiwiZXF1YXRlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsIm1lcmdlZFdpdGgiLCJtZXJnZWRFcXVpdmFsZW5jZXMiLCJjbG9uZSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImZyb21Ob3RoaW5nIiwibWVyZ2VkRXF1aXZhbGVuY2UiLCJtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlIiwiaXNEaXNqb2ludEZyb20iLCJzZXBhcmF0ZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwiZXF1aXZhbGVuY2VzQUFycmF5IiwiZXF1aXZhbGVuY2VzQkFycmF5Iiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiY29udGV4dCIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyIsInRlcm1zIiwidmFyaWFibGVzIiwidGVybVZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsInRlcm1WYXJpYWJsZSIsInZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ2YXJpYWJsZSIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJnZXRHcm91bmRlZFRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7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