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
    function Substitution(string) {
        _class_call_check(this, Substitution);
        this.string = string;
    }
    _create_class(Substitution, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                return metavariableName;
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
            value: function resolve(substitutions, localContext) {
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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = false;
                return metavariableNameMatches;
            }
        },
        {
            key: "matchMetavariableNameAndSubstitutionNode",
            value: function matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var metavariableNameAndSubstitutionNodeMatches = false;
                return metavariableNameAndSubstitutionNodeMatches;
            }
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedWithEquivalence = false;
                return unifiedWithEquivalence;
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB) {
                var _this = this;
                var unifiedWithEquivalences = equivalences.some(function(equivalence) {
                    var substitutionUnifiedWithEquivalence = _this.unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICBjb25zdCB0ZXJtID0gbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgY29uc3QgZnJhbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIGNvbXBsZXggPSAhc2ltcGxlO1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0aGlzLnVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN1YnN0aXR1dGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnN0aXR1dGlvbjtcbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJpc0NvbXBsZXgiLCJjb21wbGV4IiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZXF1YWxUbyIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicmVzb2x2ZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStIQTs7O2VBQUE7OzsyREE3SGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUUMsTUFBTTtnQ0FEZEQ7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUZaRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dC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