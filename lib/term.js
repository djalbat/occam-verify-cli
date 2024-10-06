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
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/verify"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("./verifier/termAsConstructor"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
var _node = require("./utilities/node");
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
            key: "verifyGivenType",
            value: function verifyGivenType(type, localContext) {
                var _this = this;
                var verifiedGivenType;
                var termString = this.getString(), typeString = type.getString();
                localContext.trace("Verifying the '".concat(termString, "' term given the '").concat(typeString, "' type..."));
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
                    localContext.debug("...verified the '".concat(termString, "' term given the '").concat(typeString, "' type."));
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
                var termNode = this.node; ///
                verifiedAtTopLevel = _termAsConstructor.default.verifyTerm(termNode, fileContext);
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(termString, "' term at top level."), termNode);
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = this.type !== null ? this.type.toJSON() : null, string = this.string, type = typeJSON, json = {
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
                var Type = _shim.default.Type, string = json.string, termString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser), node = termNode;
                var type = json.type;
                var typeJSON = type; ///
                json = typeJSON; ///
                type = json !== null ? Type.fromJSON(json, fileContext) : null;
                var term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, localContext) {
                var node = termNode, string = localContext.nodeAsString(node), type = null, term = new Term(string, node, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdW5pZnlcIjtcbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaCh0ZXJtKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICB2YXJpYWJsZU5vZGVzLmZvckVhY2goKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZWRHaXZlblR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlblR5cGU7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGF0IHRvcCBsZXZlbC5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGU7ICAvLy9cblxuICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgdHlwZSA9IChqc29uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgOlxuICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIGNvbnN0IHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm07Il0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaCIsInRlcm0iLCJtYXRjaGVzIiwiZ2V0VmFyaWFibGVzIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGVzIiwidmFyaWFibGVOb2RlcyIsImZvckVhY2giLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwicHVzaCIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZmlsdGVyIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJ2ZXJpZmllZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJUeXBlIiwic2hpbSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiZnJvbVRlcm1Ob2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOFFBOzs7ZUFBQTs7OzJEQTVRaUI7NERBQ087NkRBQ0M7d0VBQ2E7cUJBRWY7cUJBQ0k7b0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXRDLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDFCSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFH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