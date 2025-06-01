import { Date, Number } from "mongoose"

export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    photo: string
}
export type UpadateUserParams = {
    firstName: string
    lastName: string
    userName: string
    photo: string
}

export type CreateEventParams = {
    userId: string
    event: {
        title: string
        description: string
        location: string
        imnageUrl: string
        startDateTime: Date
        endDateTime: Date
        categoryId: string
        price: string
        isFree: boolean
        url: string
    }
    path: string
}


export type UpadatedEventParams = {
    userId: string
    event: {
        _id: string
        title: string
        imageUrl: string
        description: string
        location: string
        startDateTime: Date 
        endDateTime: Date
        categoryId: string
        price: string
        isFree: boolean
        url: string
    }
    path: string
}

export type DeleteEventParams = {
    eventId: string
    path: string
}

export type GetAllEventsParams = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetAllEventsByUserParams = {
    userId: string
    limit?: number
    page: number
}

export type GetRelatedEventsByCategoryParams = {
    categoryId: string
    eventId: string
    limit?: number
    page: number | string
}

export type Event = {
        _id: string
        title: string
        imageUrl: string
        description: string
        location: string
        startDateTime: Date 
        endDateTime: Date
        price: string
        isFree: boolean
        url: string   
        organizer: {
            _id: string
            firstName: string
            lastName: string
        }
        category: {
            _id: string
            name: string
        }
}

// ==== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
    path: string
}

// ===== ORDER PARAMS
export type CheckoutOrderParams = {
    eventTitle: string
    eventId: string
    price: string
    isFree: boolean
    buyerId: string
}

export type CreateOrderParams = {
    stripeId: string
    eventId: string
    buyerId: string
    totalAmount: string
    createdAt: Date
}

export type GetOrdersByEventParams ={
    eventId: string
    searchString: string
}

export type GetOrdersByUserParams = {
    userId: string | null
    limit?: number
    page: string | number | null
}

// ==== URL QUERY PARAMS
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParams = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}