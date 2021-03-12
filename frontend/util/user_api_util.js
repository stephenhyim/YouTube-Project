

export const fetchUser = email => {
    debugger
    return $.ajax({
        url: `/api/users/${email}`,
        data: {user: email}
    })
}