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
                    var prefix = this.getPrefix(), name = prefix !== null ? "".concat(prefix).concat(this.name) : this.name;
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
                var name = json.name, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), typeName = name, string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
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
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, context) {
                var typeNode = typeAssertionNode.getTypeNode(), type = (0, _node.typeFromTypeNode)(typeNode, context);
                return type;
            }
        },
        {
            key: "fromTypeAndProvisional",
            value: function fromTypeAndProvisional(type, provisional) {
                var context = type.getContext(), name = type.getName(), superType = type, typeName = name, superTypes = [
                    superType
                ], string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), properties = type.getProperties();
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
                var properties = [], provisional = simpleTypeDeclarationNode.isProvisional(), typeName = simpleTypeDeclarationNode.getTypeName(), name = typeName, superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var provisional = complexTypeDeclarationNode.isProvisional(), typeName = complexTypeDeclarationNode.getTypeName(), name = typeName, superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), type = new Type(context, string, name, superTypes, properties, provisional);
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
        var superType = Type.fromTypeNode(superTypeNode, context);
        return superType;
    });
    return superTypes;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var superType = Type.fromTypeNode(superTypeNode, context);
        return superType;
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHlwZVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc0Zyb21KU09OLCBwcm9wZXJ0aWVzRnJvbUpTT04sIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLCBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgdGhpcy5zdXBlclR5cGVzLmZvckVhY2goKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWw7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvdmlzaW9uYWwgPSBzdXBlclR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0UHJlZml4KCkge1xuICAgIGxldCBwcmVmaXggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgIHByZWZpeCA9IHR5cGVQcmVmaXg7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4O1xuICB9XG5cbiAgaXNJbnRlcm5hbChjb250ZXh0KSB7XG4gICAgbGV0IGludGVybmFsLFxuICAgICAgICBmaWxlQ29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBpZiAodGhpcy5jb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dCA9IHRoaXMuY29udGV4dDsgLy8vXG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gZmlsZUNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgICAgY29uc3QgaW50ZXJuYWxSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gZmlsZUNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgICAgaW50ZXJuYWwgPSAoaW50ZXJuYWxSZWxlYXNlQ29udGV4dCA9PT0gcmVsZWFzZUNvbnRleHQpOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWw7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGU7IC8vL1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lLCBwcmVmaXhlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlTmFtZU1hdGNoZXM7XG5cbiAgICBjb25zdCBuYWtlZCA9ICFwcmVmaXhlZCxcbiAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMuaXNJbnRlcm5hbChjb250ZXh0KTtcblxuICAgIGlmIChuYWtlZCB8fCBpbnRlcm5hbCkge1xuICAgICAgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXggPSB0aGlzLmdldFByZWZpeCgpLFxuICAgICAgICAgICAgbmFtZSA9IChwcmVmaXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4fSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7XG5cbiAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0eXBlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWxNYXRjaGVzO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWxNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0eXBlLmdldENvbnRleHQoKSxcbiAgICAgICAgICBuYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gdHlwZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdHlwZS5zZXRQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2UsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKGNvbnRleHQsIHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVHlwZSIsImNvbnRleHQiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldFN0cmluZyIsInNldE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwiZ2V0UHJlZml4IiwicHJlZml4IiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJpc0ludGVybmFsIiwiaW50ZXJuYWwiLCJmaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJpbnRlcm5hbFJlbGVhc2VDb250ZXh0IiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJwcmVmaXhlZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm5ha2VkIiwibWF0Y2hQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwianNvbiIsImZyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5hbWUiLCJzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJkb21Bc3NpZ25lZCIsInN1cGVyVHlwZU5vZGVzIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJtYXAiLCJzdXBlclR5cGVOb2RlIiwiUHJvcGVydHkiLCJkb20iLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eSIsIk9iamVjdFR5cGUiLCJmcm9tTm90aGluZyIsIk9CSkVDVF9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdYQTtlQUFBOztRQWtEYUE7ZUFBQUE7Ozt5QkFoYWtCOzJEQUVmO3lCQUdpQjtvQkFDQTtvQkFDbUI7b0JBQzJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVkLElBQUEsQUFBTUMscUJBQU47YUFBTUEsS0FDUUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxFTjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElB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