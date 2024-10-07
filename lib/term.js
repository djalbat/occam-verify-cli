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
function typeFromJSON(json, fileContext) {
    var type = json.type;
    var name = type.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdW5pZnlcIjtcbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQge29iamVjdFR5cGV9IGZyb20gXCIuL3R5cGVcIjtcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8vdmFyaWFibGVcIik7XG5cbmNsYXNzIFRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHZhcmlhYmxlTm9kZXMuZm9yRWFjaCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4odGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB2ZXJpZmllZEdpdmVuVHlwZSA9IHZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlblR5cGU7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybTtcblxuZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBuYW1lIH0gPSB0eXBlLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiVGVybSIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImdldFZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInB1c2giLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImZpbHRlciIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ1bmlmaWVkIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmVyaWZ5R2l2ZW5UeXBlIiwidmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1UUE7OztlQUFBOzs7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