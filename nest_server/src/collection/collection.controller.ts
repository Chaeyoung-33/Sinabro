import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';

@ApiTags('Collection')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('')
  async getAllCollection(@Req() req: RequestUser) {
    const result = await this.collectionService.getAllCollectionService(
      req.user.id,
    );
    return result;
  }
}
