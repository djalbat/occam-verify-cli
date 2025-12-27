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
    get baseType () {
        return baseType;
    },
    get default () {
        return _default;
    }
});
var _necessary = require("necessary");
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
var _constants = require("../constants");
var _node = require("../utilities/node");
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
var Type = /*#__PURE__*/ function() {
    function Type(string, name, prefixName, superTypes, properties, provisional) {
        _class_call_check(this, Type);
        this.string = string;
        this.name = name;
        this.prefixName = prefixName;
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
            key: "getPrefixName",
            value: function getPrefixName() {
                return this.prefixName;
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
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setPrefixName",
            value: function setPrefixName(prefixName) {
                this.prefixName = prefixName;
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
            key: "replaceSuperType",
            value: function replaceSuperType(oldSuperType, newSuperType) {
                var index = this.superTypes.indexOf(oldSuperType), start = index, deleteCount = 1;
                this.superTypes.splice(start, deleteCount, newSuperType);
            }
        },
        {
            key: "isPrefixed",
            value: function isPrefixed() {
                var prefixed = this.prefixName !== null;
                return prefixed;
            }
        },
        {
            key: "getPrefixedName",
            value: function getPrefixedName() {
                var prefixedName = null;
                var prefixed = this.isPrefixed();
                if (prefixed) {
                    prefixedName = "".concat(this.prefixName).concat(this.name);
                }
                return prefixedName;
            }
        },
        {
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                var prefixed = this.isPrefixed(), nominalTypeName = prefixed ? "".concat(this.prefixName).concat(this.name) : this.name;
                return nominalTypeName;
            }
        },
        {
            key: "isBasic",
            value: function isBasic() {
                var basic = false;
                var superTypesLength = this.superTypes.length;
                if (superTypesLength === 1) {
                    var firstSuperType = first(this.superTypes), superType = firstSuperType; ///
                    if (superType === baseType) {
                        basic = true;
                    }
                }
                return basic;
            }
        },
        {
            key: "isRefined",
            value: function isRefined() {
                var refined = false;
                var superTypesLength = this.superTypes.length;
                if (superTypesLength === 1) {
                    var firstSuperType = first(this.superTypes), superType = firstSuperType, superTypeName = superType.getName();
                    if (superTypeName === this.name) {
                        refined = true;
                    }
                }
                return refined;
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
                if (this === baseType) {
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
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                var name = this.getName(), typeNameMatches = name === typeName;
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
            key: "matchPrefixedTypeName",
            value: function matchPrefixedTypeName(prefixedTypeName) {
                var prefixedTypeNameMatches = false;
                var prefixed = this.isPrefixed();
                if (prefixed) {
                    var prefixedName = this.getPrefixedName();
                    prefixedTypeNameMatches = prefixedTypeName === prefixedName;
                }
                return prefixedTypeNameMatches;
            }
        },
        {
            key: "matchNominalTypeName",
            value: function matchNominalTypeName(nominalTypeName) {
                var nominalTypeNameMatches = false;
                if (!nominalTypeNameMatches) {
                    var name = this.getName();
                    nominalTypeNameMatches = nominalTypeName === name;
                }
                if (!nominalTypeNameMatches) {
                    var prefixed = this.isPrefixed();
                    if (prefixed) {
                        var prefixedName = this.getPrefixedName();
                        nominalTypeNameMatches = nominalTypeName === prefixedName;
                    }
                }
                return nominalTypeNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), provisional = this.provisional, properties = propertiesJSON, superTypes = superTypesJSON, name = this.name, prefixName = this.prefixName, json = {
                    name: name,
                    prefixName: prefixName,
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
            value: function fromJSON(json, context) {
                var name = json.name, prefixName = json.prefixName, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), typeName = name, typePrefixName = null, string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode, context) {
                var type = (0, _node.typeFromTypeNode)(typeNode, context);
                return type;
            }
        },
        {
            key: "fromSuperTypeNode",
            value: function fromSuperTypeNode(superTypeNode, context) {
                context = null; ///
                var typeNode = superTypeNode, type = (0, _node.typeFromTypeNode)(typeNode, context);
                return type;
            }
        },
        {
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, context) {
                var typeNode = typeAssertionNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode, context);
                return type;
            }
        },
        {
            key: "fromTypeAndProvisional",
            value: function fromTypeAndProvisional(type, provisional) {
                var name = type.getName(), prefixName = type.getPrefixName(), superType = type, typeName = name, typePrefixName = prefixName, superTypes = [
                    superType
                ], string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), properties = type.getProperties();
                type = new Type(string, name, prefixName, superTypes, properties, provisional); ///
                return type;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, context) {
                var typeNode = propertyDeclarationNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode, context);
                return type;
            }
        },
        {
            key: "fromSimpleTypeDeclarationNode",
            value: function fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
                var typeName = simpleTypeDeclarationNode.getTypeName(), provisional = simpleTypeDeclarationNode.isProvisional(), typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(), superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), name = typeName, prefixName = typePrefixName, properties = [], string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var typeName = complexTypeDeclarationNode.getTypeName(), provisional = complexTypeDeclarationNode.isProvisional(), typePrefixName = complexTypeDeclarationNode.getTypePrefixName(), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), name = typeName, prefixName = typePrefixName, properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var type;
                var typeNode = constructorDeclarationNode.getTypeNode();
                if (typeNode === null) {
                    type = baseType;
                } else {
                    var provisional = constructorDeclarationNode.isProvisional();
                    type = (0, _node.typeFromTypeNode)(typeNode, context);
                    type.setProvisional(provisional);
                }
                return type;
            }
        }
    ]);
    return Type;
}();
_define_property(Type, "name", "Type");
var _default = (0, _structure.define)(Type);
function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var superTypeNodes = simpleTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var superType = Type.fromSuperTypeNode(superTypeNode, context);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        var superType = baseType; ///
        superTypes.push(superType);
    }
    return superTypes;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var superType = Type.fromSuperTypeNode(superTypeNode, context);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        var superType = baseType; ///
        superTypes.push(superType);
    }
    return superTypes;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var Property = _structure.default.Property, propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(), properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, context);
        return property;
    });
    return properties;
}
var BaseType = /*#__PURE__*/ function(Type) {
    _inherits(BaseType, Type);
    function BaseType() {
        _class_call_check(this, BaseType);
        return _call_super(this, BaseType, arguments);
    }
    _create_class(BaseType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _constants.BASE_TYPE_SYMBOL, string = name, prefixName = null, superTypes = [], properties = [], provisional = false, baseType = new BaseType(string, name, prefixName, superTypes, properties, provisional);
                return baseType;
            }
        }
    ]);
    return BaseType;
}(Type);
var baseType = BaseType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBCQVNFX1RZUEVfU1lNQk9MIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdHlwZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdXBlclR5cGVzLmluZGV4T2Yob2xkU3VwZXJUeXBlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuc3VwZXJUeXBlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdTdXBlclR5cGUpO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9ICh0aGlzLnByZWZpeE5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UHJlZml4ZWROYW1lKCkge1xuICAgIGxldCBwcmVmaXhlZE5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgcHJlZml4ZWROYW1lID0gYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByZWZpeGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgaXNCYXNpYygpIHtcbiAgICBsZXQgYmFzaWMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlOyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIGxldCBwcm92aXNpb25hbE1hdGNoZXM7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWxNYXRjaGVzID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCBwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKTtcblxuICAgICAgcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXMgPSAocHJlZml4ZWRUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgbm9taW5hbFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFub21pbmFsVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vbWluYWxUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpO1xuXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHRoaXMucHJlZml4TmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZS5nZXRQcmVmaXhOYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gdHlwZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBwcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gYmFzZVR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShUeXBlKTtcblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBUeXBlLmZyb21TdXBlclR5cGVOb2RlKHN1cGVyVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBiYXNlVHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIEJhc2VUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gQkFTRV9UWVBFX1NZTUJPTCwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2UsXG4gICAgICAgICAgYmFzZVR5cGUgPSBuZXcgQmFzZVR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gYmFzZVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJhc2VUeXBlID0gQmFzZVR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJiYXNlVHlwZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJvbGRTdXBlclR5cGUiLCJuZXdTdXBlclR5cGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwibWF0Y2hQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWVNYXRjaGVzIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwidHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsInN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImRlZmluZSIsInN1cGVyVHlwZU5vZGVzIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJtYXAiLCJQcm9wZXJ0eSIsInN0cnVjdHVyZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsInByb3BlcnR5IiwiQmFzZVR5cGUiLCJmcm9tTm90aGluZyIsIkJBU0VfVFlQRV9TWU1CT0wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVkYUE7ZUFBQUE7O1FBaEViO2VBQUE7Ozt5QkFyWitCO2lFQUVUO3lCQUdXO29CQUNBO29CQUM2QjtvQkFDaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9HLElBQVFDLE9BQWdCQyx5QkFBYyxDQUE5QkQsTUFBTUUsUUFBVUQseUJBQWMsQ0FBeEJDO0FBRWQsSUFBQSxBQUFNQyxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFB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