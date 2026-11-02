import { Module } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service.js';
import { SiteSettingsController } from './site-settings.controller.js';

@Module({
  providers: [SiteSettingsService],
  controllers: [SiteSettingsController]
})
export class SiteSettingsModule {}
