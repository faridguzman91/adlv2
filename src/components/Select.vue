<template>
  <div>
    <DropdownComp>
      <template slot="toggler">
        <button>Toggle</button>
      </template>
      <DropdownContent>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
      </DropdownContent>
    </DropdownComp>
  </div>
</template>

<script>
import DropdownComp from "./components/DropdownOptions/DropdownComp.vue";
import DropdownContent from "./components/DropdownOptions/DropdownContent.vue";
import DropdownItem from "./components/DropdownOptions/DropdownItem.vue";
export default {
  name: "Dropdown",
  components: {
    DropdownComp,
    DropdownContent,
    DropdownItem,
  },
};
</script>

<style></style>
