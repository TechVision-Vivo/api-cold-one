import { Test, TestingModule } from '@nestjs/testing';
import { UserSpeService } from './user-spe.service';

describe('UserSpeService', () => {
  let service: UserSpeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSpeService],
    }).compile();

    service = module.get<UserSpeService>(UserSpeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
