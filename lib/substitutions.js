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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariable = substitution.getMetavariable();
                    if (metavariable !== null) {
                        metavariables.push(metavariable);
                    }
                });
                compress(metavariables, function(metavariableA, metavariableB) {
                    var metavariableAEqualToMetavariableB = metavariableB.isEqualTo(metavariableA);
                    if (metavariableAEqualToMetavariableB) {
                        return true;
                    }
                });
                return metavariables;
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
            key: "findSubstitutionByVariable",
            value: function findSubstitutionByVariable(variable) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionVariable = substitution.getVariable();
                    if (substitutionVariable !== null) {
                        var substitutionVariableEqualToVariable = substitutionVariable.isEqualTo(variable);
                        if (substitutionVariableEqualToVariable) {
                            return true;
                        }
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariable",
            value: function findSubstitutionByMetavariable(metavariable) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariable",
            value: function findSubstitutionsByMetavariable(metavariable) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariable",
            value: function findSimpleSubstitutionByMetavariable(metavariable) {
                var substitutions = this.findSubstitutionsByMetavariable(metavariable), simpleSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                }), firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(), simpleSubstitution = firstSimpleSubstitution; ///
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariable",
            value: function findComplexSubstitutionsByMetavariable(metavariable) {
                var substitutions = this.findSubstitutionsByMetavariable(metavariable), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
                var substitutionA = substitution, substitutions = this.findSubstitutions(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        var substitutionSubstitution = substitution.getSubstitution();
                        if (substitutionSubstitution !== null) {
                            var substitutionB = substitution, substitutionBSubstitutionEqualToSubstitutionB = substitutionB.isSubstitutionEqualTo(substitutionA);
                            if (substitutionBSubstitutionEqualToSubstitutionB) {
                                return true;
                            }
                        }
                    }
                }), firstSubstitution = substitutions.getFirstSubstitution();
                substitution = firstSubstitution; ///
                return substitution;
            }
        },
        {
            key: "isSubstitutionPresentByVariable",
            value: function isSubstitutionPresentByVariable(variable) {
                var substitution = this.findSubstitutionByVariable(variable), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariable",
            value: function isSimpleSubstitutionPresentByMetavariable(metavariable) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariable(metavariable), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableAndSubstitution",
            value: function isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution) {
                substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                var substitutionPresent = substitution !== null;
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
            key: "clear",
            value: function clear1() {
                clear(this.array);
                this.savedArray = null;
            }
        },
        {
            key: "resolve",
            value: function resolve(generalContext, specificContext) {
                var _this = this;
                var metavariables = this.getMetavariables();
                metavariables.forEach(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
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
                var metavariables = this.getMetavariables(), resolved = metavariables.every(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
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
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIGNsZWFyLCBwcnVuZSwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgc2F2ZWRBcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBzYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRTYXZlZEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldEZpcnN0U3Vic3RpdHV0aW9uKCkge1xuICAgIGxldCBmaXJzdFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gZmlyc3QodGhpcy5hcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZUEsIG1ldGF2YXJpYWJsZUIpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUIuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUEpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBtYXBTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgfSAgLy8vXG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBmaW5kKHRoaXMuYXJyYXksIGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaWx0ZXJTdWJzdGl0dXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMuYXJyYXkuZmlsdGVyKGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5maWx0ZXJTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkIuaXNTdWJzdGl0dXRpb25FcXVhbFRvKHN1YnN0aXR1dGlvbkEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBmaXJzdFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmFycmF5KTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICByZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgbGV0IHJlc29sdmVkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuICB9XG5cbiAgcm9sbGJhY2soY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShhcnJheSwgdGhpcy5zYXZlZEFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLnNhdmVkQXJyYXlcbiAgICBdO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGNvbnRpbnVlKCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBnZXRTdHJpbmcoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdHJpbmcgPSB0aGlzLmFycmF5LnJlZHVjZSgoc3RyaW5nLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0cmluZyA9IChzdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBpZiAoc3RyaW5nICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIHN0cmluZyA9IGAgJHtzdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9ucyIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiY2xlYXIiLCJwcnVuZSIsImZpbHRlciIsImNvbXByZXNzIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZm9yRWFjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInB1c2giLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiIsImlzRXF1YWxUbyIsIm1hcFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwibWFwIiwiZmluZFN1YnN0aXR1dGlvbiIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImZvckVhY2giLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmcm9tQXJyYXkiLCJmaWx0ZXJTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN1YnN0aXR1dGlvbiIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG8iLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwicmVzb2x2ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJsZWZ0RGlmZmVyZW5jZSIsImNvbnRpbnVlIiwic3RyaW5nIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxPQUFnREMseUJBQWMsQ0FBOURELE1BQU1FLFFBQTBDRCx5QkFBYyxDQUF4REMsT0FBT0MsUUFBbUNGLHlCQUFjLENBQWpERSxPQUFPQyxRQUE0QkgseUJBQWMsQ0FBMUNHLE9BQU9DLFNBQXFCSix5QkFBYyxDQUFuQ0ksUUFBUUMsV0FBYUwseUJBQWMsQ0FBM0JLO0FBRTVCLElBQUEsQUFBTVAsOEJBQU47YUFBTUEsY0FDUFEsS0FBSyxFQUFFQyxVQUFVO2dDQURWVDtRQUVqQixJQUFJLENBQUNRLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhEVDs7WUFNbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUYsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZEUsb0JBQW9CWixNQUFNLElBQUksQ0FBQ0ssS0FBSztnQkFDdEM7Z0JBRUEsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsRUFBRTtnQkFFeEIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDeEIsSUFBTUMsZUFBZUQsYUFBYUUsZUFBZTtvQkFFakQsSUFBSUQsaUJBQWlCLE1BQU07d0JBQ3pCSCxjQUFjSyxJQUFJLENBQUNGO29CQUNyQjtnQkFDRjtnQkFFQWIsU0FBU1UsZUFBZSxTQUFDTSxlQUFlQztvQkFDdEMsSUFBTUMsb0NBQW9DRCxjQUFjRSxTQUFTLENBQUNIO29CQUVsRSxJQUFJRSxtQ0FBbUM7d0JBQ3JDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNwQixLQUFLLENBQUNxQixHQUFHLENBQUNEO1lBQVc7OztZQUU3REUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkYsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ1AsSUFBSSxDQUFDMkIsYUFBYTtZQUFNLEVBQUcsR0FBRzs7O1lBRTdFRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSCxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDcEIsS0FBSyxDQUFDd0IsSUFBSSxDQUFDSjtZQUFXOzs7WUFFL0RLLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JMLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNwQixLQUFLLENBQUMwQixLQUFLLENBQUNOO1lBQVc7OztZQUVqRVYsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQlUsUUFBUTtnQkFBSSxJQUFJLENBQUNwQixLQUFLLENBQUMyQixPQUFPLENBQUNQO1lBQVc7OztZQUU5RFEsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlIsUUFBUTtnQkFDeEIsSUFBTXBCLFFBQVFQLEtBQUssSUFBSSxDQUFDTyxLQUFLLEVBQUVvQixXQUN6QlMsZ0JBQWdCckMsQUE5RExBLGNBOERtQnNDLFNBQVMsQ0FBQzlCO2dCQUU5QyxPQUFPNkI7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJYLFFBQVE7Z0JBQ3pCLElBQU1wQixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDRixNQUFNLENBQUNzQixXQUMxQlMsZ0JBQWdCckMsQUFyRUxBLGNBcUVtQnNDLFNBQVMsQ0FBQzlCO2dCQUU5QyxPQUFPNkI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLFFBQVE7Z0JBQ2pDLElBQU10QixlQUFlLElBQUksQ0FBQ1csZ0JBQWdCLENBQUMsU0FBQ1g7b0JBQzFDLElBQU11Qix1QkFBdUJ2QixhQUFhd0IsV0FBVztvQkFFckQsSUFBSUQseUJBQXlCLE1BQU07d0JBQ2pDLElBQU1FLHNDQUFzQ0YscUJBQXFCaEIsU0FBUyxDQUFDZTt3QkFFM0UsSUFBSUcscUNBQXFDOzRCQUN2QyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU96QjtZQUNUOzs7WUFFQTBCLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0J6QixZQUFZO2dCQUN6QyxJQUFNRCxlQUFlLElBQUksQ0FBQ1csZ0JBQWdCLENBQUMsU0FBQ1g7b0JBQzFDLElBQU0yQiw4Q0FBOEMzQixhQUFhNEIscUJBQXFCLENBQUMzQjtvQkFFdkYsSUFBSTBCLDZDQUE2Qzt3QkFDL0MsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPM0I7WUFDVDs7O1lBRUE2QixLQUFBQTttQkFBQUEsU0FBQUEsZ0NBQWdDNUIsWUFBWTtnQkFDMUMsSUFBTWlCLGdCQUFnQixJQUFJLENBQUNELGlCQUFpQixDQUFDLFNBQUNqQjtvQkFDNUMsSUFBTTJCLDhDQUE4QzNCLGFBQWE0QixxQkFBcUIsQ0FBQzNCO29CQUV2RixJQUFJMEIsNkNBQTZDO3dCQUMvQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9UO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEscUNBQXFDN0IsWUFBWTtnQkFDL0MsSUFBTWlCLGdCQUFnQixJQUFJLENBQUNXLCtCQUErQixDQUFDNUIsZUFDckQ4QixzQkFBc0JiLGNBQWNFLGtCQUFrQixDQUFDLFNBQUNwQjtvQkFDdEQsSUFBTWdDLHFCQUFxQmhDLGFBQWFpQyxRQUFRO29CQUVoRCxJQUFJRCxvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0YsSUFDQUUsMEJBQTBCSCxvQkFBb0JwQyxvQkFBb0IsSUFDbEV3QyxxQkFBcUJELHlCQUF5QixHQUFHO2dCQUV2RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHVDQUF1Q25DLFlBQVk7Z0JBQ2pELElBQU1pQixnQkFBZ0IsSUFBSSxDQUFDVywrQkFBK0IsQ0FBQzVCLGVBQ3JEb0MsdUJBQXVCbkIsY0FBY0Usa0JBQWtCLENBQUMsU0FBQ3BCO29CQUN2RCxJQUFNc0Msc0JBQXNCdEMsYUFBYXVDLFNBQVM7b0JBRWxELElBQUlELHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDhDQUE4Q3ZDLFlBQVksRUFBRUQsWUFBWTtnQkFDdEUsSUFBTXlDLGdCQUFnQnpDLGNBQ2hCa0IsZ0JBQWdCLElBQUksQ0FBQ0QsaUJBQWlCLENBQUMsU0FBQ2pCO29CQUN0QyxJQUFNMkIsOENBQThDM0IsYUFBYTRCLHFCQUFxQixDQUFDM0I7b0JBRXZGLElBQUkwQiw2Q0FBNkM7d0JBQy9DLElBQU1lLDJCQUEyQjFDLGFBQWEyQyxlQUFlO3dCQUU3RCxJQUFJRCw2QkFBNkIsTUFBTTs0QkFDckMsSUFBTUUsZ0JBQWdCNUMsY0FDaEI2QyxnREFBZ0RELGNBQWNFLHFCQUFxQixDQUFDTDs0QkFFMUYsSUFBSUksK0NBQStDO2dDQUNqRCxPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGLElBQ0FqRCxvQkFBb0JzQixjQUFjdkIsb0JBQW9CO2dCQUU1REssZUFBZUosbUJBQW1CLEdBQUc7Z0JBRXJDLE9BQU9JO1lBQ1Q7OztZQUVBK0MsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ3pCLFFBQVE7Z0JBQ3RDLElBQU10QixlQUFlLElBQUksQ0FBQ3FCLDBCQUEwQixDQUFDQyxXQUMvQzBCLHNCQUF1QmhELGlCQUFpQjtnQkFFOUMsT0FBT2dEO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMENBQTBDaEQsWUFBWTtnQkFDcEQsSUFBTWtDLHFCQUFxQixJQUFJLENBQUNMLG9DQUFvQyxDQUFDN0IsZUFDL0RpRCw0QkFBNkJmLHVCQUF1QjtnQkFFMUQsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxtREFBbURsRCxZQUFZLEVBQUVELFlBQVk7Z0JBQzNFQSxlQUFlLElBQUksQ0FBQ3dDLDZDQUE2QyxDQUFDdkMsY0FBY0QsZUFBZ0IsR0FBRztnQkFFbkcsSUFBTWdELHNCQUF1QmhELGlCQUFpQjtnQkFFOUMsT0FBT2dEO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCcEQsWUFBWSxFQUFFcUQsT0FBTztnQkFDbkMsSUFBSSxDQUFDaEUsS0FBSyxDQUFDYyxJQUFJLENBQUNIO2dCQUVoQixJQUFNc0QscUJBQXFCdEQsYUFBYXVELFNBQVM7Z0JBRWpERixRQUFRRyxLQUFLLENBQUMsQUFBQyxhQUErQixPQUFuQkYsb0JBQW1CO1lBQ2hEOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQnpELFlBQVksRUFBRXFELE9BQU87Z0JBQ3RDLElBQU1aLGdCQUFnQnpDLGNBQWMsR0FBRztnQkFFdkNkLE1BQU0sSUFBSSxDQUFDRyxLQUFLLEVBQUUsU0FBQ1c7b0JBQ2pCLElBQU00QyxnQkFBZ0I1QyxjQUFjLEdBQUc7b0JBRXZDLElBQUl5QyxrQkFBa0JHLGVBQWU7d0JBQ25DLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTVUscUJBQXFCdEQsYUFBYXVELFNBQVM7Z0JBRWpERixRQUFRRyxLQUFLLENBQUMsQUFBQyxlQUFpQyxPQUFuQkYsb0JBQW1CO1lBQ2xEOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsWUFBWSxFQUFFTixPQUFPOztnQkFDekMsSUFBTU8sMEJBQTBCLElBQUksQ0FBQzlDLGlCQUFpQixDQUFDLFNBQUNkO29CQUN0RCxJQUFNa0IsdUJBQ0EyQyxxQ0FBcUM3RCxhQUFhMEQscUJBQXFCLENBQUNDLGNBQWN6QyxlQUFlbUM7b0JBRTNHLElBQUlRLG9DQUFvQzt3QkFDdEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQTNFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUEsTUFBTSxJQUFJLENBQUNJLEtBQUs7Z0JBRWhCLElBQUksQ0FBQ0MsVUFBVSxHQUFHO1lBQ3BCOzs7WUFFQXdFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxjQUFjLEVBQUVDLGVBQWU7O2dCQUNyQyxJQUFNbEUsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCO2dCQUUzQ0MsY0FBY2tCLE9BQU8sQ0FBQyxTQUFDZjtvQkFDckIsSUFBTW9DLHVCQUF1QixNQUFLRCxzQ0FBc0MsQ0FBQ25DLGVBQ25FZ0UsK0JBQStCNUIscUJBQXFCdkIsaUJBQWlCLENBQUMsU0FBQ29EO3dCQUNyRSxJQUFJQzt3QkFFSixJQUFNakQsdUJBQ0FsQixlQUFla0UscUJBQXFCLEdBQUc7d0JBRTdDQyxXQUFXbkUsYUFBYW9FLFVBQVU7d0JBRWxDLElBQUksQ0FBQ0QsVUFBVTs0QkFDYm5FLGFBQWE4RCxPQUFPLENBQUM1QyxlQUFlNkMsZ0JBQWdCQzt3QkFDdEQ7b0JBQ0Y7b0JBRU4sSUFBSUMsOEJBQThCO3dCQUNoQyxPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU12RSxnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0IsSUFDckNzRSxXQUFXckUsY0FBY2lCLEtBQUssQ0FBQyxTQUFDZDtvQkFDOUIsSUFBTW9DLHVCQUF1QixNQUFLRCxzQ0FBc0MsQ0FBQ25DLGVBQ25FZ0UsK0JBQStCNUIscUJBQXFCdkIsaUJBQWlCLENBQUMsU0FBQ29EO3dCQUNqRSxJQUFNSSw4QkFBOEJKLG9CQUFvQkUsVUFBVTt3QkFFbEUsSUFBSUUsNkJBQTZCOzRCQUMvQixPQUFPO3dCQUNUO29CQUNGO29CQUVGLElBQUlMLDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFZCxPQUFPRTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2pGLFVBQVUsR0FDYixxQkFBRyxJQUFJLENBQUNELEtBQUs7WUFFakI7OztZQUVBbUYsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNuQixPQUFPOztnQkFDZCxJQUFNaEUsUUFDSixxQkFBRyxJQUFJLENBQUNBLEtBQUs7Z0JBR2ZvRixlQUFlcEYsT0FBTyxJQUFJLENBQUNDLFVBQVU7Z0JBRXJDRCxNQUFNMkIsT0FBTyxDQUFDLFNBQUNoQjtvQkFDYixNQUFLeUQsa0JBQWtCLENBQUN6RCxjQUFjcUQ7Z0JBQ3hDO2dCQUVBLElBQUksQ0FBQ2hFLEtBQUssR0FDUixxQkFBRyxJQUFJLENBQUNDLFVBQVU7Z0JBR3BCLElBQUksQ0FBQ0EsVUFBVSxHQUFHO1lBQ3BCOzs7WUFFQW9GLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNwRixVQUFVLEdBQUc7WUFDcEI7OztZQUVBaUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVRLGNBQWMsRUFBRUMsZUFBZTtnQkFDdkMsSUFBSVcsU0FBUyxJQUFJLENBQUN0RixLQUFLLENBQUN1RixNQUFNLENBQUMsU0FBQ0QsUUFBUTNFO29CQUN0QyxJQUFNc0QscUJBQXFCdEQsYUFBYXVELFNBQVMsQ0FBQ1EsZ0JBQWdCQztvQkFFbEVXLFNBQVMsQUFBQ0EsV0FBVyxPQUNWckIscUJBQ0UsQUFBQyxHQUFhQSxPQUFYcUIsUUFBTyxNQUF1QixPQUFuQnJCO29CQUUzQixPQUFPcUI7Z0JBQ1QsR0FBR0UsdUJBQVk7Z0JBRWYsSUFBSUYsV0FBV0UsdUJBQVksRUFBRTtvQkFDM0JGLFNBQVMsQUFBQyxJQUFVLE9BQVBBO2dCQUNmO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT3hELEtBQUFBO21CQUFQLFNBQU9BLFVBQVU5QixLQUFLO2dCQUNwQixJQUFNQyxhQUFhLEVBQUUsRUFDZjRCLGdCQUFnQixJQXBVTHJDLGNBb1V1QlEsT0FBT0M7Z0JBRS9DLE9BQU80QjtZQUNUOzs7WUFFTzRELEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU16RixRQUFRLEVBQUUsRUFDVkMsYUFBYSxNQUNiNEIsZ0JBQWdCLElBNVVMckMsY0E0VXVCUSxPQUFPQztnQkFFL0MsT0FBTzRCO1lBQ1Q7OztXQS9VbUJyQzs7QUFrVnJCLFNBQVM0RixlQUFlTSxNQUFNLEVBQUVDLE1BQU07SUFDcEM3RixPQUFPNEYsUUFBUSxTQUFDRTtRQUNkLElBQU1DLHlCQUF5QkYsT0FBT0csUUFBUSxDQUFDRjtRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGIn0=