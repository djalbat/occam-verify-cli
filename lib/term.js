"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Term;
    }
});
var _occamcustomgrammars = require("occam-custom-grammars");
var _ruleNames = require("./ruleNames");
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
var florenceLexerFromNothing = _occamcustomgrammars.lexersUtilities.florenceLexerFromNothing, florenceParserFromNothing = _occamcustomgrammars.parsersUtilities.florenceParserFromNothing;
var florenceLexer = florenceLexerFromNothing(), florenceParser = florenceParserFromNothing();
var Term = /*#__PURE__*/ function() {
    function Term(node, type) {
        _class_call_check(this, Term);
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable, context) {
                var variableNode = variable.getNode(), termNode = termNodeFromVariableNode(variableNode, context), node = termNode, type = variable.getType(), term = new Term(node, type);
                return term;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var node = termNode, term = new Term(node, type);
                return term;
            }
        }
    ]);
    return Term;
}();
function termNodeFromVariableNode(variableNode, context) {
    var variableString = context.nodeAsString(variableNode), content = variableString, lexer = florenceLexer, parser = florenceParser, ruleMap = parser.getRuleMap(), startRuleName = _ruleNames.TERM_RULE_NAME, startRule = ruleMap[startRuleName], tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule), termNode = node; ///
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Ob3RoaW5nIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbU5vdGhpbmcgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmcoKSxcbiAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlcm1Ob2RlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBjb250ZW50ID0gdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICBsZXhlciA9IGZsb3JlbmNlTGV4ZXIsICAvLy9cbiAgICAgICAgcGFyc2VyID0gZmxvcmVuY2VQYXJzZXIsICAvLy9cbiAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0sXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKSxcbiAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufSJdLCJuYW1lcyI6WyJUZXJtIiwiZmxvcmVuY2VMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlIiwiY29udGV4dCIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29udGVudCIsImxleGVyIiwicGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJzdGFydFJ1bGUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzttQ0FWNkI7eUJBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLDJCQUE2QkMsb0NBQWUsQ0FBNUNELDBCQUNGLEFBQUVFLDRCQUE4QkMscUNBQWdCLENBQTlDRDtBQUVSLElBQU1FLGdCQUFnQkosNEJBQ2hCSyxpQkFBaUJIO0FBRVIsSUFBQSxBQUFNSCxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BPLElBQUksRUFBRUMsSUFBSTtnQ0FESFI7UUFFakIsSUFBSSxDQUFDTyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS1I7O1lBTW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSTtnQkFDUixJQUFNTCxPQUFPSyxLQUFLSCxPQUFPLElBQ25CSSxVQUFVLElBQUksQ0FBQ04sSUFBSSxDQUFDSSxLQUFLLENBQUNKO2dCQUVoQyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBTUMsZUFBZUYsU0FBU04sT0FBTyxJQUMvQlMsV0FBV0MseUJBQXlCRixjQUFjRCxVQUNsRFQsT0FBT1csVUFDUFYsT0FBT08sU0FBU0wsT0FBTyxJQUN2QkUsT0FBTyxJQTFCSVosS0EwQktPLE1BQU1DO2dCQUU1QixPQUFPSTtZQUNUOzs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CRixRQUFRLEVBQUVWLElBQUk7Z0JBQ3ZDLElBQU1ELE9BQU9XLFVBQ1BOLE9BQU8sSUFqQ0laLEtBaUNLTyxNQUFNQztnQkFFNUIsT0FBT0k7WUFDVDs7O1dBcENtQlo7O0FBdUNyQixTQUFTbUIseUJBQXlCRixZQUFZLEVBQUVELE9BQU87SUFDckQsSUFBTUssaUJBQWlCTCxRQUFRTSxZQUFZLENBQUNMLGVBQ3RDTSxVQUFVRixnQkFDVkcsUUFBUW5CLGVBQ1JvQixTQUFTbkIsZ0JBQ1RvQixVQUFVRCxPQUFPRSxVQUFVLElBQzNCQyxnQkFBZ0JDLHlCQUFjLEVBQzlCQyxZQUFZSixPQUFPLENBQUNFLGNBQWMsRUFDbENHLFNBQVNQLE1BQU1RLFFBQVEsQ0FBQ1QsVUFDeEJoQixPQUFPa0IsT0FBT1EsS0FBSyxDQUFDRixRQUFRRCxZQUM1QlosV0FBV1gsTUFBTyxHQUFHO0lBRTNCLE9BQU9XO0FBQ1QifQ==