import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import "../css/Group.css"
import ListHome from './ListTable.jsx'
import SaveoderAPI from '../API/SaveOder'
import TableAPI from '../API/TableAPI'
import * as XLSX from "xlsx"
// import * as MaterialTable from 'material-table'
import DataaAPI from '../API/DataaAPI'
const Home = () => {
    const [saveoder, setSaveoder] = useState([])
    const [table, setTable] = useState([])
    const [data, setData] = useState()
    const [header, setHeader] = useState([])
    const [dataNew, setDataNew] = useState([])

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data: table } = await TableAPI.getAll();
    //         const { data: saveoder } = await SaveoderAPI.getAll()
    //         setSaveoder(saveoder)
    //         setSaveoder(table)
    //     }
    //     getData()
    // }, [])
    // const convertToJson = (headers, data) => {
    //     const rows = []
    //     data.forEach(item => {
    //         let rowData = {}
    //         item.forEach((element, index) => {
    //             rowData[headers[index]] = element
    //         })
    //         rows.push(rowData)
    //     });
    //     console.log(rows)
    //     setData(data)

    // }

    const importData = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        // console.log(reader)
        reader.onload = (event) => {

            const bstr = event.target.result
            const wordBook = XLSX.read(bstr, { type: "binary" })
            const wordSheetName = wordBook.SheetNames[0]
            const wordSheet = wordBook.Sheets[wordSheetName]
            const fileData = XLSX.utils.sheet_to_json(wordSheet, { header: 1 })
            console.log(wordSheet, { header: 1 })
            fileData.splice(0, 1)
            const headers = fileData[0]
            const heads = headers.map((head, index) => ({ title: head, key: index }))
            setHeader(heads)

            const rows = []
            fileData.forEach(item => {
                let rowData = {}
                item.forEach((element, index) => {
                    rowData[headers[index]] = element
                })
                rows.push(rowData)
            });

            setDataNew(rows.filter((item, index) => index !== 0))
            setData(fileData)

        }
        reader.readAsBinaryString(file)

    }
    const submit = () => {
        // const ji = data.filter(item => item)
        // DataaAPI.add({daat:dataNew})
    //    console.log( dataNew.filter(item => delete item.STT))

        // console.log(ji)
    }
    return (
        <div className="group_home">
            <input type="file" onChange={(e) => importData(e)} />
            {data !== undefined &&
                <>

                    <button onClick={submit}>Lưu</button>

                    <table >
                        <thead></thead>
                        <tbody>
                            {data !== undefined && data.map((r, i) => (
                                <tr key={i}>
                                    {header.map((c, index) => (
                                        <td key={index}>{r[c.key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>

            }


            {/* <div className="home">
                <div className="title"> <span>bếp deli deli xin chào quý khách</span> </div>
                {/* <!-- nhóm --> *
                <div className="class_home">
                    <div className="class">
                        <div className="class_one">
                            <div className="choose ">
                                <br />
                                <span className="group pro">oder bàn</span>
                            </div>

                            <div className="oderr_n olu">
                                <hr />
                                <div className="ko">
                                    <ListHome />
                                </div>
                            </div>
                        </div>
                        <div className="class_group acti">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="menu_ql">
                                        <div className="dmql hhhhh">quản lý danh mục</div>
                                        <div className="dmql">quản lý sản phẩm</div>
                                        <div className="dmql">quản lý thực đơn</div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    {/* <!--  danh mục --> *

                                    <div className="dm hhjih">
                                        <div className="title_dm">quản lý danh mục</div>
                                        <div className="add_dm">thêm danh mục</div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="categori">
                                            {/* {await ListCate.render()} *
                                        </div>
                                    </div>
                                    {/* <!--  sản phẩm --> *
                                    <div className="dm ">
                                        <div className="title_pro">quản lý sản phẩm</div>
                                        <div className="add_pr">thêm sản phẩm</div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="products">
                                            {/* {await ListPro.render()} *
                                        </div>
                                    </div>
                                    <div className="dm ">
                                        {/* {await ListOder.render()} *
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- quản lý --> *

                <div className="menu">
                    <div className="row">
                        <div className="col-md-6 jo ">
                            <div className="menu_group aacc">quản lý ca</div>
                        </div>
                        <div className="col-md-6">
                            <div className="case_management ">quản lý riêng</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home