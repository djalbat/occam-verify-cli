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
var _occamfurtle = require("occam-furtle");
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
var nodeQuery = _occamfurtle.queryUtilities.nodeQuery;
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
        run: function(termNode, context, validateAhead) {
            var success = false;
            var term = (0, _element.termFromTermNode)(termNode, context), termValidates = term.validate(context, validateAhead);
            if (termValidates) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        run: function(typeNode, context, validateAhead) {
            var success = false;
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                var verifiesAhead = validateAhead();
                if (verifiesAhead) {
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
                var verifiesAhead = true;
                return verifiesAhead;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGb3J3YXJkUGFzcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFRlcm1QYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCwgdmFsaWRhdGVBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVBaGVhZCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlQWhlYWQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB2YWxpZGF0ZUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAodmVyaWZpZXNBaGVhZCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBub21pbmFsVHlwZU5hbWU7IC8vL1xuXG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuXG4gICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBTdGF0ZW1lbnRQYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1QYXNzID0gbmV3IFRlcm1QYXNzKCksXG4gICAgICBzdGF0ZW1lbnRQYXNzID0gbmV3IFN0YXRlbWVudFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGVybSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHRlcm1QYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZhbGlkYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gc3RhdGVtZW50UGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVUZXJtIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0ZXJtTm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlRlcm1QYXNzIiwicnVuIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJkZXNjZW5kIiwiRm9yd2FyZFBhc3MiLCJtYXBzIiwidGVybU5vZGUiLCJ2YWxpZGF0ZUFoZWFkIiwidGVybSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidmVyaWZpZXNBaGVhZCIsInR5cGVTdHJpbmciLCJkZWJ1ZyIsIlN0YXRlbWVudFBhc3MiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidGVybVBhc3MiLCJzdGF0ZW1lbnRQYXNzIiwibm9kZSIsInN1Y2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOEpnQkE7ZUFBQUE7O1FBYkFDO2VBQUFBOzs7OEJBL0lZOzJCQUNHO3VCQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU0sQUFBRUMsWUFBY0MsMkJBQWMsQ0FBNUJEO0FBRVIsSUFBTUUsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLHFCQUFxQkosVUFBVTtBQUVyQyxJQUFBLEFBQU1LLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxhQUFhLEVBQUVDLE9BQU87Z0JBQ3hCLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDSCxZQUFXSDtnQkFFMUMsSUFBSUssV0FBVztvQkFDYkosVUFBVTtnQkFDWjtnQkFFQSxPQUFPQTtZQUNUOzs7V0FiSUo7RUFBaUJVLDJCQUFXO0FBZWhDLGlCQWZJVixVQWVHVyxRQUFPO0lBQ1o7UUFDRWhCLFdBQVdFO1FBQ1hJLEtBQUssU0FBQ1csVUFBVVQs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