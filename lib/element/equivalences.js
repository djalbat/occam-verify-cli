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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVRlcm0gfSBmcm9tIFwiLi90ZXJtXCI7XG5cbmNvbnN0IHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2VzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0VHlwZXMoKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmFycmF5Lm1hcCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKCk7XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcykge1xuICAgIGNvbnN0IGFycmF5ID0gZXF1aXZhbGVuY2VzLmdldEFycmF5KCk7XG5cbiAgICBwdXNoKHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIHNvbWVFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdGVybUVxdWF0ZXMgPSBlcXVpdmFsZW5jZS5lcXVhdGVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAodGVybUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gdGhpcy5hcnJheS5maW5kKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKCk7IC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIG1lcmdlZEVxdWl2YWxlbmNlcyA9IG1lcmdlZEVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlZEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIG1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgbGV0IG1lcmdlZEVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2U7IC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2UuaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpO1xuXG4gICAgICBpZiAobWVyZ2VkRXF1aXZhbGVuY2VEaXNqb2ludEZyb21FcXVpdmFsZW5jZSkge1xuICAgICAgICBlcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVxdWl2YWxlbmNlID0gbWVyZ2VkRXF1aXZhbGVuY2U7ICAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc2VwYXJhdGVFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXNBQXJyYXkgPSBlcXVpdmFsZW5jZXNBLmdldEFycmF5KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQkFycmF5ID0gZXF1aXZhbGVuY2VzQi5nZXRBcnJheSgpO1xuXG4gICAgc2VwYXJhdGUodGhpcy5hcnJheSwgZXF1aXZhbGVuY2VzQUFycmF5LCBlcXVpdmFsZW5jZXNCQXJyYXksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNlcGFyYXRlRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkID0gZXF1aXZhbGVuY2UuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICghZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2VzID0gdGhpcyxcbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyxcbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcztcblxuICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9RXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IG5ldyBFcXVpdmFsZW5jZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkVGVybXMuZm9yRWFjaCgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IGdyb3VuZGVkVGVybSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlID0gdmFyaWFibGU7ICAvLy9cblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzLnB1c2goZGVmaW5lZFZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gIGdyb3VuZGVkRXF1aXZhbGVuY2VzLmZvckVhY2hFcXVpdmFsZW5jZSgoZ3JvdW5kZWRFcXVpdmFsZW5jZSkgPT4ge1xuICAgIGdyb3VuZGVkRXF1aXZhbGVuY2UuZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwic2VwYXJhdGUiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsIm1hcCIsImVxdWl2YWxlbmNlIiwidHlwZSIsImdldFR5cGUiLCJhZGRFcXVpdmFsZW5jZSIsImFkZEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInNvbWVFcXVpdmFsZW5jZSIsImNhbGxiYWNrIiwic29tZSIsImV2ZXJ5RXF1aXZhbGVuY2UiLCJldmVyeSIsImZvckVhY2hFcXVpdmFsZW5jZSIsImZvckVhY2giLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZCIsInRlcm1FcXVhdGVzIiwiZXF1YXRlVGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMiLCJtYXRjaFRlcm1Ob2RlcyIsIm1lcmdlZFdpdGgiLCJtZXJnZWRFcXVpdmFsZW5jZXMiLCJjbG9uZSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImZyb21Ob3RoaW5nIiwibWVyZ2VkRXF1aXZhbGVuY2UiLCJtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlIiwiaXNEaXNqb2ludEZyb20iLCJzZXBhcmF0ZUVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwiZXF1aXZhbGVuY2VzQUFycmF5IiwiZXF1aXZhbGVuY2VzQkFycmF5Iiwic2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiY29udGV4dCIsImVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwic2VwYXJhdGVJbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyIsImdyb3VuZGVkVGVybSIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNUZXJtVmFyaWFibGUiLCJpbmNsdWRlcyIsImRlZmluZWRWYXJpYWJsZSIsImdyb3VuZGVkRXF1aXZhbGVuY2UiLCJn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