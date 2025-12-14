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
            key: "getVariable",
            value: function getVariable(context) {
                var Variable = _ontology.default.Variable, termNode = this.node, variable = Variable.fromTermNode(termNode, context);
                return variable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdGVybVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGVzKCksXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29tcHJlc3ModmFyaWFibGVzLCAodmFyaWFibGVBLCB2YXJpYWJsZUIpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIgPSB2YXJpYWJsZUEuaXNFcXVhbFRvKHZhcmlhYmxlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9ICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBzaW1wbGUgPSAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW4odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVzQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdmVyaWZpZXNHaXZlblR5cGUgPSB2ZXJpZmllczsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNHaXZlblR5cGUpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlblR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuXG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwib250b2xvZ3kiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVOb2RlcyIsImdldFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZXMiLCJtYXAiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBIiwidmFyaWFibGVCIiwidmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQiIsImlzRXF1YWxUbyIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaCIsImlzUHJvdmlzaW9uYWwiLCJ0ZXJtIiwidGVybVN0cmluZyIsImVxdWFsVG8iLCJpc1NpbXBsZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJzaW1wbGUiLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJ2ZXJpZmllcyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwiYWRkVGVybSIsImRlYnVnIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2ZXJpZmllc0FoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwidHlwZUZyb21KU09OIiwidGVybUZyb21UZXJtTm9kZSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1Ob2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7Ozt5QkFaK0I7Z0VBRVY7NkRBQ0k7b0JBR1E7b0JBQ007b0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFBLFNBQXFCQyx5QkFBYyxDQUFuQ0QsUUFBUUUsV0FBYUQseUJBQWMsQ0FBM0JDO0lBRWhCLFdBQWVDLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURKSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7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