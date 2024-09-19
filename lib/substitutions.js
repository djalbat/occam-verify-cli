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
            key: "getFirstSubstitution",
            value: function getFirstSubstitution() {
                var firstSubstitution = null;
                var length = this.array.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpbmQsIGZpcnN0LCBwcnVuZSwgY29tcHJlc3MsIHJpZ2h0RGlmZmVyZW5jZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gZmlyc3QodGhpcy5hcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXTtcblxuICAgIHRoaXMuZm9yRWFjaFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMucHVzaChtZXRhdmFyaWFibGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKG1ldGF2YXJpYWJsZU5vZGVzLCAobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGF2YXJpYWJsZU5vZGVCKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbHRlclN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheS5maWx0ZXIoY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG4gIGZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RDb21wbGV4U3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gZmlyc3RDb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgQWRkZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBwcnVuZSh0aGlzLmFycmF5LCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkEgIT09IHN1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZW1vdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmAsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzID0gdGhpcy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gc3Vic3RpdHV0aW9uLnVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGFyZVJlc29sdmVkKCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb25SZXNvbHZlZDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuICB9XG5cbiAgcm9sbGJhY2sobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG5cbiAgICByaWdodERpZmZlcmVuY2UodGhpcy5zYXZlZEFycmF5LCBhcnJheSk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFycmF5ID0gW1xuICAgICAgLi4udGhpcy5zYXZlZEFycmF5XG4gICAgXTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBjb250aW51ZSgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdHJpbmcgPSB0aGlzLmFycmF5LnJlZHVjZSgoc3RyaW5nLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgIGAke3N0cmluZ30sICR7c3Vic3RpdHV0aW9uU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGlmIChzdHJpbmcgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgc3RyaW5nID0gYCAke3N0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibGVuZ3RoIiwiZmlyc3QiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZm9yRWFjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImNvbXByZXNzIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCIiwibWF0Y2giLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJmaW5kIiwic29tZVN1YnN0aXR1dGlvbiIsInNvbWUiLCJldmVyeVN1YnN0aXR1dGlvbiIsImV2ZXJ5IiwiZm9yRWFjaCIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImZyb21BcnJheSIsImZpbHRlclN1YnN0aXR1dGlvbiIsImZpbHRlciIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbnMiLCJmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpcnN0Q29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInBydW5lIiwic3Vic3RpdHV0aW9uQiIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImFyZVJlc29sdmVkIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb25SZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwicmlnaHREaWZmZXJlbmNlIiwiY29udGludWUiLCJzdHJpbmciLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSFE7cUJBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUMsU0FBUyxJQUFJLENBQUNOLEtBQUssQ0FBQ00sTUFBTTtnQkFFaEMsSUFBSUEsU0FBUyxHQUFHO29CQUNkRCxvQkFBb0JFLElBQUFBLFlBQUssRUFBQyxJQUFJLENBQUNQLEtBQUs7Z0JBQ3RDO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsb0JBQW9CLEVBQUU7Z0JBRTVCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ3hCLElBQU1DLG1CQUFtQkQsYUFBYUUsbUJBQW1CO29CQUV6RCxJQUFJRCxxQkFBcUIsTUFBTTt3QkFDN0JILGtCQUFrQkssSUFBSSxDQUFDRjtvQkFDekI7Z0JBQ0Y7Z0JBRUFHLElBQUFBLGVBQVEsRUFBQ04sbUJBQW1CLFNBQUNPLG1CQUFtQkM7b0JBQzlDLElBQU1DLDRDQUE0Q0Ysa0JBQWtCRyxLQUFLLENBQUNGO29CQUUxRSxJQUFJQywyQ0FBMkM7d0JBQzdDLE9BQU87b0JBQ1Q7Z0JB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