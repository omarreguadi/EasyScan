import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/index'
import Skeleton from 'react-loading-skeleton'

export default function Blog() {
    const { response, isLoading } = useFetch("", true)
    return (
        <div className="container">
            <div className="row text-center pt-5">
                <h1> BLOG</h1>
            </div>
            {isLoading ? <div className="row"> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> </div> :
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list list--custom">
                            {response?.data.data.map((post) => {
                                return (
                                    <li className="list-item list-item--custom" key={post._id}>
                                        <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
                                         <p dangerouslySetInnerHTML={{ __html: post?.body}} />
                                <Link className="text-center" to={`/posts/${post._id}`}> <p> Lire L'article </p></Link>
                                        <hr/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>}
        </div>
    )
}