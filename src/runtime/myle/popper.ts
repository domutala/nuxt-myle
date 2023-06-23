export type PopperType = "modal" | "popup" | "tooltip";

export interface PopperOptions {
  /** @default modal */ type?: PopperType;
  /** @default true */ closeOnOutside?: boolean;
  /** @default true */ closeOnEsc?: boolean;
  /** @default 0 */ paddingClose?: number;
  /** @default 7 */ offset?: number;
  /** @default 662 */ width?: number | string;

  targetClass?: string;

  alignment?: {
    vertical: "bottom" | "top";
    horizontal: "left" | "right";
  };
  target?: string | HTMLElement;

  onDestroy?: (popper?: Popper) => void;
  onMounted?: (popper?: Popper) => void;
  onScroll?: () => void;
}

export interface Popper {
  destroy: () => void;
  utils: {
    isEnd(): boolean;
  };
}

declare global {
  interface Window {
    __POPPERS__: string[];
  }
}

export function popper(
  content: string | HTMLElement,
  options: PopperOptions = {}
) {
  if (typeof window === "undefined") return;

  if (typeof options.type !== "string") options.type = "modal";
  if (typeof options.closeOnEsc !== "boolean") options.closeOnEsc = true;
  if (typeof options.closeOnOutside !== "boolean") {
    options.closeOnOutside = true;
  }

  window.__POPPERS__ ||= [];

  const _id = Math.random().toString().split(".")[1].slice(0, 6);
  let _content: HTMLElement | null = null;
  let _target: HTMLElement | null = null;
  let _back: HTMLElement;

  if (options.target) {
    if (typeof options.target === "string") {
      _target = document.querySelector(options.target);
    } else _target = options.target;

    if (_target && options.targetClass) {
      _target.classList.add(...options.targetClass.split(" "));
    }
  }

  if (typeof content === "string") {
    _content = document.querySelector(content);
  } else _content = content;
  if (!_content) return;

  _content.classList.add("popper");

  if (options.type === "modal") {
    _content.classList.remove("modal");
    _content.classList.add("modal");

    _back = document.createElement("div");
    _back.classList.add("popper-modal-back");
    document.body.appendChild(_back);
  } else if (options.type === "popup") {
    _content.classList.remove("popup");
    _content.classList.add("popup");
  }

  const firstChild = _content.children.item(0) as HTMLElement;
  firstChild.style.width =
    typeof options.width === "string"
      ? `${options.width}`
      : typeof options.width === "number"
      ? `${options.width}px`
      : "662px";

  if (options.onScroll) {
    firstChild.addEventListener("scroll", () => options.onScroll!());
  }

  document.body.appendChild(_content);

  _content.setAttribute(`data-popper-${_id}`, "");
  _content.setAttribute("id", _id);
  _content.classList.add("open");

  window.__POPPERS__.push(_id);

  const utils = {
    isEnd() {
      const poppers = window.__POPPERS__;
      const isEnd = poppers[poppers.length - 1] === _id;
      return isEnd;
    },
  };

  const popper = {
    destroy,
    utils,
  };

  if (options.type === "popup" && _target) {
    aligner(_content!, _target, destroy, options);
  }

  setTimeout(() => {
    addEventListener("click", onOutsideClick);
    addEventListener("keydown", onEsc);
    if (options.onMounted) options.onMounted(popper);
  }, 10);

  function removeContent() {
    if (_content && _content.parentElement === document.body) {
      document.body.removeChild(_content);
    }
    if (_back && _back.parentElement === document.body) {
      document.body.removeChild(_back);
    }
  }

  function onOutsideClick(event: MouseEvent) {
    if (!utils.isEnd()) return;
    if (!_content) return;

    const paddingClose = options.paddingClose || 0;
    const popperRect = _content.getBoundingClientRect();
    const isIn =
      popperRect.left - paddingClose <= event.clientX &&
      popperRect.right + paddingClose >= event.clientX &&
      popperRect.top - paddingClose <= event.clientY &&
      popperRect.bottom + paddingClose >= event.clientY;
    if (isIn) return;

    if (options.closeOnOutside) destroy();
  }

  function onEsc(event: KeyboardEvent) {
    if (!utils.isEnd()) return;
    if (options.closeOnEsc && event.key === "Escape") destroy();
  }

  function destroy() {
    removeEventListener("click", onOutsideClick);
    removeContent();

    const i = window.__POPPERS__.findIndex((p) => p === _id);
    if (i !== -1) window.__POPPERS__.splice(i, 1);

    if (options.onDestroy) options.onDestroy();
  }

  return popper;
}

function aligner(
  content: HTMLElement,
  target: HTMLElement,
  closer: () => void,
  options: PopperOptions
) {
  const firstChild = content.children.item(0) as HTMLElement;
  let vertAlignment: "bottom" | "top" = "bottom";
  let horizAlignment: "left" | "right" = "right";
  const offset = options.offset || 7;

  setPosition();

  async function setPosition() {
    if (!content) return;

    content.style.top = "unset";
    content.style.left = "unset";
    content.style.bottom = "unset";
    content.style.right = "unset";

    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < 0 || targetRect.bottom > window.innerHeight) {
      return closer();
    }

    const exBottom = window.innerHeight - targetRect.bottom;
    const exTop = targetRect.top;
    vertAlignment = options.alignment?.vertical
      ? options.alignment?.vertical
      : exBottom > 410
      ? "bottom"
      : exBottom > exTop
      ? "bottom"
      : "top";

    const exLeft = targetRect.right;
    const exRight = window.innerWidth - targetRect.left;
    horizAlignment = options.alignment?.horizontal
      ? options.alignment?.horizontal
      : exRight > 350
      ? "right"
      : exRight > exLeft
      ? "right"
      : "left";

    alignOnBottom();
    alignOnTop();
    alignOnRight();
    alignOnLeft();

    setTimeout(setPosition, 50);
  }

  function alignOnBottom() {
    if (vertAlignment !== "bottom") return;
    if (!target) return;
    if (!content) return;

    const targetRect = target.getBoundingClientRect();
    const top = targetRect.bottom + offset;
    content.style.top = `${top}px`;

    const maxHeight = window.innerHeight - (top + 15);
    firstChild.style.maxHeight = `${maxHeight}px`;
  }

  function alignOnTop() {
    if (vertAlignment !== "top") return;
    if (!target) return;
    if (!content) return;

    const targetRect = target.getBoundingClientRect();
    const bottom = window.innerHeight - targetRect.top + offset;
    content.style.bottom = `${bottom}px`;

    const maxHeight = targetRect.top - (offset + 15);
    firstChild.style.maxHeight = `${maxHeight}px`;
  }

  function alignOnRight() {
    if (horizAlignment !== "right") return;
    if (!target) return;
    if (!content) return;

    const targetRect = target.getBoundingClientRect();
    content.style.left = `${targetRect.left}px`;

    const maxWidth = window.innerWidth - (targetRect.left + 15);
    firstChild.style.maxWidth = `${maxWidth}px`;
  }

  function alignOnLeft() {
    if (horizAlignment !== "left") return;
    if (!target) return;
    if (!content) return;

    const targetRect = target.getBoundingClientRect();
    content.style.right = `${window.innerWidth - targetRect.right}px`;

    const maxWidth = targetRect.right - 15;
    firstChild.style.maxWidth = `${maxWidth}px`;
  }
}

export default popper;
