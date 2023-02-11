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
var _kinds = require("./kinds");
var _metaTypeNames = require("./metaTypeNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var MetaType = /*#__PURE__*/ function() {
    function MetaType(name) {
        _classCallCheck(this, MetaType);
        this.name = name;
    }
    _createClass(MetaType, [
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
                var matchesName = this.name === name;
                return matchesName;
            }
        },
        {
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var matchesMetaTypeName = this.name === metaTypeName;
                return matchesMetaTypeName;
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
                var kind = _kinds.META_TYPE_KIND, name = this.name, json = {
                    kind: kind,
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var name = json.name, metaType = new MetaType(name);
                return metaType;
            }
        },
        {
            key: "fromMetaTypeName",
            value: function fromMetaTypeName(metaTypeName) {
                var name = metaTypeName, metaType = new MetaType(name);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
var StatementMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(StatementMetaType, MetaType);
    var _super = _createSuper(StatementMetaType);
    function StatementMetaType() {
        _classCallCheck(this, StatementMetaType);
        return _super.apply(this, arguments);
    }
    _createClass(StatementMetaType, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTUVUQV9UWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb01ldGFUeXBlID0gdGhpcy5pc0VxdWFsVG8obWV0YVR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlcXVhbFRvTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGFUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBraW5kID0gTUVUQV9UWVBFX0tJTkQsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZXRhVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufVxuXG5jbGFzcyBTdGF0ZW1lbnRNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgb2JqZWN0TWV0YVR5cGUgPSBuZXcgU3RhdGVtZW50TWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gb2JqZWN0TWV0YVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaCIsImVxdWFsVG9NZXRhVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hlc01ldGFUeXBlTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwidG9KU09OIiwia2luZCIsIk1FVEFfVFlQRV9LSU5EIiwianNvbiIsImZyb21KU09OIiwiY29udGV4dCIsImZyb21NZXRhVHlwZU5hbWUiLCJTdGF0ZW1lbnRNZXRhVHlwZSIsImZyb21Ob3RoaW5nIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwib2JqZWN0TWV0YVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFLcUJBOztJQTJFUkMsaUJBQWlCO2VBQWpCQTs7O3FCQTlFa0I7NkJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUQseUJBa0VsQixBQWxFWTthQUFNQSxTQUNQRSxJQUFJOzhCQURHRjtRQUVqQixJQUFJLENBQUNFLElBQUksR0FBR0E7O2lCQUZLRjs7WUFLbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVEsRUFBRTtnQkFDbEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLFFBQVEsRUFBRTtnQkFDZCxJQUFNRyxrQkFBa0IsSUFBSSxDQUFDSixTQUFTLENBQUNDLFdBQ2pDSSxVQUFVRCxpQkFBa0IsR0FBRztnQkFFckMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUixJQUFJLEVBQUU7Z0JBQ2QsSUFBTVMsY0FBZSxJQUFJLENBQUNULElBQUksS0FBS0E7Z0JBRW5DLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUU7Z0JBQzlCLElBQU1DLHNCQUF1QixJQUFJLENBQUNaLElBQUksS0FBS1c7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFNBQVMsQUFBQyxHQUFZLE9BQVYsSUFBSSxDQUFDZixJQUFJO2dCQUUzQixPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9GLE1BQU0sRUFBRTtnQkFDYixJQUFNRyxPQUFPQyxxQkFBYyxFQUNyQmxCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCbUIsT0FBTztvQkFDTEYsTUFBQUE7b0JBQ0FqQixNQUFBQTtnQkFDRjtnQkFFTixPQUFPbUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU8sRUFBRTtnQkFDN0IsSUFBTSxBQUFFckIsT0FBU21CLEtBQVRuQixNQUNGRyxXQUFXLElBckRBTCxTQXFEYUU7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCWCxZQUFZLEVBQUU7Z0JBQ3BDLElBQU1YLE9BQU9XLGNBQ1BSLFdBQVcsSUE1REFMLFNBNERhRTtnQkFFOUIsT0FBT0c7WUFDVDs7O1dBL0RtQkw7O0FBa0VyQixJQUFBLEFBQU15QixrQ0FTSCxBQVRIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0dDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU14QixPQUFPeUIsdUNBQXdCLEVBQy9CQyxpQkFBaUIsSUFIckJILGtCQUcyQ3ZCO2dCQUU3QyxPQUFPMEI7WUFDVDs7O1dBTklIO0VBQTBCekI7QUFTekIsSUFBTUMsb0JBQW9Cd0Isa0JBQWtCQyxXQUFXIn0=