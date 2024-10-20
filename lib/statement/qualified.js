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
            value: function verify(substitutions, localContext) {
                var verified;
                var qualifiedStatementString = this.string; ///
                if (this.statement !== null) {
                    localContext.trace("Verifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvcXVhbGlmaWVkL3VuaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9yZWZlcmVuY2VcIik7XG5cbmNsYXNzIFF1YWxpZmllZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4ocXVhbGlmaWVkU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdW5pZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHRoaXMudW5pZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdHJpbmc7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VOb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgc3RyaW5nID0gdHJpbShzdHJpbmcpOyAgLy8vXG5cbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBRdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUXVhbGlmaWVkU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUXVhbGlmaWVkU3RhdGVtZW50O1xuIl0sIm5hbWVzIjpbInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZmVyZW5jZU5vZGVRdWVyeSIsIlF1YWxpZmllZFN0YXRlbWVudCIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJ1bmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50IiwicXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIlJlZmVyZW5jZSIsImZyb21SZWZlcmVuY2VOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRyaW0iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNJQTs7O2VBQUE7OzsyREFwSWlCO2dFQUNLOzREQUNFOzREQUNDO3NCQUVKO3FCQUNLOzJCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDL0JDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1FLG1DQUFOO2FBQU1BLG1CQUNRQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEcENIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSmZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXdCLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLG1CQUFtQjtZQUFJOzs7WUFFckVDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQy9CLElBQUlDO2dCQUVKLElBQU1DLHFCQUFxQixJQUFJLEVBQ3pCQywyQkFBMkIsSUFBSSxDQUFDWixNQUFNLEVBQUUsR0FBRztnQkFFakRTLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGlCQUF5QyxPQUF6QkQsMEJBQXlCO2dCQUU3REYsVUFBVUksY0FBVyxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7b0JBQzFCLElBQU1OLFVBQVVNLFdBQVdMLG9CQUFvQkgsZUFBZUM7b0JBRTlELE9BQU9DO2dCQUNUO2dCQUVBLElBQUlBLFNBQVM7b0JBQ1hELGFBQWFRLEtBQUssQ0FBQyxBQUFDLG1CQUEyQyxPQUF6QkwsMEJBQXlCO2dCQUNqRTtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVqQixTQUFTLEVBQUVPLGFBQWEsRUFBRVcsYUFBYSxFQUFFQyxhQUFhO2dCQUNuRSxJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JyQixVQUFVRSxTQUFTLElBQ3JDb0IsNkJBQTZCLElBQUksQ0FBQ3BCLFNBQVMsSUFBSyxHQUFHO2dCQUV6RGlCLGNBQWNQLEtBQUssQ0FBQyxBQUFDLGlCQUF3RFUsT0FBeENELGlCQUFnQiwwQkFBbUQsT0FBM0JDLDRCQUEyQjtnQkFFeEdGLG1CQUFtQixJQUFJLENBQUNwQixTQUFTLENBQUNpQixjQUFjLENBQUNqQixXQUFXTyxlQUFlVyxlQUFlQztnQkFFMUYsSUFBSUMsa0JBQWtCO29CQUNwQkQsY0FBY0gsS0FBSyxDQUFDLEFBQUMsbUJBQTBETSxPQUF4Q0QsaUJBQWdCLDBCQUFtRCxPQUEzQkMsNEJBQTJCO2dCQUM1RztnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9oQixhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlnQjtnQkFFSixJQUFNYiwyQkFBMkIsSUFBSSxDQUFDWixNQUFNLEVBQUUsR0FBRztnQkFFakQsSUFBSSxJQUFJLENBQUNDLFNBQVMsS0FBSyxNQUFNO29CQUMzQlEsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTBDLE9BQXpCRCwwQkFBeUI7b0JBRTlELElBQU1jLFNBQVMsTUFDVEMsY0FBYyxFQUFFLEVBQ2hCQyxvQkFBb0IsSUFBSSxDQUFDM0IsU0FBUyxDQUFDdUIsTUFBTSxDQUFDRyxhQUFhRCxRQUFRakI7b0JBRXJFLElBQUltQixtQkFBbUI7d0JBQ3JCLElBQU1sQixVQUFVLElBQUksQ0FBQ0gsS0FBSyxDQUFDQyxlQUFlQzt3QkFFMUMsSUFBSUMsU0FBUzs0QkFDWCxJQUFNbUIsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ0gsYUFBYWxCOzRCQUUzRGdCLFdBQVdJLHFCQUFxQixHQUFHO3dCQUNyQztvQkFDRjtvQkFFQSxJQUFJSixVQUFVO3dCQUNaaEIsYUFBYVEsS0FBSyxDQUFDLEFBQUMsb0JBQTRDLE9BQXpCTCwwQkFBeUI7b0JBQ2xFO2dCQUNGLE9BQU87b0JBQ0xILGFBQWFRLEtBQUssQ0FBQyxBQUFDLHNCQUE4QyxPQUF6QkwsMEJBQXlCO2dCQUNwRTtnQkFFQSxPQUFPYTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUVDLFdBQVc7Z0JBQ25FLElBQUl0QixxQkFBcUI7Z0JBRXpCLElBQUlxQiwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBSWhDO29CQUVKLElBQU0sQUFBRWtDLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZFLGdCQUFnQnhDLG1CQUFtQm9DLHlCQUNuQ0ssZ0JBQWdCdkMsbUJBQW1Ca0MseUJBQ25DdkIsZUFBZTZCLGNBQVksQ0FBQ0MsZUFBZSxDQUFDTixjQUM1Q2hDLFlBQVlpQyxVQUFVTSxpQkFBaUIsQ0FBQ0osZUFBZTNCLGVBQ3ZEUCxZQUFZdUMsa0JBQVMsQ0FBQ0MsaUJBQWlCLENBQUNMLGVBQWVKLGNBQ3ZEVSxPQUFPWCx3QkFBeUIsR0FBRztvQkFFekNoQyxTQUFTaUMsWUFBWVcsWUFBWSxDQUFDRDtvQkFFbEMzQyxTQUFTNkMsSUFBQUEsWUFBSSxFQUFDN0MsU0FBVSxHQUFHO29CQUUzQlcscUJBQXFCLElBN0dyQlosbUJBNkc0Q0MsUUFBUUMsV0FBV0M7Z0JBQ2pFO2dCQUVBLE9BQU9TO1lBQ1Q7OztXQWpISVo7O0FBb0hOK0MsT0FBT0MsTUFBTSxDQUFDWixhQUFJLEVBQUU7SUFDbEJwQyxvQkFBQUE7QUFDRjtJQUVBLFdBQWVBIn0=