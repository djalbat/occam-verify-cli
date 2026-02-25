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
var _TypePrefixDeclaration;
var _default = (0, _elements.define)((_TypePrefixDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(TypePrefixDeclaration, Declaration);
    function TypePrefixDeclaration(context, string, node, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        var _this;
        _this = _call_super(this, TypePrefixDeclaration, [
            context,
            string,
            node
        ]);
        _this.typePrefix = typePrefix;
        return _this;
    }
    _create_class(TypePrefixDeclaration, [
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.typePrefix;
            }
        },
        {
            key: "getTypePrefixDeclarationNode",
            value: function getTypePrefixDeclarationNode() {
                var node = this.getNode(), typePrefixDeclarationNode = node; ///
                return typePrefixDeclarationNode;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, typePrefixDeclarationString, includeRelease, includeDependencies, types, typesLength, typePrefixVerifies;
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
                                typePrefixDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."));
                                includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                                if (typesLength === 0) {
                                    typePrefixVerifies = this.verifyTypePrefix();
                                    if (typePrefixVerifies) {
                                        context.addTypePrefix(this.typePrefix);
                                        verifies = true;
                                    }
                                } else {
                                    context.debug("Unable to verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."));
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."));
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
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var context = this.getContext(), typePrefixString = this.typePrefix.getString();
                context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."));
                var typePrefix = context.getTypePrefix();
                if (typePrefix !== null) {
                    context.trace("The package already has a '".concat(typePrefixString, "' type prefix."));
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        context.debug("The '".concat(typePrefixString, "' type prefix is already present."));
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            context.debug("The '".concat(typePrefixString, "' type is already present."));
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    context.debug("...verified the '".concat(typePrefixString, "' type prefix."));
                }
                return typePrefixVerifies;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlcyA9IGNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFR5cGVQcmVmaXgodGhpcy50eXBlUHJlZml4KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMudHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLnR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVzIiwidHlwZXNMZW5ndGgiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFR5cGVzIiwibGVuZ3RoIiwidmVyaWZ5VHlwZVByZWZpeCIsImFkZFR5cGVQcmVmaXgiLCJkZWJ1ZyIsInR5cGVQcmVmaXhTdHJpbmciLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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