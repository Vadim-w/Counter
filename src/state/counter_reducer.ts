import {StateType} from "../AppRedux";

type ActionTypes =
    AddCounterActionType
    | resetCounterActionType
    | applySettingsActionType
    | changeMaxValueActionType
    | changeStartValueActionType

let initialState: StateType = {
    counter: 0,
    startValue: "0",
    maxValue: "1",
    error: false,
    settingsOn: false
}

export const counterReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "RESET_COUNTER":
            return {
                ...state,
                counter: 0
            }
        case "APPLY_SETTINGS":
            return {
                ...state,
                counter: +(action.startValue),
                maxValue: action.maxValue,
                settingsOn: true
            }
        case "CHANGE_MAX_VALUE":
            if (+(action.value) < 0 || +(action.startValue) >= +(action.value)) {
                return {
                    ...state,
                    error: true,
                    settingsOn: true,
                }
            }
            else {
                return {
                    ...state,
                    error: false,
                    maxValue: action.value,
                    settingsOn: false
                }
            }
        case "CHANGE_START_VALUE":
            if (+(action.value) < 0 || +(action.value) >= +(action.maxValue)) {
                return {
                    ...state,
                    error: true,
                    settingsOn: true
                }
            }
            else {
                return {
                    ...state,
                    error: false,
                    startValue: action.value,
                    settingsOn: false,
                }
            }
        default:
            return state
    }
}


 type AddCounterActionType = {
    type: "ADD_COUNTER"
}
export const addCounterAC = (): AddCounterActionType => {
    return {type: "ADD_COUNTER"}
}

 type resetCounterActionType = {
    type: "RESET_COUNTER"
}
export const resetCounterAC = (): resetCounterActionType => {
    return {type: "RESET_COUNTER"}
}

 type applySettingsActionType = {
    type: "APPLY_SETTINGS"
    startValue: string
    maxValue: string

}
export const applySettingsAC = (startValue: string, maxValue: string): applySettingsActionType => {
    return {type: "APPLY_SETTINGS", startValue, maxValue}
}

 type changeMaxValueActionType = {
    type: "CHANGE_MAX_VALUE"
    value: string
    startValue: string
}
export const changeMaxValueAC = (value: string, startValue: string): changeMaxValueActionType => {
    return {type: "CHANGE_MAX_VALUE", value, startValue}
}

 type changeStartValueActionType = {
    type: "CHANGE_START_VALUE"
    value: string
    maxValue: string
}
export const changeStartValueAC = (value: string, maxValue: string): changeStartValueActionType => {
    return {type: "CHANGE_START_VALUE", value, maxValue}
}
