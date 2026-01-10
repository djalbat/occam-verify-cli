"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
var _types = require("../types");
var _string = require("../utilities/string");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Type;
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first;
var _default = (0, _elements.define)((_Type = /*#__PURE__*/ function(Element) {
    _inherits(Type, Element);
    function Type(context, string, node, name, prefixName, superTypes, properties, provisional) {
        _class_call_check(this, Type);
        var _this;
        _this = _call_super(this, Type, [
            context,
            string,
            node
        ]);
        _this.name = name;
        _this.prefixName = prefixName;
        _this.superTypes = superTypes;
        _this.properties = properties;
        _this.provisional = provisional;
        return _this;
    }
    _create_class(Type, [
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
                    var firstSuperType = first(this.superTypes), superType = firstSuperType, baseType = (0, _types.baseTypeFromNothing)();
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
                var baseType = (0, _types.baseTypeFromNothing)();
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
                var name = json.name, prefixName = json.prefixName, provisional = json.provisional, properties = (0, _json.propertiesFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), typeName = name, typePrefixName = null, string = (0, _string.typeStringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), node = null, type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var context = null, string = name, node = null, prefixName = null, superTypes = [], properties = [], provisional = false, type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
                return type;
            }
        }
    ]);
    return Type;
}(_wrap_native_super(_element.default)), _define_property(_Type, "name", "Type"), _Type));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHR5cGVTdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc0Zyb21KU09OLCBwcm9wZXJ0aWVzRnJvbUpTT04sIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLCBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcmVmaXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeE5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgdGhpcy5zdXBlclR5cGVzLmZvckVhY2goKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWw7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvdmlzaW9uYWwgPSBzdXBlclR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpIHtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3VwZXJUeXBlcy5pbmRleE9mKG9sZFN1cGVyVHlwZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnN1cGVyVHlwZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgbmV3U3VwZXJUeXBlKTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsTWF0Y2hlcztcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQSA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbE1hdGNoZXMgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IHByZWZpeGVkVHlwZU5hbWVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpO1xuXG4gICAgICBwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcyA9IChwcmVmaXhlZFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIW5vbWluYWxUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgbm9taW5hbFR5cGVOYW1lTWF0Y2hlcyA9IChub21pbmFsVHlwZU5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIGlmICghbm9taW5hbFR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCk7XG5cbiAgICAgICAgbm9taW5hbFR5cGVOYW1lTWF0Y2hlcyA9IChub21pbmFsVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gdGhpcy5wcmVmaXhOYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcHJlZml4TmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcmVmaXhOYW1lLCBwcm92aXNpb25hbCB9ID0ganNvbixcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVTdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJkZWZpbmUiLCJUeXBlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXROYW1lIiwiZ2V0UHJlZml4TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJmb3JFYWNoIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlUHJvcGVydGllcyIsImlzUHJvdmlzaW9uYWwiLCJzb21lIiwic3VwZXJUeXBlUHJvdmlzaW9uYWwiLCJzZXROYW1lIiwic2V0UHJlZml4TmFtZSIsInNldFN1cGVyVHlwZXMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJyZXBsYWNlU3VwZXJUeXBlIiwib2xkU3VwZXJUeXBlIiwibmV3U3VwZXJUeXBlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImlzUHJlZml4ZWQiLCJwcmVmaXhlZCIsImdldFByZWZpeGVkTmFtZSIsInByZWZpeGVkTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImlzQmFzaWMiLCJiYXNpYyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cGVyVHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzdXBlclR5cGVOYW1lIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsIm1hdGNoUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoTm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwianNvbiIsImZyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwidHlwZVByZWZpeE5hbWUiLCJ0eXBlU3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIiwiZnJvbU5hbWUiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozt5QkFYK0I7OERBRVg7d0JBRUc7cUJBQ2E7c0JBQzhCO29CQUM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQSxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztJQUVkLFdBQWVDLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRDlEUjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUN2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsVUFBVSxHQUFHQTtR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