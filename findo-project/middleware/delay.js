export default ({ isServer }) => {
    if ( isServer ) return // Don't use the middleware on server-side
    return new Promise((resolve) => {
        setTimeout(resolve, 300) // Add delay
    })
}