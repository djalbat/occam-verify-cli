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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/verify"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("./verifier/termAsConstructor"));
var _type = require("./type");
var _query = require("./utilities/query");
var _term = require("./nodeAndTokens/term");
var _name = require("./utilities/name");
var _json = require("./utilities/json");
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
var filter = _necessary.arrayUtilities.filter;
var termNodeQuery = (0, _query.nodeQuery)("/*/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableNodesQuery = (0, _query.nodesQuery)("//variable");
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
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "getVariable",
            value: function getVariable(context) {
                var variable = null;
                var variableNode = variableNodeQuery(this.node);
                if (variableNode !== null) {
                    var variableName = (0, _name.variableNameFromVariableNode)(variableNode);
                    variable = context.findVariableByVariableName(variableName);
                }
                return variable;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(context) {
                var variables = [], variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = context.findVariableByVariableName(variableName), variablesIncludesVariable = variables.includes(variable);
                    if (!variablesIncludesVariable) {
                        variables.push(variable);
                    }
                });
                return variables;
            }
        },
        {
            key: "isGrounded",
            value: function isGrounded(definedVariables, context) {
                var variables = this.getVariables(context);
                filter(variables, function(variable) {
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
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var equalTo = false;
                var termNode = term.getNode(), termNodeMatches = this.node.match(termNode);
                if (termNodeMatches) {
                    var termType = term.getType();
                    if (this.type === termType) {
                        equalTo = true;
                    }
                }
                return equalTo;
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
            value: function isInitiallyGrounded(context) {
                var variables = this.getVariables(context), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, context) {
                var grounded = this.isGrounded(definedVariables, context), implicitlyGrounded = grounded; ///
                return implicitlyGrounded;
            }
        },
        {
            key: "verify",
            value: function verify(context, verifyAhead) {
                var verified = false;
                var term = this, termString = this.string; ///
                context.trace("Verifying the '".concat(termString, "' term..."));
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var verified = verifyMixin(term, context, verifyAhead);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (!verified) {
                    var unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(term, context, verifyAhead);
                        if (unified) {
                            return true;
                        }
                    });
                    verified = unified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(termString, "' term."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified;
                if (this.type === _type.objectType) {
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
            key: "verifyGivenType",
            value: function verifyGivenType(type, context) {
                var _this = this;
                var verifiedGivenType;
                var typeName = type.getName(), termString = this.getString();
                context.trace("Verifying the '".concat(termString, "' term given the '").concat(typeName, "' type..."));
                var verified = this.verify(context, function() {
                    var verifiedAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiedAhead = true;
                    }
                    return verifiedAhead;
                });
                verifiedGivenType = verified; ///
                if (verifiedGivenType) {
                    context.debug("...verified the '".concat(termString, "' term given the '").concat(typeName, "' type."));
                }
                return verifiedGivenType;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedAtTopLevel;
                var termString = this.string; ///
                fileContext.trace("Verifying the '".concat(termString, "' term when declared..."));
                var termNode = this.node, termVerifiedAsConstructor = _termAsConstructor.default.verifyTerm(termNode, fileContext);
                if (termVerifiedAsConstructor) {
                    var typeVerified = this.verifyType(fileContext);
                    verifiedAtTopLevel = typeVerified; ///
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(termString, "' term when declared."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.string, type = typeJSON, json = {
                    type: type,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, context = fileContext, termString = string, termNode = (0, _term.termNodeFromTermString)(termString, context), node = termNode, type = (0, _json.typeFromJSON)(json, fileContext), term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var term = null;
                if (termNode !== null) {
                    var node = termNode, string = context.nodeAsString(node), type = null;
                    term = new Term(string, node, type);
                }
                return term;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type, context) {
                var node = termNode, string = context.nodeAsString(node), term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var term = null;
                var termNode = termNodeQuery(definedAssertionNode);
                if (termNode !== null) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode !== null) {
                        var node = termNode, string = context.nodeAsString(node), type = null;
                        term = new Term(string, node, type);
                    }
                }
                return term;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var term = null;
                var termNode = termNodeQuery(containedAssertionNode);
                if (termNode !== null) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode !== null) {
                        var node = termNode, string = context.nodeAsString(node), type = null;
                        term = new Term(string, node, type);
                    }
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3ZlcmlmeVwiO1xuaW1wb3J0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvdGVybUFzQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vbm9kZUFuZFRva2Vucy90ZXJtXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi90ZXJtWzBdXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLy92YXJpYWJsZVwiKTtcblxuY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHZhcmlhYmxlTm9kZXMuZm9yRWFjaCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IHRlcm1UeXBlKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVkR2l2ZW5UeXBlID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlblR5cGU7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlIiwiY29udGV4dCIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVOb2RlcyIsImZvckVhY2giLCJ2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNFcXVhbFRvIiwidGVybSIsImVxdWFsVG8iLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwidGVybVR5cGUiLCJtYXRjaFRlcm1Ob2RlIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1WQTs7O2VBQUE7Ozt5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