import {FETCH_BUTTON_CLICKED} from './Types'
export const fetchPosts=()=>{
    return{
        type:FETCH_BUTTON_CLICKED,
        payload:[
            {
                userId:1,
                id:1,
                title:'AAAAAAAAAAAAA',
                body:'AAAAAAAAAAAA AAAAA AAAAAAAAAAAAA AA AAAAAAAAAAAAAA'
            },
            {
                userId:2,
                id:2,
                title:'BBBBBBBBBBBBB',
                body:'BBB BBBBBBBB BBBBBBBBBBBBBBBB BBBBBBBBBBBBBBBBBBBBBBBBBB BBBBBBBBBBBB'
            },
            {
                userId:3,
                id:3,
                title:'CCCCCCCCCCCCCC',
                body:'CCC CCCCCCCCCCC CCCCCCCCCCCC CCCCCCCCCCCCC CCCCCCCCCCCC CCCCCCCCCCC '
            },
            {
                userId:4,
                id:4,
                title:'DDDDDDDDDDDDD',
                body:'DDD DDDDDDDD DDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDD DD'
            },
        ]
    }
}










// import {FETCH_BUTTON_CLICKED} from './Types'
// export const fetchPosts=(posts)=>{
//     return{
//         type:FETCH_BUTTON_CLICKED,
//         payload:posts
//     }
// }