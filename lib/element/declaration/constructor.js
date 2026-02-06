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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _elements = require("../../elements");
var _validate = require("../../process/validate");
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
var _ConstructorDeclaration;
var _default = (0, _elements.define)((_ConstructorDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(ConstructorDeclaration, Declaration);
    function ConstructorDeclaration(context, string, node, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        var _this;
        _this = _call_super(this, ConstructorDeclaration, [
            context,
            string,
            node
        ]);
        _this.constructor = constructor;
        return _this;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, constructorDeclarationString, constructorTypeVerifies, constructorValidates;
                    return _ts_generator(this, function(_state) {
                        node = this.getNode(), context = this.getContext(), constructorDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."), node);
                        constructorTypeVerifies = this.verifyConstructorType();
                        if (constructorTypeVerifies) {
                            constructorValidates = this.verifyConstructor();
                            if (constructorValidates) {
                                context.addConstructor(this.constructor);
                                verifies = true;
                            }
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."), node);
                        }
                        return [
                            2,
                            verifies
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorValidates = false;
                var node = this.getNode(), context = this.getContext(), constructorString = this.constructor.getString();
                context.trace("Verifying the '".concat(constructorString, "' constructor..."), node);
                var term = this.constructor.getTerm(), termNode = term.getNode(), termValidates = (0, _validate.validateTerm)(termNode, context);
                if (termValidates) {
                    constructorValidates = true;
                }
                if (constructorValidates) {
                    context.debug("...verified the '".concat(constructorString, "' constructor."), node);
                }
                return constructorValidates;
            }
        },
        {
            key: "verifyConstructorType",
            value: function verifyConstructorType() {
                var constructorTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.constructor.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."), node);
                var nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional."), node) : context.debug("The '".concat(typeString, "' type is present but provisional."), node);
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return constructorTypeVerifies;
            }
        }
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclZhbGlkYXRlcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3IoKTtcblxuICAgICAgaWYgKGNvbnN0cnVjdG9yVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdmFsaWRhdGVUZXJtKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdHJ1Y3RvclZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWYWxpZGF0ZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvclR5cGUoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpLFxuICAgICAgICAgICAgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmAsIG5vZGUpIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImNvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyIsImNvbnN0cnVjdG9yVmFsaWRhdGVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUNvbnN0cnVjdG9yVHlwZSIsInZlcmlmeUNvbnN0cnVjdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztrRUFMd0I7d0JBRUQ7d0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBTSwyQ0FBQzs7YUFBTUMsdUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVc7Z0NBRHBCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLLFdBQVcsR0FBR0M7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVztZQUN6Qjs7O1lBRU1DLEtBQUFBO21CQUFOLFNBQU1BOzt3QkFDQUMsVUFFRUosTUFDQUYsU0FDQU8sOEJBSUFDLHlCQUdFQzs7d0JBVEZQLE9B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