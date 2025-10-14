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
                    if (superType === objectType) {
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
                    type = objectType;
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
var _default = (0, _dom.domAssigned)(Type);
function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var superTypeNodes = simpleTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var superType = Type.fromSuperTypeNode(superTypeNode, context);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        var superType = objectType; ///
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
        var superType = objectType; ///
        superTypes.push(superType);
    }
    return superTypes;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var Property = _dom.default.Property, propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(), properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, context);
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
                var name = _constants.OBJECT_TYPE_NAME, string = name, prefixName = null, superTypes = [], properties = [], provisional = false, objectType = new ObjectType(string, name, prefixName, superTypes, properties, provisional);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20sIHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdHlwZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdXBlclR5cGVzLmluZGV4T2Yob2xkU3VwZXJUeXBlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuc3VwZXJUeXBlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdTdXBlclR5cGUpO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9ICh0aGlzLnByZWZpeE5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UHJlZml4ZWROYW1lKCkge1xuICAgIGxldCBwcmVmaXhlZE5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgcHJlZml4ZWROYW1lID0gYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByZWZpeGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgaXNCYXNpYygpIHtcbiAgICBsZXQgYmFzaWMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlOyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgICBiYXNpYyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljO1xuICB9XG5cbiAgaXNSZWZpbmVkKCkge1xuICAgIGxldCByZWZpbmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZU5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICByZWZpbmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmaW5lZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBpZiAodGhpcyA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHsgLy8vXG4gICAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUgPSBzdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3Qgc3ViVHlwZU9mID0gdHlwZS5pc1N1YlR5cGVPZih0aGlzKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHN1YlR5cGVPZjsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWxNYXRjaGVzO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWxNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCk7XG5cbiAgICAgIHByZWZpeGVkVHlwZU5hbWVNYXRjaGVzID0gKHByZWZpeGVkVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbm9taW5hbFR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gKG5vbWluYWxUeXBlTmFtZSA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKCFub21pbmFsVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKTtcblxuICAgICAgICBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gKG5vbWluYWxUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTih0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSB0aGlzLnByZWZpeE5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwcmVmaXhOYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUsIHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cGVyVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUHJvdmlzaW9uYWwodHlwZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGUuZ2V0UHJlZml4TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gcHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKFR5cGUpO1xuXG5mdW5jdGlvbiBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0U3VwZXJUeXBlTm9kZXMoKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZU5vZGVzLm1hcCgoc3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IFR5cGUuZnJvbVN1cGVyVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gb2JqZWN0VHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0U3VwZXJUeXBlTm9kZXMoKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZU5vZGVzLm1hcCgoc3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IFR5cGUuZnJvbVN1cGVyVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gb2JqZWN0VHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2UsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJvbGRTdXBlclR5cGUiLCJuZXdTdXBlclR5cGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwibWF0Y2hQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWVNYXRjaGVzIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwidHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsInN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImRvbUFzc2lnbmVkIiwic3VwZXJUeXBlTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyIsIm1hcCIsIlByb3BlcnR5IiwiZG9tIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHkiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFxWkE7ZUFBQTs7UUFnRWFBO2VBQUFBOzs7eUJBbmRrQjsyREFFRTt5QkFDQTtvQkFDQTtvQkFDNkI7b0JBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVkLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRHJFTjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBUGpCTjs7WUFVSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjQyxvQkFBQUEsaUVBQW9CO2dCQUNoQyxJQUFNUCxhQUFhLEVBQUU7Z0JBRXJCUixLQUFLUSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtnQkFFaEMsSUFBSU8sbUJBQW1CO29CQUNyQixJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsT0FBTyxDQUFDLFNBQUNDO3dCQUN2QixJQUFNQyxzQkFBc0JELFVBQVVILGFBQWE7d0JBRW5EZCxLQUFLUSxZQUFZVTtvQkFDbkI7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY0osb0JBQUFBLGlFQUFvQjtnQkFDaEMsSUFBSU4sY0FBYyxJQUFJLENBQUNBLFdBQVc7Z0JBRWxDLElBQUlNLG1CQUFtQjtvQkFDckIsSUFBSSxDQUFDTixhQUFhO3dCQUNoQkEsY0FBYyxJQUFJLENBQUNGLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLFNBQUNIOzRCQUNsQyxJQUFNSSx1QkFBdUJKLFVBQVVFLGFBQWE7NEJBRXBELElBQUlFLHNCQUFzQjtnQ0FDeEIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPWjtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFqQixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjakIsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjakIsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjakIsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlakIsV0FBVztnQkFDeEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO1lBQ3JCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFlBQVksRUFBRUMsWUFBWTtnQkFDekMsSUFBTUMsUUFBUSxJQUFJLENBQUN2QixVQUFVLENBQUN3QixPQUFPLENBQUNILGVBQ2hDSSxRQUFRRixPQUNSRyxjQUFjO2dCQUVwQixJQUFJLENBQUMxQixVQUFVLENBQUMyQixNQUFNLENBQUNGLE9BQU9DLGFBQWFKO1lBQzdDOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVksSUFBSSxDQUFDOUIsVUFBVSxLQUFLO2dCQUV0QyxPQUFPOEI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxlQUFlO2dCQUVuQixJQUFNRixXQUFXLElBQUksQ0FBQ0QsVUFBVTtnQkFFaEMsSUFBSUMsVUFBVTtvQkFDWkUsZUFBZSxBQUFDLEdBQW9CLE9BQWxCLElBQUksQ0FBQ2hDLFVBQVUsRUFBYSxPQUFWLElBQUksQ0FBQ0QsSUFBSTtnQkFDL0M7Z0JBRUEsT0FBT2lDO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsV0FBVyxJQUFJLENBQUNELFVBQVUsSUFDMUJLLGtCQUFrQkosV0FDQyxBQUFDLEdBQW9CLE9BQWxCLElBQUksQ0FBQzlCLFVBQVUsRUFBYSxPQUFWLElBQUksQ0FBQ0QsSUFBSSxJQUMzQixJQUFJLENBQUNBLElBQUk7Z0JBRXJDLE9BQU9tQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFFBQVE7Z0JBRVosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ3FDLE1BQU07Z0JBRS9DLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxpQkFBaUIzQyxNQUFNLElBQUksQ0FBQ0ssVUFBVSxHQUN0Q1UsWUFBWTRCLGdCQUFnQixHQUFHO29CQUVyQyxJQUFJNUIsY0FBY2xCLFlBQVk7d0JBQzVCMkMsUUFBUTtvQkFDVjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUosbUJBQW1CLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ3FDLE1BQU07Z0JBRS9DLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxpQkFBaUIzQyxNQUFNLElBQUksQ0FBQ0ssVUFBVSxHQUN0Q1UsWUFBWTRCLGdCQUNaRyxnQkFBZ0IvQixVQUFVTixPQUFPO29CQUV2QyxJQUFJcUMsa0JBQWtCLElBQUksQ0FBQzNDLElBQUksRUFBRTt3QkFDL0IwQyxVQUFVO29CQUNaO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSTtnQkFDWixJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsSUFBSTtnQkFDZCxJQUFJRztnQkFFSixJQUFJLElBQUksS0FBS3RELFlBQVk7b0JBQ3ZCc0QsWUFBWTtnQkFDZCxPQUFPO29CQUNMQSxZQUFZLElBQUksQ0FBQzlDLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLFNBQUNIO3dCQUNoQyxJQUFJQSxjQUFjaUMsTUFBTTs0QkFDdEIsT0FBTzt3QkFDVDt3QkFFQSxJQUFNSSx5QkFBeUJyQyxVQUFVbUMsV0FBVyxDQUFDRjt3QkFFckQsSUFBSUksd0JBQXdCOzRCQUMxQixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0wsSUFBSTtnQkFDaEIsSUFBTUcsWUFBWUgsS0FBS0UsV0FBVyxDQUFDLElBQUksR0FDakNJLGNBQWNILFdBQVksR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUCxJQUFJO2dCQUNqQixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6QkcsWUFBWSxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsT0FDN0JNLGNBQWMsSUFBSSxDQUFDRCxhQUFhLENBQUNMLE9BQ2pDUSxlQUFnQlAsV0FBV0UsYUFBYUc7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCVCxJQUFJO2dCQUN2QixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6QkcsWUFBWSxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsT0FDN0JVLHFCQUFzQlQsV0FBV0U7Z0JBRXZDLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCWCxJQUFJO2dCQUN6QixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6Qk0sY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0wsT0FDakNZLHVCQUF3QlgsV0FBV0s7Z0JBRXpDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUTtnQkFDcEIsSUFBTTNELE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25Cc0Qsa0JBQW1CNUQsU0FBUzJEO2dCQUVsQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQnpELFdBQVc7Z0JBQzFCLElBQUkwRDtnQkFFSixJQUFNQyxlQUFlM0QsYUFBYSxHQUFHO2dCQUVyQ0EsY0FBYyxJQUFJLENBQUNVLGFBQWE7Z0JBRWhDLElBQU1rRCxlQUFlNUQsYUFBYSxHQUFHO2dCQUVyQzBELHFCQUFzQkMsaUJBQWlCQztnQkFFdkMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNcEMsV0FBVyxJQUFJLENBQUNELFVBQVU7Z0JBRWhDLElBQUlDLFVBQVU7b0JBQ1osSUFBTUUsZUFBZSxJQUFJLENBQUNELGVBQWU7b0JBRXpDbUMsMEJBQTJCRCxxQkFBcUJqQztnQkFDbEQ7Z0JBRUEsT0FBT2tDO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCakMsZUFBZTtnQkFDbEMsSUFBSWtDLHlCQUF5QjtnQkFFN0IsSUFBSSxDQUFDQSx3QkFBd0I7b0JBQzNCLElBQU1yRSxPQUFPLElBQUksQ0FBQ00sT0FBTztvQkFFekIrRCx5QkFBMEJsQyxvQkFBb0JuQztnQkFDaEQ7Z0JBRUEsSUFBSSxDQUFDcUUsd0JBQXdCO29CQUMzQixJQUFNdEMsV0FBVyxJQUFJLENBQUNELFVBQVU7b0JBRWhDLElBQUlDLFVBQVU7d0JBQ1osSUFBTUUsZUFBZSxJQUFJLENBQUNELGVBQWU7d0JBRXpDcUMseUJBQTBCbEMsb0JBQW9CRjtvQkFDaEQ7Z0JBQ0Y7Z0JBRUEsT0FBT29DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUNyRSxVQUFVLEdBQzNEc0UsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUN4RSxVQUFVLEdBQzNERSxjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkQsYUFBYW9FLGdCQUNickUsYUFBYXVFLGdCQUNiekUsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLGFBQWEsSUFBSSxDQUFDQSxVQUFVLEVBQzVCMEUsT0FBTztvQkFDTDNFLE1BQUFBO29CQUNBQyxZQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxhQUFBQTtnQkFDRjtnQkFFTixPQUFPdUU7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU87Z0JBQzNCLElBQVE3RSxPQUFrQzJFLEtBQWxDM0UsTUFBTUMsYUFBNEIwRSxLQUE1QjFFLFlBQVlHLGNBQWdCdUUsS0FBaEJ2RSxhQUNwQkQsYUFBYTJFLElBQUFBLHdCQUFrQixFQUFDSCxNQUFNRSxVQUN0QzNFLGFBQWE2RSxJQUFBQSx3QkFBa0IsRUFBQ0osTUFBTUUsVUFDdENsQixXQUFXM0QsTUFDWGdGLGlCQUFpQixNQUNqQmpGLFNBQVNrRixJQUFBQSxtREFBNkMsRUFBQ3RCLFVBQVVxQixnQkFBZ0I5RSxhQUNqRjJDLE9BQU8sSUF2U1gvQyxLQXVTb0JDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDLFlBQVlDO2dCQUV4RSxPQUFPeUM7WUFDVDs7O1lBRU9xQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVOLE9BQU87Z0JBQ25DLElBQU1oQyxPQUFPdUMsSUFBQUEsc0JBQWdCLEVBQUNELFVBQVVOO2dCQUV4QyxPQUFPaEM7WUFDVDs7O1lBRU93QyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRVQsT0FBTztnQkFDN0NBLFVBQVUsTUFBTSxHQUFHO2dCQUVuQixJQUFNTSxXQUFXRyxlQUNYekMsT0FBT3VDLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVTjtnQkFFeEMsT0FBT2hDO1lBQ1Q7OztZQUVPMEMsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRVgsT0FBTztnQkFDckQsSUFBTU0sV0FBV0ssa0JBQWtCQyxXQUFXLElBQ3hDNUMsT0FBT3VDLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVTjtnQkFFeEMsT0FBT2hDO1lBQ1Q7OztZQUVPNkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCN0MsSUFBSSxFQUFFekMsV0FBVztnQkFDN0MsSUFBTUosT0FBTzZDLEtBQUt2QyxPQUFPLElBQ25CTCxhQUFhNEMsS0FBS3RDLGFBQWEsSUFDL0JLLFlBQVlpQyxNQUNaYyxXQUFXM0QsTUFDWGdGLGlCQUFpQi9FLFlBQ2pCQyxhQUFhO29CQUNYVTtpQkFDRCxFQUNEYixTQUFTa0YsSUFBQUEsbURBQTZDLEVBQUN0QixVQUFVcUIsZ0JBQWdCOUUsYUFDakZDLGFBQWEwQyxLQUFLcEMsYUFBYTtnQkFFckNvQyxPQUFPLElBOVVML0MsS0E4VWNDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDLFlBQVlDLGNBQWUsR0FBRztnQkFFcEYsT0FBT3lDO1lBQ1Q7OztZQUVPOEMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRWYsT0FBTztnQkFDakUsSUFBTU0sV0FBV1Msd0JBQXdCSCxXQUFXLElBQzlDNUMsT0FBT3VDLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVTjtnQkFFeEMsT0FBT2hDO1lBQ1Q7OztZQUVPZ0QsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRWpCLE9BQU87Z0JBQ3JFLElBQU1sQixXQUFXbUMsMEJBQTBCQyxXQUFXLElBQ2hEM0YsY0FBYzBGLDBCQUEwQmhGLGFBQWEsSUFDckRrRSxpQkFBaUJjLDBCQUEwQkUsaUJBQWlCLElBQzVEOUYsYUFBYStGLHdDQUF3Q0gsMkJBQTJCakIsVUFDaEY3RSxPQUFPMkQsVUFDUDFELGFBQWErRSxnQkFDYjdFLGFBQWEsRUFBRSxFQUNmSixTQUFTa0YsSUFBQUEsbURBQTZDLEVBQUN0QixVQUFVcUIsZ0JBQWdCOUUsYUFDakYyQyxPQUFPLElBbldYL0MsS0FtV29CQyxRQUFRQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztnQkFFeEUsT0FBT3lDO1lBQ1Q7OztZQUVPcUQsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRXRCLE9BQU87Z0JBQ3ZFLElBQU1sQixXQUFXd0MsMkJBQTJCSixXQUFXLElBQ2pEM0YsY0FBYytGLDJCQUEyQnJGLGFBQWEsSUFDdERrRSxpQkFBaUJtQiwyQkFBMkJILGlCQUFpQixJQUM3RDlGLGFBQWFrRyx5Q0FBeUNELDRCQUE0QnRCLFVBQ2xGN0UsT0FBTzJELFVBQ1AxRCxhQUFhK0UsZ0JBQ2I3RSxhQUFha0cseUNBQXlDRiw0QkFBNEJ0QixVQUNsRjlFLFNBQVNrRixJQUFBQSxtREFBNkMsRUFBQ3RCLFVBQVVxQixnQkFBZ0I5RSxhQUNqRjJDLE9BQU8sSUFqWFgvQyxLQWlYb0JDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDLFlBQVlDO2dCQUV4RSxPQUFPeUM7WUFDVDs7O1lBRU95RCxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFMUIsT0FBTztnQkFDdkUsSUFBSWhDO2dCQUVKLElBQU1zQyxXQUFXb0IsMkJBQTJCZCxXQUFXO2dCQUV2RCxJQUFJTixhQUFhLE1BQU07b0JBQ3JCdEMsT0FBT25EO2dCQUNULE9BQU87b0JBQ0wsSUFBTVUsY0FBY21HLDJCQUEyQnpGLGFBQWE7b0JBRTVEK0IsT0FBT3VDLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVTjtvQkFFbENoQyxLQUFLeEIsY0FBYyxDQUFDakI7Z0JBQ3RCO2dCQUVBLE9BQU95QztZQUNUOzs7V0F0WUkvQzs7QUE4UkosaUJBOVJJQSxNQThSR0UsUUFBTztJQTJHaEIsV0FBZXdHLElBQUFBLGdCQUFXLEVBQUMxRztBQUUzQixTQUFTbUcsd0NBQXdDSCx5QkFBeUIsRUFBRWpCLE9BQU87SUFDakYsSUFBTTRCLGlCQUFpQlgsMEJBQTBCWSxpQkFBaUIsSUFDNUR4RyxhQUFhdUcsZUFBZUUsR0FBRyxDQUFDLFNBQUNyQjtRQUMvQixJQUFNMUUsWUFBWWQsS0FBS3VGLGlCQUFpQixDQUFDQyxlQUFlVDtRQUV4RCxPQUFPakU7SUFDVCxJQUNBMEIsbUJBQW1CcEMsV0FBV3FDLE1BQU07SUFFMUMsSUFBSUQscUJBQXFCLEdBQUc7UUFDMUIsSUFBTTFCLFlBQVlsQixZQUFZLEdBQUc7UUFFakNRLFdBQVdQLElBQUksQ0FBQ2lCO0lBQ2xCO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNrRyx5Q0FBeUNELDBCQUEwQixFQUFFdEIsT0FBTztJQUNuRixJQUFNNEIsaUJBQWlCTiwyQkFBMkJPLGlCQUFpQixJQUM3RHhHLGFBQWF1RyxlQUFlRSxHQUFHLENBQUMsU0FBQ3JCO1FBQy9CLElBQU0xRSxZQUFZZCxLQUFLdUYsaUJBQWlCLENBQUNDLGVBQWVUO1FBRXhELE9BQU9qRTtJQUNULElBQ0EwQixtQkFBbUJwQyxXQUFXcUMsTUFBTTtJQUUxQyxJQUFJRCxxQkFBcUIsR0FBRztRQUMxQixJQUFNMUIsWUFBWWxCLFlBQVksR0FBRztRQUVqQ1EsV0FBV1AsSUFBSSxDQUFDaUI7SUFDbEI7SUFFQSxPQUFPVjtBQUNUO0FBRUEsU0FBU21HLHlDQUF5Q0YsMEJBQTBCLEVBQUV0QixPQUFPO0lBQ25GLElBQU0sQUFBRStCLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLDJCQUEyQlgsMkJBQTJCWSwyQkFBMkIsSUFDakY1RyxhQUFhMkcseUJBQXlCSCxHQUFHLENBQUMsU0FBQ2Y7UUFDekMsSUFBTW9CLFdBQVdKLFNBQVNqQiwyQkFBMkIsQ0FBQ0MseUJBQXlCZjtRQUUvRSxPQUFPbUM7SUFDVDtJQUVOLE9BQU83RztBQUNUO0FBRUEsSUFBQSxBQUFNOEcsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTWxILE9BQU9tSCwyQkFBZ0IsRUFDdkJwSCxTQUFTQyxNQUNUQyxhQUFhLE1BQ2JDLGFBQWEsRUFBRSxFQUNmQyxhQUFhLEVBQUUsRUFDZkMsY0FBYyxPQUNkVixhQUFhLElBUmpCdUgsV0FRZ0NsSCxRQUFRQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztnQkFFcEYsT0FBT1Y7WUFDVDs7O1dBWEl1SDtFQUFtQm5IO0FBY2xCLElBQU1KLGFBQWF1SCxXQUFXQyxXQUFXIn0=