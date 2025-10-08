import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: 18 }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state].sort((a, b) => {
                return action.payload === 'up'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            })
            return sortedState


            //return state // need to fix
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
