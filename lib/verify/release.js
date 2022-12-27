"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interopRequireDefault(require("../verify/files"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var verified = releaseContext.isVerified();
            if (verified) {
                releaseVerified = true;
            } else {
                releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
                var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                if (releaseFilesVerified) {
                    var verified1 = true;
                    releaseContext.setVerified(verified1);
                    releaseVerified = verified1; ///
                }
            }
        }
        if (releaseVerified) {
            releaseContext.info("Verified the '".concat(releaseName, "' package."));
        }
    }
    return releaseVerified;
}
function verifyReleaseFiles(releaseContext) {
    var filesVerified = (0, _files.default)(releaseContext), releaseFilesVerified = filesVerified; ///
    return releaseFilesVerified;
}
function verifyDependencyReleases(releaseContext, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWxlYXNlRmlsZXNWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0LnNldFZlcmlmaWVkKHZlcmlmaWVkKTtcblxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZUZpbGVzKHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgIHJlbGVhc2VGaWxlc1ZlcmlmaWVkID0gZmlsZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHJlbGVhc2VGaWxlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSBkZXBlbmRlbmNpZXMuZXZlcnlEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZVZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMiLCJ2ZXJpZmllZCIsImlzVmVyaWZpZWQiLCJkZWJ1ZyIsInJlbGVhc2VGaWxlc1ZlcmlmaWVkIiwidmVyaWZ5UmVsZWFzZUZpbGVzIiwic2V0VmVyaWZpZWQiLCJpbmZvIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmeUZpbGVzIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGlCQUFpQixFQUFFO0lBQ3BFLElBQUlDLGtCQUFrQixLQUFLO0lBRTNCLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNELFlBQVk7SUFFckQsSUFBSUcsbUJBQW1CLElBQUksRUFBRTtRQUMzQixJQUFNQyw4QkFBOEJDLHlCQUF5QkYsZ0JBQWdCRjtRQUU3RSxJQUFJRyw2QkFBNkI7WUFDL0IsSUFBTUUsV0FBV0gsZUFBZUksVUFBVTtZQUUxQyxJQUFJRCxVQUFVO2dCQUNaSixrQkFBa0IsSUFBSTtZQUN4QixPQUFPO2dCQUNMQyxlQUFlSyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWlIsYUFBWTtnQkFFbkQsSUFBTVMsdUJBQXVCQyxtQkFBbUJQO2dCQUVoRCxJQUFJTSxzQkFBc0I7b0JBQ3hCLElBQU1ILFlBQVcsSUFBSTtvQkFFckJILGVBQWVRLFdBQVcsQ0FBQ0w7b0JBRTNCSixrQkFBa0JJLFdBQVUsR0FBRztnQkFDakMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUosaUJBQWlCO1lBQ25CQyxlQUFlUyxJQUFJLENBQUMsQUFBQyxpQkFBNEIsT0FBWlosYUFBWTtRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9FO0FBQ1Q7QUFFQSxTQUFTUSxtQkFBbUJQLGNBQWMsRUFBRTtJQUMxQyxJQUFNVSxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ1gsaUJBQzVCTSx1QkFBdUJJLGVBQWUsR0FBRztJQUUvQyxPQUFPSjtBQUNUO0FBRUEsU0FBU0oseUJBQXlCRixjQUFjLEVBQUVGLGlCQUFpQixFQUFFO0lBQ25FLElBQU1jLGVBQWVaLGVBQWVhLGVBQWUsSUFDN0NaLDhCQUE4QlcsYUFBYUUsZUFBZSxDQUFDLFNBQUNDLFlBQWU7UUFDekUsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QnBCLGNBQWNtQixNQUNkakIsa0JBQWtCSCxjQUFjQyxhQUFhQztRQUVuRCxJQUFJQyxpQkFBaUI7WUFDbkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sT0FBT0U7QUFDVCJ9