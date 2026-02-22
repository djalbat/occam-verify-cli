"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // verifyConstructor() {
 //   let constructorValidates = false;
 //
 //   const context = this.getContext(),
 //         constructorString = this.constructor.getString();
 //
 //   context.trace(`Verifying the '${constructorString}' constructor...`);
 //
 //   const term = this.constructor.getTerm(),
 //         termNode = term.getNode(),
 //         termValidates = validateTerm(termNode, context, () => {
 //           const validatesFormards = true;
 //
 //           return validatesFormards;
 //         });
 //
 //   if (termValidates) {
 //     constructorValidates = true;
 //   }
 //
 //   if (constructorValidates) {
 //     context.debug(`...verified the '${constructorString}' constructor.`);
 //   }
 //
 //   return constructorValidates;
 // }
, {
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
            key: "isProvisinal",
            value: function isProvisinal() {
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
                    var verifies, context, constructorDeclarationString, typeVerified, constructorVerifies, constructorTypeVerifies;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        context = this.getContext(), constructorDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                        typeVerified = this.verifyType();
                        if (typeVerified) {
                            constructorVerifies = this.verifyConstructor();
                            if (constructorVerifies) {
                                constructorTypeVerifies = this.verifyConstructorType();
                                if (constructorTypeVerifies) {
                                    context.addConstructor(this.constructor);
                                    verifies = true;
                                }
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
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var context = this.getContext(), typeString = this.type.getString(), constructorDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration's '").concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    var includeSupertypes = false, provisional = this.isProvisional(includeSupertypes), typeComparesToProvisional = type.compareProvisional(provisional);
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
}(_declaration.default), // verifyConstructorType() {
//   let constructorTypeVerifies = false;
//
//   const context = this.getContext(),
//         constructorType = this,
//         constructorTypeString = constructorType.getString(),
//         constructorDeclarationString = this.getString();  ///
//
//   context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${constructorTypeString}' type...`);
//
//   const nominalTypeName = this.type.getNominalTypeName(),
//     typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
//
//   if (!typePresent) {
//     context.debug(`The '${typeString}' type is not present.`);
//   } else {
//     const includeSupertypes = false,
//       provisional = type.isProvisional(includeSupertypes),
//       typeComparesToProvisional = type.compareProvisional(provisional);
//
//     if (!typeComparesToProvisional) {
//       provisional ?
//         context.debug(`The '${typeString}' type is present but not provisional.`) :
//         context.debug(`The '${typeString}' type is present but provisional.`);
//     } else {
//       this.constructor.setType(type);
//
//       constructorTypeVerifies = true;
//     }
//   }
//
//   if (constructorTypeVerifies) {
//     context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${typeString}' type.`);
//   }
//
//   return constructorTypeVerifies;
// }
_define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcm92aXNpb25hbCwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3IoKTtcblxuICAgICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpLFxuICAgICAgICAgICAgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB0aGlzLmNvbnN0cnVjdG9yLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWZXJpZmllcztcbiAgfVxuXG4gIC8vIHZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpIHtcbiAgLy8gICBsZXQgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gIC8vICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gdGhpcyxcbiAgLy8gICAgICAgICBjb25zdHJ1Y3RvclR5cGVTdHJpbmcgPSBjb25zdHJ1Y3RvclR5cGUuZ2V0U3RyaW5nKCksXG4gIC8vICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cbiAgLy9cbiAgLy8gICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke2NvbnN0cnVjdG9yVHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcbiAgLy9cbiAgLy8gICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gIC8vICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIC8vXG4gIC8vICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAvLyAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAvLyAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyksXG4gIC8vICAgICAgIHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG4gIC8vXG4gIC8vICAgICBpZiAoIXR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwpIHtcbiAgLy8gICAgICAgcHJvdmlzaW9uYWwgP1xuICAvLyAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAvLyAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcbiAgLy9cbiAgLy8gICAgICAgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgLy8gICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzO1xuICAvLyB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuXG5cbi8vIHZlcmlmeUNvbnN0cnVjdG9yKCkge1xuLy8gICBsZXQgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSBmYWxzZTtcbi8vXG4vLyAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbi8vICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuLy9cbi8vICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG4vL1xuLy8gICBjb25zdCB0ZXJtID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4vLyAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4vLyAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQsICgpID0+IHtcbi8vICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3JtYXJkcyA9IHRydWU7XG4vL1xuLy8gICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3JtYXJkcztcbi8vICAgICAgICAgfSk7XG4vL1xuLy8gICBpZiAodGVybVZhbGlkYXRlcykge1xuLy8gICAgIGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdHJ1ZTtcbi8vICAgfVxuLy9cbi8vICAgaWYgKGNvbnN0cnVjdG9yVmFsaWRhdGVzKSB7XG4vLyAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBjb25zdHJ1Y3RvclZhbGlkYXRlcztcbi8vIH1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJjb25zdHJ1Y3RvciIsImdldFR5cGUiLCJpc1Byb3Zpc2luYWwiLCJnZXRDb25zdHJ1Y3RvciIsImdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVZlcmlmaWVkIiwiY29uc3RydWN0b3JWZXJpZmllcyIsImNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZSIsInZlcmlmeUNvbnN0cnVjdG9yIiwidmVyaWZ5Q29uc3RydWN0b3JUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsImNvbnN0cnVjdG9yU3RyaW5nIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQSxVQTRKQSx3QkFBd0I7Q0FDeEIsc0NBQXNDO0NBQ3RDLEVBQUU7Q0FDRix1Q0FBdUM7Q0FDdkMsNERBQTREO0NBQzVELEVBQUU7Q0FDRiwwRUFBMEU7Q0FDMUUsRUFBRTtDQUNGLDZDQUE2QztDQUM3QyxxQ0FBcUM7Q0FDckMsa0VBQWtFO0NBQ2xFLDRDQUE0QztDQUM1QyxFQUFFO0NBQ0Ysc0NBQXNDO0NBQ3RDLGNBQWM7Q0FDZCxFQUFFO0NBQ0YseUJBQXlCO0NBQ3pCLG1DQUFtQztDQUNuQyxNQUFNO0NBQ04sRUFBRTtDQUNGLGdDQUFnQztDQUNoQyw0RUFBNEU7Q0FDNUUsTUFBTTtDQUNOLEVBQUU7Q0FDRixpQ0FBaUM7Q0FDakMsSUFBSTs7OztlQXJMSjs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDJDQUFDOzthQUFNQyx1QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMs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