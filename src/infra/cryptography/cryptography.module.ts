import { Module } from '@nestjs/common';

import { BcryptEncryptor } from './bcrypt-encryptor';
import { Encryptor } from '@/domain/cryptography/encryptor';

@Module({
  providers: [{ provide: Encryptor, useClass: BcryptEncryptor }],
  exports: [Encryptor],
})
export class CryptographyModule {}
