import { CarsListContext } from "@/pages/cars"
import ListItem from "./ListItem"
import { Fragment, useRef, useState, useEffect, useCallback } from "react"
import { useFetch } from "../../custom/customHooks"
import ListPreLoader from "./ListPreLoader"
import { useInView } from "react-intersection-observer"

import { gql } from "@apollo/client"
import client from "@/graphql"

let query = gql`
query Cars($orderBy:String!){
    getAllCars(orderBy:$orderBy){
        id
        brand
        year
        usage
        fuel
        transmission
        price
        model
        carImage{
            url
            isMain
        }
    }
}
`

function ListGrid({ ordering, numPosts, setNumPosts, graph, setGraph, filteredGraph }) {
    const observer = useRef()

    const { data, loading } = useFetch(ordering, setGraph)

    let hasMore = false
    // console.log(filteredGraph)
    const lastListItemRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setNumPosts((prev) => prev + 3)
            }
        })
        if (node) observer.current.observe(node)
    }, [])

    useEffect(() => {
        console.log(data)
        if (data?.getAllCars) setGraph(data.getAllCars)
    }, [data])

    if (numPosts != graph?.length && numPosts < graph?.length || numPosts != filteredGraph.length && numPosts < filteredGraph.length) {
        hasMore = true
    } else {
        hasMore = false
    }

    return (
        <div className="ml-[-15px] mr-[-15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
            {filteredGraph?.length ? filteredGraph.slice(0, numPosts + 1).map((item, indx) => {
                const isLastItem = indx === numPosts - 1;
                return (
                    <Fragment key={item.id}>
                        <ListItem {...item} forwardedRef={isLastItem ? lastListItemRef : null} />
                    </Fragment>
                )
            }) :
                graph?.length ? (graph.slice(0, numPosts).map((item, indx) => {
                    const isLastItem = indx === numPosts - 1;
                    return (
                        <Fragment key={item.id}>
                            <ListItem {...item} forwardedRef={isLastItem ? lastListItemRef : null} />
                        </Fragment>
                    )
                }))
                    :
                    <CarsListContext.Consumer>
                        {value => {
                            if (numPosts != value?.length && numPosts < value?.length) {
                                hasMore = true
                            } else {
                                hasMore = false
                            }
                            return (value ? value.slice(0, numPosts).map((item, indx) => {
                                const isLastItem = indx === numPosts - 1;
                                return (
                                    <Fragment key={item.id}>
                                        <ListItem {...item} forwardedRef={isLastItem ? lastListItemRef : null} />
                                    </Fragment>
                                )
                            }) : Array(6).fill().map(() => (<ListPreLoader />)))
                        }}
                    </CarsListContext.Consumer>
            }
        </div>
    )
}

export default ListGrid