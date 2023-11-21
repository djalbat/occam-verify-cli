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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, clear = _necessary.arrayUtilities.clear;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBmaWx0ZXIsIGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVTdWJBcnJheShhcnJheSwgc3ViQXJyYXlMZW5ndGgsIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBpbmRleGVzTGVuZ3RoID0gYXJyYXlMZW5ndGgsIC8vL1xuICAgICAgICBwZXJtdXRhdGlvbkxlbmd0aCA9IHN1YkFycmF5TGVuZ3RoOyAvLy9cblxuICBpZiAocGVybXV0YXRpb25MZW5ndGggPD0gTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEgpIHtcbiAgICBsZXQgb2Zmc2V0LFxuICAgICAgICBwZXJtdXRhdGlvbnM7XG5cbiAgICBpZiAoaW5kZXhlc0xlbmd0aCA+IE1BWElNVU1fSU5ERVhFU19MRU5HVEgpIHtcbiAgICAgIG9mZnNldCA9IGluZGV4ZXNMZW5ndGggLSBNQVhJTVVNX0lOREVYRVNfTEVOR1RIO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbTUFYSU1VTV9JTkRFWEVTX0xFTkdUSF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICBwZXJtdXRhdGlvbnMgPSBwZXJtdXRhdGlvbnNNYXRyaXhbaW5kZXhlc0xlbmd0aF1bcGVybXV0YXRpb25MZW5ndGhdO1xuICAgIH1cblxuICAgIGlmIChwZXJtdXRhdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGZvdW5kID0gcGVybXV0YXRpb25zLnNvbWUoKHBlcm11dGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YkFycmF5ID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGVybXV0YXRpb25MZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGVybXV0YXRpb25bcG9zaXRpb25dICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgc3ViQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhzdWJBcnJheSk7XG5cbiAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNsZWFyIiwiZmlsdGVyIiwiZmlyc3QiLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJwcnVuZSIsInB1c2giLCJyaWdodERpZmZlcmVuY2UiLCJzZWNvbmQiLCJzb21lU3ViQXJyYXkiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVF5REEsS0FBSztlQUFMQTs7SUFBUkMsTUFBTTtlQUFOQTs7SUFBbENDLEtBQUs7ZUFBTEE7O0lBQWVDLElBQUk7ZUFBSkE7O0lBZ0RkQyxjQUFjO2VBQWRBOztJQWhEMEJDLEtBQUs7ZUFBTEE7O0lBQU5DLElBQUk7ZUFBSkE7O0lBMERwQkMsZUFBZTtlQUFmQTs7SUExRE1DLE1BQU07ZUFBTkE7O0lBRU5DLFlBQVk7ZUFBWkE7Ozt5QkFSZTt5RUFFQTt5QkFFb0M7Ozs7OztBQUU1RCxJQUFRUCxRQUFvRFEseUJBQWMsQ0FBbEVSLE9BQU9NLFNBQTZDRSx5QkFBYyxDQUEzREYsUUFBUUwsT0FBcUNPLHlCQUFjLENBQW5EUCxNQUFNRyxPQUErQkkseUJBQWMsQ0FBN0NKLE1BQU1ELFFBQXlCSyx5QkFBYyxDQUF2Q0wsT0FBT0osU0FBa0JTLHlCQUFjLENBQWhDVCxRQUFRRCxRQUFVVSx5QkFBYyxDQUF4QlY7QUFFbEQsU0FBU1MsYUFBYUUsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLFFBQVE7SUFDMUQsSUFBSUMsUUFBUTtJQUVaLElBQU1DLGNBQWNKLE1BQU1LLE1BQU0sRUFDMUJDLGdCQUFnQkYsYUFDaEJHLG9CQUFvQk4sZ0JBQWdCLEdBQUc7SUFFN0MsSUFBSU0scUJBQXFCQyxxQ0FBMEIsRUFBRTtRQUNuRCxJQUFJQyxRQUNBQztRQUVKLElBQUlKLGdCQUFnQkssaUNBQXNCLEVBQUU7WUFDMUNGLFNBQVNILGdCQUFnQkssaUNBQXNCO1lBRS9DRCxlQUFlRSwyQkFBa0IsQ0FBQ0QsaUNBQXNCLENBQUMsQ0FBQ0osa0JBQWtCO1FBQzlFLE9BQU87WUFDTEUsU0FBUztZQUVUQyxlQUFlRSwyQkFBa0IsQ0FBQ04sY0FBYyxDQUFDQyxrQkFBa0I7UUFDckU7UUFFQSxJQUFJRyxpQkFBaUIsTUFBTTtZQUN6QlAsUUFBUU8sYUFBYUcsSUFBSSxDQUFDLFNBQUNDO2dCQUN6QixJQUFJQSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBU3BCLElBQUksQ0FBQ3VCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO0FBRU8sU0FBU1YsZUFBZTJCLE1BQU0sRUFBRUMsTUFBTTtJQUMzQy9CLE9BQU84QixRQUFRLFNBQUNFO1FBQ2QsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTM0IsZ0JBQWdCd0IsTUFBTSxFQUFFQyxNQUFNO0lBQzVDL0IsT0FBTytCLFFBQVEsU0FBQ0k7UUFDZCxJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7QUFDRiJ9