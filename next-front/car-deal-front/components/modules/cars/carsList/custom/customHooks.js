import { useEffect, useState, useRef } from "react"


export const useFetch = (ordering, setGraph) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetcher = async () => {
            if (ordering.value) {
                try {
                    setIsLoading((prev) => !prev)
                    const res = await fetch("/api/cars/sort-by", {
                        method: "POST",
                        body: JSON.stringify(ordering),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    const data = await res.json()
                    // setGraph(data.getAllCars)
                    setIsLoading((prev) => !prev)
                    setData(data.data)
                } catch (error) {
                    return
                }
            }
        }
        fetcher()
    }, [ordering])
    return {
        data, loading: isLoading
    }
}

export const useFilter = (filters, graph, setGraph, gotClicked) => {
    const [filteredGraph, setFilteredGraph] = useState([])
    const fileNameBackUp = useRef('')
    const [yearTo, setYearTo] = useState('')
    const [yearFrom, setYearFrom] = useState('')

    useEffect(() => {
        let finalArray = []
        const fetcher = async () => {
            const f = Object.keys(filters)
            f.forEach((item) => {
                fileNameBackUp.current = item

                if (item == "yearFrom") {
                    setYearFrom(+filters[item])
                }
                if (item == "yearTo") {
                    setYearTo(+filters[item])
                }

                if (yearFrom && yearTo) {
                    const len = +(+yearTo - +yearFrom)
                    for (let index = yearFrom; index < yearFrom + len; index++) {
                        const filteredGraph = graph.filter((datum) => {
                            return datum["year"] == index ? true : false
                        })
                        finalArray.push(filteredGraph)
                    }
                } else {
                    const filteredGraph = graph.filter((datum) => {
                        const x = item.split('-')[0]
                        if (x && x == "fuel" || x == "transmission") {
                            item = x
                        }
                        if (typeof datum[item] == "string" && typeof filters[item] == "string") {
                            datum[item] = datum[item].toLowerCase();
                            filters[item] = filters[fileNameBackUp.current].toLowerCase();
                        }
                        return datum[item] == filters[fileNameBackUp.current] ? true : false
                    })
                    finalArray.push(filteredGraph)
                }
            })

            let contArray = []

            finalArray.forEach((arr, indx) => {
                contArray.push(...arr)
                const filteredContArray = [...new Set(contArray)]
                contArray = filteredContArray.reverse()
            })

            setFilteredGraph(contArray)
            if (gotClicked && contArray.length) {
                setGraph(contArray)
            }
            // console.log(contArray)
            if (gotClicked && contArray.length == 0) setGraph([])
        }
        fetcher()
    }, [filters, gotClicked])

}