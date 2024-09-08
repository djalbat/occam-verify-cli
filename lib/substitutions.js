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
            value: function addSubstitution(substitution) {
                this.array.push(substitution);
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution) {
                var substitutionA = substitution; ///
                (0, _array.prune)(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
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
            value: function rollback() {
                var _this_array;
                var start = 0, end = Infinity;
                (_this_array = this.array).splice.apply(_this_array, [
                    start,
                    end
                ].concat(_to_consumable_array(this.savedArray)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHJ1bmUsIGNvbXBhcmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKSB7XG4gICAgY29uc3QgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMuYXJyYXksIHRoaXMuc2F2ZWRBcnJheSksXG4gICAgICAgICAgY2hhbmdlZCA9ICFjb21wYXJlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spOyB9XG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHsgdGhpcy5hcnJheS5wdXNoKHN1YnN0aXR1dGlvbik7IH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBwcnVuZSh0aGlzLmFycmF5LCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkEgIT09IHN1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBlbmQgPSBJbmZpbml0eTtcblxuICAgIHRoaXMuYXJyYXkuc3BsaWNlKHN0YXJ0LCBlbmQsIC4uLnRoaXMuc2F2ZWRBcnJheSk7XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHRyYW5zZm9ybSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJoYXNDaGFuZ2VkIiwiY29tcGFyZXMiLCJjb21wYXJlIiwiY2hhbmdlZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmQiLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJwdXNoIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInBydW5lIiwic3Vic3RpdHV0aW9uQiIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJzdGFydCIsImVuZCIsIkluZmluaXR5Iiwic3BsaWNlIiwiY29udGludWUiLCJ0cmFuc2Zvcm0iLCJ0b0pTT04iLCJ0b2tlbnMiLCJqc29uIiwibWFwIiwic3Vic3RpdHV0aW9uSlNPTiIsImZyb21Ob3RoaW5nIiwic3Vic3RpdHV0aW9ucyIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsInN1YnN0aXR1dGlvbnNKU09OIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrRUFKNEI7cUJBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLDhCQUFELEFBQUw7YUFBTUEsY0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxjQUFPLEVBQUMsSUFBSSxDQUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEdBQzlDTSxVQUFVLENBQUNGLFVBQVcsR0FBRztnQkFFL0IsT0FBT0U7WUFDVDs7O1lBRUFD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