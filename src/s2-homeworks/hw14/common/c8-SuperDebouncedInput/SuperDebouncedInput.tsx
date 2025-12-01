import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode, useRef, useState} from 'react'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
} // илм экспортировать тип SuperInputTextPropsType
    & { // плюс специальный пропс SuperPagination
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)


    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const onChangeTextCallback = (value: string) => {
        onChangeText?.(value)    // было изначально раскомменчено

        if (onDebouncedChange) {
            // делает студент
            // console.log(value)
            // console.log(onDebouncedChange)
            // остановить предыдущий таймер
            // запустить новый на 1500ms, в котором вызовется функция

            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }

            // запустить новый
            timerRef.current = setTimeout(() => {
                onDebouncedChange(value)
            }, 1500)



            // let timer = setTimeout(() => {
            //     onDebouncedChange(value)
            //     console.log(value)
            //     console.log('11111')
            // }, 1500)

            // if(timer){
            //     clearTimeout(timer)
            // }
        }
    }

    return (
        <SuperInputText onChangeText={onChangeTextCallback} {...restProps}/>
    )
}

export default SuperDebouncedInput
