import { navigationMenuType } from '~/types'

export const getMenuOptionsFake: () => navigationMenuType = () => {
  return [
    { name: 'MenuFromProp1', isEnabled: false },
    { name: 'MenuFromProp2', isEnabled: true },
    { name: 'MenuFromProp3', isEnabled: true },
    { name: 'MenuFromProp4', isEnabled: true },
  ]
}
