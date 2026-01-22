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
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
var _elements = require("../elements");
var _context = require("../utilities/context");
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
                var _this = this;
                var verifies = false;
                var node = this.getNode(), deductionString = this.getString(); ///
                context.trace("Verifying the '".concat(deductionString, "' deduction..."), node);
                if (this.statement !== null) {
                    (0, _context.attempt)(function(context) {
                        var stated = true, assignments = null, statementValidates = _this.statement.validate(assignments, stated, context);
                        if (statementValidates) {
                            _this.setContext(context);
                            verifies = true;
                        }
                    }, context);
                } else {
                    context.debug("Unable to verify the '".concat(deductionString, "' deduction because it is nonsense."), node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(deductionString, "' deduction."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var statementString = statement.getString(), deductionString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
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
                var deductionUnifies = false;
                var context = specificContext, generalDeduction = this, specificDeduction = deduction, generalDeductionString = generalDeduction.getString(), specificDeductionString = specificDeduction.getString();
                context.trace("Unifying the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction..."));
                var statement = specificDeduction.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    deductionUnifies = true;
                }
                if (deductionUnifies) {
                    context.debug("...unified the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction."));
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
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), string = statement.getString();
                var deduction = new Deduction(context, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(_wrap_native_super(_element.default)), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIGZyYW1lc0Zyb21KU09OLCBzdGF0ZW1lbnRGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiwgZnJhbWVzVG9GcmFtZXNKU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGZyYW1lcyxcbiAgICAgICAgdGVybXM7XG5cbiAgICBmcmFtZXMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICB0ZXJtcyA9IHRoaXMuY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImRlZHVjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGUiLCJzZXRDb250ZXh0IiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzhEQVBvQjtnRUFDUzt3QkFFTjt1QkFDQztvQkFDeUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakksV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRGxCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE9BQU87O2dCQUNaLElBQUlNLFdBQVc7Z0JBRWYsSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJD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