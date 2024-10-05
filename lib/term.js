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
var _type = /*#__PURE__*/ _interop_require_wildcard(require("./type"));
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/term/verify"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("./verifier/termAsConstructor"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
var _typeNames = require("./typeNames");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
            key: "unifyWithType",
            value: function unifyWithType(type, localContext) {
                var unifiedWithType;
                var termString = this.getString(), typeString = type.getString();
                localContext.trace("Unifying the '".concat(termString, "' term with the '").concat(typeString, "' type..."));
                var typeName = type.getName(), typeNameObjectTypeName = typeName === _typeNames.OBJECT_TYPE_NAME;
                type = typeNameObjectTypeName ? _type.objectType : localContext.findTypeByTypeName(typeName); ///
                var verifiedGivenType = this.verifyGivenType(type, localContext);
                unifiedWithType = verifiedGivenType; ///
                if (unifiedWithType) {
                    localContext.debug("...unified the '".concat(termString, "' term with the '").concat(typeString, "' type."));
                }
                return unifiedWithType;
            }
        },
        {
            key: "verifyGivenType",
            value: function verifyGivenType(type, localContext) {
                var _this = this;
                var verifiedGivenType;
                var termString = this.getString(), typeString = type.getString();
                localContext.trace("Verifying the '".concat(termString, "'  term given the '").concat(typeString, "' type..."));
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
                    localContext.debug("...verified the '".concat(termString, "'  term given the '").concat(typeString, "' type."));
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
                var string = json.string, termString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser), node = termNode;
                var type = json.type;
                var typeJSON = type; ///
                json = typeJSON; ///
                type = json !== null ? _type.default.fromJSON(json, fileContext) : null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdW5pZnlcIjtcbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgdGVybUFzQ29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCJcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLy92YXJpYWJsZVwiKTtcblxuY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2godGVybSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyaWFibGVOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gdmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCF2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGxvY2FsQ29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4geyAvLy9cbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4odGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbih0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlXaXRoVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhUeXBlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZU9iamVjdFR5cGVOYW1lID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKTtcblxuICAgIHR5cGUgPSB0eXBlTmFtZU9iamVjdFR5cGVOYW1lID9cbiAgICAgICAgICAgICBvYmplY3RUeXBlIDpcbiAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyAvLy9cblxuICAgIGNvbnN0IHZlcmlmaWVkR2l2ZW5UeXBlID0gdGhpcy52ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoVHlwZSA9IHZlcmlmaWVkR2l2ZW5UeXBlOyAgLy8vXG5cbiAgICBpZiAodW5pZmllZFdpdGhUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aFR5cGU7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nICB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVkR2l2ZW5UeXBlID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuVHlwZTtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5ub2RlOyAgLy8vXG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyLnZlcmlmeVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXQgdG9wIGxldmVsLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gKHRoaXMudHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGU7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgIHR5cGUgPSAoanNvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgIFR5cGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIDpcbiAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtOyJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiVGVybSIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImdldFZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInB1c2giLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImZpbHRlciIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ1bmlmaWVkIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ1bmlmeVdpdGhUeXBlIiwidW5pZmllZFdpdGhUeXBlIiwidHlwZVN0cmluZyIsInR5cGVOYW1lT2JqZWN0VHlwZU5hbWUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiVHlwZSIsImZyb21UZXJtTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwU0E7OztlQUFBOzs7MkRBeFNpQjs0REFDQTs0REFDTzs2REFDQzt3RUFDYTtxQkFFZjtxQkFFSTt5QkFDTTtvQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQU1B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