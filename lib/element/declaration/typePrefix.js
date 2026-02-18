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
                        context.trace("The '".concat(typePrefixString, "' type prefix is already present."));
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            context.trace("The '".concat(typePrefixString, "' type is already present."));
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
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, typePrefixDeclarationString, includeRelease, includeDependencies, types, typesLength, typePrefixVerifies;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        context = this.getContext(), typePrefixDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."));
                        includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                        if (typesLength > 0) {
                            context.debug("Unable to verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."));
                        } else {
                            typePrefixVerifies = this.verifyTypePrefix();
                            if (typePrefixVerifies) {
                                context.addTypePrefix(this.typePrefix);
                                verifies = true;
                            }
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."));
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
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgcGFja2FnZSBhbHJlYWR5IGhhcyBhICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZXMgPSBjb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5VHlwZVByZWZpeCIsInR5cGVQcmVmaXhWZXJpZmllcyIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZXMiLCJ0eXBlc0xlbmd0aCIsImdldFR5cGVzIiwibGVuZ3RoIiwiYWRkVHlwZVByZWZpeCIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7a0VBSndCO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURuQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsNEJBQTRCTCxNQUFNLEdBQUc7Z0JBRTNDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNVCxVQUFVLElBQUksQ0FBQ1UsVUFBVSxJQUN6QkMsbUJBQW1CLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxTQUFTO2dCQUVsRFosUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRixrQkFBaUI7Z0JBRWpELElBQU1SLGFBQWFILFFBQVFJLGFBQWE7Z0JBRXhDLElBQUlELGVBQWUsTUFBTTtvQkFDdkJILFFBQVFhLEtBQUssQ0FBQyxBQUFDLDhCQUE4QyxPQUFqQkYsa0JBQWlCO2dCQUMvRCxPQUFPO29CQUVMLElBQU1HLGlCQUFpQixJQUFJLENBQUNYLFVBQVUsQ0FBQ1ksT0FBTyxJQUN4Q0Msb0JBQW9CaEIsUUFBUWlCLG1DQUFtQyxDQUFDSDtvQkFFdEUsSUFBSUUsbUJBQW1CO3dCQUNyQmhCLFFBQVFhLEtBQUssQ0FBQyxBQUFDLFFBQXdCLE9BQWpCRixrQkFBaUI7b0JBQ3pDLE9BQU87d0JBQ0wsSUFBTU8sa0JBQWtCSixnQkFDbEJLLGNBQWNuQixRQUFRb0IsOEJBQThCLENBQUNGO3dCQUUzRCxJQUFJQyxhQUFhOzRCQUNmbkIsUUFBUWEsS0FBSyxDQUFDLEFBQUMsUUFBd0IsT0FBakJGLGtCQUFpQjt3QkFDekMsT0FBTzs0QkFDTEYscUJBQXFCO3dCQUN2QjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCVCxRQUFRcUIsS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCVixrQkFBaUI7Z0JBQ3JEO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVNYSxLQUFBQTttQkFBTixTQUFNQTs7d0JBQ0FDLFVBRUV2QixTQUNBd0IsNkJBSUFDLGdCQUNBQyxxQkFDQUMsT0FDQUMsYUFLRW5COzt3QkFmSmMsV0FBVzt3QkFFVHZCLFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCYyw4QkFBOEIsSUFBSSxDQUFDWixTQUFTLElBQUssR0FBRzt3QkFFMURaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QlcsNkJBQTRCO3dCQUV0REMsaUJBQWlCLE1BQ2pCQyxzQkFBc0IsT0FDdEJDLFFBQVEzQixRQUFRNkIsUUFBUSxDQUFDSixnQkFBZ0JDLHNCQUN6Q0UsY0FBY0QsTUFBTUcsTUFBTTt3QkFFaEMsSUFBSUYsY0FBYyxHQUFHOzRCQUNuQjVCLFFBQVFxQixLQUFLLENBQUMsQUFBQyx5QkFBb0QsT0FBNUJHLDZCQUE0Qjt3QkFDckUsT0FBTzs0QkFDQ2YscUJBQXFCLElBQUksQ0FBQ0QsZ0JBQWdCOzRCQUVoRCxJQUFJQyxvQkFBb0I7Z0NBQ3RCVCxRQUFRK0IsYUFBYSxDQUFDLElBQUksQ0FBQzVCLFVBQVU7Z0NBRXJDb0IsV0FBVzs0QkFDYjt3QkFDRjt3QkFFQSxJQUFJQSxVQUFVOzRCQUNadkIsUUFBUXFCLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1QkcsNkJBQTRCO3dCQUNoRTt3QkFFQTs7NEJBQU9EOzs7Z0JBQ1Q7Ozs7O0VBdEZ3RFMsb0JBQVcsR0F3Rm5FLHlDQUFPQyxRQUFPIn0=