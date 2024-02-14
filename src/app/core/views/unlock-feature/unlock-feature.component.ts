import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UnlockFeatureAction } from '@codesign/core/actions';
import { Feature } from '@codesign/core/enums';

@Component({
    templateUrl: 'unlock-feature.component.html',
})
export class UnlockFeatureViewComponent {
    private _form = this._formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
    });

    get form() {
        return this._form;
    }

    get passwordFormControl() {
        const control = this.form.get('password');

        if (!control) {
            throw new Error('Form control not found');
        }

        return control;
    }

    get feature(): Feature {
        const feature = this._activatedRoute.snapshot.queryParamMap.get('feature');

        if (!feature) {
            throw new Error('Feature not found');
        }

        return feature as Feature;
    }

    unlockFeatureAction = this._unlockFeatureAction.build<void>({
        resolveParams: () => ({
            feature: this.feature,
            password: this.passwordFormControl.value!,
        }),
        disabled: () => this.form.invalid && this.form.pristine,
        onError: () => this.passwordFormControl.setErrors({ invalid: true }),
    });

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _unlockFeatureAction: UnlockFeatureAction,
        private readonly _activatedRoute: ActivatedRoute
    ) {}
}
