"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, assignments, stated, localContext) {
                var verified;
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, stated, localContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
_define_property(MetaLevelVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, assignments, stated, localContext) {
            var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, localContext), statementVerified = statement.verify(assignments, stated, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, assignments, stated, localContext) {
            var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    }
]);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFZlcmlmaWVyID0gbmV3IE1ldGFMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJNZXRhTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsIm5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJWZXJpZmllciIsIm1hcHMiLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ0ZXJtTm9kZSIsInZlcmlmeVRlcm0iLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJtZXRhTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcURBOzs7ZUFBQTs7OzJEQW5EaUI7K0RBQ0k7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUUsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDNUMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxNQUNsQk0sYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQywwQkFBMEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUwsYUFBYUMsUUFBUUM7Z0JBRXZGQyxXQUFXSSx5QkFBMEIsR0FBRztnQkFFeEMsT0FBT0o7WUFDVDs7O1dBWElOO0VBQTBCWSxpQkFBUTtBQWF0QyxpQkFiSVosbUJBYUdhLFFBQU87SUFDWjtRQUNFZixXQUFXQztRQUNYRSxRQUFRLFNBQUNhLGVBQWVYLGFBQWFDLFFBQVFDO1lBQzNDLElBQU0sQUFBRVUsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsWUFBWUYsVUFBVUcsaUJBQWlCLENBQUNKLGVBQWVULGVBQ3ZEYyxvQkFBb0JGLFVBQVVoQixNQUFNLENBQUNFLGFBQWFDLFFBQVFDO1lBRWhFLE9BQU9jO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VyQixXQUFXRDtRQUNYSSxRQUFRLFNBQUNtQixVQUFVakIsYUFBYUMsUUFBUUM7WUFDdEMsSUFBTSxBQUFFZ0IsYUFBZUwsYUFBSSxDQUFuQkssWUFDRkMsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVGLFdBQVdELFVBQVVFLE9BQU9qQixjQUFjO2dCQUN2RCxJQUFNbUIsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSxvQkFBb0IsSUFBSXpCO0lBRTlCLFdBQWV5QiJ9