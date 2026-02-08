"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get validateStatement () {
        return validateStatement;
    },
    get validateTerm () {
        return validateTerm;
    }
});
var _occamlanguages = require("occam-languages");
var _element = require("../utilities/element");
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
var nodeQuery = _occamlanguages.queryUtilities.nodeQuery;
var termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), statementNodeQuery = nodeQuery("/statement");
var TermPass = /*#__PURE__*/ function(ForwardPass) {
    _inherits(TermPass, ForwardPass);
    function TermPass() {
        _class_call_check(this, TermPass);
        return _call_super(this, TermPass, arguments);
    }
    _create_class(TermPass, [
        {
            key: "run",
            value: function run(statementNode, context) {
                var success = false;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return TermPass;
}(_occamlanguages.ForwardPass);
_define_property(TermPass, "maps", [
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context, validateForwards) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, validateForwards);
            if (termValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context, validateForwards) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                var validatesForwards = validateForwards();
                if (validatesForwards) {
                    success = true;
                }
            } else {
                var typeString = nominalTypeName; ///
                context.debug("The '".concat(typeString, "' type is not present."));
                success = false;
            }
            return success;
        }
    }
]);
var StatementPass = /*#__PURE__*/ function(ForwardPass) {
    _inherits(StatementPass, ForwardPass);
    function StatementPass() {
        _class_call_check(this, StatementPass);
        return _call_super(this, StatementPass, arguments);
    }
    _create_class(StatementPass, [
        {
            key: "run",
            value: function run(statementNode, context) {
                var success = false;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
                if (descended) {
                    success = true;
                }
                return success;
            }
        }
    ]);
    return StatementPass;
}(_occamlanguages.ForwardPass);
_define_property(StatementPass, "maps", [
    {
        nodeQuery: statementNodeQuery,
        run: function(statementNode, context) {
            var success = false;
            var statement = (0, _element.statementFromStatementNode)(statementNode, context), assignments = null, stated = false, statementValidates = statement.validate(assignments, stated, context);
            if (statementValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, function() {
                var validatesForwards = true;
                return validatesForwards;
            });
            if (termValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                success = true;
            }
            return success;
        }
    }
]);
var termPass = new TermPass(), statementPass = new StatementPass();
function validateTerm(termNode, context) {
    var termValidates = false;
    var node = termNode, sucess = termPass.run(node, context);
    if (sucess) {
        termValidates = true;
    }
    return termValidates;
}
function validateStatement(statementNode, context) {
    var statementValidates = false;
    var node = statementNode, sucess = statementPass.run(node, context);
    if (sucess) {
        statementValidates = true;
    }
    return statementValidates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGb3J3YXJkUGFzcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFRlcm1QYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdmFsaWRhdGVGb3J3YXJkcygpO1xuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmRzKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IG5vbWluYWxUeXBlTmFtZTsgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIFN0YXRlbWVudFBhc3MgZXh0ZW5kcyBGb3J3YXJkUGFzcyB7XG4gIHJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsY29udGV4dCk7XG5cbiAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtUGFzcyA9IG5ldyBUZXJtUGFzcygpLFxuICAgICAgc3RhdGVtZW50UGFzcyA9IG5ldyBTdGF0ZW1lbnRQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0ZXJtUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHN0YXRlbWVudFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlVGVybSIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJUZXJtUGFzcyIsInJ1biIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsIkZvcndhcmRQYXNzIiwibWFwcyIsInRlcm1Ob2RlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm0iLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZVN0cmluZyIsImRlYnVnIiwiU3RhdGVtZW50UGFzcyIsInN0YXRlbWVudCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ0ZXJtUGFzcyIsInN0YXRlbWVudFBhc3MiLCJub2RlIiwic3VjZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE4SmdCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7Ozs4QkEvSVk7dUJBR2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTSxBQUFFQyxZQUFjQyw4QkFBYyxDQUE1QkQ7QUFFUixJQUFNRSxnQkFBZ0JGLFVBQVUsVUFDMUJHLGdCQUFnQkgsVUFBVSxVQUMxQkkscUJBQXFCSixVQUFVO0FBRXJDLElBQUEsQUFBTUsseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLGFBQWEsRUFBRUMsT0FBTztnQkFDeEIsSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxrQkFBa0JILGVBQ2xCSSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFlBQVksSUFBSSxDQUFDQyxPQUFPLENBQUNILFlBQVdIO2dCQUUxQyxJQUFJSyxXQUFXO29CQUNiSixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7OztXQWJJSjtFQUFpQlUsMkJBQVc7QUFlaEMsaUJBZklWLFVBZUdXLFFBQU87SUFDWjtRQUNF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