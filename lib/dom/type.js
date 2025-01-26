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
var push = _necessary.arrayUtilities.push;
var typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[0]"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), typeDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[1]"), firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"), variableDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type");
var Type = /*#__PURE__*/ function() {
    function Type(string, name, superType, properties, provisional) {
        _class_call_check(this, Type);
        this.string = string;
        this.name = name;
        this.superType = superType;
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
            key: "getSuperType",
            value: function getSuperType() {
                return this.superType;
            }
        },
        {
            key: "getProperties",
            value: function getProperties() {
                var includeSuperType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var properties = [];
                push(properties, this.properties);
                if (includeSuperType) {
                    var superTypeProperties = this.superType.getProperties();
                    push(properties, superTypeProperties);
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
            key: "setSuperType",
            value: function setSuperType(superType) {
                this.superType = superType;
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
                if (false) {
                ///
                } else if (this === objectType) {
                    subTypeOf = false;
                } else if (this.superType === type) {
                    subTypeOf = true;
                } else {
                    subTypeOf = this.superType.isSubTypeOf(type);
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
                var propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypeJSON = (0, _json.superTypeToSuperTypeJSON)(this.superType), provisional = this.provisional, properties = propertiesJSON, superType = superTypeJSON, name = this.name, json = {
                    name: name,
                    superType: superType,
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
                var name = json.name, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, fileContext), superType = (0, _json.superTypeFromJSON)(json, fileContext), string = stringFromNameAndSuperType(name, superType), type = new Type(string, name, superType, properties, provisional);
                return type;
            }
        },
        {
            key: "fromType",
            value: function fromType(type, context) {
                var name = type.getName(), superType = type, string = stringFromNameAndSuperType(name, superType), properties = type.getProperties(), provisional = false; ///
                type = new Type(string, name, superType, properties, provisional); ///
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
                    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, properties = null, provisional = null;
                    type = new Type(string, name, superType, properties, provisional);
                }
                return type;
            }
        },
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext), superType = superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext), name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext), string = stringFromNameAndSuperType(name, superType), properties = [], type = new Type(string, name, superType, properties, provisional);
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
                    var typeNode = propertyDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, properties = null, provisional = null;
                    type = new Type(string, name, superType, properties, provisional);
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
                    var typeNode = variableDeclarationSuperTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, properties = null, provisional = null;
                    type = new Type(string, name, superType, properties, provisional);
                }
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext), properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), superType = superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), name = nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), string = stringFromNameAndSuperType(name, superType), type = new Type(string, name, superType, properties, provisional);
                return type;
            }
        }
    ]);
    return Type;
}();
_define_property(Type, "name", "Type");
var _default = (0, _dom.domAssigned)(Type);
function stringFromNameAndSuperType(name, superType) {
    var string = name; ///
    if (superType !== null && superType !== objectType) {
        var typeString = string, superTypeName = superType.getName();
        string = "".concat(typeString, ":").concat(superTypeName);
    }
    return string;
}
function nameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
}
function superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(typeDeclarationNode), superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
    return superType;
}
function provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(typeDeclarationNode), content = firstPrimaryKeywordTerminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL, provisional = contentProvisional; ///
    return provisional;
}
function nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
}
function superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(complexTypeDeclarationNode), superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
    return superType;
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
                var name = this.name, superType = null, properties = this.properties, provisional = this.provisional, json = {
                    name: name,
                    superType: superType,
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
                var name = _typeNames.OBJECT_TYPE_NAME, string = name, superType = null, properties = [], provisional = false, objectType = new ObjectType(string, name, superType, properties, provisional);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVswXVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uL3Byb3BlcnR5RGVjbGFyYXRpb25cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVsxXVwiKSxcbiAgICAgIGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi9AcHJpbWFyeS1rZXl3b3JkWzBdXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGUgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGUpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSB0aGlzLnN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcyA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHRoaXMuc3VwZXJUeXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlKG5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlKG5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7ICAvLy9cblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGUobmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGUobmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKFR5cGUpO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZShuYW1lLCBzdXBlclR5cGUpIHtcbiAgbGV0IHN0cmluZyA9IG5hbWU7ICAvLy9cblxuICBpZiAoKHN1cGVyVHlwZSAhPT0gbnVsbCkgJiYgKHN1cGVyVHlwZSAhPT0gb2JqZWN0VHlwZSkpIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBjb250ZW50ID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRlbnRQcm92aXNpb25hbCA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsOyAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJzdXBlclR5cGUiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNldFN0cmluZyIsInNldE5hbWUiLCJzZXRTdXBlclR5cGUiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInByb3BlcnRpZXNGcm9tSlNPTiIsInN1cGVyVHlwZUZyb21KU09OIiwic3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGUiLCJmcm9tVHlwZSIsImNvbnRleHQiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRvbUFzc2lnbmVkIiwidHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJQcm9wZXJ0eSIsImRvbSIsInByb3BlcnR5IiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa1JBLE9BQWlDO2VBQWpDOztJQXdHYUEsVUFBVTtlQUFWQTs7O3lCQXhYa0I7MkRBRWY7eUJBRVk7eUJBRUs7b0JBQ0k7cUJBQ0M7b0JBQ3NFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFj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