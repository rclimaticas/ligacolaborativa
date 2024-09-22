// src/useCases/loginUser.ts
import type { UserRepository } from '@/repositories/user-repository';

interface LoginUserRequest {
  email: string;
  password: string;
}

// eslint-disable-next-line import/prefer-default-export
export class LoginUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: LoginUserRequest): Promise<void> {
    const { email, password } = request;
    // Lógica de login, como validação ou autenticação
    await this.userRepository.login(email, password);
  }
}
