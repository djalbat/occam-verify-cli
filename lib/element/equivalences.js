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
var _elements = require("../elements");
var _term = require("./term");
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
var _default = (0, _elements.define)(/*#__PURE__*/ function() {
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
    groundedTerms.forEach(function(groundedTerm) {
        var term = groundedTerm, variables = (0, _term.variablesFromTerm)(term, context);
        variables.forEach(function(variable) {
            var definedVariablesIncludesTermVariable = definedVariables.includes(variable);
            if (!definedVariablesIncludesTermVariable) {
                var definedVariable = variable; ///
                definedVariables.push(definedVariable);
            }
        });
    });
}
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
    groundedEquivalences.forEachEquivalence(function(groundedEquivalence) {
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVRlcm0gfSBmcm9tIFwiLi90ZXJtXCI7XG5cbmNvbnN0IHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2VzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0VHlwZXMoKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmFycmF5Lm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKCk7XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGFycmF5ID0gZXF1aXZhbGVuY2VzLmdldEFycmF5KCk7XG5cbiAgICBwdXNoKHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIHNvbWVFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdGVybUVxdWF0ZXMgPSBlcXVpdmFsZW5jZS5lcXVhdGVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAodGVybUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKCk7IC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IG1lcmdlZEVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlZEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIG1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgbGV0IG1lcmdlZEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2U7IC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UuaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpO1xuXG4gICAgICBpZiAobWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSkge1xuICAgICAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2U7ICAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXNBQXJyYXkgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQkFycmF5ID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgZXF1aXZhbGVuY2VzQUFycmF5LCBlcXVpdmFsZW5jZXNCQXJyYXksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2VzID0gdGhpcyxcbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9RXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRUZXJtcy5mb3JFYWNoKChncm91bmRlZFRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtID0gZ3JvdW5kZWRUZXJtLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGUgPSB2YXJpYWJsZTsgIC8vL1xuXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMucHVzaChkZWZpbmVkVmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMuZm9yRWFjaEVxdWl2YWxlbmNlKChncm91bmRlZEVxdWl2YWxlbmNlKSA9PiB7XG4gICAgZ3JvdW5kZWRFcXVpdmFsZW5jZS5nZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzZXBhcmF0ZSIsImRlZmluZSIsIkVxdWl2YWxlbmNlcyIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUeXBlcyIsInR5cGVzIiwibWFwIiwiZXF1aXZhbGVuY2UiLCJ0eXBlIiwiZ2V0VHlwZSIsImFkZEVxdWl2YWxlbmNlIiwiYWRkRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwic29tZUVxdWl2YWxlbmNlIiwiY2FsbGJhY2siLCJzb21lIiwiZXZlcnlFcXVpdmFsZW5jZSIsImV2ZXJ5IiwiZm9yRWFjaEVxdWl2YWxlbmNlIiwiZm9yRWFjaCIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kIiwidGVybUVxdWF0ZXMiLCJlcXVhdGVUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtcyIsIm1hdGNoVGVybU5vZGVzIiwibWVyZ2VkV2l0aCIsIm1lcmdlZEVxdWl2YWxlbmNlcyIsImNsb25lIiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZnJvbU5vdGhpbmciLCJtZXJnZWRFcXVpdmFsZW5jZSIsIm1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UiLCJpc0Rpc2pvaW50RnJvbSIsInNlcGFyYXRlRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJlcXVpdmFsZW5jZXNBQXJyYXkiLCJlcXVpdmFsZW5jZXNCQXJyYXkiLCJzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJjb250ZXh0IiwiZXF1aXZhbGVuY2VJbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsImRlZmluZWRWYXJpYWJsZXMiLCJlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJncm91bmRlZEVxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsInByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0Zyb21Hcm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRUZXJtIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwiZGVmaW5lZFZhcmlhYmxlIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZSIs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