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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgTWV0YVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhVHlwZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFUeXBlO1xuXG5jbGFzcyBGcmFtZU1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBuZXcgRnJhbWVNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBmcmFtZU1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFJlZmVyZW5jZU1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG5ldyBSZWZlcmVuY2VNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBTdGF0ZW1lbnRNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGUgPSBuZXcgU3RhdGVtZW50TWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyYW1lTWV0YVR5cGUgPSBGcmFtZU1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGUgPSBSZWZlcmVuY2VNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICBsZXQgbWV0YVR5cGU7XG5cbiAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBtZXRhVHlwZSA9IHN0YXRlbWVudE1ldGFUeXBlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwiTWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lIiwiZnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsImNvbnRleHQiLCJtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsIkZyYW1lTWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUmVmZXJlbmNlTWV0YVR5cGUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeURBLE9BQXdCO2VBQXhCOztJQTZCYUEsYUFBYTtlQUFiQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7OzJEQXRGSTtvQkFFNEI7NkJBQzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpGLElBQUEsQUFBTUMseUJBQU47YUFBTUEsU0FDUUMsSUFBSTtnQ0FEWkQ7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUZWRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRO2dCQUNoQixJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJRLE9BQU87b0JBQ0xSLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9RO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVWLE9BQVNRLEtBQVRSLE1BQ0ZXLGVBQWVYLE1BQ2ZLLFdBQVdPLHlCQUF5QkQ7Z0JBRTFDLE9BQU9OO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUMsT0FBTztnQkFDM0MsSUFBTUosZUFBZUssSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDVCxXQUFXTyx5QkFBeUJEO2dCQUUxQyxPQUFPTjtZQUNUOzs7V0EzQ0lOOztBQThDTmtCLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCcEIsVUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsSUFBQSxBQUFNcUIsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNckIsT0FBT3NCLG1DQUFvQixFQUMzQjFCLGdCQUFnQixJQUhwQndCLGNBR3NDcEI7Z0JBRXhDLE9BQU9KO1lBQ1Q7OztXQU5Jd0I7RUFBc0JyQjtBQVM1QixJQUFBLEFBQU13QixrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0dGLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1yQixPQUFPd0IsdUNBQXdCLEVBQy9CM0Isb0JBQW9CLElBSHhCMEIsa0JBRzhDdkI7Z0JBRWhELE9BQU9IO1lBQ1Q7OztXQU5JMEI7RUFBMEJ4QjtBQVNoQyxJQUFBLEFBQU0wQixrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0dKLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1yQixPQUFPMEIsdUNBQXdCLEVBQy9CNUIsb0JBQW9CLElBSHhCMkIsa0JBRzhDekI7Z0JBRWhELE9BQU9GO1lBQ1Q7OztXQU5JMkI7RUFBMEIxQjtBQVN6QixJQUFNSCxnQkFBZ0J3QixjQUFjQyxXQUFXO0FBQy9DLElBQU14QixvQkFBb0IwQixrQkFBa0JGLFdBQVc7QUFDdkQsSUFBTXZCLG9CQUFvQjJCLGtCQUFrQkosV0FBVztBQUU5RCxTQUFTVCx5QkFBeUJELFlBQVk7SUFDNUMsSUFBSU47SUFFSixPQUFRTTtRQUNOLEtBQUtXLG1DQUFvQjtZQUFFO2dCQUN6QmpCLFdBQVdULGVBQWUsR0FBRztnQkFFN0I7WUFDRjtRQUVBLEtBQUs0Qix1Q0FBd0I7WUFBRTtnQkFDN0JuQixXQUFXUixtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtRQUVBLEtBQUs2Qix1Q0FBd0I7WUFBRTtnQkFDN0JyQixXQUFXUCxtQkFBbUIsR0FBRztnQkFFakM7WUFDRjtJQUNGO0lBRUEsT0FBT087QUFDVCJ9