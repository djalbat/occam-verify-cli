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
var _type = require("./type");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdW5pZnlcIjtcbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQge29iamVjdFR5cGV9IGZyb20gXCIuL3R5cGVcIjtcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8vdmFyaWFibGVcIik7XG5cbmNsYXNzIFRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHZhcmlhYmxlTm9kZXMuZm9yRWFjaCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4odGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB2ZXJpZmllZEdpdmVuVHlwZSA9IHZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlblR5cGU7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm07XG5cbmZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoIiwidGVybSIsIm1hdGNoZXMiLCJnZXRWYXJpYWJsZXMiLCJsb2NhbENvbnRleHQiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZU5vZGVzIiwiZm9yRWFjaCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJmaWx0ZXIiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJP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