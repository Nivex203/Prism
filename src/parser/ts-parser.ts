import { Project } from "ts-morph";
import { ModelDefinition } from "../core/types";
export function parseFile(filePath: string): ModelDefinition[] {
  const project = new Project({
    tsConfigFilePath: "../../tsconfig.json",
  });
  const sourceFile = project.getSourceFileOrThrow(filePath);
  const interfaces = sourceFile.getInterfaces();
  interfaces.map((interfaceDeclaration) => {
    name: interfaceDeclaration.getName();
    fields: interfaceDeclaration.getProperties().map((property) => {
      name: property.getName();
      type: property.getType();
      isOptional: property.hasQuestionToken();
      isId: false;
      defaultValue: undefined;
    });
  });
}
