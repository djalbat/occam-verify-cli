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
    rightDifference: function() {
        return rightDifference;
    },
    second: function() {
        return second;
    },
    separate: function() {
        return separate;
    },
    someSubArray: function() {
        return someSubArray;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interop_require_default(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, extract = _necessary.arrayUtilities.extract, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
function someSubArray(array, subArrayLength, callback) {
    var found = false;
    var arrayLength = array.length, indexesLength = arrayLength, permutationLength = subArrayLength; ///
    if (permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH) {
        var offset, permutations;
        if (indexesLength > _constants.MAXIMUM_INDEXES_LENGTH) {
            offset = indexesLength - _constants.MAXIMUM_INDEXES_LENGTH;
            permutations = _permutationsMatrix.default[_constants.MAXIMUM_INDEXES_LENGTH][permutationLength];
        } else {
            offset = 0;
            permutations = _permutationsMatrix.default[indexesLength][permutationLength];
        }
        if (permutations !== null) {
            found = permutations.some(function(permutation) {
                if (permutation !== null) {
                    var subArray = [];
                    for(var position = 0; position < permutationLength; position++){
                        var index = permutation[position] + offset, element = array[index];
                        subArray.push(element);
                    }
                    var passed = callback(subArray);
                    if (passed) {
                        return true;
                    }
                }
            });
        }
    }
    return found;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBleHRyYWN0LCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29tZVN1YkFycmF5KGFycmF5LCBzdWJBcnJheUxlbmd0aCwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGluZGV4ZXNMZW5ndGggPSBhcnJheUxlbmd0aCwgLy8vXG4gICAgICAgIHBlcm11dGF0aW9uTGVuZ3RoID0gc3ViQXJyYXlMZW5ndGg7IC8vL1xuXG4gIGlmIChwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCkge1xuICAgIGxldCBvZmZzZXQsXG4gICAgICAgIHBlcm11dGF0aW9ucztcblxuICAgIGlmIChpbmRleGVzTGVuZ3RoID4gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCkge1xuICAgICAgb2Zmc2V0ID0gaW5kZXhlc0xlbmd0aCAtIE1BWElNVU1fSU5ERVhFU19MRU5HVEg7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtNQVhJTVVNX0lOREVYRVNfTEVOR1RIXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtpbmRleGVzTGVuZ3RoXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHBlcm11dGF0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgZm91bmQgPSBwZXJtdXRhdGlvbnMuc29tZSgocGVybXV0YXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm11dGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3ViQXJyYXkgPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwZXJtdXRhdGlvbkxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZXJtdXRhdGlvbltwb3NpdGlvbl0gKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBzdWJBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKHN1YkFycmF5KTtcblxuICAgICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJleHRyYWN0IiwiZmlsdGVyIiwiZmlyc3QiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsInBydW5lIiwicHVzaCIsInJpZ2h0RGlmZmVyZW5jZSIsInNlY29uZCIsInNlcGFyYXRlIiwic29tZVN1YkFycmF5IiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsInN1YkFycmF5TGVuZ3RoIiwiY2FsbGJhY2siLCJmb3VuZCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXhlc0xlbmd0aCIsInBlcm11dGF0aW9uTGVuZ3RoIiwiTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEgiLCJvZmZzZXQiLCJwZXJtdXRhdGlvbnMiLCJNQVhJTVVNX0lOREVYRVNfTEVOR1RIIiwicGVybXV0YXRpb25zTWF0cml4Iiwic29tZSIsInBlcm11dGF0aW9uIiwic3ViQXJyYXkiLCJwb3NpdGlvbiIsImluZGV4IiwiZWxlbWVudCIsInBhc3NlZCIsImFycmF5QSIsImFycmF5QiIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiZWxlbWVudEIiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFReUVBLFFBQVE7ZUFBUkE7O0lBQXhCQyxPQUFPO2VBQVBBOztJQUFnQkMsTUFBTTtlQUFOQTs7SUFBbERDLEtBQUs7ZUFBTEE7O0lBQWVDLElBQUk7ZUFBSkE7O0lBZ0RkQyxjQUFjO2VBQWRBOztJQWhEMENDLEtBQUs7ZUFBTEE7O0lBQWhCQyxLQUFLO2VBQUxBOztJQUFOQyxJQUFJO2VBQUpBOztJQTBEcEJDLGVBQWU7ZUFBZkE7O0lBMURNQyxNQUFNO2VBQU5BOztJQUE2REMsUUFBUTtlQUFSQTs7SUFFbkVDLFlBQVk7ZUFBWkE7Ozt5QkFSZTt5RUFFQTt5QkFFb0M7Ozs7OztBQUU1RCxJQUFRVCxRQUFpRlUseUJBQWMsQ0FBL0ZWLE9BQU9PLFNBQTBFRyx5QkFBYyxDQUF4RkgsUUFBUU4sT0FBa0VTLHlCQUFjLENBQWhGVCxNQUFNSSxPQUE0REsseUJBQWMsQ0FBMUVMLE1BQU1ELFFBQXNETSx5QkFBYyxDQUFwRU4sT0FBT04sVUFBK0NZLHlCQUFjLENBQTdEWixTQUFTSyxRQUFzQ08seUJBQWMsQ0FBcERQLE9BQU9KLFNBQStCVyx5QkFBYyxDQUE3Q1gsUUFBUUYsV0FBdUJhLHlCQUFjLENBQXJDYixVQUFVVyxXQUFhRSx5QkFBYyxDQUEzQkY7QUFFNUUsU0FBU0MsYUFBYUUsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLFFBQVE7SUFDMUQsSUFBSUMsUUFBUTtJQUVaLElBQU1DLGNBQWNKLE1BQU1LLE1BQU0sRUFDMUJDLGdCQUFnQkYsYUFDaEJHLG9CQUFvQk4sZ0JBQWdCLEdBQUc7SUFFN0MsSUFBSU0scUJBQXFCQyxxQ0FBMEIsRUFBRTtRQUNuRCxJQUFJQyxRQUNBQztRQUVKLElBQUlKLGdCQUFnQkssaUNBQXNCLEVBQUU7WUFDMUNGLFNBQVNILGdCQUFnQkssaUNBQXNCO1lBRS9DRCxlQUFlRSwyQkFBa0IsQ0FBQ0QsaUNBQXNCLENBQUMsQ0FBQ0osa0JBQWtCO1FBQzlFLE9BQU87WUFDTEUsU0FBUztZQUVUQyxlQUFlRSwyQkFBa0IsQ0FBQ04sY0FBYyxDQUFDQyxrQkFBa0I7UUFDckU7UUFFQSxJQUFJRyxpQkFBaUIsTUFBTTtZQUN6QlAsUUFBUU8sYUFBYUcsSUFBSSxDQUFDLFNBQUNDO2dCQUN6QixJQUFJQSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBU3JCLElBQUksQ0FBQ3dCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO0FBRU8sU0FBU1osZUFBZTZCLE1BQU0sRUFBRUMsTUFBTTtJQUMzQ2pDLE9BQU9nQyxRQUFRLFNBQUNFO1FBQ2QsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTNUIsZ0JBQWdCeUIsTUFBTSxFQUFFQyxNQUFNO0lBQzVDakMsT0FBT2lDLFFBQVEsU0FBQ0k7UUFDZCxJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7QUFDRiJ9