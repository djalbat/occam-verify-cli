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
var _termAgainstType = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstType"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var TermAgainstConstructorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(TermAgainstConstructorUnifier, Unifier);
    function TermAgainstConstructorUnifier() {
        _class_call_check(this, TermAgainstConstructorUnifier);
        return _call_super(this, TermAgainstConstructorUnifier, arguments);
    }
    _create_class(TermAgainstConstructorUnifier, [
        {
            key: "unify",
            value: function unify(termNode, constructorTermNode, localContext, unifyAhead) {
                var termUnifiedAgainstConstructor;
                var nonTerminalNodeA = termNode, nonTerminalNodeB = constructorTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);
                termUnifiedAgainstConstructor = nonTerminalNodeUnified; ///
                return termUnifiedAgainstConstructor;
            }
        }
    ]);
    return TermAgainstConstructorUnifier;
}(_unifier.default);
_define_property(TermAgainstConstructorUnifier, "maps", [
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, localContext, unifyAhead) {
            var termUnifiedAgainstType = (0, _termAgainstType.default)(termNodeA, typeNodeB, localContext, unifyAhead);
            return termUnifiedAgainstType;
        }
    }
]);
var termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();
var _default = termAgainstConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlUZXJtQWdhaW5zdFR5cGUgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1BZ2FpbnN0VHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgVGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkodGVybU5vZGUsIGNvbnN0cnVjdG9yVGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1VbmlmaWVkQWdhaW5zdFR5cGUgPSB1bmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0VHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyID0gbmV3IFRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeSIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImxvY2FsQ29udGV4dCIsInVuaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsInRlcm1VbmlmaWVkQWdhaW5zdFR5cGUiLCJ1bmlmeVRlcm1BZ2FpbnN0VHlwZSIsInRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7OERBcENvQjtzRUFDYTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSw4Q0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVEsRUFBRUMsbUJBQW1CLEVBQUVDLFlBQVksRUFBRUMsVUFBVTtnQkFDM0QsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CTCxVQUNuQk0sbUJBQW1CTCxxQkFDbkJNLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQkosY0FBY0M7Z0JBRTNHQyxnQ0FBZ0NHLHdCQUF3QixHQUFHO2dCQUUzRCxPQUFPSDtZQUNUOzs7V0FYSU47RUFBc0NXLGdCQUFPO0FBYWpELGlCQWJJWCwrQkFhR1ksUUFBTztJQUNaO1FBQ0VDLFlBQVloQjtRQUNaaUIsWUFBWWY7UUFDWkUsT0FBTyxTQUFDYyxXQUFXQyxXQUFXWixjQUFjQztZQUMxQyxJQUFNWSx5QkFBeUJDLElBQUFBLHdCQUFvQixFQUFDSCxXQUFXQyxXQUFXWixjQUFjQztZQUV4RixPQUFPWTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1FLGdDQUFnQyxJQUFJbkI7SUFFMUMsV0FBZW1CIn0=