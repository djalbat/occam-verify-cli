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
            var term;
            term = (0, _element.termFromTermNode)(termNode, context);
            term = term.validate(context, validateForwards); ///
            if (term !== null) {
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
var StatementPass = /*#__PURE__*/ function(SimplePass) {
    _inherits(StatementPass, SimplePass);
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
}(_occamlanguages.SimplePass);
_define_property(StatementPass, "maps", [
    {
        nodeQuery: statementNodeQuery,
        run: function(statementNode, context) {
            var success = false;
            var statement;
            var stated = true;
            statement = (0, _element.statementFromStatementNode)(statementNode, context);
            statement = statement.validate(stated, context); ///
            if (statement !== null) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: termNodeQuery,
        run: function(termNode, context) {
            var success = false;
            var term;
            term = (0, _element.termFromTermNode)(termNode, context);
            term = term.validate(context, function() {
                var validatesForwards = true;
                return validatesForwards;
            });
            if (term !== null) {
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
function validateTerm(termNode, context, validateForwards) {
    var termValidates = false;
    var node = termNode, sucess = termPass.run(node, context, validateForwards);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhc3MsIEZvcndhcmRQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFRlcm1QYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7ICAvLy9cblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3RhdGVtZW50UGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtUGFzcyA9IG5ldyBUZXJtUGFzcygpLFxuICAgICAgc3RhdGVtZW50UGFzcyA9IG5ldyBTdGF0ZW1lbnRQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0ZXJtUGFzcy5ydW4obm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHN0YXRlbWVudFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlVGVybSIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJUZXJtUGFzcyIsInJ1biIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsIkZvcndhcmRQYXNzIiwibWFwcyIsInRlcm1Ob2RlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm0iLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlU3RyaW5nIiwiZGVidWciLCJTdGF0ZW1lbnRQYXNzIiwiU2ltcGxlUGFzcyIsInN0YXRlbWVudCIsInN0YXRlZCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwidGVybVBhc3MiLCJzdGF0ZW1lbnRQYXNzIiwidGVybVZhbGlkYXRlcyIsIm5vZGUiLCJzdWNlc3MiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVLZ0JBO2VBQUFBOztRQWJBQztlQUFBQTs7OzhCQXhKZTt1QkFHOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNLEFBQUVDLFlBQWNDLDhCQUFjLENBQTVCRDtBQUVSLElBQU1FLGdCQUFnQkYsVUFBVSxVQUMxQkcsZ0JBQWdCSCxVQUFVLFVBQzFCSSxxQkFBcUJKLFVBQVU7QUFFckMsSUFBQSxBQUFNSyx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsYUFBYSxFQUFFQyxPQUFPO2dCQUN4QixJQUFJQyxVQUFVO2dCQUVkLElBQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsWUFBWUg7Z0JBRTNDLElBQUlLLFdBQVc7b0JBQ2JKLFVBQVU7Z0JBQ1o7Z0JBRUEsT0FBT0E7WUFDVDs7O1dBYklKO0VBQWlCVSwyQkFBVztBQWVoQyxpQkFmSVYsVUFlR1csUUFBTztJ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