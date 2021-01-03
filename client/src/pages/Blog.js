import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/index'
import Skeleton from 'react-loading-skeleton'

export default function Blog() {
    const { response, isLoading } = useFetch("", true)
    return (
        <div className="container">
            <div className="row">
                <h1>ARTICLES</h1>
            </div>
            {isLoading ? <div className="row"> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> <Skeleton height={80} /> </div> :
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list list--custom">
                            {response?.data.data.map((post) => {
                                return (
                                    <li className="list-item list-item--custom" key={post._id}>
                                        <Link to={`/posts/${post._id}`}> <h1 dangerouslySetInnerHTML={{ __html: post?.title }} /> </Link>
                                        {/* <p dangerouslySetInnerHTML={{ __html: post?.body}} /> */}
                                        <hr />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>}
        </div>
    )
}