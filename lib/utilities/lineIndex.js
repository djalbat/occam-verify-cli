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
    var firstSignificantToken = node.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);
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
    var lastSignificantToken = node.getLastSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluZUluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYXN0TGluZUluZGV4ID0gdW5kZWZpbmVkOyAvLy9cblxuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgbGV0IGxpbmVJbmRleCA9IDA7XG5cbiAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7ICAvLy9cbiAgICBpZiAodG9rZW5JbmRleCA9PT0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgpIHtcbiAgICAgIGxlYXN0TGluZUluZGV4ID0gbGluZUluZGV4OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVhc3RMaW5lSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgZ3JlYXRlc3RMaW5lSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cblxuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKTtcblxuICBsZXQgbGluZUluZGV4ID0gMDtcblxuICB0b2tlbnMuc29tZSgodG9rZW4sIHRva2VuSW5kZXgpID0+IHsgIC8vL1xuICAgIGlmICh0b2tlbkluZGV4ID09PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICBncmVhdGVzdExpbmVJbmRleCA9IGxpbmVJbmRleDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIGxpbmVJbmRleCArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGdyZWF0ZXN0TGluZUluZGV4O1xufVxuIl0sIm5hbWVzIjpbImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImxlYXN0TGluZUluZGV4IiwidW5kZWZpbmVkIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGluZUluZGV4Iiwic29tZSIsInRva2VuIiwidG9rZW5JbmRleCIsInRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyQmdCQSxrQ0FBa0M7ZUFBbENBOztJQXpCQUMsK0JBQStCO2VBQS9CQTs7O0FBQVQsU0FBU0EsZ0NBQWdDQyxJQUFJLEVBQUVDLE1BQU07SUFDMUQsSUFBSUMsaUJBQWlCQyxXQUFXLEdBQUc7SUFFbkMsSUFBTUMsd0JBQXdCSixLQUFLSyx3QkFBd0IsSUFDckRDLDZCQUE2QkwsT0FBT00sT0FBTyxDQUFDSDtJQUVsRCxJQUFJSSxZQUFZO0lBRWhCUCxPQUFPUSxJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDbEIsSUFBSUEsZUFBZUwsNEJBQTRCO1lBQzdDSixpQkFBaUJNLFdBQVksR0FBRztZQUVoQyxPQUFPO1FBQ1Q7UUFFQSxJQUFNSSxzQkFBc0JGLE1BQU1HLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJKLGFBQWE7UUFDZjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNKLG1DQUFtQ0UsSUFBSSxFQUFFQyxNQUFNO0lBQzdELElBQUlhLG9CQUFvQlgsV0FBWSxHQUFHO0lBRXZDLElBQU1ZLHVCQUF1QmYsS0FBS2dCLHVCQUF1QixJQUNuREMsNEJBQTRCaEIsT0FBT00sT0FBTyxDQUFDUTtJQUVqRCxJQUFJUCxZQUFZO0lBRWhCUCxPQUFPUSxJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDbEIsSUFBSUEsZUFBZU0sMkJBQTJCO1lBQzVDSCxvQkFBb0JOLFdBQVksR0FBRztZQUVuQyxPQUFPO1FBQ1Q7UUFFQSxJQUFNSSxzQkFBc0JGLE1BQU1HLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJKLGFBQWE7UUFDZjtJQUNGO0lBRUEsT0FBT007QUFDVCJ9