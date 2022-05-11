export const get_page_count = (total, limit) => {
    return Math.ceil(total/limit)
}