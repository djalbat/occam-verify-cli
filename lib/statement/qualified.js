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
            value: function unify(substitutions, localContext) {
                var unified;
                var qualifiedStatement = this, qualifiedStatementString = this.string; ///
                localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                unified = _unify.default.some(function(unifyMixin) {
                    var unified = unifyMixin(qualifiedStatement, substitutions, localContext);
                    return unified;
                });
                if (unified) {
                    localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement."));
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContextA, localContextB) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatementString = this.getString(); ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' qualified statement..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' qualified statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, stated, localContext) {
                var verified;
                var qualifiedStatementString = this.string; ///
                if (this.statement !== null) {
                    localContext.trace("Verifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                    var statementVerified = this.statement.verify(assignments, stated, localContext);
                    if (statementVerified) {
                        var unified = this.unify(substitutions, localContext);
                        if (unified) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                            verified = assignmentsAssigned; ///
                        }
                    }
                    if (verified) {
                        localContext.debug("...verified the '".concat(qualifiedStatementString, "' qualified statement."));
                    }
                } else {
                    localContext.debug("Cannot verify the '".concat(qualifiedStatementString, "' qualified statement because it is nonsense."));
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
                    var Statement = _shim.default.Statement, statementNode = statementNodeQuery(qualifiedStatementNode), referenceNode = referenceNodeQuery(qualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext), reference = _reference.default.fromReferenceNode(referenceNode, fileContext), node = qualifiedStatementNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvcXVhbGlmaWVkL3VuaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9yZWZlcmVuY2VcIik7XG5cbmNsYXNzIFF1YWxpZmllZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4ocXVhbGlmaWVkU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdW5pZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB0aGlzLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IGFzc2lnbm1lbnRzQXNzaWduZWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RyaW5nO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHN0cmluZyA9IHRyaW0oc3RyaW5nKTsgIC8vL1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgUXVhbGlmaWVkU3RhdGVtZW50KHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFF1YWxpZmllZFN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFF1YWxpZmllZFN0YXRlbWVudDtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwidW5pZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidW5pZmllZCIsInF1YWxpZmllZFN0YXRlbWVudCIsInF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJSZWZlcmVuY2UiLCJmcm9tUmVmZXJlbmNlTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmltIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvSUE7OztlQUFBOzs7MkRBbElpQjtnRUFDSzs0REFDRTs0REFDQztzQkFFSjtxQkFDSzsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSxtQ0FBTjthQUFNQSxtQkFDUUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHBDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpmSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJB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