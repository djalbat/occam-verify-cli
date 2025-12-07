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
                var substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);
                if (substitutionPresent) {
                    context = specificContext; ///
                    var substitution = substitutions.findSubstitutionByVariable(variable), substitutionTermEqualToTerm = substitution.isTermEqualTo(term, context);
                    if (substitutionTermEqualToTerm) {
                        termUnifies = true;
                    }
                } else {
                    context = generalContext; ///
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    context = specificContext; ///
                    var termVerifies = term.verify(context, function() {
                        var verifiesAhead = false;
                        var termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                        if (termTypeEqualToOrSubTypeOfVariableType) {
                            verifiesAhead = true;
                        }
                        return verifiesAhead;
                    });
                    if (termVerifies) {
                        var TermSubstitution = _ontology.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context), substitution1 = termSubstitution; ///
                        substitutions.addSubstitution(substitution1, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAodmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgcGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyID0gKHBhcmFtZXRlck5hbWUgPT09IHRoaXMuaWRlbnRpZmllciksXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllcjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzID0gKHZhcmlhYmxlSWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCBjb250ZXh0LFxuICAgICAgICB2YXJpYWJsZTtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG8odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllc0FoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgdHlwZS5zZXRQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24odmFyaWFibGUsIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbnM7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgIHByb3BlcnR5UmVsYXRpb25zID0gdmFyaWFibGUuZ2V0UHJvcGVydHlSZWxhdGlvbnMoKTtcblxuICAgIHByb3BlcnR5UmVsYXRpb25zID0gW1xuICAgICAgLi4ucHJvcGVydHlSZWxhdGlvbnMsXG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMoaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vLyxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMoaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNTdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9ucy5yZWR1Y2UoKHByb3BlcnR5UmVsYXRpb25zU3RyaW5nLCBwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IGAke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfSwgJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgIHN0cmluZyA9IGAke2lkZW50aWZpZXJ9JHtwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsInBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllciIsInBhcmFtZXRlck1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJ0cmFjZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwidHlwZVZlcmlmaWVzIiwidHlwZVN0cmluZyIsInByZWZpeGVkVHlwZU5hbWUiLCJnZXRQcmVmaXhlZE5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInVuaWZ5VGVybSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNUZXJtRXF1YWxUbyIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwib250b2xvZ3kiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ0eXBlTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zIiwibmFtZSIsInByb3BlcnR5UmVsYXRpb25zU3RyaW5nIiwicmVkdWNlIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnFCO3lCQUdRO29CQUNJO29CQUNZO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDO2FBQU1DLFNBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURuQ0w7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFD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