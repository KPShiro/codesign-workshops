import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-top-up-dialog',
    templateUrl: 'top-up-dialog.component.html',
    styleUrls: ['./top-up-dialog.component.scss'],
})
export class TopUpDialogComponent {
    protected _amounts: number[] = [50, 100, 200, 300, 500, 1000];
    protected _selectedAmount: number | undefined = undefined;

    protected _formControl = new FormControl<number | undefined>(undefined);

    constructor(private readonly _dialogRef: DialogRef) {}

    submitForm(): void {
        console.log(this._formControl.value);
    }

    closeDialog(): void {
        this._dialogRef.close();
    }
}
