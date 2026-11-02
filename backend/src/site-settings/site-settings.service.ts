import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateSiteSettingDto } from './dto/update-site-stting.dto.js';

@Injectable()
export class SiteSettingsService {
  constructor(private readonly prisma: PrismaService) {}

  // Ayarları getir (İlk kez çağrılıyorsa varsayılan kaydı otomatik oluşturur)
  async getSettings() {
    let settings = await this.prisma.siteSetting.findUnique({
      where: { id: 1 },
    });

    if (!settings) {
      settings = await this.prisma.siteSetting.create({
        data: {
          id: 1,
          siteName: 'BlockCraft Kurumsal',
          email: 'info@blockcraft.local',
          socials: {},
        },
      });
    }

    return settings;
  }

  // Ayarları güncelle (Kayıt yoksa oluşturur, varsa günceller - Upsert)
  async updateSettings(dto: UpdateSiteSettingDto) {
    return this.prisma.siteSetting.upsert({
      where: { id: 1 },
      update: {
        ...dto,
      },
      create: {
        id: 1,
        siteName: dto.siteName || 'BlockCraft Kurumsal',
        logoUrl: dto.logoUrl,
        phone: dto.phone,
        email: dto.email,
        socials: dto.socials ?? {},
      },
    });
  }
}