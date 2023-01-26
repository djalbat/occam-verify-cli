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
    second: function() {
        return second;
    },
    third: function() {
        return third;
    },
    last: function() {
        return last;
    },
    push: function() {
        return push;
    },
    prune: function() {
        return prune;
    },
    filter: function() {
        return filter;
    },
    first: function() {
        return first;
    },
    someSubArray: function() {
        return someSubArray;
    },
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interopRequireDefault(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter;
function first(array) {
    return array[0];
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IHNlY29uZCwgdGhpcmQsIGxhc3QsIHB1c2gsIHBydW5lLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5WzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZVN1YkFycmF5KGFycmF5LCBzdWJBcnJheUxlbmd0aCwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGluZGV4ZXNMZW5ndGggPSBhcnJheUxlbmd0aCwgLy8vXG4gICAgICAgIHBlcm11dGF0aW9uTGVuZ3RoID0gc3ViQXJyYXlMZW5ndGg7IC8vL1xuXG4gIGlmIChwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCkge1xuICAgIGxldCBvZmZzZXQsXG4gICAgICAgIHBlcm11dGF0aW9ucztcblxuICAgIGlmIChpbmRleGVzTGVuZ3RoID4gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCkge1xuICAgICAgb2Zmc2V0ID0gaW5kZXhlc0xlbmd0aCAtIE1BWElNVU1fSU5ERVhFU19MRU5HVEg7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtNQVhJTVVNX0lOREVYRVNfTEVOR1RIXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtpbmRleGVzTGVuZ3RoXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHBlcm11dGF0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgZm91bmQgPSBwZXJtdXRhdGlvbnMuc29tZSgocGVybXV0YXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm11dGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3ViQXJyYXkgPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwZXJtdXRhdGlvbkxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZXJtdXRhdGlvbltwb3NpdGlvbl0gKyBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBzdWJBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKHN1YkFycmF5KTtcblxuICAgICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2Vjb25kIiwidGhpcmQiLCJsYXN0IiwicHVzaCIsInBydW5lIiwiZmlsdGVyIiwiZmlyc3QiLCJzb21lU3ViQXJyYXkiLCJsZWZ0RGlmZmVyZW5jZSIsInJpZ2h0RGlmZmVyZW5jZSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJzdWJBcnJheUxlbmd0aCIsImNhbGxiYWNrIiwiZm91bmQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsImluZGV4ZXNMZW5ndGgiLCJwZXJtdXRhdGlvbkxlbmd0aCIsIk1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIIiwib2Zmc2V0IiwicGVybXV0YXRpb25zIiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInBlcm11dGF0aW9uc01hdHJpeCIsInNvbWUiLCJwZXJtdXRhdGlvbiIsInN1YkFycmF5IiwicG9zaXRpb24iLCJpbmRleCIsImVsZW1lbnQiLCJwYXNzZWQiLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImVsZW1lbnRCIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWVBLE1BQU07ZUFBTkE7O0lBQVFDLEtBQUs7ZUFBTEE7O0lBQU9DLElBQUk7ZUFBSkE7O0lBQU1DLElBQUk7ZUFBSkE7O0lBQU1DLEtBQUs7ZUFBTEE7O0lBQU9DLE1BQU07ZUFBTkE7O0lBRWpDQyxLQUFLO2VBQUxBOztJQUlBQyxZQUFZO2VBQVpBOztJQThDQUMsY0FBYztlQUFkQTs7SUFVQUMsZUFBZTtlQUFmQTs7O3lCQXBFZTt1RUFFQTt5QkFFb0M7Ozs7OztBQUU1RCxJQUFRVCxTQUE2Q1UseUJBQWMsQ0FBM0RWLFFBQVFDLFFBQXFDUyx5QkFBYyxDQUFuRFQsT0FBT0MsT0FBOEJRLHlCQUFjLENBQTVDUixNQUFNQyxPQUF3Qk8seUJBQWMsQ0FBdENQLE1BQU1DLFFBQWtCTSx5QkFBYyxDQUFoQ04sT0FBT0MsU0FBV0sseUJBQWMsQ0FBekJMO0FBRTFDLFNBQVNDLE1BQU1LLEtBQUssRUFBRTtJQUMzQixPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUNqQjtBQUVPLFNBQVNKLGFBQWFJLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUU7SUFDNUQsSUFBSUMsUUFBUSxLQUFLO0lBRWpCLElBQU1DLGNBQWNKLE1BQU1LLE1BQU0sRUFDMUJDLGdCQUFnQkYsYUFDaEJHLG9CQUFvQk4sZ0JBQWdCLEdBQUc7SUFFN0MsSUFBSU0scUJBQXFCQyxxQ0FBMEIsRUFBRTtRQUNuRCxJQUFJQyxRQUNBQztRQUVKLElBQUlKLGdCQUFnQkssaUNBQXNCLEVBQUU7WUFDMUNGLFNBQVNILGdCQUFnQkssaUNBQXNCO1lBRS9DRCxlQUFlRSwyQkFBa0IsQ0FBQ0QsaUNBQXNCLENBQUMsQ0FBQ0osa0JBQWtCO1FBQzlFLE9BQU87WUFDTEUsU0FBUztZQUVUQyxlQUFlRSwyQkFBa0IsQ0FBQ04sY0FBYyxDQUFDQyxrQkFBa0I7UUFDckUsQ0FBQztRQUVELElBQUlHLGlCQUFpQixJQUFJLEVBQUU7WUFDekJQLFFBQVFPLGFBQWFHLElBQUksQ0FBQyxTQUFDQyxhQUFnQjtnQkFDekMsSUFBSUEsZ0JBQWdCLElBQUksRUFBRTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBU3ZCLElBQUksQ0FBQzBCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztZQUNIO1FBQ0YsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPaEI7QUFDVDtBQUVPLFNBQVNOLGVBQWV1QixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUM3QzNCLE9BQU8wQixRQUFRLFNBQUNFLFVBQWE7UUFDM0IsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGO0FBRU8sU0FBU3pCLGdCQUFnQnNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzlDM0IsT0FBTzJCLFFBQVEsU0FBQ0ksVUFBYTtRQUMzQixJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0FBQ0YifQ==