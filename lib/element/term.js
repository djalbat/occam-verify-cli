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
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/term/verify"));
var _elements = require("../elements");
var _instantiate = require("../process/instantiate");
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
var _Term;
var filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
var _default = (0, _elements.define)((_Term = /*#__PURE__*/ function() {
    function Term(context, string, node, type) {
        _class_call_check(this, Term);
        this.context = context;
        this.string = string;
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvdGVybS92ZXJpZnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm0gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkgeyByZXR1cm4gdGhpcy5ub2RlLmlzU2luZ3VsYXIoKTsgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7IHJldHVybiB0aGlzLnR5cGUuaXNQcm92aXNpb25hbCgpOyB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKHRlcm1Ob2RlKTsgfVxuXG4gIGlzRXF1YWxUb1ZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZU1hdGhjZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXRjaGVzID0gdmFyaWFibGVOb2RlQS5tYXRjaCh2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlTWF0aGNlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGhjZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW4odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5UeXBlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVzQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdmVyaWZpZXNHaXZlblR5cGUgPSB2ZXJpZmllczsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNHaXZlblR5cGUpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlblR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtTm9kZSA9IGluc3RhbnRpYXRlVGVybShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZXMgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQiA9IHZhcmlhYmxlQS5pc0VxdWFsVG8odmFyaWFibGVCKTtcblxuICAgIGlmICghdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVRlcm0iLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiZGVmaW5lIiwiVGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJpc1Npbmd1bGFyIiwiaXNQcm92aXNpb25hbCIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZSIsIm1hdGNoIiwiaXNFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZU1hdGhjZXMiLCJzaW5ndWxhciIsInZhcmlhYmxlTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlQiIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwiZXF1YWxUbyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVzIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwiYWRkVGVybSIsImRlYnVnIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2ZXJpZmllc0FoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJuYW1lIiwidmFyaWFibGVOb2RlcyIsImdldFZhcmlhYmxlTm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQSIsInZhcmlhYmxlQiIsInZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVlBO2VBQUE7O1FBbUxnQkE7ZUFBQUE7Ozt5QkE3TGU7NkRBRU47d0JBRUY7MkJBQ1M7b0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFRQyxTQUFxQkMseUJBQWMsQ0FBbkNELFFBQVFFLFdBQWFELHlCQUFjLENBQTNCQztJQUVoQixXQUFlQyxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURiSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFB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