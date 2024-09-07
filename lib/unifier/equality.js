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
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _termAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstTerm"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!");
var EqualityUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EqualityUnifier, Unifier);
    function EqualityUnifier() {
        _class_call_check(this, EqualityUnifier);
        return _call_super(this, EqualityUnifier, arguments);
    }
    _create_class(EqualityUnifier, [
        {
            key: "unify",
            value: function unify(leftTermNode, rightTermNode, localContext) {
                var equalityUnified;
                var nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
                    var unifiedAhead = true;
                    return unifiedAhead;
                });
                equalityUnified = nonTerminalNodeUnified; ///
                return equalityUnified;
            }
        }
    ]);
    return EqualityUnifier;
}(_unifier.default);
_define_property(EqualityUnifier, "maps", [
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termNodeA, termNodeB, localContext, unifyAhead) {
            var termVerifiedAgainstTerm;
            termVerifiedAgainstTerm = (0, _termAgainstTerm.default)(termNodeA, termNodeB, localContext, unifyAhead);
            if (!termVerifiedAgainstTerm) {
                var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext, unifyAhead);
                termVerifiedAgainstTerm = childNodesVerified; ///
            }
            return termVerifiedAgainstTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFRlcm1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpO1xuXG5jbGFzcyBFcXVhbGl0eVVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHlVbmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdW5pZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHVuaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGVxdWFsaXR5VW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5VW5pZmllZDtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm07XG5cbiAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm0gPSB1bmlmeVRlcm1BZ2FpbnN0VGVybSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAoIXRlcm1WZXJpZmllZEFnYWluc3RUZXJtKSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IGVxdWFsaXR5VW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm0gPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YWxpdHlVbmlmaWVyID0gbmV3IEVxdWFsaXR5VW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbGl0eVVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxvY2FsQ29udGV4dCIsImVxdWFsaXR5VW5pZmllZCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidW5pZmllZEFoZWFkIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInVuaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybSIsInVuaWZ5VGVybUFnYWluc3RUZXJtIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwiZXF1YWxpdHlVbmlmaWVyIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7OERBckRvQjtzRUFDYTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUMsZ0NBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDN0MsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CSixjQUNuQkssbUJBQW1CSixlQUNuQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCSCxjQUFjO29CQUNuRyxJQUFNTSxlQUFlO29CQUVyQixPQUFPQTtnQkFDVDtnQkFFTkwsa0JBQWtCRyx3QkFBd0IsR0FBRztnQkFFN0MsT0FBT0g7WUFDVDs7O1dBZklMO0VBQXdCVyxnQkFBTztBQWlCbkMsaUJBakJJWCxpQkFpQkdZLFFBQU87SUFDWjtRQUNFQyxZQUFZZjtRQUNaZ0IsWUFBWWhCO1FBQ1pHLE9BQU8sU0FBQ2MsV0FBV0MsV0FBV1osY0FBY2E7WUFDMUMsSUFBSUM7WUFFSkEsMEJBQTBCQyxJQUFBQSx3QkFBb0IsRUFBQ0osV0FBV0MsV0FBV1osY0FBY2E7WUFFbkYsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBQzVCLElBQU1aLG1CQUFtQlMsV0FDbkJSLG1CQUFtQlMsV0FDbkJJLDZCQUE2QmQsaUJBQWlCZSxhQUFhLElBQzNEQyw2QkFBNkJmLGlCQUFpQmMsYUFBYSxJQUMzREUsY0FBY0gsNEJBQ2RJLGNBQWNGLDRCQUNkRyxxQkFBcUJDLGdCQUFnQkMsZUFBZSxDQUFDSixhQUFhQyxhQUFhcEIsY0FBY2E7Z0JBRW5HQywwQkFBMEJPLG9CQUFvQixHQUFHO1lBQ25EO1lBRUEsT0FBT1A7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNUSxrQkFBa0IsSUFBSTFCO0lBRTVCLFdBQWUwQiJ9