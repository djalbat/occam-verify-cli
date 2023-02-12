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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTUVUQV9UWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb01ldGFUeXBlID0gdGhpcy5pc0VxdWFsVG8obWV0YVR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlcXVhbFRvTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGFUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBraW5kID0gTUVUQV9UWVBFX0tJTkQsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBtZXRhVHlwZTtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBvYmplY3RNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBvYmplY3RNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50TWV0YVR5cGUgPSBTdGF0ZW1lbnRNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIk1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoIiwiZXF1YWxUb01ldGFUeXBlIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaGVzTWV0YVR5cGVOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJ0b0pTT04iLCJraW5kIiwiTUVUQV9UWVBFX0tJTkQiLCJqc29uIiwiZnJvbU1ldGFUeXBlTmFtZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIlN0YXRlbWVudE1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJvYmplY3RNZXRhVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUtxQkE7O0lBOEVSQyxpQkFBaUI7ZUFBakJBOzs7cUJBakZrQjs2QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNRCx5QkFxRWxCLEFBckVZO2FBQU1BLFNBQ1BFLElBQUk7OEJBREdGO1FBRWpCLElBQUksQ0FBQ0UsSUFBSSxHQUFHQTs7aUJBRktGOztZQUtuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUSxFQUFFO2dCQUNsQixJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUYsUUFBUSxFQUFFO2dCQUNkLElBQU1HLGtCQUFrQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsV0FDakNJLFVBQVVELGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLElBQUksRUFBRTtnQkFDZCxJQUFNUyxjQUFlLElBQUksQ0FBQ1QsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRTtnQkFDOUIsSUFBTUMsc0JBQXVCLElBQUksQ0FBQ1osSUFBSSxLQUFLVztnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBTUMsU0FBUyxBQUFDLEdBQVksT0FBVixJQUFJLENBQUNmLElBQUk7Z0JBRTNCLE9BQU9lO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0YsTUFBTSxFQUFFO2dCQUNiLElBQU1HLE9BQU9DLHFCQUFjLEVBQ3JCbEIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJtQixPQUFPO29CQUNMRixNQUFBQTtvQkFDQWpCLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9tQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQlQsWUFBWSxFQUFFO2dCQUNwQyxJQUFNWCxPQUFPVyxjQUNQUixXQUFXLElBckRBTCxTQXFEYUU7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRixJQUFJLEVBQUVHLFdBQVcsRUFBRTtnQkFDL0MsSUFBSW5CO2dCQUVKLElBQU0sQUFBRUgsT0FBU21CLEtBQVRuQjtnQkFFUkcsV0FBVyxJQS9ETUwsU0ErRE9FO2dCQUV4QixPQUFPRztZQUNUOzs7V0FsRW1CTDs7QUFxRXJCLElBQUEsQUFBTXlCLGtDQVNILEFBVEg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTXhCLE9BQU95Qix1Q0FBd0IsRUFDL0JDLGlCQUFpQixJQUhyQkgsa0JBRzJDdkI7Z0JBRTdDLE9BQU8wQjtZQUNUOzs7V0FOSUg7RUFBMEJ6QjtBQVN6QixJQUFNQyxvQkFBb0J3QixrQkFBa0JDLFdBQVcifQ==