import { useEffect, useState } from 'react';
import NewsFeed from '../../public/assests/NewsApi.json';
import Image from 'next/image';
import { inter, montserrat, outfit } from './_lib/fonts';

type Feeds = {
    cattype : "all" | "BTC" | "ETH" | "XRP" | "DOGE" | "SHI",
    postno : number
}

const NewsFeeds = ({cattype, postno} : Feeds)=>{

    const [posts, setPosts] = useState<any[]>([]);
    const [noPosts, setNoPosts] = useState<boolean>(false);

    useEffect(()=>{
        if(cattype == "all"){
            setPosts(NewsFeed.slice(0, postno));
            setNoPosts(false)
        }else if(cattype == "BTC"){
            const filtered = NewsFeed.filter(post => post.coin.includes(cattype));
            setPosts(filtered.slice(0, postno));
            setNoPosts(false)
        }else if(cattype == "ETH"){
            const filtered = NewsFeed.filter(post => post.coin.includes(cattype));
            setPosts(filtered.slice(0, postno));
            setNoPosts(false)
        }else if(cattype == "XRP"){
            const filtered = NewsFeed.filter(post => post.coin.includes(cattype));
            setPosts(filtered.slice(0, postno));
            setNoPosts(false)
        }else if(cattype == "DOGE"){
            const filtered = NewsFeed.filter(post => post.coin.includes(cattype));
            setPosts(filtered.slice(0, postno));
            setNoPosts(false)
        }else{
            setNoPosts(true)
        }

    }, [])
    
    return(
        <>
            {   posts.length > 0 ? 
                    (
                        posts.map((post, index) => (
                            <a href={post.link} target="_blank" key={index} className={`group outline-none focus:outline-none hover:outline-none [&:last-child]:mb-[0] [&:last-child]:pb-[0] [&:last-child]:border-b-[0] w-full pb-[20px] mb-[20px] border-b-[1px] border-solid border-[#6e6668] flex items-center justify-start flex-wrap`}>
                                <div className="w-[35%] rounded-[5px] overflow-hidden">
                                    <Image
                                        src={post.image_url}
                                        alt={post.title}
                                        width={150}
                                        height={250}
                                        className="w-full h-auto object-cover group-hover:scale-121 transition-all duration-[0.5s] ease-in-out"
                                    />
                                </div>
                                <div className="w-[65%] pl-[10px]">
                                    <h3 className={`${outfit.className} group-hover:text-[var(--themecolor)] line-clamp-2 text-ellipsis overflow-hidden font-normal text-sm text-muted`}>{post.title}</h3>
                                </div>
                            </a>
                        )
                    )) : (
                        noPosts && <p>Nothing Here</p>
                    )
            }
        </>
    )
}

export default NewsFeeds;