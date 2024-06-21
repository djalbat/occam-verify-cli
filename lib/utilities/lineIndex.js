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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluZUluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYXN0TGluZUluZGV4ID0gdW5kZWZpbmVkOyAvLy9cblxuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICBsZXQgbGluZUluZGV4ID0gMDtcblxuICB0b2tlbnMuc29tZSgodG9rZW4sIHRva2VuSW5kZXgpID0+IHsgIC8vL1xuICAgIGlmICh0b2tlbkluZGV4ID09PSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgbGVhc3RMaW5lSW5kZXggPSBsaW5lSW5kZXg7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmICh0b2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICBsaW5lSW5kZXggKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWFzdExpbmVJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBncmVhdGVzdExpbmVJbmRleCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICBsZXQgbGluZUluZGV4ID0gMDtcblxuICB0b2tlbnMuc29tZSgodG9rZW4sIHRva2VuSW5kZXgpID0+IHsgIC8vL1xuICAgIGlmICh0b2tlbkluZGV4ID09PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICBncmVhdGVzdExpbmVJbmRleCA9IGxpbmVJbmRleDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIGxpbmVJbmRleCArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGdyZWF0ZXN0TGluZUluZGV4O1xufVxuIl0sIm5hbWVzIjpbImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImxlYXN0TGluZUluZGV4IiwidW5kZWZpbmVkIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxpbmVJbmRleCIsInNvbWUiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImdyZWF0ZXN0TGluZUluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMEJnQkEsa0NBQWtDO2VBQWxDQTs7SUF4QkFDLCtCQUErQjtlQUEvQkE7OztBQUFULFNBQVNBLGdDQUFnQ0MsSUFBSSxFQUFFQyxNQUFNO0lBQzFELElBQUlDLGlCQUFpQkMsV0FBVyxHQUFHO0lBRW5DLElBQU1DLDZCQUE2QkosS0FBS0ssNkJBQTZCLENBQUNKO0lBRXRFLElBQUlLLFlBQVk7SUFFaEJMLE9BQU9NLElBQUksQ0FBQyxTQUFDQyxPQUFPQztRQUNsQixJQUFJQSxlQUFlTCw0QkFBNEI7WUFDN0NGLGlCQUFpQkksV0FBWSxHQUFHO1lBRWhDLE9BQU87UUFDVDtRQUVBLElBQU1JLHNCQUFzQkYsTUFBTUcsZ0JBQWdCO1FBRWxELElBQUlELHFCQUFxQjtZQUN2QkosYUFBYTtRQUNmO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU0osbUNBQW1DRSxJQUFJLEVBQUVDLE1BQU07SUFDN0QsSUFBSVcsb0JBQW9CVCxXQUFZLEdBQUc7SUFFdkMsSUFBTVUsNEJBQTRCYixLQUFLYyw0QkFBNEIsQ0FBQ2I7SUFFcEUsSUFBSUssWUFBWTtJQUVoQkwsT0FBT00sSUFBSSxDQUFDLFNBQUNDLE9BQU9DO1FBQ2xCLElBQUlBLGVBQWVJLDJCQUEyQjtZQUM1Q0Qsb0JBQW9CTixXQUFZLEdBQUc7WUFFbkMsT0FBTztRQUNUO1FBRUEsSUFBTUksc0JBQXNCRixNQUFNRyxnQkFBZ0I7UUFFbEQsSUFBSUQscUJBQXFCO1lBQ3ZCSixhQUFhO1FBQ2Y7SUFDRjtJQUVBLE9BQU9NO0FBQ1QifQ==