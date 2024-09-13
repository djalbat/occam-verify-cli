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
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/type"));
var _query = require("../utilities/query");
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementAsCombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementAsCombinatorVerifier, Verifier);
    function StatementAsCombinatorVerifier() {
        _class_call_check(this, StatementAsCombinatorVerifier);
        return _call_super(this, StatementAsCombinatorVerifier, arguments);
    }
    _create_class(StatementAsCombinatorVerifier, [
        {
            key: "verifyStatement",
            value: function verifyStatement(statementNode, fileContext) {
                var statementVerifiedAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext);
                statementVerifiedAsCombinator = childNodesVerified; ///
                return statementVerifiedAsCombinator;
            }
        }
    ]);
    return StatementAsCombinatorVerifier;
}(_verifier.default);
_define_property(StatementAsCombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, fileContext) {
            var verifyStatement = _shim.default.verifyStatement, derived = true, assignments = null, localContext = _local.default.fromFileContext(fileContext), statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext) {
            var verifyTerm = _shim.default.verifyTerm, terms = [], localContext = _local.default.fromFileContext(fileContext), termVerified = verifyTerm(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, localContext) {
            var typeVerified = (0, _type.default)(typeNode, localContext);
            return typeVerified;
        }
    }
]);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZSBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmVyaWZ5U3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgICBkZXJpdmVkID0gdHJ1ZSwgLy8vXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJTdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiVmVyaWZpZXIiLCJtYXBzIiwidmVyaWZ5Iiwic2hpbSIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwidGVybU5vZGUiLCJ2ZXJpZnlUZXJtIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwic3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1FQTs7O2VBQUE7OzsyREFqRWlCOytEQUNJOzJEQUNFO3FCQUVHOzREQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUcsOENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQ3hDLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFlBQVlIO2dCQUU3REMsZ0NBQWdDSSxvQkFBcUIsR0FBRztnQkFFeEQsT0FBT0o7WUFDVDs7O1dBWElKO0VBQXNDVSxpQkFBUTtBQWFsRCxpQkFiSVYsK0JBYUdXLFFBQU87SUFDWjtRQUNFZCxXQUFXRTtRQUNYYSxRQUFRLFNBQUNWLGVBQWVDO1lBQ3RCLElBQU0sQUFBRUYsa0JBQW9CWSxhQUFJLENBQXhCWixpQkFDRmEsVUFBVSxNQUNWQyxjQUFjLE1BQ2RDLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDZixjQUM1Q2dCLG9CQUFvQmxCLGdCQUFnQkMsZUFBZWEsYUFBYUQsU0FBU0U7WUFFL0UsT0FBT0c7UUFDVDtJQUNGO0lBQ0E7UUFDRXRCLFdBQVdEO1FBQ1hnQixRQUFRLFNBQUNRLFVBQVVqQjtZQUNqQixJQUFNLEFBQUVrQixhQUFlUixhQUFJLENBQW5CUSxZQUNGQyxRQUFRLEVBQUUsRUFDVk4sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNmLGNBQzVDb0IsZUFBZUYsV0FBV0QsVUFBVUUsT0FBT04sY0FBYztnQkFDdkQsSUFBTVEsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0lBQ0E7UUFDRTFCLFdBQVdDO1FBQ1hjLFFBQVEsU0FBQ2EsVUFBVVQ7WUFDakIsSUFBTVUsZUFBZUMsSUFBQUEsYUFBVSxFQUFDRixVQUFVVDtZQUUxQyxPQUFPVTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1FLGdDQUFnQyxJQUFJNUI7SUFFMUMsV0FBZTRCIn0=