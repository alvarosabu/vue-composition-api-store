import { Store } from '@/store';

export function addCharacterFeature(store: Store) {
  function addCharacter() {
    store.addCharacter({
      id: '4',
      name: 'Pikachu',
      slug: 'pikachu',
      active: true
    });
  }
  return { addCharacter };
}
