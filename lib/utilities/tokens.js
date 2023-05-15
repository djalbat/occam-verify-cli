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
    leastLineIndexFromNodeAndTokens: function() {
        return leastLineIndexFromNodeAndTokens;
    },
    greatestLineIndexFromNodeAndTokens: function() {
        return greatestLineIndexFromNodeAndTokens;
    }
});
function leastLineIndexFromNodeAndTokens(node, tokens) {
    var leastLineIndex = undefined; ///
    var firstSignificantToken = node.getFirstSignificantToken(), firstSignificantTokenIndex = significantTokenIndexFromSignificantTokenAndTokens(firstSignificantToken, tokens); ///
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
    var lastSignificantToken = node.getLastSignificantToken(), lastSignificantTokenIndex = significantTokenIndexFromSignificantTokenAndTokens(lastSignificantToken, tokens);
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
function significantTokenIndexFromSignificantTokenAndTokens(significantToken, tokens) {
    var significantTokenIndex = -1;
    tokens.some(function(token) {
        significantTokenIndex++;
        if (token === significantToken) {
            return true;
        }
    });
    return significantTokenIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYXN0TGluZUluZGV4ID0gdW5kZWZpbmVkOyAvLy9cblxuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKTsgLy8vXG5cbiAgbGV0IGxpbmVJbmRleCA9IDA7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7ICAvLy9cbiAgICBpZiAodG9rZW5JbmRleCA9PT0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGxlYXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVhc3RMaW5lSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgZ3JlYXRlc3RMaW5lSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cblxuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKGxhc3RTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpO1xuXG4gIGxldCBsaW5lSW5kZXggPSAwO1xuXG4gIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4geyAgLy8vXG4gICAgaWYgKHRva2VuSW5kZXggPT09IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZ3JlYXRlc3RMaW5lSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKHNpZ25pZmljYW50VG9rZW4sIHRva2Vucykge1xuICBsZXQgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gLTE7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuKSA9PiB7XG4gICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4Kys7XG5cbiAgICBpZiAodG9rZW4gPT09IHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5JbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJsZWFzdExpbmVJbmRleCIsInVuZGVmaW5lZCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbkluZGV4RnJvbVNpZ25pZmljYW50VG9rZW5BbmRUb2tlbnMiLCJsaW5lSW5kZXgiLCJzb21lIiwidG9rZW4iLCJ0b2tlbkluZGV4IiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJncmVhdGVzdExpbmVJbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSwrQkFBK0I7ZUFBL0JBOztJQXlCQUMsa0NBQWtDO2VBQWxDQTs7O0FBekJULFNBQVNELGdDQUFnQ0UsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDNUQsSUFBSUMsaUJBQWlCQyxXQUFXLEdBQUc7SUFFbkMsSUFBTUMsd0JBQXdCSixLQUFLSyx3QkFBd0IsSUFDckRDLDZCQUE2QkMsbURBQW1ESCx1QkFBdUJILFNBQVMsR0FBRztJQUV6SCxJQUFJTyxZQUFZO0lBRWhCUCxPQUFPUSxJQUFJLENBQUMsU0FBQ0MsT0FBT0MsWUFBZTtRQUNqQyxJQUFJQSxlQUFlTCw0QkFBNEI7WUFDN0NKLGlCQUFpQk0sV0FBWSxHQUFHO1lBRWhDLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFFRCxJQUFNSSxzQkFBc0JGLE1BQU1HLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJKLGFBQWE7UUFDZixDQUFDO0lBQ0g7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU0gsbUNBQW1DQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUMvRCxJQUFJYSxvQkFBb0JYLFdBQVksR0FBRztJQUV2QyxJQUFNWSx1QkFBdUJmLEtBQUtnQix1QkFBdUIsSUFDbkRDLDRCQUE0QlYsbURBQW1EUSxzQkFBc0JkO0lBRTNHLElBQUlPLFlBQVk7SUFFaEJQLE9BQU9RLElBQUksQ0FBQyxTQUFDQyxPQUFPQyxZQUFlO1FBQ2pDLElBQUlBLGVBQWVNLDJCQUEyQjtZQUM1Q0gsb0JBQW9CTixXQUFZLEdBQUc7WUFFbkMsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVELElBQU1JLHNCQUFzQkYsTUFBTUcsZ0JBQWdCO1FBRWxELElBQUlELHFCQUFxQjtZQUN2QkosYUFBYTtRQUNmLENBQUM7SUFDSDtJQUVBLE9BQU9NO0FBQ1Q7QUFFQSxTQUFTUCxtREFBbURXLGdCQUFnQixFQUFFakIsTUFBTSxFQUFFO0lBQ3BGLElBQUlrQix3QkFBd0IsQ0FBQztJQUU3QmxCLE9BQU9RLElBQUksQ0FBQyxTQUFDQyxPQUFVO1FBQ3JCUztRQUVBLElBQUlULFVBQVVRLGtCQUFrQjtZQUM5QixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPQztBQUNUIn0=