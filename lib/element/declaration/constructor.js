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
                    var verifies, context, constructorDeclarationString, constructorTypeVerifies, constructorValidates;
                    return _ts_generator(this, function(_state) {
                        context = this.getContext(), constructorDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                        constructorTypeVerifies = this.verifyConstructorType();
                        if (constructorTypeVerifies) {
                            constructorValidates = this.verifyConstructor();
                            if (constructorValidates) {
                                context.addConstructor(this.constructor);
                                verifies = true;
                            }
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
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
                var context = this.getContext(), constructorString = this.constructor.getString();
                context.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var term = this.constructor.getTerm(), termNode = term.getNode(), termValidates = (0, _validate.validateTerm)(termNode, context);
                if (termValidates) {
                    constructorValidates = true;
                }
                if (constructorValidates) {
                    context.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return constructorValidates;
            }
        },
        {
            key: "verifyConstructorType",
            value: function verifyConstructorType() {
                var constructorTypeVerifies = false;
                var context = this.getContext();
                var type;
                type = this.constructor.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."));
                var nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional.")) : context.debug("The '".concat(typeString, "' type is present but provisional."));
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."));
                }
                return constructorTypeVerifies;
            }
        }
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3JUeXBlKCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3RvclZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3JUeXBlKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpLFxuICAgICAgICAgICAgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImNvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyIsImNvbnN0cnVjdG9yVmFsaWRhdGVzIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5Q29uc3RydWN0b3JUeXBlIiwidmVyaWZ5Q29uc3RydWN0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImRlYnVnIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0ZXJtIiwiZ2V0VGVybSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztrRUFMd0I7d0JBRUQ7d0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBTSwyQ0FBQzs7YUFBTUMsdUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVc7Z0NBRHBCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLLFdBQVcsR0FBR0M7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVztZQUN6Qjs7O1lBRU1DLEtBQUFBO21CQUFOLFNBQU1BOzt3QkFDQUMsVUFFRU4sU0FDQU8sOEJBSUFDLHlCQUdFQzs7d0JBUkZULFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCSCwrQkFBK0IsSUFBSSxDQUFDSSxTQUFTLElBQUksR0FBRzt3QkFFMURYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUE4QyxPQUE3QkwsOEJBQTZCO3dCQUV2REMsMEJBQTBCLElBQUksQ0FBQ0sscUJBQXFCO3dCQUUxRCxJQUFJTCx5QkFBeUI7NEJBQ3JCQyx1QkFBdUIsSUFBSSxDQUFDSyxpQkFBaUI7NEJBRW5ELElBQUlMLHNCQUFzQjtnQ0FDeEJULFFBQVFlLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQ0FFdkNULFdBQVc7NEJBQ2I7d0JBQ0Y7d0JBRUEsSUFBSUEsVUFBVTs0QkFDWk4sUUFBUWdCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QlQsOEJBQTZCO3dCQUNqRTt3QkFFQTs7NEJBQU9EOzs7Z0JBQ1Q7Ozs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlMLHVCQUF1QjtnQkFFM0IsSUFBTVQsVUFBVSxJQUFJLENBQUNVLFVBQVUsSUFDekJPLG9CQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDTixTQUFTO2dCQUVwRFgsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCSyxtQkFBa0I7Z0JBRWxELElBQU1DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQ0MsT0FBTyxJQUMvQkMsV0FBV0YsS0FBS0csT0FBTyxJQUN2QkMsZ0JBQWdCQyxJQUFBQSxzQkFBWSxFQUFDSCxVQUFVcEI7Z0JBRTdDLElBQUlzQixlQUFlO29CQUNqQmIsdUJBQXVCO2dCQUN6QjtnQkFFQSxJQUFJQSxzQkFBc0I7b0JBQ3hCVCxRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCQyxtQkFBa0I7Z0JBQ3REO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUwsMEJBQTBCO2dCQUU5QixJQUFNUixVQUFVLElBQUksQ0FBQ1UsVUFBVTtnQkFFL0IsSUFBSWM7Z0JBRUpBLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQ0MsT0FBTztnQkFFL0IsSUFBTUMsYUFBYUYsS0FBS2IsU0FBUztnQkFFakNYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYYyxZQUFXO2dCQUUzQyxJQUFNQyxrQkFBa0JILEtBQUtJLGtCQUFrQjtnQkFFL0NKLE9BQU94QixRQUFRNkIseUJBQXlCLENBQUNGO2dCQUV6QyxJQUFNRyxjQUFlTixTQUFTO2dCQUU5QixJQUFJLENBQUNNLGFBQWE7b0JBQ2hCOUIsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhVLFlBQVc7Z0JBQ25DLE9BQU87b0JBQ0wsSUFBTUssb0JBQW9CLE9BQ3BCQyxjQUFjUixLQUFLUyxhQUFhLENBQUNGLG9CQUNqQ0csNEJBQTRCVixLQUFLVyxrQkFBa0IsQ0FBQ0g7b0JBRTFELElBQUksQ0FBQ0UsMkJBQTJCO3dCQUM5QkYsY0FDRWhDLFFBQVFnQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYVSxZQUFXLDZDQUMvQjFCLFFBQVFnQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYVSxZQUFXO29CQUN2QyxPQUFPO3dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUNVLE9BQU8sQ0FBQ1o7d0JBRXpCaEIsMEJBQTBCO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJQSx5QkFBeUI7b0JBQzNCUixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhVLFlBQVc7Z0JBQy9DO2dCQUVBLE9BQU9sQjtZQUNUOzs7O0VBdkd5RDZCLG9CQUFXLEdBeUdwRSwwQ0FBT0MsUUFBTyJ9