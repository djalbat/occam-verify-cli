"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QualifiedStatement;
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
        }
    ], [
        {
            key: "fromQualifiedStatementNode",
            value: function fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
                var string;
                var Statement = _shim.default.Statement, statementNode = statementNodeQuery(qualifiedStatementNode), referenceNode = referenceNodeQuery(qualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext), reference = _reference.default.fromReferenceNode(referenceNode, fileContext), node = qualifiedStatementNode; ///
                string = fileContext.nodeAsString(node);
                string = (0, _string.trim)(string); ///
                var qualifiedStatement = new QualifiedStatement(string, statement, reference);
                return qualifiedStatement;
            }
        }
    ]);
    return QualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvcXVhbGlmaWVkL3VuaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9yZWZlcmVuY2VcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YWxpZmllZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdGhpcy51bmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSBhc3NpZ25tZW50c0Fzc2lnbmVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50IGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHF1YWxpZmllZFN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICBzdHJpbmcgPSB0cmltKHN0cmluZyk7ICAvLy9cblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBRdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmVmZXJlbmNlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInVuaWZpZWQiLCJ1bmlmeSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImRlYnVnIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJSZWZlcmVuY2UiLCJmcm9tUmVmZXJlbmNlTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmltIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyREFaSjtnRUFDSzs0REFDRTs0REFDQztzQkFFSjtxQkFDSzsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixtQ0FBTjthQUFNQSxtQkFDUEksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHJCTjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FB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