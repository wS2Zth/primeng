import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'nested-doc',
    template: `
        <app-docsectiontext>
            <p>Splitters can be combined to create advanced layouts.</p>
        </app-docsectiontext>
        <div class="card">
            <p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" styleClass="mb-8">
                <ng-template pTemplate>
                    <div class="flex items-center justify-center flex-1">Panel 1</div>
                </ng-template>
                <ng-template pTemplate>
                    <p-splitter class="w-full" layout="vertical" [panelSizes]="[15, 85]">
                        <ng-template pTemplate>
                            <div class="flex items-center justify-center flex-1">Panel 2</div>
                        </ng-template>
                        <ng-template pTemplate>
                            <p-splitter class="w-full" [panelSizes]="[20, 80]">
                                <ng-template pTemplate>
                                    <div class="flex items-center justify-center flex-1">Panel 3</div>
                                </ng-template>
                                <ng-template pTemplate>
                                    <div class="flex items-center justify-center flex-1">Panel 4</div>
                                </ng-template>
                            </p-splitter>
                        </ng-template>
                    </p-splitter>
                </ng-template>
            </p-splitter>
        </div>
        <app-code [code]="code" selector="splitter-nested-demo"></app-code>
    `,
})
export class NestedDoc {
    code: Code = {
        basic: `<p-splitter 
    [style]="{ height: '300px' }" 
    [panelSizes]="[20, 80]" 
    [minSizes]="[10, 0]" 
    styleClass="mb-8">
        <ng-template pTemplate>
            <div class="flex items-center justify-center flex-1">
                Panel 1
            </div>
        </ng-template>
        <ng-template pTemplate>
            <p-splitter class="w-full" layout="vertical" [panelSizes]="[15, 85]">
                <ng-template pTemplate>
                    <div style="flex-grow: 1;" class="flex items-center justify-center flex-1">
                        Panel 2
                    </div>
                </ng-template>
                <ng-template pTemplate>
                    <p-splitter class="w-full" [panelSizes]="[20, 80]">
                        <ng-template pTemplate>
                            <div class="flex items-center justify-center flex-1">
                                Panel 3
                            </div>
                        </ng-template>
                        <ng-template pTemplate>
                            <div class="flex items-center justify-center flex-1">
                                Panel 4
                            </div>
                        </ng-template>
                    </p-splitter>
                </ng-template>
            </p-splitter>
        </ng-template>
</p-splitter>`,

        html: `<div class="card">
    <p-splitter 
        [style]="{ height: '300px' }" 
        [panelSizes]="[20, 80]" 
        [minSizes]="[10, 0]" 
        styleClass="mb-8">
            <ng-template pTemplate>
                <div class="flex items-center justify-center flex-1">
                    Panel 1
                </div>
            </ng-template>
            <ng-template pTemplate>
                <p-splitter class="w-full" layout="vertical" [panelSizes]="[15, 85]">
                    <ng-template pTemplate>
                        <div style="flex-grow: 1;" class="flex items-center justify-center flex-1">
                            Panel 2
                        </div>
                    </ng-template>
                    <ng-template pTemplate>
                        <p-splitter class="w-full" [panelSizes]="[20, 80]">
                            <ng-template pTemplate>
                                <div class="flex items-center justify-center flex-1">
                                    Panel 3
                                </div>
                            </ng-template>
                            <ng-template pTemplate>
                                <div class="flex items-center justify-center flex-1">
                                    Panel 4
                                </div>
                            </ng-template>
                        </p-splitter>
                    </ng-template>
                </p-splitter>
            </ng-template>
    </p-splitter>
</div>
`,

        typescript: `import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter'; 

@Component({
    selector: 'splitter-nested-demo',
    templateUrl: './splitter-nested-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterNestedDemo {}`,
    };
}
