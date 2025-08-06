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
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, node, name, type, propertyRelations) {
        _class_call_check(this, Variable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
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
                var typeString = this.type.getString();
                fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var type = fileContext.findTypeByTypeName(typeString);
                if (type === null) {
                    fileContext.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    this.type = type; ///
                    typeVerified = true;
                }
                if (typeVerified) {
                    fileContext.debug("...verified the '".concat(typeString, "' type."));
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
                        var TermSubstitution = _dom.default.TermSubstitution, context = specificContext, variable1 = this, termSubstitution = TermSubstitution.fromTernAndVariable(term, variable1, context), substitution1 = termSubstitution; ///
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
                var string = json.string, localContext = _local.default.fromFileContext(fileContext), context = localContext, variableString = string, variableNode = (0, _variable.variableNodeFromVariableString)(variableString, context), variableName = variableNode.getVariableName(), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), propertyRelations = [], variable = new Variable(string, node, name, type, propertyRelations);
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
                    variable = variableFromVariableNodeAndType(variableNode, type, context);
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
                    variable = variableFromVariableNodeAndType(variableNode, type, context);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var variable = variableFromVariableNodeAndType(variableNode, type, context);
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var _$Variable = _dom.default.Variable, localContext = _local.default.fromFileContext(fileContext), context = localContext, provisional = variableDeclarationNode.isProvisional(), typeNode = variableDeclarationNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode);
                type.setProvisional(provisional);
                var variableNode = variableDeclarationNode.getVariableNode(), variableName = variableDeclarationNode.getVariableName(), node = variableNode, name = variableName, string = context.nodeAsString(node), propertyRelations = [], variable = new _$Variable(string, node, name, type, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromVariableAndPropertyRelation",
            value: function fromVariableAndPropertyRelation(variable, propertyRelation, context) {
                var propertyRelations;
                var node = variable.getNode(), name = variable.getName(), type = variable.getType();
                propertyRelations = variable.getPropertyRelations();
                propertyRelations = _to_consumable_array(propertyRelations).concat([
                    propertyRelation
                ]);
                var string = stringFromNameAndPropertyRelations(name, propertyRelations);
                variable = new Variable(string, node, name, type, propertyRelations);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromVariableNodeAndType(variableNode, type, context) {
    var Variable = _dom.default.Variable, node = variableNode, variableName = variableNode.getVariableName(), string = context.nodeAsString(node), name = variableName, propertyRelations = [], variable = new Variable(string, node, name, type, propertyRelations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9ICh2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZWZmZWN0aXZlbHlFcXVhbFRvVGVybSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmICh0ZXJtU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0aXZlbHlFcXVhbFRvVGVybTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZVN0cmluZyk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZWZmZWN0aXZlbHlFcXVhbFRvVGVybSA9IHRoaXMuaXNFZmZlY3RpdmVseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0pIHtcbiAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG8odGVybSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uKHZhcmlhYmxlLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25zO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHZhcmlhYmxlLmdldFByb3BlcnR5UmVsYXRpb25zKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtcbiAgICAgIC4uLnByb3BlcnR5UmVsYXRpb25zLFxuICAgICAgcHJvcGVydHlSZWxhdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKG5hbWUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZU5hbWUoKSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKG5hbWUsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbnMucmVkdWNlKChwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZywgcHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNTdHJpbmcgPSBgJHtwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZ30sICR7cHJvcGVydHlSZWxhdGlvblN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBgJHtuYW1lfSR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJpc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJlZmZlY3RpdmVseUVxdWFsVG9UZXJtIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJ0ZXJtU3RyaW5nIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvIiwiVGVybVN1YnN0aXR1dGlvbiIsImRvbSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsImdldFZhcmlhYmxlTmFtZSIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInRlcm1Ob2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjs0REFDUzt5QkFHSTtvQkFDSTtvQkFDWTt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGlCQUFpQjtnQ0FEeEJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOzs7O1lBRzNCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZ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