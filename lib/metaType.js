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
            value: function fromMetaTypeNode(metaTypeNode, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YVR5cGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhVHlwZTtcblxuY2xhc3MgRnJhbWVNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gbmV3IEZyYW1lTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBSZWZlcmVuY2VNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBuZXcgUmVmZXJlbmNlTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGVtZW50TWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE1ldGFUeXBlID0gbmV3IFN0YXRlbWVudE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmFtZU1ldGFUeXBlID0gRnJhbWVNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlID0gUmVmZXJlbmNlTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRNZXRhVHlwZSA9IFN0YXRlbWVudE1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgbGV0IG1ldGFUeXBlO1xuXG4gIHN3aXRjaCAobWV0YVR5cGVOYW1lKSB7XG4gICAgY2FzZSBGUkFNRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBzdGF0ZW1lbnRNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsIk1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZSIsImZyb21NZXRhVHlwZU5vZGUiLCJjb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsIkZyYW1lTWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUmVmZXJlbmNlTWV0YVR5cGUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkVB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