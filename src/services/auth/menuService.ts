import { navigationMenuType } from '~/types'

// @ts-ignore
export const getMenuOptionsFake: () => navigationMenuType = () => {
  return [
    { name: 'MenuFromProp1', isEnabled: true },
    { name: 'MenuFromProp2', isEnabled: true },
    { name: 'MenuFromProp3', isEnabled: true },
    { name: 'MenuFromProp4', isEnabled: true },
  ]
}
