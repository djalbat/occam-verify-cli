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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, find = _necessary.arrayUtilities.find, match = _necessary.arrayUtilities.match, prune = _necessary.arrayUtilities.prune, extract = _necessary.arrayUtilities.extract, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZnJvbnQsIHRhaWwsIHB1c2gsIGZpbmQsIG1hdGNoLCBwcnVuZSwgZXh0cmFjdCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJleHRyYWN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZnJvbnQiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsInBydW5lIiwicHVzaCIsInJldmVyc2UiLCJyaWdodERpZmZlcmVuY2UiLCJzZXBhcmF0ZSIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiYXJyYXlBIiwiYXJyYXlCIiwiY2FsbGJhY2siLCJjb3JyZWxhdGVzIiwiZXZlcnkiLCJlbGVtZW50QSIsImVsZW1lbnRCIiwicmVzdWx0IiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSW9GQSxRQUFRO2VBQVJBOztJQVVwRUMsU0FBUztlQUFUQTs7SUFWbURDLE9BQU87ZUFBUEE7O0lBQVNDLE1BQU07ZUFBTkE7O0lBQTdCQyxJQUFJO2VBQUpBOztJQUFoQ0MsS0FBSztlQUFMQTs7SUFBYUMsS0FBSztlQUFMQTs7SUFBTkMsSUFBSTtlQUFKQTs7SUFnQ05DLGNBQWM7ZUFBZEE7O0lBaENxQ0MsS0FBSztlQUFMQTs7SUFBT0MsS0FBSztlQUFMQTs7SUFBbkJDLElBQUk7ZUFBSkE7O0lBRXpCQyxPQUFPO2VBQVBBOztJQXdDQUMsZUFBZTtlQUFmQTs7SUExQzhFQyxRQUFRO2VBQVJBOztJQUEzREMsSUFBSTtlQUFKQTs7O3lCQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRVixRQUE0RlcseUJBQWMsQ0FBMUdYLE9BQU9FLE9BQXFGUyx5QkFBYyxDQUFuR1QsTUFBTUQsUUFBK0VVLHlCQUFjLENBQTdGVixPQUFPUyxPQUF3RUMseUJBQWMsQ0FBdEZELE1BQU1KLE9BQWtFSyx5QkFBYyxDQUFoRkwsTUFBTVAsT0FBNERZLHlCQUFjLENBQTFFWixNQUFNSyxRQUFzRE8seUJBQWMsQ0FBcEVQLE9BQU9DLFFBQStDTSx5QkFBYyxDQUE3RE4sT0FBT1IsVUFBd0NjLHlCQUFjLENBQXREZCxTQUFTQyxTQUErQmEseUJBQWMsQ0FBN0NiLFFBQVFILFdBQXVCZ0IseUJBQWMsQ0FBckNoQixVQUFVYyxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFdkYsU0FBU0YsUUFBUUssS0FBSztJQUMzQkEsUUFBUSxBQUNOLHFCQUFHQSxPQUNITCxPQUFPO0lBRVQsT0FBT0s7QUFDVDtBQUVPLFNBQVNoQixVQUFVaUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7SUFDaERELFNBQ0UscUJBQUdBO0lBR0wsSUFBTUUsYUFBYUgsT0FBT0ksS0FBSyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFdBQVd0QixRQUFRaUIsUUFBUSxTQUFDSztZQUNoQyxJQUFNQyxTQUFTTCxTQUFTRyxVQUFVQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxhQUFhLE1BQU07WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU2IsZUFBZVUsTUFBTSxFQUFFQyxNQUFNO0lBQzNDaEIsT0FBT2UsUUFBUSxTQUFDSztRQUNkLElBQU1HLHlCQUF5QlAsT0FBT1EsUUFBUSxDQUFDSjtRQUUvQyxJQUFJLENBQUNHLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU2IsZ0JBQWdCSyxNQUFNLEVBQUVDLE1BQU07SUFDNUNoQixPQUFPZ0IsUUFBUSxTQUFDSztRQUNkLElBQU1JLHlCQUF5QlYsT0FBT1MsUUFBUSxDQUFDSDtRQUUvQyxJQUFJLENBQUNJLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGIn0=