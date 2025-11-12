export type ThemeType = {
    themeId: number
}

const initState: ThemeType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeAction): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeAction => ({type: 'SET_THEME_ID', id: id})

type ThemeAction = {
    type: 'SET_THEME_ID',
    id: number
}