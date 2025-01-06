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
            key: "verifyGivenType",
            value: function verifyGivenType(type, generalContext, specificContext) {
                var _this = this;
                var verifiedGivenType;
                var typeName = type.getName(), termString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiXG5pbXBvcnQgeyB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIH0gZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC90ZXJtXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vdGVybVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCID0gdmFyaWFibGVBLmlzRXF1YWxUbyh2YXJpYWJsZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGlmICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHRlcm1UeXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB2ZXJpZmllZEdpdmVuVHlwZSA9IHZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuVHlwZSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlblR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25UZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25UZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvblRlcm1Ob2RlUXVlcnkiLCJjb250YWluZWRBc3NlcnRpb25UZXJtTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRWYXJpYWJsZSIsImNvbnRleHQiLCJWYXJpYWJsZSIsImRvbSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZU5vZGVzIiwidmFyaWFibGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlQSIsInZhcmlhYmxlQiIsInZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ0ZXJtIiwiZXF1YWxUbyIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZSIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVkIiwidHJhY2UiLCJ2ZXJpZnlNaXhpbnMiLCJzb21lIiwidmVyaWZ5TWl4aW4iLCJkZWJ1ZyIsInZlcmlmeUdpdmVuVHlwZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidmVyaWZpZWRHaXZlblR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJub2RlQXNTdHJpbmciLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVGVybU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7eUJBbEIrQjsyREFFZjs0REFDUzs2REFDQTtxQkFHYTtvQkFDQztvQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBUUEsU0FBcUJDLHlCQUFjLENBQW5DRCxRQUFRRSxXQUFhRCx5QkFBYyxDQUEzQkM7QUFFaEIsSUFBTUMscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLGVBQ2hDQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUMsMkJBQzFDRSxrQ0FBa0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFbEQsV0FBZUcsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURDSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FB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