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
var _elements = require("../elements");
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
    function MetaType(string, node, name) {
        _class_call_check(this, MetaType);
        this.string = string;
        this.node = node;
        this.name = name;
    }
    _create_class(MetaType, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
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
var _default = (0, _elements.define)(MetaType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmNsYXNzIE1ldGFUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKG1ldGFUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShNZXRhVHlwZSk7XG5cbmNsYXNzIEZyYW1lTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IG5ldyBGcmFtZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgUmVmZXJlbmNlTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gbmV3IFJlZmVyZW5jZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJhbWVNZXRhVHlwZSA9IEZyYW1lTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCByZWZlcmVuY2VNZXRhVHlwZSA9IFJlZmVyZW5jZU1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5leHBvcnQgY29uc3Qgc3RhdGVtZW50TWV0YVR5cGUgPSBTdGF0ZW1lbnRNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gc3RhdGVtZW50TWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJNZXRhVHlwZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJkZWZpbmUiLCJGcmFtZU1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJlZmVyZW5jZU1ldGFUeXBlIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJT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