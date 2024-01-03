import { View } from "./view.js";

export class MensagemView extends View<string>{

    // não pode colocar - private | pode colocar public mesmo o pai sendo protected

    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}