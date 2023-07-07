export type PopperType = "modal" | "popup" | "tooltip";

export interface PopperOptions {
  /** @default modal */ type?: PopperType;
  /** @default true */ closeOnOutside?: boolean;
  /** @default true */ closeOnEsc?: boolean;
  /** @default 0 */ paddingClose?: number;
  /** @default 7 */ offset?: number;
  /** @default 662 */ width?: number | string;
  /** @default 6px */ borderRadius?: number | string;
  /** @default 500 */ zIndex?: number;

  targetClass?: string;
  maxWidth?: number;

  alignment?: {
    main?: "bottom" | "top";
    centered?: boolean;
  };
  target?: string | HTMLElement;

  onDestroy?: (popper?: Popper) => void;
  onMounted?: (popper?: Popper) => void;
  onScroll?: () => void;
}

export interface Popper {
  destroy: () => void;
  utils: { isEnd(): boolean };
  content: HTMLElement;
  firstChild: HTMLElement;
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

  options.borderRadius = options.borderRadius || "6px";
  options.zIndex = options.zIndex || 500;
  if (typeof options.type !== "string") options.type = "modal";
  if (typeof options.closeOnEsc !== "boolean") options.closeOnEsc = true;
  if (typeof options.closeOnOutside !== "boolean") {
    options.closeOnOutside = true;
  }

  window.__POPPERS__ ||= [];

  const _id = Math.random().toString().split(".")[1].slice(0, 6);
  let _content: HTMLElement | null = null;
  let _target: HTMLElement | null = null;

  const _back = document.createElement("div");
  _back.classList.add("popper-modal-back");
  _back.style.zIndex = `${options.zIndex}`;
  document.body.appendChild(_back);

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
  _content.style.zIndex = options.zIndex.toString();

  if (options.type === "modal") {
    _content.classList.remove("modal");
    _content.classList.add("modal");
  } else {
    _content.classList.remove("popup");
    _content.classList.remove("tooltip");
    _content.classList.add(options.type);
    _back.style.opacity = "0.1";
  }

  // supprimer le back si type = "tooltip"
  if (options.type === "tooltip") {
    document.body.removeChild(_back);
  }

  _content.style.borderRadius =
    typeof options.borderRadius === "string"
      ? options.borderRadius
      : `${options.borderRadius}px`;

  const firstChild = _content.children.item(0) as HTMLElement;
  firstChild.style.width =
    typeof options.width === "string"
      ? options.width
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
    isIn(el: HTMLElement, event: MouseEvent) {
      const paddingClose = options.paddingClose || 0;
      const popperRect = el.getBoundingClientRect();
      const isIn =
        popperRect.left - paddingClose <= event.clientX &&
        popperRect.right + paddingClose >= event.clientX &&
        popperRect.top - paddingClose <= event.clientY &&
        popperRect.bottom + paddingClose >= event.clientY;

      return isIn;
    },
  };

  const popper = {
    destroy,
    utils,
    content: _content,
    firstChild,
  };

  if (options.type !== "modal" && _target) {
    aligner(_content!, _target, destroy, options);
  }

  setTimeout(() => {
    addEventListener("keydown", onEsc);

    if (options.type === "tooltip") {
      addEventListener("mousemove", onOutsideClick);
    } else addEventListener("click", onOutsideClick);

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
    if (!_content) return;

    if (event.type === "mousemove") {
      if (utils.isIn(_content, event)) return;

      if (!_target) return;
      if (utils.isIn(_target, event)) return;
    } else {
      if (!utils.isEnd()) return;
      if (utils.isIn(_content, event)) return;
    }

    if (options.closeOnOutside) destroy();
  }

  function onEsc(event: KeyboardEvent) {
    if (!utils.isEnd()) return;
    if (options.closeOnEsc && event.key === "Escape") destroy();
  }

  async function destroy() {
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

    vertAlignment = options.alignment?.main
      ? options.alignment?.main
      : exBottom > 410
      ? "bottom"
      : exBottom > exTop
      ? "bottom"
      : "top";

    const exLeft = targetRect.right;
    const exRight = window.innerWidth - targetRect.left;
    horizAlignment =
      exRight > 350 ? "right" : exRight > exLeft ? "right" : "left";

    const positions = setPositions();

    if (options.maxWidth && positions.maxWidth > options.maxWidth) {
      positions.maxWidth = options.maxWidth;
    }
    firstChild.style.maxWidth = `${positions.maxWidth}px`;
    delete positions.maxWidth;

    firstChild.style.maxHeight = `${positions.maxHeight}px`;
    delete positions.maxHeight;

    for (const key of Object.keys(positions)) {
      if (options.alignment?.centered) {
        if (key === "left") {
          const m = (targetRect.width || 1) / 2;
          positions[key] += m;
          positions[key] -= content.getBoundingClientRect().width / 2;

          if (positions[key] < 0) positions[key] = 15;
        } else if (key === "right") {
          const m = (targetRect.width || 1) / 2;
          positions[key] += m;
          positions[key] -= content.getBoundingClientRect().width / 2;
          if (positions[key] < 0) positions[key] = 15;
        }
      }

      content.style[key as "width"] = `${positions[key]}px`;
    }

    setTimeout(setPosition, 50);
  }

  function setPositions() {
    const positions: { [key: string]: number } = {};
    if (!target) return positions;
    if (!content) return positions;

    const targetRect = target.getBoundingClientRect();

    if (vertAlignment === "bottom") {
      positions.top = targetRect.bottom + offset;
      positions.maxHeight = window.innerHeight - (positions.top + 15);
    } else if (vertAlignment === "top") {
      positions.bottom = window.innerHeight - targetRect.top + offset;
      positions.maxHeight = targetRect.top - (offset + 15);
    }

    if (horizAlignment === "left") {
      positions.right = window.innerWidth - targetRect.right;
      positions.maxWidth = targetRect.right - 15;
    } else if (horizAlignment === "right") {
      positions.left = targetRect.left;
      positions.maxWidth = window.innerWidth - (targetRect.left + 15);
    }
    // else if (horizAlignment === "center") {
    //   positions.left = targetRect.left + targetRect.width / 2;
    //   positions.maxWidth = window.innerWidth - 30;
    // }

    return positions;
  }
}

export default popper;
