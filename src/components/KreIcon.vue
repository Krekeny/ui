<template>
  <component class="icon" :is="name" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.icon {
  --icon-size: 80px;
  width: var(--icon-size);

  path {
    fill: currentColor;
  }
}
</style>
