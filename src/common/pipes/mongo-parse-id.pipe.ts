import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class MongoParseIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {

    if( !isValidObjectId ( value ))
      throw new BadRequestException(`${ value } is not a valid MongoId `);

    return value;
  }
}
