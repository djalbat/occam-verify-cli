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
        return MetaType;
    },
    statementMetaType: function() {
        return statementMetaType;
    }
});
var _metaTypeNames = require("./metaTypeNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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
            key: "isEqualTo",
            value: function isEqualTo(metaType) {
                var equalTo = this === metaType;
                return equalTo;
            }
        },
        {
            key: "match",
            value: function match(metaType) {
                var equalToMetaType = this.isEqualTo(metaType), matches = equalToMetaType; ///
                return matches;
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
            key: "asString",
            value: function asString(tokens) {
                var string = "".concat(this.name);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var name = this.name, json = {
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromMetaTypeName",
            value: function fromMetaTypeName(metaTypeName) {
                var name = metaTypeName, metaType = new MetaType(name);
                return metaType;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metaType;
                var name = json.name;
                metaType = new MetaType(name);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
var StatementMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(StatementMetaType, MetaType);
    var _super = _create_super(StatementMetaType);
    function StatementMetaType() {
        _class_call_check(this, StatementMetaType);
        return _super.apply(this, arguments);
    }
    _create_class(StatementMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.STATEMENT_META_TYPE_NAME, objectMetaType = new StatementMetaType(name);
                return objectMetaType;
            }
        }
    ]);
    return StatementMetaType;
}(MetaType);
var statementMetaType = StatementMetaType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb01ldGFUeXBlID0gdGhpcy5pc0VxdWFsVG8obWV0YVR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlcXVhbFRvTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVR5cGU7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBTdGF0ZW1lbnRNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgb2JqZWN0TWV0YVR5cGUgPSBuZXcgU3RhdGVtZW50TWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gb2JqZWN0TWV0YVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaCIsImVxdWFsVG9NZXRhVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwidG9KU09OIiwianNvbiIsImZyb21NZXRhVHlwZU5hbWUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsImZyb21Ob3RoaW5nIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwib2JqZWN0TWV0YVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFJcUJBOztJQTRFUkMsaUJBQWlCO2VBQWpCQTs7OzZCQTlFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUQseUJBbUVsQixBQW5FWTthQUFNQSxTQUNQRSxJQUFJO2dDQURHRjtRQUVqQixJQUFJLENBQUNFLElBQUksR0FBR0E7O2tCQUZLRjs7WUFLbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVEsRUFBRTtnQkFDbEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLFFBQVEsRUFBRTtnQkFDZCxJQUFNRyxrQkFBa0IsSUFBSSxDQUFDSixTQUFTLENBQUNDLFdBQ2pDSSxVQUFVRCxpQkFBa0IsR0FBRztnQkFFckMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUixJQUFJLEVBQUU7Z0JBQ2QsSUFBTVMsY0FBZSxJQUFJLENBQUNULElBQUksS0FBS0E7Z0JBRW5DLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUU7Z0JBQzlCLElBQU1DLHNCQUF1QixJQUFJLENBQUNaLElBQUksS0FBS1c7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFNBQVMsQUFBQyxHQUFZLE9BQVYsSUFBSSxDQUFDZixJQUFJO2dCQUUzQixPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9GLE1BQU0sRUFBRTtnQkFDYixJQUFNZCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQmlCLE9BQU87b0JBQ0xqQixNQUFBQTtnQkFDRjtnQkFFTixPQUFPaUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJQLFlBQVksRUFBRTtnQkFDcEMsSUFBTVgsT0FBT1csY0FDUFIsV0FBVyxJQW5EQUwsU0FtRGFFO2dCQUU5QixPQUFPRztZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkYsSUFBSSxFQUFFRyxXQUFXLEVBQUU7Z0JBQy9DLElBQUlqQjtnQkFFSixJQUFNLEFBQUVILE9BQVNpQixLQUFUakI7Z0JBRVJHLFdBQVcsSUE3RE1MLFNBNkRPRTtnQkFFeEIsT0FBT0c7WUFDVDs7O1dBaEVtQkw7O0FBbUVyQixJQUFBLEFBQU11QixrQ0FTSCxBQVRIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0dDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU10QixPQUFPdUIsdUNBQXdCLEVBQy9CQyxpQkFBaUIsSUFIckJILGtCQUcyQ3JCO2dCQUU3QyxPQUFPd0I7WUFDVDs7O1dBTklIO0VBQTBCdkI7QUFTekIsSUFBTUMsb0JBQW9Cc0Isa0JBQWtCQyxXQUFXIn0=