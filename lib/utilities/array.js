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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0LCBleHRyYWN0LCBwdXNoLCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJleHRyYWN0IiwiZmlsdGVyIiwiZmlyc3QiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsInB1c2giLCJyZXZlcnNlIiwicmlnaHREaWZmZXJlbmNlIiwic2Vjb25kIiwic2VwYXJhdGUiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiYXJyYXlBIiwiYXJyYXlCIiwiY2FsbGJhY2siLCJjb3JyZWxhdGVzIiwiZXZlcnkiLCJlbGVtZW50QSIsImVsZW1lbnRCIiwicmVzdWx0IiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWtFQSxRQUFRO2VBQVJBOztJQVVsREMsU0FBUztlQUFUQTs7SUFWb0JDLE9BQU87ZUFBUEE7O0lBQXNCQyxNQUFNO2VBQU5BOztJQUEzQ0MsS0FBSztlQUFMQTs7SUFBZUMsSUFBSTtlQUFKQTs7SUFnQ2RDLGNBQWM7ZUFBZEE7O0lBaENtQ0MsS0FBSztlQUFMQTs7SUFBTkMsSUFBSTtlQUFKQTs7SUFFN0JDLE9BQU87ZUFBUEE7O0lBd0NBQyxlQUFlO2VBQWZBOztJQTFDTUMsTUFBTTtlQUFOQTs7SUFBc0RDLFFBQVE7ZUFBUkE7Ozt5QkFGN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQVFSLFFBQTBFUyx5QkFBYyxDQUF4RlQsT0FBT08sU0FBbUVFLHlCQUFjLENBQWpGRixRQUFRTixPQUEyRFEseUJBQWMsQ0FBekVSLE1BQU1ILFVBQXFEVyx5QkFBYyxDQUFuRVgsU0FBU00sT0FBNENLLHlCQUFjLENBQTFETCxNQUFNRCxRQUFzQ00seUJBQWMsQ0FBcEROLE9BQU9KLFNBQStCVSx5QkFBYyxDQUE3Q1YsUUFBUUgsV0FBdUJhLHlCQUFjLENBQXJDYixVQUFVWSxXQUFhQyx5QkFBYyxDQUEzQkQ7QUFFckUsU0FBU0gsUUFBUUssS0FBSztJQUMzQkEsUUFBUSxBQUNOLHFCQUFHQSxPQUNITCxPQUFPO0lBRVQsT0FBT0s7QUFDVDtBQUVPLFNBQVNiLFVBQVVjLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRO0lBQ2hERCxTQUNFLHFCQUFHQTtJQUdMLElBQU1FLGFBQWFILE9BQU9JLEtBQUssQ0FBQyxTQUFDQztRQUMvQixJQUFNQyxXQUFXbkIsUUFBUWMsUUFBUSxTQUFDSztZQUNoQyxJQUFNQyxTQUFTTCxTQUFTRyxVQUFVQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxhQUFhLE1BQU07WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU1osZUFBZVMsTUFBTSxFQUFFQyxNQUFNO0lBQzNDYixPQUFPWSxRQUFRLFNBQUNLO1FBQ2QsSUFBTUcseUJBQXlCUCxPQUFPUSxRQUFRLENBQUNKO1FBRS9DLElBQUksQ0FBQ0csd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTYixnQkFBZ0JLLE1BQU0sRUFBRUMsTUFBTTtJQUM1Q2IsT0FBT2EsUUFBUSxTQUFDSztRQUNkLElBQU1JLHlCQUF5QlYsT0FBT1MsUUFBUSxDQUFDSDtRQUUvQyxJQUFJLENBQUNJLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGIn0=