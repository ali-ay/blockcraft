export class UpdateSiteSettingDto {
  siteName?: string;
  logoUrl?: string;
  phone?: string;
  email?: string;
  socials?: Record<string, any>; // Örn: { instagram: "...", linkedin: "..." }
}