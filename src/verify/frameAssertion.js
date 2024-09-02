"use strict";

import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";
import FrameAssertion from "../frameAssertion";
import FrameAssertionAssignment from "../assignment/frameAssertion";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/frameAssertion/frame!"),
      metavariableNodeQuery = nodeQuery("/frameAssertion/metavariable!");

export default function verifyFrameAssertion(frameAssertionNode, assignments, derived, localMetaContext) {
  let frameAssertionVerified;

  const frameAssertionString = localMetaContext.nodeAsString(frameAssertionNode);

  localMetaContext.trace(`Verifying the '${frameAssertionString}' frame assertion...`, frameAssertionNode);

  const verifyFrameAssertionFunctions = [
    verifyDerivedFrameAssertion,
    verifyStatedFrameAssertion
  ];

  frameAssertionVerified = verifyFrameAssertionFunctions.some((verifyFrameAssertionFunction) => {
    const frameAssertionVerified = verifyFrameAssertionFunction(frameAssertionNode, assignments, derived, localMetaContext);

    if (frameAssertionVerified) {
      return true;
    }
  });

  if (frameAssertionVerified) {
    localMetaContext.debug(`...verified the '${frameAssertionString}' frame assertion.`, frameAssertionNode);
  }

  return frameAssertionVerified;
}

function verifyDerivedFrameAssertion(frameAssertionNode, assignments, derived, localMetaContext) {
  let derivedFrameAssertionVerified = false;

  if (derived) {
    const frameAssertionString = localMetaContext.nodeAsString(frameAssertionNode);

    localMetaContext.trace(`Verifying the '${frameAssertionString}' derived frame assertion...`, frameAssertionNode);

    const metavariableNode = metavariableNodeQuery(frameAssertionNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);

    if (metavariableVerified) {
      const frameAssertion = localMetaContext.findFrameAssertionByMetavariableNode(metavariableNode);

      if (frameAssertion !== null) {
        const frames = [],
              frameNode = frameNodeQuery(frameAssertionNode),
              frameVerified = verifyFrame(frameNode, frames, assignments, derived, localMetaContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                frameSingular = frame.isSingular();

          if (frameSingular) {
            const declaration = frame.getDeclaration(),
                  metavariableNode = declaration.getMetavariableNode(),
                  metaLemma = localMetaContext.findMetaLemmaByMetavariableNode(metavariableNode),
                  metatheorem = localMetaContext.findMetatheoremByMetavariableNode(metavariableNode),
                  metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

            if (metaLemmaMetatheorem !== null) {
              const declarationMatchesMetaLemmaMetatheorem = declaration.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem),
                    frameAssertionMatchesMetaLemmaMetatheorem = frameAssertion.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);

              derivedFrameAssertionVerified = (declarationMatchesMetaLemmaMetatheorem && frameAssertionMatchesMetaLemmaMetatheorem);
            } else {
              const metavariableString = localMetaContext.nodeAsString(metavariableNode);

              localMetaContext.debug(`There are no meta-lemmas or metatheorems corresponding to the '${metavariableString}' metavariable.`, frameAssertionNode);
            }
          } else {
            const frameString = localMetaContext.nodeAsString(frameNode);

            localMetaContext.debug(`The '${frameString}' is not singular.`, frameAssertionNode);
          }
        }
      } else {
        const metavariableString = localMetaContext.nodeAsString(metavariableNode);

        localMetaContext.debug(`There is no frameAssertion present for the '${metavariableString}' metavariable.`, frameAssertionNode);
      }
    }

    if (derivedFrameAssertionVerified) {
      localMetaContext.debug(`...verified the '${frameAssertionString}' derived frame assertion.`, frameAssertionNode);
    }
  }

  return derivedFrameAssertionVerified;
}

function verifyStatedFrameAssertion(frameAssertionNode, assignments, derived, localMetaContext) {
  let statedFrameAssertionVerified = false;

  if (!derived) {
    const frameAssertionString = localMetaContext.nodeAsString(frameAssertionNode);

    localMetaContext.trace(`Verifying the '${frameAssertionString}' stated frame assertion...`, frameAssertionNode);

    const metavariableNode = metavariableNodeQuery(frameAssertionNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);

    if (metavariableVerified) {
      const frames = [],
            frameNode = frameNodeQuery(frameAssertionNode),
            frameVerified = verifyFrame(frameNode, frames, assignments, derived, localMetaContext);

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
      localMetaContext.debug(`...verified the '${frameAssertionString}' stated frame assertion.`, frameAssertionNode);
    }
  }

  return statedFrameAssertionVerified;
}

function verifyMetavariable(metavariableNode, localMetaContext) {
  let metavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      metavariableVerified = true;
    } else {
      const frameMetaTypeName = frameMetaType.getName(),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localMetaContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
