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
var _name = require("../utilities/name");
var _query = require("../utilities/query");
var _constants = require("../constants");
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
var typeAssertionTypeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), variableDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), typeDeclarationSuperTypeNodesQuery = (0, _query.nodesQuery)("/typeDeclaration|complexTypeDeclaration/types/type"), constructorDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type"), firstTypeDeclarationPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"), lastVariableDeclarationSecondaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/@secondary-keyword[-1]");
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
                var type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, fileContext) {
                var typeAssertionTypeNode = typeAssertionTypeNodeQuery(typeAssertionNode), typeNode = typeAssertionTypeNode, type = typeFromTypeNode(typeNode, fileContext);
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
                var propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode), typeNode = propertyDeclarationTypeNode, type = typeFromTypeNode(typeNode, fileContext);
                return type;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var properties = null, superTypes = null, provisional = variableDeclarationNode.isProvisional(), name = nameFromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromName(name), type = new Type(string, name, superTypes, properties, provisional);
                return type;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var constructorDeclarationSuperTypeNode = constructorDeclarationSuperTypeNodeQuery(constructorDeclarationNode), typeNode = constructorDeclarationSuperTypeNode, type = typeFromTypeNode(typeNode, fileContext);
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
function stringFromName(name) {
    var string = name !== null ? name : _typeNames.OBJECT_TYPE_NAME;
    return string;
}
function typeFromTypeNode(typeNode, fileContext) {
    var type;
    if (typeNode === null) {
        type = objectType;
    } else {
        var Type = _dom.default.Type, name = typeNode.getName(), string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
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
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
}
function nameFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    var name = null;
    var variableDeclarationTypeNode = variableDeclarationTypeNodeQuery(variableDeclarationNode);
    if (variableDeclarationTypeNode !== null) {
        var typeNode = variableDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode);
        name = typeName; ///
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgUFJPVklTSU9OQUwsIFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVBc3NlcnRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uL3Byb3BlcnR5RGVjbGFyYXRpb25cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi90eXBlcy90eXBlXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBmaXJzdFR5cGVEZWNsYXJhdGlvblByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vQHByaW1hcnkta2V5d29yZFswXVwiKSxcbiAgICAgIGxhc3RWYXJpYWJsZURlY2xhcmF0aW9uU2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vQHNlY29uZGFyeS1rZXl3b3JkWy0xXVwiKTtcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZTsgLy8vXG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZS5uYW1lID09PSBudWxsKSB7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgaWYgKHRoaXMgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIGxldCBwcm92aXNpb25hbE1hdGNoZXM7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWxNYXRjaGVzID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbE1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJvdmlzaW9uYWwgfSA9IGpzb24sXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25UeXBlTm9kZSA9IHR5cGVBc3NlcnRpb25UeXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kUHJvdmlzaW9uYWwodHlwZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gdHlwZSwgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFN1cGVyVHlwZXMobmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lKG5hbWUpIHtcbiAgY29uc3Qgc3RyaW5nID0gKG5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBuYW1lIDpcbiAgICAgICAgICAgICAgICAgICAgIE9CSkVDVF9UWVBFX05BTUU7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbmFtZSA9IHR5cGVOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBPQkpFQ1RfVFlQRV9OQU1FOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgIHN0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtuYW1lfToke3N1cGVyVHlwZXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHN1cGVyVHlwZXMucHVzaChvYmplY3RUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBzdXBlclR5cGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXMubWFwKCh0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBzdXBlclR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2UsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwidHlwZUFzc2VydGlvblR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5IiwiZmlyc3RUeXBlRGVjbGFyYXRpb25QcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5IiwibGFzdFZhcmlhYmxlRGVjbGFyYXRpb25TZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJUeXBlIiwic3RyaW5nIiwibmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldFN0cmluZyIsInNldE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInByb3BlcnRpZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyIsImZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOYW1lIiwic3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm5hbWVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJzdHJpbmdGcm9tTmFtZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwibmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZG9tQXNzaWduZWQiLCJPQkpFQ1RfVFlQRV9OQU1FIiwiZG9tIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwibWFwIiwic3VwZXJUeXBlTm9kZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlByb3BlcnR5IiwicHJvcGVydHkiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdVQTtlQUFBOztRQStIYUE7ZUFBQUE7Ozt5QkE3YmtCOzJEQUVmO3lCQUdpQjtvQkFDSTtxQkFDQzt5QkFDSztvQkFDSTtvQkFDZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9HLElBQVFDLE9BQWdCQyx5QkFBYyxDQUE5QkQsTUFBTUUsUUFBVUQseUJBQWMsQ0FBeEJDO0FBRWQsSUFBTUMsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0MsK0JBQStCRCxJQUFBQSxnQkFBUyxFQUFDLGlEQUN6Q0UsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDLGdEQUMzQ0MsbUNBQW1DSixJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q0ssbUNBQW1DTCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q00scUNBQXFDSCxJQUFBQSxpQkFBVSxFQUFDLHVEQUNoREksMkNBQTJDUCxJQUFBQSxnQkFBUyxFQUFDLGlDQUNyRFEsc0RBQXNEUixJQUFBQSxnQkFBUyxFQUFDLGdFQUNoRVMsMkRB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