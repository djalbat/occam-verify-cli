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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _term = /*#__PURE__*/ _interop_require_default(require("../substitution/term"));
var _query = require("../utilities/query");
var _type = require("./type");
var _constants = require("../constants");
var _json = require("../utilities/json");
var _name = require("../utilities/name");
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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableDeclarationVariableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable"), lastSecondaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/@secondary-keyword[-1]");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, node, name, type, provisional, propertyRelations) {
        _class_call_check(this, Variable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
        this.provisional = provisional;
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.provisional;
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
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = name === this.name;
                return nameMatches;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var variableNameMatches = variableName === this.name;
                return variableNameMatches;
            }
        },
        {
            key: "isEffectivelyEqualToTerm",
            value: function isEffectivelyEqualToTerm(term, generalContext, specificContext) {
                var effectivelyEqualToTerm = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var termString = term.getString();
                    if (termString === this.string) {
                        effectivelyEqualToTerm = true;
                    }
                }
                return effectivelyEqualToTerm;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified;
                var variableString = this.string; ///
                context.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableName = this.name, variable = context.findVariableByVariableName(variableName);
                if (variable !== null) {
                    var type = variable.getType();
                    this.type = type;
                    verified = true;
                } else {
                    context.debug("The '".concat(variableString, "' variable is not present."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(variableString, "' variable."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified = false;
                if (this.type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = fileContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        fileContext.debug("The '".concat(typeName, "' type is not present."));
                    } else {
                        this.type = type; ///
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, substitutions, generalContext, specificContext) {
                var termUnified = false;
                var termString = term.getString(), variableString = this.string; ///
                specificContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var effectivelyEqualToTerm = this.isEffectivelyEqualToTerm(term, generalContext, specificContext);
                if (effectivelyEqualToTerm) {
                    termUnified = true;
                } else {
                    var variable = this, substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);
                    if (substitutionPresent) {
                        var substitution = substitutions.findSubstitutionByVariable(variable), substitutionTermEqualToTerm = substitution.isTermEqualTo(term);
                        if (substitutionTermEqualToTerm) {
                            termUnified = true;
                        }
                    } else {
                        var context = specificContext, variable1 = this, termSubstitution = _term.default.fromTernAndVariable(term, variable1, context), substitution1 = termSubstitution; ///
                        substitutions.addSubstitution(substitution1, specificContext);
                        termUnified = true;
                    }
                }
                if (termUnified) {
                    specificContext.debug("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
                }
                return termUnified;
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
            value: function fromJSON(json, fileContext) {
                var string = json.string, localContext = _local.default.fromFileContext(fileContext), context = localContext, variableString = string, variableNode = (0, _variable.variableNodeFromVariableString)(variableString, context), variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), provisional = null, propertyRelations = [], variable = new Variable(string, node, name, type, provisional, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var variable = null;
                var termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var variableNode = termVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, string = context.nodeAsString(node), name = variableName, type = null, provisional = null, propertyRelations = [];
                    variable = new Variable(string, node, name, type, provisional, propertyRelations);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, context) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName, type = null, provisional = null, propertyRelations = [];
                    variable = new Variable(string, node, name, type, provisional, propertyRelations);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName, provisional = null, propertyRelations = [];
                    variable = new Variable(string, node, name, type, provisional, propertyRelations);
                }
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _dom.default.Type, variableDeclarationVariableNode = variableDeclarationVariableNodeQuery(variableDeclarationNode), variableNode = variableDeclarationVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromVariableDeclarationNode(variableDeclarationNode, fileContext), provisional = provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext), propertyRelations = [], variable = new Variable(string, node, name, type, provisional, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromVariableAndPropertyRelation",
            value: function fromVariableAndPropertyRelation(variable, propertyRelation, context) {
                var propertyRelations;
                var node = variable.getNode(), name = variable.getName(), type = variable.getType(), provisional = variable.isProvisional();
                propertyRelations = variable.getPropertyRelations();
                propertyRelations = _to_consumable_array(propertyRelations).concat([
                    propertyRelation
                ]);
                var string = stringFromNameAndPropertyRelations(name, propertyRelations);
                variable = new Variable(string, node, name, type, provisional, propertyRelations);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function stringFromNameAndPropertyRelations(name, propertyRelations) {
    var propertyRelationsString = propertyRelations.reduce(function(propertyRelationsString, propertyRelation) {
        var propertyRelationString = propertyRelation.getString();
        propertyRelationsString = "".concat(propertyRelationsString, ", ").concat(propertyRelationString);
        return propertyRelationsString;
    }, _constants.EMPTY_STRING), string = "".concat(name).concat(propertyRelationsString);
    return string;
}
function provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    var provisional = false;
    var lastSecondaryKeywordTerminalNode = lastSecondaryKeywordTerminalNodeQuery(variableDeclarationNode);
    if (lastSecondaryKeywordTerminalNode !== null) {
        var content = lastSecondaryKeywordTerminalNode.getContent(), contentProvisionally = content === _constants.PROVISIONALLY;
        provisional = contentProvisionally; ///
    }
    return provisional;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgUFJPVklTSU9OQUxMWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vQHNlY29uZGFyeS1rZXl3b3JkWy0xXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9ICh2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZWZmZWN0aXZlbHlFcXVhbFRvVGVybSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0aXZlbHlFcXVhbFRvVGVybTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gdGhpcy5pc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZWZmZWN0aXZlbHlFcXVhbFRvVGVybSkge1xuICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb24uaXNUZXJtRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXTtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXTtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGwsXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24odmFyaWFibGUsIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbnM7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIHByb3BlcnR5UmVsYXRpb25zID0gdmFyaWFibGUuZ2V0UHJvcGVydHlSZWxhdGlvbnMoKTtcblxuICAgIHByb3BlcnR5UmVsYXRpb25zID0gW1xuICAgICAgLi4ucHJvcGVydHlSZWxhdGlvbnMsXG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMobmFtZSwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhuYW1lLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IHByb3BlcnR5UmVsYXRpb25zLnJlZHVjZSgocHJvcGVydHlSZWxhdGlvbnNTdHJpbmcsIHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gYCR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9LCAke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gYCR7bmFtZX0ke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlID0gbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgaWYgKGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWxseSA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTExZKTtcblxuICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsbHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuIl0sIm5hbWVzIjpbInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGVRdWVyeSIsImxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInNldFR5cGUiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZSIsInZhcmlhYmxlU3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwiaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZWZmZWN0aXZlbHlFcXVhbFRvVGVybSIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwidGVybVN0cmluZyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsbHkiLCJQUk9WSVNJT05BTExZIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7MkRBaEJnQjs0REFDUzsyREFDSTtxQkFFSDtvQkFDQzt5QkFFaUI7b0JBQ0M7b0JBQ0E7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDQyx1Q0FBdUNELElBQUFBLGdCQUFTLEVBQUMsa0NBQ2pERSx3Q0FBd0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFeEQsV0FBZUcsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxpQkFBaUI7Z0NBRHJDTjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElB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