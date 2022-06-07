import React from 'react'

const baseUrl = 'http://127.0.0.1:8000/api'
export async function UseHooks(query) {
    const req = await fetch(baseUrl + query);
    
    return req.status === 200 && 'json' in req ? await req.json():[]
}
