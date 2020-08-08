import {
  reactive,
  computed,
  readonly,
  provide,
  inject,
  DeepReadonly
} from 'vue';
import { Character } from './character';
import { CHARACTERS } from './mock.data';

export interface State {
  characters: Character[];
}

export interface Store {
  state: State;
  characters: Character[];
  totalLength: number;
  addCharacter?: any;
  removeCharacter?: any;
}

const state: State = reactive({
  characters: CHARACTERS
});

export const StateSymbol = Symbol('Character Store');

function addCharacter(character: Character): void {
  state.characters.push(character);
}

function removeCharacter(id: string): void {
  state.characters = state.characters.filter(character => character.id !== id);
}

const totalLength = computed(() => state.characters.length);
const characters = computed(() => state.characters);

const store: DeepReadonly<Store> = readonly({
  state,
  totalLength,
  characters,
  addCharacter,
  removeCharacter
});

export function provideStore() {
  provide(StateSymbol, store);
}

export function useStore() {
  const store = inject(StateSymbol);
  if (!store) {
    // throw error, no store provided
  }
  return store as Store;
}
