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
var termNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableNodesQuery = (0, _query.nodesQuery)("//variable");
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
                var typeJSON = this.type.toJSON(), string = this.string, type = typeJSON, json = {
                    string: string,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, termString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser), node = termNode, type = typeFromJSON(json, fileContext), term = new Term(string, node, type);
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
function typeFromJSON(json, fileContext) {
    var type = json.type;
    var name = type.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy90ZXJtL3ZlcmlmeVwiO1xuaW1wb3J0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvdGVybUFzQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm1bMF1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaCh0ZXJtKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICB2YXJpYWJsZU5vZGVzLmZvckVhY2goKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZWRHaXZlblR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5UeXBlO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyLnZlcmlmeVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0eXBlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGF0IHRvcCBsZXZlbC5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHRoaXMudHlwZS50b0pTT04oKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybTtcblxuZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBuYW1lIH0gPSB0eXBlLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaCIsInRlcm0iLCJtYXRjaGVzIiwiZ2V0VmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwicHVzaCIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJ2ZXJpZmllZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJ2ZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInRvSlNPTiIsInR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFUQTs7O2VBQUE7Ozt5QkFuVCtCOzJEQUVkOzREQUNPOzZEQUNDO3dFQUNhO29CQUVYO3FCQUNXO29CQUNDO29CQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUEsU0FBV0MseUJBQWMsQ0FBekJEO0FBRVIsSUFBTUUsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkUscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXRDLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDFCSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSlZIOztZQU9KSSxLQUFBQTttQkFBQUEs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