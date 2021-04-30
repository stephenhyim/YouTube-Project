export const fetchResults = searchBody => {
    return $.ajax({
        url: `/api/search`,
        method: "GET",
        data: { searchBody }
    })
}