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
            value: function addSubstitution(substitution, context) {
                this.array.push(substitution);
                var substitutionString = substitution.getString();
                context.trace("Added the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, context) {
                var substitutionA = substitution; ///
                prune(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionString = substitution.getString();
                context.trace("Removed the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, context) {
                var _this = this;
                var unifiedWithEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, context);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        },
        {
            key: "resolve",
            value: function resolve(generalContext, specificContext) {
                var _this = this;
                var metavariableNodes = this.getMetavariableNodes();
                metavariableNodes.forEach(function(metavariableNode) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var resolved;
                        var substitutions = _this, substitution = complexSubstitution; ///
                        resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(substitutions, generalContext, specificContext);
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
                });
            }
        },
        {
            key: "areResolved",
            value: function areResolved() {
                var _this = this;
                var metavariableNodes = this.getMetavariableNodes(), resolved = metavariableNodes.every(function(metavariableNode) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var complexSubstitutionResolved = complexSubstitution.isResolved();
                        if (complexSubstitutionResolved) {
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
            value: function rollback(context) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                leftDifference(array, this.savedArray);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, context);
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
            value: function getString(generalContext, specificContext) {
                var string = this.array.reduce(function(string, substitution) {
                    var substitutionString = substitution.getString(generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgcHJ1bmUsIGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzLnB1c2gobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyhtZXRhdmFyaWFibGVOb2RlcywgKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhdmFyaWFibGVOb2RlQikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQi5tYXRjaChtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIG1hcFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbHRlclN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheS5maWx0ZXIoY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTaW1wbGVTdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gZmlyc3RTaW1wbGVTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFJlbW92ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSB0aGlzLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBzdWJzdGl0dXRpb24udW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGVOb2Rlcy5mb3JFYWNoKChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZDtcblxuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24ucmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXJlUmVzb2x2ZWQoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgbGVmdERpZmZlcmVuY2UoYXJyYXksIHRoaXMuc2F2ZWRBcnJheSk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFycmF5ID0gW1xuICAgICAgLi4udGhpcy5zYXZlZEFycmF5XG4gICAgXTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBjb250aW51ZSgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgYCR7c3RyaW5nfSwgJHtzdWJzdGl0dXRpb25TdHJpbmd9YDtcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgaWYgKHN0cmluZyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBzdHJpbmcgPSBgICR7c3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzYXZlZEFycmF5ID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdWJzdGl0dXRpb25zXG59KTtcblxuZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJwcnVuZSIsImZpbHRlciIsImNvbXByZXNzIiwiU3Vic3RpdHV0aW9ucyIsImFycmF5Iiwic2F2ZWRBcnJheSIsImdldEFycmF5IiwiZ2V0U2F2ZWRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZm9yRWFjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoIiwibWFwU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJtYXAiLCJmaW5kU3Vic3RpdHV0aW9uIiwic29tZVN1YnN0aXR1dGlvbiIsInNvbWUiLCJldmVyeVN1YnN0aXR1dGlvbiIsImV2ZXJ5IiwiZm9yRWFjaCIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImZyb21BcnJheSIsImZpbHRlclN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsImZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJhZGRTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInJlc29sdmUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsImFycmF5QSIsImFycmF5QiIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsyREFFaUI7eUJBRWM7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFBLE9BQXlDQyx5QkFBYyxDQUF2REQsTUFBTUUsUUFBbUNELHlCQUFjLENBQWpEQyxPQUFPQyxRQUE0QkYseUJBQWMsQ0FBMUNFLE9BQU9DLFNBQXFCSCx5QkFBYyxDQUFuQ0csUUFB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