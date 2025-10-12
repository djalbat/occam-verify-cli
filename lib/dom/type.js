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
                var properties = [], provisional = simpleTypeDeclarationNode.isProvisional(), typeName = simpleTypeDeclarationNode.getTypeName(), typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(), name = typeName, prefixName = typePrefixName, superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var provisional = complexTypeDeclarationNode.isProvisional(), typeName = complexTypeDeclarationNode.getTypeName(), typePrefixName = complexTypeDeclarationNode.getTypePrefixName(), name = typeName, prefixName = typePrefixName, superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, name, prefixName, superTypes, properties, provisional);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJlZml4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKSB7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICByZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN1cGVyVHlwZXMuaW5kZXhPZihvbGRTdXBlclR5cGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5zdXBlclR5cGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld1N1cGVyVHlwZSk7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gKHRoaXMucHJlZml4TmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRQcmVmaXhlZE5hbWUoKSB7XG4gICAgbGV0IHByZWZpeGVkTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBwcmVmaXhlZE5hbWUgPSBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJlZml4ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGU7IC8vL1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIGxldCBwcm92aXNpb25hbE1hdGNoZXM7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWxNYXRjaGVzID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCBwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKTtcblxuICAgICAgcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXMgPSAocHJlZml4ZWRUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgbm9taW5hbFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFub21pbmFsVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vbWluYWxUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpO1xuXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHRoaXMucHJlZml4TmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZS5nZXRQcmVmaXhOYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gdHlwZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBwcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdHlwZS5zZXRQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJUeXBlIiwic3RyaW5nIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwic2V0TmFtZSIsInNldFByZWZpeE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwicmVwbGFjZVN1cGVyVHlwZSIsIm9sZFN1cGVyVHlwZSIsIm5ld1N1cGVyVHlwZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpc1ByZWZpeGVkIiwicHJlZml4ZWQiLCJnZXRQcmVmaXhlZE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJwcm92aXNpb25hbEEiLCJwcm92aXNpb25hbEIiLCJtYXRjaFByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4TmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsImZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsImZyb21TdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZU5vZGUiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwic3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZG9tQXNzaWduZWQiLCJzdXBlclR5cGVOb2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwibWFwIiwiUHJvcGVydHkiLCJkb20iLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eSIsIk9iamVjdFR5cGUiLCJmcm9tTm90aGluZyIsIk9CSkVDVF9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVaQTtlQUFBOztRQWdFYUE7ZUFBQUE7Ozt5QkFyZGtCOzJEQUVmO3lCQUdpQjtvQkFDQTtvQkFDNkI7b0JBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVkLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVB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