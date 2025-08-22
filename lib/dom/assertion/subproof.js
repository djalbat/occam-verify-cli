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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _unification = require("../../utilities/unification");
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
var _SubproofAssertion;
var match = _necessary.arrayUtilities.match;
var _default = (0, _dom.domAssigned)((_SubproofAssertion = /*#__PURE__*/ function() {
    function SubproofAssertion(string, node, statements) {
        _class_call_check(this, SubproofAssertion);
        this.string = string;
        this.node = node;
        this.statements = statements;
    }
    _create_class(SubproofAssertion, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies;
                var subproofString = subproof.getString(), subproofAssertionString = this.string; ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies;
                var subproofAssertionString = this.string; ///
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
}(), _define_property(_SubproofAssertion, "name", "SubproofAssertion"), _SubproofAssertion));
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var Statement = _dom.default.Statement, statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map(function(statementNode) {
        var statement = Statement.fromStatementNode(statementNode, context);
        return statement;
    });
    return statements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcztcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3RhdGVtZW50czsgIC8vL1xuXG4gICAgc3VicHJvb2ZVbmlmaWVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50c1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3RhdGVtZW50cyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVzID0gc3RhdGVtZW50c1ZlcmlmeTsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50cyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWZXJpZnkgPSB0aGlzLnN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVzID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJzdGF0ZW1lbnRzVmVyaWZ5IiwidmVyaWZ5U3RhdGVtZW50cyIsIm1hcCIsInN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVzIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJTdGF0ZW1lbnQiLCJkb20iLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFU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