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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Term = /*#__PURE__*/ function() {
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
                var Type = _structure.default.Type, termNode = constructorDeclarationNode.getTermNode(), term = (0, _node.termFromTermNode)(termNode, context), type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcgfSBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL3Rlcm1cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7IHJldHVybiB0aGlzLm5vZGUuaXNTaW5ndWxhcigpOyB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpOyB9XG5cbiAgaXNFcXVhbFRvVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVOb2RlTWF0aGNlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlQiA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1hdGNoZXMgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICB2YXJpYWJsZU5vZGVNYXRoY2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0aGNlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdGVybSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbih0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNHaXZlblR5cGU7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgICAgICB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB2ZXJpZmllc0dpdmVuVHlwZSA9IHZlcmlmaWVzOyAvLy9cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuVHlwZSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlcygpLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICBjb21wcmVzcyh2YXJpYWJsZXMsICh2YXJpYWJsZUEsIHZhcmlhYmxlQikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIgPSB2YXJpYWJsZUEuaXNFcXVhbFRvKHZhcmlhYmxlQik7XG5cbiAgICBpZiAoIXZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21UZXJtIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImlzU2luZ3VsYXIiLCJpc1Byb3Zpc2lvbmFsIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwibWF0Y2giLCJpc0VxdWFsVG9WYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlTWF0aGNlcyIsInNpbmd1bGFyIiwidmFyaWFibGVOb2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVCIiwibWF0Y2hlcyIsImlzRXF1YWxUbyIsInRlcm0iLCJlcXVhbFRvIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVzIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwiYWRkVGVybSIsImRlYnVnIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2ZXJpZmllc0FoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1Ob2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJzdHJ1Y3R1cmUiLCJuYW1lIiwidmFyaWFibGVOb2RlcyIsImdldFZhcmlhYmxlTm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQSIsInZhcmlh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