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
    greatestLineIndexFromNodeAndTokens: function() {
        return greatestLineIndexFromNodeAndTokens;
    },
    leastLineIndexFromNodeAndTokens: function() {
        return leastLineIndexFromNodeAndTokens;
    }
});
function leastLineIndexFromNodeAndTokens(node, tokens) {
    var leastLineIndex = undefined; ///
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
    var lineIndex = 0;
    tokens.some(function(token, tokenIndex) {
        if (tokenIndex === firstSignificantTokenIndex) {
            leastLineIndex = lineIndex; ///
            return true;
        }
        var tokenEndOfLineToken = token.isEndOfLineToken();
        if (tokenEndOfLineToken) {
            lineIndex += 1;
        }
    });
    return leastLineIndex;
}
function greatestLineIndexFromNodeAndTokens(node, tokens) {
    var greatestLineIndex = undefined; ///
    var lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
    var lineIndex = 0;
    tokens.some(function(token, tokenIndex) {
        if (tokenIndex === lastSignificantTokenIndex) {
            greatestLineIndex = lineIndex; ///
            return true;
        }
        var tokenEndOfLineToken = token.isEndOfLineToken();
        if (tokenEndOfLineToken) {
            lineIndex += 1;
        }
    });
    return greatestLineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWVzc2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBsZWFzdExpbmVJbmRleCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgbGV0IGxpbmVJbmRleCA9IDA7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7ICAvLy9cbiAgICBpZiAodG9rZW5JbmRleCA9PT0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGxlYXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVhc3RMaW5lSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgZ3JlYXRlc3RMaW5lSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cblxuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgbGV0IGxpbmVJbmRleCA9IDA7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7ICAvLy9cbiAgICBpZiAodG9rZW5JbmRleCA9PT0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBsaW5lSW5kZXg7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmICh0b2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICBsaW5lSW5kZXggKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBncmVhdGVzdExpbmVJbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJsZWFzdExpbmVJbmRleCIsInVuZGVmaW5lZCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsaW5lSW5kZXgiLCJzb21lIiwidG9rZW4iLCJ0b2tlbkluZGV4IiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJncmVhdGVzdExpbmVJbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQmdCQSxrQ0FBa0M7ZUFBbENBOztJQXhCQUMsK0JBQStCO2VBQS9CQTs7O0FBQVQsU0FBU0EsZ0NBQWdDQyxJQUFJLEVBQUVDLE1BQU07SUFDMUQsSUFBSUMsaUJBQWlCQyxXQUFXLEdBQUc7SUFFbkMsSUFBTUMsNkJBQTZCSixLQUFLSyw2QkFBNkIsQ0FBQ0o7SUFFdEUsSUFBSUssWUFBWTtJQUVoQkwsT0FBT00sSUFBSSxDQUFDLFNBQUNDLE9BQU9DO1FBQ2xCLElBQUlBLGVBQWVMLDRCQUE0QjtZQUM3Q0YsaUJBQWlCSSxXQUFZLEdBQUc7WUFFaEMsT0FBTztRQUNUO1FBRUEsSUFBTUksc0JBQXNCRixNQUFNRyxnQkFBZ0I7UUFFbEQsSUFBSUQscUJBQXFCO1lBQ3ZCSixhQUFhO1FBQ2Y7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTSixtQ0FBbUNFLElBQUksRUFBRUMsTUFBTTtJQUM3RCxJQUFJVyxvQkFBb0JULFdBQVksR0FBRztJQUV2QyxJQUFNVSw0QkFBNEJiLEtBQUtjLDRCQUE0QixDQUFDYjtJQUVwRSxJQUFJSyxZQUFZO0lBRWhCTCxPQUFPTSxJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDbEIsSUFBSUEsZUFBZUksMkJBQTJCO1lBQzVDRCxvQkFBb0JOLFdBQVksR0FBRztZQUVuQyxPQUFPO1FBQ1Q7UUFFQSxJQUFNSSxzQkFBc0JGLE1BQU1HLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJKLGFBQWE7UUFDZjtJQUNGO0lBRUEsT0FBT007QUFDVCJ9