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
                var variableNode = variable.getNode(), matches = this.node.match(variableNode), equalTo = matches; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllciA9IChwYXJhbWV0ZXJOYW1lID09PSB0aGlzLmlkZW50aWZpZXIpLFxuICAgICAgICAgIHBhcmFtZXRlck1hdGNoZXMgPSBwYXJhbWV0ZXJOYW1lTWF0Y2hlc0lkZW50aWZpZXI7ICAvLy9cblxuICAgIHJldHVybiBwYXJhbWV0ZXJNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyA9ICh2YXJpYWJsZUlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcixcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdGhpcy50eXBlLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgY29udGV4dCxcbiAgICAgICAgdmFyaWFibGU7XG5cbiAgICB2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvbi5pc1Rlcm1FcXVhbFRvVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gaWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbih2YXJpYWJsZSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9ucztcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSB2YXJpYWJsZS5nZXRQcm9wZXJ0eVJlbGF0aW9ucygpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXG4gICAgICAuLi5wcm9wZXJ0eVJlbGF0aW9ucyxcbiAgICAgIHByb3BlcnR5UmVsYXRpb25cbiAgICBdO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IHByb3BlcnR5UmVsYXRpb25zLnJlZHVjZSgocHJvcGVydHlSZWxhdGlvbnNTdHJpbmcsIHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gYCR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9LCAke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gYCR7aWRlbnRpZmllcn0ke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbnMiLCJzZXRUeXBlIiwiaXNFcXVhbFRvIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsInBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllciIsInBhcmFtZXRlck1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNUZXJtRXF1YWxUb1Rlcm0iLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJvbnRvbG9neSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ0eXBlTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zIiwibmFtZSIsInByb3BlcnR5UmVsYXRpb25zU3RyaW5nIiwicmVkdWNlIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnFCO3lCQUdRO29CQUNJO29CQUNZO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDO2FBQU1DLFNBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURuQ0w7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOzs7O1lBRzNCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxL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