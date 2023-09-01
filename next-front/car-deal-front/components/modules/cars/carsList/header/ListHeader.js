import Breadcrumb from "../../car/Breadcrumb"

function ListHeader() {
    return (
        <div className="flex flex-col lg:flex-row items-center py-5">
            <Breadcrumb/>
            {/* <h2 className="m ld:mr-[18%]">لیست خودروها</h2> */}
        </div>
    )
}

export default ListHeader