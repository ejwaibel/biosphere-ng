import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Person: { noChangeTracking: true, },
};

const pluralNames = { Person: 'People' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
