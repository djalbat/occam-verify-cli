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
var _reference = /*#__PURE__*/ _interop_require_default(require("../reference"));
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/qualified/unify"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement"), referenceNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/reference");
var QualifiedStatement = /*#__PURE__*/ function() {
    function QualifiedStatement(string, statement, reference) {
        _class_call_check(this, QualifiedStatement);
        this.string = string;
        this.statement = statement;
        this.reference = reference;
    }
    _create_class(QualifiedStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.reference.getMetavariableNode();
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var unified;
                var qualifiedStatement = this, qualifiedStatementString = this.string; ///
                context.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                unified = _unify.default.some(function(unifyMixin) {
                    var unified = unifyMixin(qualifiedStatement, substitutions, context);
                    return unified;
                });
                if (unified) {
                    context.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement."));
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatementString = this.getString(); ///
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' qualified statement..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' qualified statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, stated, context) {
                var verified;
                var qualifiedStatementString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                    var statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        var unified = this.unify(substitutions, context);
                        if (unified) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                            verified = assignmentsAssigned; ///
                        }
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(qualifiedStatementString, "' qualified statement."));
                    }
                } else {
                    context.debug("Cannot verify the '".concat(qualifiedStatementString, "' qualified statement because it is nonsense."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromQualifiedStatementNode",
            value: function fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
                var qualifiedStatement = null;
                if (qualifiedStatementNode !== null) {
                    var string;
                    var Statement = _shim.default.Statement, statementNode = statementNodeQuery(qualifiedStatementNode), referenceNode = referenceNodeQuery(qualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, statement = Statement.fromStatementNode(statementNode, context), reference = _reference.default.fromReferenceNode(referenceNode, context), node = qualifiedStatementNode; ///
                    string = fileContext.nodeAsString(node);
                    string = (0, _string.trim)(string); ///
                    qualifiedStatement = new QualifiedStatement(string, statement, reference);
                }
                return qualifiedStatement;
            }
        }
    ]);
    return QualifiedStatement;
}();
Object.assign(_shim.default, {
    QualifiedStatement: QualifiedStatement
});
var _default = QualifiedStatement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvcXVhbGlmaWVkL3VuaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9yZWZlcmVuY2VcIik7XG5cbmNsYXNzIFF1YWxpZmllZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbihxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdW5pZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHRoaXMudW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSBhc3NpZ25tZW50c0Fzc2lnbmVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RyaW5nO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgc3RyaW5nID0gdHJpbShzdHJpbmcpOyAgLy8vXG5cbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBRdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUXVhbGlmaWVkU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUXVhbGlmaWVkU3RhdGVtZW50O1xuIl0sIm5hbWVzIjpbInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZmVyZW5jZU5vZGVRdWVyeSIsIlF1YWxpZmllZFN0YXRlbWVudCIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZCIsInF1YWxpZmllZFN0YXRlbWVudCIsInF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJSZWZlcmVuY2UiLCJmcm9tUmVmZXJlbmNlTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmltIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxSUE7OztlQUFBOzs7MkRBbklpQjtnRUFDSzs0REFDRTs0REFDQztzQkFFSjtxQkFDSzsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSxtQ0FBTjthQUFNQSxtQkFDUUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHBDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpmSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJB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