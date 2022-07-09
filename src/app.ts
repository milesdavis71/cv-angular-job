function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}

class RenderLogin {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor() {
    this.templateElement = document.getElementById(
      "login"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLElement;

    this.renderLogin();
  }

  renderLogin() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

class ClickLock {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  lockElement: HTMLElement;
  constructor() {
    this.templateElement = document.getElementById(
      "main"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;

    this.lockElement = document.querySelector(".lock") as HTMLElement;
    this.configure();
  }

  @autobind
  clickHandler() {
    this.lockElement.innerHTML = '<i class="fa-solid fa-unlock green"></i>';
    setTimeout(() => {
      this.clearHostAndRenderMain();
    }, 1100);
  }

  @autobind
  touchStartHandler(event: TouchEvent) {
    event.preventDefault;
    // this.lockElement.classList.add("lock--gesture");
    this.lockElement.innerHTML = '<i class="fa-solid fa-unlock"></i>';
    setTimeout(() => {
      this.clearHostAndRenderMain();
    }, 1100);
  }

  configure() {
    this.lockElement.addEventListener("click", this.clickHandler);
    this.lockElement.addEventListener("touchstart", this.touchStartHandler);
  }

  clearHostAndRenderMain() {
    this.hostElement.innerHTML = "";
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const renderLogin = new RenderLogin();
const clickLock = new ClickLock();
