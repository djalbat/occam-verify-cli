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
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../../substitution/statementForMetavariable"));
var _string = require("../../../utilities/string");
var _name = require("../../../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyAWithRule(qualifiedStatement, substitutions, localContext) {
    var unifiedWithRule = false;
    var reference = qualifiedStatement.getReference(), rule = localContext.findRuleByReference(reference);
    if (rule !== null) {
        var referenceString = reference.getString(), qualifiedStatementString = (0, _string.trim)(qualifiedStatement.getString()); ///
        localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' rule..."));
        var statement = qualifiedStatement.getStatement(), statementUnified = rule.unifyStatement(statement, localContext);
        unifiedWithRule = statementUnified; ///
        if (unifiedWithRule) {
            localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' rule."));
        }
    }
    return unifiedWithRule;
}
function unifyAWithAxiom(qualifiedStatement, substitutions, localContext) {
    var unifiedWithAxiom = false;
    var reference = qualifiedStatement.getReference(), axiom = localContext.findAxiomByReference(reference);
    if (axiom !== null) {
        var referenceString = reference.getString(), qualifiedStatementString = (0, _string.trim)(qualifiedStatement.getString()); ///
        localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' axiom..."));
        var statement = qualifiedStatement.getStatement(), statementUnified = axiom.unifyStatement(statement, localContext);
        unifiedWithAxiom = statementUnified; ///
        if (unifiedWithAxiom) {
            localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' axiom."));
        }
    }
    return unifiedWithAxiom;
}
function unifyAWithLemma(qualifiedStatement, substitutions, localContext) {
    var unifiedWithLemma = false;
    var reference = qualifiedStatement.getReference(), lemma = localContext.findLemmaByReference(reference);
    if (lemma !== null) {
        var referenceString = reference.getString(), qualifiedStatementString = (0, _string.trim)(qualifiedStatement.getString()); ///
        localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' lemma..."));
        var statement = qualifiedStatement.getStatement(), statementUnified = lemma.unifyStatement(statement, localContext);
        unifiedWithLemma = statementUnified; ///
        if (unifiedWithLemma) {
            localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' lemma."));
        }
    }
    return unifiedWithLemma;
}
function unifyAWithTheorem(qualifiedStatement, substitutions, localContext) {
    var unifiedWithTheorem = false;
    var reference = qualifiedStatement.getReference(), theorem = localContext.findTheoremByReference(reference);
    if (theorem !== null) {
        var referenceString = reference.getString(), qualifiedStatementString = (0, _string.trim)(qualifiedStatement.getString()); ///
        localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' theorem..."));
        var statement = qualifiedStatement.getStatement(), statementUnified = theorem.unifyStatement(statement, localContext);
        unifiedWithTheorem = statementUnified; ///
        if (unifiedWithTheorem) {
            localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' theorem."));
        }
    }
    return unifiedWithTheorem;
}
function unifyAWithConjecture(qualifiedStatement, substitutions, localContext) {
    var unifiedWithConjecture = false;
    var reference = qualifiedStatement.getReference(), conjecture = localContext.findConjectureByReference(reference);
    if (conjecture !== null) {
        var referenceString = reference.getString(), qualifiedStatementString = (0, _string.trim)(qualifiedStatement.getString()); ///
        localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' conjecture..."));
        var statement = qualifiedStatement.getStatement(), statementUnified = conjecture.unifyStatement(statement, localContext);
        unifiedWithConjecture = statementUnified; ///
        if (unifiedWithConjecture) {
            localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement with the '").concat(referenceString, "' conjecture."));
        }
    }
    return unifiedWithConjecture;
}
function unifyAWithReference(qualifiedStatement, substitutions, localContext) {
    var unifiedWithReference = false;
    var reference = qualifiedStatement.getReference(), metavariableNode = reference.getMetavariableNode(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = localContext.isMetavariablePresentByMetavariableName(metavariableName);
    if (metavariablePresent) {
        var statement = qualifiedStatement.getStatement(), statementString = statement.getString(), referenceString = reference.getString();
        localContext.trace("Unifying the '".concat(statementString, "' qualified statement with the '").concat(referenceString, "' reference..."));
        var metavariable = reference.getMetavariable(), statementForMetavariableSubstitution = _statementForMetavariable.default.fromStatementAndMetavariable(statement, metavariable, localContext), substitution = statementForMetavariableSubstitution; ///
        substitutions.addSubstitution(substitution, localContext);
        unifiedWithReference = true;
        if (unifiedWithReference) {
            localContext.debug("...unified the '".concat(statementString, "' qualified statement with the '").concat(referenceString, "' reference."));
        }
    }
    return unifiedWithReference;
}
var unifyMixins = [
    unifyAWithRule,
    unifyAWithAxiom,
    unifyAWithLemma,
    unifyAWithTheorem,
    unifyAWithConjecture,
    unifyAWithReference
];
var _default = unifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taXhpbnMvc3RhdGVtZW50L3F1YWxpZmllZC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vLi4vLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUnVsZShxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSdWxlID0gZmFsc2U7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gcXVhbGlmaWVkU3RhdGVtZW50LmdldFJlZmVyZW5jZSgpLFxuICAgICAgICBydWxlID0gbG9jYWxDb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0cmltKHF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKSk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gcXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBydWxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoUnVsZSA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmICh1bmlmaWVkV2l0aFJ1bGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFJ1bGU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QVdpdGhBeGlvbShxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhBeGlvbSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHF1YWxpZmllZFN0YXRlbWVudC5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgYXhpb20gPSBsb2NhbENvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdHJpbShxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCkpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoQXhpb20gPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVkV2l0aEF4aW9tKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQXhpb207XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QVdpdGhMZW1tYShxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhMZW1tYSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHF1YWxpZmllZFN0YXRlbWVudC5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgbGVtbWEgPSBsb2NhbENvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICBpZiAobGVtbWEgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdHJpbShxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCkpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIGxlbW1hLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGxlbW1hLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoTGVtbWEgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVkV2l0aExlbW1hKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgbGVtbWEuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoTGVtbWE7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QVdpdGhUaGVvcmVtKHF1YWxpZmllZFN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFRoZW9yZW0gPSBmYWxzZTtcblxuICBjb25zdCByZWZlcmVuY2UgPSBxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgIHRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gIGlmICh0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRyaW0ocXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpKTsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyB0aGVvcmVtLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoZW9yZW0udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgdW5pZmllZFdpdGhUaGVvcmVtID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICBpZiAodW5pZmllZFdpdGhUaGVvcmVtKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgdGhlb3JlbS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhUaGVvcmVtO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFXaXRoQ29uamVjdHVyZShxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhDb25qZWN0dXJlID0gZmFsc2U7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gcXVhbGlmaWVkU3RhdGVtZW50LmdldFJlZmVyZW5jZSgpLFxuICAgICAgICBjb25qZWN0dXJlID0gbG9jYWxDb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICBpZiAoY29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0cmltKHF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKSk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gcXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjb25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoQ29uamVjdHVyZSA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZWRXaXRoQ29uamVjdHVyZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aFJlZmVyZW5jZShxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBjb25zdCByZWZlcmVuY2UgPSBxdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgaWYgKHVuaWZpZWRXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFJlZmVyZW5jZTtcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5QVdpdGhSdWxlLFxuICB1bmlmeUFXaXRoQXhpb20sXG4gIHVuaWZ5QVdpdGhMZW1tYSxcbiAgdW5pZnlBV2l0aFRoZW9yZW0sXG4gIHVuaWZ5QVdpdGhDb25qZWN0dXJlLFxuICB1bmlmeUFXaXRoUmVmZXJlbmNlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1bmlmeU1peGlucztcblxuIl0sIm5hbWVzIjpbInVuaWZ5QVdpdGhSdWxlIiwicXVhbGlmaWVkU3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwicXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidHJpbSIsInRyYWNlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwiZGVidWciLCJ1bmlmeUFXaXRoQXhpb20iLCJ1bmlmaWVkV2l0aEF4aW9tIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInVuaWZ5QVdpdGhMZW1tYSIsInVuaWZpZWRXaXRoTGVtbWEiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwidW5pZnlBV2l0aFRoZW9yZW0iLCJ1bmlmaWVkV2l0aFRoZW9yZW0iLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsInVuaWZ5QVdpdGhDb25qZWN0dXJlIiwidW5pZmllZFdpdGhDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJ1bmlmeUFXaXRoUmVmZXJlbmNlIiwidW5pZmllZFdpdGhSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0S0E7OztlQUFBOzs7K0VBMUtpRDtzQkFFNUI7b0JBQ2dDOzs7Ozs7QUFFckQsU0FBU0EsZUFBZUMsa0JBQWtCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNyRSxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBTUMsWUFBWUosbUJBQW1CSyxZQUFZLElBQzNDQyxPQUFPSixhQUFhSyxtQkFBbUIsQ0FBQ0g7SUFFOUMsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLGtCQUFrQkosVUFBVUssU0FBUyxJQUNyQ0MsMkJBQTJCQyxJQUFBQSxZQUFJLEVBQUNYLG1CQUFtQlMsU0FBUyxLQUFNLEdBQUc7UUFFM0VQLGFBQWFVLEtBQUssQ0FBQyxBQUFDLGlCQUEyRUosT0FBM0RFLDBCQUF5QixvQ0FBa0QsT0FBaEJGLGlCQUFnQjtRQUUvRyxJQUFNSyxZQUFZYixtQkFBbUJjLFlBQVksSUFDM0NDLG1CQUFtQlQsS0FBS1UsY0FBYyxDQUFDSCxXQUFXWDtRQUV4REMsa0JBQWtCWSxrQkFBbUIsR0FBRztRQUV4QyxJQUFJWixpQkFBaUI7WUFDbkJELGFBQWFlLEtBQUssQ0FBQyxBQUFDLG1CQUE2RVQsT0FBM0RFLDBCQUF5QixvQ0FB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