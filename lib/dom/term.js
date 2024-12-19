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
var variableNodesQuery = (0, _query.nodesQuery)("//variable"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), definedAssertionTermNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term"), containedAssertionTermNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term");
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
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var term = null;
                var containedAssertionTermNode = containedAssertionTermNodeQuery(containedAssertionNode);
                if (containedAssertionTermNode !== null) {
                    var termNode = containedAssertionTermNode, termVariableNode = termVariableNodeQuery(termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC90ZXJtXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vdGVybVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCID0gdmFyaWFibGVBLmlzRXF1YWxUbyh2YXJpYWJsZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGlmICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHRlcm1UeXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVkR2l2ZW5UeXBlID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuVHlwZTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvclZlcmlmaWVyLnZlcmlmeVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25UZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25UZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25UZXJtTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwiZG9tIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZyb21UZXJtTm9kZSIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZXMiLCJtYXAiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBIiwidmFyaWFibGVCIiwidmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQiIsImlzRXF1YWxUbyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaCIsInRlcm0iLCJlcXVhbFRvIiwidGVybVN0cmluZyIsInRlcm1UeXBlIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJ0cmFjZSIsInZlcmlmeU1peGlucyIsInNvbWUiLCJ2ZXJpZnlNaXhpbiIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuVHlwZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJub2RlQXNTdHJpbmciLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7eUJBcEIrQjsyREFFZjs0REFDUzs2REFDQTtrRUFDTztvQkFFTDtxQkFFVztvQkFDQztvQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBUUEsU0FBcUJDLHlCQUFjLENBQW5DRCxRQUFRRSxXQUFhRCx5QkFBYyxDQUEzQkM7QUFFaEIsSUFBTUMscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLGVBQ2hDQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUMsMkJBQzFDRSxrQ0FBa0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFbEQsV0FBZUcsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURDSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lB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