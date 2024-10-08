"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubproofAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
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
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement"), statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion");
var SubproofAssertion = /*#__PURE__*/ function() {
    function SubproofAssertion(fileContext, string, statements) {
        _class_call_check(this, SubproofAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.statements = statements;
    }
    _create_class(SubproofAssertion, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
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
            value: function unifySubproof(subproof, substitutions, localContext) {
                var _this = this;
                var subproofUnified;
                var subproofString = subproof.getString(), subproofStatements = subproof.getStatements(), subproofAssertionString = this.string; ///
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                subproofUnified = (0, _array.match)(this.statements, subproofStatements, function(statement, subproofStatement) {
                    var statementNode = statement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = _this.fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    if (unified) {
                        return true;
                    }
                });
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementStings = this.statements.map(function(statement) {
                    var statementString = statement.getString();
                    return statementString;
                }), statements = statementStings, json = {
                    statements: statements
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statements = json.statements;
                var statementsJSON = statements; ///
                statements = statementsJSON.map(function(statementJSON) {
                    var _$json = statementJSON, statement = Statement.fromJSON(_$json, fileContext);
                    return statement;
                });
                var string = stringFromStatements(statements), subproofAssertion = new SubproofAssertion(fileContext, string, statements);
                return subproofAssertion;
            }
        },
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
                var subproofAssertion = null;
                if (unqualifiedStatementNode !== null) {
                    var statementNode = statementNodeQuery(unqualifiedStatementNode), subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                    if (subproofAssertionNode !== null) {
                        var Statement1 = _shim.default.Statement, localContext = _local.default.fromFileContext(fileContext), statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                            var statement = Statement1.fromStatementNode(statementNode, localContext);
                            return statement;
                        }), string = stringFromStatements(statements);
                        subproofAssertion = new SubproofAssertion(fileContext, string, statements);
                    }
                }
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}();
function stringFromStatements(statements) {
    var frontStatements = (0, _array.front)(statements), lastStatement = (0, _array.last)(statements), frontStatementsString = statementsStringtatements(frontStatements), lastStatementString = lastStatement.getString(), string = "[".concat(frontStatementsString, "] ... ").concat(lastStatementString);
    return string;
}
function statementsStringtatements(statements) {
    var statementsString = statements.reduce(function(statementsString, statement) {
        var statementString = statement.getString();
        statementsString = statementsString !== null ? "".concat(statementsString, ", ").concat(statementString) : statementString; ///
        return statementsString;
    }, null);
    return statementsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZnJvbnQsIGxhc3QsIG1hdGNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaCh0aGlzLnN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdGluZ3MgPSB0aGlzLnN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudFN0cmluZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50U3RpbmdzLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHN0YXRlbWVudHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHM7ICAvLy9cblxuICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTi5tYXAoKHN0YXRlbWVudEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgc3RhdGVtZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgY29uc3QgZnJvbnRTdGF0ZW1lbnRzID0gZnJvbnQoc3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHN0YXRlbWVudHMpLFxuICAgICAgICBmcm9udFN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzU3RyaW5ndGF0ZW1lbnRzKGZyb250U3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJvbnRTdGF0ZW1lbnRzU3RyaW5nfV0gLi4uICR7bGFzdFN0YXRlbWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNTdHJpbmd0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50cy5yZWR1Y2UoKHN0YXRlbWVudHNTdHJpbmcsIHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHN0YXRlbWVudHNTdHJpbmcgPSAoc3RhdGVtZW50c1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhdGVtZW50c1N0cmluZ30sICR7c3RhdGVtZW50U3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmdcbn0iXSwibmFtZXMiOlsiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJzdGF0ZW1lbnRzIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsIm1hdGNoIiwic3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJkZWJ1ZyIsInRvSlNPTiIsInN0YXRlbWVudFN0aW5ncyIsIm1hcCIsInN0YXRlbWVudFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudHNKU09OIiwic3RhdGVtZW50SlNPTiIsIlN0YXRlbWVudCIsInN0cmluZ0Zyb21TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic2hpbSIsInN0YXRlbWVudE5vZGVzIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJmcm9udFN0YXRlbWVudHMiLCJmcm9udCIsImxhc3RTdGF0ZW1lbnQiLCJsYXN0IiwiZnJvbnRTdGF0ZW1lbnRzU3RyaW5nIiwic3RhdGVtZW50c1N0cmluZ3RhdGVtZW50cyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjs0REFDUTtnRUFDSTtxQkFFTTtxQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsb0NBQy9CQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsaUNBQ2pDQyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNRixrQ0FBTjthQUFNQSxrQkFDUE0sV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRHhCUjtRQUVqQixJQUFJLENBQUNNLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTtt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