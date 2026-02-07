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
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _Section;
var _default = (0, _elements.define)((_Section = /*#__PURE__*/ function(Element) {
    _inherits(Section, Element);
    function Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture) {
        _class_call_check(this, Section);
        var _this;
        _this = _call_super(this, Section, [
            context,
            string,
            node
        ]);
        _this.hypotheses = hypotheses;
        _this.axiom = axiom;
        _this.lemma = lemma;
        _this.theorem = theorem;
        _this.conjecture = conjecture;
        return _this;
    }
    _create_class(Section, [
        {
            key: "getHypotheses",
            value: function getHypotheses() {
                return this.hypotheses;
            }
        },
        {
            key: "getAxiom",
            value: function getAxiom() {
                return this.axiom;
            }
        },
        {
            key: "getLemma",
            value: function getLemma() {
                return this.lemma;
            }
        },
        {
            key: "getTheorem",
            value: function getTheorem() {
                return this.theorem;
            }
        },
        {
            key: "getConjecture",
            value: function getConjecture() {
                return this.conjecture;
            }
        },
        {
            key: "verifyHypotheses",
            value: function verifyHypotheses() {
                var _this = this;
                var hypothesesVerify = this.hypotheses.every(function(hypothesis) {
                    var hypothesisVerifies = hypothesis.verify(_this.context);
                    if (hypothesisVerifies) {
                        return true;
                    }
                });
                return hypothesesVerify;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, sectionString, hypothesesVerify, topLevelAssertion, topLevelAssertionVerifies;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        context = this.getContext(), sectionString = this.getString(); ///
                        context.trace("Verifying the '".concat(sectionString, "' section..."));
                        hypothesesVerify = this.verifyHypotheses();
                        if (hypothesesVerify) {
                            topLevelAssertion = this.axiom || this.lemma || this.theorem || this.conjecture, topLevelAssertionVerifies = topLevelAssertion.verify(context);
                            if (topLevelAssertionVerifies) {
                                topLevelAssertion.setHypotheses(this.hypotheses);
                                verifies = true;
                            }
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(sectionString, "' section."));
                        }
                        return [
                            2,
                            verifies
                        ];
                    });
                }).call(this);
            }
        }
    ]);
    return Section;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Section, "name", "Section"), _Section));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLmxlbW1hID0gbGVtbWE7XG4gICAgdGhpcy50aGVvcmVtID0gdGhlb3JlbTtcbiAgICB0aGlzLmNvbmplY3R1cmUgPSBjb25qZWN0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0QXhpb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBnZXRMZW1tYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW1tYTtcbiAgfVxuXG4gIGdldFRoZW9yZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlb3JlbTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uamVjdHVyZTtcbiAgfVxuXG4gIHZlcmlmeUh5cG90aGVzZXMoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMuaHlwb3RoZXNlcy5ldmVyeSgoaHlwb3RoZXNpcykgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNpc1ZlcmlmaWVzID0gaHlwb3RoZXNpcy52ZXJpZnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzaXNWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlY3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSAodGhpcy5heGlvbSB8fCB0aGlzLmxlbW1hIHx8IHRoaXMudGhlb3JlbSB8fCB0aGlzLmNvbmplY3R1cmUpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyA9IHRvcExldmVsQXNzZXJ0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24uc2V0SHlwb3RoZXNlcyh0aGlzLmh5cG90aGVzZXMpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2VjdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiaHlwb3RoZXNlcyIsImF4aW9tIiwibGVtbWEiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiaHlwb3RoZXNlc1ZlcmlmeSIsImV2ZXJ5IiwiaHlwb3RoZXNpcyIsImh5cG90aGVzaXNWZXJpZmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwic2VjdGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNldEh5cG90aGVzZXMiLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozs4QkFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRCQUFDOzthQUFNQyxRQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0NBRHREUjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsT0FBTyxHQUFHQTtRQUNmLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNYLFVBQVUsQ0FBQ1ksS0FBSyxDQUFDLFNBQUNDO29CQUM5QyxJQUFNQyxxQkFBcUJELFdBQVdFLE1BQU0sQ0FBQyxNQUFLbEIsT0FBTztvQkFFekQsSUFBSWlCLG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFTUksS0FBQUE7bUJBQU4sU0FBTUE7O3dCQUNBQyxVQUVFbkIsU0FDQW9CLGVBSUFOLGtCQUdFTyxtQkFDQUM7O3dCQVhKSCxXQUFXO3dCQUVUbkIsVUFBVSxJQUFJLENBQUN1QixVQUFVLElBQ3pCSCxnQkFBZ0IsSUFBSSxDQUFDSSxTQUFTLElBQUssR0FBRzt3QkFFNUN4QixRQUFReUIsS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRMLGVBQWM7d0JBRXhDTixtQkFBbUIsSUFBSSxDQUFDRCxnQkFBZ0I7d0JBRTlDLElBQUlDLGtCQUFrQjs0QkFDZE8sb0JBQXFCLElBQUksQ0FBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUNDLEtBQUssSUFBSSxJQUFJLENBQUNDLE9BQU8sSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFDaEZlLDRCQUE0QkQsa0JBQWtCSCxNQUFNLENBQUNsQjs0QkFFM0QsSUFBSXNCLDJCQUEyQjtnQ0FDN0JELGtCQUFrQkssYUFBYSxDQUFDLElBQUksQ0FBQ3ZCLFVBQVU7Z0NBRS9DZ0IsV0FBVzs0QkFDYjt3QkFDRjt3QkFFQSxJQUFJQSxVQUFVOzRCQUNabkIsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkUCxlQUFjO3dCQUNsRDt3QkFFQTs7NEJBQU9EOzs7Z0JBQ1Q7Ozs7O3FCQXJFMENTLHVCQUFPLElBdUVqRCwyQkFBT0MsUUFBTyJ9