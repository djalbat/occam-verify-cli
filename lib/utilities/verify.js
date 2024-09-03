"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isMetastatementNegated: function() {
        return isMetastatementNegated;
    },
    isStatementNegated: function() {
        return isStatementNegated;
    }
});
var _constants = require("../constants");
var _query = require("../utilities/query");
var secondOperatorTerminalNodeQuery = (0, _query.nodeQuery)("/*/@operator[1]");
function isStatementNegated(statementNode) {
    var node = statementNode, negated = isNegated(node), statementNegated = negated; ///
    return statementNegated;
}
function isMetastatementNegated(metastatementNode) {
    var node = metastatementNode, negated = isNegated(node), statementNegated = negated; ///
    return statementNegated;
}
function isNegated(node) {
    var secondOperatorTerminalNode = secondOperatorTerminalNodeQuery(node), content = secondOperatorTerminalNode.getContent(), negated = content === _constants.NOT;
    return negated;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOT1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlY29uZE9wZXJhdG9yVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9Ab3BlcmF0b3JbMV1cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YXRlbWVudE5lZ2F0ZWQoc3RhdGVtZW50Tm9kZSkge1xuICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5lZ2F0ZWQgPSBpc05lZ2F0ZWQobm9kZSksXG4gICAgICAgIHN0YXRlbWVudE5lZ2F0ZWQgPSBuZWdhdGVkOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50TmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWV0YXN0YXRlbWVudE5lZ2F0ZWQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbmVnYXRlZCA9IGlzTmVnYXRlZChub2RlKSxcbiAgICAgICAgc3RhdGVtZW50TmVnYXRlZCA9IG5lZ2F0ZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnROZWdhdGVkO1xufVxuXG5mdW5jdGlvbiBpc05lZ2F0ZWQobm9kZSkge1xuICBjb25zdCBzZWNvbmRPcGVyYXRvclRlcm1pbmFsTm9kZSA9IHNlY29uZE9wZXJhdG9yVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIGNvbnRlbnQgPSBzZWNvbmRPcGVyYXRvclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5lZ2F0ZWQgPSAoY29udGVudCA9PT0gTk9UKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cbiJdLCJuYW1lcyI6WyJpc01ldGFzdGF0ZW1lbnROZWdhdGVkIiwiaXNTdGF0ZW1lbnROZWdhdGVkIiwic2Vjb25kT3BlcmF0b3JUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJub2RlIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsInN0YXRlbWVudE5lZ2F0ZWQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZE9wZXJhdG9yVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJOT1QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWVnQkEsc0JBQXNCO2VBQXRCQTs7SUFSQUMsa0JBQWtCO2VBQWxCQTs7O3lCQUxJO3FCQUNNO0FBRTFCLElBQU1DLGtDQUFrQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUUzQyxTQUFTRixtQkFBbUJHLGFBQWE7SUFDOUMsSUFBTUMsT0FBT0QsZUFDUEUsVUFBVUMsVUFBVUYsT0FDcEJHLG1CQUFtQkYsU0FBUyxHQUFHO0lBRXJDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTUix1QkFBdUJTLGlCQUFpQjtJQUN0RCxJQUFNSixPQUFPSSxtQkFDUEgsVUFBVUMsVUFBVUYsT0FDcEJHLG1CQUFtQkYsU0FBUyxHQUFHO0lBRXJDLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTRCxVQUFVRixJQUFJO0lBQ3JCLElBQU1LLDZCQUE2QlIsZ0NBQWdDRyxPQUM3RE0sVUFBVUQsMkJBQTJCRSxVQUFVLElBQy9DTixVQUFXSyxZQUFZRSxjQUFHO0lBRWhDLE9BQU9QO0FBQ1QifQ==