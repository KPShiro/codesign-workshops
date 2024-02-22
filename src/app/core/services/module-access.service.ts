import { Injectable } from '@angular/core';
import { Feature } from '@codesign/core/enums';

@Injectable({
    providedIn: 'root',
})
export class FeatureAccessService {
    protectedFeaturesMap = new Map<Feature, string>([]);

    isFeatureProtected(feature: Feature): boolean {
        return this.protectedFeaturesMap.has(feature);
    }

    registerFeature(feature: Feature, password: string): void {
        if (this.isFeatureProtected(feature)) {
            console.warn(
                `Feature "${feature}" is already protected! Overwriting password...`
            );
        }

        this.protectedFeaturesMap.set(feature, password);
    }

    isFeaturePasswordValid(feature: Feature, password: string): boolean {
        return this.protectedFeaturesMap.get(feature) === password;
    }

    isFeatureUnlocked(feature: Feature): boolean {
        if (!this.isFeatureProtected(feature)) {
            return true;
        }

        return localStorage.getItem(`codesign.feature.${feature}`) != null;
    }

    unlockFeature(feature: Feature, password: string): void {
        if (!this.isFeaturePasswordValid(feature, password)) {
            throw new Error('Invalid password');
        }

        localStorage.setItem(`codesign.feature.${feature}`, 'true');
    }
}
