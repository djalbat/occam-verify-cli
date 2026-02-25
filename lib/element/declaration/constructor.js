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
    function ConstructorDeclaration(context, string, node, type, provisional, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        var _this;
        _this = _call_super(this, ConstructorDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.provisional = provisional;
        _this.constructor = constructor;
        return _this;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.provisional;
            }
        },
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "getConstructorDeclarationNode",
            value: function getConstructorDeclarationNode() {
                var node = this.getNode(), constructorDeclarationNode = node; ///
                return constructorDeclarationNode;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, constructorDeclarationString, typeVerified, constructorVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                context = this.getContext();
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                constructorDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                                typeVerified = this.verifyType();
                                if (typeVerified) {
                                    constructorVerifies = this.verifyConstructor();
                                    if (constructorVerifies) {
                                        this.constructor.setType(this.type);
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
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var context = this.getContext(), typeString = this.type.getString(), constructorDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration's '").concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    var provisional = this.isProvisional(), typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional.")) : context.debug("The '".concat(typeString, "' type is present but provisional."));
                    } else {
                        this.type = type;
                        typeVerifies = true;
                    }
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration's '").concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerifies;
                var context = this.getContext(), constructorString = this.constructor.getString(), constructorDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration's '").concat(constructorString, "' constructor..."));
                constructorVerifies = this.constructor.verify(context);
                if (constructorVerifies) {
                    context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration's '").concat(constructorString, "' constructor."));
                }
                return constructorVerifies;
            }
        }
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcm92aXNpb25hbCwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllcyA9IHRoaXMuY29uc3RydWN0b3IudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJwcm92aXNpb25hbCIsImNvbnN0cnVjdG9yIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRDb25zdHJ1Y3RvciIsImdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVZlcmlmaWVkIiwiY29uc3RydWN0b3JWZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZSIsInZlcmlmeUNvbnN0cnVjdG9yIiwic2V0VHlwZSIsImFkZENvbnN0cnVjdG9yIiwiZGVidWciLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJjb25zdHJ1Y3RvclN0cmluZyIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7a0VBSndCO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMkNBQUM7O2FBQU1DLHVCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztnQ0FEdkNOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUssV0FBVyxHQUFHQzs7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLE9BQU8sSUFBSSxDQUFDUSxPQUFPLElBQ25CQyw2QkFBNkJULE1BQU0sR0FBRztnQkFFNUMsT0FBT1M7WUFDVDs7O1lBRU1DLEtBQUFBO21CQUFOLFNBQU1BOzt3QkFDQUMsVUFFRWIsU0FJQWMsOEJBSUFDLGNBR0VDOzs7O2dDQWJKSCxXQUFXO2dDQUVUYixVQUFVLElBQUksQ0FBQ2lCLFVBQVU7Z0NBRS9COztvQ0FBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ2xCOzs7Z0NBQWpCO2dDQUVNYywrQkFBK0IsSUFBSSxDQUFDSyxTQUFTLElBQUssR0FBRztnQ0FFM0RuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCTiw4QkFBNkI7Z0NBRXZEQyxlQUFlLElBQUksQ0FBQ00sVUFBVTtnQ0FFcEMsSUFBSU4sY0FBYztvQ0FDVkMsc0JBQXNCLElBQUksQ0FBQ00saUJBQWlCO29DQUVsRCxJQUFJTixxQkFBcUI7d0NBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUNPLE9BQU8sQ0FBQyxJQUFJLENBQUNwQixJQUFJO3dDQUVsQ0gsUUFBUXdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVzt3Q0FFdkNYLFdBQVc7b0NBQ2I7Z0NBQ0Y7Z0NBRUEsSUFBSUEsVUFBVTtvQ0FDWmIsUUFBUXlCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QlgsOEJBQTZCO2dDQUNqRTtnQ0FFQTs7b0NBQU9EOzs7O2dCQUNUOzs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSyxlQUFlO2dCQUVuQixJQUFNMUIsVUFBVSxJQUFJLENBQUNpQixVQUFVLElBQ3pCVSxhQUFhLElBQUksQ0FBQ3hCLElBQUksQ0FBQ2dCLFNBQVMsSUFDaENMLCtCQUErQixJQUFJLENBQUNLLFNBQVMsSUFBSyxHQUFHO2dCQUUzRG5CLFFBQVFvQixLQUFLLENBQUMsQUFBQyxrQkFBNkVPLE9BQTVEYiw4QkFBNkIsaUNBQTBDLE9BQVhhLFlBQVc7Z0JBRXZHLElBQU1DLGtCQUFrQixJQUFJLENBQUN6QixJQUFJLENBQUMwQixrQkFBa0IsSUFDOUMxQixPQUFPSCxRQUFROEIseUJBQXlCLENBQUNGO2dCQUUvQyxJQUFJekIsU0FBUyxNQUFNO29CQUNqQixJQUFNQyxjQUFjLElBQUksQ0FBQ0csYUFBYSxJQUNoQ3dCLDRCQUE0QjVCLEtBQUs2QixrQkFBa0IsQ0FBQzVCO29CQUUxRCxJQUFJLENBQUMyQiwyQkFBMkI7d0JBQzlCM0IsY0FDRUosUUFBUXlCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhFLFlBQVcsNkNBQy9CM0IsUUFBUXlCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhFLFlBQVc7b0JBQ3ZDLE9BQU87d0JBQ0wsSUFBSSxDQUFDeEIsSUFBSSxHQUFHQTt3QkFFWnVCLGVBQWU7b0JBQ2pCO2dCQUNGLE9BQU87b0JBQ0wxQixRQUFReUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEUsWUFBVztnQkFDbkM7Z0JBRUEsSUFBSUQsY0FBYztvQkFDaEIxQixRQUFReUIsS0FBSyxDQUFDLEFBQUMsb0JBQStFRSxPQUE1RGIsOEJBQTZCLGlDQUEwQyxPQUFYYSxZQUFXO2dCQUMzRztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlOO2dCQUVKLElBQU1oQixVQUFVLElBQUksQ0FBQ2lCLFVBQVUsSUFDekJnQixvQkFBb0IsSUFBSSxDQUFDLFdBQVcsQ0FBQ2QsU0FBUyxJQUM5Q0wsK0JBQStCLElBQUksQ0FBQ0ssU0FBUyxJQUFLLEdBQUc7Z0JBRTNEbkIsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLGtCQUE2RWEsT0FBNURuQiw4QkFBNkIsaUNBQWlELE9BQWxCbUIsbUJBQWtCO2dCQUU5R2pCLHNCQUFzQixJQUFJLENBQUMsV0FBVyxDQUFDSixNQUFNLENBQUNaO2dCQUU5QyxJQUFJZ0IscUJBQXFCO29CQUN2QmhCLFFBQVF5QixLQUFLLENBQUMsQUFBQyxvQkFBK0VRLE9BQTVEbkIsOEJBQTZCLGlDQUFpRCxPQUFsQm1CLG1CQUFrQjtnQkFDbEg7Z0JBRUEsT0FBT2pCO1lBQ1Q7Ozs7RUFoSHlEa0Isb0JBQVcsR0FrSHBFLDBDQUFPQyxRQUFPIn0=