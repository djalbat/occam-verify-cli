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
    compare: function() {
        return compare;
    },
    compress: function() {
        return compress;
    },
    correlate: function() {
        return correlate;
    },
    extract: function() {
        return extract;
    },
    filter: function() {
        return filter;
    },
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    leftDifference: function() {
        return leftDifference;
    },
    match: function() {
        return match;
    },
    push: function() {
        return push;
    },
    reverse: function() {
        return reverse;
    },
    rightDifference: function() {
        return rightDifference;
    },
    second: function() {
        return second;
    },
    separate: function() {
        return separate;
    }
});
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, extract = _necessary.arrayUtilities.extract, push = _necessary.arrayUtilities.push, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
function reverse(array) {
    array = _to_consumable_array(array).reverse();
    return array;
}
function compare(arrayA, arrayB) {
    var compares = false;
    var arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        var correlates = correlate(arrayA, arrayB);
        compares = correlates; ///
    }
    return compares;
}
function correlate(arrayA, arrayB, callback) {
    arrayB = _to_consumable_array(arrayB);
    var correlates = arrayA.every(function(elementA) {
        var elementB = extract(arrayB, function(elementB) {
            var result = callback(elementA, elementB);
            if (result) {
                return true;
            }
        }) || null;
        if (elementB !== null) {
            return true;
        }
    });
    return correlates;
}
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0LCBleHRyYWN0LCBwdXNoLCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShhcnJheUEsIGFycmF5Qikge1xuICBsZXQgY29tcGFyZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIGNvbnN0IGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIpO1xuXG4gICAgY29tcGFyZXMgPSBjb3JyZWxhdGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gY29tcGFyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wYXJlIiwiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJleHRyYWN0IiwiZmlsdGVyIiwiZmlyc3QiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsInB1c2giLCJyZXZlcnNlIiwicmlnaHREaWZmZXJlbmNlIiwic2Vjb25kIiwic2VwYXJhdGUiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiYXJyYXlBIiwiYXJyYXlCIiwiY29tcGFyZXMiLCJhcnJheUFMZW5ndGgiLCJsZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJjb3JyZWxhdGVzIiwiY2FsbGJhY2siLCJldmVyeSIsImVsZW1lbnRBIiwiZWxlbWVudEIiLCJyZXN1bHQiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLE9BQU87ZUFBUEE7O0lBVmtEQyxRQUFRO2VBQVJBOztJQXlCbERDLFNBQVM7ZUFBVEE7O0lBekJvQkMsT0FBTztlQUFQQTs7SUFBc0JDLE1BQU07ZUFBTkE7O0lBQTNDQyxLQUFLO2VBQUxBOztJQUFlQyxJQUFJO2VBQUpBOztJQStDZEMsY0FBYztlQUFkQTs7SUEvQ21DQyxLQUFLO2VBQUxBOztJQUFOQyxJQUFJO2VBQUpBOztJQUU3QkMsT0FBTztlQUFQQTs7SUF1REFDLGVBQWU7ZUFBZkE7O0lBekRNQyxNQUFNO2VBQU5BOztJQUFzREMsUUFBUTtlQUFSQTs7O3lCQUY3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBUVIsUUFBMEVTLHlCQUFjLENBQXhGVCxPQUFPTyxTQUFtRUUseUJBQWMsQ0FBakZGLFFBQVFOLE9BQTJEUSx5QkFBYyxDQUF6RVIsTUFBTUgsVUFBcURXLHlCQUFjLENBQW5FWCxTQUFTTSxPQUE0Q0sseUJBQWMsQ0FBMURMLE1BQU1ELFFBQXNDTSx5QkFBYyxDQUFwRE4sT0FBT0osU0FBK0JVLHlCQUFjLENBQTdDVixRQUFRSCxXQUF1QmEseUJBQWMsQ0FBckNiLFVBQVVZLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVyRSxTQUFTSCxRQUFRSyxLQUFLO0lBQzNCQSxRQUFRLEFBQ04scUJBQUdBLE9BQ0hMLE9BQU87SUFFVCxPQUFPSztBQUNUO0FBRU8sU0FBU2YsUUFBUWdCLE1BQU0sRUFBRUMsTUFBTTtJQUNwQyxJQUFJQyxXQUFXO0lBRWYsSUFBTUMsZUFBZUgsT0FBT0ksTUFBTSxFQUM1QkMsZUFBZUosT0FBT0csTUFBTTtJQUVsQyxJQUFJRCxpQkFBaUJFLGNBQWM7UUFDakMsSUFBTUMsYUFBYXBCLFVBQVVjLFFBQVFDO1FBRXJDQyxXQUFXSSxZQUFhLEdBQUc7SUFDN0I7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU2hCLFVBQVVjLE1BQU0sRUFBRUMsTUFBTSxFQUFFTSxRQUFRO0lBQ2hETixTQUNFLHFCQUFHQTtJQUdMLElBQU1LLGFBQWFOLE9BQU9RLEtBQUssQ0FBQyxTQUFDQztRQUMvQixJQUFNQyxXQUFXdkIsUUFBUWMsUUFBUSxTQUFDUztZQUNoQyxJQUFNQyxTQUFTSixTQUFTRSxVQUFVQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxhQUFhLE1BQU07WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU2YsZUFBZVMsTUFBTSxFQUFFQyxNQUFNO0lBQzNDYixPQUFPWSxRQUFRLFNBQUNTO1FBQ2QsSUFBTUcseUJBQXlCWCxPQUFPWSxRQUFRLENBQUNKO1FBRS9DLElBQUksQ0FBQ0csd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTakIsZ0JBQWdCSyxNQUFNLEVBQUVDLE1BQU07SUFDNUNiLE9BQU9hLFFBQVEsU0FBQ1M7UUFDZCxJQUFNSSx5QkFBeUJkLE9BQU9hLFFBQVEsQ0FBQ0g7UUFFL0MsSUFBSSxDQUFDSSx3QkFBd0I7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7QUFDRiJ9