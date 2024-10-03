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
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("./verifier/termAsConstructor"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
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
var variableNodesQuery = (0, _query.nodesQuery)("//variable");
var Term = /*#__PURE__*/ function() {
    function Term(string, node, type) {
        _class_call_check(this, Term);
        this.string = string;
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
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
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(localContext) {
                var variables = [], variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var variable = localContext.findVariableByVariableNode(variableNode), variablesIncludesVariable = variables.includes(variable);
                    if (!variablesIncludesVariable) {
                        variables.push(variable);
                    }
                });
                return variables;
            }
        },
        {
            key: "isGrounded",
            value: function isGrounded(definedVariables, localContext) {
                var variables = this.getVariables(localContext);
                (0, _array.filter)(variables, function(variable) {
                    var definedVariablesIncludesVariable = definedVariables.includes(variable);
                    if (!definedVariablesIncludesVariable) {
                        return true;
                    }
                });
                var undefinedVariables = variables, undefinedVariablesLength = undefinedVariables.length, grounded = undefinedVariablesLength <= 1;
                return grounded;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches = this.node.match(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "isInitiallyGrounded",
            value: function isInitiallyGrounded(localContext) {
                var variables = this.getVariables(localContext), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, localContext) {
                var grounded = this.isGrounded(definedVariables, localContext), implicitlyGrounded = grounded; ///
                return implicitlyGrounded;
            }
        },
        {
            key: "verify",
            value: function verify(localContext, verifyAhead) {
                var verified = false;
                debugger;
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified;
                if (this.type === null) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = fileContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        fileContext.debug("The '".concat(typeName, "' type is missing."));
                    } else {
                        this.type = type; ///
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyAsConstructor",
            value: function verifyAsConstructor(fileContext) {
                var verifiedAsConstructor;
                var termNode = this.node, termString = this.string; ///
                fileContext.trace("Verifying the '".concat(termString, "' term as a constructor..."));
                verifiedAsConstructor = _termAsConstructor.default.verifyTerm(termNode, fileContext);
                if (verifiedAsConstructor) {
                    fileContext.debug("...verified the '".concat(termString, "' term as a constructor."), termNode);
                }
                return verifiedAsConstructor;
            }
        }
    ], [
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, fileContext) {
                var node = termNode, string = fileContext.nodeAsString(node), type = null, term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type, fileContext) {
                var node = termNode, string = fileContext.nodeAsString(node), term = new Term(string, node, type);
                return term;
            }
        }
    ]);
    return Term;
}();
Object.assign(_shim.default, {
    Term: Term
});
var _default = Term;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuXG5jb25zdCB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLy92YXJpYWJsZVwiKTtcblxuY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh0ZXJtKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICB2YXJpYWJsZU5vZGVzLmZvckVhY2goKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUFzQ29uc3RydWN0b3IoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIHZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybTsiXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImdldFZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInB1c2giLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImZpbHRlciIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0cmFjZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImRlYnVnIiwidmVyaWZ5QXNDb25zdHJ1Y3RvciIsInZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJ0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsImZyb21UZXJtTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzS0E7OztlQUFBOzs7MkRBcEtpQjt3RUFDcUI7cUJBRWY7cUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXRDLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDFCSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSlZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJ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