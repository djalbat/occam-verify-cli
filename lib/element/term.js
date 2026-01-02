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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/term/verify"));
var _instantiate = require("../process/instantiate");
var _node = require("../utilities/node");
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
var _default = (0, _elements.define)((_Term = /*#__PURE__*/ function() {
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
                var string = json.string, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), term = new Term(string, node, type);
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
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Type = _elements.default.Type, termNode = constructorDeclarationNode.getTermNode(), term = (0, _node.termFromTermNode)(termNode, context), type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvdGVybS92ZXJpZnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm0gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHsgcmV0dXJuIHRoaXMubm9kZS5pc1Npbmd1bGFyKCk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7IH1cblxuICBpc0VxdWFsVG9WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRoY2VzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGhjZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRoY2VzO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuVHlwZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVzR2l2ZW5UeXBlID0gdmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybU5vZGUgPSBpbnN0YW50aWF0ZVRlcm0oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlcygpLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICBjb21wcmVzcyh2YXJpYWJsZXMsICh2YXJpYWJsZUEsIHZhcmlhYmxlQikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIgPSB2YXJpYWJsZUEuaXNFcXVhbFRvKHZhcmlhYmxlQik7XG5cbiAgICBpZiAoIXZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21UZXJtIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImlzU2luZ3VsYXIiLCJpc1Byb3Zpc2lvbmFsIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwibWF0Y2giLCJpc0VxdWFsVG9WYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlTWF0aGNlcyIsInNpbmd1bGFyIiwidmFyaWFibGVOb2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVCIiwibWF0Y2hlcyIsImlzRXF1YWxUbyIsInRlcm0iLCJlcXVhbFRvIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVzIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwiYWRkVGVybSIsImRlYnVnIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2ZXJpZmllc0FoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIm5vZGVBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImVsZW1lbnRzIiwibmFtZSIsInZhcmlhYmxlTm9kZXMiLCJnZXRWYXJpYWJsZU5vZGVzIiwibWFwIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUEiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7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