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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
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
var MetaType = /*#__PURE__*/ function(Element) {
    _inherits(MetaType, Element);
    function MetaType(context, string, node, name) {
        _class_call_check(this, MetaType);
        var _this;
        _this = _call_super(this, MetaType, [
            context,
            string,
            node
        ]);
        _this.name = name;
        return _this;
    }
    _create_class(MetaType, [
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
        }
    ]);
    return MetaType;
}(_wrap_native_super(_element.default));
_define_property(MetaType, "name", "MetaType");
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
                var context = null, string = null, node = null, name = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = new FrameMetaType(context, string, node, name);
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
                var context = null, string = null, node = null, name = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = new ReferenceMetaType(context, string, node, name);
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
                var context = null, string = null, node = null, name = _metaTypeNames.STATEMENT_META_TYPE_NAME, statementMetaType = new StatementMetaType(context, string, node, name);
                return statementMetaType;
            }
        }
    ]);
    return StatementMetaType;
}(MetaType);
var frameMetaType = FrameMetaType.fromNothing();
var referenceMetaType = ReferenceMetaType.fromNothing();
var statementMetaType = StatementMetaType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmNsYXNzIE1ldGFUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZU1hdGNoZXMgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShNZXRhVHlwZSk7XG5cbmNsYXNzIEZyYW1lTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gbmV3IEZyYW1lTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgIHJldHVybiBmcmFtZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFJlZmVyZW5jZU1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gbmV3IFJlZmVyZW5jZU1ldGFUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGVtZW50TWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGUgPSBuZXcgU3RhdGVtZW50TWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJhbWVNZXRhVHlwZSA9IEZyYW1lTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlID0gUmVmZXJlbmNlTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsIk1ldGFUeXBlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZSIsIkVsZW1lbnQiLCJkZWZpbmUiLCJGcmFtZU1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJlZmVyZW5jZU1ldGFUeXBlIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtE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