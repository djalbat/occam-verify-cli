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
var _typeNames = require("../typeNames");
var _node = require("../utilities/node");
var _query = require("../utilities/query");
var _type = require("../utilities/type");
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
var typeAssertionTypeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), typeDeclarationSuperTypeNodesQuery = (0, _query.nodesQuery)("/typeDeclaration|complexTypeDeclaration/types/type"), constructorDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
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
            key: "isBasic",
            value: function isBasic() {
                var basic = false;
                var superTypesLength = this.superTypes.length;
                if (superTypesLength === 1) {
                    var firstSuperType = first(this.superTypes), superType = firstSuperType; ///
                    if (superType === objectType) {
                        basic = true;
                    }
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
            key: "matchProvisional",
            value: function matchProvisional(provisional) {
                var provisionalMatches;
                var provisionalA = provisional; ///
                provisional = this.isProvisional();
                var provisionalB = provisional; ///
                provisionalMatches = provisionalA === provisionalB;
                return provisionalMatches;
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
                var type = (0, _node.typeFromTypeNode)(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, fileContext) {
                var typeAssertionTypeNode = typeAssertionTypeNodeQuery(typeAssertionNode), typeNode = typeAssertionTypeNode, type = (0, _node.typeFromTypeNode)(typeNode, fileContext);
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
                var properties = [], provisional = typeDeclarationNode.isProvisional(), typeName = typeDeclarationNode.getTypeName(), name = typeName, superTypes = superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode), typeNode = propertyDeclarationTypeNode, type = (0, _node.typeFromTypeNode)(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var constructorDeclarationSuperTypeNode = constructorDeclarationSuperTypeNodeQuery(constructorDeclarationNode), typeNode = constructorDeclarationSuperTypeNode, type = (0, _node.typeFromTypeNode)(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), provisional = complexTypeDeclarationNode.isProvisional(), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), name = nameFromComplexTypeDeclaration(complexTypeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        }
    ]);
    return Type;
}();
_define_property(Type, "name", "Type");
var _default = (0, _dom.domAssigned)(Type);
function stringFromNameAndSuperTypes(name, superTypes) {
    var string;
    if (name === null) {
        string = _typeNames.OBJECT_TYPE_NAME; ///
    } else {
        var superTypesString = (0, _type.superTypesStringFromSuperTypes)(superTypes);
        string = superTypesString !== null ? "".concat(name, ":").concat(superTypesString) : name; ///
    }
    return string;
}
function nameFromComplexTypeDeclaration(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = typeNode.getTypeName(), name = typeName; ///
    return name;
}
function superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var superTypeNodes = typeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var superType = Type.fromTypeNode(superTypeNode, fileContext);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        superTypes.push(objectType);
    }
    return superTypes;
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
    _create_class(ObjectType, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVBc3NlcnRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uL3Byb3BlcnR5RGVjbGFyYXRpb25cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi90eXBlcy90eXBlXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGU7IC8vL1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlKSB7XG4gICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUubmFtZSA9PT0gbnVsbCkge1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWxNYXRjaGVzO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWxNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFByb3Zpc2lvbmFsKHR5cGUsIHByb3Zpc2lvbmFsKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKFR5cGUpO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGlmIChuYW1lID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gT0JKRUNUX1RZUEVfTkFNRTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICBzdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7bmFtZX06JHtzdXBlclR5cGVzU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgbmFtZTsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBzdXBlclR5cGVzRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSB0eXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgc3VwZXJUeXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHN1cGVyVHlwZXMucHVzaChvYmplY3RUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJ0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJmb3JFYWNoIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlUHJvcGVydGllcyIsImlzUHJvdmlzaW9uYWwiLCJzb21lIiwic3VwZXJUeXBlUHJvdmlzaW9uYWwiLCJzZXRTdHJpbmciLCJzZXROYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsImlzQmFzaWMiLCJiYXNpYyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25UeXBlTm9kZSIsImZyb21UeXBlQW5kUHJvdmlzaW9uYWwiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTmFtZSIsInN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJkb21Bc3NpZ25lZCIsIk9CSkVDVF9UWVBFX05BTUUiLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwidHlwZURlY2xhcmF0aW9uVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwibWFwIiwic3VwZXJUeXBlTm9kZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlByb3BlcnR5IiwiZG9tIiwicHJvcGVydHkiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlUQTtlQUFB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