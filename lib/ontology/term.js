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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/term/verify"));
var _node = require("../utilities/node");
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
var _default = (0, _ontology.define)((_Term = /*#__PURE__*/ function() {
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
            key: "getVariables",
            value: function getVariables(context) {
                var termNode = this.node, variableNodes = termNode.getVariableNodes(), variables = variableNodes.map(function(variableNode) {
                    var Variable = _ontology.default.Variable, variable = Variable.fromVariableNode(variableNode, context);
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
                return this.node.match(termNode);
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.type.isProvisional();
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var termString = term.getString(), equalTo = termString === this.string;
                return equalTo;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var termNode = this.node, singularVariableNode = termNode.getSingularVariableNode(), simple = singularVariableNode !== null;
                return simple;
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
                var verifies;
                var termString = this.string; ///
                context.trace("Verifying the '".concat(termString, "' term..."));
                verifies = _verify.default.some(function(verifyMixin) {
                    var term = _this, verifies = verifyMixin(term, context, verifyAhead);
                    if (verifies) {
                        return true;
                    }
                });
                if (verifies) {
                    var term = this; ///
                    context.addTerm(term);
                    context.debug("...verified the '".concat(termString, "' term."));
                }
                return verifies;
            }
        },
        {
            key: "verifyGivenType",
            value: function verifyGivenType(type, generalContext, specificContext) {
                var _this = this;
                var verifiesGivenType;
                var typeString = type.getString(), termString = this.getString(); ///
                specificContext.trace("Verifying the '".concat(termString, "' term given the '").concat(typeString, "' type..."));
                var context = specificContext, verifies = this.verify(context, function() {
                    var verifiesAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiesAhead = true;
                    }
                    return verifiesAhead;
                });
                verifiesGivenType = verifies; ///
                if (verifiesGivenType) {
                    specificContext.debug("...verified the '".concat(termString, "' term given the '").concat(typeString, "' type."));
                }
                return verifiesGivenType;
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
            value: function fromJSON(json, context) {
                var string = json.string, termString = string, termNode = (0, _term.termNodeFromTermString)(termString, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), term = new Term(string, node, type);
                return term;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var term = (0, _node.termFromTermNode)(termNode, context);
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
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, context) {
                var term = null;
                var termNode = typeAssertionNode.getTermNode();
                if (termNode !== null) {
                    term = (0, _node.termFromTermNode)(termNode, context);
                }
                return term;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var term = null;
                var termNode = definedAssertionNode.getTermNode();
                if (termNode !== null) {
                    term = (0, _node.termFromTermNode)(termNode, context);
                }
                return term;
            }
        },
        {
            key: "fromPropertyRelationNode",
            value: function fromPropertyRelationNode(propertyRelationNode, context) {
                var termNode = propertyRelationNode.getTermNode(), term = (0, _node.termFromTermNode)(termNode, context);
                return term;
            }
        },
        {
            key: "fromPropertyAssertionNode",
            value: function fromPropertyAssertionNode(propertyAssertionNode, context) {
                var termNode = propertyAssertionNode.getTermNode(), term = (0, _node.termFromTermNode)(termNode, context);
                return term;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var term = null;
                var termNode = containedAssertionNode.getTermNode();
                if (termNode !== null) {
                    term = (0, _node.termFromTermNode)(termNode, context);
                }
                return term;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Type = _ontology.default.Type, termNode = constructorDeclarationNode.getTermNode(), term = (0, _node.termFromTermNode)(termNode, context), type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);
                term.setType(type);
                return term;
            }
        }
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdGVybVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlcygpLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCID0gdmFyaWFibGVBLmlzRXF1YWxUbyh2YXJpYWJsZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpOyB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAodGVybVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlID0gKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuVHlwZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVzR2l2ZW5UeXBlID0gdmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHRlcm1Ob2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcblxuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJkZWZpbmUiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRWYXJpYWJsZXMiLCJjb250ZXh0IiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGVzIiwiZ2V0VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlcyIsIm1hcCIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwib250b2xvZ3kiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUEiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCIiwiaXNFcXVhbFRvIiwibWF0Y2hUZXJtTm9kZSIsIm1hdGNoIiwiaXNQcm92aXNpb25hbCIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZXF1YWxUbyIsImlzU2ltcGxlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInNpbXBsZSIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVzIiwidHJhY2UiLCJ2ZXJpZnlNaXhpbnMiLCJzb21lIiwidmVyaWZ5TWl4aW4iLCJhZGRUZXJtIiwiZGVidWciLCJ2ZXJpZnlHaXZlblR5cGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZlcmlmaWVzR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZlcmlmaWVzQWhlYWQiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIm5vZGVBc1N0cmluZyIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O3lCQVorQjtnRUFFVjs2REFDSTtvQkFHUTtvQkFDTTtvQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBUUEsU0FBcUJDLHlCQUFjLENBQW5DRCxRQUFRRSxXQUFhRCx5QkFBYyxDQUEzQkM7SUFFaEIsV0FBZUMsSUFBQUEsZ0JBQU0seUJBQUM7YUFBTUMsS0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBREpIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFh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