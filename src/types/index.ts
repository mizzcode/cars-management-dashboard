export type User = {
    id: number
    email: string
    name: string
    role: string
}

export type Car = {
    id: string
    plate: string
    manufacture: string
    model: string
    image: string
    rentPerDay: number
    capacity: number
    description: string
    availableAt: Date
    transmission: string
    available: boolean
    type: string
    year: number
    options: string
    specs: string
    created_by: string
    updated_by: string
}

export type hero = {
    title: string
    content: string
    hiddenNavLink: boolean
    imageUrl: string
}
