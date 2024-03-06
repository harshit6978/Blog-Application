export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'Loading.....',
        message:'data is being loaded,please wait'
    },
    success:{
        title:'Succcess',
        message:'data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server '
    },
    requestFailure:{
        title:'error',
        message:'An error occured while parsing request data'
    },
    networkError:{
        title:'error',
        message:'unable to connect with the server. please check internet connectivity ans try again later'
    },
}

export const SERVICE_URL={
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'create',method:'POST'},
    getAllPosts:{url:'/posts', method:'GET',params:true},
    getPostById:{url:'post', method:'GET',query:true},
    updatePost:{url:'update',method:'PUT', query:true},
    deletePost:{url:'delete',method:'DELETE',query:true},
    newComment:{url:'/comment/new',method:'POST'},
    getAllComments:{url:'comments',method:'GET',query:true},
    deleteComment:{url:'comment/delete',method:'DELETE',query:true},
}

