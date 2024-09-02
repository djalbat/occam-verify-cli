"use strict";

import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";
import FrameAssertion from "../frameAssertion";
import FrameAssertionAssignment from "../assignment/frameAssertion";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/frameAssertion/frame!"),
      metavariableNodeQuery = nodeQuery("/frameAssertion/metavariable!");

export default function verifyFrameAssertion(frameAssertionNode, assignments, derived, localContext) {
  let frameAssertionVerified;

  const frameAssertionString = localContext.nodeAsString(frameAssertionNode);

  localContext.trace(`Verifying the '${frameAssertionString}' frame assertion...`, frameAssertionNode);

  const verifyFrameAssertionFunctions = [
    verifyDerivedFrameAssertion,
    verifyStatedFrameAssertion
  ];

  frameAssertionVerified = verifyFrameAssertionFunctions.some((verifyFrameAssertionFunction) => {
    const frameAssertionVerified = verifyFrameAssertionFunction(frameAssertionNode, assignments, derived, localContext);

    if (frameAssertionVerified) {
      return true;
    }
  });

  if (frameAssertionVerified) {
    localContext.debug(`...verified the '${frameAssertionString}' frame assertion.`, frameAssertionNode);
  }

  return frameAssertionVerified;
}

function verifyDerivedFrameAssertion(frameAssertionNode, assignments, derived, localContext) {
  let derivedFrameAssertionVerified = false;

  if (derived) {
    const frameAssertionString = localContext.nodeAsString(frameAssertionNode);

    localContext.trace(`Verifying the '${frameAssertionString}' derived frame assertion...`, frameAssertionNode);

    const metavariableNode = metavariableNodeQuery(frameAssertionNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localContext);

    if (metavariableVerified) {
      const frameAssertion = localContext.findFrameAssertionByMetavariableNode(metavariableNode);

      if (frameAssertion !== null) {
        const frames = [],
              frameNode = frameNodeQuery(frameAssertionNode),
              frameVerified = verifyFrame(frameNode, frames, assignments, derived, localContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                frameSingular = frame.isSingular();

          if (frameSingular) {
            const declaration = frame.getDeclaration(),
                  metavariableNode = declaration.getMetavariableNode(),
                  metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
                  metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
                  metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

            if (metaLemmaMetatheorem !== null) {
              const declarationMatchesMetaLemmaMetatheorem = declaration.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem),
                    frameAssertionMatchesMetaLemmaMetatheorem = frameAssertion.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);

              derivedFrameAssertionVerified = (declarationMatchesMetaLemmaMetatheorem && frameAssertionMatchesMetaLemmaMetatheorem);
            } else {
              const metavariableString = localContext.nodeAsString(metavariableNode);

              localContext.debug(`There are no meta-lemmas or metatheorems corresponding to the '${metavariableString}' metavariable.`, frameAssertionNode);
            }
          } else {
            const frameString = localContext.nodeAsString(frameNode);

            localContext.debug(`The '${frameString}' is not singular.`, frameAssertionNode);
          }
        }
      } else {
        const metavariableString = localContext.nodeAsString(metavariableNode);

        localContext.debug(`There is no frameAssertion present for the '${metavariableString}' metavariable.`, frameAssertionNode);
      }
    }

    if (derivedFrameAssertionVerified) {
      localContext.debug(`...verified the '${frameAssertionString}' derived frame assertion.`, frameAssertionNode);
    }
  }

  return derivedFrameAssertionVerified;
}

function verifyStatedFrameAssertion(frameAssertionNode, assignments, derived, localContext) {
  let statedFrameAssertionVerified = false;

  if (!derived) {
    const frameAssertionString = localContext.nodeAsString(frameAssertionNode);

    localContext.trace(`Verifying the '${frameAssertionString}' stated frame assertion...`, frameAssertionNode);

    const metavariableNode = metavariableNodeQuery(frameAssertionNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localContext);

    if (metavariableVerified) {
      const frames = [],
            frameNode = frameNodeQuery(frameAssertionNode),
            frameVerified = verifyFrame(frameNode, frames, assignments, derived, localContext);

      if (frameVerified) {
        const firstFrame = first(frames),
              frame = firstFrame, ///
              frameAssertion = FrameAssertion.fromFrameAssertionNodeFrameAndMetavariableNode(frameAssertionNode, frame, metavariableNode),
              frameAssertionAssignment = FrameAssertionAssignment.fromFrameAssertion(frameAssertion),
              assignment = frameAssertionAssignment;

        assignments.push(assignment);

        statedFrameAssertionVerified = true;
      }
    }

    if (statedFrameAssertionVerified) {
      localContext.debug(`...verified the '${frameAssertionString}' stated frame assertion.`, frameAssertionNode);
    }
  }

  return statedFrameAssertionVerified;
}

function verifyMetavariable(metavariableNode, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      metavariableVerified = true;
    } else {
      const frameMetaTypeName = frameMetaType.getName(),
            metaTypeString = metaType.asString();

      localContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
