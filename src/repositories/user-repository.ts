export interface UserRepository {
  login(email: string, password: string): Promise<void>;
}
