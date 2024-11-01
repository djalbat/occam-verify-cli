"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    frameMetaType: function() {
        return frameMetaType;
    },
    referenceMetaType: function() {
        return referenceMetaType;
    },
    statementMetaType: function() {
        return statementMetaType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _query = require("./utilities/query");
var _name = require("./utilities/name");
var _metaTypeNames = require("./metaTypeNames");
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
var metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType");
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
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaType = metaTypeFromMetaTypeName(metaTypeName);
                return metaType;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var metatypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metatypeNode), metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
Object.assign(_shim.default, {
    MetaType: MetaType
});
var _default = MetaType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKTtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKG1ldGFUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YXR5cGVOb2RlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGFUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YVR5cGU7XG5cbmNsYXNzIEZyYW1lTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IG5ldyBGcmFtZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgUmVmZXJlbmNlTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gbmV3IFJlZmVyZW5jZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJhbWVNZXRhVHlwZSA9IEZyYW1lTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCByZWZlcmVuY2VNZXRhVHlwZSA9IFJlZmVyZW5jZU1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5leHBvcnQgY29uc3Qgc3RhdGVtZW50TWV0YVR5cGUgPSBTdGF0ZW1lbnRNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gc3RhdGVtZW50TWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIk1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZSIsImZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJjb250ZXh0IiwibWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdHlwZU5vZGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJGcmFtZU1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJlZmVyZW5jZU1ldGFUeXBlIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBFQSxPQUF3QjtlQUF4Qjs7SUE2QmFBLGFBQWE7ZUFBYkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7OzsyREF2R0k7cUJBRVM7b0JBQ21COzZCQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFBQSxBQUFNQyx5QkFBTjthQUFNQSxTQUNRQyxJQUFJO2dDQURaRDtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBRlZEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILElBQUksRUFBRSxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVE7Z0JBQ2hCLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1DLHNCQUF1QkQsaUJBQWlCLElBQUksQ0FBQ1IsSUFBSTtnQkFFdkQsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQlcsT0FBTztvQkFDTFgsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQy9CLElBQU0sQUFBRWIsT0FBU1csS0FBVFgsTUFDRlEsZUFBZVIsTUFDZkssV0FBV1MseUJBQXlCTjtnQkFFMUMsT0FBT0g7WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsWUFBWSxFQUFFQyxPQUFPO2dCQUMzQyxJQUFNVCxlQUFlVSxJQUFBQSxrQ0FBNEIsRUFBQ0YsZUFDNUNYLFdBQVdTLHlCQUF5Qk47Z0JBRTFDLE9BQU9IO1lBQ1Q7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxnQ0FBZ0NDLDJCQUEyQixFQUFFUCxXQUFXO2dCQUM3RSxJQUFNUSxlQUFleEIsa0JBQWtCdUIsOEJBQ2pDWixlQUFlVSxJQUFBQSxrQ0FBNEIsRUFBQ0csZUFDNUNoQixXQUFXUSxZQUFZUywwQkFBMEIsQ0FBQ2Q7Z0JBRXhELE9BQU9IO1lBQ1Q7OztXQXpESU47O0FBNEROd0IsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEIxQixVQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixJQUFBLEFBQU0yQiw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0dDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0zQixPQUFPNEIsbUNBQW9CLEVBQzNCbEMsZ0JBQWdCLElBSHBCZ0MsY0FHc0MxQjtnQkFFeEMsT0FBT047WUFDVDs7O1dBTklnQztFQUFzQjNCO0FBUzVCLElBQUEsQUFBTThCLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0YsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTTNCLE9BQU84Qix1Q0FBd0IsRUFDL0JuQyxvQkFBb0IsSUFIeEJrQyxrQkFHOEM3QjtnQkFFaEQsT0FBT0w7WUFDVDs7O1dBTklrQztFQUEwQjlCO0FBU2hDLElBQUEsQUFBTWdDLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0osS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTTNCLE9BQU9nQyx1Q0FBd0IsRUFDL0JwQyxvQkFBb0IsSUFIeEJtQyxrQkFHOEMvQjtnQkFFaEQsT0FBT0o7WUFDVDs7O1dBTkltQztFQUEwQmhDO0FBU3pCLElBQU1MLGdCQUFnQmdDLGNBQWNDLFdBQVc7QUFDL0MsSUFBTWhDLG9CQUFvQmtDLGtCQUFrQkYsV0FBVztBQUN2RCxJQUFNL0Isb0JBQW9CbUMsa0JBQWtCSixXQUFXO0FBRTlELFNBQVNiLHlCQUF5Qk4sWUFBWTtJQUM1QyxJQUFJSDtJQUVKLE9BQVFHO1FBQ04sS0FBS29CLG1DQUFvQjtZQUFFO2dCQUN6QnZCLFdBQVdYLGVBQWUsR0FBRztnQkFFN0I7WUFDRjtRQUVBLEtBQUtvQyx1Q0FBd0I7WUFBRTtnQkFDN0J6QixXQUFXVixtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtRQUVBLEtBQUtxQyx1Q0FBd0I7WUFBRTtnQkFDN0IzQixXQUFXVCxtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtJQUNGO0lBRUEsT0FBT1M7QUFDVCJ9