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
    clear: function() {
        return clear;
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
    find: function() {
        return find;
    },
    first: function() {
        return first;
    },
    front: function() {
        return front;
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, find = _necessary.arrayUtilities.find, match = _necessary.arrayUtilities.match, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, extract = _necessary.arrayUtilities.extract, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZnJvbnQsIHRhaWwsIHB1c2gsIGZpbmQsIG1hdGNoLCBjbGVhciwgcHJ1bmUsIGV4dHJhY3QsIGZpbHRlciwgY29tcHJlc3MsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCID0gWyAgLy8vXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29uc3QgY29ycmVsYXRlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ycmVsYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNsZWFyIiwiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJleHRyYWN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZnJvbnQiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsInBydW5lIiwicHVzaCIsInJldmVyc2UiLCJyaWdodERpZmZlcmVuY2UiLCJzZXBhcmF0ZSIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiYXJyYXlBIiwiYXJyYXlCIiwiY2FsbGJhY2siLCJjb3JyZWxhdGVzIiwiZXZlcnkiLCJlbGVtZW50QSIsImVsZW1lbnRCIiwicmVzdWx0IiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSTREQSxLQUFLO2VBQUxBOztJQUErQkMsUUFBUTtlQUFSQTs7SUFVM0VDLFNBQVM7ZUFBVEE7O0lBVjBEQyxPQUFPO2VBQVBBOztJQUFTQyxNQUFNO2VBQU5BOztJQUFwQ0MsSUFBSTtlQUFKQTs7SUFBaENDLEtBQUs7ZUFBTEE7O0lBQWFDLEtBQUs7ZUFBTEE7O0lBQU5DLElBQUk7ZUFBSkE7O0lBZ0NOQyxjQUFjO2VBQWRBOztJQWhDcUNDLEtBQUs7ZUFBTEE7O0lBQWNDLEtBQUs7ZUFBTEE7O0lBQTFCQyxJQUFJO2VBQUpBOztJQUV6QkMsT0FBTztlQUFQQTs7SUF3Q0FDLGVBQWU7ZUFBZkE7O0lBMUNxRkMsUUFBUTtlQUFSQTs7SUFBbEVDLElBQUk7ZUFBSkE7Ozt5QkFGSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBUVYsUUFBbUdXLHlCQUFjLENBQWpIWCxPQUFPRSxPQUE0RlMseUJBQWMsQ0FBMUdULE1BQU1ELFFBQXNGVSx5QkFBYyxDQUFwR1YsT0FBT1MsT0FBK0VDLHlCQUFjLENBQTdGRCxNQUFNSixPQUF5RUsseUJBQWMsQ0FBdkZMLE1BQU1QLE9BQW1FWSx5QkFBYyxDQUFqRlosTUFBTUssUUFBNkRPLHlCQUFjLENBQTNFUCxPQUFPVixRQUFzRGlCLHlCQUFjLENBQXBFakIsT0FBT1csUUFBK0NNLHlCQUFjLENBQTdETixPQUFPUixVQUF3Q2MseUJBQWMsQ0FBdERkLFNBQVNDLFNBQStCYSx5QkFBYyxDQUE3Q2IsUUFBUUgsV0FBdUJnQix5QkFBYyxDQUFyQ2hCLFVBQVVjLFdBQWFFLHlCQUFjLENBQTNCRjtBQUU5RixTQUFTRixRQUFRSyxLQUFLO0lBQzNCQSxRQUFRLEFBQ04scUJBQUdBLE9BQ0hMLE9BQU87SUFFVCxPQUFPSztBQUNUO0FBRU8sU0FBU2hCLFVBQVVpQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtJQUNoREQsU0FDRSxxQkFBR0E7SUFHTCxJQUFNRSxhQUFhSCxPQUFPSSxLQUFLLENBQUMsU0FBQ0M7UUFDL0IsSUFBTUMsV0FBV3RCLFFBQVFpQixRQUFRLFNBQUNLO1lBQ2hDLElBQU1DLFNBQVNMLFNBQVNHLFVBQVVDO1lBRWxDLElBQUlDLFFBQVE7Z0JBQ1YsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLElBQUlELGFBQWEsTUFBTTtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTYixlQUFlVSxNQUFNLEVBQUVDLE1BQU07SUFDM0NoQixPQUFPZSxRQUFRLFNBQUNLO1FBQ2QsSUFBTUcseUJBQXlCUCxPQUFPUSxRQUFRLENBQUNKO1FBRS9DLElBQUksQ0FBQ0csd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTYixnQkFBZ0JLLE1BQU0sRUFBRUMsTUFBTTtJQUM1Q2hCLE9BQU9nQixRQUFRLFNBQUNLO1FBQ2QsSUFBTUkseUJBQXlCVixPQUFPUyxRQUFRLENBQUNIO1FBRS9DLElBQUksQ0FBQ0ksd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0YifQ==