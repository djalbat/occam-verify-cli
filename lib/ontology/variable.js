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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _constants = require("../constants");
var _node = require("../utilities/node");
var _json = require("../utilities/json");
var _variable = require("../context/partial/variable");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _Variable;
var _default = (0, _ontology.define)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, node, type, identifier, propertyRelations) {
        _class_call_check(this, Variable);
        this.string = string;
        this.node = node;
        this.type = type;
        this.identifier = identifier;
        this.propertyRelations = propertyRelations;
    }
    _create_class(Variable, [
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
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getPropertyRelations",
            value: function getPropertyRelations() {
                return this.propertyRelations;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(variable) {
                var variableString = variable.getString(), equalTo = variableString === this.string;
                return equalTo;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                var parameterName = parameter.getName(), parameterNameMatchesIdentifier = parameterName === this.identifier, parameterMatches = parameterNameMatchesIdentifier; ///
                return parameterMatches;
            }
        },
        {
            key: "matchVariableIdentifier",
            value: function matchVariableIdentifier(variableIdentifier) {
                var variableIdentifierMatches = variableIdentifier === this.identifier;
                return variableIdentifierMatches;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies;
                var variableString = this.string; ///
                context.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableIdentifier = this.identifier, variable = context.findVariableByVariableIdentifier(variableIdentifier);
                if (variable !== null) {
                    var type = variable.getType();
                    this.type = type;
                    verifies = true;
                } else {
                    context.debug("The '".concat(variableString, "' variable is not present."));
                }
                if (verifies) {
                    context.debug("...verified the '".concat(variableString, "' variable."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(context) {
                var typeVerifies = false;
                var typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."));
                var prefixedTypeName = this.type.getPrefixedName(), type = context.findTypeByPrefixedTypeName(prefixedTypeName);
                if (type === null) {
                    context.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    this.type = type; ///
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, substitutions, generalContext, specificContext) {
                var termUnifies = false;
                var termString = term.getString(), variableString = this.string; ///
                specificContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var context, variable;
                variable = this; ///
                var substitution = substitutions.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    context = specificContext; ///
                    var substitutionTermEqualToTerm = substitution.isTermEqualToTerm(term, context);
                    if (substitutionTermEqualToTerm) {
                        termUnifies = true;
                    }
                } else {
                    context = generalContext; ///
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    context = specificContext; ///
                    var termNode = term.getNode();
                    term = context.findTermByTermNode(termNode);
                    var termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                    if (termTypeEqualToOrSubTypeOfVariableType) {
                        var TermSubstitution = _ontology.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context), substitution1 = termSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        termUnifies = true;
                    }
                }
                if (termUnifies) {
                    specificContext.debug("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
                }
                return termUnifies;
            }
        },
        {
            key: "unifyTermVariable",
            value: function unifyTermVariable(termVariable, substitutions, generalContext, specificContext) {
                var termVariableUnifies = false;
                var variableString = this.string, termVariableString = termVariable.getString();
                specificContext.trace("Unifying the '".concat(termVariableString, "' term variable with the '").concat(variableString, "' variable..."));
                var context, variable;
                variable = this; ///
                var substitution = substitutions.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    context = specificContext; ///
                    var substitutionTermVariableEqualToTerm = substitution.isTermVariableEqualToTerm(termVariable, context);
                    if (substitutionTermVariableEqualToTerm) {
                        termVariableUnifies = true;
                    }
                } else {
                    context = generalContext; ///
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    context = specificContext; ///
                    var variableType = variable.getType(), termVariableType = termVariable.getType(), termVariableTypeEqualToOrSubTypeOfVariableType = termVariableType.isEqualToOrSubTypeOf(variableType);
                    if (termVariableTypeEqualToOrSubTypeOfVariableType) {
                        var TermSubstitution = _ontology.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernVariableAndVariable(termVariable, variable, context), substitution1 = termSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        termVariableUnifies = true;
                    }
                }
                if (termVariableUnifies) {
                    specificContext.debug("...unified the '".concat(termVariableString, "' term variable with the '").concat(variableString, "' variable."));
                }
                return termVariableUnifies;
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
                var string = json.string, variableString = string, variableNode = (0, _variable.variableNodeFromVariableString)(variableString, context), variableIdentifier = variableNode.getVariableIdentifier(), node = variableNode, identifier = variableIdentifier, type = (0, _json.typeFromJSON)(json, context), propertyRelations = [], variable = new Variable(string, node, type, identifier, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var variable = null;
                var singularVariableNode = termNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    var variableNode = singularVariableNode, type = null;
                    variable = variableFromVariableNodeAndType(variableNode, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, context) {
                var variable = null;
                if (variableNode !== null) {
                    var type = null;
                    variable = variableFromVariableNodeAndType(variableNode, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var variable = variableFromVariableNodeAndType(variableNode, type);
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, context) {
                var _$Variable = _ontology.default.Variable, provisional = variableDeclarationNode.isProvisional(), typeNode = variableDeclarationNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode, context);
                type.setProvisional(provisional);
                var variableNode = variableDeclarationNode.getVariableNode(), variableIdentifier = variableDeclarationNode.getVariableIdentifier(), node = variableNode, identifier = variableIdentifier, string = identifier, propertyRelations = [], variable = new _$Variable(string, node, type, identifier, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromVariableAndPropertyRelation",
            value: function fromVariableAndPropertyRelation(variable, propertyRelation, context) {
                var propertyRelations;
                var node = variable.getNode(), type = variable.getType(), identifier = variable.getIdentifier();
                propertyRelations = variable.getPropertyRelations();
                propertyRelations = _to_consumable_array(propertyRelations).concat([
                    propertyRelation
                ]);
                var string = stringFromNameAndPropertyRelations(identifier, propertyRelations);
                variable = new Variable(string, node, type, identifier, propertyRelations);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromVariableNodeAndType(variableNode, type) {
    var Variable = _ontology.default.Variable, node = variableNode, variableIdentifier = variableNode.getVariableIdentifier(), string = variableIdentifier, identifier = variableIdentifier, propertyRelations = [], variable = new Variable(string, node, type, identifier, propertyRelations);
    return variable;
}
function stringFromNameAndPropertyRelations(identifier, propertyRelations) {
    var propertyRelationsString = propertyRelations.reduce(function(propertyRelationsString, propertyRelation) {
        var propertyRelationString = propertyRelation.getString();
        propertyRelationsString = "".concat(propertyRelationsString, ", ").concat(propertyRelationString);
        return propertyRelationsString;
    }, _constants.EMPTY_STRING), string = "".concat(identifier).concat(propertyRelationsString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAodmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgcGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyID0gKHBhcmFtZXRlck5hbWUgPT09IHRoaXMuaWRlbnRpZmllciksXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllcjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzID0gKHZhcmlhYmxlSWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCBjb250ZXh0LFxuICAgICAgICB2YXJpYWJsZTtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtVmFyaWFibGUodGVybVZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHRlcm1WYXJpYWJsZVN0cmluZyA9IHRlcm1WYXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1WYXJpYWJsZVN0cmluZ30nIHRlcm0gdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IGNvbnRleHQsXG4gICAgICAgIHZhcmlhYmxlO1xuXG4gICAgdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtVmFyaWFibGVFcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvbi5pc1Rlcm1WYXJpYWJsZUVxdWFsVG9UZXJtKHRlcm1WYXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtVmFyaWFibGVFcXVhbFRvVGVybSkge1xuICAgICAgICB0ZXJtVmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlVHlwZSA9IHRlcm1WYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVyblZhcmlhYmxlQW5kVmFyaWFibGUodGVybVZhcmlhYmxlLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1WYXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1WYXJpYWJsZVN0cmluZ30nIHRlcm0gdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gaWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbih2YXJpYWJsZSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9ucztcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSB2YXJpYWJsZS5nZXRQcm9wZXJ0eVJlbGF0aW9ucygpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXG4gICAgICAuLi5wcm9wZXJ0eVJlbGF0aW9ucyxcbiAgICAgIHByb3BlcnR5UmVsYXRpb25cbiAgICBdO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IHByb3BlcnR5UmVsYXRpb25zLnJlZHVjZSgocHJvcGVydHlSZWxhdGlvbnNTdHJpbmcsIHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gYCR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9LCAke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gYCR7aWRlbnRpZmllcn0ke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbnMiLCJzZXRUeXBlIiwiaXNFcXVhbFRvIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsImVxdWFsVG8iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwicGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyIiwicGFyYW1ldGVyTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNUZXJtRXF1YWxUb1Rlcm0iLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJvbnRvbG9neSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlUZXJtVmFyaWFibGUiLCJ0ZXJtVmFyaWFibGUiLCJ0ZXJtVmFyaWFibGVVbmlmaWVzIiwidGVybVZhcmlhYmxlU3RyaW5nIiwic3Vic3RpdHV0aW9uVGVybVZhcmlhYmxlRXF1YWxUb1Rlcm0iLCJpc1Rlcm1WYXJpYWJsZUVxdWFsVG9UZXJtIiwidGVybVZhcmlhYmxlVHlwZSIsInRlcm1WYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJmcm9tVGVyblZhcmlhYmxlQW5kVmFyaWFibGUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJuYW1lIiwicHJvcGVydHlSZWxhdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7eUJBR1E7b0JBQ0k7b0JBQ1k7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7YUFBTUMsU0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRG5DTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7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