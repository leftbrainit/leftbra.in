import { InjectionKey } from 'vue';
import { SiteConfig, Team, Locations } from './types';

export const SiteConfigKey: InjectionKey<SiteConfig> = Symbol('SiteConfig');
export const TeamKey: InjectionKey<Team> = Symbol('Team');
export const LocationsKey: InjectionKey<Locations> = Symbol('Locations');
