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
var _query = require("../utilities/query");
var _dom = require("../dom");
var _name = require("../utilities/name");
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
_define_property(MetaType, "name", "MetaType");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIik7XG5cbmNsYXNzIE1ldGFUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5uYW1lOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBpc0VxdWFsVG8obWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9IChtZXRhVHlwZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGFUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlKG1ldGF0eXBlTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKE1ldGFUeXBlKTtcblxuY2xhc3MgRnJhbWVNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gbmV3IEZyYW1lTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBSZWZlcmVuY2VNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBuZXcgUmVmZXJlbmNlTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGVtZW50TWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE1ldGFUeXBlID0gbmV3IFN0YXRlbWVudE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmFtZU1ldGFUeXBlID0gRnJhbWVNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlID0gUmVmZXJlbmNlTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRNZXRhVHlwZSA9IFN0YXRlbWVudE1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgbGV0IG1ldGFUeXBlO1xuXG4gIHN3aXRjaCAobWV0YVR5cGVOYW1lKSB7XG4gICAgY2FzZSBGUkFNRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSBzdGF0ZW1lbnRNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiTWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsImNvbnRleHQiLCJtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF0eXBlTm9kZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZG9tQXNzaWduZWQiLCJGcmFtZU1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJlZmVyZW5jZU1ldGFUeXBlIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXVFQSxPQUFxQztlQUFyQzs7SUE2QmFBLGFBQWE7ZUFBYkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7OztxQkFwR2E7bUJBQ0U7b0JBQ2lCOzZCQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpGLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFBLEFBQU1DLHlCQUFOO2FBQU1BLFNBQ1FDLElBQUk7Z0NBRFpEO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFGVkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0gsSUFBSSxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUTtnQkFDaEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXVCRCxpQkFBaUIsSUFBSSxDQUFDUixJQUFJO2dCQUV2RCxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCVyxPQUFPO29CQUNMWCxNQUFBQTtnQkFDRjtnQkFFTixPQUFPVztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsV0FBVztnQkFDL0IsSUFBTSxBQUFFYixPQUFTVyxLQUFUWCxNQUNGUSxlQUFlUixNQUNmSyxXQUFXUyx5QkFBeUJOO2dCQUUxQyxPQUFPSDtZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZLEVBQUVDLE9BQU87Z0JBQzNDLElBQU1ULGVBQWVVLElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q1gsV0FBV1MseUJBQXlCTjtnQkFFMUMsT0FBT0g7WUFDVDs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsMkJBQTJCLEVBQUVQLFdBQVc7Z0JBQzdFLElBQU1RLGVBQWV4QixrQkFBa0J1Qiw4QkFDakNaLGVBQWVVLElBQUFBLGtDQUE0QixFQUFDRyxlQUM1Q2hCLFdBQVdRLFlBQVlTLDBCQUEwQixDQUFDZDtnQkFFeEQsT0FBT0g7WUFDVDs7O1dBM0RJTjs7QUFvQ0osaUJBcENJQSxVQW9DR0MsUUFBTztJQTBCaEIsV0FBZXVCLElBQUFBLGdCQUFXLEVBQUN4QjtBQUUzQixJQUFBLEFBQU15Qiw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0dDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU16QixPQUFPMEIsbUNBQW9CLEVBQzNCaEMsZ0JBQWdCLElBSHBCOEIsY0FHc0N4QjtnQkFFeEMsT0FBT047WUFDVDs7O1dBTkk4QjtFQUFzQnpCO0FBUzVCLElBQUEsQUFBTTRCLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0YsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXpCLE9BQU80Qix1Q0FBd0IsRUFDL0JqQyxvQkFBb0IsSUFIeEJnQyxrQkFHOEMzQjtnQkFFaEQsT0FBT0w7WUFDVDs7O1dBTklnQztFQUEwQjVCO0FBU2hDLElBQUEsQUFBTThCLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0osS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXpCLE9BQU84Qix1Q0FBd0IsRUFDL0JsQyxvQkFBb0IsSUFIeEJpQyxrQkFHOEM3QjtnQkFFaEQsT0FBT0o7WUFDVDs7O1dBTklpQztFQUEwQjlCO0FBU3pCLElBQU1MLGdCQUFnQjhCLGNBQWNDLFdBQVc7QUFDL0MsSUFBTTlCLG9CQUFvQmdDLGtCQUFrQkYsV0FBVztBQUN2RCxJQUFNN0Isb0JBQW9CaUMsa0JBQWtCSixXQUFXO0FBRTlELFNBQVNYLHlCQUF5Qk4sWUFBWTtJQUM1QyxJQUFJSDtJQUVKLE9BQVFHO1FBQ04sS0FBS2tCLG1DQUFvQjtZQUFFO2dCQUN6QnJCLFdBQVdYLGVBQWUsR0FBRztnQkFFN0I7WUFDRjtRQUVBLEtBQUtrQyx1Q0FBd0I7WUFBRTtnQkFDN0J2QixXQUFXVixtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtRQUVBLEtBQUttQyx1Q0FBd0I7WUFBRTtnQkFDN0J6QixXQUFXVCxtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtJQUNGO0lBRUEsT0FBT1M7QUFDVCJ9