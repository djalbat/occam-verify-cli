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
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                return statement;
            }
        },
        {
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                var substitutionNode = null;
                return substitutionNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = null;
                return metavariableNode;
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
                return equalTo;
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
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches = false;
                return termNodeMatches;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                var frameNodeMatches = false;
                return frameNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeMatches = false;
                return statementNodeMatches;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var variableNameMatches = false;
                return variableNameMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = false;
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetavariableNodeAndSubstitutionNode",
            value: function matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var metavariableNodeAndSubstitutionNodeMatches = false;
                return metavariableNodeAndSubstitutionNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIGNvbnN0IHRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0aGlzLnVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN1YnN0aXR1dGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnN0aXR1dGlvbjtcbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm0iLCJ0ZXJtIiwiZ2V0RnJhbWUiLCJmcmFtZSIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudCIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImlzQ29tcGxleCIsImNvbXBsZXgiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJlcXVhbFRvIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwicmVzb2x2ZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsIk9iamVj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