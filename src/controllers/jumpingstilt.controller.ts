import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Jumpingstilt} from '../models';
import {JumpingstiltRepository} from '../repositories';

export class JumpingstiltController {
  constructor(
    @repository(JumpingstiltRepository)
    public jumpingstiltRepository : JumpingstiltRepository,
  ) {}

  @post('/jumpingstilts')
  @response(200, {
    description: 'Jumpingstilt model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jumpingstilt)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jumpingstilt, {
            title: 'NewJumpingstilt',
            
          }),
        },
      },
    })
    jumpingstilt: Jumpingstilt,
  ): Promise<Jumpingstilt> {
    return this.jumpingstiltRepository.create(jumpingstilt);
  }

  @get('/jumpingstilts/count')
  @response(200, {
    description: 'Jumpingstilt model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jumpingstilt) where?: Where<Jumpingstilt>,
  ): Promise<Count> {
    return this.jumpingstiltRepository.count(where);
  }

  @get('/jumpingstilts')
  @response(200, {
    description: 'Array of Jumpingstilt model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jumpingstilt, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jumpingstilt) filter?: Filter<Jumpingstilt>,
  ): Promise<Jumpingstilt[]> {
    return this.jumpingstiltRepository.find(filter);
  }

  @patch('/jumpingstilts')
  @response(200, {
    description: 'Jumpingstilt PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jumpingstilt, {partial: true}),
        },
      },
    })
    jumpingstilt: Jumpingstilt,
    @param.where(Jumpingstilt) where?: Where<Jumpingstilt>,
  ): Promise<Count> {
    return this.jumpingstiltRepository.updateAll(jumpingstilt, where);
  }

  @get('/jumpingstilts/{id}')
  @response(200, {
    description: 'Jumpingstilt model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jumpingstilt, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Jumpingstilt, {exclude: 'where'}) filter?: FilterExcludingWhere<Jumpingstilt>
  ): Promise<Jumpingstilt> {
    return this.jumpingstiltRepository.findById(id, filter);
  }

  @patch('/jumpingstilts/{id}')
  @response(204, {
    description: 'Jumpingstilt PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jumpingstilt, {partial: true}),
        },
      },
    })
    jumpingstilt: Jumpingstilt,
  ): Promise<void> {
    await this.jumpingstiltRepository.updateById(id, jumpingstilt);
  }

  @put('/jumpingstilts/{id}')
  @response(204, {
    description: 'Jumpingstilt PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() jumpingstilt: Jumpingstilt,
  ): Promise<void> {
    await this.jumpingstiltRepository.replaceById(id, jumpingstilt);
  }

  @del('/jumpingstilts/{id}')
  @response(204, {
    description: 'Jumpingstilt DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.jumpingstiltRepository.deleteById(id);
  }
}
