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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
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
                var string = json.string, localContext = _local.default.fromFileContext(fileContext), context = localContext, variableString = string, variableNode = (0, _variable.variableNodeFromVariableString)(variableString, context), variableName = variableNode.getVariableName(), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), propertyRelations = [], variable = new Variable(string, node, name, type, propertyRelations);
                return variable;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var variable = null;
                var termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var variableNode = termVariableNode, type = null;
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
                var variable = null;
                if (variableNode !== null) {
                    variable = variableFromVariableNodeAndType(variableNode, type, context);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGVcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHZhcmlhYmxlU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSAodmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBpc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKHRlcm1TdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIGVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZmZlY3RpdmVseUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlU3RyaW5nKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gdGhpcy5pc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZWZmZWN0aXZlbHlFcXVhbFRvVGVybSkge1xuICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb24uaXNUZXJtRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uKHZhcmlhYmxlLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25zO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHZhcmlhYmxlLmdldFByb3BlcnR5UmVsYXRpb25zKCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtcbiAgICAgIC4uLnByb3BlcnR5UmVsYXRpb25zLFxuICAgICAgcHJvcGVydHlSZWxhdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKG5hbWUsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZU5hbWUoKSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFByb3BlcnR5UmVsYXRpb25zKG5hbWUsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbnMucmVkdWNlKChwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZywgcHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNTdHJpbmcgPSBgJHtwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZ30sICR7cHJvcGVydHlSZWxhdGlvblN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBgJHtuYW1lfSR7cHJvcGVydHlSZWxhdGlvbnNTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJpc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJlZmZlY3RpdmVseUVxdWFsVG9UZXJtIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJ0ZXJtU3RyaW5nIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsImdldFZhcmlhYmxlTmFtZSIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImRvbSIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInN0cmluZ0Zyb21OYW1lQW5kUHJvcGVydHlSZWxhdGlvbnMiLCJwcm9wZXJ0eVJlbGF0aW9uc1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzsyREFkZ0I7NERBQ1M7MkRBQ0k7cUJBRUg7b0JBQ0M7eUJBRUU7b0JBQ0k7b0JBQ1k7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUMsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsaUJBQWlCO2dDQUR4Qkw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFD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