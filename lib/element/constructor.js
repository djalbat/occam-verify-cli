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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _context = require("../utilities/context");
var _instantiate = require("../process/instantiate");
var _verify = require("../process/verify");
var _unify = require("../process/unify");
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
var _Constructor;
var _default = (0, _elements.define)((_Constructor = /*#__PURE__*/ function(Element) {
    _inherits(Constructor, Element);
    function Constructor(context, string, node, term) {
        _class_call_check(this, Constructor);
        var _this;
        _this = _call_super(this, Constructor, [
            context,
            string,
            node
        ]);
        _this.term = term;
        return _this;
    }
    _create_class(Constructor, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var node = this.getNode(), constructorNode = node; ///
                return constructorNode;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string;
                var type = this.getType();
                if (type === null) {
                    var termString = this.term.getString();
                    string = termString; ///
                } else {
                    var typeString = type.getString(), termString1 = this.term.getString();
                    string = "".concat(termString1, ".").concat(typeString);
                }
                return string;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.term.setType(type);
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var _this = this;
                var verifies = false;
                var constructorString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorString, "' constructor..."));
                (0, _context.attempt)(function(context) {
                    var termVerifiesAsConstructor = (0, _verify.verifyTermAsConstructor)(_this.term, context);
                    if (termVerifiesAsConstructor) {
                        _this.setContext(context);
                        verifies = true;
                    }
                }, context);
                if (verifies) {
                    context.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return verifies;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, validateForwards) {
                var termUnifies = false;
                var termString = term.getString(), constructorString = this.getString(); ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."));
                var specifiContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specifiContext; ///
                var constructor = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, generalContext, specifiContext);
                if (termUnifiesWithConstructor) {
                    var validatesForwards;
                    var type = this.getType();
                    term.setType(type);
                    validatesForwards = validateForwards();
                    termUnifies = validatesForwards; ///
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."));
                }
                return termUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json1 = {
                    term: term
                };
                return json1;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json1, context) {
                var string = json1.string, node = nodeFromString(string, context), term = (0, _json.termFromJSON)(json1, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json1, context);
                context = ephemeralContext; ///
                var constructor = new Constructor(context, string, node, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Constructor, "name", "Constructor"), _Constructor));
function nodeFromString(string, context) {
    var string = json.string, node = (0, _context.literally)(function(context) {
        var constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode; ///
        return node;
    }, context);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04sIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHsgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgdGVybVVuaWZpZXMgPSB2YWxpZGF0ZXNGb3J3YXJkczsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBub2RlID0gbm9kZUZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbm9kZUZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICBub2RlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gaW5zdGFudGlhdGVDb25zdHJ1Y3RvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuXG4gIHJldHVybiBub2RlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZ2V0VGVybSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ0eXBlIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJzZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5VGVybSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm5vZGVGcm9tU3RyaW5nIiwidGVybUZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIiwibGl0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