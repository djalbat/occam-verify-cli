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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ09OVEVYVF9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb01ldGFUeXBlID0gdGhpcy5pc0VxdWFsVG8obWV0YVR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlcXVhbFRvTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIENvbnRleHRNZXRhVHlwZSBleHRlbmRzIE1ldGFUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBDT05URVhUX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIGNvbnRleHRNZXRhVHlwZSA9IG5ldyBDb250ZXh0TWV0YVR5cGUobmFtZSk7XG5cbiAgICByZXR1cm4gY29udGV4dE1ldGFUeXBlO1xuICB9XG59XG5cbmNsYXNzIFN0YXRlbWVudE1ldGFUeXBlIGV4dGVuZHMgTWV0YVR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IG5ldyBTdGF0ZW1lbnRNZXRhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29udGV4dE1ldGFUeXBlID0gQ29udGV4dE1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRNZXRhVHlwZSA9IFN0YXRlbWVudE1ldGFUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiY29udGV4dE1ldGFUeXBlIiwiTWV0YVR5cGUiLCJtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsIm5hbWUiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwibWF0Y2giLCJlcXVhbFRvTWV0YVR5cGUiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tTWV0YVR5cGVOYW1lIiwiQ29udGV4dE1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJDT05URVhUX01FVEFfVFlQRV9OQU1FIiwiU3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBK0VhQSxlQUFlO2VBQWZBOzs7ZUEzRVFDOztJQStFTEMsOEJBQThCO2VBQTlCQTs7SUFGSEMsaUJBQWlCO2VBQWpCQTs7OzZCQS9Fb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQUEsQUFBTUYseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxJQUFJO2dDQURHSDtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7O2tCQUZLSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRO2dCQUNoQixJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUYsUUFBUTtnQkFDWixJQUFNRyxrQkFBa0IsSUFBSSxDQUFDSixTQUFTLENBQUNDLFdBQ2pDSSxVQUFVRCxpQkFBa0IsR0FBRztnQkFFckMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUixJQUFJO2dCQUNaLElBQU1TLGNBQWUsSUFBSSxDQUFDVCxJQUFJLEtBQUtBO2dCQUVuQyxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXVCLElBQUksQ0FBQ1osSUFBSSxLQUFLVztnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFNBQVMsQUFBQyxHQUFZLE9BQVYsSUFBSSxDQUFDZixJQUFJO2dCQUUzQixPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9GLE1BQU07Z0JBQ1gsSUFBTWQsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJpQixPQUFPO29CQUNMakIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCUCxZQUFZO2dCQUNsQyxJQUFNWCxPQUFPVyxjQUNQUixXQUFXLElBbkRBTixTQW1EYUc7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztXQXREbUJOOztBQXlEckIsSUFBQSxBQUFNc0IsZ0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNcEIsT0FBT3FCLHFDQUFzQixFQUM3QnpCLGtCQUFrQixJQUh0QnVCLGdCQUcwQ25CO2dCQUU1QyxPQUFPSjtZQUNUOzs7V0FOSXVCO0VBQXdCdEI7QUFTOUIsSUFBQSxBQUFNeUIsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNHRixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNcEIsT0FBT3VCLHVDQUF3QixFQUMvQnhCLG9CQUFvQixJQUh4QnVCLGtCQUc4Q3RCO2dCQUVoRCxPQUFPRDtZQUNUOzs7V0FOSXVCO0VBQTBCekI7QUFTekIsSUFBTUQsa0JBQWtCdUIsZ0JBQWdCQyxXQUFXO0FBRW5ELElBQU1yQixvQkFBb0J1QixrQkFBa0JGLFdBQVc7QUFFdkQsU0FBU3RCLCtCQUErQm1CLElBQUksRUFBRU8sV0FBVztJQUM5RCxJQUFJckI7SUFFSixJQUFNLEFBQUVILE9BQVNpQixLQUFUakI7SUFFUkcsV0FBVyxJQUFJTixTQUFTRztJQUV4QixPQUFPRztBQUNUIn0=