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
            key: "getMetavariableNames",
            value: function getMetavariableNames() {
                var metavariableNames = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName !== null) {
                        metavariableNames.push(metavariableName);
                    }
                });
                compress(metavariableNames, function(metavariableNameA, metavariableNameB) {
                    if (metavariableNameA === metavariableNameB) {
                        return true;
                    }
                });
                return metavariableNames;
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
            key: "findSubstitutionByMetavariableName",
            value: function findSubstitutionByMetavariableName(metavariableName) {
                var substitution = this.findSubstitution(function(substitution) {
                    var metavariableNameMatches = substitution.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariableName",
            value: function findSubstitutionsByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNameMatches = substitution.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableName",
            value: function findSimpleSubstitutionByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutionsByMetavariableName(metavariableName), simpleSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                }), firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(), simpleSubstitution = firstSimpleSubstitution; ///
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableName",
            value: function findComplexSubstitutionsByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutionsByMetavariableName(metavariableName), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableNameAndSubstitutionNode",
            value: function findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNameAndSubstitutionNodeMatch = substitution.matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode);
                    if (metavariableNameAndSubstitutionNodeMatch) {
                        return true;
                    }
                }), firstSubstitution = substitutions.getFirstSubstitution(), substitution = firstSubstitution; ///
                return substitution;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariableName",
            value: function isSimpleSubstitutionPresentByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableNameAndSubstitutionNode",
            value: function isSubstitutionPresentByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var substitution = this.findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode), substitutionPresent = substitution !== null;
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
                var substitutionNode = substitution.getNode(), substitutionString = substitution.getString();
                localContext.trace("Removed the ".concat(substitutionString, " substitution."), substitutionNode);
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
                var metavariableNames = this.getMetavariableNames(), resolved = metavariableNames.every(function(metavariableName) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableName(metavariableName), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
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
                rightDifference(this.savedArray, array);
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
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIHBydW5lLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVOYW1lcy5wdXNoKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlTmFtZXMsIChtZXRhdmFyaWFibGVOYW1lQSwgbWV0YXZhcmlhYmxlTmFtZUIpID0+IHtcbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZXM7XG4gIH1cblxuICBtYXBTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgfSAgLy8vXG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBmaW5kKHRoaXMuYXJyYXksIGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaWx0ZXJTdWJzdGl0dXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMuYXJyYXkuZmlsdGVyKGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9ucy5nZXRGaXJzdFN1YnN0aXR1dGlvbigpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBwcnVuZSh0aGlzLmFycmF5LCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkEgIT09IHN1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFJlbW92ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIHJlc29sdmUobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lcygpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlTmFtZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24ucmVzb2x2ZShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgcmlnaHREaWZmZXJlbmNlKHRoaXMuc2F2ZWRBcnJheSwgYXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFycmF5ID0gW1xuICAgICAgLi4udGhpcy5zYXZlZEFycmF5XG4gICAgXTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBjb250aW51ZSgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgYCR7c3RyaW5nfSwgJHtzdWJzdGl0dXRpb25TdHJpbmd9YDtcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgaWYgKHN0cmluZyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBzdHJpbmcgPSBgICR7c3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzYXZlZEFycmF5ID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25zIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJwcnVuZSIsImZpbHRlciIsImNvbXByZXNzIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5hbWVzIiwibWV0YXZhcmlhYmxlTmFtZXMiLCJmb3JFYWNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJwdXNoIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsIm1hcFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwibWFwIiwiZmluZFN1YnN0aXR1dGlvbiIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImZvckVhY2giLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmcm9tQXJyYXkiLCJmaWx0ZXJTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb25zIiwiZmlyc3RTaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImFkZFN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJnZXROb2RlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwicmVzb2x2ZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwicmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblJlc29sdmVkIiwic25hcHNob3QiLCJyb2xsYmFjayIsInJpZ2h0RGlmZmVyZW5jZSIsImNvbnRpbnVlIiwic3RyaW5nIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxPQUF5Q0MseUJBQWMsQ0FBdkRELE1BQU1FLFFBQW1DRCx5QkFBYyxDQUFqREMsT0FBT0MsUUFBNEJGLHlCQUFjLENBQTFDRSxPQUFPQyxTQUFxQkgseUJBQWMsQ0FBbkNHLFFBQVFDLFdBQWFKLHlCQUFjLENBQTNCSTtBQUVyQixJQUFBLEFBQU1OLDhCQUFOO2FBQU1BLGNBQ1BPLEtBQUssRUFBRUMsVUFBVTtnQ0FEVlI7UUFFakIsSUFBSSxDQUFDTyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIRFI7O1lBTW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxvQkFBb0I7Z0JBRXhCLElBQU1GLFNBQVMsSUFB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