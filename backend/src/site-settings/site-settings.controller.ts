import { Controller, Get, Patch, Body } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service.js';
import { UpdateSiteSettingDto } from './dto/update-site-stting.dto.js';

@Controller('site-settings')
export class SiteSettingsController {
  constructor(private readonly siteSettingsService: SiteSettingsService) {}

  @Get()
  getSettings() {
    return this.siteSettingsService.getSettings();
  }

  @Patch()
  updateSettings(@Body() updateSiteSettingDto: UpdateSiteSettingDto) {
    return this.siteSettingsService.updateSettings(updateSiteSettingDto);
  }
}