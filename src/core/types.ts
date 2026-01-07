interface FieldDefinition {
  name: string;
  type: string;
  isOptional: boolean;
  isId: boolean;
  defaultValue?: string;
}
export interface ModelDefinition {
  id: string;
  name: string;
  field: FieldDefinition[];
  type: string;
  isOptional: boolean;
}
