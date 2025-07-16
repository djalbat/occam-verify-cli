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
                var basic = basicFromSuperTypes(this.superTypes);
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
                var properties = [], provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext), superTypes = superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext), name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
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
                var properties = null, superTypes = null, provisional = provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext), name = nameFromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromName(name), type = new Type(string, name, superTypes, properties, provisional);
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
                var properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), name = nameFromComplexTypeDeclaration(complexTypeDeclarationNode, fileContext), string = stringFromNameAndSuperTypes(name, superTypes), type = new Type(string, name, superTypes, properties, provisional);
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
        var Type = _dom.default.Type, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
function basicFromSuperTypes(superTypes) {
    var basic = false;
    var superTypesLength = superTypes.length;
    if (superTypesLength === 1) {
        var firstSuperType = first(superTypes), superType = firstSuperType; ///
        if (superType === objectType) {
            basic = true;
        }
    }
    return basic;
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
function nameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName; ///
    return name;
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
    var typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(typeDeclarationNode), superTypes = typeDeclarationSuperTypeNodes.map(function(typeDeclarationSuperTypeNode) {
        var superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode, fileContext);
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        superTypes.push(objectType);
    }
    return superTypes;
}
function provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var firstTypeDeclarationPrimaryKeywordTerminalNode = firstTypeDeclarationPrimaryKeywordTerminalNodeQuery(typeDeclarationNode), content = firstTypeDeclarationPrimaryKeywordTerminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL, provisional = contentProvisional; ///
    return provisional;
}
function provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    var provisional = false;
    var lastVariableDeclarationSecondaryKeywordTerminalNode = lastVariableDeclarationSecondaryKeywordTerminalNodeQuery(variableDeclarationNode);
    if (lastVariableDeclarationSecondaryKeywordTerminalNode !== null) {
        var content = lastVariableDeclarationSecondaryKeywordTerminalNode.getContent(), contentProvisional = content === _constants.PROVISIONALLY;
        provisional = contentProvisional; ///
    }
    return provisional;
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
    _create_class(ObjectType, [
        {
            key: "getProperties",
            value: function getProperties() {
                var properties = [];
                return properties;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: // matchName(name) {
            //   const nameMatches = ((name === null) || (name === OBJECT_TYPE_NAME));
            //
            //   return nameMatches;
            // }
            //
            // matchTypeName(typeName) {
            //   const typeNameMatches = ((typeName === null) || (typeName === OBJECT_TYPE_NAME));
            //
            //   return typeNameMatches;
            // }
            function fromNothing() {
                var name = null, string = _typeNames.OBJECT_TYPE_NAME, superTypes = [], properties = [], provisional = false, objectType = new ObjectType(string, name, superTypes, properties, provisional);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgUFJPVklTSU9OQUwsIFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVBc3NlcnRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uL3Byb3BlcnR5RGVjbGFyYXRpb25cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90eXBlRGVjbGFyYXRpb258Y29tcGxleFR5cGVEZWNsYXJhdGlvbi90eXBlcy90eXBlXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBmaXJzdFR5cGVEZWNsYXJhdGlvblByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vQHByaW1hcnkta2V5d29yZFswXVwiKSxcbiAgICAgIGxhc3RWYXJpYWJsZURlY2xhcmF0aW9uU2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vQHNlY29uZGFyeS1rZXl3b3JkWy0xXVwiKTtcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgY29uc3QgYmFzaWMgPSBiYXNpY0Zyb21TdXBlclR5cGVzKHRoaXMuc3VwZXJUeXBlcyk7XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlKSB7XG4gICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUubmFtZSA9PT0gbnVsbCkge1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGlmICh0aGlzID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWxNYXRjaGVzO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWxNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFByb3Zpc2lvbmFsKHR5cGUsIHByb3Zpc2lvbmFsKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGUsIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRTdXBlclR5cGVzKG5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tVHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlKTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWUobmFtZSkge1xuICBjb25zdCBzdHJpbmcgPSAobmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgT0JKRUNUX1RZUEVfTkFNRTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGJhc2ljRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBsZXQgYmFzaWMgPSBmYWxzZTtcblxuICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlOyAvLy9cblxuICAgIGlmIChzdXBlclR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmFzaWM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyhuYW1lLCBzdXBlclR5cGVzKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBPQkpFQ1RfVFlQRV9OQU1FOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgIHN0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtuYW1lfToke3N1cGVyVHlwZXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzLm1hcCgodHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgc3VwZXJUeXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RUeXBlRGVjbGFyYXRpb25QcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSA9IGZpcnN0VHlwZURlY2xhcmF0aW9uUHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgY29udGVudCA9IGZpcnN0VHlwZURlY2xhcmF0aW9uUHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUwpLFxuICAgICAgICBwcm92aXNpb25hbCA9IGNvbnRlbnRQcm92aXNpb25hbDsgLy8vXG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5mdW5jdGlvbiBwcm92aXNpb25hbEZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgY29uc3QgbGFzdFZhcmlhYmxlRGVjbGFyYXRpb25TZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlID0gbGFzdFZhcmlhYmxlRGVjbGFyYXRpb25TZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gIGlmIChsYXN0VmFyaWFibGVEZWNsYXJhdGlvblNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbGFzdFZhcmlhYmxlRGVjbGFyYXRpb25TZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUxMWSk7XG5cbiAgICBwcm92aXNpb25hbCA9IGNvbnRlbnRQcm92aXNpb25hbDsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVzID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2Rlcy5tYXAoKHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIHN1cGVyVHlwZXMucHVzaChvYmplY3RUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgLy8gbWF0Y2hOYW1lKG5hbWUpIHtcbiAgLy8gICBjb25zdCBuYW1lTWF0Y2hlcyA9ICgobmFtZSA9PT0gbnVsbCkgfHwgKG5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIC8vIH1cbiAgLy9cbiAgLy8gbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAvLyAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICgodHlwZU5hbWUgPT09IG51bGwpIHx8ICh0eXBlTmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkpO1xuICAvL1xuICAvLyAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gT0JKRUNUX1RZUEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJ0eXBlQXNzZXJ0aW9uVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXNRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkiLCJmaXJzdFR5cGVEZWNsYXJhdGlvblByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJsYXN0VmFyaWFibGVEZWNsYXJhdGlvblNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwic2V0U3RyaW5nIiwic2V0TmFtZSIsInNldFN1cGVyVHlwZXMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJpc0Jhc2ljIiwiYmFzaWMiLCJiYXNpY0Zyb21TdXBlclR5cGVzIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInByb3BlcnRpZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN0cmluZ0Zyb21OYW1lQW5kU3VwZXJUeXBlcyIsImZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblR5cGVOb2RlIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwic3RyaW5nRnJvbU5hbWUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIm5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImRvbUFzc2lnbmVkIiwiT0JKRUNUX1RZUEVfTkFNRSIsImRvbSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZXMiLCJtYXAiLCJ0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZpcnN0VHlwZURlY2xhcmF0aW9uUHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRQcm92aXNpb25hbCIsIlBST1ZJU0lPTkFMIiwibGFzdFZhcmlhYmxlRGVjbGFyYXRpb25TZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiUFJPVklTSU9OQUxMWSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlByb3BlcnR5IiwicHJvcGVydHkiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9UQTtl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