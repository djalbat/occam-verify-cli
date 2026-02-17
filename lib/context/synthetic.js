"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
    }
});
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
var SyntheticContext = /*#__PURE__*/ function(Context) {
    _inherits(SyntheticContext, Context);
    function SyntheticContext(context, contexts) {
        _class_call_check(this, SyntheticContext);
        var _this;
        _this = _call_super(this, SyntheticContext, [
            context
        ]);
        _this.contexts = contexts;
        return _this;
    }
    _create_class(SyntheticContext, [
        {
            key: "getContexts",
            value: function getContexts() {
                return this.contexts;
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var term = null;
                this.contexts.some(function(context) {
                    term = context.findTermByTermNode(termNode);
                    if (term !== null) {
                        return true;
                    }
                });
                return term;
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var frame = null;
                this.contexts.some(function(context) {
                    frame = context.findFrameByFrameNode(frameNode);
                    if (frame !== null) {
                        return true;
                    }
                });
                return frame;
            }
        }
    ], [
        {
            key: "fromContexts",
            value: function fromContexts(contexts, context) {
                var syntheticContext = new SyntheticContext(context, contexts);
                return syntheticContext;
            }
        }
    ]);
    return SyntheticContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ludGhldGljQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb250ZXh0cykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0cyhjb250ZXh0cywgY29udGV4dCkge1xuICAgIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBuZXcgU3ludGhldGljQ29udGV4dChjb250ZXh0LCBjb250ZXh0cyk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJjb250ZXh0IiwiY29udGV4dHMiLCJnZXRDb250ZXh0cyIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybSIsInNvbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEMsT0FBTyxFQUFFQyxRQUFRO2dDQURWRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUpDRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFFBQVE7Z0JBQ3pCLElBQUlDLE9BQU87Z0JBRVgsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQyxTQUFDTjtvQkFDbEJLLE9BQU9MLFFBQVFHLGtCQUFrQixDQUFDQztvQkFFbEMsSUFBSUMsU0FBUyxNQUFNO3dCQUNqQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxTQUFTO2dCQUM1QixJQUFJQyxRQUFRO2dCQUVaLElBQUksQ0FBQ1IsUUFBUSxDQUFDSyxJQUFJLENBQUMsU0FBQ047b0JBQ2xCUyxRQUFRVCxRQUFRTyxvQkFBb0IsQ0FBQ0M7b0JBRXJDLElBQUlDLFVBQVUsTUFBTTt3QkFDbEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFULFFBQVEsRUFBRUQsT0FBTztnQkFDbkMsSUFBTVcsbUJBQW1CLElBeENSWixpQkF3QzZCQyxTQUFTQztnQkFFdkQsT0FBT1U7WUFDVDs7O1dBM0NtQlo7RUFBeUJhLGdCQUFPIn0=