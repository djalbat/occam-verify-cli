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
    get frameMetaType () {
        return frameMetaType;
    },
    get referenceMetaType () {
        return referenceMetaType;
    },
    get statementMetaType () {
        return statementMetaType;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _dom = require("../dom");
var _metaTypeNames = require("../metaTypeNames");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var metavariableDeclarationMetaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType");
var MetaType = /*#__PURE__*/ function() {
    function MetaType(name) {
        _class_call_check(this, MetaType);
        this.name = name;
    }
    _create_class(MetaType, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(metaType) {
                var equalTo = this === metaType;
                return equalTo;
            }
        },
        {
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var metaTypeNameMatches = metaTypeName === this.name;
                return metaTypeNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, json = {
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name, metaTypeName = name, metaType = metaTypeFromMetaTypeName(metaTypeName);
                return metaType;
            }
        },
        {
            key: "fromMetaTypeNode",
            value: function fromMetaTypeNode(metaTypeNode, context) {
                var metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
                return metaType;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var metavariableDeclarationMetaTypeNode = metavariableDeclarationMetaTypeNodeQuery(metavariableDeclarationNode), metaTypeNode = metavariableDeclarationMetaTypeNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
_define_property(MetaType, "name", "MetaType");
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = metaTypeFromMetaTypeName(metaTypeName);
    return metaType;
}
var _default = (0, _dom.domAssigned)(MetaType);
var FrameMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(FrameMetaType, MetaType);
    function FrameMetaType() {
        _class_call_check(this, FrameMetaType);
        return _call_super(this, FrameMetaType, arguments);
    }
    _create_class(FrameMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = new FrameMetaType(name);
                return frameMetaType;
            }
        }
    ]);
    return FrameMetaType;
}(MetaType);
var ReferenceMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(ReferenceMetaType, MetaType);
    function ReferenceMetaType() {
        _class_call_check(this, ReferenceMetaType);
        return _call_super(this, ReferenceMetaType, arguments);
    }
    _create_class(ReferenceMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = new ReferenceMetaType(name);
                return referenceMetaType;
            }
        }
    ]);
    return ReferenceMetaType;
}(MetaType);
var StatementMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(StatementMetaType, MetaType);
    function StatementMetaType() {
        _class_call_check(this, StatementMetaType);
        return _call_super(this, StatementMetaType, arguments);
    }
    _create_class(StatementMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.STATEMENT_META_TYPE_NAME, statementMetaType = new StatementMetaType(name);
                return statementMetaType;
            }
        }
    ]);
    return StatementMetaType;
}(MetaType);
var frameMetaType = FrameMetaType.fromNothing();
var referenceMetaType = ReferenceMetaType.fromNothing();
var statementMetaType = StatementMetaType.fromNothing();
function metaTypeFromMetaTypeName(metaTypeName) {
    var metaType;
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
            {
                metaType = frameMetaType; ///
                break;
            }
        case _metaTypeNames.REFERENCE_META_TYPE_NAME:
            {
                metaType = referenceMetaType; ///
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                metaType = statementMetaType; ///
                break;
            }
    }
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGFUeXBlXCIpO1xuXG5jbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZU1hdGNoZXMgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChNZXRhVHlwZSk7XG5cbmNsYXNzIEZyYW1lTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IG5ldyBGcmFtZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgUmVmZXJlbmNlTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gbmV3IFJlZmVyZW5jZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJhbWVNZXRhVHlwZSA9IEZyYW1lTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCByZWZlcmVuY2VNZXRhVHlwZSA9IFJlZmVyZW5jZU1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5leHBvcnQgY29uc3Qgc3RhdGVtZW50TWV0YVR5cGUgPSBTdGF0ZW1lbnRNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gc3RhdGVtZW50TWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGFUeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiTWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsImNvbnRleHQiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhVHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZXRNZXRhVHlwZU5hbWUiLCJkb21Bc3NpZ25lZCIsIkZyYW1lTWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUmVmZXJlbmNlTWV0YVR5cGUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0ZBO2VBQUE7O1FBNkJhQTtlQUFBQTs7UUFDQUM7ZUFBQUE7O1FBQ0FDO2VBQUFBOzs7NERBN0dZO3FCQUVDO21CQUNFOzZCQUM2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekYsSUFBTUMsMkNBQTJDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTNELElBQUEsQUFBTUMseUJBQU47YUFBTUEsU0FDUUMsSUFBSTtnQ0FEWkQ7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUZWRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJB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