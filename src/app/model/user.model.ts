export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string
    },
    phone: string,
    website: string,
    company: {
        name: string
    }
}
