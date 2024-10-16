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
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var metaTypeNameMatches = this.name === metaTypeName;
                return metaTypeNameMatches;
            }
        },
        {
            key: "matchMetaTypeNode",
            value: function matchMetaTypeNode(metaTypeNode) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaTypeNameMatches = this.matchMetaTypeName(metaTypeName), metaTypeNodeMatches = metaTypeNameMatches; ///
                return metaTypeNodeMatches;
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
            value: function fromMetaTypeNode(metaTypeNode, localContext) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaType = metaTypeFromMetaTypeName(metaTypeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhVHlwZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFUeXBlO1xuXG5jbGFzcyBGcmFtZU1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBuZXcgRnJhbWVNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBmcmFtZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFJlZmVyZW5jZU1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG5ldyBSZWZlcmVuY2VNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBTdGF0ZW1lbnRNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGUgPSBuZXcgU3RhdGVtZW50TWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyYW1lTWV0YVR5cGUgPSBGcmFtZU1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGUgPSBSZWZlcmVuY2VNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICBsZXQgbWV0YVR5cGU7XG5cbiAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IHN0YXRlbWVudE1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwiTWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsImxvY2FsQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJGcmFtZU1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJlZmVyZW5jZU1ldGFUeXBlIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7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