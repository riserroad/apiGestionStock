import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jumpingstilt extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  reference?: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'any',
  })
  hardnessBlade?: any;

  @property({
    type: 'string',
    required: true,
  })
  rubberColor: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'string',
  })
  model?: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'any',
  })
  comment?: any;

  @property({
    type: 'date',
  })
  lastCheck?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jumpingstilt>) {
    super(data);
  }
}

export interface JumpingstiltRelations {
  // describe navigational properties here
}

export type JumpingstiltWithRelations = Jumpingstilt & JumpingstiltRelations;
