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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
    function Type(string, node1, name, prefixName, superTypes, properties, provisional) {
        _class_call_check(this, Type);
        this.string = string;
        this.node = node1;
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
                var name = json.name, prefixName = json.prefixName, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), typeName = name, typePrefixName = null, string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, node, name, prefixName, superTypes, properties, provisional);
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
            key: "fromTypeAndProvisional",
            value: function fromTypeAndProvisional(type, provisional) {
                var name = type.getName(), prefixName = type.getPrefixName(), superType = type, typeName = name, typePrefixName = prefixName, superTypes = [
                    superType
                ], string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), properties = type.getProperties();
                type = new Type(string, node, name, prefixName, superTypes, properties, provisional); ///
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
                var typeName = simpleTypeDeclarationNode.getTypeName(), provisional = simpleTypeDeclarationNode.isProvisional(), typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(), superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), name = typeName, prefixName = typePrefixName, properties = [], string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(string, node, name, prefixName, superTypes, properties, provisional);
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
var _default = (0, _elements.define)(Type);
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
                var name = _constants.BASE_TYPE_SYMBOL, string = name, node1 = null, prefixName = null, superTypes = [], properties = [], provisional = false, baseType = new BaseType(string, node1, name, prefixName, superTypes, properties, provisional);
                return baseType;
            }
        }
    ]);
    return BaseType;
}(Type);
var baseType = BaseType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQkFTRV9UWVBFX1NZTUJPTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHlwZVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc0Zyb21KU09OLCBwcm9wZXJ0aWVzRnJvbUpTT04sIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLCBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdXBlclR5cGVzLmluZGV4T2Yob2xkU3VwZXJUeXBlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuc3VwZXJUeXBlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdTdXBlclR5cGUpO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9ICh0aGlzLnByZWZpeE5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UHJlZml4ZWROYW1lKCkge1xuICAgIGxldCBwcmVmaXhlZE5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgcHJlZml4ZWROYW1lID0gYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByZWZpeGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgaXNCYXNpYygpIHtcbiAgICBsZXQgYmFzaWMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlOyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIGxldCBwcm92aXNpb25hbE1hdGNoZXM7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWxNYXRjaGVzID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCBwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKTtcblxuICAgICAgcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXMgPSAocHJlZml4ZWRUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWRUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgbm9taW5hbFR5cGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFub21pbmFsVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vbWluYWxUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpO1xuXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAobm9taW5hbFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHRoaXMucHJlZml4TmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFByb3Zpc2lvbmFsKHR5cGUsIHByb3Zpc2lvbmFsKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlLmdldFByZWZpeE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gW1xuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IGJhc2VUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoVHlwZSk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tU3VwZXJUeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBiYXNlVHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5jbGFzcyBCYXNlVHlwZSBleHRlbmRzIFR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IEJBU0VfVFlQRV9TWU1CT0wsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJlZml4TmFtZSA9IG51bGwsXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGZhbHNlLFxuICAgICAgICAgIGJhc2VUeXBlID0gbmV3IEJhc2VUeXBlKHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIGJhc2VUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBiYXNlVHlwZSA9IEJhc2VUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsiYmFzZVR5cGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlR5cGUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJvbGRTdXBlclR5cGUiLCJuZXdTdXBlclR5cGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwibWF0Y2hQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWVNYXRjaGVzIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwidHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTm9kZSIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImRlZmluZSIsInN1cGVyVHlwZU5vZGVzIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJtYXAiLCJCYXNlVHlwZSIsImZyb21Ob3RoaW5nIiwiQkFTRV9UWVBFX1NZTUJPTCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMGFhQTtlQUFBQTs7UUFuQ2I7ZUFBQTs7O3lCQXJZK0I7Z0VBRVY7eUJBR1k7b0JBQ0E7b0JBQzZCO29CQUNpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBUUMsT0FBZ0JDLHlCQUFjLENBQTlCRCxNQUFNRSxRQUFVRCx5QkFBYyxDQUF4QkM7QUFFZCxJQUFBLEFBQU1DLHFCQUFOO2FBQU1BLEtBQ1FDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRDNFUDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBUmpCUDs7WUFXSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxJQUFJO1lBQ2xCOzs7WUFF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