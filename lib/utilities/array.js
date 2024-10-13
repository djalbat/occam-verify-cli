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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, find = _necessary.arrayUtilities.find, match = _necessary.arrayUtilities.match, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, correlate = _necessary.arrayUtilities.correlate, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZnJvbnQsIHRhaWwsIHB1c2gsIGZpbmQsIG1hdGNoLCBjbGVhciwgcHJ1bmUsIHJldmVyc2UsIGV4dHJhY3QsIGNvcnJlbGF0ZSwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY2xlYXIiLCJjb21wcmVzcyIsImNvcnJlbGF0ZSIsImV4dHJhY3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmcm9udCIsImxhc3QiLCJsZWZ0RGlmZmVyZW5jZSIsIm1hdGNoIiwicHJ1bmUiLCJwdXNoIiwicmV2ZXJzZSIsInJpZ2h0RGlmZmVyZW5jZSIsInNlcGFyYXRlIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUk0REEsS0FBSztlQUFMQTs7SUFBbURDLFFBQVE7ZUFBUkE7O0lBQW5CQyxTQUFTO2VBQVRBOztJQUFUQyxPQUFPO2VBQVBBOztJQUFvQkMsTUFBTTtlQUFOQTs7SUFBeERDLElBQUk7ZUFBSkE7O0lBQWhDQyxLQUFLO2VBQUxBOztJQUFhQyxLQUFLO2VBQUxBOztJQUFOQyxJQUFJO2VBQUpBOztJQUVOQyxjQUFjO2VBQWRBOztJQUZxQ0MsS0FBSztlQUFMQTs7SUFBY0MsS0FBSztlQUFMQTs7SUFBMUJDLElBQUk7ZUFBSkE7O0lBQWlDQyxPQUFPO2VBQVBBOztJQVkxREMsZUFBZTtlQUFmQTs7SUFaeUdDLFFBQVE7ZUFBUkE7O0lBQXRGQyxJQUFJO2VBQUpBOzs7eUJBRko7QUFFeEIsSUFBUVYsUUFBdUhXLHlCQUFjLENBQXJJWCxPQUFPRSxPQUFnSFMseUJBQWMsQ0FBOUhULE1BQU1ELFFBQTBHVSx5QkFBYyxDQUF4SFYsT0FBT1MsT0FBbUdDLHlCQUFjLENBQWpIRCxNQUFNSixPQUE2RksseUJBQWMsQ0FBM0dMLE1BQU1QLE9BQXVGWSx5QkFBYyxDQUFyR1osTUFBTUssUUFBaUZPLHlCQUFjLENBQS9GUCxPQUFPVixRQUEwRWlCLHlCQUFjLENBQXhGakIsT0FBT1csUUFBbUVNLHlCQUFjLENBQWpGTixPQUFPRSxVQUE0REkseUJBQWMsQ0FBMUVKLFNBQVNWLFVBQW1EYyx5QkFBYyxDQUFqRWQsU0FBU0QsWUFBMENlLHlCQUFjLENBQXhEZixXQUFXRSxTQUErQmEseUJBQWMsQ0FBN0NiLFFBQVFILFdBQXVCZ0IseUJBQWMsQ0FBckNoQixVQUFVYyxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFbEgsU0FBU04sZUFBZVMsTUFBTSxFQUFFQyxNQUFNO0lBQzNDZixPQUFPYyxRQUFRLFNBQUNFO1FBQ2QsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTUCxnQkFBZ0JJLE1BQU0sRUFBRUMsTUFBTTtJQUM1Q2YsT0FBT2UsUUFBUSxTQUFDSTtRQUNkLElBQU1DLHlCQUF5Qk4sT0FBT0ksUUFBUSxDQUFDQztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtBQUNGIn0=