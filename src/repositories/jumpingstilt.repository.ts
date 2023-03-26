import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Jumpingstilt, JumpingstiltRelations} from '../models';

export class JumpingstiltRepository extends DefaultCrudRepository<
  Jumpingstilt,
  typeof Jumpingstilt.prototype.reference,
  JumpingstiltRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Jumpingstilt, dataSource);
  }
}
