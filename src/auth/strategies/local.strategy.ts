import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { SISBUserResult } from "../../external-services/obs-bridge";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<SISBUserResult["data"]> {
    const result = await this.authService.validateUser(username, password);

    if (!result.success) {
      throw new UnauthorizedException(result.error);
    }

    return result.data;
  }
}
