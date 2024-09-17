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
    find: function() {
        return find;
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
    prune: function() {
        return prune;
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
    },
    tail: function() {
        return tail;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, extract = _necessary.arrayUtilities.extract, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, find = _necessary.arrayUtilities.find, match = _necessary.arrayUtilities.match, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
function reverse(array) {
    array = _to_consumable_array(array).reverse();
    return array;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0LCBleHRyYWN0LCB0YWlsLCBwdXNoLCBmaW5kLCBtYXRjaCwgcHJ1bmUsIGZpbHRlciwgY29tcHJlc3MsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCID0gWyAgLy8vXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29uc3QgY29ycmVsYXRlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ycmVsYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiY29ycmVsYXRlIiwiZXh0cmFjdCIsImZpbHRlciIsImZpbmQiLCJmaXJzdCIsImxhc3QiLCJsZWZ0RGlmZmVyZW5jZSIsIm1hdGNoIiwicHJ1bmUiLCJwdXNoIiwicmV2ZXJzZSIsInJpZ2h0RGlmZmVyZW5jZSIsInNlY29uZCIsInNlcGFyYXRlIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJhcnJheUEiLCJhcnJheUIiLCJjYWxsYmFjayIsImNvcnJlbGF0ZXMiLCJldmVyeSIsImVsZW1lbnRBIiwiZWxlbWVudEIiLCJyZXN1bHQiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJcUZBLFFBQVE7ZUFBUkE7O0lBVXJFQyxTQUFTO2VBQVRBOztJQVZvQkMsT0FBTztlQUFQQTs7SUFBeUNDLE1BQU07ZUFBTkE7O0lBQXBCQyxJQUFJO2VBQUpBOztJQUExQ0MsS0FBSztlQUFMQTs7SUFBZUMsSUFBSTtlQUFKQTs7SUFnQ2RDLGNBQWM7ZUFBZEE7O0lBaEMrQ0MsS0FBSztlQUFMQTs7SUFBT0MsS0FBSztlQUFMQTs7SUFBbkJDLElBQUk7ZUFBSkE7O0lBRW5DQyxPQUFPO2VBQVBBOztJQXdDQUMsZUFBZTtlQUFmQTs7SUExQ01DLE1BQU07ZUFBTkE7O0lBQXlFQyxRQUFRO2VBQVJBOztJQUFsREMsSUFBSTtlQUFKQTs7O3lCQUZkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRVixRQUE2RlcseUJBQWMsQ0FBM0dYLE9BQU9RLFNBQXNGRyx5QkFBYyxDQUFwR0gsUUFBUVAsT0FBOEVVLHlCQUFjLENBQTVGVixNQUFNSixVQUF3RWMseUJBQWMsQ0FBdEZkLFNBQVNhLE9BQStEQyx5QkFBYyxDQUE3RUQsTUFBTUwsT0FBeURNLHlCQUFjLENBQXZFTixNQUFNTixPQUFtRFkseUJBQWMsQ0FBakVaLE1BQU1JLFFBQTZDUSx5QkFBYyxDQUEzRFIsT0FBT0MsUUFBc0NPLHlCQUFjLENBQXBEUCxPQUFPTixTQUErQmEseUJBQWMsQ0FBN0NiLFFBQVFILFdBQXVCZ0IseUJBQWMsQ0FBckNoQixVQUFVYyxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFeEYsU0FBU0gsUUFBUU0sS0FBSztJQUMzQkEsUUFBUSxBQUNOLHFCQUFHQSxPQUNITixPQUFPO0lBRVQsT0FBT007QUFDVDtBQUVPLFNBQVNoQixVQUFVaUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7SUFDaERELFNBQ0UscUJBQUdBO0lBR0wsSUFBTUUsYUFBYUgsT0FBT0ksS0FBSyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFdBQVd0QixRQUFRaUIsUUFBUSxTQUFDSztZQUNoQyxJQUFNQyxTQUFTTCxTQUFTRyxVQUFVQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxhQUFhLE1BQU07WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU2QsZUFBZVcsTUFBTSxFQUFFQyxNQUFNO0lBQzNDaEIsT0FBT2UsUUFBUSxTQUFDSztRQUNkLElBQU1HLHlCQUF5QlAsT0FBT1EsUUFBUSxDQUFDSjtRQUUvQyxJQUFJLENBQUNHLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU2QsZ0JBQWdCTSxNQUFNLEVBQUVDLE1BQU07SUFDNUNoQixPQUFPZ0IsUUFBUSxTQUFDSztRQUNkLElBQU1JLHlCQUF5QlYsT0FBT1MsUUFBUSxDQUFDSDtRQUUvQyxJQUFJLENBQUNJLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGIn0=