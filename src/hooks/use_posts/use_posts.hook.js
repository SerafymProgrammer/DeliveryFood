import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sorted_posts =useMemo( () => {

        if (sort){
            const sorted_posts = [...posts.sort((a,b)=>{
                return a[sort].localeCompare(b[sort])
            })]

            return sorted_posts
        }
        return posts;
    }, [posts, sort])

    return sorted_posts
}

export const usePosts = (posts, sort, query) => {

    const sorted_posts = useSortedPosts(posts, sort)

    const searched_and_sorted_posts =useMemo( () => {

        return sorted_posts.filter(post=>{
            return post.title.toLowerCase().includes(query)
        });
    }, [sorted_posts, query])

    return searched_and_sorted_posts
}