import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { Command } from '@codesign/shared/classes';
import { FeatureAccessService } from '../services';

interface UnlockFeatureActionParams {
    feature: Feature;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class UnlockFeatureAction extends Command<UnlockFeatureActionParams> {
    constructor(
        private readonly _featureAccessService: FeatureAccessService,
        private readonly _router: Router
    ) {
        super('key', 'Unlock module');
    }

    execute(props: UnlockFeatureActionParams): void {
        this._featureAccessService.unlockFeature(props.feature, props.password);
        this._router.navigate(['/', props.feature]);
    }
}
