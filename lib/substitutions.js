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
                var substitutions = this, unifiedAgainstEquivalences = this.everySubstitution(function(substitution) {
                    var substitutionUnified = equivalences.some(function(equivalence) {
                        var substitutionUnifiedAgainstEquivalence = substitution.unifyAgainstEquivalence(equivalence, substitutions, localContextA, localContextB);
                        if (substitutionUnifiedAgainstEquivalence) {
                            return true;
                        }
                    });
                    if (substitutionUnified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHJ1bmUsIGNvbXBhcmUsIHJpZ2h0RGlmZmVyZW5jZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgaGFzQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy5hcnJheSwgdGhpcy5zYXZlZEFycmF5KSxcbiAgICAgICAgICBjaGFuZ2VkID0gIWNvbXBhcmVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjayk7IH1cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlbW92ZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZXMgPSB0aGlzLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIHJpZ2h0RGlmZmVyZW5jZSh0aGlzLnNhdmVkQXJyYXksIGFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLnNhdmVkQXJyYXlcbiAgICBdO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGNvbnRpbnVlKCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICB0cmFuc2Zvcm0oKSB7XG4gICAgLy8vXG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25zIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiaGFzQ2hhbmdlZCIsImNvbXBhcmVzIiwiY29tcGFyZSIsImNoYW5nZWQiLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJmaW5kIiwic29tZVN1YnN0aXR1dGlvbiIsInNvbWUiLCJldmVyeVN1YnN0aXR1dGlvbiIsImV2ZXJ5IiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJwdXNoIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInBydW5lIiwic3Vic3RpdHV0aW9uQiIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJlcXVpdmFsZW5jZSIsInN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UiLCJ1bmlmeUFnYWluc3RFcXVpdmFsZW5jZSIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJyaWdodERpZmZlcmVuY2UiLCJmb3JFYWNoIiwiY29udGludWUiLCJ0cmFuc2Zvcm0iLCJ0b0pTT04iLCJ0b2tlbnMiLCJqc29uIiwibWFwIiwic3Vic3RpdHV0aW9uSlNPTiIsImZyb21Ob3RoaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0Iiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytFQUo0QjtxQkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLEtBQUssRUFBRUMsVUFBVTtnQ0FEVkY7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsY0FBTyxFQUFDLElBQUksQ0FBQ04sS0FBSyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxHQUM5Q00sVUFBVSxDQUFDRixVQUFXLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNV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