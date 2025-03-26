const useState = (init) => {
    const initialState = init
    let state = initialState
    const setState = (newState) => {
        // 调用 React.render 重新渲染
        state = newState
    }
    return [state, setState]
}