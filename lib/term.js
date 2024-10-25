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
var _node = require("./utilities/node");
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termString = string, termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser), node = termNode, type = (0, _json.typeFromJSON)(json, fileContext), term = new Term(string, node, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3ZlcmlmeVwiO1xuaW1wb3J0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvdGVybUFzQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Rlcm1bMF1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyaWFibGVOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gdGVybVR5cGUpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4geyAvLy9cbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuVHlwZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZWRHaXZlblR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuVHlwZTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlIiwiY29udGV4dCIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVOb2RlcyIsImZvckVhY2giLCJ2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNFcXVhbFRvIiwidGVybSIsImVxdWFsVG8iLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwidGVybVR5cGUiLCJtYXRjaFRlcm1Ob2RlIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9k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