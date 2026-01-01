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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _unify = require("../../process/unify");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _default = (0, _ontology.define)((_SubproofAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(SubproofAssertion, Assertion);
    function SubproofAssertion(string, node, statements) {
        _class_call_check(this, SubproofAssertion);
        var _this;
        _this = _call_super(this, SubproofAssertion, [
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies;
                var subproofAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                var statementsVerify = this.verifyStatements(assignments, stated, context);
                verifies = statementsVerify; ///
                if (verifies) {
                    context.debug("...verified the '".concat(subproofAssertionString, "' subproof assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyStatements",
            value: function verifyStatements(assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statementsVerify = this.statements.map(function(statement) {
                    var statementVerifies = statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        return true;
                    }
                });
                return statementsVerify;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies;
                var subproofString = subproof.getString(), subproofAssertionString = this.getString(); ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    if (statementUnifies) {
                        return true;
                    }
                });
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnifies;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var subproofAssertion = null;
                var subproofAssertionNode = statementNode.getSubproofAssertionNode();
                if (subproofAssertionNode !== null) {
                    var node = subproofAssertionNode, string = context.nodeAsString(node), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);
                    subproofAssertion = new SubproofAssertion(string, node, statements);
                }
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}(_assertion.default), _define_property(_SubproofAssertion, "name", "SubproofAssertion"), _SubproofAssertion));
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var Statement = _ontology.default.Statement, statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map(function(statementNode) {
        var statement = Statement.fromStatementNode(statementNode, context);
        return statement;
    });
    return statements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3VuaWZ5XCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VicHJvb2ZBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnRzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZXMgPSBzdGF0ZW1lbnRzVmVyaWZ5OyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnRzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50c1ZlcmlmeSA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZlcmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSB0aGlzLnN0YXRlbWVudHM7ICAvLy9cblxuICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgIHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRzVmVyaWZ5IiwidmVyaWZ5U3RhdGVtZW50cyIsImRlYnVnIiwibWFwIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VmVyaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uIiwibmFtZSIsIlN0YXRlbWVudCIsIm9udG9sb2d5Iiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCO2dFQUVWO2dFQUNDO3FCQUdTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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