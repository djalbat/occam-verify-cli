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
var _necessary = require("necessary");
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _elements = require("../../elements");
var _context = require("../../utilities/context");
var _unify = require("../../process/unify");
var _json = require("../../utilities/json");
var _instantiate = require("../../process/instantiate");
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
var _SubproofAssertion;
var match = _necessary.arrayUtilities.match;
var _default = (0, _elements.define)((_SubproofAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(SubproofAssertion, Assertion);
    function SubproofAssertion(context, string, node, statements) {
        _class_call_check(this, SubproofAssertion);
        var _this;
        _this = _call_super(this, SubproofAssertion, [
            context,
            string,
            node
        ]);
        _this.statements = statements;
        return _this;
    }
    _create_class(SubproofAssertion, [
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "getSubproofAssertionNode",
            value: function getSubproofAssertionNode() {
                var node = this.getNode(), subproofAssertionNode = node; ///
                return subproofAssertionNode;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var subproofAssertion = null;
                var subproofAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(subproofAssertionString, "' subproof assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion) {
                    subproofAssertion = validAssertion; ///
                    context.debug("...the '".concat(subproofAssertionString, "' subproof assertion is already valid."));
                } else {
                    var validates = false;
                    var statementsValidate = this.validateStatements(stated, context);
                    if (statementsValidate) {
                        validates = true;
                    }
                    if (validates) {
                        var assertion = this; ///
                        subproofAssertion = assertion; ///
                        context.addAssertion(assertion);
                        context.debug("...validated the '".concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofAssertion;
            }
        },
        {
            key: "validateStatements",
            value: function validateStatements(stated, context) {
                stated = true; ///
                var statementsValidate = this.statements.map(function(statement) {
                    var statementValidates = false;
                    statement = statement.validate(stated, context); ///
                    if (statement !== null) {
                        statementValidates = true;
                    }
                    if (statementValidates) {
                        return true;
                    }
                });
                return statementsValidate;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, generalContext, specificContext) {
                var subproofUnifies;
                var subproofString = subproof.getString(), subproofAssertionString = this.getString(); ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
                    if (statementUnifies) {
                        return true;
                    }
                });
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.constructor.name, statementJSON = (0, _json.statementsToStatementsJSON)(this.statements), statements = statementJSON, string = this.getString(), json = {
                    name: name,
                    string: string,
                    statements: statements
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var subproorAssertion = null;
                var name = json.name;
                if (this.name === name) {
                    subproorAssertion = (0, _context.literally)(function(context) {
                        var string = json.string, subproofAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), node = subproofAssertionNode; ///
                        subproorAssertion = new SubproofAssertion(context, string, node, statements);
                    }, context);
                }
                return subproorAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}(_assertion.default), _define_property(_SubproofAssertion, "name", "SubproofAssertion"), _SubproofAssertion));
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map(function(statemetNode) {
        var statement = context.findStatementByStatementNode(statemetNode);
        return statement;
    });
    return statements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudHMoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudHNWYWxpZGF0ZSkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7ICAvLy9cblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWYWxpZGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSB0aGlzLnN0YXRlbWVudHM7ICAvLy9cblxuICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTih0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRKU09OLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZkFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29yQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBzdWJwcm9vckFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWV0Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1ldE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRzVmFsaWRhdGUiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJtYXAiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInRvSlNPTiIsIm5hbWUiLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdWJwcm9vckFzc2VydGlvbiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1ldE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7Ozt5QkFaK0I7Z0VBRVQ7d0JBRUM7dUJBQ0c7cUJBQ0s7b0JBQ1k7MkJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLHNDQUFDOzthQUFNQyxrQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEbkJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLHdCQUF3QkwsTUFBTSxHQUFHO2dCQUV2QyxP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