import ListHeader from "./header/ListHeader"
import ListFilters from "./filters/ListFilters"
import ListItems from "./items/ListItems"
import { useState } from "react"


function CarsListComonent({ graphData }) {
  const [graph, setGraph] = useState(graphData)
  const [filteredGraph, setFilteredGraph] = useState([])
  const [numPosts, setNumPosts] = useState(3);

  return (
    <section className='xl:w-[1170px] mx-auto px-4 relative mb-8 pt-[80px] sm:pt-[100px] md:pt-[140px] lg:pt-[170px]'>
      <ListHeader />
      <div className="flex relative">
        <ListFilters numPosts={numPosts} graph={graph} setGraph={setGraph} filteredGraph={filteredGraph} setFilteredGraph={setFilteredGraph} />
        <ListItems numPosts={numPosts} setNumPosts={setNumPosts} graph={graph} setGraph={setGraph} filteredGraph={filteredGraph} setFilteredGraph={setFilteredGraph} />
      </div>
    </section>
  )
}

export default CarsListComonent