

export const fetchUser = email => {
    debugger
    return $.ajax({
        url: `/api/users`,
        data: {email}
    })
}