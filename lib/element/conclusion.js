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
var _Conclusion;
var _default = (0, _elements.define)((_Conclusion = /*#__PURE__*/ function(Element) {
    _inherits(Conclusion, Element);
    function Conclusion(context, string, node, statement) {
        _class_call_check(this, Conclusion);
        var _this;
        _this = _call_super(this, Conclusion, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(Conclusion, [
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
                var node = this.getNode(), conclusionString = this.getString(); ///
                context.trace("Verifying the '".concat(conclusionString, "' conclusion..."), node);
                if (this.statement === null) {
                    context.debug("Unable to verify the '".concat(conclusionString, "' conclusion because it is nonsense."), node);
                } else {
                    var stated = true, assignments = null, statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.setContext(context);
                    context.debug("...verified the '".concat(conclusionString, "' conclusion."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var conclusion = this, statementString = statement.getString(), conclusionString = conclusion.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion..."));
                var generalContext = this.context, specificContext = context; ///
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion."));
                }
                return statementUnifies;
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
                var conclusion = new Conclusion(context, string, node, statement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}(_wrap_native_super(_element.default)), _define_property(_Conclusion, "name", "Conclusion"), _Conclusion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLCBmcmFtZXNGcm9tSlNPTiwgc3RhdGVtZW50RnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04sIGZyYW1lc1RvRnJhbWVzSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCAgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uY2x1c2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IGNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25jbHVzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uY2x1c2lvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0Tm9kZSIsImNvbmNsdXNpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInNldENvbnRleHQiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29uY2x1c2lvbiIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbVRlcm1zQW5kRnJhbWVzIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhEQU5vQjtnRUFDUzt3QkFFTjtvQkFDMEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakksV0FBZ0JBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNmQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURqQko7O2dCQUV6QixrQkFGeUJBO1lBRW5CQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxPQUFPO2dCQUNaLElBQUlNLFdBQVc7Z0JBRWYsSUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0Ms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