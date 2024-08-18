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
    contextMetaType: function() {
        return contextMetaType;
    },
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
var _name = require("./utilities/name");
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
            key: "matchMetaTypeNode",
            value: function matchMetaTypeNode(metaTypeNode) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaTypeNameMatches = this.matchMetaTypeName(metaTypeName), metaTypeNodeMatches = metaTypeNameMatches; ///
                return metaTypeNodeMatches;
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
var ContextMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(ContextMetaType, MetaType);
    var _super = _create_super(ContextMetaType);
    function ContextMetaType() {
        _class_call_check(this, ContextMetaType);
        return _super.apply(this, arguments);
    }
    _create_class(ContextMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.CONTEXT_META_TYPE_NAME, contextMetaType = new ContextMetaType(name);
                return contextMetaType;
            }
        }
    ]);
    return ContextMetaType;
}(MetaType);
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
                var name = _metaTypeNames.STATEMENT_META_TYPE_NAME, statementMetaType = new StatementMetaType(name);
                return statementMetaType;
            }
        }
    ]);
    return StatementMetaType;
}(MetaType);
var contextMetaType = ContextMetaType.fromNothing();
var statementMetaType = StatementMetaType.fromNothing();
function metaTypeFromJSONAndFileContext(json, fileContext) {
    var metaType;
    var name = json.name;
    metaType = new MetaType(name);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBDT05URVhUX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBpc0VxdWFsVG8obWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2gobWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvTWV0YVR5cGUgPSB0aGlzLmlzRXF1YWxUbyhtZXRhVHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IGVxdWFsVG9NZXRhVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5uYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgQ29udGV4dE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IENPTlRFWFRfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgY29udGV4dE1ldGFUeXBlID0gbmV3IENvbnRleHRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBjb250ZXh0TWV0YVR5cGU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGVtZW50TWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE1ldGFUeXBlID0gbmV3IFN0YXRlbWVudE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TWV0YVR5cGUgPSBDb250ZXh0TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudE1ldGFUeXBlID0gU3RhdGVtZW50TWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YVR5cGU7XG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZXh0TWV0YVR5cGUiLCJNZXRhVHlwZSIsIm1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInN0YXRlbWVudE1ldGFUeXBlIiwibmFtZSIsImdldE5hbWUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJtYXRjaCIsImVxdWFsVG9NZXRhVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZU1hdGNoZXMiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tTWV0YVR5cGVOYW1lIiwiQ29udGV4dE1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJDT05URVhUX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0ZhQSxlQUFlO2VBQWZBOzs7ZUFuRlFDOztJQXVGTEMsOEJBQThCO2VBQTlCQTs7SUFGSEMsaUJBQWlCO2VBQWpCQTs7O29CQXhGZ0M7NkJBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1GLHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsSUFBSTtnQ0FER0g7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBOztrQkFGS0g7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUTtnQkFDaEIsSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLFFBQVE7Z0JBQ1osSUFBTUcsa0JBQWtCLElBQUksQ0FBQ0osU0FBUyxDQUFDQyxXQUNqQ0ksVUFBVUQsaUJBQWtCLEdBQUc7Z0JBRXJDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVIsSUFBSTtnQkFDWixJQUFNUyxjQUFlLElBQUksQ0FBQ1QsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1DLHNCQUF1QixJQUFJLENBQUNaLElBQUksS0FBS1c7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNSCxlQUFlSSxJQUFBQSxrQ0FBNEIsRUFBQ0QsZUFDNUNGLHNCQUFzQixJQUFJLENBQUNGLGlCQUFpQixDQUFDQyxlQUM3Q0ssc0JBQXNCSixxQkFBc0IsR0FBRztnQkFFckQsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFNBQVMsQUFBQyxHQUFZLE9BQVYsSUFBSSxDQUFDbkIsSUFBSTtnQkFFM0IsT0FBT21CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0YsTUFBTTtnQkFDWCxJQUFNbEIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJxQixPQUFPO29CQUNMckIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCWCxZQUFZO2dCQUNsQyxJQUFNWCxPQUFPVyxjQUNQUixXQUFXLElBM0RBTixTQTJEYUc7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztXQTlEbUJOOztBQWlFckIsSUFBQSxBQUFNMEIsZ0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNeEIsT0FBT3lCLHFDQUFzQixFQUM3QjdCLGtCQUFrQixJQUh0QjJCLGdCQUcwQ3ZCO2dCQUU1QyxPQUFPSjtZQUNUOzs7V0FOSTJCO0VBQXdCMUI7QUFTOUIsSUFBQSxBQUFNNkIsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNHRixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNeEIsT0FBTzJCLHVDQUF3QixFQUMvQjVCLG9CQUFvQixJQUh4QjJCLGtCQUc4QzFCO2dCQUVoRCxPQUFPRDtZQUNUOzs7V0FOSTJCO0VBQTBCN0I7QUFTekIsSUFBTUQsa0JBQWtCMkIsZ0JBQWdCQyxXQUFXO0FBRW5ELElBQU16QixvQkFBb0IyQixrQkFBa0JGLFdBQVc7QUFFdkQsU0FBUzFCLCtCQUErQnVCLElBQUksRUFBRU8sV0FBVztJQUM5RCxJQUFJekI7SUFFSixJQUFNLEFBQUVILE9BQVNxQixLQUFUckI7SUFFUkcsV0FBVyxJQUFJTixTQUFTRztJQUV4QixPQUFPRztBQUNUIn0=