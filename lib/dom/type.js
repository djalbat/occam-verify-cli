"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    objectType: function() {
        return objectType;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _constants = require("../constants");
var _typeNames = require("../typeNames");
var _name = require("../utilities/name");
var _query = require("../utilities/query");
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first;
var typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), typeDeclarationSuperTypeNodesQuery = (0, _query.nodesQuery)("/typeDeclaration|complexTypeDeclaration/types/type"), firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"), variableDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type");
var Type = /*#__PURE__*/ function() {
    function Type(string, name, superTypes, properties, provisional) {
        _class_call_check(this, Type);
        this.string = string;
        this.name = name;
        this.superTypes = superTypes;
        this.properties = properties;
        this.provisional = provisional;
    }
    _create_class(Type, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getSuperTypes",
            value: function getSuperTypes() {
                return this.superTypes;
            }
        },
        {
            key: "getProperties",
            value: function getProperties() {
                var includeSuperTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var properties = [];
                push(properties, this.properties);
                if (includeSuperTypes) {
                    this.superTypes.forEach(function(superType) {
                        var superTypeProperties = superType.getProperties();
                        push(properties, superTypeProperties);
                    });
                }
                return properties;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                var includeSuperTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var provisional = this.provisional;
                if (includeSuperTypes) {
                    if (!provisional) {
                        provisional = this.superTypes.some(function(superType) {
                            var superTypeProvisional = superType.isProvisional();
                            if (superTypeProvisional) {
                                return true;
                            }
                        });
                    }
                }
                return provisional;
            }
        },
        {
            key: "getSoleSuperType",
            value: function getSoleSuperType() {
                var soleSuperType = null;
                var superTypesLength = this.superTypes.length;
                if (superTypesLength === 1) {
                    var firstSuperType = first(this.superTypes);
                    soleSuperType = firstSuperType; ///
                }
                return soleSuperType;
            }
        },
        {
            key: "setString",
            value: function setString(string) {
                this.string = string;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setSuperTypes",
            value: function setSuperTypes(superTypes) {
                this.superTypes = superTypes;
            }
        },
        {
            key: "setProperties",
            value: function setProperties(properties) {
                this.properties = properties;
            }
        },
        {
            key: "setProvisional",
            value: function setProvisional(provisional) {
                this.provisional = provisional;
            }
        },
        {
            key: "isRefined",
            value: function isRefined() {
                var refined = false;
                var soleSuperType = this.getSoleSuperType();
                if (soleSuperType !== null) {
                    var soleSuperTypeNameMatchesName = soleSuperType.matchName(this.name);
                    refined = soleSuperTypeNameMatchesName; ///
                }
                return refined;
            }
        },
        {
            key: "isBasic",
            value: function isBasic() {
                var basic = false;
                var soleSuperType = this.getSoleSuperType();
                if (soleSuperType !== null) {
                    var soleSuperTypeObjectType = soleSuperType === objectType;
                    basic = soleSuperTypeObjectType; ///
                }
                return basic;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(type) {
                var equalTo = this === type;
                return equalTo;
            }
        },
        {
            key: "isSubTypeOf",
            value: function isSubTypeOf(type) {
                var subTypeOf;
                if (this === objectType) {
                    subTypeOf = false;
                } else {
                    subTypeOf = this.superTypes.some(function(superType) {
                        if (superType === type) {
                            return true;
                        }
                        var superTypeSubTypeOfType = superType.isSubTypeOf(type);
                        if (superTypeSubTypeOfType) {
                            return true;
                        }
                    });
                }
                return subTypeOf;
            }
        },
        {
            key: "isSuperTypeOf",
            value: function isSuperTypeOf(type) {
                var subTypeOf = type.isSubTypeOf(this), superTypeOf = subTypeOf; ///
                return superTypeOf;
            }
        },
        {
            key: "isComparableTo",
            value: function isComparableTo(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), comparableTo = equalTo || subTypeOf || superTypeOf;
                return comparableTo;
            }
        },
        {
            key: "isEqualToOrSubTypeOf",
            value: function isEqualToOrSubTypeOf(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), equalToOrSubTypeOf = equalTo || subTypeOf;
                return equalToOrSubTypeOf;
            }
        },
        {
            key: "isEqualToOrSuperTypeOf",
            value: function isEqualToOrSuperTypeOf(type) {
                var equalTo = this.isEqualTo(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSuperTypeOf = equalTo || superTypeOf;
                return equalToOrSuperTypeOf;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nodeMatches = this.name === name;
                return nodeMatches;
            }
        },
        {
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                var typeNameMatches = this.name === typeName;
                return typeNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), provisional = this.provisional, properties = propertiesJSON, superTypes = superTypesJSON, name = this.name, json = {
                    name: name,
                    superTypes: superTypes,
                    properties: properties,
                    provisional: provisional
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, fileContext), superTypes = (0, _json.superTypesFromJSON)(json, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var type;
                if (typeNode === null) {
                    type = objectType;
                } else {
                    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
                    type = new Type(string, name, superTypes, properties, provisional);
                }
                return type;
            }
        },
        {
            key: "fromTypeAndProvisional",
            value: function fromTypeAndProvisional(type, provisional, context) {
                var name = type.getName(), superType = type, superTypes = [
                    superType
                ], string = stringFromNameAndSuperTypes(name, superTypes), properties = type.getProperties();
                type = new Type(string, name, superTypes, properties, provisional); ///
                return type;
            }
        },
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext), superTypes = superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext), name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), properties = [], type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var type;
                var propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode);
                if (propertyDeclarationTypeNode === null) {
                    type = objectType;
                } else {
                    var typeNode = propertyDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
                    type = new Type(string, name, superTypes, properties, provisional);
                }
                return type;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var type;
                var variableDeclarationSuperTypeNode = variableDeclarationSuperTypeNodeQuery(variableDeclarationNode);
                if (variableDeclarationSuperTypeNode === null) {
                    type = objectType;
                } else {
                    var typeNode = variableDeclarationSuperTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
                    type = new Type(string, name, superTypes, properties, provisional);
                }
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext), properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), name = nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        }
    ]);
    return Type;
}();
_define_property(Type, "name", "Type");
var _default = (0, _dom.domAssigned)(Type);
function stringFromNameAndSuperTypes(name, superTypes) {
    var string = name; ///
    var superTypesString = superTypesStringFromSuperTypes(superTypes);
    if (superTypesString !== null) {
        string = "".concat(string, ":").concat(superTypesString);
    }
    return string;
}
function nameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
}
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        if (superType !== objectType) {
            var superTypeName = superType.getName();
            superTypesString = superTypesString === null ? superTypeName : "".concat(superTypesString, ", ").concat(superTypeName);
        }
        return superTypesString;
    }, null);
    return superTypesString;
}
function superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(typeDeclarationNode), superTypes = typeDeclarationSuperTypeNodes.map(function(typeDeclarationSuperTypeNode) {
        var superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        superTypes.push(objectType);
    }
    return superTypes;
}
function provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(typeDeclarationNode), content = firstPrimaryKeywordTerminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL, provisional = contentProvisional; ///
    return provisional;
}
function nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(complexTypeDeclarationNode), superTypes = typeDeclarationSuperTypeNodes.map(function(typeDeclarationSuperTypeNode) {
        var superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        superTypes.push(objectType);
    }
    return superTypes;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var propertyDeclarationNodes = propertyDeclarationNodesQuery(complexTypeDeclarationNode), properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var Property = _dom.default.Property, property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, fileContext);
        return property;
    });
    return properties;
}
var ObjectType = /*#__PURE__*/ function(Type) {
    _inherits(ObjectType, Type);
    function ObjectType() {
        _class_call_check(this, ObjectType);
        return _call_super(this, ObjectType, arguments);
    }
    _create_class(ObjectType, [
        {
            key: "getProperties",
            value: function getProperties() {
                var properties = [];
                return properties;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, superTypes = [], properties = this.properties, provisional = this.provisional, json = {
                    name: name,
                    superTypes: superTypes,
                    properties: properties,
                    provisional: provisional
                };
                return json;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _typeNames.OBJECT_TYPE_NAME, string = name, superTypes = [], properties = [], provisional = false, objectType = new ObjectType(string, name, superTypes, properties, provisional);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvbi9wcm9wZXJ0eURlY2xhcmF0aW9uXCIpLFxuICAgICAgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZXMvdHlwZVwiKSxcbiAgICAgIGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi9AcHJpbWFyeS1rZXl3b3JkWzBdXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U29sZVN1cGVyVHlwZSgpIHtcbiAgICBsZXQgc29sZVN1cGVyVHlwZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyk7XG5cbiAgICAgIHNvbGVTdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbGVTdXBlclR5cGU7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc29sZVN1cGVyVHlwZSA9IHRoaXMuZ2V0U29sZVN1cGVyVHlwZSgpO1xuXG4gICAgaWYgKHNvbGVTdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNvbGVTdXBlclR5cGVOYW1lTWF0Y2hlc05hbWUgPSBzb2xlU3VwZXJUeXBlLm1hdGNoTmFtZSh0aGlzLm5hbWUpO1xuXG4gICAgICByZWZpbmVkID0gc29sZVN1cGVyVHlwZU5hbWVNYXRjaGVzTmFtZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc29sZVN1cGVyVHlwZSA9IHRoaXMuZ2V0U29sZVN1cGVyVHlwZSgpO1xuXG4gICAgaWYgKHNvbGVTdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNvbGVTdXBlclR5cGVPYmplY3RUeXBlID0gKHNvbGVTdXBlclR5cGUgPT09IG9iamVjdFR5cGUpO1xuXG4gICAgICBiYXNpYyA9IHNvbGVTdXBlclR5cGVPYmplY3RUeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTih0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcm92aXNpb25hbCB9ID0ganNvbixcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUHJvdmlzaW9uYWwodHlwZSwgcHJvdmlzaW9uYWwsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gdHlwZSwgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlKTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpIHtcbiAgbGV0IHN0cmluZyA9IG5hbWU7ICAvLy9cblxuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gIGlmIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke3N1cGVyVHlwZXNTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gb2JqZWN0VHlwZSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICR7c3VwZXJUeXBlTmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzLm1hcCgodHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBzdXBlclR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBjb250ZW50ID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRlbnRQcm92aXNpb25hbCA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsOyAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgc3VwZXJUeXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlc1F1ZXJ5IiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwiZ2V0U29sZVN1cGVyVHlwZSIsInNvbGVTdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJzZXRTdHJpbmciLCJzZXROYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzb2xlU3VwZXJUeXBlTmFtZU1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic29sZVN1cGVyVHlwZU9iamVjdFR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJub2RlTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImNvbnRleHQiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIm5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJkb21Bc3NpZ25lZCIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSIsInJlZHVjZSIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlcyIsIm1hcCIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJQcm9wZXJ0eSIsImRvbSIsInByb3BlcnR5IiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb1ZBLE9BQWlDO2VBQWpDOztJQXlJYUEsVUFBVTtlQUFWQTs7O3lC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