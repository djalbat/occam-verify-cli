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
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        },
        {
            key: "getVariable",
            value: function getVariable(localContext) {
                var variable = null;
                var variableNode = variableNodeQuery(this.node);
                if (variableNode !== null) {
                    var variableName = (0, _name.variableNameFromVariableNode)(variableNode);
                    variable = localContext.findVariableByVariableName(variableName);
                }
                return variable;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(localContext) {
                var variables = [], variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName), variablesIncludesVariable = variables.includes(variable);
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
                var term = this, termString = this.string; ///
                localContext.trace("Verifying the '".concat(termString, "' term..."));
                if (!verified) {
                    var unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(term, localContext, verifyAhead);
                        if (unified) {
                            return true;
                        }
                    });
                    verified = unified; ///
                }
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var verified = verifyMixin(term, localContext, verifyAhead);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(termString, "' term."));
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
            value: function verifyGivenType(type, localContext) {
                var _this = this;
                var verifiedGivenType;
                var typeName = type.getName(), termString = this.getString();
                localContext.trace("Verifying the '".concat(termString, "' term given the '").concat(typeName, "' type..."));
                var verified = this.verify(localContext, function() {
                    var verifiedAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiedAhead = true;
                    }
                    return verifiedAhead;
                });
                verifiedGivenType = verified; ///
                if (verifiedGivenType) {
                    localContext.debug("...verified the '".concat(termString, "' term given the '").concat(typeName, "' type."));
                }
                return verifiedGivenType;
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var termString = this.string; ///
                fileContext.trace("Verifying the '".concat(termString, "' term at top level..."));
                var termNode = this.node, termVerifiedAsConstructor = _termAsConstructor.default.verifyTerm(termNode, fileContext);
                if (termVerifiedAsConstructor) {
                    var typeVerified = this.verifyType(fileContext);
                    verifiedAtTopLevel = typeVerified; ///
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(termString, "' term at top level."), termNode);
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
            value: function fromTermNode(termNode, localContext) {
                var term = null;
                if (termNode !== null) {
                    var node = termNode, string = localContext.nodeAsString(node), type = null;
                    term = new Term(string, node, type);
                }
                return term;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type, localContext) {
                var node = termNode, string = localContext.nodeAsString(node), term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var term = null;
                var termNode = termNodeQuery(definedAssertionNode);
                if (termNode !== null) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode !== null) {
                        var node = termNode, string = localContext.nodeAsString(node), type = null;
                        term = new Term(string, node, type);
                    }
                }
                return term;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var term = null;
                var termNode = termNodeQuery(containedAssertionNode);
                if (termNode !== null) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode !== null) {
                        var node = termNode, string = localContext.nodeAsString(node), type = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3ZlcmlmeVwiO1xuaW1wb3J0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvdGVybUFzQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Rlcm1bMF1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaCh0ZXJtKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICB2YXJpYWJsZU5vZGVzLmZvckVhY2goKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZWRHaXZlblR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5UeXBlO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyLnZlcmlmeVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0eXBlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGF0IHRvcCBsZXZlbC5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoIiwidGVybSIsIm1hdGNoZXMiLCJnZXRWYXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVOb2RlcyIsImZvckVhY2giLCJ2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JB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