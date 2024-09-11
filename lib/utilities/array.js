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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, extract = _necessary.arrayUtilities.extract, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, match = _necessary.arrayUtilities.match, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0LCBleHRyYWN0LCB0YWlsLCBwdXNoLCBtYXRjaCwgcHJ1bmUsIGZpbHRlciwgY29tcHJlc3MsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIpIHtcbiAgbGV0IGNvbXBhcmVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBjb25zdCBjb3JyZWxhdGVzID0gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCKTtcblxuICAgIGNvbXBhcmVzID0gY29ycmVsYXRlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29tcGFyZSIsImNvbXByZXNzIiwiY29ycmVsYXRlIiwiZXh0cmFjdCIsImZpbHRlciIsImZpcnN0IiwibGFzdCIsImxlZnREaWZmZXJlbmNlIiwibWF0Y2giLCJwcnVuZSIsInB1c2giLCJyZXZlcnNlIiwicmlnaHREaWZmZXJlbmNlIiwic2Vjb25kIiwic2VwYXJhdGUiLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImFycmF5QSIsImFycmF5QiIsImNvbXBhcmVzIiwiYXJyYXlBTGVuZ3RoIiwibGVuZ3RoIiwiYXJyYXlCTGVuZ3RoIiwiY29ycmVsYXRlcyIsImNhbGxiYWNrIiwiZXZlcnkiLCJlbGVtZW50QSIsImVsZW1lbnRCIiwicmVzdWx0IiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2dCQSxPQUFPO2VBQVBBOztJQVYrREMsUUFBUTtlQUFSQTs7SUF5Qi9EQyxTQUFTO2VBQVRBOztJQXpCb0JDLE9BQU87ZUFBUEE7O0lBQW1DQyxNQUFNO2VBQU5BOztJQUF4REMsS0FBSztlQUFMQTs7SUFBZUMsSUFBSTtlQUFKQTs7SUErQ2RDLGNBQWM7ZUFBZEE7O0lBL0N5Q0MsS0FBSztlQUFMQTs7SUFBT0MsS0FBSztlQUFMQTs7SUFBYkMsSUFBSTtlQUFKQTs7SUFFbkNDLE9BQU87ZUFBUEE7O0lBdURBQyxlQUFlO2VBQWZBOztJQXpETUMsTUFBTTtlQUFOQTs7SUFBbUVDLFFBQVE7ZUFBUkE7O0lBQTVDQyxJQUFJO2VBQUpBOzs7eUJBRmQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQVFWLFFBQXVGVyx5QkFBYyxDQUFyR1gsT0FBT1EsU0FBZ0ZHLHlCQUFjLENBQTlGSCxRQUFRUCxPQUF3RVUseUJBQWMsQ0FBdEZWLE1BQU1ILFVBQWtFYSx5QkFBYyxDQUFoRmIsU0FBU1ksT0FBeURDLHlCQUFjLENBQXZFRCxNQUFNTCxPQUFtRE0seUJBQWMsQ0FBakVOLE1BQU1GLFFBQTZDUSx5QkFBYyxDQUEzRFIsT0FBT0MsUUFBc0NPLHlCQUFjLENBQXBEUCxPQUFPTCxTQUErQlkseUJBQWMsQ0FBN0NaLFFBQVFILFdBQXVCZSx5QkFBYyxDQUFyQ2YsVUFBVWEsV0FBYUUseUJBQWMsQ0FBM0JGO0FBRWxGLFNBQVNILFFBQVFNLEtBQUs7SUFDM0JBLFFBQVEsQUFDTixxQkFBR0EsT0FDSE4sT0FBTztJQUVULE9BQU9NO0FBQ1Q7QUFFTyxTQUFTakIsUUFBUWtCLE1BQU0sRUFBRUMsTUFBTTtJQUNwQyxJQUFJQyxXQUFXO0lBRWYsSUFBTUMsZUFBZUgsT0FBT0ksTUFBTSxFQUM1QkMsZUFBZUosT0FBT0csTUFBTTtJQUVsQyxJQUFJRCxpQkFBaUJFLGNBQWM7UUFDakMsSUFBTUMsYUFBYXRCLFVBQVVnQixRQUFRQztRQUVyQ0MsV0FBV0ksWUFBYSxHQUFHO0lBQzdCO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNsQixVQUFVZ0IsTUFBTSxFQUFFQyxNQUFNLEVBQUVNLFFBQVE7SUFDaEROLFNBQ0UscUJBQUdBO0lBR0wsSUFBTUssYUFBYU4sT0FBT1EsS0FBSyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFdBQVd6QixRQUFRZ0IsUUFBUSxTQUFDUztZQUNoQyxJQUFNQyxTQUFTSixTQUFTRSxVQUFVQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxhQUFhLE1BQU07WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU2pCLGVBQWVXLE1BQU0sRUFBRUMsTUFBTTtJQUMzQ2YsT0FBT2MsUUFBUSxTQUFDUztRQUNkLElBQU1HLHlCQUF5QlgsT0FBT1ksUUFBUSxDQUFDSjtRQUUvQyxJQUFJLENBQUNHLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU2xCLGdCQUFnQk0sTUFBTSxFQUFFQyxNQUFNO0lBQzVDZixPQUFPZSxRQUFRLFNBQUNTO1FBQ2QsSUFBTUkseUJBQXlCZCxPQUFPYSxRQUFRLENBQUNIO1FBRS9DLElBQUksQ0FBQ0ksd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0YifQ==