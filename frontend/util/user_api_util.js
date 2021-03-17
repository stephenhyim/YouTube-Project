

export const fetchUser = userId => {
    debugger
    return $.ajax({
        url: `/api/users/${userId}`,
    })
}