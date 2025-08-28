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
            value: function fromJSON(json, context) {
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
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKG1ldGFUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKE1ldGFUeXBlKTtcblxuY2xhc3MgRnJhbWVNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gbmV3IEZyYW1lTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBSZWZlcmVuY2VNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBuZXcgUmVmZXJlbmNlTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGVtZW50TWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE1ldGFUeXBlID0gbmV3IFN0YXRlbWVudE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmFtZU1ldGFUeXBlID0gRnJhbWVNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlID0gUmVmZXJlbmNlTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRNZXRhVHlwZSA9IFN0YXRlbWVudE1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgbGV0IG1ldGFUeXBlO1xuXG4gIHN3aXRjaCAobWV0YVR5cGVOYW1lKSB7XG4gICAgY2FzZSBGUkFNRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBzdGF0ZW1lbnRNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsIk1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJkb21Bc3NpZ25lZCIsIkZyYW1lTWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUmVmZXJlbmNlTWV0YVR5cGUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0VBO2VBQUE7O1FBNkJhQTtlQUFBQTs7UUFDQUM7ZUFB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