<template>
  <div v-if="active">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDropdownContent",
};
</script>
