export default function errorMessage(error) {
    return error.response.data.message
        .map(m => {
            return m.property;
        })
        .join(", ");
}