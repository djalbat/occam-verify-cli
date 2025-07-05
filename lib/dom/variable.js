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
            key: "setProvisional",
            value: function setProvisional(provisional) {
                this.provisional = provisional;
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
                if (this.type === _type.BaseType) {
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
                    var variableNode = termVariableNode; ///
                    variable = variableFromVariableNode(variableNode, context);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, context) {
                var variable = null;
                if (variableNode !== null) {
                    variable = variableFromVariableNode(variableNode, context);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var variable = null;
                if (variableNode !== null) {
                    variable = variableFromVariableNode(variableNode, context);
                    variable.setType(type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _dom.default.Type, variableDeclarationVariableNode = variableDeclarationVariableNodeQuery(variableDeclarationNode), variableNode = variableDeclarationVariableNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, variable = variableFromVariableNode(variableNode, context), type = Type.fromVariableDeclarationNode(variableDeclarationNode, fileContext), provisional = provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext);
                variable.setType(type);
                variable.setProvisional(provisional);
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
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName, type = null, provisional = null, propertyRelations = [], variable = new Variable(string, node, name, type, provisional, propertyRelations);
    return variable;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL0BzZWNvbmRhcnkta2V5d29yZFstMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9ICh2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZWZmZWN0aXZlbHlFcXVhbFRvVGVybSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0aXZlbHlFcXVhbFRvVGVybTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBCYXNlVHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZWZmZWN0aXZlbHlFcXVhbFRvVGVybSA9IHRoaXMuaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0pIHtcbiAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG8odGVybSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvdmlzaW9uYWwsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgIHZhcmlhYmxlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uKHZhcmlhYmxlLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25zO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHZhcmlhYmxlLmdldFByb3BlcnR5UmVsYXRpb25zKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtcbiAgICAgIC4uLnByb3BlcnR5UmVsYXRpb25zLFxuICAgICAgcHJvcGVydHlSZWxhdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKG5hbWUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvdmlzaW9uYWwsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbCxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm92aXNpb25hbCwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRQcm9wZXJ0eVJlbGF0aW9ucyhuYW1lLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyA9IHByb3BlcnR5UmVsYXRpb25zLnJlZHVjZSgocHJvcGVydHlSZWxhdGlvbnNTdHJpbmcsIHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gYCR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9LCAke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gYCR7bmFtZX0ke3Byb3BlcnR5UmVsYXRpb25zU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlID0gbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgaWYgKGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWxseSA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTExZKTtcblxuICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsbHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuIl0sIm5hbWVzIjpbInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGVRdWVyeSIsImxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInNldFR5cGUiLCJzZXRQcm92aXNpb25hbCIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJpc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJlZmZlY3RpdmVseUVxdWFsVG9UZXJtIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJ0ZXJtU3RyaW5nIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwiQmFzZVR5cGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJub2RlQXNTdHJpbmciLCJwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsbHkiLCJQUk9WSVNJT05BTExZIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFr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