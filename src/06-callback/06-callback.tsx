import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("kuku delete", event.currentTarget)
    }

    const saveUser = () => {
        console.log("kuku save")
    }

    const onNameChange = () => {
        console.log("kuku change")
    }

    const onFocus = () => {
        console.log("kuku focus")
    }

    const onBlur = () => {
        console.log("kuku blur")
    }

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }


    return (
        <div>
            <textarea
                onChange={onNameChange}
                onFocus={onFocus}
                onBlur={onBlur}>
                Dimych
            </textarea>
            <br/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
            <br/><br/>
            <input onChange={onChange} />
        </div>
    )
}

