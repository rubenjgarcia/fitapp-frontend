import { combineReducers } from '@reduxjs/toolkit'
import reducers, { SLICE_NAME, ExerciseListState } from './exerciseListSlice'
import { useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '@/store'

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: ExerciseListState
        }
    }
> = useSelector

export * from './exerciseListSlice'
export { useAppDispatch } from '@/store'
export default reducer
