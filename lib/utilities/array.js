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
    push: function() {
        return push;
    },
    last: function() {
        return last;
    },
    prune: function() {
        return prune;
    },
    first: function() {
        return first;
    },
    third: function() {
        return third;
    },
    second: function() {
        return second;
    },
    filter: function() {
        return filter;
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
var push = _necessary.arrayUtilities.push, last = _necessary.arrayUtilities.last, prune = _necessary.arrayUtilities.prune, first = _necessary.arrayUtilities.first, third = _necessary.arrayUtilities.third, second = _necessary.arrayUtilities.second, filter = _necessary.arrayUtilities.filter;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IHB1c2gsIGxhc3QsIHBydW5lLCBmaXJzdCwgdGhpcmQsIHNlY29uZCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVTdWJBcnJheShhcnJheSwgc3ViQXJyYXlMZW5ndGgsIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBpbmRleGVzTGVuZ3RoID0gYXJyYXlMZW5ndGgsIC8vL1xuICAgICAgICBwZXJtdXRhdGlvbkxlbmd0aCA9IHN1YkFycmF5TGVuZ3RoOyAvLy9cblxuICBpZiAocGVybXV0YXRpb25MZW5ndGggPD0gTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEgpIHtcbiAgICBsZXQgb2Zmc2V0LFxuICAgICAgICBwZXJtdXRhdGlvbnM7XG5cbiAgICBpZiAoaW5kZXhlc0xlbmd0aCA+IE1BWElNVU1fSU5ERVhFU19MRU5HVEgpIHtcbiAgICAgIG9mZnNldCA9IGluZGV4ZXNMZW5ndGggLSBNQVhJTVVNX0lOREVYRVNfTEVOR1RIO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbTUFYSU1VTV9JTkRFWEVTX0xFTkdUSF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbaW5kZXhlc0xlbmd0aF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH1cblxuICAgIGlmIChwZXJtdXRhdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGZvdW5kID0gcGVybXV0YXRpb25zLnNvbWUoKHBlcm11dGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YkFycmF5ID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGVybXV0YXRpb25MZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGVybXV0YXRpb25bcG9zaXRpb25dICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgc3ViQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhzdWJBcnJheSk7XG5cbiAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJsYXN0IiwicHJ1bmUiLCJmaXJzdCIsInRoaXJkIiwic2Vjb25kIiwiZmlsdGVyIiwic29tZVN1YkFycmF5IiwibGVmdERpZmZlcmVuY2UiLCJyaWdodERpZmZlcmVuY2UiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFlQSxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxLQUFLO2VBQUxBOztJQUFPQyxLQUFLO2VBQUxBOztJQUFPQyxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUFRQyxNQUFNO2VBQU5BOztJQUV4Q0MsWUFBWTtlQUFaQTs7SUE4Q0FDLGNBQWM7ZUFBZEE7O0lBVUFDLGVBQWU7ZUFBZkE7Ozt5QkFoRWU7dUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVQsT0FBb0RVLHlCQUFjLENBQWxFVixNQUFNQyxPQUE4Q1MseUJBQWMsQ0FBNURULE1BQU1DLFFBQXdDUSx5QkFBYyxDQUF0RFIsT0FBT0MsUUFBaUNPLHlCQUFjLENBQS9DUCxPQUFPQyxRQUEwQk0seUJBQWMsQ0FBeENOLE9BQU9DLFNBQW1CSyx5QkFBYyxDQUFqQ0wsUUFBUUMsU0FBV0kseUJBQWMsQ0FBekJKO0FBRWpELFNBQVNDLGFBQWFJLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUU7SUFDNUQsSUFBSUMsUUFBUSxLQUFLO0lBRWpCLElBQU1DLGNBQWNKLE1BQU1LLE1BQU0sRUFDMUJDLGdCQUFnQkYsYUFDaEJHLG9CQUFvQk4sZ0JBQWdCLEdBQUc7SUFFN0MsSUFBSU0scUJBQXFCQyxxQ0FBMEIsRUFBRTtRQUNuRCxJQUFJQyxRQUNBQztRQUVKLElBQUlKLGdCQUFnQkssaUNBQXNCLEVBQUU7WUFDMUNGLFNBQVNILGdCQUFnQkssaUNBQXNCO1lBRS9DRCxlQUFlRSwyQkFBa0IsQ0FBQ0QsaUNBQXNCLENBQUMsQ0FBQ0osa0JBQWtCO1FBQzlFLE9BQU87WUFDTEUsU0FBUztZQUVUQyxlQUFlRSwyQkFBa0IsQ0FBQ04sY0FBYyxDQUFDQyxrQkFBa0I7UUFDckUsQ0FBQztRQUVELElBQUlHLGlCQUFpQixJQUFJLEVBQUU7WUFDekJQLFFBQVFPLGFBQWFHLElBQUksQ0FBQyxTQUFDQyxhQUFnQjtnQkFDekMsSUFBSUEsZ0JBQWdCLElBQUksRUFBRTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBUzFCLElBQUksQ0FBQzZCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztZQUNIO1FBQ0YsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPaEI7QUFDVDtBQUVPLFNBQVNOLGVBQWV1QixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUM3QzFCLE9BQU95QixRQUFRLFNBQUNFLFVBQWE7UUFDM0IsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGO0FBRU8sU0FBU3pCLGdCQUFnQnNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzlDMUIsT0FBTzBCLFFBQVEsU0FBQ0ksVUFBYTtRQUMzQixJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0FBQ0YifQ==