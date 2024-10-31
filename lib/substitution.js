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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
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
var Substitution = /*#__PURE__*/ function() {
    function Substitution(string, node, tokens) {
        _class_call_check(this, Substitution);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(Substitution, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                var term = null;
                return term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                var frame = null;
                return frame;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                var variable = null;
                return variable;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                return statement;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariableNode = null;
                return metavariableNode;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                var substitution = null;
                return substitution;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = true;
                return simple;
            }
        },
        {
            key: "isComplex",
            value: function isComplex() {
                var simple = this.isSimple(), complex = !simple;
                return complex;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var equalTo = false;
                if (substitution !== null) {
                    var substitutionString = substitution.getString();
                    equalTo = substitutionString === this.string;
                }
                return equalTo;
            }
        },
        {
            key: "isTermEqualTo",
            value: function isTermEqualTo(term) {
                var termEqualTo = false;
                return termEqualTo;
            }
        },
        {
            key: "isFrameEqualTo",
            value: function isFrameEqualTo(frame) {
                var frameEqualTo = false;
                return frameEqualTo;
            }
        },
        {
            key: "isVariableEqualTo",
            value: function isVariableEqualTo(variable) {
                var variableEqualTo = false;
                return variableEqualTo;
            }
        },
        {
            key: "isStatementEqualTo",
            value: function isStatementEqualTo(statement) {
                var statementEqualTo = false;
                return statementEqualTo;
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                var metavariableEqualTo = false;
                return metavariableEqualTo;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                var resolved = true;
                return resolved;
            }
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext) {
                var unifiedWithEquivalence = false;
                return unifiedWithEquivalence;
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, substitutions, generalContext, specificContext) {
                var _this = this;
                var unifiedWithEquivalences = equivalences.some(function(equivalence) {
                    var substitutionUnifiedWithEquivalence = _this.unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        }
    ]);
    return Substitution;
}();
Object.assign(_shim.default, {
    Substitution: Substitution
});
var _default = Substitution;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIGNvbnN0IHRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAoc3Vic3RpdHV0aW9uU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG8gPSBmYWxzZTtcblxuICAgIHJldHVybiBmcmFtZUVxdWFsVG87XG4gIH1cblxuICBpc1ZhcmlhYmxlRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIGlzU3RhdGVtZW50RXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRFcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzID0gZXF1aXZhbGVuY2VzLnNvbWUoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdGhpcy51bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdWJzdGl0dXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGl0dXRpb247XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJpc1Rlcm1FcXVhbFRvIiwidGVybUVxdWFsVG8iLCJpc0ZyYW1lRXF1YWxUbyIsImZyYW1lRXF1YWxUbyIsImlzVmFyaWFibGVFcXVhbFRvIiwidmFyaWFibGVFcXVhbFRvIiwiaXNTdGF0ZW1lbnRFcXVhbFRvIiwic3RhdGVtZW50RXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUVxdWFsVG8iLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJyZXNvbHZlZCIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyIsInNvbWUiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0lBOzs7ZUFBQTs7OzJEQTdJaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FENUJIO1FBRUYsSUFBSSxDQUFDQyxNQUFN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