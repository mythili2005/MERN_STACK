async function likeCode(flag) {
    return new Promise((like,dislike)=>{
        if(flag)
            like("Liked the post Successfully.")
        else
            dislike("Disliked the post Successfully.")
    })
}

async function commentCode(flag) {
    return new Promise((commentPosted,commentDeleted)=>{
        if(flag)
            commentPosted("Comment posted Successfully in the post.")
        else
            commentDeleted("Comment deleted Successfully in the post.")
    })
}


async function createPost(){
    var flag = 1;
    var post = new Promise((cPost,dPost)=>{
        if(flag)
            cPost("Post Created Successfully")
        else
            dPost("Post deleted Successfully")
    })
    var [posts,comment,like] = await Promise.allSettled([post,commentCode(flag),likeCode(flag)])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost();