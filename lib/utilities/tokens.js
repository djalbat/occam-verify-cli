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
        var tokenEqualToSignificantToken = token.isEqualTo(significantToken);
        if (tokenEqualToSignificantToken) {
            return true;
        }
    });
    return significantTokenIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYXN0TGluZUluZGV4ID0gdW5kZWZpbmVkOyAvLy9cblxuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKTsgLy8vXG5cbiAgbGV0IGxpbmVJbmRleCA9IDA7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7ICAvLy9cbiAgICBpZiAodG9rZW5JbmRleCA9PT0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGxlYXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVhc3RMaW5lSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgZ3JlYXRlc3RMaW5lSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cblxuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKGxhc3RTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpO1xuXG4gIGxldCBsaW5lSW5kZXggPSAwO1xuXG4gIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4geyAgLy8vXG4gICAgaWYgKHRva2VuSW5kZXggPT09IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZ3JlYXRlc3RMaW5lSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5JbmRleEZyb21TaWduaWZpY2FudFRva2VuQW5kVG9rZW5zKHNpZ25pZmljYW50VG9rZW4sIHRva2Vucykge1xuICBsZXQgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gLTE7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuKSA9PiB7XG4gICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4Kys7XG5cbiAgICBjb25zdCB0b2tlbkVxdWFsVG9TaWduaWZpY2FudFRva2VuID0gdG9rZW4uaXNFcXVhbFRvKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgaWYgKHRva2VuRXF1YWxUb1NpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5JbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJsZWFzdExpbmVJbmRleCIsInVuZGVmaW5lZCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbkluZGV4RnJvbVNpZ25pZmljYW50VG9rZW5BbmRUb2tlbnMiLCJsaW5lSW5kZXgiLCJzb21lIiwidG9rZW4iLCJ0b2tlbkluZGV4IiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJncmVhdGVzdExpbmVJbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VuRXF1YWxUb1NpZ25pZmljYW50VG9rZW4iLCJpc0VxdWFsVG8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsK0JBQStCO2VBQS9CQTs7SUF5QkFDLGtDQUFrQztlQUFsQ0E7OztBQXpCVCxTQUFTRCxnQ0FBZ0NFLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQzVELElBQUlDLGlCQUFpQkMsV0FBVyxHQUFHO0lBRW5DLElBQU1DLHdCQUF3QkosS0FBS0ssd0JBQXdCLElBQ3JEQyw2QkFBNkJDLG1EQUFtREgsdUJBQXVCSCxTQUFTLEdBQUc7SUFFekgsSUFBSU8sWUFBWTtJQUVoQlAsT0FBT1EsSUFBSSxDQUFDLFNBQUNDLE9BQU9DLFlBQWU7UUFDakMsSUFBSUEsZUFBZUwsNEJBQTRCO1lBQzdDSixpQkFBaUJNLFdBQVksR0FBRztZQUVoQyxPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsSUFBTUksc0JBQXNCRixNQUFNRyxnQkFBZ0I7UUFFbEQsSUFBSUQscUJBQXFCO1lBQ3ZCSixhQUFhO1FBQ2YsQ0FBQztJQUNIO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNILG1DQUFtQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDL0QsSUFBSWEsb0JBQW9CWCxXQUFZLEdBQUc7SUFFdkMsSUFBTVksdUJBQXVCZixLQUFLZ0IsdUJBQXVCLElBQ25EQyw0QkFBNEJWLG1EQUFtRFEsc0JBQXNCZDtJQUUzRyxJQUFJTyxZQUFZO0lBRWhCUCxPQUFPUSxJQUFJLENBQUMsU0FBQ0MsT0FBT0MsWUFBZTtRQUNqQyxJQUFJQSxlQUFlTSwyQkFBMkI7WUFDNUNILG9CQUFvQk4sV0FBWSxHQUFHO1lBRW5DLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFFRCxJQUFNSSxzQkFBc0JGLE1BQU1HLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJKLGFBQWE7UUFDZixDQUFDO0lBQ0g7SUFFQSxPQUFPTTtBQUNUO0FBRUEsU0FBU1AsbURBQW1EVyxnQkFBZ0IsRUFBRWpCLE1BQU0sRUFBRTtJQUNwRixJQUFJa0Isd0JBQXdCLENBQUM7SUFFN0JsQixPQUFPUSxJQUFJLENBQUMsU0FBQ0MsT0FBVTtRQUNyQlM7UUFFQSxJQUFNQywrQkFBK0JWLE1BQU1XLFNBQVMsQ0FBQ0g7UUFFckQsSUFBSUUsOEJBQThCO1lBQ2hDLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBLE9BQU9EO0FBQ1QifQ==