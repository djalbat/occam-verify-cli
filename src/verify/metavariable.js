"use strict";

import Metavariable from "../metavariable";
import MetavariableAssignment from "../assignment/metavariable";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode, metaTypeNameFromMetaTypeNode } from "../utilities/name";

const typeNodeQuery = nodeQuery("/argument/type"),
      argumentNodeQuery = nodeQuery("/metavariable/argument!");

export default function verifyMetavariable(metavariableNode, metaTypeNode, fileContext) {
  let metavariableVerified = false;

  const metavariableString = fileContext.nodeAsString(metavariableNode);

  fileContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariablePresent = fileContext.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (metavariablePresent) {
    fileContext.debug(`The metavariable '${metavariableString}' is already present.`, metavariableNode);
  } else {
    const argumentNode = argumentNodeQuery(metavariableNode),
          argumentVerified = verifyArgument(metavariableNode, argumentNode, fileContext);

    if (argumentVerified) {
      const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
            metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName),
            metavariable = Metavariable.fromMetavariableNodeAndMetaType(metavariableNode, metaType),
            metavariableAssignment = MetavariableAssignment.fromMetavariable(metavariable),
            metavariableAssigned = metavariableAssignment.assign(fileContext);

      if (metavariableAssigned) {
        metavariableVerified = true;
      }
    }
  }

  if (metavariableVerified) {
    fileContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}

export function verifyStandaloneMetavariable(metavariableNode, localMetaContext, verifyAhead) {
  let standaloneMetavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' standalone metavariable...`, metavariableNode);

  const metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (metavariablePresent) {
    const verifiedAhead = verifyAhead();

    standaloneMetavariableVerified = verifiedAhead; ///
  }

  if (standaloneMetavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' standalone metavariable.`, metavariableNode);
  }

  return standaloneMetavariableVerified;
}

function verifyArgument(metavariableNode, argumentNode, fileContext) {
  let argumentVerified = false;

  if (argumentNode === null) {
    argumentVerified = true;
  } else {
    const typeNode = typeNodeQuery(argumentNode);

    if (typeNode !== null) {
      const typeName = typeNameFromTypeNode(typeNode),
            type = fileContext.findTypeByTypeName(typeName);

      if (type !== null) {
        argumentVerified = true;
      } else {
        const metavariableString = fileContext.nodeAsString(metavariableNode);

        fileContext.debug(`The '${metavariableString}' metavariable's '${typeName}' type is not present.`, metavariableNode);
      }
    }
  }

  return argumentVerified;
}