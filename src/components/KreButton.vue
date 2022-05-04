<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    :type="type"
    class="btn"
    :class="classes"
  >
    <span class="btn__text">
      <slot />
    </span>
    <KreIcon name="arrow" class="btn__icon" />
  </component>
</template>

<script>
import KreIcon from "./KreIcon.vue";

export default {
  components: { KreIcon },
  props: ["to", "href", "appearance", "type"],
  computed: {
    component() {
      return this.to ? "router-link" : this.href ? "a" : "button";
    },
    classes() {
      return [this.appearance ? `btn--is-${this.appearance}` : null];
    },
  },
};
</script>

<style lang="scss">
.btn {
  // TODO: Move to global files
  --color-primary: rgb(28, 28, 31);
  --color-secondary: rgb(255, 255, 255);
  --color-tertiary: #69696d;
  --color-accent: #f4003c;
  --color-accent-light: #ffb7b7;

  --size: 40px;
  --border-radius: 15px;

  font-size: 18px;
  font-weight: 500;
  // padding-left: spacing(xs);
  display: inline-flex;
  align-items: center;
  // gap: spacing(xs);
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  height: var(--size);
  border-radius: var(--border-radius);
  border: none;
  background-color: transparent;
  padding: 0;

  &:hover {
    &::before {
      // width: calc(100% + spacing(s) + spacing(xs));
      // right: -1 * spacing(s);
      width: calc(100% + 1rem + 0.5rem);
      right: -1 * 1rem;
    }

    .btn__icon {
      // transform: translateX(spacing(s));
      transform: translateX(1rem);
    }

    .btn__text {
      // transform: translateX(spacing(xs));
      transform: translateX(0.5rem);
      color: var(--color-secondary);
    }
  }

  &::before {
    width: var(--size);
    height: 100%;
    position: absolute;
    background: var(--color-accent);
    z-index: -1;
    right: 0;
    top: 0;
    content: "";
    border-radius: var(--border-radius);
    transition: all 200ms ease-out;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }
}

.btn--is-dark {
  color: var(--color-secondary);

  &::before {
    background: var(--color-primary);
  }
}

.btn__text {
  transition: all 200ms ease-out;
}

.btn__icon {
  padding: 10px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-content: center;
  justify-content: center;
  color: var(--color-secondary);
  transition: transform 200ms ease-out;
}
</style>
