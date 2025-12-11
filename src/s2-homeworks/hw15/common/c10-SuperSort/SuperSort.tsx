import React from 'react'
import greyUp from './../../img/greyUp.png'
import greyDown from './../../img/greyDown.png'
import blackUP from './../../img/blackUp.png'
import blackDown from './../../img/blackDown.png'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'



export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    else return down               //  удоволетворил тесты)
    //return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {

        onChange(pureChange(sort, down, up))
    }

    // const icon2 = sort === down
    //     ? downIcon2
    //     : sort === up
    //         ? upIcon2
    //         : noneIcon2



    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon} /!*а это убрать*!/*/}

            {
                sort === down
                ? <img src={blackDown} alt="" style={{ display: "inline-block" }}/>
                : sort === up
                    ? <img src={blackUP} style={{ display: "inline-block" }}/>
                    : <><img src={greyUp} style={{ display: "inline-block" }}/>
                            <img src={greyDown} style={{ display: "inline-block" }}/>
                        </>
            }



        </span>
    )
}

export default SuperSort
