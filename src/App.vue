<template>
  <div id="app">
    <Toolbar />
    <div class="container page">
      <CharacterList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toolbar from '@/components/Toolbar.vue';
import CharacterList from '@/components/CharacterList.vue';
import { provideStore } from './store';

const components = {
  Toolbar,
  CharacterList
};
export default defineComponent({
  name: 'App',
  components,
  setup() {
    provideStore();
  }
});
</script>

<style></style>
