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
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/statementForMetavariable"));
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
            key: "hasChanged",
            value: function hasChanged() {
                var compares = (0, _array.compare)(this.array, this.savedArray), changed = !compares; ///
                return changed;
            }
        },
        {
            key: "findSubstitution",
            value: function findSubstitution(callback) {
                return this.array.find(callback);
            }
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
            key: "addSubstitution",
            value: function addSubstitution(substitution, localContextA, localContextB) {
                this.array.push(substitution);
                var substitutionNode = substitution.getNode(), substitutionString = substitution.asString(localContextA, localContextB);
                localContextB.trace("Added the '".concat(substitutionString, "' substitution."), substitutionNode);
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
                localContextB.trace("Removed the '".concat(substitutionString, "' substitution."), substitutionNode);
            }
        },
        {
            key: "unifyAgainstEquivalences",
            value: function unifyAgainstEquivalences(equivalences, localContextA, localContextB) {
                var _this = this;
                var unifiedAgainstEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedAgainstEquivalence = substitution.unifyAgainstEquivalences(equivalences, substitutions, localContextA, localContextB);
                    if (substitutionUnifiedAgainstEquivalence) {
                        return true;
                    }
                });
                return unifiedAgainstEquivalences;
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
            key: "transform",
            value: function transform() {
            ///
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var json = this.array.map(function(substitution) {
                    var substitutionJSON = substitution.toJSON(tokens);
                    return substitutionJSON;
                });
                return json;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], savedArray = null, substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var substitutionsJSON = json, array = substitutionsJSON.map(function(substitutionJSON) {
                    var _$json = substitutionJSON, statementForMetavariableSubstitution = _statementForMetavariable.default.fromJSONAndFileContext(_$json, fileContext), substitution = statementForMetavariableSubstitution; ///
                    return substitution;
                }), savedArray = null, substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        }
    ]);
    return Substitutions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHJ1bmUsIGNvbXBhcmUsIHJpZ2h0RGlmZmVyZW5jZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgaGFzQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy5hcnJheSwgdGhpcy5zYXZlZEFycmF5KSxcbiAgICAgICAgICBjaGFuZ2VkID0gIWNvbXBhcmVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjayk7IH1cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlbW92ZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlcyA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeUFnYWluc3RFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgcmlnaHREaWZmZXJlbmNlKHRoaXMuc2F2ZWRBcnJheSwgYXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHRyYW5zZm9ybSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJoYXNDaGFuZ2VkIiwiY29tcGFyZXMiLCJjb21wYXJlIiwiY2hhbmdlZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmQiLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInB1c2giLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvblN0cmluZyIsImFzU3RyaW5nIiwidHJhY2UiLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwicHJ1bmUiLCJzdWJzdGl0dXRpb25CIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZXMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJyaWdodERpZmZlcmVuY2UiLCJmb3JFYWNoIiwiY29udGludWUiLCJ0cmFuc2Zvcm0iLCJ0b0pTT04iLCJ0b2tlbnMiLCJqc29uIiwibWFwIiwic3Vic3RpdHV0aW9uSlNPTiIsImZyb21Ob3RoaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0Iiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytFQUo0QjtxQkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLGNBQU8sRUFBQyxJQUFJLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUNDLFVBQVUsR0FDOUNNLFVBQVUsQ0FBQ0YsVUFBVyxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxJQUFJLENBQUNEO1lBQVc7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkYsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDWSxJQUFJLENBQUNIO1lBQVc7OztZQUUvREksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkosUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDYyxLQUFLLENBQUNMO1lBQVc7OztZQUVqRU0sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQ3hELElBQUksQ0FBQ2xCLEtB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