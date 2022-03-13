export interface DecodedJwt {
  iss?: string;
  sub?: string;
  aud?: string[];
  iat?: number;
  exp?: number;
  azp?: string;
  scope?: string;
  permissions?: string[];
}
