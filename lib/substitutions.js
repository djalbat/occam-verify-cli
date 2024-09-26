"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitutions;
    }
});
var _constants = require("./constants");
var _array = require("./utilities/array");
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
var Substitutions = /*#__PURE__*/ function() {
    function Substitutions(array, savedArray) {
        _class_call_check(this, Substitutions);
        this.array = array;
        this.savedArray = savedArray;
    }
    _create_class(Substitutions, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getSavedArray",
            value: function getSavedArray() {
                return this.savedArray;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "getFirstSubstitution",
            value: function getFirstSubstitution() {
                var firstSubstitution = null;
                var length = this.getLength();
                if (length > 0) {
                    firstSubstitution = (0, _array.first)(this.array);
                }
                return firstSubstitution;
            }
        },
        {
            key: "getMetavariableNodes",
            value: function getMetavariableNodes() {
                var metavariableNodes = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariableNode = substitution.getMetavariableNode();
                    if (metavariableNode !== null) {
                        metavariableNodes.push(metavariableNode);
                    }
                });
                (0, _array.compress)(metavariableNodes, function(metavariableNodeA, metavariableNodeB) {
                    var metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB);
                    if (metavariableNodeAMatchesMetavariableNodeB) {
                        return true;
                    }
                });
                return metavariableNodes;
            }
        },
        {
            key: "findSubstitution",
            value: function findSubstitution(callback) {
                return this.array.find(callback) || null;
            } ///
        },
        {
            key: "someSubstitution",
            value: function someSubstitution(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everySubstitution",
            value: function everySubstitution(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachSubstitution",
            value: function forEachSubstitution(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "findSubstitutions",
            value: function findSubstitutions(callback) {
                var array = (0, _array.find)(this.array, callback), substitutions = Substitutions.fromArray(array);
                return substitutions;
            }
        },
        {
            key: "filterSubstitution",
            value: function filterSubstitution(callback) {
                var array = this.array.filter(callback), substitutions = Substitutions.fromArray(array);
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitution",
            value: function findSimpleSubstitution() {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                });
                return simpleSubstitution;
            }
        },
        {
            key: "findSubstitutionByVariableNode",
            value: function findSubstitutionByVariableNode(variableNode) {
                var substitution = this.findSubstitution(function(substitution) {
                    var variableNodeMatches = substitution.matchVariableNode(variableNode);
                    if (variableNodeMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableNode",
            value: function findSubstitutionByMetavariableNode(metavariableNode) {
                var substitution = this.findSubstitution(function(substitution) {
                    var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariableNode",
            value: function findSubstitutionsByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableNode",
            value: function findSimpleSubstitutionByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode), simpleSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                }), firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(), simpleSubstitution = firstSimpleSubstitution; ///
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableNode",
            value: function findComplexSubstitutionsByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionsByMetavariableNodeAndSubstitutionNode",
            value: function findSubstitutionsByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNodeAndSubstitutionNodeMatch = substitution.matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                    if (metavariableNodeAndSubstitutionNodeMatch) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findComplexSubstitutionByMetavariableNodeAndSubstitutionNode",
            value: function findComplexSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitutions = this.findSubstitutionsByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                }), firstComplexSubstitution = complexSubstitutions.getFirstSubstitution(), complexSubstitution = firstComplexSubstitution; ///
                return complexSubstitution;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution, localContextA, localContextB) {
                this.array.push(substitution);
                var substitutionNode = substitution.getNode(), substitutionString = substitution.asString(localContextA, localContextB);
                localContextB.trace("Added the ".concat(substitutionString, " substitution."), substitutionNode);
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, localContextA, localContextB) {
                var substitutionA = substitution; ///
                (0, _array.prune)(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionNode = substitution.getNode(), substitutionString = substitution.asString(localContextA, localContextB);
                localContextB.trace("Removed the ".concat(substitutionString, " substitution."), substitutionNode);
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, localContextA, localContextB) {
                var _this = this;
                var unifiedWithEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        },
        {
            key: "areResolved",
            value: function areResolved() {
                var resolved = this.everySubstitution(function(substitution) {
                    var substitutionResolved = substitution.isResolved();
                    return substitutionResolved;
                });
                return resolved;
            }
        },
        {
            key: "snapshot",
            value: function snapshot() {
                this.savedArray = _to_consumable_array(this.array);
            }
        },
        {
            key: "rollback",
            value: function rollback(localContextA, localContextB) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                (0, _array.rightDifference)(this.savedArray, array);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, localContextA, localContextB);
                });
                this.array = _to_consumable_array(this.savedArray);
                this.savedArray = null;
            }
        },
        {
            key: "continue",
            value: function _continue() {
                this.savedArray = null;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var string = this.array.reduce(function(string, substitution) {
                    var substitutionString = substitution.asString(localContextA, localContextB);
                    string = string === null ? substitutionString : "".concat(string, ", ").concat(substitutionString);
                    return string;
                }, _constants.EMPTY_STRING);
                if (string !== _constants.EMPTY_STRING) {
                    string = " ".concat(string);
                }
                return string;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var savedArray = [], substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], savedArray = null, substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        }
    ]);
    return Substitutions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpbmQsIGZpcnN0LCBwcnVuZSwgY29tcHJlc3MsIHJpZ2h0RGlmZmVyZW5jZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzLnB1c2gobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyhtZXRhdmFyaWFibGVOb2RlcywgKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhdmFyaWFibGVOb2RlQikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgfSAgLy8vXG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBmaW5kKHRoaXMuYXJyYXksIGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaWx0ZXJTdWJzdGl0dXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMuYXJyYXkuZmlsdGVyKGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0Q29tcGxleFN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IGZpcnN0Q29tcGxleFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYEFkZGVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmAsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgUmVtb3ZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uUmVzb2x2ZWQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgcmlnaHREaWZmZXJlbmNlKHRoaXMuc2F2ZWRBcnJheSwgYXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN0cmluZyA9IChzdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBpZiAoc3RyaW5nICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIHN0cmluZyA9IGAgJHtzdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25zIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJmaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0IiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsInB1c2giLCJjb21wcmVzcyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZCIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImZvckVhY2giLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmcm9tQXJyYXkiLCJmaWx0ZXJTdWJzdGl0dXRpb24iLCJmaWx0ZXIiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb25zIiwiZmlyc3RTaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaXJzdENvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJnZXROb2RlIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJwcnVuZSIsInN1YnN0aXR1dGlvbkIiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJhcmVSZXNvbHZlZCIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwic25hcHNob3QiLCJyb2xsYmFjayIsInJpZ2h0RGlmZmVyZW5jZSIsImNvbnRpbnVlIiwic3RyaW5nIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3lCQUhRO3FCQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUYsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZEUsb0JBQW9CQyxJQUFBQSxZQUFLLEVBQUMsSUFBSSxDQUFDUixLQUFLO2dCQUN0QztnQkFFQSxPQUFPTztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixFQUFFO2dCQUU1QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLFNBQUNDO29CQUN4QixJQUFNQyxtQkFBbUJELGFBQWFFLG1CQUFtQjtvQkFFekQsSUFBSUQscUJBQXFCLE1BQU07d0JBQzdCSCxrQkFBa0JLLElBQUksQ0FBQ0Y7b0JBQ3pCO2dCQUNGO2dCQUVBRyxJQUFBQSxlQUFRLEVBQUNOLG1CQUFtQixTQUFDTyxtQkFBbUJDO29CQUM5QyxJQUFNQyw0Q0FBNENGLGtCQUFrQkcsS0FBSyxDQUFDRjtvQkFFMUUsSUFBSUMsMkNBQTJDO3dCQUM3QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9UO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDdEIsS0FBSyxDQUFDdUIsSUFBSSxDQUFDRCxhQUFhO1lBQU0sRUFBRyxHQUFHOzs7WUFFN0VFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJGLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUN0QixLQUFLLENBQUN5QixJQUFJLENBQUNIO1lBQVc7OztZQUUvREksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkosUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ3RCLEtBQUssQ0FBQzJCLEtBQUssQ0FBQ0w7WUFBVzs7O1lBRWpFWCxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CVyxRQUFRO2dCQUFJLElBQUksQ0FBQ3RCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ047WUFBVzs7O1lBRTlETyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxRQUFRO2dCQUN4QixJQUFNdEIsUUFBUXVCLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUN2QixLQUFLLEVBQUVzQixXQUN6QlEsZ0JBQWdCL0IsQUE1RExBLGNBNERtQmdDLFNBQVMsQ0FBQy9CO2dCQUU5QyxPQUFPOEI7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJWLFFBQVE7Z0JBQ3pCLElBQU10QixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDaUMsTUFBTSxDQUFDWCxXQUMxQlEsZ0JBQWdCL0IsQUFuRUxBLGNBbUVtQmdDLFNBQVMsQ0FBQy9CO2dCQUU5QyxPQUFPOEI7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDZCxnQkFBZ0IsQ0FBQyxTQUFDVDtvQkFDaEQsSUFBTXdCLHFCQUFxQnhCLGFBQWF5QixRQUFRO29CQUVoRCxJQUFJRCxvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JDLFlBQVk7Z0JBQ3pDLElBQU0zQixlQUFlLElBQUksQ0FBQ1MsZ0JBQWdCLENBQUMsU0FBQ1Q7b0JBQzFDLElBQU00QixzQkFBc0I1QixhQUFhNkIsaUJBQWlCLENBQUNGO29CQUUzRCxJQUFJQyxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBTzVCO1lBQ1Q7OztZQUVBOEIsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQzdCLGdCQUFnQjtnQkFDakQsSUFBTUQsZUFBZSxJQUFJLENBQUNTLGdCQUFnQixDQUFDLFNBQUNUO29CQUMxQyxJQUFNK0IsMEJBQTBCL0IsYUFBYWdDLHFCQUFxQixDQUFDL0I7b0JBRW5FLElBQUk4Qix5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBTy9CO1lBQ1Q7OztZQUNBaUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9DQUFvQ2hDLGdCQUFnQjtnQkFDbEQsSUFBTWlCLGdCQUFnQixJQUFJLENBQUNELGlCQUFpQixDQUFDLFNBQUNqQjtvQkFDNUMsSUFBTStCLDBCQUEwQi9CLGFBQWFnQyxxQkFBcUIsQ0FBQy9CO29CQUVuRSxJQUFJOEIseUJBQXlCO3dCQUMzQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9iO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLHlDQUF5Q2pDLGdCQUFnQjtnQkFDdkQsSUFBTWlCLGdCQUFnQixJQUFJLENBQUNlLG1DQUFtQyxDQUFDaEMsbUJBQ3pEa0Msc0JBQXNCakIsY0FBY0Usa0JBQWtCLENBQUMsU0FBQ3BCO29CQUN0RCxJQUFNd0IscUJBQXFCeEIsYUFBYXlCLFFBQVE7b0JBRWhELElBQUlELG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRixJQUNBWSwwQkFBMEJELG9CQUFvQnpDLG9CQUFvQixJQUNsRTZCLHFCQUFxQmEseUJBQXlCLEdBQUc7Z0JBRXZELE9BQU9iO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsMkNBQTJDcEMsZ0JBQWdCO2dCQUN6RCxJQUFNaUIsZ0JBQWdCLElBQUksQ0FBQ2UsbUNBQW1DLENBQUNoQyxtQkFDekRxQyx1QkFBdUJwQixjQUFjRSxrQkFBa0IsQ0FBQyxTQUFDcEI7b0JBQ3ZELElBQU11QyxzQkFBc0J2QyxhQUFhd0MsU0FBUztvQkFFbEQsSUFBSUQscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdURBQXVEeEMsZ0JBQWdCLEVBQUV5QyxnQkFBZ0I7Z0JBQ3ZGLElBQU14QixnQkFBZ0IsSUFBSSxDQUFDRCxpQkFBaUIsQ0FBQyxTQUFDakI7b0JBQzVDLElBQU0yQywyQ0FBMkMzQyxhQUFhNEMsd0NBQXdDLENBQUMzQyxrQkFBa0J5QztvQkFFekgsSUFBSUMsMENBQTBDO3dCQUM1QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU96QjtZQUNUOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSw2REFBNkQ1QyxnQkFBZ0IsRUFBRXlDLGdCQUFnQjtnQkFDN0YsSUFBTXhCLGdCQUFnQixJQUFJLENBQUN1QixzREFBc0QsQ0FBQ3hDLGtCQUFrQnlDLG1CQUM5RkosdUJBQXVCcEIsY0FBY0Usa0JBQWtCLENBQUMsU0FBQ3BCO29CQUN2RCxJQUFNdUMsc0JBQXNCdkMsYUFBYXdDLFNBQVM7b0JBRWxELElBQUlELHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRixJQUNBTywyQkFBMkJSLHFCQUFxQjVDLG9CQUFvQixJQUNwRXFELHNCQUFzQkQsMEJBQTBCLEdBQUc7Z0JBRXpELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCaEQsWUFBWSxFQUFFaUQsYUFBYSxFQUFFQyxhQUFhO2dCQUN4RCxJQUFJLENBQUM5RCxLQUFLLENBQUNlLElBQUksQ0FBQ0g7Z0JBRWhCLElBQU0wQyxtQkFBbUIxQyxhQUFhbUQsT0FBTyxJQUN2Q0MscUJBQXFCcEQsYUFBYXFELFFBQVEsQ0FBQ0osZUFBZUM7Z0JBRWhFQSxjQUFjSSxLQUFLLENBQUMsQUFBQyxhQUErQixPQUFuQkYsb0JBQW1CLG1CQUFpQlY7WUFDdkU7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CdkQsWUFBWSxFQUFFaUQsYUFBYSxFQUFFQyxhQUFhO2dCQUMzRCxJQUFNTSxnQkFBZ0J4RCxjQUFjLEdBQUc7Z0JBRXZDeUQsSUFBQUEsWUFBSyxFQUFDLElBQUksQ0FBQ3JFLEtBQUssRUFBRSxTQUFDWTtvQkFDakIsSUFBTTBELGdCQUFnQjFELGNBQWMsR0FBRztvQkFFdkMsSUFBSXdELGtCQUFrQkUsZUFBZTt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNaEIsbUJBQW1CMUMsYUFBYW1ELE9BQU8sSUFDdkNDLHFCQUFxQnBELGFBQWFxRCxRQUFRLENBQUNKLGVBQWVDO2dCQUVoRUEsY0FBY0ksS0FBSyxDQUFDLEFBQUMsZUFBaUMsT0FBbkJGLG9CQUFtQixtQkFBaUJWO1lBQ3pFOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFlBQVksRUFBRVgsYUFBYSxFQUFFQyxhQUFhOztnQkFDOUQsSUFBTVcsMEJBQTBCLElBQUksQ0FBQy9DLGlCQUFpQixDQUFDLFNBQUNkO29CQUN0RCxJQUFNa0IsdUJBQ0E0QyxxQ0FBcUM5RCxhQUFhMkQscUJBQXFCLENBQUNDLGNBQWMxQyxlQUFlK0IsZUFBZUM7b0JBRTFILElBQUlZLG9DQUFvQzt3QkFDdEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDbEQsaUJBQWlCLENBQUMsU0FBQ2Q7b0JBQ3ZDLElBQU1pRSx1QkFBdUJqRSxhQUFha0UsVUFBVTtvQkFFcEQsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUM5RSxVQUFVLEdBQ2IscUJBQUcsSUFBSSxDQUFDRCxLQUFLO1lBRWpCOzs7WUFFQWdGLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTbkIsYUFBYSxFQUFFQyxhQUFhOztnQkFDbkMsSUFBTTlELFFBQ0oscUJBQUcsSUFBSSxDQUFDQSxLQUFLO2dCQUdmaUYsSUFBQUEsc0JBQWUsRUFBQyxJQUFJLENBQUNoRixVQUFVLEVBQUVEO2dCQUVqQ0EsTUFBTTRCLE9BQU8sQ0FBQyxTQUFDaEI7b0JBQ2IsTUFBS3VELGtCQUFrQixDQUFDdkQsY0FBY2lELGVBQWVDO2dCQUN2RDtnQkFFQSxJQUFJLENBQUM5RCxLQUFLLEdBQ1IscUJBQUcsSUFBSSxDQUFDQyxVQUFVO2dCQUdwQixJQUFJLENBQUNBLFVBQVUsR0FBRztZQUNwQjs7O1lBRUFpRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDakYsVUFBVSxHQUFHO1lBQ3BCOzs7WUFFQWdFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSixhQUFhLEVBQUVDLGFBQWE7Z0JBQ25DLElBQUlxQixTQUFTLElBQUksQ0FBQ25GLEtBQUssQ0FBQ29GLE1BQU0sQ0FBQyxTQUFDRCxRQUFRdkU7b0JBQ3RDLElBQU1vRCxxQkFBcUJwRCxhQUFhcUQsUUFBUSxDQUFDSixlQUFlQztvQkFFaEVxQixTQUFTLEFBQUNBLFdBQVcsT0FDVm5CLHFCQUNFLEFBQUMsR0FBYUEsT0FBWG1CLFFBQU8sTUFBdUIsT0FBbkJuQjtvQkFFM0IsT0FBT21CO2dCQUNULEdBQUdFLHVCQUFZO2dCQUVmLElBQUlGLFdBQVdFLHVCQUFZLEVBQUU7b0JBQzNCRixTQUFTLEFBQUMsSUFBVSxPQUFQQTtnQkFDZjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9wRCxLQUFBQTttQkFBUCxTQUFPQSxVQUFVL0IsS0FBSztnQkFDcEIsSUFBTUMsYUFBYSxFQUFFLEVBQ2Y2QixnQkFBZ0IsSUEvUUwvQixjQStRdUJDLE9BQU9DO2dCQUUvQyxPQUFPNkI7WUFDVDs7O1lBRU93RCxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNdEYsUUFBUSxFQUFFLEVBQ1ZDLGFBQWEsTUFDYjZCLGdCQUFnQixJQXZSTC9CLGNBdVJ1QkMsT0FBT0M7Z0JBRS9DLE9BQU82QjtZQUNUOzs7V0ExUm1CL0IifQ==