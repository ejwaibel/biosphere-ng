import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Person: {},
};

const pluralNames = { Person: 'People' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
