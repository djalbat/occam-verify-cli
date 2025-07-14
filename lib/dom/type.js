"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get objectType () {
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
var typeAssertionTypeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), typeDeclarationSuperTypeNodesQuery = (0, _query.nodesQuery)("/typeDeclaration|complexTypeDeclaration/types/type"), firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"), variableDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), constructorDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
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
                var equalTo = false;
                if (this.type === type) {
                    equalTo = true;
                } else {
                    if (type.name === null) {}
                }
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
            value: function fromTypeNode(typeNode, fileContext) {
                var type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, fileContext) {
                var typeAssertionTypeNode = typeAssertionTypeNodeQuery(typeAssertionNode), typeNode = typeAssertionTypeNode, type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromTypeAndProvisional",
            value: function fromTypeAndProvisional(type, provisional) {
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
                var propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode), typeNode = propertyDeclarationTypeNode, type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var variableDeclarationSuperTypeNode = variableDeclarationSuperTypeNodeQuery(variableDeclarationNode), typeNode = variableDeclarationSuperTypeNode, type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var constructorDeclarationSuperTypeNode = constructorDeclarationSuperTypeNodeQuery(constructorDeclarationNode), typeNode = constructorDeclarationSuperTypeNode, type = typeFromTypeNode(typeNode, fileContext);
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
function typeFromTypeNode(typeNode, fileContext) {
    var type;
    if (typeNode === null) {
        type = objectType;
    } else {
        var Type = _dom.default.Type, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
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
        var superTypeString = superType.getString();
        superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        return superTypesString;
    }, null);
    return superTypesString;
}
function superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(typeDeclarationNode), superTypes = typeDeclarationSuperTypeNodes.map(function(typeDeclarationSuperTypeNode) {
        var superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode, fileContext);
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
        var superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGVcIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvbi9wcm9wZXJ0eURlY2xhcmF0aW9uXCIpLFxuICAgICAgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZXMvdHlwZVwiKSxcbiAgICAgIGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi9AcHJpbWFyeS1rZXl3b3JkWzBdXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTb2xlU3VwZXJUeXBlKCkge1xuICAgIGxldCBzb2xlU3VwZXJUeXBlID0gbnVsbDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKTtcblxuICAgICAgc29sZVN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZVN1cGVyVHlwZTtcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgaXNSZWZpbmVkKCkge1xuICAgIGxldCByZWZpbmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb2xlU3VwZXJUeXBlID0gdGhpcy5nZXRTb2xlU3VwZXJUeXBlKCk7XG5cbiAgICBpZiAoc29sZVN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc29sZVN1cGVyVHlwZU5hbWVNYXRjaGVzTmFtZSA9IHNvbGVTdXBlclR5cGUubWF0Y2hOYW1lKHRoaXMubmFtZSk7XG5cbiAgICAgIHJlZmluZWQgPSBzb2xlU3VwZXJUeXBlTmFtZU1hdGNoZXNOYW1lOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmaW5lZDtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb2xlU3VwZXJUeXBlID0gdGhpcy5nZXRTb2xlU3VwZXJUeXBlKCk7XG5cbiAgICBpZiAoc29sZVN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc29sZVN1cGVyVHlwZU9iamVjdFR5cGUgPSAoc29sZVN1cGVyVHlwZSA9PT0gb2JqZWN0VHlwZSk7XG5cbiAgICAgIGJhc2ljID0gc29sZVN1cGVyVHlwZU9iamVjdFR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlKSB7XG4gICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUubmFtZSA9PT0gbnVsbCkge1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTih0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcm92aXNpb25hbCB9ID0ganNvbixcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblR5cGVOb2RlID0gdHlwZUFzc2VydGlvblR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZUFzc2VydGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlLCAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gW1xuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlKTtcblxuZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcykge1xuICBsZXQgc3RyaW5nID0gbmFtZTsgIC8vL1xuXG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgaWYgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7c3VwZXJUeXBlc1N0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXMucmVkdWNlKChzdXBlclR5cGVzU3RyaW5nLCBzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVTdHJpbmd9J2A7XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHN1cGVyVHlwZXMucHVzaChvYmplY3RUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm92aXNpb25hbEZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSBjb250ZW50UHJvdmlzaW9uYWw7IC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlc1F1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzLm1hcCgodHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgc3VwZXJUeXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJ0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwiZ2V0U29sZVN1cGVyVHlwZSIsInNvbGVTdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJzZXRTdHJpbmciLCJzZXROYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzb2xlU3VwZXJUeXBlTmFtZU1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic29sZVN1cGVyVHlwZU9iamVjdFR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJub2RlTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25UeXBlTm9kZSIsImZyb21UeXBlQW5kUHJvdmlzaW9uYWwiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZG9tQXNzaWduZWQiLCJkb20iLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSIsInJlZHVjZSIsInN1cGVyVHlwZVN0cmluZyIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzIiwibWFwIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlByb3BlcnR5IiwicHJvcGVydHkiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFxVUE7ZUFBQTs7UUEySmFBO2VBQUFBOzs7eUJBOWRrQjsyREFFZjt5QkFFWTt5QkFFSztvQkFDSTtxQkFDQztvQkFDeUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9HLElBQVFDLE9BQWdCQyx5QkFBYyxDQUE5QkQsTUFBTUUsUUFBVUQseUJBQWMsQ0FBeEJDO0FBRWQsSUFBTUMsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0MsK0JBQStCRCxJQUFBQSxnQkFBUyxFQUFDLGlEQUN6Q0UsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDLGdEQUMz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