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
var _constants = require("../constants");
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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, correlate = _necessary.arrayUtilities.correlate;
var _default = (0, _ontology.define)(/*#__PURE__*/ function() {
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
            key: "getNonTrivialLength",
            value: function getNonTrivialLength() {
                var nonTrivialLength = this.reduceSubstitution(function(nonTrivialLength, substitution) {
                    var substitutionTrivial = substitution.isTrivial();
                    if (!substitutionTrivial) {
                        nonTrivialLength += 1;
                    }
                    return nonTrivialLength;
                }, 0);
                return nonTrivialLength;
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
            key: "reduceSubstitution",
            value: function reduceSubstitution(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
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
            key: "findSubstitutionsByMetavariable",
            value: function findSubstitutionsByMetavariable(metavariable) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);
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
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualToMetavariable(metavariable);
                        if (simpleSubstitutionMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                });
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariable",
            value: function findComplexSubstitutionsByMetavariable(metavariable) {
                var complexSubstitutions = this.findSubstitutions(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        var complexSubstitution = substitution, complexSubstitutionMetavariableEqualToMetavariable = complexSubstitution.isMetavariableEqualToMetavariable(metavariable);
                        if (complexSubstitutionMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        var substitutionB = substitution, substitutionBSubstitutionEqualToSubstitutionA = substitutionB.isSubstitutionEqualToSubstitution(substitutionA);
                        if (substitutionBSubstitutionEqualToSubstitutionA) {
                            return true;
                        }
                    }
                });
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
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions) {
                var array = substitutions.getArray(), arrayA = array, arrayB = this.array, correlates = correlate(arrayA, arrayB, function(substitutionA, substitutionB) {
                    var substitutionAIsEQualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAIsEQualToSubstitutionB) {
                        return true;
                    }
                });
                return correlates;
            }
        },
        {
            key: "removeTrivialSubstitutions",
            value: function removeTrivialSubstitutions() {
                filter(this.array, function(substitution) {
                    var trivial = substitution.isTrivial();
                    if (!trivial) {
                        return true;
                    }
                });
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
            value: function resolve(context) {
                var _this = this;
                var metavariables = this.getMetavariables();
                metavariables.forEach(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var resolved;
                        var substitutions = _this, substitution = complexSubstitution; ///
                        resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(substitutions, context);
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
            key: "asString",
            value: function asString() {
                var string;
                var length = this.getLength();
                if (length === 0) {
                    string = _constants.EMPTY_STRING;
                } else {
                    var substitutionsString = this.array.reduce(function(substitutionsString, substitution) {
                        var substitutionString = substitution.getString();
                        substitutionsString = substitutionsString === null ? substitutionString : "".concat(substitutionsString, ", ").concat(substitutionString);
                        return substitutionsString;
                    }, null);
                    string = substitutionsString; ///
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
}());
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIGNsZWFyLCBwcnVuZSwgZmlsdGVyLCBjb21wcmVzcywgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnN0aXR1dGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgc2F2ZWRBcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBzYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRTYXZlZEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVCLmlzRXF1YWxUbyhtZXRhdmFyaWFibGVBKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Tm9uVHJpdmlhbExlbmd0aCgpIHtcbiAgICBjb25zdCBub25Ucml2aWFsTGVuZ3RoID0gdGhpcy5yZWR1Y2VTdWJzdGl0dXRpb24oKG5vblRyaXZpYWxMZW5ndGgsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc1RyaXZpYWwoKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25Ucml2aWFsKSB7XG4gICAgICAgIG5vblRyaXZpYWxMZW5ndGggKz0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vblRyaXZpYWxMZW5ndGg7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbExlbmd0aDtcbiAgfVxuXG4gIGdldEZpcnN0U3Vic3RpdHV0aW9uKCkge1xuICAgIGxldCBmaXJzdFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gZmlyc3QodGhpcy5hcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWFwU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IH0gIC8vL1xuXG4gIHNvbWVTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICByZWR1Y2VTdWJzdGl0dXRpb24oY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gZmluZCh0aGlzLmFycmF5LCBjYWxsYmFjayksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gc3Vic3RpdHV0aW9uVmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzaW1wbGVTdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb25CLmlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBwcnVuZSh0aGlzLmFycmF5LCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkEgIT09IHN1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlBID0gYXJyYXksIC8vL1xuICAgICAgICAgIGFycmF5QiA9IHRoaXMuYXJyYXksICAvLy9cbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXM7XG4gIH1cblxuICByZW1vdmVUcml2aWFsU3Vic3RpdHV0aW9ucygpICB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNUcml2aWFsKCk7XG5cbiAgICAgIGlmICghdHJpdmlhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuYXJyYXkpO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuICB9XG5cbiAgcm9sbGJhY2soY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShhcnJheSwgdGhpcy5zYXZlZEFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLnNhdmVkQXJyYXlcbiAgICBdO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGNvbnRpbnVlKCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHN0cmluZyA9IEVNUFRZX1NUUklORztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHRoaXMuYXJyYXkucmVkdWNlKChzdWJzdGl0dXRpb25zU3RyaW5nLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSAoc3Vic3RpdHV0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdWJzdGl0dXRpb25zU3RyaW5nfSwgJHtzdWJzdGl0dXRpb25TdHJpbmd9YDtcblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uc1N0cmluZztcbiAgICAgIH0sIG51bGwpO1xuXG4gICAgICBzdHJpbmcgPSBzdWJzdGl0dXRpb25zU3RyaW5nOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNsZWFyIiwicHJ1bmUiLCJmaWx0ZXIiLCJjb21wcmVzcyIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJwdXNoIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwibm9uVHJpdmlhbExlbmd0aCIsInJlZHVjZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRyaXZpYWwiLCJpc1RyaXZpYWwiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibWFwU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJtYXAiLCJmaW5kU3Vic3RpdHV0aW9uIiwic29tZVN1YnN0aXR1dGlvbiIsInNvbWUiLCJldmVyeVN1YnN0aXR1dGlvbiIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaCIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImZyb21BcnJheSIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZSIsImdldFZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbkEiLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImFycmF5QSIsImFycmF5QiIsImNvcnJlbGF0ZXMiLCJzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiIsInJlbW92ZVRyaXZpYWxTdWJzdGl0dXRpb25zIiwidHJpdmlhbCIsInJlc29sdmUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImZyb21Ob3RoaW5nIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3lCQVArQjt3QkFFUjt5QkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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