const ADD_ACTIVE_HOME_LINK = 'ADD_ACTIVE_HOME_LINK';
const ADD_ACTIVE_BLOCKS_LINK = 'ADD_ACTIVE_BLOCKS_LINK';
const ADD_ACTIVE_FORUM_LINK = 'ADD_ACTIVE_FORUM_LINK';
const ADD_ACTIVE_CHAT_LINK = 'ADD_ACTIVE_CHAT_LINK';
const ADD_ACTIVE_SHOP_LINK = 'ADD_ACTIVE_SHOP_LINK';


let initialState = {
    home: {style: 'active', link: '/'},
    blocks: {style: 'unActive', link: '/blocks'},
    forum: {style: 'unActive', link: '/forum'},
    chat: {style: 'unActive', link: '/chat'},
    shop: {style: 'unActive', link: '/shop'},
}

const headerReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.home = {...state.home}
    stateCopy.blocks = {...state.blocks}
    stateCopy.forum = {...state.forum}
    stateCopy.chat = {...state.chat}
    stateCopy.shop = {...state.shop}

    switch (action.type) {
        case ADD_ACTIVE_HOME_LINK: {
            stateCopy.home.style = 'active';
            stateCopy.blocks.style = 'unActive';
            stateCopy.forum.style = 'unActive';
            stateCopy.chat.style = 'unActive';
            stateCopy.shop.style = 'unActive';
            return stateCopy
        }
        case ADD_ACTIVE_BLOCKS_LINK: {
            stateCopy.home.style = 'unActive';
            stateCopy.blocks.style = 'active';
            stateCopy.forum.style = 'unActive';
            stateCopy.chat.style = 'unActive';
            stateCopy.shop.style = 'unActive';
            return stateCopy
        }
        case ADD_ACTIVE_FORUM_LINK: {
            stateCopy.home.style = 'unActive';
            stateCopy.blocks.style = 'unActive';
            stateCopy.forum.style = 'active';
            stateCopy.chat.style = 'unActive';
            stateCopy.shop.style = 'unActive';
            return stateCopy
        }
        case ADD_ACTIVE_CHAT_LINK: {
            stateCopy.home.style = 'unActive';
            stateCopy.blocks.style = 'unActive';
            stateCopy.forum.style = 'unActive';
            stateCopy.chat.style = 'active';
            stateCopy.shop.style = 'unActive';
            return stateCopy
        }
        case ADD_ACTIVE_SHOP_LINK: {
            stateCopy.home.style = 'unActive';
            stateCopy.blocks.style = 'unActive';
            stateCopy.forum.style = 'unActive';
            stateCopy.chat.style = 'unActive';
            stateCopy.shop.style = 'active';
            return stateCopy
        }
        default: {
            return state
        }

    }
}

export const addActiveHomeLinkActionCreator = () => {
    return {type: ADD_ACTIVE_HOME_LINK}
}
export const addActiveBlocksLinkActionCreator = () => {
    return {type: ADD_ACTIVE_BLOCKS_LINK}
}
export const addActiveForumLinkActionCreator = () => {
    return {type: ADD_ACTIVE_FORUM_LINK}
}
export const addActiveChatLinkActionCreator = () => {
    return {type: ADD_ACTIVE_CHAT_LINK}
}
export const addActiveShopLinkActionCreator = () => {
    return {type: ADD_ACTIVE_SHOP_LINK}
}



export default headerReducer;