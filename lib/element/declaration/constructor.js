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
            key: "getConstructorDeclarationNode",
            value: function getConstructorDeclarationNode() {
                var node = this.getNode(), constructorDeclarationNode = node; ///
                return constructorDeclarationNode;
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
        }
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZhbGlkYXRlcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpIHtcbiAgICBsZXQgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGxldCB0eXBlO1xuXG4gICAgdHlwZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbClcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKSxcbiAgICAgICAgICAgIHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvclR5cGUoKTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImNvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3IiLCJnZXRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInZlcmlmeUNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JWYWxpZGF0ZXMiLCJnZXRDb250ZXh0IiwiY29uc3RydWN0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJnZXRUZXJtIiwidGVybU5vZGUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZGVidWciLCJ2ZXJpZnlDb25zdHJ1Y3RvclR5cGUiLCJjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsInNldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJhZGRDb25zdHJ1Y3RvciIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7a0VBTHdCO3dCQUVEO3dCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sMkNBQUM7O2FBQU1DLHVCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXO2dDQURwQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBSyxXQUFXLEdBQUdDOzs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDekI7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