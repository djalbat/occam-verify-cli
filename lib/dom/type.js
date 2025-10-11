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
    function Type(context, string, name, superTypes, properties, provisional) {
        _class_call_check(this, Type);
        this.context = context;
        this.string = string;
        this.name = name;
        this.superTypes = superTypes;
        this.properties = properties;
        this.provisional = provisional;
    }
    _create_class(Type, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
            key: "getPrefixedName",
            value: function getPrefixedName() {
                var prefixName = this.getPrefixName(), prefixedName = prefixName !== null ? "".concat(prefixName).concat(this.name) : this.name;
                return prefixedName;
            }
        },
        {
            key: "getPrefixName",
            value: function getPrefixName() {
                var prefix = this.getPrefix(), prefixName = prefix !== null ? prefix.getName() : null;
                return prefixName;
            }
        },
        {
            key: "getPrefix",
            value: function getPrefix() {
                var prefix = null;
                if (this.context !== null) {
                    var typePrefix = this.context.getTypePrefix();
                    prefix = typePrefix; ///
                }
                return prefix;
            }
        },
        {
            key: "isInternal",
            value: function isInternal(context) {
                var internal, fileContext, releaseContext;
                if (this.context !== null) {
                    fileContext = this.context; ///
                    releaseContext = fileContext.getReleaseContext();
                    var internalReleaseContext = releaseContext; ///
                    fileContext = context; ///
                    releaseContext = fileContext.getReleaseContext();
                    internal = internalReleaseContext === releaseContext; ///
                } else {
                    internal = false;
                }
                return internal;
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
            value: function matchTypeName(typeName, prefixed, context) {
                var typeNameMatches;
                var naked = !prefixed, internal = this.isInternal(context);
                if (naked || internal) {
                    typeNameMatches = this.name === typeName;
                } else {
                    var prefixName = this.getPrefixName(), name = prefixName !== null ? "".concat(prefixName).concat(this.name) : this.name;
                    typeNameMatches = name === typeName;
                }
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
            value: function fromJSON(json, context) {
                var name = json.name, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), typeName = name, typePrefixName = null, string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
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
                var context = type.getContext(), name = type.getName(), superType = type, typeName = name, typePrefixName = null, superTypes = [
                    superType
                ], string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), properties = type.getProperties();
                type = new Type(context, string, name, superTypes, properties, provisional); ///
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
                var properties = [], provisional = simpleTypeDeclarationNode.isProvisional(), typeName = simpleTypeDeclarationNode.getTypeName(), typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(), name = typeName, superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var provisional = complexTypeDeclarationNode.isProvisional(), typeName = complexTypeDeclarationNode.getTypeName(), typePrefixName = complexTypeDeclarationNode.getTypePrefixName(), name = typeName, superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
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
                var context = null, name = _constants.OBJECT_TYPE_NAME, string = name, superTypes = [], properties = [], provisional = false, objectType = new ObjectType(context, string, name, superTypes, properties, provisional);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICByZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN1cGVyVHlwZXMuaW5kZXhPZihvbGRTdXBlclR5cGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5zdXBlclR5cGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld1N1cGVyVHlwZSk7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgdGhpcy5zdXBlclR5cGVzLmZvckVhY2goKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWw7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvdmlzaW9uYWwgPSBzdXBlclR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5nZXRQcmVmaXhOYW1lKCksXG4gICAgICAgICAgcHJlZml4ZWROYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXRQcmVmaXhOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IChwcmVmaXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4LmdldE5hbWUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0UHJlZml4KCkge1xuICAgIGxldCBwcmVmaXggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgIHByZWZpeCA9IHR5cGVQcmVmaXg7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4O1xuICB9XG5cbiAgaXNJbnRlcm5hbChjb250ZXh0KSB7XG4gICAgbGV0IGludGVybmFsLFxuICAgICAgICBmaWxlQ29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBpZiAodGhpcy5jb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dCA9IHRoaXMuY29udGV4dDsgLy8vXG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gZmlsZUNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgICAgY29uc3QgaW50ZXJuYWxSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gZmlsZUNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgICAgaW50ZXJuYWwgPSAoaW50ZXJuYWxSZWxlYXNlQ29udGV4dCA9PT0gcmVsZWFzZUNvbnRleHQpOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWw7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGU7IC8vL1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lLCBwcmVmaXhlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlTmFtZU1hdGNoZXM7XG5cbiAgICBjb25zdCBuYWtlZCA9ICFwcmVmaXhlZCxcbiAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMuaXNJbnRlcm5hbChjb250ZXh0KTtcblxuICAgIGlmIChuYWtlZCB8fCBpbnRlcm5hbCkge1xuICAgICAgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5nZXRQcmVmaXhOYW1lKCksXG4gICAgICAgICAgICBuYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgICB0eXBlTmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdHlwZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsTWF0Y2hlcztcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQSA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbE1hdGNoZXMgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTih0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cGVyVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUHJvdmlzaW9uYWwodHlwZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdHlwZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW1xuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlKTtcblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBUeXBlLmZyb21TdXBlclR5cGVOb2RlKHN1cGVyVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBUeXBlLmZyb21TdXBlclR5cGVOb2RlKHN1cGVyVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGZhbHNlLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShjb250ZXh0LCBzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlR5cGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJvbGRTdXBlclR5cGUiLCJuZXdTdXBlclR5cGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4TmFtZSIsImdldFByZWZpeE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJwcmVmaXgiLCJnZXRQcmVmaXgiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsImlzSW50ZXJuYWwiLCJpbnRlcm5hbCIsImZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImludGVybmFsUmVsZWFzZUNvbnRleHQiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInByZWZpeGVkIiwidHlwZU5hbWVNYXRjaGVzIiwibmFrZWQiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4TmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsImZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsImZyb21TdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZU5vZGUiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwic3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZG9tQXNzaWduZWQiLCJzdXBlclR5cGVOb2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwibWFwIiwiUHJvcGVydHkiLCJkb20iLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eSIsIk9iamVjdFR5cGUiLCJmcm9tTm90aGluZyIsIk9CSkVDVF9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVZQTtlQUFBOztRQWdFYUE7ZUFBQUE7Ozt5QkFyY2tCOzJEQUVmO3lCQUdpQjtvQkFDQTtvQkFDNkI7b0JBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVkLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxFTjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFQakJOOztZQVVKTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFVBQVU7WUFDeEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUwsV0FBVztnQkFDeEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsWUFBWSxFQUFFQyxZQUFZO2dCQUN6QyxJQUFNQyxRQUFRLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxPQUFPLENBQUNILGVBQ2hDSSxRQUFRRixPQUNSRyxjQUFjO2dCQUVwQixJQUFJLENBQUNkLFVBQVUsQ0FBQ2UsTUFBTSxDQUFDRixPQUFPQyxhQUFhSjtZQUM3Qzs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY0Msb0JBQUFBLGlFQUFvQjtnQkFDaEMsSUFBTWhCLGFBQWEsRUFBRTtnQkFFckJSLEtBQUtRLFlBQVksSUFBSSxDQUFDQSxVQUFVO2dCQUVoQyxJQUFJZ0IsbUJBQW1CO29CQUNyQixJQUFJLENBQUNqQixVQUFVLENBQUNrQixPQUFPLENBQUMsU0FBQ0M7d0JBQ3ZCLElBQU1DLHNCQUFzQkQsVUFBVUgsYUFBYTt3QkFFbkR2QixLQUFLUSxZQUFZbUI7b0JBQ25CO2dCQUNGO2dCQUVBLE9BQU9uQjtZQUNUOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY0osb0JBQUFBLGlFQUFvQjtnQkFDaEMsSUFBSWYsY0FBYyxJQUFJLENBQUNBLFdBQVc7Z0JBRWxDLElBQUllLG1CQUFtQjtvQkFDckIsSUFBSSxDQUFDZixhQUFhO3dCQUNoQkEsY0FBYyxJQUFJLENBQUNGLFVBQVUsQ0FBQ3NCLElBQUksQ0FBQyxTQUFDSDs0QkFDbEMsSUFBTUksdUJBQXVCSixVQUFVRSxhQUFhOzRCQUVwRCxJQUFJRSxzQkFBc0I7Z0NBQ3hCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT3JCO1lBQ1Q7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlLEFBQUNGLGVBQWUsT0FDYixBQUFDLEdBQWUsT0FBYkEsWUFBdUIsT0FBVixJQUFJLENBQUMxQixJQUFJLElBQ3RCLElBQUksQ0FBQ0EsSUFBSTtnQkFFcEMsT0FBTzRCO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJKLGFBQWEsQUFBQ0csV0FBVyxPQUNUQSxPQUFPdkIsT0FBTyxLQUNaO2dCQUV4QixPQUFPb0I7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxTQUFTO2dCQUViLElBQUksSUFBSSxDQUFDL0IsT0FBTyxLQUFLLE1BQU07b0JBQ3pCLElBQU1pQyxhQUFhLElBQUksQ0FBQ2pDLE9BQU8sQ0FBQ2tDLGFBQWE7b0JBRTdDSCxTQUFTRSxZQUFhLEdBQUc7Z0JBQzNCO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV25DLE9BQU87Z0JBQ2hCLElBQUlvQyxVQUNBQyxhQUNBQztnQkFFSixJQUFJLElBQUksQ0FBQ3RDLE9BQU8sS0FBSyxNQUFNO29CQUN6QnFDLGNBQWMsSUFBSSxDQUFDckMsT0FBTyxFQUFFLEdBQUc7b0JBRS9Cc0MsaUJBQWlCRCxZQUFZRSxpQkFBaUI7b0JBRTlDLElBQU1DLHlCQUF5QkYsZ0JBQWdCLEdBQUc7b0JBRWxERCxjQUFjckMsU0FBVSxHQUFHO29CQUUzQnNDLGlCQUFpQkQsWUFBWUUsaUJBQWlCO29CQUU5Q0gsV0FBWUksMkJBQTJCRixnQkFBaUIsR0FBRztnQkFDN0QsT0FBTztvQkFDTEYsV0FBVztnQkFDYjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFFBQVE7Z0JBRVosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ3hDLFVBQVUsQ0FBQ3lDLE1BQU07Z0JBRS9DLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxpQkFBaUIvQyxNQUFNLElBQUksQ0FBQ0ssVUFBVSxHQUN0Q21CLFlBQVl1QixnQkFBZ0IsR0FBRztvQkFFckMsSUFBSXZCLGNBQWMzQixZQUFZO3dCQUM1QitDLFFBQVE7b0JBQ1Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQU1KLG1CQUFtQixJQUFJLENBQUN4QyxVQUFVLENBQUN5QyxNQUFNO2dCQUUvQyxJQUFJRCxxQkFBcUIsR0FBRztvQkFDMUIsSUFBTUUsaUJBQWlCL0MsTUFBTSxJQUFJLENBQUNLLFVBQVUsR0FDdENtQixZQUFZdUIsZ0JBQ1pHLGdCQUFnQjFCLFVBQVVkLE9BQU87b0JBRXZDLElBQUl3QyxrQkFBa0IsSUFBSSxDQUFDOUMsSUFBSSxFQUFFO3dCQUMvQjZDLFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJO2dCQUNaLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRixJQUFJO2dCQUNkLElBQUlHO2dCQUVKLElBQUksSUFBSSxLQUFLMUQsWUFBWTtvQkFDdkIwRCxZQUFZO2dCQUNkLE9BQU87b0JBQ0xBLFlBQVksSUFBSSxDQUFDbEQsVUFBVSxDQUFDc0IsSUFBSSxDQUFDLFNBQUNIO3dCQUNoQyxJQUFJQSxjQUFjNEIsTUFBTTs0QkFDdEIsT0FBTzt3QkFDVDt3QkFFQSxJQUFNSSx5QkFBeUJoQyxVQUFVOEIsV0FBVyxDQUFDRjt3QkFFckQsSUFBSUksd0JBQXdCOzRCQUMxQixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0wsSUFBSTtnQkFDaEIsSUFBTUcsWUFBWUgsS0FBS0UsV0FBVyxDQUFDLElBQUksR0FDakNJLGNBQWNILFdBQVksR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUCxJQUFJO2dCQUNqQixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6QkcsWUFBWSxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsT0FDN0JNLGNBQWMsSUFBSSxDQUFDRCxhQUFhLENBQUNMLE9BQ2pDUSxlQUFnQlAsV0FBV0UsYUFBYUc7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCVCxJQUFJO2dCQUN2QixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6QkcsWUFBWSxJQUFJLENBQUNELFdBQVcsQ0FBQ0YsT0FDN0JVLHFCQUFzQlQsV0FBV0U7Z0JBRXZDLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCWCxJQUFJO2dCQUN6QixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6Qk0sY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0wsT0FDakNZLHVCQUF3QlgsV0FBV0s7Z0JBRXpDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFQyxRQUFRLEVBQUVqRSxPQUFPO2dCQUN2QyxJQUFJa0U7Z0JBRUosSUFBTUMsUUFBUSxDQUFDRixVQUNUN0IsV0FBVyxJQUFJLENBQUNELFVBQVUsQ0FBQ25DO2dCQUVqQyxJQUFJbUUsU0FBUy9CLFVBQVU7b0JBQ3JCOEIsa0JBQW1CLElBQUksQ0FBQ2hFLElBQUksS0FBSzhEO2dCQUNuQyxPQUFPO29CQUNMLElBQU1wQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQjNCLE9BQU8sQUFBQzBCLGVBQWUsT0FDZixBQUFDLEdBQWUsT0FBYkEsWUFBdUIsT0FBVixJQUFJLENBQUMxQixJQUFJLElBQ3RCLElBQUksQ0FBQ0EsSUFBSTtvQkFFMUJnRSxrQkFBbUJoRSxTQUFTOEQ7Z0JBQzlCO2dCQUVBLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCL0QsV0FBVztnQkFDMUIsSUFBSWdFO2dCQUVKLElBQU1DLGVBQWVqRSxhQUFhLEdBQUc7Z0JBRXJDQSxjQUFjLElBQUksQ0FBQ21CLGFBQWE7Z0JBRWhDLElBQU0rQyxlQUFlbEUsYUFBYSxHQUFHO2dCQUVyQ2dFLHFCQUFzQkMsaUJBQWlCQztnQkFFdkMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ3RFLFVBQVUsR0FDM0R1RSxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ3pFLFVBQVUsR0FDM0RFLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCRCxhQUFhcUUsZ0JBQ2J0RSxhQUFhd0UsZ0JBQ2J6RSxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQjJFLE9BQU87b0JBQ0wzRSxNQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxhQUFBQTtnQkFDRjtnQkFFTixPQUFPd0U7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU3RSxPQUFPO2dCQUMzQixJQUFRRSxPQUFzQjJFLEtBQXRCM0UsTUFBTUcsY0FBZ0J3RSxLQUFoQnhFLGFBQ1JELGFBQWEyRSxJQUFBQSx3QkFBa0IsRUFBQ0YsTUFBTTdFLFVBQ3RDRyxhQUFhNkUsSUFBQUEsd0JBQWtCLEVBQUNILE1BQU03RSxVQUN0Q2dFLFdBQVc5RCxNQUNYK0UsaUJBQWlCLE1BQ2pCaEYsU0FBU2lGLElBQUFBLG1EQUE2QyxFQUFDbEIsVUFBVWlCLGdCQUFnQjlFLGFBQ2pGK0MsT0FBTyxJQXpSWG5ELEtBeVJvQkMsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUMsWUFBWUM7Z0JBRXJFLE9BQU82QztZQUNUOzs7WUFFT2lDLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRXBGLE9BQU87Z0JBQ25DLElBQU1rRCxPQUFPbUMsSUFBQUEsc0JBQWdCLEVBQUNELFVBQVVwRjtnQkFFeEMsT0FBT2tEO1lBQ1Q7OztZQUVPb0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUV2RixPQUFPO2dCQUM3Q0EsVUFBVSxNQUFNLEdBQUc7Z0JBRW5CLElBQU1vRixXQUFXRyxlQUNYckMsT0FBT21DLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVcEY7Z0JBRXhDLE9BQU9rRDtZQUNUOzs7WUFFT3NDLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUV6RixPQUFPO2dCQUNyRCxJQUFNb0YsV0FBV0ssa0JBQWtCQyxXQUFXLElBQ3hDeEMsT0FBT21DLElBQUFBLHNCQUFnQixFQUFDRCxVQUFVcEY7Z0JBRXhDLE9BQU9rRDtZQUNUOzs7WUFFT3lDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QnpDLElBQUksRUFBRTdDLFdBQVc7Z0JBQzdDLElBQU1MLFVBQVVrRCxLQUFLNUMsVUFBVSxJQUN6QkosT0FBT2dELEtBQUsxQyxPQUFPLElBQ25CYyxZQUFZNEIsTUFDWmMsV0FBVzlELE1BQ1grRSxpQkFBaUIsTUFDakI5RSxhQUFhO29CQUNYbUI7aUJBQ0QsRUFDRHJCLFNBQVNpRixJQUFBQSxtREFBNkMsRUFBQ2xCLFVBQVVpQixnQkFBZ0I5RSxhQUNqRkMsYUFBYThDLEtBQUsvQixhQUFhO2dCQUVyQytCLE9BQU8sSUFoVUxuRCxLQWdVY0MsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUMsWUFBWUMsY0FBZSxHQUFHO2dCQUVqRixPQUFPNkM7WUFDVDs7O1lBRU8wQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFN0YsT0FBTztnQkFDakUsSUFBTW9GLFdBQVdTLHdCQUF3QkgsV0FBVyxJQUM5Q3hDLE9BQU9tQyxJQUFBQSxzQkFBZ0IsRUFBQ0QsVUFBVXBGO2dCQUV4QyxPQUFPa0Q7WUFDVDs7O1lBRU80QyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFL0YsT0FBTztnQkFDckUsSUFBTUksYUFBYSxFQUFFLEVBQ2ZDLGNBQWMwRiwwQkFBMEJ2RSxhQUFhLElBQ3JEd0MsV0FBVytCLDBCQUEwQkMsV0FBVyxJQUNoRGYsaUJBQWlCYywwQkFBMEJFLGlCQUFpQixJQUM1RC9GLE9BQU84RCxVQUNQN0QsYUFBYStGLHdDQUF3Q0gsMkJBQTJCL0YsVUFDaEZDLFNBQVNpRixJQUFBQSxtREFBNkMsRUFBQ2xCLFVBQVVpQixnQkFBZ0I5RSxhQUNqRitDLE9BQU8sSUFwVlhuRCxLQW9Wb0JDLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDO2dCQUVyRSxPQUFPNkM7WUFDVDs7O1lBRU9pRCxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFcEcsT0FBTztnQkFDdkUsSUFBTUssY0FBYytGLDJCQUEyQjVFLGFBQWEsSUFDdER3QyxXQUFXb0MsMkJBQTJCSixXQUFXLElBQ2pEZixpQkFBaUJtQiwyQkFBMkJILGlCQUFpQixJQUM3RC9GLE9BQU84RCxVQUNQN0QsYUFBYWtHLHlDQUF5Q0QsNEJBQTRCcEcsVUFDbEZJLGFBQWFrRyx5Q0FBeUNGLDRCQUE0QnBHLFVBQ2xGQyxTQUFTaUYsSUFBQUEsbURBQTZDLEVBQUNsQixVQUFVaUIsZ0JBQWdCOUUsYUFDakYrQyxPQUFPLElBaldYbkQsS0FpV29CQyxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQyxZQUFZQztnQkFFckUsT0FBTzZDO1lBQ1Q7OztZQUVPcUQsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRXhHLE9BQU87Z0JBQ3ZFLElBQUlrRDtnQkFFSixJQUFNa0MsV0FBV29CLDJCQUEyQmQsV0FBVztnQkFFdkQsSUFBSU4sYUFBYSxNQUFNO29CQUNyQmxDLE9BQU92RDtnQkFDVCxPQUFPO29CQUNMLElBQU1VLGNBQWNtRywyQkFBMkJoRixhQUFhO29CQUU1RDBCLE9BQU9tQyxJQUFBQSxzQkFBZ0IsRUFBQ0QsVUFBVXBGO29CQUVsQ2tELEtBQUt4QyxjQUFjLENBQUNMO2dCQUN0QjtnQkFFQSxPQUFPNkM7WUFDVDs7O1dBdFhJbkQ7O0FBZ1JKLGlCQWhSSUEsTUFnUkdHLFFBQU87SUF5R2hCLFdBQWV1RyxJQUFBQSxnQkFBVyxFQUFDMUc7QUFFM0IsU0FBU21HLHdDQUF3Q0gseUJBQXlCLEVBQUUvRixPQUFPO0lBQ2pGLElBQU0wRyxpQkFBaUJYLDBCQUEwQlksaUJBQWlCLElBQzVEeEcsYUFBYXVHLGVBQWVFLEdBQUcsQ0FBQyxTQUFDckI7UUFDL0IsSUFBTWpFLFlBQVl2QixLQUFLdUYsaUJBQWlCLENBQUNDLGVBQWV2RjtRQUV4RCxPQUFPc0I7SUFDVCxJQUNBcUIsbUJBQW1CeEMsV0FBV3lDLE1BQU07SUFFMUMsSUFBSUQscUJBQXFCLEdBQUc7UUFDMUIsSUFBTXJCLFlBQVkzQixZQUFZLEdBQUc7UUFFakNRLFdBQVdQLElBQUksQ0FBQzBCO0lBQ2xCO0lBRUEsT0FBT25CO0FBQ1Q7QUFFQSxTQUFTa0cseUNBQXlDRCwwQkFBMEIsRUFBRXBHLE9BQU87SUFDbkYsSUFBTTBHLGlCQUFpQk4sMkJBQTJCTyxpQkFBaUIsSUFDN0R4RyxhQUFhdUcsZUFBZUUsR0FBRyxDQUFDLFNBQUNyQjtRQUMvQixJQUFNakUsWUFBWXZCLEtBQUt1RixpQkFBaUIsQ0FBQ0MsZUFBZXZGO1FBRXhELE9BQU9zQjtJQUNULElBQ0FxQixtQkFBbUJ4QyxXQUFXeUMsTUFBTTtJQUUxQyxJQUFJRCxxQkFBcUIsR0FBRztRQUMxQixJQUFNckIsWUFBWTNCLFlBQVksR0FBRztRQUVqQ1EsV0FBV1AsSUFBSSxDQUFDMEI7SUFDbEI7SUFFQSxPQUFPbkI7QUFDVDtBQUVBLFNBQVNtRyx5Q0FBeUNGLDBCQUEwQixFQUFFcEcsT0FBTztJQUNuRixJQUFNLEFBQUU2RyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSwyQkFBMkJYLDJCQUEyQlksMkJBQTJCLElBQ2pGNUcsYUFBYTJHLHlCQUF5QkgsR0FBRyxDQUFDLFNBQUNmO1FBQ3pDLElBQU1vQixXQUFXSixTQUFTakIsMkJBQTJCLENBQUNDLHlCQUF5QjdGO1FBRS9FLE9BQU9pSDtJQUNUO0lBRU4sT0FBTzdHO0FBQ1Q7QUFFQSxJQUFBLEFBQU04RywyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNbkgsVUFBVSxNQUNWRSxPQUFPa0gsMkJBQWdCLEVBQ3ZCbkgsU0FBU0MsTUFDVEMsYUFBYSxFQUFFLEVBQ2ZDLGFBQWEsRUFBRSxFQUNmQyxjQUFjLE9BQ2RWLGFBQWEsSUFSakJ1SCxXQVFnQ2xILFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDO2dCQUVqRixPQUFPVjtZQUNUOzs7V0FYSXVIO0VBQW1Cbkg7QUFjbEIsSUFBTUosYUFBYXVILFdBQVdDLFdBQVcifQ==