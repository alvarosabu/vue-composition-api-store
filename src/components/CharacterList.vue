<template>
  <div class="card">
    <ul>
      <li
        class="mb-4 flex items-center"
        v-for="character in characters"
        :key="character.slug"
      >
        <img
          :src="getAvatar(character.slug)"
          :alt="character.slug"
          class="w-8 h-8 mr-4"
        />
        {{ character.name }}
      </li>
    </ul>
    <p class="mb-6 text-xs">Total: {{ totalLength }}</p>
    <button class="btn btn-valencia" @click="addCharacter()">
      Add character
    </button>
  </div>
</template>

<script lang="ts">
import { Store, useStore } from '@/store/';
import { addCharacterFeature } from '@/composable';

const methods = {
  getAvatar(slug: string) {
    return require(`../assets/img/${slug}.png`);
  }
};

export default {
  name: 'CharacterList',
  setup() {
    const store: Store = useStore();
    const { characters, totalLength } = store;
    const { addCharacter } = addCharacterFeature(store);

    return {
      characters,
      totalLength,
      addCharacter
    };
  },
  methods
};
</script>

<style></style>
