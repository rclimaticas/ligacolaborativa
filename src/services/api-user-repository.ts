/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import type { UserRepository } from '@/repositories/user-repository';

export default class ApiUserRepository implements UserRepository {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async login(email: string, password: string): Promise<void> {
    // Chamada a API usando `this.apiUrl`
    console.warn(
      `Login com email: ${email} e senha: ${password} via ${this.apiUrl}`
    );
  }
}
