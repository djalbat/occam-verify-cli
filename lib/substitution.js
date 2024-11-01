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
            key: "isSubstitutionEqualTo",
            value: function isSubstitutionEqualTo(substitution) {
                var substitutionEqualTo = false;
                return substitutionEqualTo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIGNvbnN0IHRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAoc3Vic3RpdHV0aW9uU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG8gPSBmYWxzZTtcblxuICAgIHJldHVybiBmcmFtZUVxdWFsVG87XG4gIH1cblxuICBpc1ZhcmlhYmxlRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIGlzU3RhdGVtZW50RXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRFcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUbztcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25FcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUbztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzID0gZXF1aXZhbGVuY2VzLnNvbWUoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdGhpcy51bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdWJzdGl0dXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzdGl0dXRpb247XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJpc1Rlcm1FcXVhbFRvIiwidGVybUVxdWFsVG8iLCJpc0ZyYW1lRXF1YWxUbyIsImZyYW1lRXF1YWxUbyIsImlzVmFyaWFibGVFcXVhbFRvIiwidmFyaWFibGVFcXVhbFRvIiwiaXNTdGF0ZW1lbnRFcXVhbFRvIiwic3RhdGVtZW50RXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUVxdWFsVG8iLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG8iLCJzdWJzdGl0dXRpb25FcXVhbFRvIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwicmVzb2x2ZWQiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsIk9iamVjdCIsImFzc2ln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