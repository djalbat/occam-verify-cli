"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICBjb25zdCB0ZXJtID0gbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgY29uc3QgZnJhbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHN1YnN0aXR1dGlvblN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUbyh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUVxdWFsVG8gPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUbztcbiAgfVxuXG4gIGlzRnJhbWVFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZnJhbWVFcXVhbFRvO1xuICB9XG5cbiAgaXNWYXJpYWJsZUVxdWFsVG8odmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUVxdWFsVG8gPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZUVxdWFsVG87XG4gIH1cblxuICBpc1N0YXRlbWVudEVxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG87XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG87XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvbkVxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG87XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcy5zb21lKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRoaXMudW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsInRlcm0iLCJnZXRGcmFtZSIsImZyYW1lIiwiZ2V0VmFyaWFibGUiLCJ2YXJpYWJsZSIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudCIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJpc1NpbXBsZSIsInNpbXBsZSIsImlzQ29tcGxleCIsImNvbXBsZXgiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiaXNUZXJtRXF1YWxUbyIsInRlcm1FcXVhbFRvIiwiaXNGcmFtZUVxdWFsVG8iLCJmcmFtZUVxdWFsVG8iLCJpc1ZhcmlhYmxlRXF1YWxUbyIsInZhcmlhYmxlRXF1YWxUbyIsImlzU3RhdGVtZW50RXF1YWxUbyIsInN0YXRlbWVudEVxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvIiwic3Vic3RpdHV0aW9uRXF1YWxUbyIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInJlc29sdmVkIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzIiwic29tZSIsInN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1B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