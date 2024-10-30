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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var TermWithConstructorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(TermWithConstructorUnifier, Unifier);
    function TermWithConstructorUnifier() {
        _class_call_check(this, TermWithConstructorUnifier);
        return _call_super(this, TermWithConstructorUnifier, arguments);
    }
    _create_class(TermWithConstructorUnifier, [
        {
            key: "unify",
            value: function unify(constructorTermNode, termNode, context) {
                var termUnifiedWithConstructor;
                var generalNonTerminalNode = constructorTermNode, specificNonTerminalNode = termNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termUnifiedWithConstructor = nonTerminalNodeUnified; ///
                return termUnifiedWithConstructor;
            }
        }
    ]);
    return TermWithConstructorUnifier;
}(_unifier.default);
_define_property(TermWithConstructorUnifier, "maps", [
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, context) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = generalTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = specificTermNode, term = Term.fromTermNode(termNode, context), generalContext = context, specificContext = context, termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiedGivenType) {
                    unified = true;
                }
            }
            return unified;
        }
    }
]);
var termWithConstructorUnifier = new TermWithConstructorUnifier();
var _default = termWithConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1XaXRoQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3I7XG4gIH07XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyID0gbmV3IFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFR5cGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInVuaWZpZWQiLCJUZXJtIiwic2hpbSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJ0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0RBOzs7ZUFBQTs7OzJEQXREaUI7OERBQ0c7cUJBRU07b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsbUJBQW1CLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCSixxQkFDekJLLDBCQUEwQkosVUFDMUJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qkg7Z0JBRTFHQyw2QkFBNkJHLHdCQUF3QixHQUFHO2dCQUV4RCxPQUFPSDtZQUNUOzs7V0FYSUw7RUFBbUNVLGdCQUFPO0FBYTlDLGlCQWJJViw0QkFhR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmI7UUFDbEJjLG1CQUFtQmhCO1FBQ25CSSxPQUFPLFNBQUNhLGlCQUFpQkMsa0JBQWtCWDtZQUN6QyxJQUFJWSxVQUFVO1lBRWQsSUFBTSxBQUFFQyxPQUFTQyxhQUFJLENBQWJELE1BQ0ZFLFdBQVdMLGlCQUNYTSxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0YsV0FDaENHLE9BQU9sQixRQUFRbUIsa0JBQWtCLENBQUNIO1lBRXhDLElBQUlFLFNBQVMsTUFBTTtnQkFDakIsSUFBTW5CLFdBQVdZLGtCQUNYUyxPQUFPUCxLQUFLUSxZQUFZLENBQUN0QixVQUFVQyxVQUNuQ3NCLGlCQUFpQnRCLFNBQ2pCdUIsa0JBQWtCdkIsU0FDbEJ3Qix3QkFBd0JKLEtBQUtLLGVBQWUsQ0FBQ1AsTUFBTUksZ0JBQWdCQztnQkFFekUsSUFBSUMsdUJBQXVCO29CQUN6QlosVUFBVTtnQkFDWjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNYyw2QkFBNkIsSUFBSTlCO0lBRXZDLFdBQWU4QiJ9