class RenderValidation {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor() {
    this.templateElement = document.getElementById(
      "validation"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild as HTMLFormElement;
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const EnterBtn = new RenderValidation();
