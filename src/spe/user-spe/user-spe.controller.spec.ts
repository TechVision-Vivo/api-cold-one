import { Test, TestingModule } from '@nestjs/testing';
import { UserSpeController } from './user-spe.controller';
import { UserSpeService } from './user-spe.service';

describe('UserSpeController', () => {
  let controller: UserSpeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSpeController],
      providers: [UserSpeService],
    }).compile();

    controller = module.get<UserSpeController>(UserSpeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
