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
var _instantiate = require("../process/instantiate");
var _json = require("../utilities/json");
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
                var string = json.string, variableNode = (0, _instantiate.instantiateVariable)(string, context), variableIdentifier = variableNode.getVariableIdentifier(), node = variableNode, identifier = variableIdentifier, type = (0, _json.typeFromJSON)(json, context), propertyRelations = [], variable = new Variable(string, node, type, identifier, propertyRelations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgcGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyID0gKHBhcmFtZXRlck5hbWUgPT09IHRoaXMuaWRlbnRpZmllciksXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHBhcmFtZXRlck5hbWVNYXRjaGVzSWRlbnRpZmllcjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzID0gKHZhcmlhYmxlSWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCBjb250ZXh0LFxuICAgICAgICB2YXJpYWJsZTtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBpZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uKHZhcmlhYmxlLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25zO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHZhcmlhYmxlLmdldFByb3BlcnR5UmVsYXRpb25zKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtcbiAgICAgIC4uLnByb3BlcnR5UmVsYXRpb25zLFxuICAgICAgcHJvcGVydHlSZWxhdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUlkZW50aWZpZXIsICAvLy8sXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbnMucmVkdWNlKChwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZywgcHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNTdHJpbmcgPSBgJHtwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZ30sICR7cHJvcGVydHlSZWxhdGlvblN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBgJHtpZGVudGlmaWVyfSR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0SWRlbnRpZmllciIsImdldFR5cGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInNldFR5cGUiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwicGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyIiwicGFyYW1ldGVyTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJwcmVmaXhlZFR5cGVOYW1lIiwiZ2V0UHJlZml4ZWROYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvVGVybSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsIm9udG9sb2d5IiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGVWYXJpYWJsZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ0eXBlTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zIiwibmFtZSIsInByb3BlcnR5UmVsYXRpb25zU3RyaW5nIiwicmVkdWNlIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnFCO3lCQUdRO29CQUNJOzJCQUNHO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDO2FBQU1DLFNBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURuQ0w7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOzs7O1lBRzNCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FB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