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
var _occamfurtle = require("occam-furtle");
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
var define = _occamfurtle.elements.define;
var _default = define((_Conclusion = /*#__PURE__*/ function(Element) {
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
                var _this = this;
                var verifies = false;
                var node = this.getNode(), conclusionString = this.getString(); ///
                context.trace("Verifying the '".concat(conclusionString, "' conclusion..."), node);
                if (this.statement !== null) {
                    (0, _context.attempt)(function(context) {
                        var stated = true, assignments = null, statementValidates = _this.statement.validate(assignments, stated, context);
                        if (statementValidates) {
                            _this.setContext(context);
                            verifies = true;
                        }
                    }, context);
                } else {
                    context.debug("Unable to verify the '".concat(conclusionString, "' conclusion because it is nonsense."), node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(conclusionString, "' conclusion."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var statementString = statement.getString(), conclusionString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
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
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), node = null, string = statement.getString();
                context = ephemeralContext; ///
                var conclusion = new Conclusion(context, string, node, statement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Conclusion, "name", "Conclusion"), _Conclusion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLCBmcmFtZXNGcm9tSlNPTiwgc3RhdGVtZW50RnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04sIGZyYW1lc1RvRnJhbWVzSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0ICBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25jbHVzaW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25jbHVzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIkNvbmNsdXNpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImNvbmNsdXNpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwic2V0Q29udGV4dCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInRvSlNPTiIsImZyYW1lcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0VGVybXMiLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJjb25jbHVzaW9uIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJCQVBrQzt1QkFFVjtvQkFDeUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpJLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZ0JBLG9DQUFPOzthQUFNRSxXQUNmQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURqQko7O2dCQUV6QixrQkFGeUJBO1lBRW5CQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxPQUFPOztnQkFDWixJQUFJTSxXQUFXO2dCQUVmLElBQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFL0NULFFBQVFVLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQkYsa0JBQWlCLG9CQUFrQk47Z0JBRW5F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