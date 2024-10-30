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
var _constructor = /*#__PURE__*/ _interop_require_default(require("./verifier/constructor"));
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
                    var generalContext = context, variableName = (0, _name.variableNameFromVariableNode)(variableNode);
                    variable = generalContext.findVariableByVariableName(variableName);
                }
                return variable;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(context) {
                var variables = [], variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var generalContext = context, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = generalContext.findVariableByVariableName(variableName), variablesIncludesVariable = variables.includes(variable);
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
            value: function verifyGivenType(type, generalContext, specificContext) {
                var _this = this;
                var verifiedGivenType;
                var typeName = type.getName(), termString = this.getString();
                specificContext.trace("Verifying the '".concat(termString, "' term given the '").concat(typeName, "' type..."));
                var context = specificContext, verified = this.verify(context, function() {
                    var verifiedAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiedAhead = true;
                    }
                    return verifiedAhead;
                });
                verifiedGivenType = verified; ///
                if (verifiedGivenType) {
                    specificContext.debug("...verified the '".concat(termString, "' term given the '").concat(typeName, "' type."));
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
                var termNode = this.node, termVerifiedAsConstructor = _constructor.default.verifyTerm(termNode, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3ZlcmlmeVwiO1xuaW1wb3J0IGNvbnN0cnVjdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vbm9kZUFuZFRva2Vucy90ZXJtXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi90ZXJtWzBdXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLy92YXJpYWJsZVwiKTtcblxuY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyaWFibGVOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICB2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gdmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCF2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09PSB0ZXJtVHlwZSkge1xuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbih0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVkR2l2ZW5UeXBlID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuVHlwZTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gY29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm07XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiVGVybSIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VmFyaWFibGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwicHVzaCIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzRXF1YWxUbyIsInRlcm0iLCJlcXVhbFRvIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaCIsInRlcm1UeXBlIiwibWF0Y2hUZXJtTm9kZSIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJ2ZXJpZmllZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInZlcmlmeU1peGlucyIsInNvbWUiLCJ2ZXJpZnlNaXhpbiIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInVuaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwidmVyaWZpZWRBdFRvcExldmVsIiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzVkE7OztlQUFBOzs7eUJBcFYrQjsyREFFZDs0REFDTzs2REFDQztrRUFDTztvQkFFTDtxQkFDVztvQkFDQztvQkFDTTtvQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVSLElBQU1FLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxlQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkUscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXRDLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDFCSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSlZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxP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