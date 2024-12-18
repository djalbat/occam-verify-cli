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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/term/verify"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../verifier/constructor"));
var _type = require("./type");
var _query = require("../utilities/query");
var _term = require("../context/partial/term");
var _json = require("../utilities/json");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _Term;
var filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
var variableNodesQuery = (0, _query.nodesQuery)("//variable"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), definedAssertionTermNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term");
var _default = (0, _dom.domAssigned)((_Term = /*#__PURE__*/ function() {
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
                var Variable = _dom.default.Variable, termNode = this.node, variable = Variable.fromTermNode(termNode, context);
                return variable;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(context) {
                var variableNodes = variableNodesQuery(this.node), variables = variableNodes.map(function(variableNode) {
                    var Variable = _dom.default.Variable, variable = Variable.fromVariableNode(variableNode, context);
                    return variable;
                });
                compress(variables, function(variableA, variableB) {
                    var variableAEqualToVariableB = variableA.isEqualTo(variableB);
                    if (variableAEqualToVariableB) {
                        return true;
                    }
                });
                return variables;
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
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var equalTo = false;
                var termString = term.getString();
                if (termString === this.string) {
                    var termType = term.getType();
                    if (termType === this.type) {
                        equalTo = true;
                    }
                }
                return equalTo;
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
                var _this = this;
                var verified;
                var termString = this.string; ///
                context.trace("Verifying the '".concat(termString, "' term..."));
                verified = _verify.default.some(function(verifyMixin) {
                    var term = _this, verified = verifyMixin(term, context, verifyAhead);
                    if (verified) {
                        return true;
                    }
                });
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
                var verifiedWhenDeclared;
                var termString = this.string; ///
                fileContext.trace("Verifying the '".concat(termString, "' term when declared..."));
                var termNode = this.node, termVerifiedAsConstructor = _constructor.default.verifyTerm(termNode, fileContext);
                if (termVerifiedAsConstructor) {
                    var typeVerified = this.verifyType(fileContext);
                    verifiedWhenDeclared = typeVerified; ///
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(termString, "' term when declared."));
                }
                return verifiedWhenDeclared;
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
                var string = json.string, localContext = _local.default.fromFileContext(fileContext), context = localContext, termString = string, termNode = (0, _term.termNodeFromTermString)(termString, context), node = termNode, type = (0, _json.typeFromJSON)(json, fileContext), term = new Term(string, node, type);
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
                var definedAssertionTermNode = definedAssertionTermNodeQuery(definedAssertionNode);
                if (definedAssertionTermNode !== null) {
                    var termNode = definedAssertionTermNode, termVariableNode = termVariableNodeQuery(termNode);
                    if (termVariableNode !== null) {
                        var node = termNode, string = context.nodeAsString(node), type = null;
                        term = new Term(string, node, type);
                    }
                }
                return term;
            }
        }
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC90ZXJtXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29tcHJlc3ModmFyaWFibGVzLCAodmFyaWFibGVBLCB2YXJpYWJsZUIpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIgPSB2YXJpYWJsZUEuaXNFcXVhbFRvKHZhcmlhYmxlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgaWYgKHRlcm1TdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodGVybVR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdmVyaWZpZWRHaXZlblR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5UeXBlO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25UZXJtTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRWYXJpYWJsZSIsImNvbnRleHQiLCJWYXJpYWJsZSIsImRvbSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZU5vZGVzIiwidmFyaWFibGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlQSIsInZhcmlhYmxlQiIsInZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ0ZXJtIiwiZXF1YWxUbyIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZSIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidHJhY2UiLCJ2ZXJpZnlNaXhpbnMiLCJzb21lIiwidmVyaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwidHlwZUZyb21KU09OIiwibm9kZUFzU3RyaW5nIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlIiwidGVybVZhcmlhYmxlTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7Ozt5QkFuQitCOzJEQUVmOzREQUNTOzZEQUNBO2tFQUNPO29CQUVMO3FCQUVXO29CQUNDO29CQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFRQSxTQUFxQkMseUJBQWMsQ0FBbkNELFFBQVFFLFdBQWFELHlCQUFjLENBQTNCQztBQUVoQixJQUFNQyxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsZUFDaENDLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENDLGdDQUFnQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUVoRCxXQUFlRSxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRENIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxPQUFPO2dCQUNqQixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLFdBQVcsSUFBSSxDQUFDVixJQUFJLEVBQ3BCVyxXQUFXSCxTQUFTSSxZQUFZLENBQUNGLFVBQVVIO2dCQUVqRCxPQUFPSTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFOLE9BQU87Z0JBQ2xCLElBQU1PLGdCQUFnQnRCLG1CQUFtQixJQUFJLENBQUNRLElBQUksR0FDNUNlLFlBQVlELGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztvQkFDN0IsSUFBTSxBQUFFVCxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRyxXQUFXSCxTQUFTVSxnQkFBZ0IsQ0FBQ0QsY0FBY1Y7b0JBRXpELE9BQU9JO2dCQUNUO2dCQUVOcEIsU0FBU3dCLFdBQVcsU0FBQ0ksV0FBV0M7b0JBQzlCLElBQU1DLDRCQUE0QkYsVUFBVUcsU0FBUyxDQUFDRjtvQkFFdEQsSUFBSUMsMkJBQTJCO3dCQUM3QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY2IsUUFBUTtnQkFDcEIsSUFBTWMsa0JBQWtCLElBQUksQ0FBQ3hCLElBQUksQ0FBQ3lCLEtBQUssQ0FBQ2Y7Z0JBRXhDLE9BQU9jO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUksSUFBSTtnQkFDWixJQUFJQyxVQUFVO2dCQUVkLElBQU1DLGFBQWFGLEtBQUt4QixTQUFTO2dCQUVqQyxJQUFJMEIsZUFBZSxJQUFJLENBQUM3QixNQUFNLEVBQUU7b0JBQzlCLElBQU04QixXQUFXSCxLQUFLdEIsT0FBTztvQkFFN0IsSUFBSXlCLGFBQWEsSUFBSSxDQUFDNUIsSUFBSSxFQUFFO3dCQUMxQjBCLFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxnQkFBZ0IsRUFBRXhCLE9BQU87Z0JBQ2xDLElBQU1RLFlBQVksSUFBSSxDQUFDRixZQUFZLENBQUNOO2dCQUVwQ2xCLE9BQU8wQixXQUFXLFNBQUNKO29CQUNqQixJQUFNcUIsbUNBQW1DRCxpQkFBaUJFLFFBQVEsQ0FBQ3RCO29CQUVuRSxJQUFJLENBQUNxQixrQ0FBa0M7d0JBQ3JDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUUscUJBQXFCbkIsV0FDckJvQiwyQkFBMkJELG1CQUFtQkUsTUFBTSxFQUNwREMsV0FBWUYsNEJBQTRCO2dCQUU5QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQi9CLE9BQU87Z0JBQ3pCLElBQU1RLFlBQVksSUFBSSxDQUFDRixZQUFZLENBQUNOLFVBQzlCZ0Msa0JBQWtCeEIsVUFBVXFCLE1BQU0sRUFDbENJLG9CQUFxQkQsb0JBQW9CO2dCQUUvQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQlYsZ0JBQWdCLEVBQUV4QixPQUFPO2dCQUM1QyxJQUFNOEIsV0FBVyxJQUFJLENBQUNQLFVBQVUsQ0FBQ0Msa0JBQWtCeEIsVUFDN0NtQyxxQkFBcUJMLFVBQVcsR0FBRztnQkFFekMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPcEMsT0FBTyxFQUFFcUMsV0FBVzs7Z0JBQ3pCLElBQUlDO2dCQUVKLElBQU1qQixhQUFhLElBQUksQ0FBQzdCLE1BQU0sRUFBRyxHQUFHO2dCQUVwQ1EsUUFBUXVDLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYbEIsWUFBVztnQkFFM0NpQixXQUFXRSxlQUFZLENBQUNDLElBQUksQ0FBQyxTQUFDQztvQkFDNUIsSUFBTXZCLGNBQ0FtQixXQUFXSSxZQUFZdkIsTUFBTW5CLFNBQVNxQztvQkFFNUMsSUFBSUMsVUFBVTt3QkFDWixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1p0QyxRQUFRMkMsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVh0QixZQUFXO2dCQUMvQztnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxXQUFXO2dCQUNwQixJQUFJQztnQkFFSixJQUFJLElBQUksQ0FBQ3BELElBQUksS0FBS3FELGdCQUFVLEVBQUU7b0JBQzVCRCxlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU1FLFdBQVcsSUFBSSxDQUFDdEQsSUFBSSxDQUFDdUQsT0FBTztvQkFFbENKLFlBQVlOLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUUyxVQUFTO29CQUU3QyxJQUFNdEQsT0FBT21ELFlBQVlLLGtCQUFrQixDQUFDRjtvQkFFNUMsSUFBSXRELFNBQVMsTUFBTTt3QkFDakJtRCxZQUFZRixLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUSyxVQUFTO29CQUNyQyxPQUFPO3dCQUNMLElBQUksQ0FBQ3RELElBQUksR0FBR0EsTUFBTSxHQUFHO3dCQUVyQm9ELGVBQWU7b0JBQ2pCO29CQUVBLElBQUlBLGNBQWM7d0JBQ2hCRCxZQUFZRixLQUFLLENBQUMsQUFBQyxvQkFBNEIsT0FBVEssVUFBUztvQkFDakQ7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0J6RCxJQUFJLEVBQUUwRCxjQUFjLEVBQUVDLGVBQWU7O2dCQUNuRCxJQUFJQztnQkFFSixJQUFNTixXQUFXdEQsS0FBS3VELE9BQU8sSUFDdkI1QixhQUFhLElBQUksQ0FBQzFCLFNBQVM7Z0JBRWpDMEQsZ0JBQWdCZCxLQUFLLENBQUMsQUFBQyxrQkFBZ0RTLE9BQS9CM0IsWUFBVyxzQkFBNkIsT0FBVDJCLFVBQVM7Z0JBRWhGLElBQU1oRCxVQUFVcUQsaUJBQ1ZmLFdBQVcsSUFBSSxDQUFDRixNQUFNLENBQUNwQyxTQUFTO29CQUM5QixJQUFJdUQ7b0JBRUosSUFBTUMsc0NBQXNDLE1BQUs5RCxJQUFJLENBQUMrRCxvQkFBb0IsQ0FBQy9EO29CQUUzRSxJQUFJOEQscUNBQXFDO3dCQUN2Q0QsZ0JBQWdCO29CQUNsQjtvQkFFQSxPQUFPQTtnQkFDVDtnQkFFTkQsb0JBQW9CaEIsVUFBVSxHQUFHO2dCQUVqQyxJQUFJZ0IsbUJBQW1CO29CQUNyQkQsZ0JBQWdCVixLQUFLLENBQUMsQUFBQyxvQkFBa0RLLE9BQS9CM0IsWUFBVyxzQkFBNkIsT0FBVDJCLFVBQVM7Z0JBQ3BGO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CYixXQUFXO2dCQUM1QixJQUFJYztnQkFFSixJQUFNdEMsYUFBYSxJQUFJLENBQUM3QixNQUFNLEVBQUcsR0FBRztnQkFFcENxRCxZQUFZTixLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWGxCLFlBQVc7Z0JBRS9DLElBQU1sQixXQUFXLElBQUksQ0FBQ1YsSUFBSSxFQUNwQm1FLDRCQUE0QkMsb0JBQW1CLENBQUNDLFVBQVUsQ0FBQzNELFVBQVUwQztnQkFFM0UsSUFBSWUsMkJBQTJCO29CQUM3QixJQUFNZCxlQUFlLElBQUksQ0FBQ0YsVUFBVSxDQUFDQztvQkFFckNjLHVCQUF1QmIsY0FBZSxHQUFHO2dCQUMzQztnQkFFQSxJQUFJYSxzQkFBc0I7b0JBQ3hCZCxZQUFZRixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWHRCLFlBQVc7Z0JBQ25EO2dCQUVBLE9BQU9zQztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDdkUsSUFBSSxHQUNuQ0YsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJFLE9BQU9zRSxVQUNQRSxPQUFPO29CQUNMeEUsTUFBQUE7b0JBQ0FGLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU8wRTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRXJCLFdBQVc7Z0JBQy9CLElBQU0sQUFBRXJELFNBQVcwRSxLQUFYMUUsUUFDRjRFLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDekIsY0FDNUM3QyxVQUFVb0UsY0FDVi9DLGFBQWE3QixRQUNiVyxXQUFXb0UsSUFBQUEsNEJBQXNCLEVBQUNsRCxZQUFZckIsVUFDOUNQLE9BQU9VLFVBQ1BULE9BQU84RSxJQUFBQSxrQkFBWSxFQUFDTixNQUFNckIsY0FDMUIxQixPQUFPLElBQUk1QixLQUFLQyxRQUFRQyxNQUFNQztnQkFFcEMsT0FBT3lCO1lBQ1Q7OztZQUVPZCxLQUFBQTttQkFBUCxTQUFPQSxhQUFhRixRQUFRLEVBQUVILE9BQU87Z0JBQ25DLElBQUltQixPQUFPO2dCQUVYLElBQUloQixhQUFhLE1BQU07b0JBQ3JCLElBQU1WLE9BQU9VLFVBQ1BYLFNBQVNRLFFBQVF5RSxZQUFZLENBQUNoRixPQUM5QkMsT0FBTztvQkFFYnlCLE9BQU8sSUFBSTVCLEtBQUtDLFFBQVFDLE1BQU1DO2dCQUNoQztnQkFFQSxPQUFPeUI7WUFDVDs7O1lBRU91RCxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0J2RSxRQUFRLEVBQUVULElBQUksRUFBRU0sT0FBTztnQkFDaEQsSUFBTVAsT0FBT1UsVUFDUFgsU0FBU1EsUUFBUXlFLFlBQVksQ0FBQ2hGLE9BQzlCMEIsT0FBTyxJQUFJNUIsS0FBS0MsUUFBUUMsTUFBTUM7Z0JBRXBDLE9BQU95QjtZQUNUOzs7WUFFT3dELEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUU1RSxPQUFPO2dCQUMzRCxJQUFJbUIsT0FBTztnQkFFWCxJQUFNMEQsMkJBQTJCeEYsOEJBQThCdUY7Z0JBRS9ELElBQUlDLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNMUUsV0FBVzBFLDBCQUNYQyxtQkFBbUIzRixzQkFBc0JnQjtvQkFFL0MsSUFBSTJFLHFCQUFxQixNQUFNO3dCQUM3QixJQUFNckYsT0FBT1UsVUFDUFgsU0FBU1EsUUFBUXlFLFlBQVksQ0FBQ2hGLE9BQzlCQyxPQUFPO3dCQUVieUIsT0FBTyxJQUFJNUIsS0FBS0MsUUFBUUMsTUFBTUM7b0JBQ2hDO2dCQUNGO2dCQUVBLE9BQU95QjtZQUNUOzs7O0tBeERBLHdCQUFPNEQsUUFBTyJ9