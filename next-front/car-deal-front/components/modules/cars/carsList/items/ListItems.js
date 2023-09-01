import ListPaginator from "./ListPaginator"
import ListGrid from "./utils/ListGrid"
import ListOrdering from "./ListOrderingSection"
import { useState } from 'react'


function ListItems({ graph, setGraph, filteredGraph, numPosts, setNumPosts }) {
    const [ordering, setOrdering] = useState("انتخاب کنید")

    return (
        <main className="main content w-full lg:w-3/4 px-3">
            <div className="list">
                <ListOrdering ordering={ordering} setOrdering={setOrdering} />
                <ListGrid ordering={ordering} numPosts={numPosts} setNumPosts={setNumPosts} graph={graph} setGraph={setGraph} filteredGraph={filteredGraph} />
            </div>
            {/* <ListPaginator /> */}
        </main>
    )
}

export default ListItems