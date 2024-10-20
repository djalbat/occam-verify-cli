"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _necessary = require("necessary");
var _constants = require("./constants");
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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
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
                    firstSubstitution = first(this.array);
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
                compress(metavariableNodes, function(metavariableNodeA, metavariableNodeB) {
                    var metavariableNodeAMatchesMetavariableNodeB = metavariableNodeB.match(metavariableNodeA);
                    if (metavariableNodeAMatchesMetavariableNodeB) {
                        return true;
                    }
                });
                return metavariableNodes;
            }
        },
        {
            key: "mapSubstitution",
            value: function mapSubstitution(callback) {
                return this.array.map(callback);
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
                var array = find(this.array, callback), substitutions = Substitutions.fromArray(array);
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
            key: "findSubstitutionByVariableName",
            value: function findSubstitutionByVariableName(variableName) {
                var substitution = this.findSubstitution(function(substitution) {
                    var variableNameMatches = substitution.matchVariableName(variableName);
                    if (variableNameMatches) {
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
            key: "findSubstitutionByMetavariableNodeAndSubstitutionNode",
            value: function findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNodeAndSubstitutionNodeMatch = substitution.matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                    if (metavariableNodeAndSubstitutionNodeMatch) {
                        return true;
                    }
                }), firstSubstitution = substitutions.getFirstSubstitution(), substitution = firstSubstitution; ///
                return substitution;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariableNode",
            value: function isSimpleSubstitutionPresentByMetavariableNode(metavariableNode) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariableNode(metavariableNode), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableNodeAndSubstitutionNode",
            value: function isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitution = this.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution, localContext) {
                this.array.push(substitution);
                var substitutionString = substitution.getString();
                localContext.trace("Added the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, localContext) {
                var substitutionA = substitution; ///
                prune(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionString = substitution.getString();
                localContext.trace("Removed the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, localContext) {
                var _this = this;
                var unifiedWithEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContext);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        },
        {
            key: "resolve",
            value: function resolve(localContextA, localContextB) {
                var _this = this;
                var metavariableNodes = this.getMetavariableNodes(), resolved = metavariableNodes.every(function(metavariableNode) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var substitution = complexSubstitution, substitutions = _this, substitutionResolved = substitution.resolve(substitutions, localContextA, localContextB);
                        if (substitutionResolved) {
                            return true;
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
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
            value: function rollback(localContext) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                leftDifference(array, this.savedArray);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, localContext);
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
            key: "getString",
            value: function getString(localContextA, localContextB) {
                var string = this.array.reduce(function(string, substitution) {
                    var substitutionString = substitution.getString(localContextA, localContextB);
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
Object.assign(_shim.default, {
    Substitutions: Substitutions
});
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgcHJ1bmUsIGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzLnB1c2gobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyhtZXRhdmFyaWFibGVOb2RlcywgKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhdmFyaWFibGVOb2RlQikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQi5tYXRjaChtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIG1hcFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbHRlclN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheS5maWx0ZXIoY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTaW1wbGVTdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gZmlyc3RTaW1wbGVTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgQWRkZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzID0gdGhpcy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gc3Vic3RpdHV0aW9uLnVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgcmVzb2x2ZShsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25SZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShhcnJheSwgdGhpcy5zYXZlZEFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGdldFN0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZyA9IHRoaXMuYXJyYXkucmVkdWNlKChzdHJpbmcsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgIGAke3N0cmluZ30sICR7c3Vic3RpdHV0aW9uU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGlmIChzdHJpbmcgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgc3RyaW5nID0gYCAke3N0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3Vic3RpdHV0aW9uc1xufSk7XG5cbmZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHJ1bmUiLCJmaWx0ZXIiLCJjb21wcmVzcyIsIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsInB1c2giLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsIm1hcFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwibWFwIiwiZmluZFN1YnN0aXR1dGlvbiIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImZvckVhY2giLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmcm9tQXJyYXkiLCJmaWx0ZXJTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb25zIiwiZmlyc3RTaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImFkZFN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJyZXNvbHZlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJyZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsImFycmF5QSIsImFycmF5QiIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsyREFFaUI7eUJBRWM7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFBLE9BQXlDQyx5QkFBYyxDQUF2REQsTUFBTUUsUUFBbUNELHlCQUFjLENBQWpEQyxPQUFPQyxRQUE0QkYseUJBQWMsQ0FBMUNFLE9BQU9DLFNBQXFCSCx5QkFBYyxDQUFuQ0csUUFBUUMsV0FBYUoseUJBQWMsQ0FBM0JJO0FBRXBDLElBQUEsQUFBTUMsOEJBQU47YUFBTUEsY0FDUUMsS0FBSyxFQUFFQyxVQUFVO2dDQUR6QkY7UUFFRixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhoQkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFP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