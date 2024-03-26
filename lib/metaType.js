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
    metaTypeFromJSONAndFileContext: function() {
        return metaTypeFromJSONAndFileContext;
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
function metaTypeFromJSONAndFileContext(json, fileContext) {
    var metaType;
    var name = json.name;
    metaType = new MetaType(name);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb01ldGFUeXBlID0gdGhpcy5pc0VxdWFsVG8obWV0YVR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlcXVhbFRvTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBvYmplY3RNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBvYmplY3RNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50TWV0YVR5cGUgPSBTdGF0ZW1lbnRNZXRhVHlwZS5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFUeXBlIiwibWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0Iiwic3RhdGVtZW50TWV0YVR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoIiwiZXF1YWxUb01ldGFUeXBlIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbU1ldGFUeXBlTmFtZSIsIlN0YXRlbWVudE1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJvYmplY3RNZXRhVHlwZSIsImZpbGVDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBb0VMQyw4QkFBOEI7ZUFBOUJBOztJQUZIQyxpQkFBaUI7ZUFBakJBOzs7NkJBcEU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNRix5QkFBRCxBQUFMO2FBQU1BLFNBQ1BHLElBQUk7Z0NBREdIO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTs7a0JBRktIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVE7Z0JBQ2hCLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRixRQUFRO2dCQUNaLElBQU1HLGtCQUFrQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsV0FDakNJLFVBQVVELGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLElBQUk7Z0JBQ1osSUFBTVMsY0FBZSxJQUFJLENBQUNULElBQUksS0FBS0E7Z0JBRW5DLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDWixJQUFJLEtBQUtXO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU07Z0JBQ2IsSUFBTUMsU0FBUyxBQUFDLEdBQVksT0FBVixJQUFJLENBQUNmLElBQUk7Z0JBRTNCLE9BQU9lO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0YsTUFBTTtnQkFDWCxJQUFNZCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQmlCLE9BQU87b0JBQ0xqQixNQUFBQTtnQkFDRjtnQkFFTixPQUFPaUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJQLFlBQVk7Z0JBQ2xDLElBQU1YLE9BQU9XLGNBQ1BSLFdBQVcsSUFuREFOLFNBbURhRztnQkFFOUIsT0FBT0c7WUFDVDs7O1dBdERtQk47O0FBeURyQixJQUFBLEFBQU1zQixrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0dDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1wQixPQUFPcUIsdUNBQXdCLEVBQy9CQyxpQkFBaUIsSUFIckJILGtCQUcyQ25CO2dCQUU3QyxPQUFPc0I7WUFDVDs7O1dBTklIO0VBQTBCdEI7QUFTekIsSUFBTUUsb0JBQW9Cb0Isa0JBQWtCQyxXQUFXO0FBRXZELFNBQVN0QiwrQkFBK0JtQixJQUFJLEVBQUVNLFdBQVc7SUFDOUQsSUFBSXBCO0lBRUosSUFBTSxBQUFFSCxPQUFTaUIsS0FBVGpCO0lBRVJHLFdBQVcsSUFBSU4sU0FBU0c7SUFFeEIsT0FBT0c7QUFDVCJ9