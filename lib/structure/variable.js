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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Variable = /*#__PURE__*/ function() {
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
                        var TermSubstitution = _structure.default.TermSubstitution, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context), substitution1 = termSubstitution; ///
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
                var _$Variable = _structure.default.Variable, provisional = variableDeclarationNode.isProvisional(), typeNode = variableDeclarationNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode, context);
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
    var Variable = _structure.default.Variable, node = variableNode, variableIdentifier = variableNode.getVariableIdentifier(), string = variableIdentifier, identifier = variableIdentifier, propertyRelations = [], variable = new Variable(string, node, type, identifier, propertyRelations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL3ZhcmlhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOYW1lTWF0Y2hlc0lkZW50aWZpZXIgPSAocGFyYW1ldGVyTmFtZSA9PT0gdGhpcy5pZGVudGlmaWVyKSxcbiAgICAgICAgICBwYXJhbWV0ZXJNYXRjaGVzID0gcGFyYW1ldGVyTmFtZU1hdGNoZXNJZGVudGlmaWVyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMgPSAodmFyaWFibGVJZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IGNvbnRleHQsXG4gICAgICAgIHZhcmlhYmxlO1xuXG4gICAgdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb24uaXNUZXJtRXF1YWxUb1Rlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gaWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbih2YXJpYWJsZSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9ucztcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSB2YXJpYWJsZS5nZXRQcm9wZXJ0eVJlbGF0aW9ucygpO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXG4gICAgICAuLi5wcm9wZXJ0eVJlbGF0aW9ucyxcbiAgICAgIHByb3BlcnR5UmVsYXRpb25cbiAgICBdO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vLyxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMoaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNTdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9ucy5yZWR1Y2UoKHByb3BlcnR5UmVsYXRpb25zU3RyaW5nLCBwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IGAke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfSwgJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgIHN0cmluZyA9IGAke2lkZW50aWZpZXJ9JHtwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJwYXJhbWV0ZXJOYW1lTWF0Y2hlc0lkZW50aWZpZXIiLCJwYXJhbWV0ZXJNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwidHlwZVZlcmlmaWVzIiwidHlwZVN0cmluZyIsInByZWZpeGVkVHlwZU5hbWUiLCJnZXRQcmVmaXhlZE5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInVuaWZ5VGVybSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSIsImlzVGVybUVxdWFsVG9UZXJtIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwic3RydWN0dXJlIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJuYW1lIiwicHJvcGVydHlSZWxhdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztpRUFSc0I7eUJBR087b0JBQ0k7b0JBQ1k7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsaUJBQU0sNkJBQUM7YUFBTUMsU0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRG5DTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7Ozs7WUFHM0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7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