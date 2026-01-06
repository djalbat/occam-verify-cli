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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _elements = require("../elements");
var _json = require("../utilities/json");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Deduction;
var _default = (0, _elements.define)((_Deduction = /*#__PURE__*/ function(Element) {
    _inherits(Deduction, Element);
    function Deduction(context, string, node, statement) {
        _class_call_check(this, Deduction);
        var _this;
        _this = _call_super(this, Deduction, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(Deduction, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var deductionString = this.string; ///
                context.trace("Verifying the '".concat(deductionString, "' deduction..."), this.node);
                if (this.statement !== null) {
                    var stated = true, assignments = null, statementVerifies = this.statement.verify(assignments, stated, context);
                    verifies = statementVerifies; ///
                } else {
                    context.debug("Unable to verify the '".concat(deductionString, "' deduction because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(deductionString, "' deduction."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var deduction = this, statementString = statement.getString(), deductionString = deduction.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction..."));
                var generalContext = this.context, specificContext = context; ///
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnifies;
                var context = specificContext, specificDeduction = deduction, generalDeductionString = this.string, specificDeductionString = specificDeduction.getString();
                context.trace("Unifying the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction..."), this.node);
                var statement = specificDeduction.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                deductionUnifies = statementUnifies; ///
                if (deductionUnifies) {
                    context.debug("...unified the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction."), this.node);
                }
                return deductionUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var statement = statementJSON, json = {
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString(), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                context = temporaryContext; ///
                var deduction = new Deduction(context, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(_wrap_native_super(_element.default)), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIGZyYW1lc0Zyb21KU09OLCBzdGF0ZW1lbnRGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiwgZnJhbWVzVG9GcmFtZXNKU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gc3RhdGVtZW50VmVyaWZpZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGZyYW1lcyxcbiAgICAgICAgdGVybXM7XG5cbiAgICBmcmFtZXMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICB0ZXJtcyA9IHRoaXMuY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVuaWZpZXMiLCJkZWR1Y3Rpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbVRlcm1zQW5kRnJhbWVzIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhEQU5vQjtnRUFDUzt3QkFFTjtvQkFDMEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakksV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRGxCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE9BQU87Z0JBQ1osSUFBSU0sV0FBVztnQkFFZixJQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxXQUFXLENBQUNUO2dCQUV0REEsVUFBVU8s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