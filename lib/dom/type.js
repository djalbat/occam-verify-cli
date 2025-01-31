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
var _object = /*#__PURE__*/ _interop_require_default(require("occam-furtle/lib/dom/assignment/object"));
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
var push = _necessary.arrayUtilities.push;
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
                return this.provisional;
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
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCJvY2NhbS1mdXJ0bGUvbGliL2RvbS9hc3NpZ25tZW50L29iamVjdFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvbi9wcm9wZXJ0eURlY2xhcmF0aW9uXCIpLFxuICAgICAgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZXMvdHlwZVwiKSxcbiAgICAgIGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi9AcHJpbWFyeS1rZXl3b3JkWzBdXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBpZiAodGhpcyA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHsgLy8vXG4gICAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUgPSBzdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3Qgc3ViVHlwZU9mID0gdHlwZS5pc1N1YlR5cGVPZih0aGlzKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHN1YlR5cGVPZjsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFByb3Zpc2lvbmFsKHR5cGUsIHByb3Zpc2lvbmFsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSB7XG4gIGxldCBzdHJpbmcgPSBuYW1lOyAgLy8vXG5cbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICBpZiAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHtzdXBlclR5cGVzU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIG5hbWUgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGlmIChzdXBlclR5cGUgIT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBjb250ZW50ID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRlbnRQcm92aXNpb25hbCA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsOyAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgc3VwZXJUeXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwidHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSIsImZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkiLCJUeXBlIiwic3RyaW5nIiwibmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNldFN0cmluZyIsInNldE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInNvbWUiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInByb3BlcnRpZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyIsImZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwiY29udGV4dCIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRvbUFzc2lnbmVkIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlIiwicmVkdWNlIiwic3VwZXJUeXBlTmFtZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzIiwibWFwIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJQcm9wZXJ0eSIsImRvbSIsInByb3BlcnR5IiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNlJBLE9BQWlDO2VBQWpDOztJQW9JYUEsVUFBVTtlQUFWQTs7O3lCQS9aa0I7MkRBRWY7eUJBRVk7eUJBRUs7b0JBQ0k7cUJBQ0M7b0JBQ3lFOzZEQUM1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQU1FLCtCQUErQkMsSUFBQUEsZ0JBQVMsRUFBQyxpREFDekNDLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQyxnREFDM0NDLG1DQUFtQ0gsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NJLHFDQUFxQ0YsSUFBQUEsaUJBQVUsRUFBQyx1REFDaERHLHVDQUF1Q0wsSUFBQUEsZ0JBQVMsRUFBQyxnRUFDakRNLHdDQUF3Q04sSUFBQUEsZ0JBQVMsRUFBQztBQUV4RCxJQUFBLEFBQU1PLHFCQUFOO2FBQU1BLEtBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEekRMO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFD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