"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get variablesFromTerm () {
        return variablesFromTerm;
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
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.type.isProvisional();
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                return this.node.match(termNode);
            }
        },
        {
            key: "isEqualToVariable",
            value: function isEqualToVariable(variable) {
                var variableNodeMathces = false;
                var singular = this.isSingular();
                if (singular) {
                    var variableNode = variable.getNode(), singularVariableNode = this.node.getSingularVariableNode(), variableNodeA = variableNode, variableNodeB = singularVariableNode, matches = variableNodeA.match(variableNodeB);
                    if (matches) {
                        variableNodeMathces = true;
                    }
                }
                return variableNodeMathces;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var termNode = term.getNode(), matches = this.node.match(termNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "isGrounded",
            value: function isGrounded(definedVariables, context) {
                var term = this, variables = variablesFromTerm(term, context);
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
                var term = this, variables = variablesFromTerm(term, context), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
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
function variablesFromTerm(term, context) {
    var termNode = term.getNode(), variableNodes = termNode.getVariableNodes(), variables = variableNodes.map(function(variableNode) {
        var variableIdentifier = variableNode.getVariableIdentifier(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
        return variable;
    });
    compress(variables, function(variableA, variableB) {
        var variableAEqualToVariableB = variableA.isEqualTo(variableB);
        if (!variableAEqualToVariableB) {
            return true;
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdGVybU5vZGVGcm9tVGVybVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdGVybVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHsgcmV0dXJuIHRoaXMubm9kZS5pc1Npbmd1bGFyKCk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7IH1cblxuICBpc0VxdWFsVG9WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRoY2VzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGhjZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRoY2VzO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuVHlwZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVzR2l2ZW5UeXBlID0gdmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHRlcm1Ob2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlcyA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3ModmFyaWFibGVzLCAodmFyaWFibGVBLCB2YXJpYWJsZUIpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCID0gdmFyaWFibGVBLmlzRXF1YWxUbyh2YXJpYWJsZUIpO1xuXG4gICAgaWYgKCF2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tVGVybSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJkZWZpbmUiLCJUZXJtIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJpc1Npbmd1bGFyIiwiaXNQcm92aXNpb25hbCIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsIm1hdGNoIiwiaXNFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZU1hdGhjZXMiLCJzaW5ndWxhciIsInZhcmlhYmxlTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlQiIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwiZXF1YWxUbyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwiY29udGV4dCIsInZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJ2ZXJpZmllcyIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInZlcmlmeU1peGlucyIsInNvbWUiLCJ2ZXJpZnlNaXhpbiIsImFkZFRlcm0iLCJkZWJ1ZyIsInZlcmlmeUdpdmVuVHlwZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidmVyaWZpZXNHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmVyaWZpZXNBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJnZXRUZXJtTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwib250b2xvZ3kiLCJuYW1lIiwidmFyaWFibGVOb2RlcyIsImdldFZhcmlhYmxlTm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQSIsInZhcmlhYmxlQiIs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